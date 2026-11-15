import test from "node:test";
import assert from "node:assert/strict";
import { calculate } from "../src/assets/calculator.js";
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
  assert.deepEqual(plan.detailRows.map((row) => row.at(-1)), ["2", "2", "1"]);
  assert.equal(plan.detailRows.at(-1)[1], "0.5 in");
  assert.equal(calculate("deep-pour", { ...data, depth: 2 }).detailRows.length, 2);
  assert.equal(calculate("deep-pour", { ...data, maxBatchLiters: "" }).totalBatches, null);
  assert.equal(calculate("deep-pour", { ...data, maxDepth: "" }).detailRows, undefined);
  assert.equal(calculate("deep-pour", { ...data, maxDepth: 0.01 }).detailRows.length, 2);
});
