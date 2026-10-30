import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages, site, redirects, redirectPresets } from "../src/data/site.mjs";
import { calculate } from "../src/assets/calculator.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const pageMap = new Map(pages.map(page => [page.slug, page]));
const url = slug => `${site.origin}/${slug ? slug + "/" : ""}`;
const html = new Map(pages.map(page => [page.slug, fs.readFileSync(path.join(dist, page.slug, "index.html"), "utf8")]));
const issues = [];
const check = (condition, message) => { if (!condition) issues.push(message); };
const decode = value => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'");
const attr = (tag, name) => decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] || "");

for (const key of ["slug", "title", "description"]) {
  const values = pages.map(page => page[key]);
  check(new Set(values).size === values.length, `Duplicate ${key}`);
}
let forms = 0, adScripts = 0;
for (const page of pages) {
  const doc = html.get(page.slug);
  const name = page.slug || "/";
  check((doc.match(/<h1\b/g) || []).length === 1, `${name}: H1 count`);
  check(doc.includes(`<link rel="canonical" href="${url(page.slug)}"`), `${name}: canonical`);
  check(doc.includes(`<meta name="robots" content="${page.indexable === false ? "noindex, follow" : "index, follow"}"`), `${name}: robots`);
  check(!doc.includes('"@type":"SearchAction"'), `${name}: non-existent search markup`);
  for (const block of doc.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(block[1]); } catch { issues.push(`${name}: invalid JSON-LD`); }
  }
  for (const [, href] of doc.matchAll(/\bhref="([^"]*)"/g)) {
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const target = new URL(decode(href), url(page.slug));
    const slug = target.pathname.replace(/^\/+|\/+$/g, "");
    if (target.pathname.startsWith("/assets/")) {
      check(fs.existsSync(path.join(dist, target.pathname)), `${name}: missing asset ${href}`);
      if (target.pathname.endsWith(".css")) check(/\.[a-f0-9]{12}\.css$/.test(target.pathname), `${name}: stylesheet needs a content version`);
    }
    else if (!target.pathname.includes(".")) {
      check(pageMap.has(slug) || target.pathname.startsWith("/embed/"), `${name}: broken or redirected content link ${href}`);
      if (target.hash && html.has(slug)) check(html.get(slug).includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${name}: broken anchor ${href}`);
    }
  }
  for (const [, src] of doc.matchAll(/<script[^>]*\bsrc="([^"]*)"/g)) {
    if (src.startsWith("/")) {
      check(fs.existsSync(path.join(dist, src)), `${name}: missing script ${src}`);
      check(/\.[a-f0-9]{12}\.js$/.test(src), `${name}: script needs a content version`);
    }
  }
  const hasAdCode = doc.includes("pagead2.googlesyndication.com");
  if (hasAdCode) adScripts++;
  check(hasAdCode === (page.pageType !== "info" || page.slug === ""), `${name}: ad exclusion rule`);
  for (const [lang, target] of Object.entries(page.alternates || {})) {
    check(pageMap.has(target) && pageMap.get(target).indexable !== false, `${name}: invalid hreflang ${lang}`);
    if (lang !== "x-default") check(pageMap.get(target)?.alternates?.[page.locale || "en"] === page.slug, `${name}: hreflang return ${lang}`);
  }
  const form = doc.match(/<form[^>]*class="calculator-root"[^>]*>([\s\S]*?)<\/form>/);
  if (form) {
    forms++;
    const data = { locale: page.locale || "en", numberLocale: page.numberLocale || "en-US", currency: page.currency || "USD", priceUnit: page.priceUnit || "gallon" };
    for (const [tag] of form[1].matchAll(/<input\b[^>]*>/g)) {
      const name = attr(tag, "name");
      if (name) data[name] = attr(tag, "type") === "checkbox" ? /\bchecked\b/.test(tag) : attr(tag, "value");
    }
    for (const [, name, options] of form[1].matchAll(/<select[^>]*name="([^"]+)"[^>]*>([\s\S]*?)<\/select>/g)) {
      const tags = [...options.matchAll(/<option\b[^>]*>/g)].map(m => m[0]);
      data[name] = attr(tags.find(tag => /\bselected\b/.test(tag)) || tags[0], "value");
    }
    const type = attr(form[0], "data-calculator-type");
    try {
      const result = calculate(type, data);
      check(Boolean(result.primary) && !/NaN|Infinity|--/.test(result.primary), `${name}: invalid default result`);
    } catch (error) { issues.push(`${name}: default calculation: ${error.message}`); }
  }
}

const sitemapFiles = ["sitemap-calculators.xml", "sitemap-guides.xml", "sitemap-site.xml"];
const locations = sitemapFiles.flatMap(file => [...fs.readFileSync(path.join(dist, file), "utf8").matchAll(/<loc>([^<]*)<\/loc>/g)].map(m => m[1]));
const expected = pages.filter(page => page.indexable !== false && page.includeInSitemap !== false).map(page => url(page.slug));
check(new Set(locations).size === locations.length, "Duplicate sitemap URL");
check(locations.length === expected.length && expected.every(location => locations.includes(location)), "Sitemap differs from canonical indexable pages");
for (const [from, to] of Object.entries(redirects)) {
  check(!pageMap.has(from), `${from}: both redirect and page`);
  check(pageMap.has(to) && !redirects[to], `${from}: missing target or redirect chain`);
}
for (const from of Object.keys(redirectPresets)) check(Boolean(redirects[from]), `${from}: orphan redirect preset`);
for (const file of fs.readdirSync(path.join(dist, "assets")).filter(file => /\.[a-f0-9]{12}\.js$/.test(file))) {
  const script = fs.readFileSync(path.join(dist, "assets", file), "utf8");
  for (const [, dependency] of script.matchAll(/from\s+["']\.\/([^"']+)["']/g)) {
    check(/\.[a-f0-9]{12}\.js$/.test(dependency), `${file}: module dependency needs a content version`);
    check(fs.existsSync(path.join(dist, "assets", dependency)), `${file}: missing module ${dependency}`);
  }
}
check(fs.readFileSync(path.join(dist, "robots.txt"), "utf8").includes("Allow: /"), "robots must allow review access");
check(fs.readFileSync(path.join(dist, "ads.txt"), "utf8").trim() === "google.com, pub-3562784107542460, DIRECT, f08c47fec0942fa0", "ads.txt seller mismatch");
assert.equal(issues.length, 0, issues.join("\n"));
console.log(`Checked ${pages.length} pages, ${forms} working default forms, ${locations.length} sitemap URLs, ${Object.keys(redirects).length} redirects and ${adScripts} AdSense loader inclusions.`);
