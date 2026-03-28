import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
  const cleaned = (urlPath || "/").split("?")[0];
  const tentative = cleaned.endsWith("/") ? `${cleaned}index.html` : cleaned;
  const localPath = path.join(distRoot, tentative);
  if (fs.existsSync(localPath) && fs.statSync(localPath).isFile()) return localPath;
  const withIndex = path.join(distRoot, cleaned, "index.html");
  if (fs.existsSync(withIndex)) return withIndex;
  return path.join(distRoot, "index.html");
}

const server = http.createServer((req, res) => {
  const filePath = resolveRequestPath(req.url);
  const ext = path.extname(filePath);
  const contentType = contentTypes[ext] || "application/octet-stream";

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, {
      "Content-Type": contentType,
      "Referrer-Policy": "strict-origin-when-cross-origin"
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
