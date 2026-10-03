// CI 用：对比上一次提交与本次提交的构建结果，找出内容有变化的页面，
// 等 Cloudflare 部署生效后，只把这些页面提交给 IndexNow。
// 用法：node scripts/indexnow-changed.mjs <旧 dist 目录> <新 dist 目录>
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { site } from "../src/data/site.mjs";

const [oldDir, newDir] = process.argv.slice(2);

function listPages(dir, base = dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listPages(full, base);
    return entry.name === "index.html" ? [path.relative(base, full)] : [];
  });
}

const changed = listPages(newDir).filter((rel) => {
  const oldFile = path.join(oldDir, rel);
  return !fs.existsSync(oldFile) || fs.readFileSync(oldFile, "utf8") !== fs.readFileSync(path.join(newDir, rel), "utf8");
});

if (!changed.length) {
  console.log("IndexNow: no page content changed, skip.");
  process.exit(0);
}

const toUrl = (rel) => {
  const dir = path.dirname(rel).split(path.sep).join("/");
  return `${site.origin}/${dir === "." ? "" : `${dir}/`}`;
};
const urls = changed.map(toUrl);
console.log(`IndexNow: ${urls.length} changed pages\n${urls.join("\n")}`);

// 轮询第一个变化页面，线上内容与本次构建一致即视为部署完成（最多等 15 分钟）
const probeUrl = urls[0];
const expected = fs.readFileSync(path.join(newDir, changed[0]), "utf8");
const deadline = Date.now() + 15 * 60 * 1000;
let live = false;
while (Date.now() < deadline) {
  try {
    const res = await fetch(`${probeUrl}?indexnow=${Date.now()}`, { cache: "no-store" });
    if (res.ok && (await res.text()) === expected) {
      live = true;
      break;
    }
  } catch {}
  await new Promise((resolve) => setTimeout(resolve, 20000));
}
if (!live) {
  console.error(`IndexNow: ${probeUrl} not updated after 15 minutes, abort.`);
  process.exit(1);
}

execFileSync("node", [path.join("scripts", "indexnow.mjs"), ...urls], { stdio: "inherit" });
