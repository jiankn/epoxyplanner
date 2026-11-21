import { FLOOR_BUDGET_EXAMPLE } from "../assets/floor-cost-rates.js";

export const floorBudgetExampleLink = {
  label: "Load the garage and basement quote example",
  href: "/epoxy-flooring-cost-calculator/?example=garage-basement#calculator"
};

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export const epoxyFlooringCostCalculator = {
  slug: "epoxy-flooring-cost-calculator",
  title: "Epoxy Flooring Cost Calculator for Multiple Areas",
  h1: "Epoxy Flooring Cost Calculator",
  description: "Estimate epoxy flooring costs by room or work area. Compare coating and concrete prep costs, enter local quotes, and total the whole project.",
  intro: "Add each floor area, choose its coating and slab preparation, and see the cost for the whole project. Use a U.S. benchmark or enter your own itemized quote amounts.",
  primaryKeyword: "epoxy flooring cost calculator",
  calculatorType: "floor-budget",
  taskLinks: [floorBudgetExampleLink],
  resultEyebrow: "Total project budget",
  statLabels: { raw: "Average price per sq ft" },
  ui: { calculatorHeading: "Enter your floor areas", currentRecommendation: "Project budget", estimatedCost: "Area rate" },
  note: "DIY rates cover materials. Professional rates include labor. Enter additional prep and local prices from the quote for each area.",
  calculationTable: { title: "Floor budget by area", headers: ["Area", "Size", "Coating system", "Coating", "Prep", "Area subtotal"] },
  answerHeading: "How do you estimate epoxy flooring across several rooms?",
  answer: "Work out the coating and any extra concrete prep for each area, then add the subtotals. Divide the total by the combined floor area for the average price per square foot. If one contractor quotes several areas together, enter their job minimum once.",
  sections: [
    {
      title: "Example budget for a garage and a basement",
      body: "Suppose the 400 ft² garage quote lists $2,400 for flake epoxy and $300 for prep. The 300 ft² basement quote lists $1,500 for a solid epoxy coating and $450 for preparation. The two areas add up to $4,650 for 700 ft², or $6.64 per ft². These are example quotes.",
      table: {
        headers: ["Area", "Size", "Coating quote", "Prep quote", "Subtotal"],
        rows: FLOOR_BUDGET_EXAMPLE.map(({ zoneName, surfaceArea, coatingQuote, prepQuote }) => [
          zoneName, `${surfaceArea} ft²`, usd.format(coatingQuote), usd.format(prepQuote), usd.format(coatingQuote + prepQuote)
        ])
      }
    },
    {
      title: "What the budget includes",
      body: "Basic prep is included in the reference coating rate. Pick a slab condition to estimate extra work or enter the quoted prep amount for that area. Use the [basement epoxy floor cost guide](basement-epoxy-floor-cost) to see what to check about moisture and concrete condition before budgeting a basement.",
      points: [
        "If a contractor gives you a single all-in price for an area, use it as the coating quote and enter zero for prep so the scope is counted once.",
        "For work quoted by different contractors, run a budget for each contractor's scope so each minimum applies to its own job.",
        "For a garage-only estimate with vehicle bays and typical sizes, use the [epoxy garage floor cost calculator](garage-floor-epoxy-calculator)."
      ]
    },
    {
      title: "U.S. reference rates and local quotes",
      body: "The built-in rates are planning ranges from U.S. concrete floor coating and garage estimates. Actual rates depend on the job location, coating system and condition of the slab. Use itemized local prices for spaces with different requirements.",
      links: [
        { label: "HomeGuide epoxy flooring costs", url: "https://homeguide.com/costs/epoxy-flooring-cost" },
        { label: "This Old House epoxy flooring costs", url: "https://www.thisoldhouse.com/flooring/epoxy-floor-cost" }
      ]
    }
  ],
  bullets: [], howTo: [], mistakes: [], checklist: [], generalFaq: [],
  faq: [
    { q: "Can I include a DIY room and a professional room in one budget?", a: "Yes. Choose the appropriate coating option for each area. A contractor's job minimum applies to the professional subtotal. DIY materials are added separately." }
  ],
  related: ["garage-floor-epoxy-calculator", "basement-epoxy-floor-cost", "epoxy-floor-coverage-calculator", "epoxy-floor-thickness"],
  nextStepLinks: [
    { label: "Estimate floor kits", slug: "epoxy-floor-coverage-calculator" },
    { label: "See basement cost factors", slug: "basement-epoxy-floor-cost" }
  ],
  lastmod: "2026-11-16"
};

const totalBoatCalculator = "https://www.totalboat.com/pages/epoxy-calculator";
const totalBoatTableTopData = "https://support.totalboat.com/hc/en-us/articles/42950167264923-TotalBoat-TableTop-Epoxy-Instruction-Sheet-and-TDS";

export const totalBoatEpoxyKitCalculator = {
  slug: "totalboat-epoxy-kit-calculator",
  title: "TotalBoat TableTop Epoxy Kit Calculator",
  h1: "TotalBoat TableTop Epoxy Kit Calculator",
  description: "Estimate TotalBoat TableTop resin from your measurements, then compare 2 qt, 1 gal and 2 gal kit combinations by leftover resin, kit count and price.",
  intro: "Plan a TableTop coat, then compare kit combinations by leftover resin, kit count and the prices you enter. An independent tool from Epoxy Planner.",
  primaryKeyword: "totalboat tabletop epoxy kit calculator",
  calculatorType: "totalboat-kits",
  formDefaults: { surfaceArea: 15, length: 60, width: 36 },
  taskLinks: [{ label: "TotalBoat’s official epoxy calculator", href: totalBoatCalculator }],
  ui: { calculatorHeading: "Enter your tabletop measurements", currentRecommendation: "Mixed resin to buy" },
  statLabels: { raw: "Before allowances" },
  note: "Enter the planned thickness for one coat. Use the product's technical data to confirm thickness, batch size and recoat timing.",
  calculationTable: { title: "Compare TableTop kit combinations", headers: ["Purchase goal", "Kit combination", "Total mixed yield", "Leftover", "Price"] },
  answerHeading: "Which TotalBoat TableTop kit size should you buy?",
  answer: "Compare the total mixed yield of 2 qt, 1 gal and 2 gal kits with the amount your project needs. If an estimate calls for 1.26 US gal, a 1 gal kit plus a 2 qt kit supplies 1.50 US gal. A single 2 gal kit takes one fewer kit and leaves more resin.",
  sections: [
    {
      title: "Example for a 15 ft² tabletop",
      body: "One 1/8 in coat over 15 ft² of flat surface takes about 1.17 US gal by volume. With an 8% waste allowance and no edge allowance, plan for about 1.26 US gal. Compare the result with the product instructions for your surface and add an allowance if resin runs over the edge.",
      table: {
        headers: ["Purchase goal", "Kit combination", "Mixed yield", "Approximate leftover"],
        rows: [
          ["Least leftover", "1 × 1 gal + 1 × 2 qt", "1.50 US gal", "0.24 US gal"],
          ["Fewest kits", "1 × 2 gal", "2.00 US gal", "0.74 US gal"]
        ]
      }
    },
    {
      title: "Check the product and the kit label",
      body: "The kit sizes on this page come from the TableTop technical data. Each capacity includes both parts. The price comparison uses the sizes you give a price for. For river tables and thick castings, use the [deep pour epoxy calculator](deep-pour-epoxy-calculator) with the limits for the casting resin you chose.",
      links: [{ label: "TotalBoat TableTop instructions and technical data", url: totalBoatTableTopData }]
    }
  ],
  bullets: [], howTo: [], mistakes: [], checklist: [], generalFaq: [],
  faq: [{ q: "Why are the least-leftover and fewest-kits options sometimes the same?", a: "Both objectives can choose the same combination when the smallest purchase volume is available in the fewest packages. If there is a tie on leftover volume, the calculator shows the combination with fewer kits." }],
  related: ["epoxy-resin-calculators-by-brand", "table-top-epoxy-calculator", "epoxy-kit-size-guide"],
  nextStepLinks: [{ label: "See other brand calculators", slug: "epoxy-resin-calculators-by-brand" }],
  lastmod: "2026-11-16"
};
