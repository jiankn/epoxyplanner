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

function formatNumber(value, digits = 2, numberLocale = "en-US") {
  return new Intl.NumberFormat(numberLocale, {
    maximumFractionDigits: digits,
    minimumFractionDigits: value !== 0 && Math.abs(value) < 10 ? Math.min(digits, 1) : 0
  }).format(value);
}

function formatMoney(value, locale = "en-US", currency = "USD") {
  if (!Number.isFinite(value)) return "Add price / gallon";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

function roundForInput(value) {
  return Number.isFinite(value) ? String(Number(value.toFixed(3))) : "";
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function runtimeOptions(data) {
  return {
    locale: data.locale || "en",
    numberLocale: data.numberLocale || "en-US",
    currency: data.currency || "USD",
    priceUnit: data.priceUnit || "gallon"
  };
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

function volumeFromSphere(diameter) {
  const radius = diameter / 2;
  return (4 / 3) * Math.PI * radius * radius * radius;
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

// 结果区动态文案。英文是默认值，其他语言缺少的键会回退到英文。
// 函数型条目接收参数对象 p，里面的数值和单位已经按语言格式化好。
// 覆盖全部计算器类型，多语言页目前用到的是 general、volume、coverage、garage-floor。
const RESULT_TEXT = {
  en: {
    secondaryDefault: (p) => `Recommended order quantity based on raw volume plus planning buffer. Equivalent to ${p.equivalent}.`,
    split: (p) => `${p.a} A / ${p.b} B (${p.ratio} example)`,
    splitUnknown: "Verify brand ratio",
    addPrice: "Add price / gallon",
    errGeneric: "Please check the form inputs.",
    errDiameterDepth: "Enter a positive diameter and depth.",
    errLengthWidthDepth: "Enter positive length, width, and depth.",
    errSurface: "Enter positive surface dimensions and coat thickness.",
    errFloor: "Enter positive floor dimensions and coverage rate.",
    shapeRectangle: "Rectangle geometry",
    shapeRound: "Round geometry",
    rawVolumeShape: (p) => `${p.shape}: ${p.dual} raw volume.`,
    wasteBuffer: (p) => `Waste buffer: +${p.pct}%.`,
    recommendedOrder: (p) => `Recommended order: ${p.volume}.`,
    conservativeNote: "Conservative scenario adds another 8% planning margin.",
    layerShallowPour: "Single coat / shallow pour",
    layerSingleLift: "Single lift if product allows",
    layerStagedLifts: (p) => `${p.n} staged lifts`,
    secondaryCoverage: (p) => `Surface estimate for ${p.area} at ${p.depth} target thickness.`,
    surfaceArea: (p) => `Surface area: ${p.area}.`,
    rawAtThickness: (p) => `Raw resin volume at target thickness: ${p.dual}.`,
    edgeSoak: (p) => `Edge soak and runoff allowance: +${p.pct}%.`,
    layerFloodCoat: "1 flood coat",
    layerThickCoat: "Thick coat, confirm product spec",
    volumeRound: (p) => `Round volume model at ${p.depth} depth.`,
    volumeRect: (p) => `Rectangular volume model at ${p.depth} depth.`,
    rawVolume: (p) => `Raw volume: ${p.dual}.`,
    coatsPlanned: (p) => `${p.n} ${pluralize(p.n, "coat")} planned`,
    secondaryFloor: (p) => `Coverage-based floor estimate for ${p.area} across ${p.n} coats.`,
    floorArea: (p) => `Floor area: ${p.area}.`,
    coverageRate: (p) => `Coverage rate: ${p.rate} ${p.areaUnit} per ${p.priceUnit === "liter" ? "L" : "gallon"}.`,
    coatsCount: (p) => `Coats planned: ${p.n}.`,
    errRiver: "Enter positive length and target depth.",
    errSegments: "Add at least one positive segment width for segment mode.",
    errAvgWidth: "Enter a positive average width or switch to segment mode.",
    riverSegmentMode: (p) => `Segment mode: ${p.n} widths across ${p.length} total length.`,
    riverQuickMode: (p) => `Quick mode uses an average river width of ${p.width}.`,
    layerOneLift: "1 lift if product allows",
    layerStagedLiftsMax: (p) => `${p.n} staged lifts at about ${p.max} max`,
    rawRiverVolume: (p) => `Raw river volume: ${p.dual}.`,
    seepage: (p) => `Seepage allowance: +${p.pct}%.`,
    sealCoat: (p) => `Seal-coat allowance: +${p.pct}%.`,
    errDeepPour: "Enter positive length, width, total depth, and max layer depth.",
    liftsAtMax: (p) => `${p.n} ${pluralize(p.n, "lift")} at about ${p.max} max`,
    rawCastingVolume: (p) => `Raw casting volume: ${p.dual}.`,
    plannedMaxLift: (p) => `Planned maximum lift depth: ${p.depth}.`,
    stagedPours: (p) => `Estimated staged pours: ${p.n}.`,
    errSurfaceCoat: "Enter positive length, width, and coat thickness.",
    layerMultipleThin: "May need multiple thin coats",
    secondarySurface: (p) => `Surface estimate for ${p.area} with a target thickness of ${p.depth}.`,
    rawCoatVolume: (p) => `Raw coat volume: ${p.dual}.`,
    edgeRunoff: (p) => `Edge and runoff allowance: +${p.pct}%.`,
    shallowVsDeep: "Shallow coating logic is different from deep-pour casting logic.",
    errVoid: "Enter positive void dimensions.",
    layerSingleFill: "Single fill if product allows",
    layerStagedFills: (p) => `${p.n} staged fills`,
    rawCavityVolume: (p) => `Raw cavity volume: ${p.dual}.`,
    sandingOverfill: (p) => `Sanding overfill allowance: +${p.pct}%.`,
    voidFillNote: "Void-fill work usually needs more cleanup margin than a simple formula suggests.",
    layerShallowFill: "Single coat / shallow fill",
    layerConfirmDepth: "Confirm product depth limit",
    roundVolume: (p) => `Round geometry volume: ${p.dual}.`,
    irregularEdgeNote: "Use the conservative scenario if the edge detail is irregular.",
    errSphere: "Enter a positive sphere diameter.",
    layerSingleCast: "Single cast if product allows",
    layerConfirmMass: "Confirm mass and depth limit",
    sphereDiameter: (p) => `Sphere diameter: ${p.depth}.`,
    rawSphereVolume: (p) => `Raw sphere volume: ${p.dual}.`,
    spruesMarginNote: "Use a conservative margin for sprues, trimming, and overflow.",
    errCylinder: "Enter a positive cylinder diameter and height.",
    layerStagedLiftsIfNeeded: (p) => `${p.n} staged lifts if needed`,
    cylinderDiameter: (p) => `Cylinder diameter: ${p.depth}.`,
    filledHeight: (p) => `Filled height: ${p.depth}.`,
    rawCylinderVolume: (p) => `Raw cylinder volume: ${p.dual}.`,
    errCube: "Enter a positive cube side length.",
    layerSingleCubeCast: "Single cube cast if product allows",
    cubeSide: (p) => `Cube side length: ${p.depth}.`,
    rawCubeVolume: (p) => `Raw cube volume: ${p.dual}.`,
    spruesBufferNote: "Use extra buffer for sprues, overflow, and trimming.",
    errQuantity: "Enter a positive quantity.",
    layerBudgetOnly: "Budget model only",
    budgetLiters: "Budget based on entered liters",
    budgetGallons: "Budget based on entered gallons",
    baseQuantity: (p) => `Base quantity: ${p.volume}.`,
    budgetQuantity: (p) => `Recommended budget quantity: ${p.volume}.`,
    kitSizesNote: "Compare real merchant kit sizes against the rounded recommendation.",
    errConvert: "Enter a positive value to convert.",
    converterSecondary: (p) => `${p.source} equals ${p.target}. Equivalent mixed volume: ${p.dual}.`,
    returnToCalculator: "Return to a project calculator",
    conversionOnly: "Conversion only",
    sourceValue: (p) => `Source value: ${p.source}.`,
    convertedTarget: (p) => `Converted target: ${p.target}.`,
    equivalentVolume: (p) => `Equivalent volume: ${p.dual}.`,
    converterNote: "Use the converted number inside the project calculator that matches your actual job."
  },
  de: {
    secondaryDefault: (p) => `Empfohlene Bestellmenge aus Rohvolumen plus Planungsreserve.${p.equivalent ? ` Entspricht ${p.equivalent}.` : ""}`,
    split: (p) => `${p.a} A / ${p.b} B (Beispiel ${p.ratio})`,
    splitUnknown: "Mischverhältnis laut Hersteller prüfen",
    addPrice: (p) => (p.priceUnit === "liter" ? "Preis pro Liter eingeben" : "Preis pro Gallone eingeben"),
    errGeneric: "Bitte prüfe die Eingaben.",
    errDiameterDepth: "Gib einen Durchmesser und eine Tiefe größer als 0 ein.",
    errLengthWidthDepth: "Gib Länge, Breite und Tiefe größer als 0 ein.",
    errSurface: "Gib Flächenmaße und eine Schichtdicke größer als 0 ein.",
    errFloor: "Gib Bodenmaße und eine Reichweite größer als 0 ein.",
    shapeRectangle: "Rechteck",
    shapeRound: "Kreisform",
    rawVolumeShape: (p) => `${p.shape}: ${p.dual} Rohvolumen.`,
    wasteBuffer: (p) => `Reserve: +${p.pct} %.`,
    recommendedOrder: (p) => `Empfohlene Bestellmenge: ${p.volume}.`,
    conservativeNote: "Das konservative Szenario rechnet weitere 8 % Reserve ein.",
    layerShallowPour: "Eine Schicht / flacher Guss",
    layerSingleLift: "In einem Guss, sofern das Produkt es zulässt",
    layerStagedLifts: (p) => `${p.n} Gussschichten nacheinander`,
    secondaryCoverage: (p) => `Flächenschätzung für ${p.area} bei ${p.depth} Schichtdicke.`,
    surfaceArea: (p) => `Fläche: ${p.area}.`,
    rawAtThickness: (p) => `Rohvolumen bei Zielschichtdicke: ${p.dual}.`,
    edgeSoak: (p) => `Zuschlag für Kanten und Ablaufverluste: +${p.pct} %.`,
    layerFloodCoat: "1 gegossene Deckschicht",
    layerThickCoat: "Dicke Schicht, Datenblatt prüfen",
    volumeRound: (p) => `Berechnet als runde Form mit ${p.depth} Tiefe.`,
    volumeRect: (p) => `Berechnet als Rechteck mit ${p.depth} Tiefe.`,
    rawVolume: (p) => `Rohvolumen: ${p.dual}.`,
    coatsPlanned: (p) => `${p.n} ${p.n === 1 ? "Schicht" : "Schichten"} geplant`,
    secondaryFloor: (p) => `Schätzung anhand der Reichweite für ${p.area} Bodenfläche mit ${p.n} ${p.n === 1 ? "Schicht" : "Schichten"}.`,
    floorArea: (p) => `Bodenfläche: ${p.area}.`,
    coverageRate: (p) => `Reichweite: ${p.rate} ${p.areaUnit} pro ${p.priceUnit === "liter" ? "Liter" : "Gallone"}.`,
    coatsCount: (p) => `Geplante Schichten: ${p.n}.`,
    errRiver: "Gib eine Länge und eine Zieltiefe größer als 0 ein.",
    errSegments: "Gib im Segmentmodus mindestens eine Segmentbreite größer als 0 ein.",
    errAvgWidth: "Gib eine Durchschnittsbreite größer als 0 ein oder wechsle in den Segmentmodus.",
    riverSegmentMode: (p) => `Segmentmodus: ${p.n} Breiten über ${p.length} Gesamtlänge.`,
    riverQuickMode: (p) => `Schnellmodus mit einer durchschnittlichen Flussbreite von ${p.width}.`,
    layerOneLift: "In einem Guss, sofern das Produkt es zulässt",
    layerStagedLiftsMax: (p) => `${p.n} Gussschichten zu je max. ca. ${p.max}`,
    rawRiverVolume: (p) => `Rohvolumen des Flusses: ${p.dual}.`,
    seepage: (p) => `Zuschlag für Einsickern und Leckagen: +${p.pct} %.`,
    sealCoat: (p) => `Zuschlag für die Versiegelungsschicht: +${p.pct} %.`,
    errDeepPour: "Gib Länge, Breite, Gesamttiefe und maximale Schichtdicke größer als 0 ein.",
    liftsAtMax: (p) => `${p.n} ${p.n === 1 ? "Gussschicht" : "Gussschichten"} zu je max. ca. ${p.max}`,
    rawCastingVolume: (p) => `Rohvolumen des Gusses: ${p.dual}.`,
    plannedMaxLift: (p) => `Geplante maximale Schichtdicke pro Guss: ${p.depth}.`,
    stagedPours: (p) => `Geschätzte Anzahl Güsse: ${p.n}.`,
    errSurfaceCoat: "Gib Länge, Breite und Schichtdicke größer als 0 ein.",
    layerMultipleThin: "Eventuell mehrere dünne Schichten nötig",
    secondarySurface: (p) => `Flächenschätzung für ${p.area} mit einer Zielschichtdicke von ${p.depth}.`,
    rawCoatVolume: (p) => `Rohvolumen der Beschichtung: ${p.dual}.`,
    edgeRunoff: (p) => `Zuschlag für Kanten und Ablaufverluste: +${p.pct} %.`,
    shallowVsDeep: "Dünne Beschichtungen folgen einer anderen Logik als dicke Gießharz-Güsse.",
    errVoid: "Gib Maße der Fehlstelle größer als 0 ein.",
    layerSingleFill: "In einem Durchgang füllen, sofern das Produkt es zulässt",
    layerStagedFills: (p) => `${p.n} Füllungen nacheinander`,
    rawCavityVolume: (p) => `Rohvolumen der Fehlstelle: ${p.dual}.`,
    sandingOverfill: (p) => `Zuschlag fürs Überfüllen und Abschleifen: +${p.pct} %.`,
    voidFillNote: "Beim Füllen von Rissen und Astlöchern geht meist mehr Material verloren, als die Formel zeigt.",
    layerShallowFill: "Eine Schicht / flache Füllung",
    layerConfirmDepth: "Maximale Schichtdicke des Produkts prüfen",
    roundVolume: (p) => `Volumen der runden Form: ${p.dual}.`,
    irregularEdgeNote: "Nutze das konservative Szenario, wenn der Rand unregelmäßig ist.",
    errSphere: "Gib einen Kugeldurchmesser größer als 0 ein.",
    layerSingleCast: "In einem Guss, sofern das Produkt es zulässt",
    layerConfirmMass: "Masse und maximale Gießtiefe prüfen",
    sphereDiameter: (p) => `Kugeldurchmesser: ${p.depth}.`,
    rawSphereVolume: (p) => `Rohvolumen der Kugel: ${p.dual}.`,
    spruesMarginNote: "Plane eine großzügige Reserve für Angüsse, Nacharbeit und Überlauf ein.",
    errCylinder: "Gib Durchmesser und Höhe des Zylinders größer als 0 ein.",
    layerStagedLiftsIfNeeded: (p) => `Bei Bedarf ${p.n} Gussschichten nacheinander`,
    cylinderDiameter: (p) => `Zylinderdurchmesser: ${p.depth}.`,
    filledHeight: (p) => `Füllhöhe: ${p.depth}.`,
    rawCylinderVolume: (p) => `Rohvolumen des Zylinders: ${p.dual}.`,
    errCube: "Gib eine Kantenlänge größer als 0 ein.",
    layerSingleCubeCast: "Würfel in einem Guss, sofern das Produkt es zulässt",
    cubeSide: (p) => `Kantenlänge des Würfels: ${p.depth}.`,
    rawCubeVolume: (p) => `Rohvolumen des Würfels: ${p.dual}.`,
    spruesBufferNote: "Plane zusätzliche Reserve für Angüsse, Überlauf und Nacharbeit ein.",
    errQuantity: "Gib eine Menge größer als 0 ein.",
    layerBudgetOnly: "Nur Budgetrechnung",
    budgetLiters: "Budget auf Basis der eingegebenen Liter",
    budgetGallons: "Budget auf Basis der eingegebenen Gallonen",
    baseQuantity: (p) => `Ausgangsmenge: ${p.volume}.`,
    budgetQuantity: (p) => `Empfohlene Menge fürs Budget: ${p.volume}.`,
    kitSizesNote: "Vergleiche echte Gebindegrößen im Handel mit der gerundeten Empfehlung.",
    errConvert: "Gib einen Wert größer als 0 zum Umrechnen ein.",
    converterSecondary: (p) => `${p.source} entsprechen ${p.target}. Mischvolumen: ${p.dual}.`,
    returnToCalculator: "Zurück zu einem Projektrechner",
    conversionOnly: "Nur Umrechnung",
    sourceValue: (p) => `Ausgangswert: ${p.source}.`,
    convertedTarget: (p) => `Umgerechnet: ${p.target}.`,
    equivalentVolume: (p) => `Entsprechendes Volumen: ${p.dual}.`,
    converterNote: "Nutze den umgerechneten Wert im Projektrechner, der zu deinem Vorhaben passt."
  },
  fr: {
    secondaryDefault: (p) => `Quantité à commander : volume brut plus marge de sécurité.${p.equivalent ? ` Soit ${p.equivalent}.` : ""}`,
    split: (p) => `${p.a} A / ${p.b} B (exemple ${p.ratio})`,
    splitUnknown: "Vérifiez le rapport de mélange du fabricant",
    addPrice: (p) => (p.priceUnit === "liter" ? "Indiquez le prix par litre" : "Indiquez le prix par gallon"),
    errGeneric: "Vérifiez les valeurs saisies.",
    errDiameterDepth: "Saisissez un diamètre et une profondeur supérieurs à 0.",
    errLengthWidthDepth: "Saisissez une longueur, une largeur et une profondeur supérieures à 0.",
    errSurface: "Saisissez des dimensions de surface et une épaisseur supérieures à 0.",
    errFloor: "Saisissez des dimensions de sol et un rendement supérieurs à 0.",
    shapeRectangle: "Forme rectangulaire",
    shapeRound: "Forme ronde",
    rawVolumeShape: (p) => `${p.shape} : ${p.dual} de volume brut.`,
    wasteBuffer: (p) => `Marge : +${p.pct} %.`,
    recommendedOrder: (p) => `Quantité recommandée : ${p.volume}.`,
    conservativeNote: "Le scénario prudent ajoute encore 8 % de marge.",
    layerShallowPour: "Une couche / coulée peu épaisse",
    layerSingleLift: "Une seule coulée si le produit le permet",
    layerStagedLifts: (p) => `${p.n} coulées successives`,
    secondaryCoverage: (p) => `Estimation pour ${p.area} à ${p.depth} d’épaisseur.`,
    surfaceArea: (p) => `Surface : ${p.area}.`,
    rawAtThickness: (p) => `Volume brut à l’épaisseur visée : ${p.dual}.`,
    edgeSoak: (p) => `Marge pour bords et coulures : +${p.pct} %.`,
    layerFloodCoat: "1 couche de finition coulée",
    layerThickCoat: "Couche épaisse, vérifiez la fiche technique",
    volumeRound: (p) => `Calcul pour une forme ronde de ${p.depth} de profondeur.`,
    volumeRect: (p) => `Calcul pour une forme rectangulaire de ${p.depth} de profondeur.`,
    rawVolume: (p) => `Volume brut : ${p.dual}.`,
    coatsPlanned: (p) => (p.n === 1 ? "1 couche prévue" : `${p.n} couches prévues`),
    secondaryFloor: (p) => `Estimation du sol selon le rendement pour ${p.area} en ${p.n} ${p.n === 1 ? "couche" : "couches"}.`,
    floorArea: (p) => `Surface du sol : ${p.area}.`,
    coverageRate: (p) => `Rendement : ${p.rate} ${p.areaUnit} par ${p.priceUnit === "liter" ? "litre" : "gallon"}.`,
    coatsCount: (p) => `Couches prévues : ${p.n}.`,
    errRiver: "Saisissez une longueur et une profondeur cible supérieures à 0.",
    errSegments: "En mode segments, ajoutez au moins une largeur supérieure à 0.",
    errAvgWidth: "Saisissez une largeur moyenne supérieure à 0 ou passez en mode segments.",
    riverSegmentMode: (p) => `Mode segments : ${p.n} largeurs sur ${p.length} de longueur totale.`,
    riverQuickMode: (p) => `Le mode rapide utilise une largeur moyenne de rivière de ${p.width}.`,
    layerOneLift: "1 coulée si le produit le permet",
    layerStagedLiftsMax: (p) => `${p.n} coulées successives (env. ${p.max} max. chacune)`,
    rawRiverVolume: (p) => `Volume brut de la rivière : ${p.dual}.`,
    seepage: (p) => `Marge pour l’absorption et les fuites : +${p.pct} %.`,
    sealCoat: (p) => `Marge pour la couche de bouche-pores : +${p.pct} %.`,
    errDeepPour: "Saisissez une longueur, une largeur, une profondeur totale et une épaisseur max. par couche supérieures à 0.",
    liftsAtMax: (p) => (p.n === 1 ? `1 coulée (env. ${p.max} max.)` : `${p.n} coulées (env. ${p.max} max. chacune)`),
    rawCastingVolume: (p) => `Volume brut de coulée : ${p.dual}.`,
    plannedMaxLift: (p) => `Épaisseur maximale prévue par coulée : ${p.depth}.`,
    stagedPours: (p) => `Nombre de coulées estimé : ${p.n}.`,
    errSurfaceCoat: "Saisissez une longueur, une largeur et une épaisseur supérieures à 0.",
    layerMultipleThin: "Plusieurs couches fines peuvent être nécessaires",
    secondarySurface: (p) => `Estimation pour ${p.area} avec une épaisseur cible de ${p.depth}.`,
    rawCoatVolume: (p) => `Volume brut de la couche : ${p.dual}.`,
    edgeRunoff: (p) => `Marge pour bords et coulures : +${p.pct} %.`,
    shallowVsDeep: "Une finition fine ne se calcule pas comme une coulée épaisse.",
    errVoid: "Saisissez des dimensions de cavité supérieures à 0.",
    layerSingleFill: "Un seul remplissage si le produit le permet",
    layerStagedFills: (p) => `${p.n} remplissages successifs`,
    rawCavityVolume: (p) => `Volume brut de la cavité : ${p.dual}.`,
    sandingOverfill: (p) => `Marge de surépaisseur pour le ponçage : +${p.pct} %.`,
    voidFillNote: "Le comblement de fissures et de nœuds demande souvent plus de marge que ne l’indique la formule.",
    layerShallowFill: "Une couche / remplissage peu épais",
    layerConfirmDepth: "Vérifiez l’épaisseur maximale du produit",
    roundVolume: (p) => `Volume de la forme ronde : ${p.dual}.`,
    irregularEdgeNote: "Utilisez le scénario prudent si le bord est irrégulier.",
    errSphere: "Saisissez un diamètre de sphère supérieur à 0.",
    layerSingleCast: "Une seule coulée si le produit le permet",
    layerConfirmMass: "Vérifiez la masse et l’épaisseur maximale",
    sphereDiameter: (p) => `Diamètre de la sphère : ${p.depth}.`,
    rawSphereVolume: (p) => `Volume brut de la sphère : ${p.dual}.`,
    spruesMarginNote: "Prévoyez une marge pour les canaux de coulée, l’ébavurage et le débordement.",
    errCylinder: "Saisissez un diamètre et une hauteur de cylindre supérieurs à 0.",
    layerStagedLiftsIfNeeded: (p) => `${p.n} coulées successives si nécessaire`,
    cylinderDiameter: (p) => `Diamètre du cylindre : ${p.depth}.`,
    filledHeight: (p) => `Hauteur de remplissage : ${p.depth}.`,
    rawCylinderVolume: (p) => `Volume brut du cylindre : ${p.dual}.`,
    errCube: "Saisissez un côté de cube supérieur à 0.",
    layerSingleCubeCast: "Cube en une seule coulée si le produit le permet",
    cubeSide: (p) => `Côté du cube : ${p.depth}.`,
    rawCubeVolume: (p) => `Volume brut du cube : ${p.dual}.`,
    spruesBufferNote: "Prévoyez une marge supplémentaire pour les canaux de coulée, le débordement et l’ébavurage.",
    errQuantity: "Saisissez une quantité supérieure à 0.",
    layerBudgetOnly: "Calcul de budget uniquement",
    budgetLiters: "Budget basé sur les litres saisis",
    budgetGallons: "Budget basé sur les gallons saisis",
    baseQuantity: (p) => `Quantité de base : ${p.volume}.`,
    budgetQuantity: (p) => `Quantité recommandée pour le budget : ${p.volume}.`,
    kitSizesNote: "Comparez les formats de kits réellement vendus avec la recommandation arrondie.",
    errConvert: "Saisissez une valeur supérieure à 0 à convertir.",
    converterSecondary: (p) => `${p.source} = ${p.target}. Volume de mélange équivalent : ${p.dual}.`,
    returnToCalculator: "Revenir à un calculateur de projet",
    conversionOnly: "Conversion uniquement",
    sourceValue: (p) => `Valeur de départ : ${p.source}.`,
    convertedTarget: (p) => `Valeur convertie : ${p.target}.`,
    equivalentVolume: (p) => `Volume équivalent : ${p.dual}.`,
    converterNote: "Utilisez la valeur convertie dans le calculateur adapté à votre projet."
  },
  "pt-BR": {
    secondaryDefault: (p) => `Quantidade recomendada para compra: volume bruto mais a sobra prevista.${p.equivalent ? ` Equivale a ${p.equivalent}.` : ""}`,
    split: (p) => `${p.a} A / ${p.b} B (exemplo ${p.ratio})`,
    splitUnknown: "Confira a proporção do fabricante",
    addPrice: (p) => (p.priceUnit === "liter" ? "Informe o preço por litro" : "Informe o preço por galão"),
    errGeneric: "Confira os valores informados.",
    errDiameterDepth: "Informe diâmetro e profundidade maiores que zero.",
    errLengthWidthDepth: "Informe comprimento, largura e profundidade maiores que zero.",
    errSurface: "Informe medidas da superfície e espessura maiores que zero.",
    errFloor: "Informe medidas do piso e rendimento maiores que zero.",
    shapeRectangle: "Formato retangular",
    shapeRound: "Formato redondo",
    rawVolumeShape: (p) => `${p.shape}: ${p.dual} de volume bruto.`,
    wasteBuffer: (p) => `Sobra: +${p.pct}%.`,
    recommendedOrder: (p) => `Quantidade recomendada: ${p.volume}.`,
    conservativeNote: "O cenário conservador soma mais 8% de sobra.",
    layerShallowPour: "Uma camada fina / aplicação rasa",
    layerSingleLift: "Uma única camada, se o produto permitir",
    layerStagedLifts: (p) => `${p.n} camadas em etapas`,
    secondaryCoverage: (p) => `Estimativa para ${p.area} com ${p.depth} de espessura.`,
    surfaceArea: (p) => `Área: ${p.area}.`,
    rawAtThickness: (p) => `Volume bruto na espessura desejada: ${p.dual}.`,
    edgeSoak: (p) => `Sobra para bordas e escorrimento: +${p.pct}%.`,
    layerFloodCoat: "1 camada de cobertura",
    layerThickCoat: "Camada grossa, confira a ficha técnica",
    volumeRound: (p) => `Cálculo para formato redondo com ${p.depth} de profundidade.`,
    volumeRect: (p) => `Cálculo para formato retangular com ${p.depth} de profundidade.`,
    rawVolume: (p) => `Volume bruto: ${p.dual}.`,
    coatsPlanned: (p) => (p.n === 1 ? "1 demão prevista" : `${p.n} demãos previstas`),
    secondaryFloor: (p) => `Estimativa do piso pelo rendimento para ${p.area} em ${p.n} ${p.n === 1 ? "demão" : "demãos"}.`,
    floorArea: (p) => `Área do piso: ${p.area}.`,
    coverageRate: (p) => `Rendimento: ${p.rate} ${p.areaUnit} por ${p.priceUnit === "liter" ? "litro" : "galão"}.`,
    coatsCount: (p) => `Demãos previstas: ${p.n}.`,
    errRiver: "Informe comprimento e profundidade alvo maiores que zero.",
    errSegments: "No modo por segmentos, informe pelo menos uma largura maior que zero.",
    errAvgWidth: "Informe uma largura média maior que zero ou mude para o modo por segmentos.",
    riverSegmentMode: (p) => `Modo por segmentos: ${p.n} larguras ao longo de ${p.length} de comprimento total.`,
    riverQuickMode: (p) => `O modo rápido usa uma largura média do rio de ${p.width}.`,
    layerOneLift: "1 camada, se o produto permitir",
    layerStagedLiftsMax: (p) => `${p.n} camadas em etapas de até cerca de ${p.max}`,
    rawRiverVolume: (p) => `Volume bruto do rio: ${p.dual}.`,
    seepage: (p) => `Sobra para absorção e vazamentos: +${p.pct}%.`,
    sealCoat: (p) => `Sobra para a camada seladora: +${p.pct}%.`,
    errDeepPour: "Informe comprimento, largura, profundidade total e camada máxima maiores que zero.",
    liftsAtMax: (p) => `${p.n} ${p.n === 1 ? "camada" : "camadas"} de até cerca de ${p.max}`,
    rawCastingVolume: (p) => `Volume bruto da peça: ${p.dual}.`,
    plannedMaxLift: (p) => `Espessura máxima planejada por camada: ${p.depth}.`,
    stagedPours: (p) => `Camadas estimadas: ${p.n}.`,
    errSurfaceCoat: "Informe comprimento, largura e espessura maiores que zero.",
    layerMultipleThin: "Pode exigir várias camadas finas",
    secondarySurface: (p) => `Estimativa para ${p.area} com espessura alvo de ${p.depth}.`,
    rawCoatVolume: (p) => `Volume bruto da camada: ${p.dual}.`,
    edgeRunoff: (p) => `Sobra para bordas e escorrimento: +${p.pct}%.`,
    shallowVsDeep: "Revestimento fino segue uma lógica diferente da resina de alta espessura.",
    errVoid: "Informe medidas da cavidade maiores que zero.",
    layerSingleFill: "Um único preenchimento, se o produto permitir",
    layerStagedFills: (p) => `${p.n} preenchimentos em etapas`,
    rawCavityVolume: (p) => `Volume bruto da cavidade: ${p.dual}.`,
    sandingOverfill: (p) => `Sobra para o excesso a ser lixado: +${p.pct}%.`,
    voidFillNote: "Preencher falhas e nós costuma exigir mais sobra do que a fórmula indica.",
    layerShallowFill: "Uma camada / preenchimento raso",
    layerConfirmDepth: "Confira a espessura máxima do produto",
    roundVolume: (p) => `Volume da peça redonda: ${p.dual}.`,
    irregularEdgeNote: "Use o cenário conservador se a borda for irregular.",
    errSphere: "Informe um diâmetro da esfera maior que zero.",
    layerSingleCast: "Em uma única etapa, se o produto permitir",
    layerConfirmMass: "Confira a massa e a espessura máxima",
    sphereDiameter: (p) => `Diâmetro da esfera: ${p.depth}.`,
    rawSphereVolume: (p) => `Volume bruto da esfera: ${p.dual}.`,
    spruesMarginNote: "Use uma margem conservadora para canais de alimentação, acabamento e transbordo.",
    errCylinder: "Informe diâmetro e altura do cilindro maiores que zero.",
    layerStagedLiftsIfNeeded: (p) => `${p.n} camadas em etapas, se necessário`,
    cylinderDiameter: (p) => `Diâmetro do cilindro: ${p.depth}.`,
    filledHeight: (p) => `Altura de preenchimento: ${p.depth}.`,
    rawCylinderVolume: (p) => `Volume bruto do cilindro: ${p.dual}.`,
    errCube: "Informe um lado do cubo maior que zero.",
    layerSingleCubeCast: "Cubo em uma única etapa, se o produto permitir",
    cubeSide: (p) => `Lado do cubo: ${p.depth}.`,
    rawCubeVolume: (p) => `Volume bruto do cubo: ${p.dual}.`,
    spruesBufferNote: "Some sobra extra para canais de alimentação, transbordo e acabamento.",
    errQuantity: "Informe uma quantidade maior que zero.",
    layerBudgetOnly: "Apenas orçamento",
    budgetLiters: "Orçamento com base nos litros informados",
    budgetGallons: "Orçamento com base nos galões informados",
    baseQuantity: (p) => `Quantidade base: ${p.volume}.`,
    budgetQuantity: (p) => `Quantidade recomendada para o orçamento: ${p.volume}.`,
    kitSizesNote: "Compare os tamanhos reais de kit à venda com a recomendação arredondada.",
    errConvert: "Informe um valor maior que zero para converter.",
    converterSecondary: (p) => `${p.source} equivalem a ${p.target}. Volume da mistura equivalente: ${p.dual}.`,
    returnToCalculator: "Voltar para uma calculadora de projeto",
    conversionOnly: "Apenas conversão",
    sourceValue: (p) => `Valor de origem: ${p.source}.`,
    convertedTarget: (p) => `Valor convertido: ${p.target}.`,
    equivalentVolume: (p) => `Volume equivalente: ${p.dual}.`,
    converterNote: "Use o valor convertido na calculadora que corresponde ao seu projeto."
  },
  es: {
    secondaryDefault: (p) => `Cantidad recomendada para comprar: volumen bruto más margen de seguridad.${p.equivalent ? ` Equivale a ${p.equivalent}.` : ""}`,
    split: (p) => `${p.a} A / ${p.b} B (ejemplo ${p.ratio})`,
    splitUnknown: "Comprueba la proporción de mezcla del fabricante",
    addPrice: (p) => (p.priceUnit === "liter" ? "Indica el precio por litro" : "Indica el precio por galón"),
    errGeneric: "Revisa los valores introducidos.",
    errDiameterDepth: "Introduce un diámetro y una profundidad mayores que cero.",
    errLengthWidthDepth: "Introduce largo, ancho y profundidad mayores que cero.",
    errSurface: "Introduce medidas de superficie y espesor mayores que cero.",
    errFloor: "Introduce medidas del suelo y un rendimiento mayores que cero.",
    shapeRectangle: "Forma rectangular",
    shapeRound: "Forma redonda",
    rawVolumeShape: (p) => `${p.shape}: ${p.dual} de volumen bruto.`,
    wasteBuffer: (p) => `Margen: +${p.pct} %.`,
    recommendedOrder: (p) => `Cantidad recomendada: ${p.volume}.`,
    conservativeNote: "El escenario conservador añade otro 8 % de margen.",
    layerShallowPour: "Una capa / vertido poco profundo",
    layerSingleLift: "Un solo vertido si el producto lo permite",
    layerStagedLifts: (p) => `${p.n} vertidos en capas sucesivas`,
    secondaryCoverage: (p) => `Estimación para ${p.area} con ${p.depth} de espesor.`,
    surfaceArea: (p) => `Superficie: ${p.area}.`,
    rawAtThickness: (p) => `Volumen bruto con el espesor previsto: ${p.dual}.`,
    edgeSoak: (p) => `Margen para bordes y goteos: +${p.pct} %.`,
    layerFloodCoat: "1 capa de recubrimiento",
    layerThickCoat: "Capa gruesa, revisa la ficha técnica",
    volumeRound: (p) => `Cálculo para forma redonda de ${p.depth} de profundidad.`,
    volumeRect: (p) => `Cálculo para forma rectangular de ${p.depth} de profundidad.`,
    rawVolume: (p) => `Volumen bruto: ${p.dual}.`,
    coatsPlanned: (p) => (p.n === 1 ? "1 capa prevista" : `${p.n} capas previstas`),
    secondaryFloor: (p) => `Estimación del suelo según rendimiento para ${p.area} en ${p.n} ${p.n === 1 ? "capa" : "capas"}.`,
    floorArea: (p) => `Superficie del suelo: ${p.area}.`,
    coverageRate: (p) => `Rendimiento: ${p.rate} ${p.areaUnit} por ${p.priceUnit === "liter" ? "litro" : "galón"}.`,
    coatsCount: (p) => `Capas previstas: ${p.n}.`,
    errRiver: "Introduce un largo y una profundidad objetivo mayores que cero.",
    errSegments: "En el modo por segmentos, añade al menos un ancho mayor que cero.",
    errAvgWidth: "Introduce un ancho medio mayor que cero o cambia al modo por segmentos.",
    riverSegmentMode: (p) => `Modo por segmentos: ${p.n} anchos a lo largo de ${p.length} de largo total.`,
    riverQuickMode: (p) => `El modo rápido usa un ancho medio del río de ${p.width}.`,
    layerOneLift: "1 vertido si el producto lo permite",
    layerStagedLiftsMax: (p) => `${p.n} vertidos sucesivos de unos ${p.max} como máximo`,
    rawRiverVolume: (p) => `Volumen bruto del río: ${p.dual}.`,
    seepage: (p) => `Margen por absorción y fugas: +${p.pct} %.`,
    sealCoat: (p) => `Margen para la capa de sellado: +${p.pct} %.`,
    errDeepPour: "Introduce largo, ancho, profundidad total y capa máxima mayores que cero.",
    liftsAtMax: (p) => `${p.n} ${p.n === 1 ? "vertido" : "vertidos"} de unos ${p.max} como máximo`,
    rawCastingVolume: (p) => `Volumen bruto de colada: ${p.dual}.`,
    plannedMaxLift: (p) => `Espesor máximo previsto por vertido: ${p.depth}.`,
    stagedPours: (p) => `Vertidos estimados: ${p.n}.`,
    errSurfaceCoat: "Introduce largo, ancho y espesor mayores que cero.",
    layerMultipleThin: "Puede requerir varias capas finas",
    secondarySurface: (p) => `Estimación para ${p.area} con un espesor objetivo de ${p.depth}.`,
    rawCoatVolume: (p) => `Volumen bruto de la capa: ${p.dual}.`,
    edgeRunoff: (p) => `Margen para bordes y goteos: +${p.pct} %.`,
    shallowVsDeep: "Un recubrimiento fino se calcula de forma distinta a una colada gruesa.",
    errVoid: "Introduce medidas del hueco mayores que cero.",
    layerSingleFill: "Un solo relleno si el producto lo permite",
    layerStagedFills: (p) => `${p.n} rellenos por capas`,
    rawCavityVolume: (p) => `Volumen bruto del hueco: ${p.dual}.`,
    sandingOverfill: (p) => `Margen de exceso para lijar: +${p.pct} %.`,
    voidFillNote: "Rellenar grietas y nudos suele necesitar más margen del que indica la fórmula.",
    layerShallowFill: "Una capa / relleno poco profundo",
    layerConfirmDepth: "Comprueba el espesor máximo del producto",
    roundVolume: (p) => `Volumen de la pieza redonda: ${p.dual}.`,
    irregularEdgeNote: "Usa el escenario conservador si el borde es irregular.",
    errSphere: "Introduce un diámetro de esfera mayor que cero.",
    layerSingleCast: "Una sola colada si el producto lo permite",
    layerConfirmMass: "Comprueba la masa y el espesor máximo",
    sphereDiameter: (p) => `Diámetro de la esfera: ${p.depth}.`,
    rawSphereVolume: (p) => `Volumen bruto de la esfera: ${p.dual}.`,
    spruesMarginNote: "Usa un margen conservador para bebederos, recortes y rebose.",
    errCylinder: "Introduce un diámetro y una altura del cilindro mayores que cero.",
    layerStagedLiftsIfNeeded: (p) => `${p.n} vertidos sucesivos si hace falta`,
    cylinderDiameter: (p) => `Diámetro del cilindro: ${p.depth}.`,
    filledHeight: (p) => `Altura de llenado: ${p.depth}.`,
    rawCylinderVolume: (p) => `Volumen bruto del cilindro: ${p.dual}.`,
    errCube: "Introduce un lado del cubo mayor que cero.",
    layerSingleCubeCast: "Cubo en una sola colada si el producto lo permite",
    cubeSide: (p) => `Lado del cubo: ${p.depth}.`,
    rawCubeVolume: (p) => `Volumen bruto del cubo: ${p.dual}.`,
    spruesBufferNote: "Añade margen extra para bebederos, rebose y recortes.",
    errQuantity: "Introduce una cantidad mayor que cero.",
    layerBudgetOnly: "Solo presupuesto",
    budgetLiters: "Presupuesto según los litros introducidos",
    budgetGallons: "Presupuesto según los galones introducidos",
    baseQuantity: (p) => `Cantidad base: ${p.volume}.`,
    budgetQuantity: (p) => `Cantidad recomendada para el presupuesto: ${p.volume}.`,
    kitSizesNote: "Compara los tamaños reales de kit a la venta con la recomendación redondeada.",
    errConvert: "Introduce un valor mayor que cero para convertir.",
    converterSecondary: (p) => `${p.source} equivalen a ${p.target}. Volumen de mezcla equivalente: ${p.dual}.`,
    returnToCalculator: "Volver a una calculadora de proyecto",
    conversionOnly: "Solo conversión",
    sourceValue: (p) => `Valor de origen: ${p.source}.`,
    convertedTarget: (p) => `Valor convertido: ${p.target}.`,
    equivalentVolume: (p) => `Volumen equivalente: ${p.dual}.`,
    converterNote: "Usa el valor convertido en la calculadora que corresponda a tu proyecto."
  },
  it: {
    secondaryDefault: (p) => `Quantità consigliata da ordinare: volume grezzo più margine di sicurezza.${p.equivalent ? ` Equivale a ${p.equivalent}.` : ""}`,
    split: (p) => `${p.a} A / ${p.b} B (esempio ${p.ratio})`,
    splitUnknown: "Verifica il rapporto di miscelazione del produttore",
    addPrice: (p) => (p.priceUnit === "liter" ? "Inserisci il prezzo al litro" : "Inserisci il prezzo al gallone"),
    errGeneric: "Controlla i valori inseriti.",
    errDiameterDepth: "Inserisci diametro e profondità maggiori di zero.",
    errLengthWidthDepth: "Inserisci lunghezza, larghezza e profondità maggiori di zero.",
    errSurface: "Inserisci dimensioni della superficie e spessore maggiori di zero.",
    errFloor: "Inserisci dimensioni del pavimento e resa maggiori di zero.",
    shapeRectangle: "Forma rettangolare",
    shapeRound: "Forma rotonda",
    rawVolumeShape: (p) => `${p.shape}: ${p.dual} di volume grezzo.`,
    wasteBuffer: (p) => `Margine: +${p.pct}%.`,
    recommendedOrder: (p) => `Quantità consigliata: ${p.volume}.`,
    conservativeNote: "Lo scenario prudente aggiunge un ulteriore 8% di margine.",
    layerShallowPour: "Uno strato / colata sottile",
    layerSingleLift: "Una sola colata se il prodotto lo consente",
    layerStagedLifts: (p) => `${p.n} colate successive`,
    secondaryCoverage: (p) => `Stima per ${p.area} con ${p.depth} di spessore.`,
    surfaceArea: (p) => `Superficie: ${p.area}.`,
    rawAtThickness: (p) => `Volume grezzo allo spessore previsto: ${p.dual}.`,
    edgeSoak: (p) => `Margine per bordi e colature: +${p.pct}%.`,
    layerFloodCoat: "1 strato di finitura colato",
    layerThickCoat: "Strato spesso, verifica la scheda tecnica",
    volumeRound: (p) => `Calcolo per forma rotonda con ${p.depth} di profondità.`,
    volumeRect: (p) => `Calcolo per forma rettangolare con ${p.depth} di profondità.`,
    rawVolume: (p) => `Volume grezzo: ${p.dual}.`,
    coatsPlanned: (p) => (p.n === 1 ? "1 strato previsto" : `${p.n} strati previsti`),
    secondaryFloor: (p) => `Stima del pavimento in base alla resa per ${p.area} in ${p.n} ${p.n === 1 ? "strato" : "strati"}.`,
    floorArea: (p) => `Superficie del pavimento: ${p.area}.`,
    coverageRate: (p) => `Resa: ${p.rate} ${p.areaUnit} per ${p.priceUnit === "liter" ? "litro" : "gallone"}.`,
    coatsCount: (p) => `Strati previsti: ${p.n}.`,
    errRiver: "Inserisci lunghezza e profondità target maggiori di zero.",
    errSegments: "In modalità segmenti inserisci almeno una larghezza maggiore di zero.",
    errAvgWidth: "Inserisci una larghezza media maggiore di zero o passa alla modalità segmenti.",
    riverSegmentMode: (p) => `Modalità segmenti: ${p.n} larghezze su ${p.length} di lunghezza totale.`,
    riverQuickMode: (p) => `La modalità rapida usa una larghezza media del fiume di ${p.width}.`,
    layerOneLift: "1 colata se il prodotto lo consente",
    layerStagedLiftsMax: (p) => `${p.n} colate successive da circa ${p.max} al massimo`,
    rawRiverVolume: (p) => `Volume grezzo del fiume: ${p.dual}.`,
    seepage: (p) => `Margine per assorbimento e perdite: +${p.pct}%.`,
    sealCoat: (p) => `Margine per lo strato sigillante: +${p.pct}%.`,
    errDeepPour: "Inserisci lunghezza, larghezza, profondità totale e strato massimo maggiori di zero.",
    liftsAtMax: (p) => `${p.n} ${p.n === 1 ? "colata" : "colate"} da circa ${p.max} al massimo`,
    rawCastingVolume: (p) => `Volume grezzo di colata: ${p.dual}.`,
    plannedMaxLift: (p) => `Spessore massimo previsto per colata: ${p.depth}.`,
    stagedPours: (p) => `Colate stimate: ${p.n}.`,
    errSurfaceCoat: "Inserisci lunghezza, larghezza e spessore maggiori di zero.",
    layerMultipleThin: "Potrebbero servire più strati sottili",
    secondarySurface: (p) => `Stima per ${p.area} con uno spessore target di ${p.depth}.`,
    rawCoatVolume: (p) => `Volume grezzo dello strato: ${p.dual}.`,
    edgeRunoff: (p) => `Margine per bordi e colature: +${p.pct}%.`,
    shallowVsDeep: "Un rivestimento sottile si calcola in modo diverso da una colata spessa.",
    errVoid: "Inserisci dimensioni della cavità maggiori di zero.",
    layerSingleFill: "Un solo riempimento se il prodotto lo consente",
    layerStagedFills: (p) => `${p.n} riempimenti a strati`,
    rawCavityVolume: (p) => `Volume grezzo della cavità: ${p.dual}.`,
    sandingOverfill: (p) => `Margine di eccesso da levigare: +${p.pct}%.`,
    voidFillNote: "Riempire crepe e nodi richiede di solito più margine di quanto indichi la formula.",
    layerShallowFill: "Uno strato / riempimento sottile",
    layerConfirmDepth: "Verifica lo spessore massimo del prodotto",
    roundVolume: (p) => `Volume della forma rotonda: ${p.dual}.`,
    irregularEdgeNote: "Usa lo scenario prudente se il bordo è irregolare.",
    errSphere: "Inserisci un diametro della sfera maggiore di zero.",
    layerSingleCast: "Una sola colata se il prodotto lo consente",
    layerConfirmMass: "Verifica massa e spessore massimo",
    sphereDiameter: (p) => `Diametro della sfera: ${p.depth}.`,
    rawSphereVolume: (p) => `Volume grezzo della sfera: ${p.dual}.`,
    spruesMarginNote: "Usa un margine prudente per canali di colata, rifinitura e trabocco.",
    errCylinder: "Inserisci diametro e altezza del cilindro maggiori di zero.",
    layerStagedLiftsIfNeeded: (p) => `${p.n} colate successive se necessario`,
    cylinderDiameter: (p) => `Diametro del cilindro: ${p.depth}.`,
    filledHeight: (p) => `Altezza di riempimento: ${p.depth}.`,
    rawCylinderVolume: (p) => `Volume grezzo del cilindro: ${p.dual}.`,
    errCube: "Inserisci un lato del cubo maggiore di zero.",
    layerSingleCubeCast: "Cubo in una sola colata se il prodotto lo consente",
    cubeSide: (p) => `Lato del cubo: ${p.depth}.`,
    rawCubeVolume: (p) => `Volume grezzo del cubo: ${p.dual}.`,
    spruesBufferNote: "Aggiungi margine extra per canali di colata, trabocco e rifinitura.",
    errQuantity: "Inserisci una quantità maggiore di zero.",
    layerBudgetOnly: "Solo budget",
    budgetLiters: "Budget basato sui litri inseriti",
    budgetGallons: "Budget basato sui galloni inseriti",
    baseQuantity: (p) => `Quantità di base: ${p.volume}.`,
    budgetQuantity: (p) => `Quantità consigliata per il budget: ${p.volume}.`,
    kitSizesNote: "Confronta i formati di kit realmente in vendita con la raccomandazione arrotondata.",
    errConvert: "Inserisci un valore maggiore di zero da convertire.",
    converterSecondary: (p) => `${p.source} equivalgono a ${p.target}. Volume di miscela equivalente: ${p.dual}.`,
    returnToCalculator: "Torna a un calcolatore di progetto",
    conversionOnly: "Solo conversione",
    sourceValue: (p) => `Valore di partenza: ${p.source}.`,
    convertedTarget: (p) => `Valore convertito: ${p.target}.`,
    equivalentVolume: (p) => `Volume equivalente: ${p.dual}.`,
    converterNote: "Usa il valore convertito nel calcolatore adatto al tuo progetto."
  }
};

// 百分号前（德、法、西）和法语冒号前的空格换成不换行空格，避免符号单独折到下一行
function fixSpacing(value, locale) {
  const text = value.replace(/ %/g, "\u00a0%");
  return locale === "fr" ? text.replace(/ ([:;!?])/g, "\u00a0$1") : text;
}

// 按表单语言生成结果文案和数值格式。英文分支完全沿用原有格式函数，保证英文页输出不变；
// 其他语言用本地数字格式，并且以升为主：公制下只显示升，英制下显示“升 / 加仑”。
function createResultText({ locale = "en", numberLocale = "en-US", priceUnit = "gallon" } = {}) {
  const localized = locale !== "en" && Boolean(RESULT_TEXT[locale]);
  const table = localized ? RESULT_TEXT[locale] : RESULT_TEXT.en;
  const num = (value, digits = 2) => formatNumber(value, digits, localized ? numberLocale : "en-US");
  const plain = (value, digits) => new Intl.NumberFormat(numberLocale, { maximumFractionDigits: digits }).format(value);
  const liters = (cubicInches) => `${num(litersFromCubicInches(cubicInches))} L`;

  const t = (key, params = {}) => {
    const entry = table[key] ?? RESULT_TEXT.en[key];
    const value = typeof entry === "function" ? entry({ priceUnit, ...params }) : entry;
    return localized ? fixSpacing(value, locale) : value;
  };

  const volume = (cubicInches, unit) => {
    if (!localized) return displayVolume(cubicInches, unit);
    return unit === "metric" ? liters(cubicInches) : `${num(gallonsFromCubicInches(cubicInches))} gal`;
  };

  const dual = (cubicInches, unit) => {
    if (!localized) return displayVolumeDual(cubicInches);
    return unit === "metric" ? liters(cubicInches) : `${liters(cubicInches)} / ${num(gallonsFromCubicInches(cubicInches))} gal`;
  };

  return {
    localized,
    t,
    num,
    volume,
    dual,
    // 换算器的单位符号；本地化页面把 cu in 写成 in³
    unitLabel: (label) => (localized && label === "cu in" ? "in³" : label),
    // 主结果旁的换算值；公制的本地化页面主结果已经是升，不再重复
    equivalent: (cubicInches, unit) => {
      if (!localized) return displayVolumeDual(cubicInches);
      return unit === "metric" ? "" : liters(cubicInches);
    },
    areaUnit: (unit, areaKind = "surface") => {
      if (!localized) return areaKind === "garage-floor" ? (unit === "metric" ? "sq m" : "sq ft") : unit === "metric" ? "sq cm" : "sq in";
      return areaKind === "garage-floor" ? (unit === "metric" ? "m²" : "ft²") : unit === "metric" ? "cm²" : "in²";
    },
    area(value, unit, areaKind = "surface") {
      if (!localized) return displayArea(value, unit, areaKind);
      return `${num(value)} ${this.areaUnit(unit, areaKind)}`;
    },
    // 公制下不足 1 cm 的厚度（多为涂层）按毫米显示，更符合欧洲用户的读法
    depth: (valueInches, unit) => {
      if (!localized) return displayDepth(valueInches, unit);
      if (unit !== "metric") return `${num(valueInches)} in`;
      const cm = valueInches * CM_PER_INCH;
      // 先按两位小数取整，避免 1 cm 因换算误差变成 0.99999 cm 而被显示成 10 mm
      return Number(cm.toFixed(2)) < 1 ? `${num(cm * 10)} mm` : `${num(cm)} cm`;
    },
    pct: (value) => (localized ? plain(value, 1) : formatNumber(value, 1)),
    rate: (value) => (localized ? plain(value, 2) : NUMBER_FORMAT.format(value)),
    money: (value, currency) => (Number.isFinite(value) ? formatMoney(value, numberLocale, currency) : t("addPrice")),
    split(recommendedCubicInches, unit, ratio) {
      if (!ratio) return t("splitUnknown");

      const totalParts = ratio.a + ratio.b;
      const partA = recommendedCubicInches * (ratio.a / totalParts);
      const partB = recommendedCubicInches * (ratio.b / totalParts);
      return t("split", { a: volume(partA, unit), b: volume(partB, unit), ratio: `${ratio.a}:${ratio.b}` });
    }
  };
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

const FORM_TEXT_REPLACEMENTS = {
  de: {
    Length: "Länge",
    Width: "Breite",
    Depth: "Tiefe",
    Diameter: "Durchmesser",
    Thickness: "Schichtdicke",
    Height: "Höhe",
    "Side length": "Kantenlänge",
    "Target depth": "Zieltiefe",
    "Average width": "Durchschnittsbreite",
    "Max layer depth": "Max. Schichtdicke",
    "Total depth": "Gesamttiefe",
    "Coverage / gallon": "Reichweite pro L",
    "Segment": "Segment",
    "width": "Breite",
    "sq m": "m²",
    "sq ft": "sq ft"
  },
  fr: {
    Length: "Longueur",
    Width: "Largeur",
    Depth: "Profondeur",
    Diameter: "Diamètre",
    Thickness: "Épaisseur",
    Height: "Hauteur",
    "Side length": "Côté",
    "Target depth": "Profondeur cible",
    "Average width": "Largeur moyenne",
    "Max layer depth": "Épaisseur max.",
    "Total depth": "Profondeur totale",
    "Coverage / gallon": "Rendement par L",
    "Segment": "Segment",
    "width": "largeur",
    "sq m": "m²",
    "sq ft": "sq ft"
  },
  "pt-BR": {
    Length: "Comprimento",
    Width: "Largura",
    Depth: "Profundidade",
    Diameter: "Diâmetro",
    Thickness: "Espessura",
    Height: "Altura",
    "Side length": "Lado",
    "Target depth": "Profundidade alvo",
    "Average width": "Largura média",
    "Max layer depth": "Camada máxima",
    "Total depth": "Profundidade total",
    "Coverage / gallon": "Rendimento por L",
    "Segment": "Segmento",
    "width": "largura",
    "sq m": "m²",
    "sq ft": "sq ft"
  },
  es: {
    Length: "Largo",
    Width: "Ancho",
    Depth: "Profundidad",
    Diameter: "Diámetro",
    Thickness: "Espesor",
    Height: "Altura",
    "Side length": "Lado",
    "Target depth": "Profundidad objetivo",
    "Average width": "Ancho medio",
    "Max layer depth": "Capa máxima",
    "Total depth": "Profundidad total",
    "Coverage / gallon": "Rendimiento por L",
    "Segment": "Segmento",
    "width": "ancho",
    "sq m": "m²",
    "sq ft": "sq ft"
  },
  it: {
    Length: "Lunghezza",
    Width: "Larghezza",
    Depth: "Profondità",
    Diameter: "Diametro",
    Thickness: "Spessore",
    Height: "Altezza",
    "Side length": "Lato",
    "Target depth": "Profondità target",
    "Average width": "Larghezza media",
    "Max layer depth": "Strato massimo",
    "Total depth": "Profondità totale",
    "Coverage / gallon": "Resa per L",
    "Segment": "Segmento",
    "width": "larghezza",
    "sq m": "m²",
    "sq ft": "sq ft"
  }
};

function applyFormTranslations(form) {
  const replacements = FORM_TEXT_REPLACEMENTS[form.dataset.locale || "en"];
  if (!replacements) return;

  const ordered = Object.entries(replacements).sort((a, b) => b[0].length - a[0].length);
  form.querySelectorAll(".field span, .check span").forEach((node) => {
    let value = node.textContent || "";
    ordered.forEach(([source, target]) => {
      value = value.split(source).join(target);
    });
    node.textContent = value;
  });
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
    applyFormTranslations(form);
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
    sphere: {
      diameter: "Diameter"
    },
    cylinder: {
      diameter: "Diameter",
      depth: "Height"
    },
    cube: {
      length: "Side length"
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
  applyFormTranslations(form);
}

function serializeForm(form) {
  const data = {
    locale: form.dataset.locale || "en",
    numberLocale: form.dataset.numberLocale || "en-US",
    currency: form.dataset.currency || "USD",
    priceUnit: form.dataset.priceUnit || "gallon"
  };
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

const LOCAL_PRODUCT_COPY = {
  de: {
    coverage: ["Tisch- oder Beschichtungsharz", "Nutze ein Harz für dünne Beschichtungen", "Diese Schätzung passt zu einer flachen Beschichtung. Prüfe ein Produkt mit passender Reichweite, Topfzeit und Schichtdicke."],
    floor: ["Bodenbeschichtungssystem", "Nutze ein Bodenbeschichtungssystem", "Bodenprojekte hängen von Reichweite, Untergrund und Schichten ab. Vergleiche Systeme nach Herstellerangabe."],
    casting: ["Gießharz", "Nutze ein Gießharz", "Die Tiefe passt eher zu einem Guss. Prüfe maximale Schichtdicke und Wärmeentwicklung vor dem Kauf."],
    general: ["Allzweck- oder Beschichtungsharz", "Nutze ein passendes Epoxidharz", "Die Menge ist eine Einkaufsbasis. Entscheidend sind Produktklasse, Datenblatt und realistische Reserve."],
    cost: ["Budgetplanung", "Budget mit dieser Menge prüfen", "Übertrage die Menge in ein realistisches Budget. Vergleiche danach echte Gebindegrößen, Reichweitenangaben und Reserve mit dieser Schätzung."],
    converter: ["Zurück zu einem Projektrechner", "Erst umrechnen, dann zum Projektrechner", "Die Umrechnung ist nur ein Teil der Entscheidung. Wechsle danach zum passenden Rechner für Fläche, Guss oder Boden."]
  },
  fr: {
    coverage: ["Résine de revêtement", "Utiliser une résine de revêtement", "Cette estimation correspond à une application mince. Vérifiez le rendement, le temps de travail et l’épaisseur maximale."],
    floor: ["Système de sol époxy", "Utiliser un système pour sol", "Un sol dépend du rendement, du support et du nombre de couches. Comparez les systèmes avec les données fabricant."],
    casting: ["Résine de coulée", "Utiliser une résine de coulée", "La profondeur ressemble à une coulée. Vérifiez l’épaisseur maximale et le risque d’échauffement."],
    general: ["Résine époxy adaptée", "Choisir le bon type de résine", "La quantité est une base d’achat. Le produit, la fiche technique et la marge restent déterminants."],
    cost: ["Planification du budget", "Tester le budget avec cette quantité", "Transformez la quantité en budget réaliste. Comparez ensuite les formats de kits, les rendements annoncés et la marge avec cette estimation."],
    converter: ["Revenir à un calculateur de projet", "Convertir, puis revenir au calculateur", "La conversion n’est qu’une partie de la décision. Passez ensuite au calculateur adapté : surface, coulée ou sol."]
  },
  "pt-BR": {
    coverage: ["Resina de revestimento", "Use resina para camada fina", "A estimativa combina com revestimento fino. Confira rendimento, tempo de trabalho e espessura máxima."],
    floor: ["Sistema de piso epóxi", "Use sistema próprio para piso", "Piso depende de rendimento, preparo do concreto e demãos. Compare sistemas pela ficha do fabricante."],
    casting: ["Resina de alta espessura", "Use resina epóxi de alta espessura", "A profundidade pede resina de alta espessura. Confira a espessura máxima por camada e o aquecimento antes de comprar."],
    general: ["Resina epóxi adequada", "Escolha o tipo certo de resina", "A quantidade é base de compra. Produto, ficha técnica e sobra realista continuam essenciais."],
    cost: ["Planejamento de orçamento", "Teste o orçamento com esta quantidade", "Transforme a quantidade em um orçamento realista. Depois compare tamanhos reais de kit, rendimento informado e sobra com esta estimativa."],
    converter: ["Voltar para uma calculadora de projeto", "Converta e volte para a calculadora", "A conversão é só parte da decisão. Depois use a calculadora certa para revestimento, alta espessura ou piso."]
  },
  es: {
    coverage: ["Resina de recubrimiento", "Usa resina para capa fina", "La estimación encaja con recubrimiento fino. Revisa rendimiento, tiempo de trabajo y espesor máximo."],
    floor: ["Sistema de suelo epoxi", "Usa un sistema para suelo", "El suelo depende de rendimiento, soporte y capas. Compara sistemas con datos del fabricante."],
    casting: ["Resina de colada", "Usa resina de colada", "La profundidad parece una colada. Revisa espesor máximo y riesgo de calentamiento."],
    general: ["Resina epoxi adecuada", "Elige el tipo correcto de resina", "La cantidad es una base de compra. Producto, ficha técnica y margen siguen siendo clave."],
    cost: ["Planificación del presupuesto", "Comprueba el presupuesto con esta cantidad", "Convierte la cantidad en un presupuesto realista. Después compara tamaños reales de kit, rendimiento declarado y margen con esta estimación."],
    converter: ["Volver a una calculadora de proyecto", "Convierte y vuelve a la calculadora", "La conversión es solo una parte de la decisión. Después usa la calculadora adecuada para superficie, colada o suelo."]
  },
  it: {
    coverage: ["Resina da rivestimento", "Usa una resina per strato sottile", "La stima è adatta a un rivestimento sottile. Verifica resa, tempo di lavoro e spessore massimo."],
    floor: ["Sistema per pavimento epossidico", "Usa un sistema per pavimento", "Il pavimento dipende da resa, supporto e strati. Confronta i sistemi con i dati del produttore."],
    casting: ["Resina da colata", "Usa una resina da colata", "La profondità sembra una colata. Verifica spessore massimo e rischio di surriscaldamento."],
    general: ["Resina epossidica adatta", "Scegli il tipo corretto di resina", "La quantità è una base di acquisto. Prodotto, scheda tecnica e margine restano decisivi."],
    cost: ["Pianificazione del budget", "Verifica il budget con questa quantità", "Trasforma la quantità in un budget realistico. Poi confronta formati reali dei kit, rese dichiarate e margine con questa stima."],
    converter: ["Torna a un calcolatore di progetto", "Converti, poi torna al calcolatore", "La conversione è solo una parte della decisione. Poi usa il calcolatore adatto a superficie, colata o pavimento."]
  }
};

function localProductKey(type, depthInches) {
  if (type === "garage-floor") return "floor";
  if (["coverage", "surface", "round"].includes(type)) return "coverage";
  if (["sphere", "cylinder", "cube", "river", "deep-pour"].includes(type)) return "casting";
  if (type === "cost" || type === "converter") return type;
  if (type === "void-fill") return depthInches > 1 ? "casting" : "general";
  return depthInches > 0.75 ? "casting" : "general";
}

// 本地化页面用当地语言的产品文案，A/B 配比沿用英文规则，保证各语言的计算一致
function productRecommendation(type, depthInches, recommendedCubicInches, locale = "en") {
  const base = englishProductRecommendation(type, depthInches, recommendedCubicInches);
  const copy = LOCAL_PRODUCT_COPY[locale];
  if (!copy) return base;
  const [label, heading, body] = copy[localProductKey(type, depthInches)].map((text) => fixSpacing(text, locale));
  return { label, heading, copy: body, ratio: base.ratio };
}

function englishProductRecommendation(type, depthInches, recommendedCubicInches) {
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
    case "sphere":
    case "cylinder":
    case "cube":
      return {
        label: "Casting epoxy",
        heading: "Use a casting epoxy for mold work",
        copy: `This estimate behaves like a mold or casting project. Compare casting-friendly products around ${formatNumber(totalGallons)} gallons mixed and confirm the product depth and mass limits before pouring.`,
        ratio: depthInches > 1 ? { a: 2, b: 1 } : { a: 1, b: 1 }
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
  compareProduct,
  locale = "en",
  numberLocale = "en-US",
  currency = "USD",
  priceUnit = "gallon"
}) {
  const text = createResultText({ locale, numberLocale, priceUnit });
  const product = productRecommendation(type, depthInches, recommendedCubicInches, locale);
  const projectedCost =
    Number.isFinite(pricePerGallon) && pricePerGallon > 0
      ? (priceUnit === "liter" ? litersFromCubicInches(recommendedCubicInches) : gallonsFromCubicInches(recommendedCubicInches)) * pricePerGallon
      : Number.NaN;

  return {
    primary: text.volume(recommendedCubicInches, unit),
    secondary: secondary || text.t("secondaryDefault", { equivalent: text.equivalent(recommendedCubicInches, unit) }),
    rawText: text.dual(rawCubicInches, unit),
    splitText: splitTextOverride || text.split(recommendedCubicInches, unit, product.ratio),
    costText: costTextOverride || text.money(projectedCost, currency),
    layersText,
    breakdown,
    standardText: compareStandard || text.volume(recommendedCubicInches, unit),
    conservativeText: compareConservative || text.volume(conservativeCubicInches, unit),
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
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
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
    requirePositive([diameter, depthInches], text.t("errDiameterDepth"));
    rawCubicInches = volumeFromRound(diameter, depthInches);
    shapeCopy = text.t("shapeRound");
  } else {
    const length = toInches(toNumber(data.length), unit);
    const width = toInches(toNumber(data.width), unit);
    depthInches = toInches(toNumber(data.depth), unit);
    requirePositive([length, width, depthInches], text.t("errLengthWidthDepth"));
    rawCubicInches = volumeFromRectangle(length, width, depthInches);
    shapeCopy = text.t("shapeRectangle");
  }

  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.08);
  const layersText =
    depthInches <= 0.25
      ? text.t("layerShallowPour")
      : depthInches <= 2
        ? text.t("layerSingleLift")
        : text.t("layerStagedLifts", { n: Math.ceil(depthInches / 2) });

  return finalizeResult({
    ...runtime,
    type: "general",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText,
    breakdown: buildBreakdown([
      text.t("rawVolumeShape", { shape: shapeCopy, dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      text.t("recommendedOrder", { volume: text.volume(recommendedCubicInches, unit) }),
      text.t("conservativeNote")
    ])
  });
}

function computeCoverage(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const lengthInput = toNumber(data.length);
  const widthInput = toNumber(data.width);
  const depthInput = toNumber(data.depth);
  requirePositive([lengthInput, widthInput, depthInput], text.t("errSurface"));

  const lengthInches = toInches(lengthInput, unit);
  const widthInches = toInches(widthInput, unit);
  const depthInches = toInches(depthInput, unit);
  const area = lengthInput * widthInput;
  const edgeSoakPct = depthInches <= 0.125 ? 4 : 6;
  const rawCubicInches = volumeFromRectangle(lengthInches, widthInches, depthInches);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100 + edgeSoakPct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + edgeSoakPct / 100 + 0.05);
  const layersText = depthInches <= 0.125 ? text.t("layerFloodCoat") : text.t("layerThickCoat");

  return finalizeResult({
    ...runtime,
    type: "coverage",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText,
    secondary: text.t("secondaryCoverage", { area: text.area(area, unit), depth: text.depth(depthInches, unit) }),
    breakdown: buildBreakdown([
      text.t("surfaceArea", { area: text.area(area, unit) }),
      text.t("rawAtThickness", { dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      text.t("edgeSoak", { pct: edgeSoakPct })
    ])
  });
}

function computeVolume(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
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
    requirePositive([diameter, depthInches], text.t("errDiameterDepth"));
    rawCubicInches = volumeFromRound(diameter, depthInches);
    detailLine = text.t("volumeRound", { depth: text.depth(depthInches, unit) });
  } else {
    const length = toInches(toNumber(data.length), unit);
    const width = toInches(toNumber(data.width), unit);
    depthInches = toInches(toNumber(data.depth), unit);
    requirePositive([length, width, depthInches], text.t("errLengthWidthDepth"));
    rawCubicInches = volumeFromRectangle(length, width, depthInches);
    detailLine = text.t("volumeRect", { depth: text.depth(depthInches, unit) });
  }

  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.08);

  return finalizeResult({
    ...runtime,
    type: "volume",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText: depthInches <= 2 ? text.t("layerSingleLift") : text.t("layerStagedLifts", { n: Math.ceil(depthInches / 2) }),
    breakdown: buildBreakdown([
      detailLine,
      text.t("rawVolume", { dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      text.t("recommendedOrder", { volume: text.volume(recommendedCubicInches, unit) })
    ])
  });
}

function computeRiver(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const lengthInput = toNumber(data.length);
  const depthInput = toNumber(data.depth);
  requirePositive([lengthInput, depthInput], text.t("errRiver"));

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

    requirePositive(widths, text.t("errSegments"));
    const segmentLength = lengthInches / widths.length;
    rawCubicInches = widths.reduce(
      (sum, width) => sum + volumeFromRectangle(segmentLength, width, depthInches),
      0
    );
    modeLine = text.t("riverSegmentMode", { n: widths.length, length: text.depth(lengthInches, unit) });
  } else {
    const avgWidthInput = toNumber(data.avgWidth);
    requirePositive([avgWidthInput], text.t("errAvgWidth"));
    const avgWidthInches = toInches(avgWidthInput, unit);
    rawCubicInches = volumeFromRectangle(lengthInches, avgWidthInches, depthInches);
    modeLine = text.t("riverQuickMode", { width: text.depth(avgWidthInches, unit) });
  }

  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100 + seepagePct / 100 + sealPct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + seepagePct / 100 + sealPct / 100 + 0.08);
  // 每层约 2 in，公制的本地化页面写成约 5 cm
  const liftMax = text.localized && unit === "metric" ? "5 cm" : "2 in";
  const layersText =
    depthInches <= 2 ? text.t("layerOneLift") : text.t("layerStagedLiftsMax", { n: Math.ceil(depthInches / 2), max: liftMax });

  return finalizeResult({
    ...runtime,
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
      text.t("rawRiverVolume", { dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      seepagePct ? text.t("seepage", { pct: seepagePct }) : "",
      sealPct ? text.t("sealCoat", { pct: sealPct }) : ""
    ])
  });
}

function computeDeepPour(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const lengthInches = toInches(toNumber(data.length), unit);
  const widthInches = toInches(toNumber(data.width), unit);
  const depthInches = toInches(toNumber(data.depth), unit);
  const maxDepthInches = toInches(toNumber(data.maxDepth), unit);
  requirePositive([lengthInches, widthInches, depthInches, maxDepthInches], text.t("errDeepPour"));

  const rawCubicInches = volumeFromRectangle(lengthInches, widthInches, depthInches);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.08);
  const layers = Math.max(1, Math.ceil(depthInches / maxDepthInches));

  return finalizeResult({
    ...runtime,
    type: "deep-pour",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText: text.t("liftsAtMax", { n: layers, max: text.depth(maxDepthInches, unit) }),
    breakdown: buildBreakdown([
      text.t("rawCastingVolume", { dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      text.t("plannedMaxLift", { depth: text.depth(maxDepthInches, unit) }),
      text.t("stagedPours", { n: layers })
    ])
  });
}

function computeSurface(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const lengthInput = toNumber(data.length);
  const widthInput = toNumber(data.width);
  const depthInput = toNumber(data.depth);
  requirePositive([lengthInput, widthInput, depthInput], text.t("errSurfaceCoat"));

  const lengthInches = toInches(lengthInput, unit);
  const widthInches = toInches(widthInput, unit);
  const depthInches = toInches(depthInput, unit);
  const rawCubicInches = volumeFromRectangle(lengthInches, widthInches, depthInches);
  const edgePct = 4;
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100 + edgePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + edgePct / 100 + 0.04);
  const area = lengthInput * widthInput;
  const layersText = depthInches <= 0.125 ? text.t("layerFloodCoat") : text.t("layerMultipleThin");

  return finalizeResult({
    ...runtime,
    type: "surface",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText,
    secondary: text.t("secondarySurface", { area: text.area(area, unit), depth: text.depth(depthInches, unit) }),
    breakdown: buildBreakdown([
      text.t("rawCoatVolume", { dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      text.t("edgeRunoff", { pct: edgePct }),
      text.t("shallowVsDeep")
    ])
  });
}

function computeGarageFloor(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const unit = data.unit || "imperial";
  const coats = Math.max(1, Math.round(toNumber(data.coats)));
  const coverageRate = toNumber(data.coverageRate);
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const length = toNumber(data.length);
  const width = toNumber(data.width);
  requirePositive([length, width, coverageRate], text.t("errFloor"));

  const area = length * width;
  const rawCoverageVolume = (area * coats) / coverageRate;
  const rawCubicInches = runtime.priceUnit === "liter" ? cubicInchesFromLiters(rawCoverageVolume) : cubicInchesFromGallons(rawCoverageVolume);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.05);

  return finalizeResult({
    ...runtime,
    type: "garage-floor",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches: 0,
    layersText: text.t("coatsPlanned", { n: coats }),
    secondary: text.t("secondaryFloor", { area: text.area(area, unit, "garage-floor"), n: coats }),
    breakdown: buildBreakdown([
      text.t("floorArea", { area: text.area(area, unit, "garage-floor") }),
      text.t("coverageRate", { rate: text.rate(coverageRate), areaUnit: text.areaUnit(unit, "garage-floor") }),
      text.t("coatsCount", { n: coats }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) })
    ])
  });
}

function computeVoidFill(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const lengthInches = toInches(toNumber(data.length), unit);
  const widthInches = toInches(toNumber(data.width), unit);
  const depthInches = toInches(toNumber(data.depth), unit);
  requirePositive([lengthInches, widthInches, depthInches], text.t("errVoid"));

  const rawCubicInches = volumeFromRectangle(lengthInches, widthInches, depthInches);
  const overfillPct = data.includeSeal ? 8 : 0;
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100 + overfillPct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + overfillPct / 100 + 0.05);
  const layersText =
    depthInches <= 2 ? text.t("layerSingleFill") : text.t("layerStagedFills", { n: Math.ceil(depthInches / 2) });

  return finalizeResult({
    ...runtime,
    type: "void-fill",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText,
    breakdown: buildBreakdown([
      text.t("rawCavityVolume", { dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      overfillPct ? text.t("sandingOverfill", { pct: overfillPct }) : "",
      text.t("voidFillNote")
    ])
  });
}

function computeRound(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const diameterInches = toInches(toNumber(data.diameter), unit);
  const depthInches = toInches(toNumber(data.depth), unit);
  requirePositive([diameterInches, depthInches], text.t("errDiameterDepth"));

  const rawCubicInches = volumeFromRound(diameterInches, depthInches);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.05);

  return finalizeResult({
    ...runtime,
    type: "round",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches,
    layersText: depthInches <= 0.25 ? text.t("layerShallowFill") : text.t("layerConfirmDepth"),
    breakdown: buildBreakdown([
      text.t("roundVolume", { dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      text.t("irregularEdgeNote")
    ])
  });
}

function computeSphere(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const diameterInches = toInches(toNumber(data.diameter), unit);
  requirePositive([diameterInches], text.t("errSphere"));

  const rawCubicInches = volumeFromSphere(diameterInches);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.08);

  return finalizeResult({
    ...runtime,
    type: "sphere",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches: diameterInches,
    layersText: diameterInches <= 2 ? text.t("layerSingleCast") : text.t("layerConfirmMass"),
    breakdown: buildBreakdown([
      text.t("sphereDiameter", { depth: text.depth(diameterInches, unit) }),
      text.t("rawSphereVolume", { dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      text.t("spruesMarginNote")
    ])
  });
}

function computeCylinder(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const diameterInches = toInches(toNumber(data.diameter), unit);
  const heightInches = toInches(toNumber(data.depth), unit);
  requirePositive([diameterInches, heightInches], text.t("errCylinder"));

  const rawCubicInches = volumeFromRound(diameterInches, heightInches);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.08);

  return finalizeResult({
    ...runtime,
    type: "cylinder",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches: heightInches,
    layersText: heightInches <= 2 ? text.t("layerSingleCast") : text.t("layerStagedLiftsIfNeeded", { n: Math.ceil(heightInches / 2) }),
    breakdown: buildBreakdown([
      text.t("cylinderDiameter", { depth: text.depth(diameterInches, unit) }),
      text.t("filledHeight", { depth: text.depth(heightInches, unit) }),
      text.t("rawCylinderVolume", { dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) })
    ])
  });
}

function computeCube(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const unit = data.unit || "imperial";
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  const sideInches = toInches(toNumber(data.length), unit);
  requirePositive([sideInches], text.t("errCube"));

  const rawCubicInches = sideInches * sideInches * sideInches;
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.08);

  return finalizeResult({
    ...runtime,
    type: "cube",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches: sideInches,
    layersText: sideInches <= 2 ? text.t("layerSingleCubeCast") : text.t("layerStagedLiftsIfNeeded", { n: Math.ceil(sideInches / 2) }),
    breakdown: buildBreakdown([
      text.t("cubeSide", { depth: text.depth(sideInches, unit) }),
      text.t("rawCubeVolume", { dual: text.dual(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      text.t("spruesBufferNote")
    ])
  });
}

function computeCost(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const quantity = toNumber(data.quantity);
  const wastePct = toNumber(data.wastePct);
  const pricePerGallon = toNumber(data.pricePerGallon);
  requirePositive([quantity], text.t("errQuantity"));

  const usingLiters = data.costUnit === "liters";
  const unit = usingLiters ? "metric" : "imperial";
  const rawCubicInches = usingLiters ? cubicInchesFromLiters(quantity) : cubicInchesFromGallons(quantity);
  const recommendedCubicInches = rawCubicInches * (1 + wastePct / 100);
  const conservativeCubicInches = rawCubicInches * (1 + wastePct / 100 + 0.05);

  return finalizeResult({
    ...runtime,
    type: "cost",
    unit,
    rawCubicInches,
    recommendedCubicInches,
    conservativeCubicInches,
    pricePerGallon,
    depthInches: 0,
    layersText: text.t("layerBudgetOnly"),
    splitTextOverride: usingLiters ? text.t("budgetLiters") : text.t("budgetGallons"),
    breakdown: buildBreakdown([
      text.t("baseQuantity", { volume: text.volume(rawCubicInches, unit) }),
      text.t("wasteBuffer", { pct: text.pct(wastePct) }),
      text.t("budgetQuantity", { volume: text.volume(recommendedCubicInches, unit) }),
      text.t("kitSizesNote")
    ])
  });
}

function computeConverter(data) {
  const runtime = runtimeOptions(data);
  const text = createResultText(runtime);
  const quantity = toNumber(data.quantity);
  requirePositive([quantity], text.t("errConvert"));

  const from = parseVolumeUnit(data.fromUnit);
  const to = parseVolumeUnit(data.toUnit);
  const cubicInches = from.toCubicInches(quantity);
  const converted = to.fromCubicInches(cubicInches);
  const sourceText = `${text.num(quantity)} ${text.unitLabel(from.label)}`;
  const convertedText = `${text.num(converted)} ${text.unitLabel(to.label)}`;
  // 换算器本身就是在比较单位，本地化页面同时给出升和加仑（升在前）
  const dualText = text.dual(cubicInches, "imperial");

  return {
    primary: convertedText,
    secondary: text.t("converterSecondary", { source: sourceText, target: convertedText, dual: dualText }),
    rawText: sourceText,
    splitText: dualText,
    costText: text.t("returnToCalculator"),
    layersText: text.t("conversionOnly"),
    breakdown: buildBreakdown([
      text.t("sourceValue", { source: sourceText }),
      text.t("convertedTarget", { target: convertedText }),
      text.t("equivalentVolume", { dual: dualText }),
      text.t("converterNote")
    ]),
    standardText: sourceText,
    conservativeText: convertedText,
    productText: text.t("returnToCalculator"),
    product: productRecommendation("converter", 0, cubicInches, runtime.locale)
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
  sphere: computeSphere,
  cylinder: computeCylinder,
  cube: computeCube,
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

const PANEL_FALLBACK_SELECTORS = [
  "[data-result-primary]",
  "[data-result-secondary]",
  "[data-stat-raw]",
  "[data-stat-split]",
  "[data-stat-cost]",
  "[data-stat-layers]",
  "[data-compare-standard]",
  "[data-compare-conservative]",
  "[data-compare-product]",
  "[data-product-heading]",
  "[data-product-copy]",
  "[data-breakdown-list]"
];

// 页面渲染时的占位文案已经按语言输出，首次计算前记下来，出错重置时原样恢复
const panelFallbacks = new WeakMap();

function capturePanelFallbacks(shell) {
  if (!shell || panelFallbacks.has(shell)) return;
  const snapshot = {};
  PANEL_FALLBACK_SELECTORS.forEach((selector) => {
    const node = shell.querySelector(selector);
    if (node) snapshot[selector] = node.innerHTML;
  });
  panelFallbacks.set(shell, snapshot);
}

function resetPanel(shell) {
  const snapshot = panelFallbacks.get(shell) || {};
  Object.entries(snapshot).forEach(([selector, html]) => {
    const node = shell.querySelector(selector);
    if (node) node.innerHTML = html;
  });

  // Sticky bar is outside calculator-shell, search from parent section
  const section = shell.closest(".section") || shell.parentElement;
  if (section) {
    const stickyPrimary = section.querySelector("[data-sticky-primary]");
    if (stickyPrimary) stickyPrimary.textContent = "--";
    const stickyCostEl = section.querySelector("[data-sticky-cost]");
    const stickyCostVal = section.querySelector("[data-sticky-cost-value]");
    if (stickyCostVal) stickyCostVal.textContent = "";
    if (stickyCostEl) stickyCostEl.style.display = "none";
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
    const stickyCostEl2 = section.querySelector("[data-sticky-cost]");
    const stickyCostVal2 = section.querySelector("[data-sticky-cost-value]");
    if (stickyCostVal2) stickyCostVal2.textContent = result.costText;
    if (stickyCostEl2) stickyCostEl2.style.display = result.costText ? "flex" : "none";
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
    showError(form, error instanceof Error ? error.message : createResultText({ locale: form.dataset.locale }).t("errGeneric"));
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
  capturePanelFallbacks(form.closest(".calculator-shell"));
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

/* ---- Pill Toggle interaction ---- */
document.addEventListener("click", (event) => {
  const btn = event.target.closest(".pill-toggle__btn");
  if (!btn) return;

  const toggle = btn.closest("[data-pill-toggle]");
  if (!toggle) return;

  const hiddenInput = toggle.querySelector('input[type="hidden"]');
  if (!hiddenInput) return;

  // Update active state
  toggle.querySelectorAll(".pill-toggle__btn").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");

  // Update value
  hiddenInput.value = btn.dataset.value;

  // Trigger change on the form so existing logic picks it up
  const form = hiddenInput.closest("form");
  if (form) {
    hiddenInput.dispatchEvent(new Event("change", { bubbles: true }));
    hiddenInput.dispatchEvent(new Event("input", { bubbles: true }));
  }
});
