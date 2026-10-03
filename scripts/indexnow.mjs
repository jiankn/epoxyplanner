// 向 IndexNow（Bing、Yandex 等共享）提交站点 URL。
// 用法：npm run indexnow                 提交 sitemap 里的全部 URL
//       npm run indexnow -- <url> <url>   只提交指定 URL
import { INDEXNOW_KEY } from "./indexnow-key.mjs";
import { site, pages } from "../src/data/site.mjs";

const host = new URL(site.origin).host;
const args = process.argv.slice(2);
const urlList = args.length
  ? args
  : pages.map((page) => `${site.origin}/${page.slug ? `${page.slug}/` : ""}`);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${site.origin}/${INDEXNOW_KEY}.txt`,
    urlList
  })
});

console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${response.status}`);
const text = await response.text();
if (text) console.log(text);
if (!response.ok && response.status !== 202) process.exit(1);
