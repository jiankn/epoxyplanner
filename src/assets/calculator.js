const CUBIC_INCHES_PER_GALLON = 231;
const CUBIC_INCHES_PER_LITER = 61.0237440947;
const CUBIC_INCHES_PER_QUART = CUBIC_INCHES_PER_GALLON / 4;
const CUBIC_INCHES_PER_FLUID_OUNCE = CUBIC_INCHES_PER_GALLON / 128;
const CM_PER_INCH = 2.54;
const FEET_PER_METER = 3.280839895;
const SQUARE_FEET_PER_SQUARE_METER = 10.763910417;

const NUMBER_FORMAT = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2
});

const MONEY_FORMAT = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

function formatNumber(value, digits = 2) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: value !== 0 && Math.abs(value) < 10 ? Math.min(digits, 1) : 0
  }).format(value);
}

function formatMoney(value) {
  if (!Number.isFinite(value)) return "Add price / gallon";
  return MONEY_FORMAT.format(value);
}

function roundForInput(value) {
  return Number.isFinite(value) ? String(Number(value.toFixed(3))) : "";
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function toInches(value, unit) {
  return unit === "metric" ? value / CM_PER_INCH : value;
}

function gallonsFromCubicInches(value) {
  return value / CUBIC_INCHES_PER_GALLON;
}

function litersFromCubicInches(value) {
  return value / CUBIC_INCHES_PER_LITER;
}

function cubicInchesFromGallons(value) {
  return value * CUBIC_INCHES_PER_GALLON;
}

function cubicInchesFromLiters(value) {
  return value * CUBIC_INCHES_PER_LITER;
}

function volumeFromRectangle(length, width, depth) {
  return length * width * depth;
}

function volumeFromRound(diameter, depth) {
  const radius = diameter / 2;
  return Math.PI * radius * radius * depth;
}

function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}

function displayVolume(valueCubicInches, unit) {
  if (unit === "metric") {
    return `${formatNumber(litersFromCubicInches(valueCubicInches))} L`;
  }

  return `${formatNumber(gallonsFromCubicInches(valueCubicInches))} gal`;
}

function displayVolumeDual(valueCubicInches) {
  return `${formatNumber(gallonsFromCubicInches(valueCubicInches))} gal / ${formatNumber(litersFromCubicInches(valueCubicInches))} L`;
}

function displayArea(value, unit, areaKind = "surface") {
  if (areaKind === "garage-floor") {
    return `${formatNumber(value)} ${unit === "metric" ? "sq m" : "sq ft"}`;
  }

  return `${formatNumber(value)} ${unit === "metric" ? "sq cm" : "sq in"}`;
}

function displayDepth(valueInches, unit) {
  if (unit === "metric") return `${formatNumber(valueInches * CM_PER_INCH)} cm`;
  return `${formatNumber(valueInches)} in`;
}

function displaySplit(recommendedCubicInches, unit, ratio) {
  if (!ratio) return "Verify brand ratio";

  const totalParts = ratio.a + ratio.b;
  const partA = recommendedCubicInches * (ratio.a / totalParts);
  const partB = recommendedCubicInches * (ratio.b / totalParts);

  return `${displayVolume(partA, unit)} A / ${displayVolume(partB, unit)} B (${ratio.a}:${ratio.b} example)`;
}

function parseVolumeUnit(unit) {
  switch (unit) {
    case "gallons":
      return {
        toCubicInches: (value) => cubicInchesFromGallons(value),
        fromCubicInches: (value) => gallonsFromCubicInches(value),
        label: "gal"
      };
    case "quarts":
      return {
        toCubicInches: (value) => value * CUBIC_INCHES_PER_QUART,
        fromCubicInches: (value) => value / CUBIC_INCHES_PER_QUART,
        label: "qt"
      };
    case "fluidOunces":
      return {
        toCubicInches: (value) => value * CUBIC_INCHES_PER_FLUID_OUNCE,
        fromCubicInches: (value) => value / CUBIC_INCHES_PER_FLUID_OUNCE,
        label: "fl oz"
      };
    case "liters":
      return {
        toCubicInches: (value) => cubicInchesFromLiters(value),
        fromCubicInches: (value) => litersFromCubicInches(value),
        label: "L"
      };
    case "milliliters":
      return {
        toCubicInches: (value) => cubicInchesFromLiters(value / 1000),
        fromCubicInches: (value) => litersFromCubicInches(value) * 1000,
        label: "mL"
      };
    case "cubicInches":
    default:
      return {
        toCubicInches: (value) => value,
        fromCubicInches: (value) => value,
        label: "cu in"
      };
  }
}

function setFieldLabel(form, name, label) {
  const field = form.querySelector(`[name="${name}"]`)?.closest(".field");
  const span = field?.querySelector("span");
  if (span) span.textContent = label;
}

function setSegmentLabels(form, unit) {
  const suffix = unit === "metric" ? "cm" : "in";
  form.querySelectorAll(".field--segment span").forEach((label, index) => {
    label.textContent = `Segment ${index + 1} width (${suffix})`;
  });
}

function convertLinearInputs(form, toUnit) {
  const fields = ["length", "width", "depth", "depthRound", "diameter", "avgWidth", "maxDepth"];
  const factor = toUnit === "metric" ? CM_PER_INCH : 1 / CM_PER_INCH;

  fields.forEach((name) => {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input || !input.value) return;
    input.value = roundForInput(toNumber(input.value) * factor);
  });

  form.querySelectorAll('input[name^="segmentWidth"]').forEach((input) => {
    if (!input.value) return;
    input.value = roundForInput(toNumber(input.value) * factor);
  });
}

function convertGarageFloorInputs(form, toUnit) {
  const linearFactor = toUnit === "metric" ? 1 / FEET_PER_METER : FEET_PER_METER;
  const areaFactor = toUnit === "metric" ? 1 / SQUARE_FEET_PER_SQUARE_METER : SQUARE_FEET_PER_SQUARE_METER;

  ["length", "width"].forEach((name) => {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input || !input.value) return;
    input.value = roundForInput(toNumber(input.value) * linearFactor);
  });

  const coverageRate = form.querySelector('[name="coverageRate"]');
  if (coverageRate?.value) {
    coverageRate.value = roundForInput(toNumber(coverageRate.value) * areaFactor);
  }
}

function updateUnitLabels(form) {
  const type = form.dataset.calculatorType;
  const unit = form.querySelector('[name="unit"]')?.value;

  if (!unit) return;

  if (type === "garage-floor") {
    const linearSuffix = unit === "metric" ? "m" : "ft";
    const areaSuffix = unit === "metric" ? "sq m" : "sq ft";
    setFieldLabel(form, "length", `Length (${linearSuffix})`);
    setFieldLabel(form, "width", `Width (${linearSuffix})`);
    setFieldLabel(form, "coverageRate", `Coverage / gallon (${areaSuffix})`);
    return;
  }

  const linearSuffix = unit === "metric" ? "cm" : "in";
  const labelMaps = {
    coverage: {
      length: "Length",
      width: "Width",
      depth: "Thickness"
    },
    river: {
      length: "Length",
      depth: "Target depth",
      avgWidth: "Average width"
    },
    "deep-pour": {
      length: "Length",
      width: "Width",
      depth: "Total depth",
      maxDepth: "Max layer depth"
    },
    surface: {
      length: "Length",
      width: "Width",
      depth: "Thickness"
    },
    round: {
      diameter: "Diameter",
      depth: "Depth"
    },
    default: {
      length: "Length",
      width: "Width",
      depth: "Depth",
      depthRound: "Depth",
      diameter: "Diameter",
      avgWidth: "Average width",
      maxDepth: "Max layer depth"
    }
  };

  const labelMap = labelMaps[type] || labelMaps.default;
  Object.entries(labelMap).forEach(([name, baseLabel]) => {
    setFieldLabel(form, name, `${baseLabel} (${linearSuffix})`);
  });

  setSegmentLabels(form, unit);
}

function serializeForm(form) {
  const data = {};
  form.querySelectorAll("input, select, textarea").forEach((element) => {
    if (!element.name) return;
    if (element.type === "checkbox") {
      data[element.name] = element.checked;
      return;
    }

    data[element.name] = element.value;
  });

  return data;
}

function buildBreakdown(items) {
  return items.filter(Boolean);
}

function productRecommendation(type, depthInches, recommendedCubicInches) {
  const totalGallons = gallonsFromCubicInches(recommendedCubicInches);

  switch (type) {
    case "coverage":
    case "surface":
    case "round":
      return {
        label: "Table-top / flood coat epoxy",
        heading: "Use a table-top or flood-coat epoxy",
        copy: `This estimate behaves like a shallow surface application. Start by comparing coating-style products that can realistically cover about ${formatNumber(totalGallons)} gallons mixed.`,
        ratio: { a: 1, b: 1 }
      };
    case "river":
      if (depthInches > 0.5) {
        return {
          label: "Deep-pour casting epoxy",
          heading: "Use a deep-pour casting epoxy",
          copy: `The target depth and irregular geometry fit a casting workflow better than a flood coat. Compare deep-pour products around ${formatNumber(totalGallons)} gallons mixed and confirm the pour-depth limit before you choose one.`,
          ratio: { a: 2, b: 1 }
        };
      }

      return {
        label: "General casting epoxy",
        heading: "Use a casting epoxy for shallow river work",
        copy: `The shape is irregular, but the depth is still modest. A casting epoxy or low-exotherm resin is the safest starting point around ${formatNumber(totalGallons)} gallons mixed.`,
        ratio: { a: 1, b: 1 }
      };
    case "deep-pour":
      return {
        label: "Deep-pour casting epoxy",
        heading: "Use a deep-pour casting epoxy",
        copy: `This project needs a resin built for thick sections and staged lifts. Build around ${formatNumber(totalGallons)} gallons mixed and verify the maximum lift depth on the technical sheet.`,
        ratio: { a: 2, b: 1 }
      };
    case "garage-floor":
      return {
        label: "Floor coating system",
        heading: "Use a floor coating system, not a table-top resin",
        copy: "Floor jobs depend on coverage rate, substrate prep, and coat count more than cavity geometry. Compare floor-coating systems by published coverage and planned coat count.",
        ratio: null
      };
    case "void-fill":
      return {
        label: depthInches > 1 ? "Casting epoxy for void fills" : "Detail fill epoxy",
        heading: depthInches > 1 ? "Use a casting epoxy for deeper voids" : "Use a small-batch detail or fill epoxy",
        copy: "This estimate is for localized fill work. Plan a little extra if you expect to overfill and sand the surface flush.",
        ratio: depthInches > 1 ? { a: 2, b: 1 } : { a: 1, b: 1 }
      };
    case "cost":
      return {
        label: "Budget planning",
        heading: "Use this page to pressure-test the budget",
        copy: "Translate the volume plan into a realistic budget range. The next step is to compare actual kit sizes, coverage claims, and waste assumptions against this estimate.",
        ratio: null
      };
    case "converter":
      return {
        label: "Return to a scenario page",
        heading: "Use the conversion, then return to a project calculator",
        copy: "A clean conversion is only part of the decision. Move back to a river table, coverage, or deep-pour page once the units are clear.",
        ratio: null
      };
    case "general":
    case "volume":
    default:
      if (depthInches > 0.75) {
        return {
          label: "Casting epoxy",
          heading: "Use a casting epoxy for thicker pours",
          copy: "The estimated depth points toward a casting workflow rather than a simple surface coat. Confirm the resin can handle the depth you intend to pour.",
          ratio: { a: 2, b: 1 }
        };
      }

      return {
        label: "General-purpose epoxy",
        heading: "Use a general-purpose or table-top epoxy",
        copy: "The estimate fits a shallow pour or coating-style job. Start with surface-friendly products and compare the recommendation against real product limits.",
        ratio: { a: 1, b: 1 }
      };
  }
}

function finalizeResult({
  type,
  unit,
  rawCubicInches,
  recommendedCubicInches,
  conservativeCubicInches,
  pricePerGallon,
  breakdown,
  depthInches,
  layersText,
  secondary,
  splitTextOverride,
  costTextOverride,
  compareStandard,
  compareConservative,
  compareProduct
}) {
  const product = productRecommendation(type, depthInches, recommendedCubicInches);
  const projectedCost =
    Number.isFinite(pricePerGallon) && pricePerGallon > 0
      ? gallonsFromCubicInches(recommendedCubicInches) * pricePerGallon
      : Number.NaN;

  return {
    primary: displayVolume(recommendedCubicInches, unit),
    secondary:
      secondary ||
      `Recommended order quantity based on raw volume plus planning buffer. Equivalent to ${displayVolumeDual(recommendedCubicInches)}.`,
    rawText: displayVolumeDual(rawCubicInches),
    splitText: splitTextOverride || displaySplit(recommendedCubicInches, unit, product.ratio),
    costText: costTextOverride || formatMoney(projectedCost),
    layersText,
    breakdown,
    standardText: compareStandard || displayVolume(recommendedCubicInches, unit),
    conservativeText: compareConservative || displayVolume(conservativeCubicInches, unit),
    productText: compareProduct || product.label,
    product
  };
}

function requirePositive(fields, message) {
  if (fields.some((value) => !Number.isFinite(value) || value <= 0)) {
    throw new Error(message);
  }
}

function computeGeneral(data) {
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const shape = data.shape || "rectangle";

  let rawCubicInches;
  let depthInches;
  let shapeCopy;

  if (shape === "round") {
    const diameter = toInches(toNumber(data.diameter), unit);
    depthInches = toInches(toNumber(data.depthRound), unit);
    requirePositive([diameter, depthInches], "Enter a positive diameter and depth.");
    rawCubicInches = volumeFromRound(diameter, depthInches);
    shapeCopy = "Round geometry";
  } else {
    const length = toInches(toNumber(data.length), unit);
    const width = toInches(toNumber(data.width), unit);
    depthInches = toInches(toNumber(data.depth), unit);
    requirePositive([length, width, depthInches], "Enter positive length, width, and depth.");
    rawCubicInches = volumeFromRectangle(length, width, depthInches);
    shapeCopy = "Rectangle geometry";
  }

  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.08);
  const layersText =
    depthInches <= 0.25 ? "Single coat / shallow pour" : depthInches <= 2 ? "Single lift if product allows" : `${Math.ceil(depthInches / 2)} staged lifts`;

  return finalizeResult({
    type: "general",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText,
    breakdown: buildBreakdown([
      `${shapeCopy}: ${displayVolumeDual(rawCubicInches)} raw volume.`,
      `Waste buffer: +${formatNumber(wastePct, 1)}%.`,
      `Recommended order: ${displayVolume(recommendedCubicInches, unit)}.`,
      "Conservative scenario adds another 8% planning margin."
    ])
  });
}

function computeCoverage(data) {
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const lengthInput = toNumber(data.length);
  const widthInput = toNumber(data.width);
  const depthInput = toNumber(data.depth);
  requirePositive([lengthInput, widthInput, depthInput], "Enter positive surface dimensions and coat thickness.");

  const lengthInches = toInches(lengthInput, unit);
  const widthInches = toInches(widthInput, unit);
  const depthInches = toInches(depthInput, unit);
  const area = lengthInput * widthInput;
  const edgeSoakPct = depthInches <= 0.125 ? 4 : 6;
  const rawCubicInches = volumeFromRectangle(lengthInches, widthInches, depthInches);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100 + edgeSoakPct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + edgeSoakPct / 100 + 0.05);
  const layersText = depthInches <= 0.125 ? "1 flood coat" : "Thick coat, confirm product spec";

  return finalizeResult({
    type: "coverage",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText,
    secondary: `Surface estimate for ${displayArea(area, unit)} at ${displayDepth(depthInches, unit)} target thickness.`,
    breakdown: buildBreakdown([
      `Surface area: ${displayArea(area, unit)}.`,
      `Raw resin volume at target thickness: ${displayVolumeDual(rawCubicInches)}.`,
      `Waste buffer: +${formatNumber(wastePct, 1)}%.`,
      `Edge soak and runoff allowance: +${edgeSoakPct}%.`
    ])
  });
}

function computeVolume(data) {
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const shape = data.shape || "rectangle";

  let rawCubicInches;
  let depthInches;
  let detailLine;

  if (shape === "round") {
    const diameter = toInches(toNumber(data.diameter), unit);
    depthInches = toInches(toNumber(data.depthRound), unit);
    requirePositive([diameter, depthInches], "Enter a positive diameter and depth.");
    rawCubicInches = volumeFromRound(diameter, depthInches);
    detailLine = `Round volume model at ${displayDepth(depthInches, unit)} depth.`;
  } else {
    const length = toInches(toNumber(data.length), unit);
    const width = toInches(toNumber(data.width), unit);
    depthInches = toInches(toNumber(data.depth), unit);
    requirePositive([length, width, depthInches], "Enter positive length, width, and depth.");
    rawCubicInches = volumeFromRectangle(length, width, depthInches);
    detailLine = `Rectangular volume model at ${displayDepth(depthInches, unit)} depth.`;
  }

  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.08);

  return finalizeResult({
    type: "volume",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText: depthInches <= 2 ? "Single lift if product allows" : `${Math.ceil(depthInches / 2)} staged lifts`,
    breakdown: buildBreakdown([
      detailLine,
      `Raw volume: ${displayVolumeDual(rawCubicInches)}.`,
      `Waste buffer: +${formatNumber(wastePct, 1)}%.`,
      `Recommended order: ${displayVolume(recommendedCubicInches, unit)}.`
    ])
  });
}

function computeRiver(data) {
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const lengthInput = toNumber(data.length);
  const depthInput = toNumber(data.depth);
  requirePositive([lengthInput, depthInput], "Enter positive length and target depth.");

  const lengthInches = toInches(lengthInput, unit);
  const depthInches = toInches(depthInput, unit);
  const mode = data.riverMode || "quick";
  const seepagePct = data.includeSeepage ? 8 : 0;
  const sealPct = data.includeSeal ? 5 : 0;

  let rawCubicInches;
  let modeLine;

  if (mode === "segment") {
    const widths = Object.entries(data)
      .filter(([key, value]) => key.startsWith("segmentWidth") && Number(value) > 0)
      .map(([, value]) => toInches(toNumber(value), unit));

    requirePositive(widths, "Add at least one positive segment width for segment mode.");
    const segmentLength = lengthInches / widths.length;
    rawCubicInches = widths.reduce(
      (sum, width) => sum + volumeFromRectangle(segmentLength, width, depthInches),
      0
    );
    modeLine = `Segment mode: ${widths.length} widths across ${displayDepth(lengthInches, unit)} total length.`;
  } else {
    const avgWidthInput = toNumber(data.avgWidth);
    requirePositive([avgWidthInput], "Enter a positive average width or switch to segment mode.");
    const avgWidthInches = toInches(avgWidthInput, unit);
    rawCubicInches = volumeFromRectangle(lengthInches, avgWidthInches, depthInches);
    modeLine = `Quick mode uses an average river width of ${displayDepth(avgWidthInches, unit)}.`;
  }

  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100 + seepagePct / 100 + sealPct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + seepagePct / 100 + sealPct / 100 + 0.08);
  const layersText =
    depthInches <= 2 ? "1 lift if product allows" : `${Math.ceil(depthInches / 2)} staged lifts at about 2 in max`;

  return finalizeResult({
    type: "river",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText,
    breakdown: buildBreakdown([
      modeLine,
      `Raw river volume: ${displayVolumeDual(rawCubicInches)}.`,
      `Waste buffer: +${formatNumber(wastePct, 1)}%.`,
      seepagePct ? `Seepage allowance: +${seepagePct}%.` : "",
      sealPct ? `Seal-coat allowance: +${sealPct}%.` : ""
    ])
  });
}

function computeDeepPour(data) {
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const lengthInches = toInches(toNumber(data.length), unit);
  const widthInches = toInches(toNumber(data.width), unit);
  const depthInches = toInches(toNumber(data.depth), unit);
  const maxDepthInches = toInches(toNumber(data.maxDepth), unit);
  requirePositive([lengthInches, widthInches, depthInches, maxDepthInches], "Enter positive length, width, total depth, and max layer depth.");

  const rawCubicInches = volumeFromRectangle(lengthInches, widthInches, depthInches);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.08);
  const layers = Math.max(1, Math.ceil(depthInches / maxDepthInches));

  return finalizeResult({
    type: "deep-pour",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText: `${layers} ${pluralize(layers, "lift")} at about ${displayDepth(maxDepthInches, unit)} max`,
    breakdown: buildBreakdown([
      `Raw casting volume: ${displayVolumeDual(rawCubicInches)}.`,
      `Waste buffer: +${formatNumber(wastePct, 1)}%.`,
      `Planned maximum lift depth: ${displayDepth(maxDepthInches, unit)}.`,
      `Estimated staged pours: ${layers}.`
    ])
  });
}

function computeSurface(data) {
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const lengthInput = toNumber(data.length);
  const widthInput = toNumber(data.width);
  const depthInput = toNumber(data.depth);
  requirePositive([lengthInput, widthInput, depthInput], "Enter positive length, width, and coat thickness.");

  const lengthInches = toInches(lengthInput, unit);
  const widthInches = toInches(widthInput, unit);
  const depthInches = toInches(depthInput, unit);
  const rawCubicInches = volumeFromRectangle(lengthInches, widthInches, depthInches);
  const edgePct = 4;
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100 + edgePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + edgePct / 100 + 0.04);
  const area = lengthInput * widthInput;
  const layersText = depthInches <= 0.125 ? "1 flood coat" : "May need multiple thin coats";

  return finalizeResult({
    type: "surface",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText,
    secondary: `Surface estimate for ${displayArea(area, unit)} with a target thickness of ${displayDepth(depthInches, unit)}.`,
    breakdown: buildBreakdown([
      `Raw coat volume: ${displayVolumeDual(rawCubicInches)}.`,
      `Waste buffer: +${formatNumber(wastePct, 1)}%.`,
      `Edge and runoff allowance: +${edgePct}%.`,
      "Shallow coating logic is different from deep-pour casting logic."
    ])
  });
}

function computeGarageFloor(data) {
  const unit = data.unit || "imperial";
  const coats = Math.max(1, Math.round(toNumber(data.coats)));
  const coverageRate = toNumber(data.coverageRate);
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const length = toNumber(data.length);
  const width = toNumber(data.width);
  requirePositive([length, width, coverageRate], "Enter positive floor dimensions and coverage rate.");

  const area = length * width;
  const rawGallons = (area * coats) / coverageRate;
  const rawCubicInches = cubicInchesFromGallons(rawGallons);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.05);

  return finalizeResult({
    type: "garage-floor",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches: 0,
    layersText: `${coats} ${pluralize(coats, "coat")} planned`,
    secondary: `Coverage-based floor estimate for ${displayArea(area, unit, "garage-floor")} across ${coats} coats.`,
    breakdown: buildBreakdown([
      `Floor area: ${displayArea(area, unit, "garage-floor")}.`,
      `Coverage rate: ${NUMBER_FORMAT.format(coverageRate)} ${unit === "metric" ? "sq m" : "sq ft"} per gallon.`,
      `Coats planned: ${coats}.`,
      `Waste buffer: +${formatNumber(wastePct, 1)}%.`
    ])
  });
}

function computeVoidFill(data) {
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const lengthInches = toInches(toNumber(data.length), unit);
  const widthInches = toInches(toNumber(data.width), unit);
  const depthInches = toInches(toNumber(data.depth), unit);
  requirePositive([lengthInches, widthInches, depthInches], "Enter positive void dimensions.");

  const rawCubicInches = volumeFromRectangle(lengthInches, widthInches, depthInches);
  const overfillPct = data.includeSeal ? 8 : 0;
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100 + overfillPct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + overfillPct / 100 + 0.05);
  const layersText =
    depthInches <= 2 ? "Single fill if product allows" : `${Math.ceil(depthInches / 2)} staged fills`;

  return finalizeResult({
    type: "void-fill",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText,
    breakdown: buildBreakdown([
      `Raw cavity volume: ${displayVolumeDual(rawCubicInches)}.`,
      `Waste buffer: +${formatNumber(wastePct, 1)}%.`,
      overfillPct ? `Sanding overfill allowance: +${overfillPct}%.` : "",
      "Void-fill work usually needs more cleanup margin than a simple formula suggests."
    ])
  });
}

function computeRound(data) {
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const diameterInches = toInches(toNumber(data.diameter), unit);
  const depthInches = toInches(toNumber(data.depth), unit);
  requirePositive([diameterInches, depthInches], "Enter a positive diameter and depth.");

  const rawCubicInches = volumeFromRound(diameterInches, depthInches);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.05);

  return finalizeResult({
    type: "round",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText: depthInches <= 0.25 ? "Single coat / shallow fill" : "Confirm product depth limit",
    breakdown: buildBreakdown([
      `Round geometry volume: ${displayVolumeDual(rawCubicInches)}.`,
      `Waste buffer: +${formatNumber(wastePct, 1)}%.`,
      "Use the conservative scenario if the edge detail is irregular."
    ])
  });
}

function computeCost(data) {
  const quantity = toNumber(data.quantity);
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  requirePositive([quantity], "Enter a positive quantity.");

  const usingLiters = data.costUnit === "liters";
  const unit = usingLiters ? "metric" : "imperial";
  const rawCubicInches = usingLiters ? cubicInchesFromLiters(quantity) : cubicInchesFromGallons(quantity);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.05);

  return finalizeResult({
    type: "cost",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches: 0,
    layersText: "Budget model only",
    splitTextOverride: usingLiters ? "Budget based on entered liters" : "Budget based on entered gallons",
    breakdown: buildBreakdown([
      `Base quantity: ${displayVolume(rawCubicInches, unit)}.`,
      `Waste buffer: +${formatNumber(wastePct, 1)}%.`,
      `Recommended budget quantity: ${displayVolume(recommendedCubicInches, unit)}.`,
      "Compare real merchant kit sizes against the rounded recommendation."
    ])
  });
}

function computeConverter(data) {
  const quantity = toNumber(data.quantity);
  requirePositive([quantity], "Enter a positive value to convert.");

  const from = parseVolumeUnit(data.fromUnit);
  const to = parseVolumeUnit(data.toUnit);
  const cubicInches = from.toCubicInches(quantity);
  const converted = to.fromCubicInches(cubicInches);
  const convertedText = `${formatNumber(converted)} ${to.label}`;

  return {
    primary: convertedText,
    secondary: `${formatNumber(quantity)} ${from.label} equals ${convertedText}. Equivalent mixed volume: ${displayVolumeDual(cubicInches)}.`,
    rawText: `${formatNumber(quantity)} ${from.label}`,
    splitText: displayVolumeDual(cubicInches),
    costText: "Return to a project calculator",
    layersText: "Conversion only",
    breakdown: buildBreakdown([
      `Source value: ${formatNumber(quantity)} ${from.label}.`,
      `Converted target: ${convertedText}.`,
      `Equivalent volume: ${displayVolumeDual(cubicInches)}.`,
      "Use the converted number inside the project calculator that matches your actual job."
    ]),
    standardText: `${formatNumber(quantity)} ${from.label}`,
    conservativeText: convertedText,
    productText: "Return to a project calculator",
    product: productRecommendation("converter", 0, cubicInches)
  };
}

const COMPUTERS = {
  general: computeGeneral,
  coverage: computeCoverage,
  volume: computeVolume,
  river: computeRiver,
  "deep-pour": computeDeepPour,
  surface: computeSurface,
  "garage-floor": computeGarageFloor,
  "void-fill": computeVoidFill,
  round: computeRound,
  cost: computeCost,
  converter: computeConverter
};

function updateConditionalGroups(form) {
  const shape = form.querySelector('[name="shape"]')?.value;
  const rectangleGroup = form.querySelector('[data-group="rectangle"]');
  const roundGroup = form.querySelector('[data-group="round"]');

  if (rectangleGroup && roundGroup) {
    const showRound = shape === "round";
    rectangleGroup.classList.toggle("is-hidden", showRound);
    roundGroup.classList.toggle("is-hidden", !showRound);
  }

  const riverMode = form.querySelector('[name="riverMode"]')?.value;
  const segmentBlock = form.querySelector("[data-segment-block]");
  const avgWidthField = form.querySelector('[name="avgWidth"]')?.closest(".field");

  if (segmentBlock) {
    segmentBlock.classList.toggle("is-hidden", riverMode !== "segment");
  }

  if (avgWidthField) {
    avgWidthField.classList.toggle("is-hidden", riverMode === "segment");
  }
}

function addSegmentField(form) {
  const list = form.querySelector("[data-segment-list]");
  if (!list) return;

  const index = list.querySelectorAll(".field--segment").length + 1;
  const unit = form.querySelector('[name="unit"]')?.value || "imperial";
  const suffix = unit === "metric" ? "cm" : "in";
  const wrapper = document.createElement("label");
  wrapper.className = "field field--segment";
  wrapper.innerHTML = `
    <span>Segment ${index} width (${suffix})</span>
    <input type="number" name="segmentWidth${index}" value="" step="0.1" inputmode="decimal" />
  `;
  list.append(wrapper);
}

function clearError(form) {
  const error = form.querySelector("[data-form-error]");
  if (error) error.textContent = "";
}

function showError(form, message) {
  const error = form.querySelector("[data-form-error]");
  if (error) error.textContent = message;
}

function resetPanel(shell) {
  const fallbacks = {
    "[data-result-primary]": "--",
    "[data-result-secondary]": "Start with the inputs to generate an order-ready estimate.",
    "[data-stat-raw]": "--",
    "[data-stat-split]": "--",
    "[data-stat-cost]": "--",
    "[data-stat-layers]": "--",
    "[data-compare-standard]": "--",
    "[data-compare-conservative]": "--",
    "[data-compare-product]": "--",
    "[data-product-heading]": "Match the result to the right resin class",
    "[data-product-copy]": "Use the estimate to narrow the resin class first. Then confirm product limits, cure behavior, and measurement assumptions before you make a buying decision."
  };

  Object.entries(fallbacks).forEach(([selector, value]) => {
    const node = shell.querySelector(selector);
    if (node) node.textContent = value;
  });

  const list = shell.querySelector("[data-breakdown-list]");
  if (list) {
    list.innerHTML = "<li>Enter the form values to see raw volume, buffer, and recommendation.</li>";
  }

  // Sticky bar is outside calculator-shell, search from parent section
  const section = shell.closest(".section") || shell.parentElement;
  if (section) {
    const stickyPrimary = section.querySelector("[data-sticky-primary]");
    if (stickyPrimary) stickyPrimary.textContent = "--";
    const stickyCost = section.querySelector("[data-sticky-cost]");
    if (stickyCost) stickyCost.textContent = "";
  }
}

function updatePanel(form, result) {
  const shell = form.closest(".calculator-shell");
  if (!shell) return;

  const setText = (selector, value) => {
    const node = shell.querySelector(selector);
    if (node) node.textContent = value;
  };

  setText("[data-result-primary]", result.primary);
  setText("[data-result-secondary]", result.secondary);
  setText("[data-stat-raw]", result.rawText);
  setText("[data-stat-split]", result.splitText);
  setText("[data-stat-cost]", result.costText);
  setText("[data-stat-layers]", result.layersText);
  setText("[data-compare-standard]", result.standardText);
  setText("[data-compare-conservative]", result.conservativeText);
  setText("[data-compare-product]", result.productText);
  setText("[data-product-heading]", result.product.heading);
  setText("[data-product-copy]", result.product.copy);

  // Sticky bar is outside calculator-shell, search from parent section
  const section = shell.closest(".section") || shell.parentElement;
  if (section) {
    const stickyPrimary = section.querySelector("[data-sticky-primary]");
    if (stickyPrimary) stickyPrimary.textContent = result.primary;
    const stickyCost = section.querySelector("[data-sticky-cost]");
    if (stickyCost) stickyCost.textContent = result.costText;
  }

  const breakdown = shell.querySelector("[data-breakdown-list]");
  if (breakdown) {
    breakdown.innerHTML = result.breakdown.map((item) => `<li>${item}</li>`).join("");
  }

}

function compute(form) {
  const type = form.dataset.calculatorType;
  const computer = COMPUTERS[type];
  const shell = form.closest(".calculator-shell");

  if (!computer || !shell) return;

  try {
    clearError(form);
    const result = computer(serializeForm(form));
    updatePanel(form, result);
  } catch (error) {
    showError(form, error instanceof Error ? error.message : "Please check the form inputs.");
    resetPanel(shell);
  }
}

function debounce(callback, delay = 120) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), delay);
  };
}

function handleUnitChange(form, nextUnit) {
  const previousUnit = form.dataset.unitState;
  const type = form.dataset.calculatorType;

  if (previousUnit && previousUnit !== nextUnit) {
    if (type === "garage-floor") {
      convertGarageFloorInputs(form, nextUnit);
    } else if (!["converter", "cost"].includes(type)) {
      convertLinearInputs(form, nextUnit);
    }
  }

  form.dataset.unitState = nextUnit;
  updateUnitLabels(form);
}

function initCalculator(form) {
  updateConditionalGroups(form);
  handleUnitChange(form, form.querySelector('[name="unit"]')?.value || "");
  compute(form);

  const debouncedCompute = debounce(() => compute(form));

  form.addEventListener("input", (event) => {
    if (event.target instanceof HTMLInputElement && event.target.type === "number") {
      debouncedCompute();
      return;
    }

    compute(form);
  });

  form.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches('[name="unit"]')) {
      handleUnitChange(form, target.value);
    }

    updateConditionalGroups(form);
    compute(form);
  });

  const addSegmentButton = form.querySelector("[data-add-segment]");
  if (addSegmentButton) {
    addSegmentButton.addEventListener("click", () => {
      addSegmentField(form);
      updateUnitLabels(form);
      compute(form);
    });
  }
}

document.querySelectorAll(".calculator-root").forEach((form) => {
  if (form instanceof HTMLFormElement) {
    initCalculator(form);
  }
});
