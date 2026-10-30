import test from "node:test";
import assert from "node:assert/strict";
import { calculate } from "../src/assets/calculator.js";

const general = { length: 48, width: 18, depth: 1.25, wastePct: 8, pricePerGallon: 85 };
const coating = { dimensionMode: "area", surfaceArea: 10, areaUnit: "sqm", thickness: 1, thicknessUnit: "mm", coats: 1, wastePct: 10, edgePct: 0, unit: "metric", priceUnit: "liter", pricePerGallon: 28 };
const near = (actual, expected, tolerance = 1e-9) => assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} != ${expected}`);

test("imperial and metric dimensions describe the same object and cost", () => {
  const a = calculate("general", general);
  const b = calculate("general", { ...general, unit: "metric", length: 121.92, width: 45.72, depth: 3.175 });
  near(a.rawLiters, 17.69802912);
  near(a.recommendedLiters, 19.1138714496);
  near(a.recommendedLiters, b.recommendedLiters);
  near(a.projectedCost, 429.1948051948052);
});

test("negative allowances, non-finite values and fractional counts cannot produce a purchase result", () => {
  for (const patch of [{ wastePct: -110 }, { wastePct: 101 }, { width: Infinity }, { pricePerGallon: "abc" }, { count: 1.5 }, { count: 0 }, { count: "" }]) {
    assert.throws(() => calculate("general", { ...general, ...patch }));
  }
  assert.throws(() => calculate("garage-floor", { length: 20, width: 20, coverageRate: 160, coats: 1.4 }));
  assert.throws(() => calculate("general", { ...general, length: 0 }));
  assert.throws(() => calculate("general", { ...general, length: 1e308 }));
});

test("zero extra allowance is valid and a price is optional for a quantity estimate", () => {
  const r = calculate("general", { ...general, wastePct: 0, pricePerGallon: "" });
  near(r.rawLiters, r.recommendedLiters);
  assert.ok(Number.isNaN(r.projectedCost));
  assert.match(r.costText, /Add price/);
});

test("no class-based mixing ratio or two-inch lift permission is inferred", () => {
  const r = calculate("general", general);
  assert.match(r.splitText, /Enter your product/);
  assert.match(r.layersText, /Confirm product/);
  assert.equal(r.product.ratio, undefined);
});

test("confirmed volume ratios split volume; a weight ratio does not invent masses", () => {
  const r = calculate("general", { ...general, mixRatio: "3:1", ratioBasis: "volume" });
  assert.match(r.splitText, /3:1, by volume/);
  assert.doesNotMatch(r.splitText, /example/);
  const byWeight = calculate("general", { ...general, mixRatio: "2:1", ratioBasis: "weight" });
  assert.match(byWeight.splitText, /manufacturer's weight/);
  assert.throws(() => calculate("general", { ...general, mixRatio: "custom", ratioA: 0, ratioB: 1 }));
  assert.doesNotMatch(calculate("general", { ...general, mixRatio: "custom", ratioA: 1e308, ratioB: 1e308 }).splitText, /NaN|Infinity/);
});

test("one m² per mm is one liter, with allowances added once", () => {
  const r = calculate("coating", coating);
  near(r.rawLiters, 10);
  near(r.recommendedLiters, 11);
  near(r.projectedCost, 308);
  const mils = calculate("coating", { ...coating, thickness: 1000 / 25.4, thicknessUnit: "mil" });
  near(mils.rawLiters, r.rawLiters);
});

test("round and rectangular dimension mode match direct area", () => {
  const a = calculate("coating", { ...coating, unit: "imperial", dimensionMode: "dimensions", length: 72, width: 24, thickness: 0.125, thicknessUnit: "in" });
  const b = calculate("coating", { ...coating, surfaceArea: 12, areaUnit: "sqft", thickness: 0.125, thicknessUnit: "in" });
  near(a.rawLiters, b.rawLiters);
  const circle = calculate("coating", { ...coating, unit: "imperial", dimensionMode: "dimensions", shape: "round", diameter: 24, thickness: 0.125, thicknessUnit: "in" });
  near(circle.rawLiters, Math.PI * 12 ** 2 * 0.125 * 0.016387064);
});

test("label coverage uses its actual rate units and keeps seal coat separate", () => {
  const data = { ...coating, surfaceArea: 20, coverageMethod: "label", coverageRate: 8, coverageUnit: "sqm-liter", coats: 2, wastePct: 7 };
  const r = calculate("coating", data);
  near(r.rawLiters, 5);
  near(r.recommendedLiters, 5.35);
  const seal = calculate("seal-coat", { ...data, surfaceArea: 16, areaUnit: "sqft", coverageRate: 42.7, coverageUnit: "sqft-gallon", coats: 1, wastePct: 0 });
  near(seal.rawLiters, 16 / 42.7 * 3.785411784);
});

test("area cost provides a unit price and total, including separately entered extra costs", () => {
  const r = calculate("area-cost", { ...coating, otherCost: 5, locale: "pt-BR", currency: "BRL", numberLocale: "pt-BR" });
  near(r.budgetCost, 358);
  near(r.costPerArea, 35.8);
  assert.match(r.primary, /R\$.*m²/);
  const squareFeet = calculate("area-cost", { ...coating, surfaceArea: 10 / 0.09290304, areaUnit: "sqft", otherCost: 5 * 0.09290304 });
  near(squareFeet.budgetCost, r.budgetCost);
});

test("whole kits round up without adding waste again, including exact boundaries", () => {
  assert.equal(calculate("coating", { ...coating, kitSize: 3, kitUnit: "liters" }).kits, 4);
  assert.equal(calculate("coating", { ...coating, wastePct: 0, kitSize: 5, kitUnit: "liters" }).kits, 2);
  assert.equal(calculate("coating", { ...coating, surfaceArea: 10.00001, wastePct: 0, kitSize: 5, kitUnit: "liters" }).kits, 3);
  assert.throws(() => calculate("coating", { ...coating, kitSize: 0 }));
});

test("the material budget leads with money while retaining its volume basis", () => {
  const r = calculate("cost", { quantity: 3, costUnit: "gallons", wastePct: 8, pricePerGallon: 95 });
  near(r.projectedCost, 307.8);
  assert.equal(r.primary, "$307.80");
  assert.match(r.secondary, /3.24 gal/);
});

test("six real-size coasters are a batch in mL rather than a 28-inch table", () => {
  const r = calculate("coaster", { unit: "imperial", shape: "round", diameter: 4, depth: 0.25, count: 6, wastePct: 8 });
  near(r.rawLiters, Math.PI * 0.016387064 * 6);
  near(r.recommendedLiters, Math.PI * 0.016387064 * 6 * 1.08);
  assert.match(r.primary, /mL$/);
});

test("mold capacities and cubic dice count only the declared identical pieces", () => {
  const mold = calculate("mold", { moldMethod: "capacity", capacityMl: 3, count: 10, wastePct: 15 });
  near(mold.recommendedLiters, 0.0345);
  const dice = calculate("dice", { unit: "metric", moldMethod: "cube", length: 1.6, count: 7, wastePct: 12 });
  near(dice.rawLiters, 0.028672);
  near(dice.recommendedLiters, 0.03211264);
  const set = calculate("dice", { moldMethod: "capacity", capacityMl: 35, count: 2, wastePct: 10 });
  near(set.recommendedLiters, 0.077);
});

test("depth and batch volume are separate confirmed product limits", () => {
  const data = { length: 48, width: 14, depth: 2.5, wastePct: 10 };
  assert.match(calculate("deep-pour", data).layersText, /Confirm product/);
  const r = calculate("deep-pour", { ...data, maxDepth: 1, maxBatchLiters: 10 });
  assert.match(r.layersText, /3 lifts/);
  assert.match(r.layersText, /3 batches/);
  assert.throws(() => calculate("deep-pour", { ...data, maxDepth: 0 }));
});

test("selling price includes labor, failures, gross-selling fees and a genuine margin", () => {
  const r = calculate("pricing", { resinMl: 100, resinPrice: 10, supplies: 3, packaging: 2, laborHours: 2, hourlyRate: 5, overhead: 4, failurePct: 20, feePct: 10, fixedFee: 2, marginPct: 20 });
  near(r.directCost, 20);
  near(r.adjustedCost, 25);
  near(r.price, 27 / 0.7);
  near(r.profit / r.price, 0.2);
  near(r.price - r.sellingFees - r.adjustedCost, r.profit);
  assert.match(r.primary, /^\$/);
  assert.throws(() => calculate("pricing", { resinMl: 100, resinPrice: 10, failurePct: 100 }));
  assert.throws(() => calculate("pricing", { resinMl: 100, resinPrice: 10, feePct: 60, marginPct: 40 }));
});

test("river segment mode cannot silently accept no measured widths", () => {
  assert.throws(() => calculate("river", { length: 72, depth: 1.5, riverMode: "segment" }));
  const r = calculate("river", { length: 72, depth: 1.5, riverMode: "segment", segmentWidth1: 4.5, segmentWidth2: 6, segmentWidth3: 7.5, wastePct: 12, includeSeepage: true, seepagePct: 8, includeSeal: true, sealPct: 5 });
  near(r.recommendedLiters, 648 * 0.016387064 * 1.25);
});
