import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");

function loadDotEnv(filePath) {
  if (!fs.existsSync(filePath)) return;

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const match = trimmed.match(/^([\w.-]+)\s*=\s*(.*)$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    if (process.env[key]) continue;

    let value = rawValue.trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

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

function urlForPath(site, slug = "") {
  return slug ? `${site.origin}/${slug}/` : `${site.origin}/`;
}

function buildFunctionRoutes({ pages, redirects, redirectPresets, embeds }) {
  const routes = [...pages.map((page) => page.slug), ...embeds.map((embed) => embed.slug)]
    .map((slug) => (slug ? `/${slug}/` : "/"))
    .sort((a, b) => a.localeCompare(b));
  const routeList = routes.map((route) => `  ${JSON.stringify(route)}`).join(",\n");
  const redirectList = Object.entries(redirects)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([from, to]) => `  [${JSON.stringify(`/${from}/`)}, ${JSON.stringify(`/${to}/`)}]`)
    .join(",\n");
  const presetList = Object.entries(redirectPresets).map(([slug, values]) => `  [${JSON.stringify(`/${slug}/`)}, ${JSON.stringify(values)}]`).join(",\n");
  const contents = `export const HTML_ROUTES = new Set([\n${routeList}\n]);\n\nexport const REDIRECTS = new Map([\n${redirectList}\n]);\n\nexport const REDIRECT_PRESETS = new Map([\n${presetList}\n]);\n`;
  writeFile(path.join(projectRoot, "functions", "_generated-routes.js"), contents);
}

function buildSitemaps({ site, pages, renderSitemapIndex, renderSitemapSection }) {
  const calculatorPages = pages.filter((page) => page.category === "calculator" || page.category === "converter");
  const guidePages = pages.filter((page) => page.category === "guide");
  const sitePages = pages.filter((page) => page.category === "info" || page.slug === "");
  const sitemapIndex = renderSitemapIndex([
    `${site.origin}/sitemap-calculators.xml`,
    `${site.origin}/sitemap-guides.xml`,
    `${site.origin}/sitemap-site.xml`
  ]);

  writeFile(path.join(distRoot, "sitemap-calculators.xml"), renderSitemapSection(calculatorPages, site));
  writeFile(path.join(distRoot, "sitemap-guides.xml"), renderSitemapSection(guidePages, site));
  writeFile(path.join(distRoot, "sitemap-site.xml"), renderSitemapSection(sitePages, site));
  writeFile(path.join(distRoot, "sitemap-index.xml"), sitemapIndex);
  writeFile(path.join(distRoot, "sitemap.xml"), sitemapIndex);
}

function versionAssetReferences(html, assets) {
  return html.replace(/\b(href|src)="\/assets\/([^"]+)"/g, (match, attribute, file) =>
    assets.has(file) ? `${attribute}="/assets/${assets.get(file)}"` : match);
}

function buildPages({ site, pages, renderPage, assets }) {
  const pageMap = new Map(pages.map((page) => [page.slug, page]));

  for (const page of pages) {
    const html = renderPage(page, { site, pages, pageMap, urlForPath: (slug = "") => urlForPath(site, slug) });
    const outputDir = page.slug ? path.join(distRoot, page.slug) : distRoot;
    writeFile(path.join(outputDir, "index.html"), versionAssetReferences(html, assets));
  }
}

// 嵌入版计算器：不进 sitemap，页面本身 noindex
function buildEmbeds({ site, pages, embeds, renderEmbedPage, assets }) {
  const pageMap = new Map(pages.map((page) => [page.slug, page]));
  for (const embed of embeds) {
    writeFile(path.join(distRoot, embed.slug, "index.html"), versionAssetReferences(renderEmbedPage(embed, { site, pageMap }), assets));
  }
}

function buildAssets() {
  const files = ["site.css", "site.js", "calculator.js", "planner-text.js", "floor-cost-rates.js"];
  const sources = new Map(files.map(file => [file, fs.readFileSync(path.join(projectRoot, "src", "assets", file), "utf8").replace(/\r\n/g, "\n")]));
  const hash = createHash("sha256").update("epoxy-assets-v1");
  for (const [file, contents] of sources) hash.update(file).update(contents);
  const version = hash.digest("hex").slice(0, 12);
  const assets = new Map(files.map(file => [file, file.replace(/(\.[^.]+)$/, `.${version}$1`)]));
  for (const [file, source] of sources) {
    const contents = file.endsWith(".js")
      ? source.replace(/(from\s+["']\.\/)([^"']+)(["'])/g, (match, prefix, dependency, quote) =>
          assets.has(dependency) ? `${prefix}${assets.get(dependency)}${quote}` : match)
      : source;
    writeFile(path.join(distRoot, "assets", assets.get(file)), contents);
    // Keep stable URLs available to older cached HTML and external references.
    writeFile(path.join(distRoot, "assets", file), contents);
  }
  copyFile(path.join(projectRoot, "src", "assets", "favicon.svg"), path.join(distRoot, "assets", "favicon.svg"));
  copyFile(path.join(projectRoot, "src", "assets", "favicon-32.png"), path.join(distRoot, "assets", "favicon-32.png"));
  copyFile(path.join(projectRoot, "src", "assets", "apple-touch-icon.png"), path.join(distRoot, "assets", "apple-touch-icon.png"));
  copyFile(path.join(projectRoot, "src", "assets", "logo.svg"), path.join(distRoot, "assets", "logo.svg"));
  return assets;
}

async function main() {
  loadDotEnv(path.join(projectRoot, ".env"));

  const [{ site, pages, redirects, redirectPresets }, { renderPage, renderEmbedPage, EMBEDS: embeds, renderNotFound, renderRobots, renderSitemapIndex, renderSitemapSection }] = await Promise.all([
    import("../src/data/site.mjs"),
    import("../src/templates/render.mjs")
  ]);
  const { INDEXNOW_KEY } = await import("./indexnow-key.mjs");

  fs.rmSync(distRoot, { recursive: true, force: true });
  ensureDir(distRoot);
  buildFunctionRoutes({ pages, redirects, redirectPresets, embeds });
  const assets = buildAssets();
  buildPages({ site, pages, renderPage, assets });
  buildEmbeds({ site, pages, embeds, renderEmbedPage, assets });
  buildSitemaps({ site, pages, renderSitemapIndex, renderSitemapSection });
  writeFile(path.join(distRoot, "404.html"), versionAssetReferences(renderNotFound(site), assets));
  writeFile(path.join(distRoot, "robots.txt"), renderRobots(site));
  writeFile(path.join(distRoot, "ads.txt"), "google.com, pub-3562784107542460, DIRECT, f08c47fec0942fa0\n");
  writeFile(path.join(distRoot, ".nojekyll"), "");
  // IndexNow 验证文件：Bing 等搜索引擎通过它确认 key 归属
  writeFile(path.join(distRoot, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY);

  // Path-level fallback for static hosts. Cloudflare host redirects are handled by functions/_middleware.js.
  const pageRedirects = Object.entries(redirects)
    .flatMap(([from, to]) => {
      const query = redirectPresets[from] ? `?${new URLSearchParams(redirectPresets[from])}` : "";
      return [`/${from}/ /${to}/${query} 301`, `/${from} /${to}/${query} 301`];
    })
    .join("\n");
  const redirectsContent = `http://epoxyplanner.com/* https://epoxyplanner.com/:splat 301
http://www.epoxyplanner.com/* https://epoxyplanner.com/:splat 301
https://www.epoxyplanner.com/* https://epoxyplanner.com/:splat 301
${pageRedirects}
`;
  writeFile(path.join(distRoot, "_redirects"), redirectsContent);
  console.log(`Built ${pages.length} pages into ${distRoot}`);
}

await main();
