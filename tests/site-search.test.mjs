import assert from "node:assert/strict";
import { test } from "node:test";
import { createSiteSearch } from "../src/assets/site-search.js";

const entry = (path, title, options = {}) => ({
  path, title, locale: "en", description: "", type: "calculator", keywords: [], ...options
});

const find = createSiteSearch([
  entry("/garage/", "Epoxy Garage Floor Cost Calculator", { keywords: ["garage quote"] }),
  entry("/river/", "River Table Epoxy Calculator"),
  entry("/river-guide/", "River Table Epoxy Cost", { type: "guide" }),
  entry("/coverage/", "Epoxy Floor Coverage Calculator"),
  entry("/pt-br/uso/", "Consumo de resina epóxi por m²", { locale: "pt-BR", description: "Veja o consumo de 1 kg." }),
  entry("/es/uso/", "Consumo de resina epoxi por m²", { locale: "es" })
]);

test("search handles prefixes, missing letters and adjacent swaps", () => {
  assert.equal(find("garag cost")[0].path, "/garage/");
  assert.equal(find("river tabel")[0].path, "/river/");
  assert.equal(find("floor covrage")[0].path, "/coverage/");
  assert.equal(find("garage quote")[0].path, "/garage/");
});

test("exact title phrases outrank typos and every query word must match", () => {
  assert.equal(find("river table epoxy cost")[0].path, "/river-guide/");
  assert.deepEqual(find("river zzzzyyyy"), []);
  assert.deepEqual(find("r"), []);
  assert.deepEqual(find("rivr", "en", 1).map(({ path }) => path), ["/river/"]);
});

test("search normalizes accents and unit forms while preferring the current language", () => {
  assert.equal(find("resina epoxi m2", "pt-BR")[0].path, "/pt-br/uso/");
  assert.equal(find("resina epóxi m^2", "es")[0].path, "/es/uso/");
  assert.equal(find("resina 1kg", "en")[0].path, "/pt-br/uso/");
  assert.ok(find("resina epoxi m²", "en").some(({ locale }) => locale === "es"));
});
