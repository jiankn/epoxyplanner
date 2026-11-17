import { POUR_PRODUCTS } from "../assets/pour-products.js";

export const epoxyMeasurementLinks = {
  metric: { label: "Calculate in cm", href: "/epoxy-calculator/?unit=metric#calculator" },
  round: { label: "Calculate a circular pour", href: "/epoxy-calculator/?shape=round#calculator" }
};

export const anchorAdhesiveSection = {
  id: "anchor-adhesive-tools",
  title: "Looking for an epoxy calculator for concrete anchors?",
  body: "Find the tool for your specified adhesive to estimate the number of cartridges. Get the product and installation dimensions from the project specification.",
  table: {
    headers: ["Manufacturer", "Platform", "Information to have ready", "Official calculator"],
    rows: [
      ["Hilti", "iPhone and Android app", "Adhesive, anchor or rebar size, hole diameter, embedment and hole count", { label: "Hilti Adhesive Anchor Volume Calculator", url: "https://www.hilti.com/content/hilti/W1/US/en/business/business/engineering/anchors/volume-calculator.html" }],
      ["Simpson Strong-Tie", "Web calculator", "Adhesive, insert type and size, drill diameter, embedment and hole count", { label: "Simpson Strong-Tie Adhesive Cartridge Estimator", url: "https://app.strongtie.com/ace/" }],
      ["DEWALT", "Web calculator", "Adhesive, base material, drilling method, steel element and hole dimensions", { label: "DEWALT Adhesive Anchor Volume Estimator", url: "https://anchors.dewalt.com/anchors/support-software/adhesive_anchor_volume_estimator2.php" }]
    ]
  }
};

export const epoxyResinCalculatorsByBrand = {
  slug: "epoxy-resin-calculators-by-brand",
  title: "Epoxy Kit Yields & Pour Limits by Product",
  h1: "Epoxy Kit Sizes and Pour Limits by Product",
  description: "Compare published mixed kit sizes and product-specific application data for TotalBoat TableTop, Fathom and EcoPoxy FlowCast. Run your own purchase estimate.",
  intro: "Check the mixed yield of the exact kit you intend to buy. Compare casting limits before choosing a product, then run your measurements through the matching purchase calculator.",
  primaryKeyword: "epoxy resin calculators by brand",
  answer: "Divide the mixed volume you need after allowances by the combined yield of one kit. Round up to whole kits. Use the product's separate technical instructions for the ratio, thickness, volume and temperature conditions.",
  takeaways: [
    "Kit yield is the combined amount in Parts A and B.",
    "Read depth and volume limits for the intended application, such as a river table or a mold.",
    "The planner uses the product choice for kit sizes. Enter the confirmed casting conditions yourself."
  ],
  allowAds: false,
  sections: [
    {
      title: "Mixed yield, ratio and application for three exact products",
      table: {
        headers: ["Product", "Published kits used here", "A:B by volume", "Application to verify", "Calculate"],
        rows: [
          ["TotalBoat TableTop", "2 US qt, 1 and 2 US gal", "1:1", "Surface coats. Use the TableTop technical sheet to choose film thickness and batch volume.", { label: "Compare TableTop kit combinations", url: "/totalboat-epoxy-kit-calculator/#calculator" }],
          [POUR_PRODUCTS.fathom.label, "1.5, 3 and 6 US gal", "2:1", "Up to 2 in per lift for a river or slab. The 3 in limit applies to small castings of up to 1 US gal. Published application range is 60–80°F.", { label: "Fathom kit estimate", url: "/river-table-epoxy-calculator/?pourProduct=fathom#calculator" }],
          [POUR_PRODUCTS.flowcast.label, "6, 12, 30 and 60 L", "2:1", "13–38 mm per lift up to 30 L without additional cooling. The manufacturer specifies 20–25°C for the resin, mold and workspace.", { label: "FlowCast kit estimate", url: "/river-table-epoxy-calculator/?pourProduct=flowcast#calculator" }]
        ],
        note: "Manufacturer references checked November 17, 2026. Confirm local kit availability and the current instructions. A per-lift volume limit describes the casting, while a mixed batch limit describes what to mix at once."
      },
      links: [
        { label: "TotalBoat TableTop instruction sheet and technical data", url: "https://support.totalboat.com/hc/en-us/articles/42950167264923-TotalBoat-TableTop-Epoxy-Instruction-Sheet-and-TDS" },
        { label: "TotalBoat Fathom instruction sheet and technical data", url: POUR_PRODUCTS.fathom.source },
        { label: "EcoPoxy FlowCast specifications and technical data", url: POUR_PRODUCTS.flowcast.source }
      ]
    },
    {
      title: "Compare whole kits for the same river volume",
      body: "The [segmented river example](river-table-epoxy-calculator) calls for 5.14 US gal, about 19.47 L, including 10% waste. These choices cover that same quantity using packages of one size. Check the applicable casting limits before choosing between products.",
      table: {
        headers: ["Product", "Example package choice", "Mixed yield", "Spare after allowance"],
        rows: [
          ["TotalBoat Fathom", "2 × 3 US gal", "6 US gal", "About 0.86 US gal"],
          ["TotalBoat Fathom", "1 × 6 US gal", "6 US gal", "About 0.86 US gal"],
          ["EcoPoxy FlowCast", "2 × 12 L", "24 L", "About 4.53 L"],
          ["EcoPoxy FlowCast", "1 × 30 L", "30 L", "About 10.53 L"]
        ]
      }
    },
    {
      title: "Check your dimensions against the manufacturer's calculator",
      body: "Compare the volume without allowances first. Check whether the manufacturer's tool already includes a margin, and use the product label to identify what is included in the kit.",
      links: [
        { label: "TotalBoat epoxy calculator", url: "https://www.totalboat.com/pages/epoxy-calculator" },
        { label: "EcoPoxy volume calculator", url: "https://www.ecopoxy.com/pages/volume-calculator" },
        { label: "MAS Epoxies resin calculator", url: "https://masepoxies.com/pages/resin-calculator" },
        { label: "Promise epoxy calculator", url: "https://promiseepoxy.com/pages/epoxy-calculator" }
      ]
    }
  ],
  faq: [
    {
      q: "Does a 1-gallon kit give me a gallon of mixed epoxy?",
      a: "In this comparison, 1 US gal is the combined yield of Part A and Part B. If a listing gives each bottle size, look for the total mixed volume or confirm the yield with the manufacturer. The [epoxy kit size guide](epoxy-kit-size-guide) shows how to compare gallon, quart and liter sizes."
    }
  ],
  generalFaq: [],
  related: ["epoxy-calculator", "table-top-epoxy-calculator", "deep-pour-epoxy-calculator", "epoxy-kit-size-guide"],
  lastmod: "2026-11-17",
  reviewedOn: "2026-11-17"
};
