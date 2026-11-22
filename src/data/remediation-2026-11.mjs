import { floorBudgetExampleLink } from "./project-calculators-2026-11.mjs";

const reviewedOn = "2026-11-17";
const revisedOn = "2026-11-21";
const brazilFloorDataUpdatedOn = "2026-11-22";

const riverExampleLink = {
  label: "Load the segmented river example",
  href: "/river-table-epoxy-calculator/?example=segmented#calculator"
};

export const reviewRedirects = {
  "two-car-garage-epoxy-calculator": "epoxy-floor-coverage-calculator",
  "resin-jewelry-calculator": "resin-mold-calculator",
  "resin-tray-calculator": "resin-mold-calculator"
};

export const reviewRedirectPresets = {
  "two-car-garage-epoxy-calculator": { sizePreset: "20x20" },
  "resin-jewelry-calculator": { moldPreset: "jewelry" },
  "resin-tray-calculator": { moldPreset: "tray" }
};

const pourTable = {
  title: "Lift and mixing plan",
  headers: ["Lift", "Thickness", "Cavity volume", "Mixing batches"]
};

const pourPlanLabels = { layers: "Lifts and mixing batches", split: "Part A / Part B for the cavity" };

const riverExample = {
  title: "Worked example for a river with three different widths",
  body: "A 72 in channel measured in three equal 24 in sections is 3, 5 and 7 in wide. At 3 in of uniform depth, the cavity needs 1,080 in³, or 4.68 US gal (17.70 L). With 10% waste, plan to buy 5.14 US gal before kit rounding. This example budgets seal coat separately.",
  actions: [riverExampleLink],
  table: {
    headers: ["Decision", "Inputs", "Result"],
    rows: [
      ["Lift size", "Illustrative 1 in maximum layer depth", "3 lifts of about 5.90 L each"],
      ["Mixing batches", "Illustrative maximum of 4 L per batch", "2 per lift, 6 total"],
      ["Cavity mix", "Illustrative 2:1 by volume", "3.12 US gal Part A + 1.56 US gal Part B across the lifts"],
      ["Purchase", "1.5 US gal of mixed yield per kit", "4 kits, 6 US gal total, about 0.86 US gal spare above the allowance"]
    ],
    note: "This is a calculated example. Enter the limits, A/B ratio, and kit yield for your exact product. A different seal-coat resin needs its own purchase estimate."
  }
};

const floorExample = {
  title: "Estimate paint and kits for a two-car garage",
  body: "Pick a garage preset to start, then enter the measured floor area. This example uses two coats of the same product at 160 ft² per mixed US gallon per coat, with 7% extra. Use the published spread rate for each product if the primer, color coat and topcoat differ.",
  table: {
    headers: ["Measured floor", "Area", "Resin before waste", "Resin with 7% waste"],
    rows: [["20 × 20 ft", "400 ft²", "5.00 US gal", "5.35 US gal"], ["22 × 22 ft", "484 ft²", "6.05 US gal", "6.47 US gal"], ["24 × 24 ft", "576 ft²", "7.20 US gal", "7.70 US gal"]]
  },
  points: [
    "For the 400 ft² example, a 3 US gal mixed-yield kit means buying two kits. Check the product's labeled yield for the kit you are comparing.",
    "After calculating the base coat, use the result links to carry the same area into the flake or budget calculator. Use only the area where you will actually spread flake."
  ],
  links: [{ label: "Example of a manufacturer's published spread rates by wet film thickness", url: "https://usa.sika.com/en/construction-products/flooring/flooring-products/epoxy-coatings/sikafloor-217.html" }]
};

const floorProjectExample = {
  title: "From measured floor area to material takeoff and quote",
  body: "The 400 ft² garage and 300 ft² basement total 700 ft². This material example assumes both floors use two coats of one epoxy at 160 ft² per mixed US gallon per coat. Only the garage receives flake. If the two floors use different epoxy products, calculate the gallons and round to kits for each product separately.",
  actions: [
    { label: "Load the 700 ft² kit estimate", href: "/epoxy-floor-coverage-calculator/?example=garage-basement#calculator" },
    { label: "Load the 400 ft² flake estimate", href: "/epoxy-flake-calculator/?areaSqFt=400#calculator" }
  ],
  table: {
    headers: ["Material", "Calculation", "Purchase"],
    rows: [
      ["Epoxy for both floors", "700 × 2 ÷ 160 = 8.75 US gal, or 9.36 with 7% extra", "Four 3 US gal mixed kits (12 US gal total)"],
      ["¼ in flake for the garage only", "400 × 12.5 lb/100 ft² = 50 lb, or 55 lb with 10% extra", "Two 40 lb boxes"]
    ]
  },
  points: [
    "Use the material list to check the scope of the $4,650 example quote. Add a purchase to the budget only if the quote excludes it and you will buy it separately.",
    "The coverage rate and package sizes are example inputs. Check the labels for each product. Where a primer or topcoat is specified, estimate its own coverage and cost."
  ]
};

const localFloorExample = {
  "pt-br/preco-piso-epoxi-m2": {
    title: "Da ficha técnica ao custo por m²",
    body: "Para pintura lisa, a Sika Brasil informa de 0,25 a 0,30 kg/m² por demão de Sikafloor-264 e densidade da mistura de cerca de 1,40 kg/L. Com 0,28 kg/m², a conversão dá 0,20 L/m² por demão, ou 5 m²/L. Na calculadora, selecione o rendimento do produto e informe 20 m², 5 m²/L, duas demãos e 10% de sobra. São 8,8 L. Com um preço hipotético de R$ 28/L, o revestimento custa R$ 246,40, ou R$ 12,32/m². Calcule o primer e as outras etapas à parte.",
    lastmod: brazilFloorDataUpdatedOn,
    links: [{ label: "Sika Brasil · Sikafloor-264 para pintura, consumo e densidade", url: "https://bra.sika.com/pt/construcao/pisos-industriais/revestimento-epoxi/pinturas-altos-solidos/sikafloor-264.html" }]
  },
  "fr/calculateur-sol-epoxy": {
    title: "Lire une consommation indiquée en kg/m²",
    body: "Pour un revêtement filmogène en Sikafloor-264, Sika France indique 0,25 à 0,30 kg/m² par couche. Sur 20 m² avec deux couches, cela donne 10 à 12 kg avant les pertes. Le calculateur attend un rendement en m²/L. Pour convertir une consommation en kg/m², divisez la masse par la densité du mélange en kg/L, puis prenez l’inverse pour obtenir des m²/L. Calculez le primaire selon sa propre fiche.",
    links: [{ label: "Sika France · Sikafloor-264, consommation par couche", url: "https://fra.sika.com/fr/construction/sols-coules/sols-resine-decoratifs/finition-mouchete/sikafloor-264.html" }]
  }
};

const localizedCoverageExamples = {
  "pt-br/consumo-resina-epoxi-por-m2": {
    title: "Como calcular o rendimento por demão",
    body: "Para o sistema de pintura lisa com Sikafloor-264, a Sika Brasil especifica duas demãos, com consumo de 0,25 a 0,30 kg/m² por demão. Divida o peso da mistura pelo consumo por demão e pelo número de demãos. Usando 0,28 kg/m², 1 kg cobre cerca de 3,57 m² em uma demão ou 1,79 m² em duas. Para estimar a compra pelo limite de maior consumo, use 0,30 kg/m² e acrescente uma margem para perdas.",
    points: ["Para usar a calculadora em litros, divida 0,28 kg/m² pela densidade da mistura, 1,40 kg/L. Isso dá 0,20 L/m² por demão, equivalente a 5 m²/L. Em Rendimento do produto, informe 20 m², 5 m²/L, duas demãos e 10% de sobra. São 8 L antes da sobra e 8,8 L para a compra. Calcule o primer à parte com a ficha dele."],
    lastmod: brazilFloorDataUpdatedOn,
    links: localFloorExample["pt-br/preco-piso-epoxi-m2"].links
  },
  "es/consumo-resina-epoxi-por-m2": {
    title: "Cuántos metros cuadrados cubre un litro según la ficha técnica",
    body: "Para el sellado liso con Sikafloor-264, la ficha española indica un consumo de 0,25 a 0,30 kg/m² por capa y una densidad de la mezcla de 1,40 kg/L. Si tomas 0,28 kg/m² dentro de ese intervalo, el consumo equivale a 0,20 L/m². Con ese valor de ejemplo, un litro cubre 5 m² por capa.",
    points: ["Elige el rendimiento del producto e introduce 20 m², 5 m²/L, una capa y un 10% de margen. El cálculo da 4 L antes del margen y 4,4 L para la compra. Si vas a poner una imprimación, calcula su consumo con su propia ficha técnica."],
    links: [{ label: "Sika España · Sikafloor-264, densidad y consumo", url: "https://esp.sika.com/content/dam/dms/es01/p/sikafloor_-264.pdf" }]
  },
  "fr/quantite-resine-epoxy-par-m2": {
    title: "Passer des kg/m² de la fiche technique aux litres à acheter",
    body: "Pour un revêtement filmogène en Sikafloor-264, Sika France donne une consommation de 0,25 à 0,30 kg/m² par couche et une masse volumique du mélange d’environ 1,40 kg/L à 23 °C. En prenant 0,28 kg/m², une valeur dans cette plage, on obtient 0,20 L/m² par couche, soit un rendement de 5 m²/L.",
    points: ["Sélectionnez le rendement du produit et saisissez 20 m², 5 m²/L, deux couches et 10 % de marge. Il faut 8 L avant pertes et 8,8 L avec cette marge. Calculez le primaire à partir de sa propre fiche."],
    links: localFloorExample["fr/calculateur-sol-epoxy"].links
  }
};

function updateHome(page) {
  return {
    lastmod: revisedOn,
    title: "Epoxy Calculator & Project Planners",
    description: "Get a quick epoxy volume estimate or choose a tool for a river table, thick casting, countertop, mold, garage floor or coating project.",
    eyebrow: "Resin Planning Tools",
    intro: "Estimate resin for a simple pour, or choose a project below. Use the full volume calculator when you're ready to check the product ratio, kit size or cost.",
    quickCalculator: {
      ...page.quickCalculator,
      compactEstimate: true,
      resultEyebrow: "Mixed resin with allowance",
      ui: { calculatorHeading: "Quick volume estimate" },
      note: "Measure the inside of the cavity. Example dimensions and allowances are editable."
    },
    sections: page.sections.filter(section => section.title !== "Epoxy Calculator on Your Phone").map(section => {
      if (section.title === "Choose a Resin Calculator for Your Project") return {
        ...section,
        title: "Choose your project",
        body: "Start with the [river table planner](river-table-epoxy-calculator) for a live-edge channel, [floor coverage](epoxy-floor-coverage-calculator) to price out kits from a manufacturer's spread rate, or the [countertop calculator](countertop-epoxy-calculator) for several runs, cutouts and exposed edges.",
        actions: [riverExampleLink, floorBudgetExampleLink],
        cards: section.cards.filter(card => !["two-car-garage-epoxy-calculator", "epoxy-calculator"].includes(card.slug)).map(card => card.slug === "river-table-epoxy-calculator"
          ? { ...card, text: "Measure the channel, plan each lift, and download the kit and batch estimate." }
          : card)
      };
      if (section.title === "Calculators for molds and small pieces") return {
        ...section,
        cards: section.cards.filter(card => card.slug !== "resin-jewelry-calculator")
      };
      return section;
    })
  };
}

function updateCountertop(page) {
  return {
    calculatorType: "countertop",
    title: "Countertop Epoxy Calculator: L-Shapes, Cutouts & Edges",
    description: "Add non-overlapping countertop runs, subtract a sink cutout, and include exposed edges and backsplash before estimating epoxy and kits.",
    intro: "Find how much epoxy you need for your countertop. Enter the main top and any second run. Subtract the sink opening and add the edge faces or backsplash you intend to coat.",
    formDefaults: { ...page.formDefaults, edgePct: 0 },
    calculationTable: { title: "Countertop area breakdown", headers: ["Part of the countertop", "Area"] },
    answerHeading: "How much epoxy does an L-shaped countertop need?",
    answer: "Measure the two countertop runs without counting the corner twice. Subtract the sink opening and add the exposed vertical surfaces. In the example below, 18 ft² of top plus 1.25 ft² of vertical faces takes about 1.50 US gal at 1/8 in per coat, before waste.",
    answerTable: {
      headers: ["Part", "Measured area"],
      rows: [["Main run, 96 × 24 in", "16 ft²"], ["Return beyond the corner, 36 × 24 in", "6 ft²"], ["Sink opening, 24 × 24 in", "−4 ft²"], ["Edge, 120 × 1.5 in", "1.25 ft²"], ["Total coated area", "19.25 ft²"]]
    },
    note: "Use one rate only if all included surfaces use the same product and application rate. Enter runoff as a separate allowance.",
    bullets: ["Add a non-overlapping return or island section.", "Subtract a rectangular opening. Include the edge face or backsplash only when it receives the same coating."],
    howTo: ["Measure the main surface and return separately, ending one run at the corner.", "Measure the actual open sink area and include any exposed vertical faces you plan to coat.", "Use the product’s wet film thickness or label coverage. For a different finish on vertical surfaces, estimate those faces in a separate calculation."],
    mistakes: [],
    sections: [],
    faq: [
      { q: "Does the sink cutout reduce the epoxy quantity?", a: "Yes. Enter the size of the open hole. Any surface around the cutout that still gets coated belongs in the net surface measurement." },
      { q: "Should the backsplash use the same rate as the countertop?", a: "Use the same rate only when the product instructions specify the same coverage on both surfaces. Some vertical finishes use a different product or coat thickness." }
    ]
  };
}

export function applyReviewImprovements(page) {
  let changes;
  if (page.slug === "") changes = updateHome(page);
  if (page.slug === "countertop-epoxy-calculator") changes = updateCountertop(page);
  if (page.slug === "river-table-epoxy-calculator") changes = {
    lastmod: revisedOn,
    title: "River Table Epoxy Calculator: Volume, Lifts & Kits",
    description: "Measure an irregular river channel, estimate mixed resin and waste, plan lifts from your product limits, and download batches and kit quantities.",
    intro: "Measure a live-edge channel by average width or equal-length segments. Use the same estimate to plan layers, mixing batches and whole kits.",
    note: "Use a uniform depth for this estimate. Add seepage or seal-coat allowance only where it applies to the same resin you are buying.",
    statLabels: pourPlanLabels,
    calculationTable: pourTable,
    howTo: ["Divide the river into equal-length sections and measure across the middle of each. Add sections where the width varies.", "Use the finished inside depth. Estimate sections separately when the depth changes substantially.", "Check the product instructions before entering an A/B ratio, layer limit or batch size."],
    faq: page.faq.map(item => item.q === "How many width points should I measure?" ? { ...item, a: "Take at least one representative width per equal-length section. Use more sections where the sides curve or taper. The result uses the mean of the entered widths." } : item),
    sections: [riverExample, ...page.sections.slice(1)]
  };
  if (page.slug === "deep-pour-epoxy-calculator") changes = {
    intro: "Measure a rectangular cavity, then plan how much to buy and how to split the cavity into lifts. Enter the product's limits for the casting you are planning.",
    note: "The layer table uses cavity volume. Waste and other purchase allowances stay in the amount to buy.",
    statLabels: pourPlanLabels,
    calculationTable: pourTable,
    bullets: ["Get cavity volume and a purchase quantity with your allowance.", "Enter a layer thickness limit and, when specified separately, a per-lift volume limit.", "Enter a mixed batch limit to count batches inside each lift."],
    sections: [{
      title: "Round mixing batches up within each lift",
      body: "A 48 × 14 × 2.5 in cavity holds about 27.53 L. With an illustrative 1 in layer limit, the lifts are 11.01, 11.01 and 5.51 L. A 10 L batch limit means two batches in each full lift and one in the last lift, for five batches total.",
      points: ["The same product can have different limits for a slab and a small mold. Check the applicable maximums, minimums and cure conditions in the exact technical sheet.", "When only batch volume is known, the result gives a lower bound before layers are planned."]
    }, ...page.sections.slice(1)]
  };
  if (page.slug === "epoxy-floor-coverage-calculator") changes = {
    lastmod: revisedOn,
    title: "Epoxy Floor Coverage Calculator: Gallons, Coats & Kits",
    description: "Estimate epoxy gallons and kits from a measured floor area, number of coats and the product label. Includes two-car garage presets.",
    intro: "Measure the floor or start with a garage preset. Enter how much area one mixed gallon covers per coat, then calculate gallons and whole kits.",
    sections: [floorExample, ...page.sections],
    nextStepLinks: [
      { label: "Estimate flake for this area", slug: "epoxy-flake-calculator", carryArea: true },
      { label: "Budget this floor area", slug: "epoxy-flooring-cost-calculator", carryArea: true }
    ]
  };
  if (page.slug === "epoxy-flooring-cost-calculator") changes = {
    lastmod: revisedOn,
    sections: [page.sections[0], floorProjectExample, ...page.sections.slice(1)]
  };
  if (page.slug === "how-much-epoxy-do-i-need-for-a-river-table" || page.slug === "how-to-measure-a-river-table-for-epoxy") {
    const title = page.slug === "how-much-epoxy-do-i-need-for-a-river-table" ? "Turn the result into an order" : "An equal-segment measurement sheet";
    changes = {
      lastmod: revisedOn,
      sections: page.sections.map(section => section.title === title ? { ...section, actions: [riverExampleLink] } : section)
    };
  }
  if (page.slug === "resin-mold-calculator") changes = {
    title: "Resin Mold Calculator: Volume for Multiple Cavities & Sets",
    description: "Estimate resin for regular molds or different groups of measured cavities. See batch totals in mL and whole kits for trays, pendants and sets.",
    intro: "Use inside dimensions for a regular mold. If you know the capacity of each cavity or set, add several sizes in one batch and see the total with waste.",
    note: "For known capacity, enter the amount for one cavity or set and how many to fill. Extra groups can use different capacities.",
    bullets: ["Estimate a regular cavity from dimensions or enter its measured capacity.", "Combine up to three mold sizes and see the separate contribution of each group."],
    sections: [...page.sections, {
      title: "Work out a batch for jewelry and trays",
      body: "Ten pendants at 3 mL each and eight earring pairs at 2 mL per pair need 46 mL before waste, or 52.9 mL at 15% extra. Treat a pair as one set when its capacity already includes both pieces. Include any measured sprue volume once.",
      actions: [{ label: "Start with the jewelry example", href: "/resin-mold-calculator/?moldPreset=jewelry#calculator" }, { label: "Start with the tray example", href: "/resin-mold-calculator/?moldPreset=tray#calculator" }],
      points: ["For a tray casting, enter the net capacity from the mold supplier or a compatible measurement. A plain 12 × 18 in surface at 1/8 in takes about 442.45 mL in geometry. Raised walls or a recessed center change the actual capacity.", "For a finish on an existing tray, use the [surface coverage calculator](epoxy-coverage-calculator)."]
    }]
  };
  if (page.slug === "methodology") changes = {
    sections: [...page.sections, {
      title: "Calculation changes, 17 November 2026",
      body: "The river and deep-pour planners build a layer schedule from the user-entered depth and optional volume cap. A uniform footprint is assumed. Each layer's cavity volume is divided by the maximum mixed batch size and rounded up independently. The project summary adds those layer counts. Kit options round the purchase quantity, including allowances, up to whole packages.",
      points: ["Each published kit size is tied to its precise product and manufacturer source. Choosing it changes the purchasing table. Enter separately confirmed casting limits and A/B ratio.", "Countertop models sum non-overlapping areas, subtract the opening and add the chosen vertical faces. Mold batches sum measured capacity × count for each size.", "Translated labels retain the same internal inputs. Product inputs, unit conversions, examples and old-link presets are checked across the supported languages."]
    }]
  };
  const floorSource = localFloorExample[page.slug];
  if (floorSource) changes = { lastmod: floorSource.lastmod || reviewedOn, sections: [...page.sections, floorSource] };
  const coverageSource = localizedCoverageExamples[page.slug];
  if (coverageSource) changes = { lastmod: coverageSource.lastmod || revisedOn, sections: [coverageSource, ...page.sections] };
  if (page.locale && page.locale !== "en" && page.pageType === "calculator" && !changes) changes = {};
  return changes ? { ...page, lastmod: reviewedOn, ...changes, reviewedOn: changes.lastmod || reviewedOn } : page;
}
