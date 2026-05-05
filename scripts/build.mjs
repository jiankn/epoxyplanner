import fs from "node:fs";
import path from "node:path";
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

function buildPages({ site, pages, renderPage }) {
  const pageMap = new Map(pages.map((page) => [page.slug, page]));

  for (const page of pages) {
    const html = renderPage(page, { site, pages, pageMap, urlForPath: (slug = "") => urlForPath(site, slug) });
    const outputDir = page.slug ? path.join(distRoot, page.slug) : distRoot;
    writeFile(path.join(outputDir, "index.html"), html);
  }
}

function buildAssets() {
  copyFile(path.join(projectRoot, "src", "assets", "site.css"), path.join(distRoot, "assets", "site.css"));
  copyFile(path.join(projectRoot, "src", "assets", "site.js"), path.join(distRoot, "assets", "site.js"));
  copyFile(path.join(projectRoot, "src", "assets", "calculator.js"), path.join(distRoot, "assets", "calculator.js"));
  copyFile(path.join(projectRoot, "src", "assets", "favicon.svg"), path.join(distRoot, "assets", "favicon.svg"));
  copyFile(path.join(projectRoot, "src", "assets", "favicon-32.png"), path.join(distRoot, "assets", "favicon-32.png"));
  copyFile(path.join(projectRoot, "src", "assets", "apple-touch-icon.png"), path.join(distRoot, "assets", "apple-touch-icon.png"));
  copyFile(path.join(projectRoot, "src", "assets", "logo.svg"), path.join(distRoot, "assets", "logo.svg"));
}

async function main() {
  loadDotEnv(path.join(projectRoot, ".env"));

  const [{ site, pages }, { renderPage, renderNotFound, renderRobots, renderSitemapIndex, renderSitemapSection }] = await Promise.all([
    import("../src/data/site.mjs"),
    import("../src/templates/render.mjs")
  ]);

  fs.rmSync(distRoot, { recursive: true, force: true });
  ensureDir(distRoot);
  buildAssets();
  buildPages({ site, pages, renderPage });
  buildSitemaps({ site, pages, renderSitemapIndex, renderSitemapSection });
  writeFile(path.join(distRoot, "404.html"), renderNotFound(site));
  writeFile(path.join(distRoot, "robots.txt"), renderRobots(site));
  writeFile(path.join(distRoot, ".nojekyll"), "");

  // Path-level fallback for static hosts. Cloudflare host redirects are handled by functions/_middleware.js.
  const redirectsContent = `http://epoxyplanner.com/* https://epoxyplanner.com/:splat 301
http://www.epoxyplanner.com/* https://epoxyplanner.com/:splat 301
https://www.epoxyplanner.com/* https://epoxyplanner.com/:splat 301
`;
  writeFile(path.join(distRoot, "_redirects"), redirectsContent);
  console.log(`Built ${pages.length} pages into ${distRoot}`);
}

await main();
