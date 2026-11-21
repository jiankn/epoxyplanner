import test from "node:test";
import assert from "node:assert/strict";
import { calculate } from "../src/assets/calculator.js";
import { FLOOR_BUDGET_EXAMPLE } from "../src/assets/floor-cost-rates.js";
import { planTotalBoatKits } from "../src/assets/totalboat-tabletop-kits.js";

test("floor budgets combine independently priced areas measured by area and dimensions", () => {
  const zones = [
    { zoneName: "Garage", surfaceArea: 400, system: "pro-flake", coatingQuote: 2400, prepQuote: 300 },
    { zoneName: "Basement", budgetAreaMode: "dimensions", length: 20, width: 15, system: "pro-epoxy", coatingQuote: 1500, prepQuote: 450 }
  ];
  const result = calculate("floor-budget", { zones });
  assert.equal(result.area, 700);
  assert.equal(result.primary, "$4,650");
  assert.equal(result.rawText, "$6.64 / ft²");
  assert.deepEqual(result.detailRows.map((row) => [row[0], row[2], row.at(-1)]), [
    ["Garage", "Professional flake epoxy", "$2,700"],
    ["Basement", "Professional solid-color epoxy", "$1,950"]
  ]);
  assert.deepEqual(calculate("floor-budget", { zones: FLOOR_BUDGET_EXAMPLE }), result);
  assert.throws(() => calculate("floor-budget", { zones: [...zones, { surfaceArea: 0 }] }));
  assert.throws(() => calculate("floor-budget", { zones: [{ ...zones[0], prepQuote: -10 }] }));
});

test("a job minimum applies once to the combined professional subtotal", () => {
  const zones = [
    { surfaceArea: 10, system: "pro-epoxy", condition: "good" },
    { surfaceArea: 20, system: "pro-flake", condition: "good" },
    { surfaceArea: 100, system: "diy-basic", coatingQuote: 85.50, prepQuote: 0 }
  ];
  const result = calculate("floor-budget", { zones, jobMinimum: 500 });
  assert.equal(result.low, 585.50);
  assert.equal(result.high, 585.50);
  assert.equal(result.addedLow, 380);
  assert.equal(result.addedHigh, 200);
  assert.equal(calculate("floor-budget", { zones: [zones[2]], jobMinimum: 500 }).low, 85.50);
});

test("TotalBoat compares minimum leftover, fewest kits and actual entered prices", () => {
  const result = calculate("totalboat-kits", {
    surfaceArea: 15, areaUnit: "sqft", thickness: 0.125, thicknessUnit: "in", wastePct: 8,
    priceTwoQuart: 30, priceOneGallon: 60, priceTwoGallon: 100
  });
  assert.equal(result.primary, "1.26 US gal");
  assert.deepEqual(result.leastLeftover.counts, [1, 1, 0]);
  assert.deepEqual(result.fewestKits.counts, [0, 0, 1]);
  assert.deepEqual(result.lowestPrice.counts, [1, 1, 0]);
  assert.equal(result.lowestPrice.cents, 9000);
  assert.deepEqual(planTotalBoatKits(2, {}).leastLeftover.counts, [0, 0, 1]);
  assert.deepEqual(planTotalBoatKits(1.26, { priceTwoQuart: 20 }).lowestPrice.counts, [3, 0, 0]);
  assert.throws(() => planTotalBoatKits(1, { priceTwoQuart: -1 }));
});

test("kits on hand limit coverage by the label rate, coats and allowance", () => {
  const data = { coverageGoal: "kits", kitsOnHand: 2, availableKitSize: 1, kitCoverageRate: 160, coats: 2, wastePct: 10 };
  assert.equal(calculate("coating", data).primary, "145.45 ft²");
  assert.equal(calculate("coating", { ...data, kitsOnHand: 1, kitCoverageRate: 8, kitCoverageUnit: "sqm-liter", wastePct: 0 }).primary, "15.14 m²");
  assert.throws(() => calculate("coating", { ...data, kitsOnHand: 1.5 }));
});

test("deep pours calculate batches within each lift and show a partial final lift", () => {
  const data = { length: 48, width: 14, depth: 2.5, maxDepth: 1, maxBatchLiters: 10, wastePct: 10 };
  const plan = calculate("deep-pour", data);
  assert.equal(plan.liftCount, 3);
  assert.equal(plan.totalBatches, 5);
  assert.match(plan.layersText, /3 lifts · 5 mixing batches/);
  assert.deepEqual(plan.detailRows.map((row) => row.at(-1)), ["2", "2", "1"]);
  assert.equal(plan.detailRows.at(-1)[1], "0.5 in");
  assert.equal(calculate("deep-pour", { ...data, depth: 2 }).detailRows.length, 2);
  assert.equal(calculate("deep-pour", { ...data, maxBatchLiters: "" }).totalBatches, null);
  assert.equal(calculate("deep-pour", { ...data, maxDepth: "" }).detailRows, undefined);
  assert.match(calculate("deep-pour", { ...data, maxDepth: "" }).layersText, /At least 3 mixing batches/);
  assert.equal(calculate("deep-pour", { ...data, maxDepth: 0.01 }).detailRows.length, 2);
});

test("segmented river plans use one cavity volume for lifts and a buffered quantity for kits", () => {
  const data = {
    riverMode: "segment", length: 72, depth: 3, segmentWidth1: 3, segmentWidth2: 5, segmentWidth3: 7,
    wastePct: 10, maxDepth: 1, maxLayerLiters: 6, maxBatchLiters: 4, mixRatio: "2:1", pourProduct: "fathom"
  };
  const result = calculate("river", data);
  assert.ok(Math.abs(result.rawLiters - 17.69802912) < 1e-8);
  assert.equal(result.primary, "5.14 gal");
  assert.equal(result.totalBatches, 6);
  assert.deepEqual(result.detailRows.map(row => row.at(-1)), ["2", "2", "2"]);
  assert.match(result.splitText, /3\.12 gal A \/ 1\.56 gal B/);
  assert.ok(result.kitRows.some(([size, count, total]) => size === "3 US gal" && count === "2" && total === "6 US gal"));
  assert.equal(calculate("river", { ...data, maxDepth: 2, maxLayerLiters: 5 }).liftCount, 4);
});

test("countertop takeoff subtracts the opening and measures vertical faces", () => {
  const data = {
    surfaceArea: 16, runLength: 36, runWidth: 24, cutoutLength: 24, cutoutWidth: 24, edgeLength: 120, edgeHeight: 1.5,
    coats: 1, thickness: 0.125, thicknessUnit: "in", wastePct: 8
  };
  const result = calculate("countertop", data);
  assert.deepEqual(result.detailRows.at(-1), ["Total coated area", "19.25 ft²"]);
  assert.equal(result.primary, "1.62 gal");
  assert.throws(() => calculate("countertop", { ...data, cutoutWidth: 160 }), /cutout/);
  assert.throws(() => calculate("countertop", { ...data, edgeHeight: "" }));
});

test("a mold batch combines groups with different capacities", () => {
  const data = { moldMethod: "capacity", unit: "metric", capacityMl: 3, count: 10, moldCapacity2: 2, moldCount2: 8, wastePct: 15 };
  const result = calculate("mold", data);
  assert.ok(Math.abs(result.rawLiters - 0.046) < 1e-12);
  assert.ok(Math.abs(result.recommendedLiters - 0.0529) < 1e-12);
  assert.throws(() => calculate("mold", { ...data, moldCount2: 0.5 }));
});

test("known floor area gives the same takeoff and handoff area as a dimension preset", () => {
  const data = { length: 20, width: 20, coats: 2, coverageRate: 160, wastePct: 7, kitSize: 3, kitUnit: "gallons" };
  const preset = calculate("garage-floor", data);
  const measured = calculate("garage-floor", { ...data, floorMeasure: "area", floorArea: 400 });
  assert.equal(measured.floorAreaSqFt, 400);
  assert.equal(measured.primary, preset.primary);
  assert.equal(measured.kits, 2);
});

test("garage floor quotes hand off the quoted area to the material takeoff", () => {
  const quote = calculate("floor-cost", { length: 24, width: 24, system: "pro-epoxy", condition: "good" });
  assert.equal(quote.floorAreaSqFt, 576);
  const takeoff = calculate("garage-floor", {
    floorMeasure: "area", floorArea: quote.floorAreaSqFt, coats: 2, coverageRate: 160, wastePct: 7, kitSize: 3, kitUnit: "gallons"
  });
  assert.equal(takeoff.primary, "7.7 gal");
  assert.equal(takeoff.kits, 3);
});
