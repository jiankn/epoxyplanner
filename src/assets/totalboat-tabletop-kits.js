// Each unit is half a US gallon of mixed resin. The published kits contain both parts.
export const TOTALBOAT_TABLETOP_KITS = [
  { units: 1, label: "2 qt", priceField: "priceTwoQuart" },
  { units: 2, label: "1 gal", priceField: "priceOneGallon" },
  { units: 4, label: "2 gal", priceField: "priceTwoGallon" }
];

export function planTotalBoatKits(requiredGallons, data) {
  if (!Number.isFinite(requiredGallons) || requiredGallons <= 0) throw new Error("Enter a positive project volume.");
  const requiredUnits = Math.max(1, Math.ceil(requiredGallons * 2 - 1e-12));
  if (!Number.isSafeInteger(requiredUnits + 3)) throw new Error("Enter a smaller project volume.");

  const prices = TOTALBOAT_TABLETOP_KITS.map(({ priceField, label }) => {
    const value = data[priceField];
    if (value === "" || value == null) return null;
    const cents = Math.round(Number(value) * 100);
    if (!Number.isSafeInteger(cents) || cents < 0 || Number(value) < 0) throw new Error(`Enter a valid price for the ${label} kit.`);
    return cents;
  });

  const makePlan = (counts) => {
    const units = counts[0] + counts[1] * 2 + counts[2] * 4;
    const hasAllPrices = counts.every((count, index) => !count || prices[index] !== null);
    const cents = hasAllPrices ? counts.reduce((sum, count, index) => sum + count * prices[index], 0) : null;
    if (cents !== null && !Number.isSafeInteger(cents)) throw new Error("Enter a smaller kit price or project volume.");
    return {
      counts,
      count: counts[0] + counts[1] + counts[2],
      gallons: units / 2,
      leftover: Math.max(0, units / 2 - requiredGallons),
      cents
    };
  };

  const remainder = requiredUnits % 4;
  const leastLeftover = makePlan([remainder % 2, Math.floor(remainder / 2), Math.floor(requiredUnits / 4)]);
  const fewestKits = remainder === 3 ? makePlan([0, 0, Math.ceil(requiredUnits / 4)]) : leastLeftover;

  const priced = TOTALBOAT_TABLETOP_KITS
    .map((kit, index) => ({ ...kit, index, cents: prices[index] }))
    .filter((kit) => kit.cents !== null)
    .sort((a, b) => a.cents / a.units - b.cents / b.units || b.units - a.units);
  const [base, ...alternatives] = priced;
  let lowestPrice;
  if (base) {
    // A group of base.units copies of any alternative can be replaced at the same volume.
    // The base kit costs at most as much per unit, so only smaller remainders need searching.
    const [first, second] = alternatives;
    for (let a = 0; a < (first ? base.units : 1); a++) {
      for (let b = 0; b < (second ? base.units : 1); b++) {
        const counts = [0, 0, 0];
        if (first) counts[first.index] = a;
        if (second) counts[second.index] = b;
        const covered = a * (first?.units || 0) + b * (second?.units || 0);
        counts[base.index] = Math.max(0, Math.ceil((requiredUnits - covered) / base.units));
        const candidate = makePlan(counts);
        if (!lowestPrice || candidate.cents < lowestPrice.cents ||
            (candidate.cents === lowestPrice.cents && (candidate.gallons < lowestPrice.gallons ||
              (candidate.gallons === lowestPrice.gallons && candidate.count < lowestPrice.count)))) {
          lowestPrice = candidate;
        }
      }
    }
  }

  return { leastLeftover, fewestKits, lowestPrice, allPricesEntered: priced.length === TOTALBOAT_TABLETOP_KITS.length };
}
