import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { redirects, redirectPresets } from "../src/data/site.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

function resolveRequestPath(urlPath) {
  const cleaned = decodeURIComponent((urlPath || "/").split("?")[0]);
  const tentative = cleaned.endsWith("/") ? `${cleaned}index.html` : cleaned;
  const localPath = path.resolve(distRoot, `.${tentative}`);
  if (!localPath.startsWith(distRoot + path.sep)) return null;
  if (fs.existsSync(localPath) && fs.statSync(localPath).isFile()) return localPath;
  const withIndex = path.join(distRoot, cleaned, "index.html");
  if (fs.existsSync(withIndex)) return withIndex;
  return null;
}

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://localhost:${port}`);
    const slug = url.pathname.replace(/^\/+|\/+$/g, "");
    if (redirects[slug]) {
      url.pathname = `/${redirects[slug]}/`;
      for (const [name, value] of Object.entries(redirectPresets[slug] || {})) url.searchParams.set(name, value);
      res.writeHead(301, { Location: url.pathname + url.search });
      res.end();
      return;
    }
    const resolved = resolveRequestPath(url.pathname);
    if (resolved && !url.pathname.endsWith("/") && !path.extname(url.pathname)) {
      res.writeHead(301, { Location: url.pathname + "/" + url.search });
      res.end();
      return;
    }
    const filePath = resolved || path.join(distRoot, "404.html");
    const ext = path.extname(filePath);
    const contentType = contentTypes[ext] || "application/octet-stream";
    const content = fs.readFileSync(filePath);
    res.writeHead(!resolved || url.pathname === "/404.html" ? 404 : 200, {
      "Content-Type": contentType,
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Content-Security-Policy": "script-src 'self'; object-src 'none'; base-uri 'self'"
    });
    res.end(content);
  } catch {
    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    });
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Preview server running at http://localhost:${port}`);
});
