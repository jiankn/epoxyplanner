import test from "node:test";
import assert from "node:assert/strict";
import { onRequest } from "../functions/_middleware.js";
import { remediationRedirects, redirectPresets } from "../src/data/remediation-2026-10.mjs";

const request = url => onRequest({ request: new Request(url), next: () => new Response("content", { status: 200 }) });

test("all consolidated pages reach a live target in one redirect with their task presets", async () => {
  for (const [from, to] of Object.entries(remediationRedirects)) {
    const response = await request(`https://epoxyplanner.com/${from}/`);
    assert.equal(response.status, 301, from);
    const location = new URL(response.headers.get("location"));
    assert.equal(location.pathname, `/${to}/`);
    for (const [key, value] of Object.entries(redirectPresets[from] || {})) assert.equal(location.searchParams.get(key), value);
    assert.equal((await request(location.href)).status, 200);
  }
});

test("host and protocol normalization combine with old-path redirects and preserve other parameters", async () => {
  const response = await request("http://www.epoxyplanner.com/epoxy-calculator-metric?ref=project");
  assert.equal(response.status, 301);
  assert.equal(response.headers.get("location"), "https://epoxyplanner.com/epoxy-calculator/?ref=project&unit=metric");
});

test("missing pages return a real noindex 404 without an ad loader", async () => {
  const response = await request("https://epoxyplanner.com/missing-remediation-check/");
  assert.equal(response.status, 404);
  assert.match(response.headers.get("x-robots-tag"), /noindex/);
  assert.doesNotMatch(await response.text(), /pagead2\.googlesyndication/);
});

test("live pages normalize a missing trailing slash", async () => {
  const response = await request("https://epoxyplanner.com/resin-dice-calculator");
  assert.equal(response.status, 301);
  assert.equal(response.headers.get("location"), "https://epoxyplanner.com/resin-dice-calculator/");
});
