import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { site, pages } from "../src/data/site.mjs";
import { renderPage, renderRobots, renderSitemapIndex, renderSitemapSection } from "../src/templates/render.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(target, contents) {
  ensureDir(path.dirname(target));
  fs.writeFileSync(target, contents, "utf8");
}

function copyFile(source, target) {
  ensureDir(path.dirname(target));
  fs.copyFileSync(source, target);
}

function urlForPath(slug = "") {
  return slug ? `${site.origin}/${slug}/` : `${site.origin}/`;
}

function buildSitemaps() {
  const calculatorPages = pages.filter((page) => page.category === "calculator" || page.category === "converter");
  const guidePages = pages.filter((page) => page.category === "guide");
  const sitePages = pages.filter((page) => page.category === "info" || page.slug === "");

  writeFile(path.join(distRoot, "sitemap-calculators.xml"), renderSitemapSection(calculatorPages, site));
  writeFile(path.join(distRoot, "sitemap-guides.xml"), renderSitemapSection(guidePages, site));
  writeFile(path.join(distRoot, "sitemap-site.xml"), renderSitemapSection(sitePages, site));
  writeFile(
    path.join(distRoot, "sitemap-index.xml"),
    renderSitemapIndex([
      `${site.origin}/sitemap-calculators.xml`,
      `${site.origin}/sitemap-guides.xml`,
      `${site.origin}/sitemap-site.xml`
    ])
  );
  writeFile(path.join(distRoot, "sitemap.xml"), renderSitemapIndex([`${site.origin}/sitemap-index.xml`]));
}

function buildPages() {
  const pageMap = new Map(pages.map((page) => [page.slug, page]));

  for (const page of pages) {
    const html = renderPage(page, { site, pages, pageMap, urlForPath });
    const outputDir = page.slug ? path.join(distRoot, page.slug) : distRoot;
    writeFile(path.join(outputDir, "index.html"), html);
  }
}

function buildAssets() {
  copyFile(path.join(projectRoot, "src", "assets", "site.css"), path.join(distRoot, "assets", "site.css"));
  copyFile(path.join(projectRoot, "src", "assets", "site.js"), path.join(distRoot, "assets", "site.js"));
  copyFile(path.join(projectRoot, "src", "assets", "calculator.js"), path.join(distRoot, "assets", "calculator.js"));
  copyFile(path.join(projectRoot, "src", "assets", "favicon.svg"), path.join(distRoot, "assets", "favicon.svg"));
  copyFile(path.join(projectRoot, "src", "assets", "logo.svg"), path.join(distRoot, "assets", "logo.svg"));
}

function main() {
  fs.rmSync(distRoot, { recursive: true, force: true });
  ensureDir(distRoot);
  buildAssets();
  buildPages();
  buildSitemaps();
  writeFile(path.join(distRoot, "robots.txt"), renderRobots(site));
  writeFile(path.join(distRoot, ".nojekyll"), "");
  console.log(`Built ${pages.length} pages into ${distRoot}`);
}

main();
