import { createFirstBatchPages } from "./seo-batch-2026-05.mjs";
import { FLOOR_COST_RATES, floorCostRange } from "../assets/floor-cost-rates.js";
import {
  applyMultilingualAlternates,
  createLanguageMarketCards,
  createMultilingualRedirects,
  createMultilingualWave1Pages
} from "./multilingual-wave-1.mjs";

const siteOrigin = process.env.SITE_ORIGIN || "https://epoxyplanner.com";
const contactEmail = process.env.CONTACT_EMAIL || "hello@epoxyplanner.com";

export const site = {
  name: "Epoxy Project Planner",
  shortName: "Epoxy Planner",
  origin: siteOrigin,
  description:
    "A high-trust epoxy calculator and resin planning site for river tables, deep pours, coatings, void fills, conversions, and project cost planning.",
  nav: [
    { label: "Epoxy Calculator", slug: "epoxy-calculator" },
    { label: "River Table", slug: "river-table-epoxy-calculator" },
    { label: "Floor Cost", slug: "garage-floor-epoxy-calculator" },
    { label: "Coverage", slug: "epoxy-coverage-calculator" },
    {
      label: "More",
      children: [
        { label: "Deep Pour", slug: "deep-pour-epoxy-calculator" },
        { label: "Cost", slug: "epoxy-cost-calculator" },
        { label: "Converter", slug: "epoxy-unit-converter" },
        { label: "Guides", slug: "how-much-epoxy-do-i-need" }
      ]
    }
  ],
  languageNav: [
    { label: "English", shortLabel: "EN", hreflang: "en", slug: "", flag: "🇺🇸" },
    { label: "Deutsch", shortLabel: "DE", hreflang: "de", slug: "de", flag: "🇩🇪" },
    { label: "Français", shortLabel: "FR", hreflang: "fr", slug: "fr", flag: "🇫🇷" },
    { label: "Português BR", shortLabel: "PT-BR", hreflang: "pt-BR", slug: "pt-br", flag: "🇧🇷" },
    { label: "Español", shortLabel: "ES", hreflang: "es", slug: "es", flag: "🇪🇸" },
    { label: "Italiano", shortLabel: "IT", hreflang: "it", slug: "it", flag: "🇮🇹" }
  ],
  footerNav: [
    { label: "Calculators", slug: "epoxy-calculator" },
    { label: "Guides", slug: "how-much-epoxy-do-i-need" },
    { label: "Methodology", slug: "methodology" },
    { label: "Authors", slug: "authors" },
    { label: "FAQ", slug: "faq" },
    { label: "Contact", slug: "contact" }
  ]
};

const generalFaq = [
  {
    q: "How accurate is this epoxy calculator?",
    a: "It is designed for planning and procurement, not for replacing the manufacturer data sheet. The calculator is most useful when you add the right waste buffer and choose the page that matches your project type."
  },
  {
    q: "Why does the recommended amount exceed the raw volume?",
    a: "Real projects lose material to mixing cups, edge soak-in, seepage, and safety margin. Raw volume alone is often too optimistic."
  },
  {
    q: "Should I still check the resin brand instructions?",
    a: "Yes. Always confirm maximum pour depth, cure conditions, and mix ratio with the product documentation you plan to buy."
  }
];

const scenarioChecklist = [
  "Confirm the mold or surface is sealed before mixing resin.",
  "Measure depth twice at the deepest point of the project.",
  "Add extra material for waste, seepage, and edge soak-in.",
  "Confirm the resin type matches the intended pour depth.",
  "Prepare cups, stir sticks, gloves, and a level work surface."
];

function calculatorPage({
  slug,
  title,
  h1,
  description,
  eyebrow,
  intro,
  primaryKeyword,
  supportingKeywords,
  calculatorType,
  bullets,
  howTo,
  mistakes,
  faq,
  related,
  category = "calculator",
  note,
  compareLabel,
  resultEyebrow,
  statLabels,
  lastmod = "2026-04-04",
  indexable = true,
  includeInSitemap = true,
  generalFaq: pageGeneralFaq = generalFaq,
  checklist = scenarioChecklist,
  ...metadata
}) {
  return {
    ...metadata,
    slug,
    category,
    pageType: "calculator",
    title,
    h1,
    description,
    eyebrow,
    intro,
    primaryKeyword,
    supportingKeywords,
    calculatorType,
    bullets,
    howTo,
    mistakes,
    faq: [...faq, ...pageGeneralFaq],
    related,
    checklist,
    note,
    compareLabel,
    resultEyebrow,
    statLabels,
    lastmod,
    indexable,
    includeInSitemap
  };
}

function guidePage({
  slug,
  title,
  h1,
  description,
  eyebrow,
  intro,
  primaryKeyword,
  supportingKeywords,
  answer,
  takeaways,
  sections,
  faq,
  related,
  lastmod = "2026-04-04",
  indexable = true,
  includeInSitemap = true,
  generalFaq: pageGeneralFaq = generalFaq,
  ...metadata
}) {
  return {
    ...metadata,
    slug,
    category: "guide",
    pageType: "guide",
    title,
    h1,
    description,
    eyebrow,
    intro,
    primaryKeyword,
    supportingKeywords,
    answer,
    takeaways,
    sections,
    faq: [...faq, ...pageGeneralFaq],
    related,
    lastmod,
    indexable,
    includeInSitemap
  };
}

function infoPage({
  slug,
  title,
  h1,
  description,
  eyebrow,
  intro,
  heroActions,
  sections,
  related = [],
  lastmod = "2026-04-04",
  indexable = true,
  includeInSitemap = false,
  ...metadata
}) {
  return {
    ...metadata,
    slug,
    category: "info",
    pageType: "info",
    title,
    h1,
    description,
    eyebrow,
    intro,
    heroActions,
    sections,
    related,
    lastmod,
    indexable,
    includeInSitemap
  };
}

// ---- 环氧地坪成本页：答案、价格表、FAQ 里的数字都按共享费率现算 ----
const floorCostUpdated = "October 3, 2026";
const usd0 = (value) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Math.round(value));
// 整数价格不带小数（$4），非整数保留两位（$0.50）
const usd2 = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 }).format(value);
const floorRange = (area, system, condition = "good") => {
  const { low, high } = floorCostRange(area, system, condition, false);
  return `${usd0(low)} – ${usd0(high)}`;
};
const rateRange = (system) => `${usd2(FLOOR_COST_RATES[system].low)} – ${usd2(FLOOR_COST_RATES[system].high)}`;
const diyRange = (area) => `${usd0(area * FLOOR_COST_RATES["diy-basic"].low)} – ${usd0(area * FLOOR_COST_RATES["diy-solids"].high)}`;
const garageSizes = [
  ["1-car (12 × 24 ft)", 288],
  ["2-car (20 × 20 ft)", 400],
  ["2-car (24 × 24 ft)", 576],
  ["3-car (24 × 36 ft)", 864]
];

const floorCostContent = {
  answerHeading: "How much does it cost to epoxy a garage floor?",
  answer: `Professional epoxy costs about ${rateRange("pro-epoxy")} per square foot installed, so a 400 sq ft two-car garage runs roughly ${floorRange(400, "pro-epoxy")}. Metallic and polyaspartic systems cost ${rateRange("pro-poly")} per square foot. DIY kits cost ${usd2(FLOOR_COST_RATES["diy-basic"].low)} to ${usd2(FLOOR_COST_RATES["diy-solids"].high)} per square foot in materials, plus tools and prep.`,
  answerTable: {
    headers: ["Garage", "Area", "DIY kit (materials)", "Pro epoxy", "Pro metallic", "Pro polyaspartic"],
    rows: garageSizes.map(([label, area]) => [
      label,
      `${area} sq ft`,
      diyRange(area),
      floorRange(area, "pro-epoxy"),
      floorRange(area, "pro-metallic"),
      floorRange(area, "pro-poly")
    ]),
    note: `U.S. national averages for a floor in good condition, compiled ${floorCostUpdated} from HomeGuide, Angi, This Old House, and Bob Vila. High-cost metros land near the top of each range.`
  },
  sections: [
    {
      title: "Epoxy floor cost per square foot by coating system",
      body: "Professional prices include materials and labor. DIY prices are kit materials only.",
      table: {
        headers: ["Coating system", "DIY materials", "Professional installed", "Typical lifespan"],
        rows: [
          ["Epoxy, solid color or flake", `${usd2(FLOOR_COST_RATES["diy-basic"].low)} – ${usd2(FLOOR_COST_RATES["diy-solids"].high)}`, rateRange("pro-epoxy"), "3 – 20 years"],
          ["Metallic epoxy", "About $2.70 (kit list price)", rateRange("pro-metallic"), "Similar to epoxy"],
          ["Polyaspartic / polyurea with flake", "Rarely sold as a DIY kit", rateRange("pro-poly"), "10 – 20+ years"]
        ],
        note: "Lifespans from HomeGuide (2026). Water-based DIY coatings sit at the short end and may need recoating within a few years."
      }
    },
    {
      title: "What adds to the price",
      table: {
        headers: ["Item", "Typical cost", "Source"],
        rows: [
          ["Patching cracks and chips", "$25 – $250 per job", "Angi 2026, This Old House 2026"],
          ["Vapor barrier for a damp slab", "About +$1 per sq ft", "Installer quoted by Bob Vila (2024)"],
          ["Resurfacing a badly damaged slab", "$3 – $7 per sq ft", "HomeGuide 2026"],
          ["Power washing", "$0.35 – $0.77 per sq ft", "HomeGuide 2026"],
          ["Floor grinder rental (DIY, old coating or sealer)", "$100 – $200 per day", "ArmorGarage 2026"],
          ["Contractor minimum charge", "$500 – $1,000 per job", "Bob Vila 2024"]
        ],
        note: "Small floors cost more per square foot because setup and minimum labor do not shrink: Homewyse's 120 sq ft example works out to about $8 – $13 per sq ft (September 2026)."
      }
    },
    {
      title: "DIY kit or professional install?",
      body: `For a 400 sq ft two-car garage, DIY kits run about ${diyRange(400)} in materials, while a professional epoxy floor runs ${floorRange(400, "pro-epoxy")}. Labor is roughly 33% to 60% of a professional job (Angi, 2026), and most of that time goes into grinding and repairing the slab.`,
      points: [
        "DIY makes sense on a dry, sound slab with no old coating, when you can keep the garage empty for two to three days.",
        "Hire a pro when the slab is damp, has an old coating or sealer, needs real crack repair, or when you want metallic or polyaspartic finishes.",
        "Diamond grinding bonds better than acid etching. Pros grind as standard; DIYers rent a grinder for old or sealed floors.",
        "Before buying a kit, tape a plastic sheet to the slab for 24 hours. Condensation under it means you need a vapor barrier."
      ]
    },
    {
      title: "How to check an epoxy floor quote",
      points: [
        "Price per square foot: does it fall inside the range for the system quoted? Very low bids often skip grinding or use a thin water-based coat.",
        "Surface prep: diamond grinding or shot blasting, not just a wash and acid etch.",
        "Coats and topcoat: how many coats, how thick, and whether the topcoat is polyaspartic or polyurethane.",
        "Repairs and moisture: are crack repair and a moisture test included, or priced as extras?",
        "Cure time: how long before you can walk on it and before you can park on it.",
        "Warranty: what it covers (peeling, hot-tire pickup) and for how long."
      ]
    },
    {
      title: "Sources and method",
      body: `Ranges are U.S. national averages for materials and labor, compiled ${floorCostUpdated}. Where cost guides disagree, the calculator uses the overlap of the most recent neutral guides rather than the extremes. Seller data is used only for kit list prices and equipment rental.`,
      links: [
        { label: "HomeGuide: Epoxy Flooring Cost", url: "https://homeguide.com/costs/epoxy-flooring-cost", note: "2026" },
        { label: "HomeGuide: Garage Floor Coating Cost", url: "https://homeguide.com/costs/garage-floor-coating-cost", note: "2026" },
        { label: "Angi: Epoxy Flooring Cost", url: "https://www.angi.com/articles/epoxy-flooring-costs-advantages-and-installation.htm", note: "updated Aug 3, 2026" },
        { label: "This Old House: Epoxy Floor Cost", url: "https://www.thisoldhouse.com/flooring/epoxy-floor-cost", note: "updated Mar 13, 2026" },
        { label: "Homewyse: Cost to Epoxy Coat Garage Floor", url: "https://www.homewyse.com/services/cost_to_epoxy_coat_garage_floor.html", note: "September 2026" },
        { label: "Bob Vila: Epoxy Garage Floor Cost", url: "https://www.bobvila.com/articles/epoxy-garage-floor-cost/", note: "updated Apr 26, 2024" },
        { label: "Bob Vila: Polyaspartic Floor Coating Cost", url: "https://www.bobvila.com/articles/polyaspartic-floor-coating-cost/", note: "updated Jan 31, 2024" },
        { label: "ArmorGarage: Epoxy Flooring Cost per Sq Ft", url: "https://armorgarage.com/blog/epoxy-flooring-cost-per-square-foot/", note: "kit seller, Sep 22, 2026" }
      ],
      cards: [
        {
          title: "Need gallons instead of dollars?",
          text: "The floor coverage calculator turns square feet, coats, and your kit's coverage rate into gallons and kits to buy.",
          slug: "epoxy-floor-coverage-calculator"
        }
      ]
    }
  ],
  faq: [
    {
      q: "How much does it cost to epoxy a 2-car garage?",
      a: `About ${floorRange(400, "pro-epoxy")} for a 400 sq ft (20 × 20 ft) garage with professional epoxy, and ${floorRange(576, "pro-epoxy")} for a 576 sq ft (24 × 24 ft) garage. DIY kits cost about ${diyRange(400)} and ${diyRange(576)} in materials for the same sizes.`
    },
    {
      q: "Why are epoxy floor quotes so different?",
      a: "Quotes differ mainly in surface prep, the number and thickness of coats, the topcoat, repairs, and local labor rates. A low bid that skips diamond grinding or uses a thin water-based coat is not comparable to a full-build flake system with a polyaspartic topcoat."
    },
    {
      q: "How long does an epoxy garage floor last?",
      a: "HomeGuide rates epoxy floors at 3 to 20 years and polyurea or polyaspartic coatings at 10 to 20+ years. Thin water-based DIY coatings sit at the short end; ground, multi-coat systems sit at the long end."
    },
    {
      q: "Does a basement floor cost the same as a garage floor?",
      a: "Per square foot, yes, for the same system. Basements are more likely to need a vapor barrier for moisture, which adds about $1 per square foot, and they often have more corners and edges to cut in."
    }
  ]
};

// ---- /epoxy-calculator/：用量表和算例按体积公式现算（1 US gal = 231 cu in，1 fl oz = 1.8046875 cu in）----
const CU_IN_PER_GAL = 231;
const CU_IN_PER_FL_OZ = 1.8046875;
const CU_IN_PER_L = 61.0237440947;
const fmtNum = (value, digits = 1) => new Intl.NumberFormat("en-US", { maximumFractionDigits: digits }).format(value);
// 不到半加仑用液盎司 + 毫升，更大的量用加仑 + 升
const resinAmount = (cuIn) =>
  cuIn / CU_IN_PER_GAL < 0.5
    ? `${fmtNum(cuIn / CU_IN_PER_FL_OZ)} fl oz (${fmtNum((cuIn / CU_IN_PER_L) * 1000, 0)} ml)`
    : `${fmtNum(cuIn / CU_IN_PER_GAL, 2)} gal (${fmtNum(cuIn / CU_IN_PER_L)} L)`;
const generalWaste = 1.08; // 与通用计算器表单的默认余量一致
const commonProjects = [
  ["Round coaster", "4 in diameter × 1/4 in", Math.PI * 2 ** 2 * 0.25],
  ["Serving tray", "12 × 18 in × 1/8 in", 12 * 18 * 0.125],
  ["Tabletop flood coat", "2 × 4 ft × 1/8 in", 24 * 48 * 0.125],
  ["Bar top flood coat", "2 × 8 ft × 1/8 in", 24 * 96 * 0.125],
  ["River table channel", "6 ft × 6 in wide × 1.5 in deep", 72 * 6 * 1.5],
  ["Slab or cavity fill", "48 × 18 in × 1.25 in", 48 * 18 * 1.25]
];
const exampleCuIn = 48 * 18 * 1.25;

const epoxyCalculatorContent = {
  answerHeading: "How much epoxy do I need?",
  answer: `Multiply length × width × depth in inches, then divide by 231 for gallons or by 1.805 for fluid ounces. A 2 × 4 ft tabletop at 1/8 in needs about ${resinAmount(144)}; a 6 ft river channel 6 in wide and 1.5 in deep needs about ${resinAmount(648)}. The calculator adds 8% for waste by default.`,
  answerTable: {
    headers: ["Project", "Size", "Resin needed", "With 8% waste"],
    rows: commonProjects.map(([project, size, cuIn]) => [project, size, resinAmount(cuIn), resinAmount(cuIn * generalWaste)]),
    note: "Mixed resin (Part A + Part B together). Flood coats are the top surface only; add the edges if they get coated."
  },
  sections: [
    {
      title: "Worked example: a 48 × 18 in slab poured 1.25 in deep",
      points: [
        `Volume: 48 × 18 × 1.25 = ${fmtNum(exampleCuIn, 0)} cubic inches.`,
        `Gallons: ${fmtNum(exampleCuIn, 0)} ÷ 231 = ${fmtNum(exampleCuIn / CU_IN_PER_GAL, 2)} gal (${fmtNum(exampleCuIn / CU_IN_PER_L)} L) of mixed resin.`,
        `Waste: × 1.08 = ${fmtNum((exampleCuIn * generalWaste) / CU_IN_PER_GAL, 2)} gal to order.`,
        `Mix split: at 2:1 that is ${fmtNum(((exampleCuIn * generalWaste) / CU_IN_PER_GAL) * (2 / 3), 2)} gal of Part A and ${fmtNum(((exampleCuIn * generalWaste) / CU_IN_PER_GAL) / 3, 2)} gal of Part B; at 1:1, half of each.`,
        "Depth check: 1.25 in is far beyond a tabletop epoxy's 1/8 – 1/4 in per coat, so this job needs a deep-pour or casting resin, poured in as many layers as its data sheet requires."
      ]
    },
    {
      title: "How deep can you pour epoxy in one layer?",
      body: "The limit comes from heat: thicker pours cure hotter. Use the number on your product's data sheet; these are typical published limits.",
      table: {
        headers: ["Resin type", "Typical max per pour", "Published examples"],
        rows: [
          ["Tabletop / bar top (flood coat)", "1/8 in, some up to 1/4 in", "TotalBoat TableTop: 1/8 – 1/4 in per coat; Primaloc Bar & Table Top: 1/8 in layers"],
          ["Deep pour / casting", "1/2 – 1 in", "MAS Deep Pour: 1/2 in for slabs and river tables, up to 1 in in small molds"],
          ["Extra-slow deep pour", "2 – 3 in", "MAS Deep Pour X: 2 – 3 in per pour"]
        ],
        note: "Large pours run hotter than small ones, so a big river table may need thinner layers than a small mold of the same depth."
      },
      links: [
        { label: "TotalBoat TableTop Epoxy technical data sheet", url: "https://www.totalboat.com/cdn/shop/files/totalboat-tabletop-epoxy-tds-instructions-03.08.22_57516faf-f569-46ce-8724-286d0272ed35.pdf" },
        { label: "Primaloc: maximum thickness for a single layer", url: "https://primaloc.helpscoutdocs.com/article/789-maximum-thickness-depth" },
        { label: "MAS Epoxies: Deep Pour", url: "https://masepoxies.com/product/deep-pour-epoxy" },
        { label: "MAS Epoxies: Deep Pour X", url: "https://masepoxies.com/product/deep-pour-x-epoxy-resin" }
      ],
      cards: [
        {
          title: "Deep Pour Epoxy Calculator",
          text: "Enter total depth and your resin's max layer depth to plan the number of pours.",
          slug: "deep-pour-epoxy-calculator"
        }
      ]
    }
  ]
};

// ---- 第 3 步：覆盖率、配比、每加仑价格（数字按公式现算或注明出处）----
const sqFtPerGallon = (inches) => CU_IN_PER_GAL / (144 * inches);
const flOzPerSqFt = (inches) => (144 * inches) / CU_IN_PER_FL_OZ;
const ratioSplit = (total, a, b, unit, digits = 1) =>
  `${fmtNum((total * a) / (a + b), digits)} + ${fmtNum((total * b) / (a + b), digits)} ${unit}`;
const mixRatios = [[1, 1], [2, 1], [3, 1]];

const firstBatchPages = createFirstBatchPages({ calculatorPage, guidePage });
const multilingualWave1Pages = createMultilingualWave1Pages({ calculatorPage, infoPage });
const languageMarketCards = createLanguageMarketCards();

const basePages = [
  infoPage({
    slug: "",
    title: "Resin Project Planner for River Tables, Deep Pours & Floors",
    h1: "Plan Your Epoxy Resin Project",
    description:
      "Pick the calculator that matches your epoxy job (river table, deep pour, tabletop coat, garage floor, mold, or void fill) and get volume, waste, kit size, and cost.",
    eyebrow: "Precision Resin Planning",
    intro:
      "Calculate exactly how much epoxy resin you need — with waste, seepage, layer count, Part A / Part B split, cost, and product-fit guidance built in.",
    heroActions: [
      { label: "Epoxy Floor Cost", slug: "garage-floor-epoxy-calculator", icon: "🏠" },
      { label: "River Table", slug: "river-table-epoxy-calculator", icon: "🪵" },
      { label: "Deep Pour", slug: "deep-pour-epoxy-calculator", icon: "🧊" },
      { label: "Coverage & Coatings", slug: "epoxy-coverage-calculator", icon: "🖌️" },
      { label: "Epoxy Resin Calculator", slug: "epoxy-calculator", icon: "📐" },
      { label: "Cost Planner", slug: "epoxy-cost-calculator", icon: "💵" },
      { label: "Void Fill", slug: "void-fill-epoxy-calculator", icon: "🧩" },
      { label: "Mold Calculator", slug: "resin-mold-calculator", icon: "▣" }
    ],
    sections: [
      {
        title: "Choose the calculator that matches the real job",
        body:
          "The fastest way to get a trustworthy estimate is to start from the actual project type. River tables, deep pours, coatings, floor jobs, and void fills do not share the same measurement logic or product constraints.",
        cards: [
          {
            title: "Epoxy Floor Cost Calculator",
            text: "Installed price for garage and basement floors: $4–$10 per sq ft for professional epoxy, with DIY kits, flake, metallic, and polyaspartic compared.",
            slug: "garage-floor-epoxy-calculator",
            primary: true
          },
          {
            title: "Epoxy Resin Calculator",
            text: "Best first stop for regular shapes, quick planning, and broad resin estimates in gallons or liters.",
            slug: "epoxy-calculator",
            primary: true
          },
          {
            title: "River Table Calculator",
            text: "Use quick mode or segment mode for live-edge rivers, plus seepage, seal-coat, and cost planning.",
            slug: "river-table-epoxy-calculator",
            primary: true
          },
          {
            title: "Deep Pour Calculator",
            text: "Plan thick casts with layer guidance, staged lifts, and deep-pour product fit.",
            slug: "deep-pour-epoxy-calculator",
            primary: true
          },
          {
            title: "Coverage Calculator",
            text: "Use surface area and coat thickness for tabletops, bar tops, and countertop finishes.",
            slug: "epoxy-coverage-calculator",
            primary: true
          },
          {
            title: "Cost Calculator",
            text: "Pressure-test the budget after you know the resin quantity, waste factor, and kit price.",
            slug: "epoxy-cost-calculator",
            primary: true
          },
          {
            title: "Void Fill Calculator",
            text: "Estimate cracks, knots, and small cavity fills where ounces and milliliters matter.",
            slug: "void-fill-epoxy-calculator",
            primary: true
          },
          {
            title: "Floor Coverage Calculator",
            text: "Gallons and kits for a garage or basement floor from square footage, coats, and kit coverage.",
            slug: "epoxy-floor-coverage-calculator",
            primary: true
          },
          {
            title: "Resin Mold Calculator",
            text: "Plan silicone molds, craft cavities, cube, cylinder, and sphere casts.",
            slug: "resin-mold-calculator",
            primary: true
          }
        ]
      },
      {
        title: "Calculators for specific projects",
        body:
          "Small molds and single surfaces have their own math. These calculators start from the shape you are actually filling and show the resin in ml, fl oz, or gallons with a reference table for common sizes.",
        cards: [
          { title: "Epoxy Flood Coat Calculator", text: "Tabletops and bar tops at 1/16 or 1/8 in: about 1.4 gal for a 3 × 6 ft table at 1/8 in.", slug: "epoxy-flood-coat-calculator" },
          { title: "Two-Car Garage Epoxy Calculator", text: "Gallons for two coats on 20 × 20 to 24 × 24 ft floors at your kit's coverage rate.", slug: "two-car-garage-epoxy-calculator" },
          { title: "Resin Coaster Calculator", text: "Round or square coasters: about 51 ml for a 4 in coaster at 1/4 in, with set totals.", slug: "resin-coaster-calculator" },
          { title: "Resin Dice Calculator", text: "Resin per die and per set of seven for 16, 20, and 25 mm molds.", slug: "resin-dice-calculator" },
          { title: "Sphere Resin Calculator", text: "Ball and dome molds by inside diameter, from 1 to 6 in.", slug: "sphere-resin-calculator" },
          { title: "Cylinder Resin Calculator", text: "Columns, tumblers, and round molds by diameter and fill height.", slug: "cylinder-resin-calculator" },
          { title: "Cube Resin Calculator", text: "Block and cube molds: doubling the side needs eight times the resin.", slug: "cube-resin-calculator" },
          { title: "Resin Art Pricing Calculator", text: "Turn material, time, and overhead into a minimum selling price.", slug: "resin-art-pricing-calculator" }
        ]
      },
      {
        title: "Calculators in other languages",
        body:
          "Metric calculators in German, French, Brazilian Portuguese, Spanish, and Italian, working in centimeters, square meters, liters, and local currency.",
        cards: languageMarketCards
      },
      {
        title: "What every estimate gives you",
        body:
          "The goal is not a raw number. The goal is a usable purchase plan you can compare against real kits and product limits.",
        points: [
          "Raw volume and recommended order quantity shown side by side.",
          "Waste, seepage, seal-coat, and overage explained instead of hidden.",
          "Part A / Part B split and approximate project cost for faster buying decisions.",
          "Layer guidance for deep-pour and thick-cast scenarios."
        ]
      },
      {
        title: "Popular decisions people make before buying epoxy",
        body:
          "Most buyers need more than a formula: how much extra to buy, how to measure an irregular river, and when a deep-pour resin is required instead of a top coat.",
        cards: [
          { title: "How Much Epoxy Do I Need?", text: "Short answer first, then the right calculator path.", slug: "how-much-epoxy-do-i-need" },
          { title: "How Much Epoxy for a River Table?", text: "Estimate quantity, waste, and kit count for a live-edge river build.", slug: "how-much-epoxy-do-i-need-for-a-river-table" },
          { title: "How to Measure a River Table", text: "A practical segment method for irregular channels.", slug: "how-to-measure-a-river-table-for-epoxy" },
          { title: "Deep Pour vs Table Top Epoxy", text: "Know when the resin class is the real bottleneck.", slug: "deep-pour-vs-table-top-epoxy" },
          { title: "Waste Factor Guide", text: "Decide how much extra resin to buy and why.", slug: "epoxy-waste-factor-guide" },
          { title: "Epoxy Thickness & Coverage Chart", text: "Typical thickness by job and square feet per gallon at each thickness.", slug: "epoxy-coverage-chart" },
          { title: "Mixing Ratio Guide", text: "Plan Part A / Part B and batch size after the quantity is known.", slug: "epoxy-mixing-ratio-guide" },
          { title: "How Much Epoxy Per Square Foot?", text: "Answer coverage by thickness before choosing a kit.", slug: "how-much-epoxy-per-square-foot" },
          { title: "One Gallon Coverage", text: "Understand why a gallon covers different areas at different thicknesses.", slug: "how-much-does-a-gallon-of-epoxy-cover" },
          { title: "Kit Size Guide", text: "Match calculated quantity to real gallons, liters, and kit listings.", slug: "epoxy-kit-size-guide" },
          { title: "Seal Coat vs Flood Coat", text: "Decide whether the first coat and finish coat need separate estimates.", slug: "seal-coat-vs-flood-coat" }
        ]
      },
      {
        title: "Why trust the number",
        body:
          "This site is designed to be transparent about assumptions. It reports both raw volume and recommendation, keeps the methodology visible, and gives you scenario-specific tools instead of forcing every job through one generic formula.",
        cards: [
          { title: "Methodology", text: "See formulas, conversion constants, and planning assumptions.", slug: "methodology" },
          { title: "Authors", text: "See who builds the calculators and why you can trust the numbers.", slug: "authors" },
          { title: "FAQ", text: "Review common questions before you rely on the estimate.", slug: "faq" }
        ]
      }
    ],
    includeInSitemap: true,
    lastmod: "2026-10-03"
  }),
  calculatorPage({
    slug: "epoxy-calculator",
    title: "Epoxy Resin Calculator: How Much Epoxy You Need (oz, gal, L)",
    h1: "Epoxy Resin Calculator",
    description:
      "Free epoxy resin calculator: enter length, width, and depth in inches or cm to see how much epoxy you need in ounces, gallons, or liters, with waste and cost.",
    eyebrow: "Epoxy & Resin Calculator",
    intro:
      "Enter the length, width, and depth of the area you are filling or coating. The calculator turns it into mixed resin in ounces, gallons, or liters, adds a waste buffer, splits Part A and Part B, and estimates the cost.",
    primaryKeyword: "epoxy calculator",
    supportingKeywords: ["epoxy resin calculator", "resin calculator", "epoxy volume calculator", "how much epoxy do i need"],
    calculatorType: "general",
    ...epoxyCalculatorContent,
    bullets: [
      "Rectangles and circles, measured in inches or centimeters.",
      "Mixed resin in fluid ounces, gallons, and liters, plus the Part A / Part B split.",
      "A waste buffer and cost per gallon, so the order is not just raw geometry.",
      "Layer guidance when the depth is too much for a single pour."
    ],
    howTo: [
      "Pick rectangle or round to match the area you are filling or coating.",
      "Enter finished inside dimensions, not the rough board size or the outside of the mold.",
      "Use round mode for circular tables, trays, and molds.",
      "Switch the unit toggle before entering values if your notes are in metric.",
      "Raise the waste buffer for porous wood, many edges, runoff, or uncertain measurements."
    ],
    mistakes: [
      "Using the general calculator for river tables or garage floors, which have their own seepage and coverage rules.",
      "Ordering the raw volume with no allowance for cup loss, edges, and soak-in.",
      "Pouring a tabletop epoxy deeper than its 1/8 – 1/4 in per-coat limit."
    ],
    faq: [
      {
        q: "How many ounces of epoxy do I need per square foot?",
        a: "At the common 1/8 in flood-coat thickness, about 10 fl oz per square foot (one gallon covers about 12.8 sq ft). At 1/16 in it is about 5 fl oz per square foot. Add the edges and 5–10% for waste."
      },
      {
        q: "How do I split resin and hardener?",
        a: "Divide the total by the ratio on your product. At 1:1, half is Part A and half is Part B. At 2:1, two thirds is Part A and one third is Part B. Check whether the ratio is by volume or by weight; weight ratios need a scale."
      },
      {
        q: "When should I use a different calculator?",
        a: "Use the river table calculator for live-edge channels with seepage, the coverage calculator for thin coats measured in square feet, and the floor cost calculator for garage and basement floors."
      },
      {
        q: "Why does the calculator show more resin than the raw math?",
        a: "Because some resin always stays in cups, on edges, and in the wood. The recommendation adds a waste buffer so you do not run short mid-pour."
      }
    ],
    related: [
      "how-much-epoxy-do-i-need",
      "river-table-epoxy-calculator",
      "epoxy-coverage-calculator",
      "deep-pour-epoxy-calculator",
      "epoxy-mixing-ratio-guide",
      "epoxy-unit-converter"
    ],
    note: "Use this calculator for regular shapes. For a river table, deep cast, or floor coating, switch to the matching calculator before buying.",
    compareLabel: "Raw math vs order-ready planning",
    lastmod: "2026-10-03"
  }),
  calculatorPage({
    slug: "epoxy-coverage-calculator",
    title: "Epoxy Coverage Calculator: Square Feet, Thickness & Gallons",
    h1: "Epoxy Coverage Calculator",
    description:
      "Enter square feet (or m²) and coat thickness to see how many gallons of epoxy you need, with edge runoff, waste, and cost for tabletops, bar tops, and countertops.",
    eyebrow: "Coverage Calculator",
    intro:
      "Enter the surface area and coat thickness to see how much epoxy a tabletop, bar top, countertop, or other thin coat needs, with edges, runoff, and waste included.",
    primaryKeyword: "epoxy coverage calculator",
    supportingKeywords: ["epoxy resin coverage calculator", "epoxy square foot calculator", "epoxy coverage estimator", "epoxy resin coverage"],
    calculatorType: "coverage",
    answerHeading: "How do you calculate epoxy coverage?",
    answer: `Gallons needed = square feet × thickness in inches × 144 ÷ 231. At the common 1/8 in flood coat, one gallon covers about ${fmtNum(sqFtPerGallon(0.125))} sq ft, or about ${fmtNum(flOzPerSqFt(0.125), 0)} fl oz per square foot; at 1/16 in it covers twice as much. Enter your area and thickness below to add edges, runoff, and cost.`,
    answerTable: {
      headers: ["Coat thickness", "Coverage per gallon", "Resin per sq ft"],
      rows: [[1 / 16, "1/16 in (1.6 mm)"], [1 / 8, "1/8 in (3.2 mm)"], [1 / 4, "1/4 in (6.4 mm)"]].map(([inches, label]) => [
        label,
        `${fmtNum(sqFtPerGallon(inches))} sq ft`,
        `${fmtNum(flOzPerSqFt(inches))} fl oz`
      ]),
      note: "Mixed resin, top surface only, before waste. The epoxy thickness and coverage chart lists seal coats and floor coatings in mils."
    },
    bullets: [
      "Best for tabletops, countertops, bar tops, and other surface-finish jobs.",
      "Turns area and thickness into an order-ready resin estimate with realistic buffer.",
      "Makes edge soak-in, runoff, and waste visible instead of hiding them inside one vague number.",
      "Useful for per-square-foot planning when you know the surface area but not the final order quantity."
    ],
    howTo: [
      "Measure every face that will actually receive epoxy, including exposed edges if you plan to coat them.",
      "Use the intended finished coat thickness, not the height of the whole project or substrate.",
      "For a fast per-square-foot check, start with the coverage chart and then return here to add waste, edges, and cost.",
      "Raise the waste setting if the piece has complex perimeter detail, porous material, or heavy runoff."
    ],
    mistakes: [
      "Estimating only the top face and forgetting coated edges, drips, or waterfall faces.",
      "Confusing a thin flood coat with a deep cavity fill.",
      "Using a surface-coverage page for a river table, void fill, or thick cast."
    ],
    faq: [
      {
        q: "Is this page better for top coats than a volume calculator?",
        a: "Yes. Coverage projects are usually driven by surface area and finish thickness, so a coating-oriented calculator is the better fit."
      },
      {
        q: "What thickness should I enter for a flood coat?",
        a: "Enter the finished coat thickness you want to see after leveling, not the full height of the substrate. A coating job is about surface build, not cavity depth."
      },
      {
        q: "Should I include edges in the coverage estimate?",
        a: "Yes, if the edges will actually receive epoxy. On many finish jobs, edges and runoff are exactly where the estimate becomes too low if you ignore them."
      }
    ],
    related: [
      "epoxy-flood-coat-calculator",
      "epoxy-seal-coat-calculator",
      "how-much-epoxy-per-square-foot",
      "how-much-does-a-gallon-of-epoxy-cover",
      "table-top-epoxy-calculator",
      "bar-top-epoxy-calculator",
      "countertop-epoxy-calculator",
      "garage-floor-epoxy-calculator",
      "epoxy-floor-coverage-calculator",
      "epoxy-volume-calculator",
      "epoxy-cost-calculator",
      "epoxy-coverage-chart",
      "epoxy-calculator"
    ],
    note: "Use this page for finish coats and surface pours. If the resin is filling a cavity or thick section, move to the volume, river-table, or deep-pour page instead.",
    compareLabel: "Coverage baseline vs buffered order",
    resultEyebrow: "Coverage recommendation",
    lastmod: "2026-10-03"
  }),
  calculatorPage({
    slug: "river-table-epoxy-calculator",
    title: "River Table Epoxy Calculator: Resin Volume, Waste & Cost",
    h1: "River Table Epoxy Calculator",
    description:
      "Estimate epoxy for river tables with quick mode, segment mode, seepage, seal-coat buffer, cost planning, and deep-pour recommendations.",
    eyebrow: "River Table Planner",
    intro:
      "Estimate resin for a live-edge river table in one of two modes: a fast average-width estimate, or segment mode for irregular channels. Seepage, the seal coat, and cost are built in.",
    primaryKeyword: "river table epoxy calculator",
    supportingKeywords: ["epoxy calculator for river table", "live edge epoxy calculator", "river table resin calculator"],
    calculatorType: "river",
    bullets: [
      "Switch between quick mode and segment mode depending on how irregular the river is.",
      "Adds seepage, seal-coat, and waste planning that simple river formulas miss.",
      "Outputs mixed quantity, approximate budget, layer guidance, and resin-class recommendation."
    ],
    howTo: [
      "Mark measurement points along the river every 6 to 8 inches, and take more points where the channel changes direction or widens.",
      "Use quick mode only for a fast sanity check. Use segment mode when the river width changes materially across the slab.",
      "Leave seepage and seal-coat buffers on unless the mold, edges, and underside are already sealed and tested."
    ],
    mistakes: [
      "Reducing an irregular river to one average width and trusting the number too much.",
      "Ignoring underside leaks, wood soak-in, cup waste, and small leveling errors.",
      "Buying a table-top resin for a river depth that really needs a casting or deep-pour product."
    ],
    faq: [
      {
        q: "How many width points should I measure?",
        a: "As a rule of thumb, take a width measurement every 6 to 8 inches along the river. More variation means more measurement points."
      },
      {
        q: "Should I still add extra resin if the segment estimate looks precise?",
        a: "Yes. Precision on the geometry side does not remove real-world loss from seepage, cup waste, and minor edge errors."
      },
      {
        q: "When is quick mode good enough?",
        a: "Quick mode is good for a first-pass estimate or a river that stays fairly consistent in width. If the channel pinches, widens, or bends sharply, segment mode is the safer basis for ordering."
      },
      {
        q: "Does this page replace the resin data sheet?",
        a: "No. Use this page to plan quantity and workflow, then confirm max pour depth, cure conditions, and mix ratio against the product you intend to buy."
      }
    ],
    related: [
      "river-table-epoxy-cost",
      "how-much-epoxy-do-i-need-for-a-river-table",
      "how-to-measure-a-river-table-for-epoxy",
      "deep-pour-epoxy-calculator",
      "epoxy-cost-calculator",
      "deep-pour-vs-table-top-epoxy"
    ],
    note: "River tables punish under-buying. Start with quick mode, then switch to segment mode if the river shape changes enough to make a single average width misleading.",
    compareLabel: "Quick mode vs segment mode",
    lastmod: "2026-10-03"
  }),
  calculatorPage({
    slug: "deep-pour-epoxy-calculator",
    title: "Deep Pour Epoxy Calculator: Layers, Volume & Cost",
    h1: "Deep Pour Epoxy Calculator",
    description:
      "Calculate deep pour epoxy volume, staged lift count, waste, and cost for thick casting projects and resin pours that cannot be treated like a surface coat.",
    eyebrow: "Thick Cast Planning",
    intro:
      "Deep pours fail when the math stops at total gallons. This page turns cavity size into a real execution plan by showing staged lifts, safety margin, approximate budget, and whether the project points toward a deep-pour casting resin instead of a top-coat product.",
    primaryKeyword: "deep pour epoxy calculator",
    supportingKeywords: ["deep pour resin calculator", "epoxy deep pour calculator"],
    calculatorType: "deep-pour",
    bullets: [
      "Estimates material for thick casts where product depth limits matter.",
      "Turns one total volume into staged lifts you can actually execute.",
      "Helps you avoid choosing a resin that cannot safely handle the target section."
    ],
    howTo: [
      "Enter the full finished cavity size, then set the maximum lift depth from the product you are considering.",
      "Treat the lift guidance as part of the buying decision, not as an afterthought after you order resin.",
      "Use the total quantity and the staged-lift output together when planning mixing sessions and shop time."
    ],
    mistakes: [
      "Assuming the total quantity is enough information for a deep cast.",
      "Ordering resin without checking maximum pour depth and cure temperature limits.",
      "Using a coating or table-top product for a section that really needs deep-pour behavior."
    ],
    faq: [
      {
        q: "Why do I need layer guidance if the total volume is already correct?",
        a: "Because the total quantity and the pour schedule are different decisions. A project can need the right total amount and still fail if each layer is too thick."
      },
      {
        q: "What should I do if my target depth exceeds the product lift depth?",
        a: "Plan staged pours and confirm the cure window between lifts on the product documentation. The calculator shows the quantity problem, but the resin data sheet still controls the actual execution limits."
      },
      {
        q: "Is deep-pour resin always better for thick projects?",
        a: "It is often the right starting point, but not automatically. Cure speed, ambient temperature, clarity goals, and the actual section thickness all matter. Use this page to narrow the product class, then compare technical sheets."
      }
    ],
    related: [
      "river-table-epoxy-calculator",
      "deep-pour-vs-table-top-epoxy",
      "epoxy-cost-calculator",
      "epoxy-mixing-ratio-guide"
    ],
    note: "Deep-pour work is both a quantity problem and an execution problem. Use the layer guidance to pressure-test the plan before you compare products.",
    compareLabel: "Current depth vs safe layering"
  }),
  calculatorPage({
    slug: "table-top-epoxy-calculator",
    title: "Table Top Epoxy Calculator: Flood Coat Coverage & Resin",
    h1: "Table Top Epoxy Calculator",
    description:
      "Estimate epoxy for tabletops and flood coats with surface coverage, finish thickness, runoff, waste, and top-coat resin guidance.",
    eyebrow: "Surface Finish Calculator",
    intro:
      "Use this page for table top resin work where the job is really about coverage, leveling, clarity, and finish build. It is tuned for flood coats and finish pours, not thick casting sections or cavity fills.",
    primaryKeyword: "table top epoxy calculator",
    supportingKeywords: ["tabletop epoxy calculator", "epoxy table top calculator"],
    calculatorType: "surface",
    bullets: [
      "Best for flood coats, finishing pours, and tabletop resurfacing jobs.",
      "Translates surface size and target thickness into a usable resin order estimate.",
      "Keeps edge runoff, perimeter waste, and top-coat product fit visible in the calculation."
    ],
    howTo: [
      "Measure every face that will actually receive resin, including wrap edges if they will be coated.",
      "Enter the finished flood-coat thickness you want after leveling, not the full substrate thickness.",
      "Use a higher waste setting if you expect strong edge runoff or if the piece has uneven perimeter detail."
    ],
    mistakes: [
      "Using deep-pour logic for a thin finish job.",
      "Ignoring edge runoff and then under-ordering material.",
      "Using a tabletop page for a river channel or thick embedded pour."
    ],
    faq: [
      {
        q: "Is table top epoxy the same as deep pour resin?",
        a: "No. Table top products are typically for thin finish layers, while deep pour products are formulated for thicker pours."
      },
      {
        q: "Should I count table edges in the estimate?",
        a: "Yes, if the edges will actually receive resin. Table edges and runoff are often the reason a flood-coat estimate comes in short."
      },
      {
        q: "What if the table has a small knot or recessed area?",
        a: "Use this page for the main surface coat, then add a separate void-fill or volume estimate if the recess is deep enough to behave like a cavity rather than a finish layer."
      }
    ],
    related: [
      "epoxy-coverage-calculator",
      "bar-top-epoxy-calculator",
      "countertop-epoxy-calculator",
      "epoxy-cost-calculator",
      "deep-pour-vs-table-top-epoxy"
    ],
    note: "Use this page for flood coats and finish pours. If the job includes a thick recess, river channel, or casting depth limit, solve that part on a different calculator first.",
    compareLabel: "Flood-coat baseline vs buffered order",
    resultEyebrow: "Coverage recommendation"
  }),
  calculatorPage({
    slug: "bar-top-epoxy-calculator",
    title: "Bar Top Epoxy Calculator: Coverage, Edges & Resin",
    h1: "Bar Top Epoxy Calculator",
    description:
      "Calculate epoxy for bar tops with surface coverage, exposed-edge runoff, waste, and finish-coat guidance for high-gloss pours.",
    eyebrow: "Bar Top Coverage",
    intro:
      "Bar tops often combine long surface runs, visible front edges, and more drip loss than a standard tabletop. This page is tuned for that coverage pattern so the estimate reflects the realities of a glossy bar finish instead of generic volume math.",
    primaryKeyword: "bar top epoxy calculator",
    supportingKeywords: ["bar countertop epoxy calculator"],
    calculatorType: "surface",
    bullets: [
      "Built for bars, serving counters, and long surface runs with exposed edges.",
      "More accurate for bar-top finish pours than cavity-style volume estimation.",
      "Makes edge treatment, runoff, and waste visible before you choose a resin quantity."
    ],
    howTo: [
      "Measure the full top surface first, then add edge exposure into the waste assumption if the bar has a pronounced front edge or wrap.",
      "Use a slightly higher waste setting than a flat tabletop if the finish will run heavily over the perimeter.",
      "Treat this as a coating job unless the project includes a true cavity, inlay pocket, or deep inset."
    ],
    mistakes: [
      "Ignoring the exposed front edge on a thick bar top.",
      "Treating a glossy finish coat like a deep cavity fill.",
      "Underestimating waste on long drip lines and perimeter cleanup."
    ],
    faq: [
      {
        q: "Should bar tops use the same thickness as countertop pours?",
        a: "Sometimes, but the desired visual effect and edge style can change the ideal finish thickness."
      },
      {
        q: "Why do bar tops usually need more buffer than a flat desk top?",
        a: "Because bars often have longer exposed edges, more visible drips, and more finish loss along the perimeter. The geometry is still surface-first, but the waste pattern is usually less forgiving."
      },
      {
        q: "Is this page right for an embedded object bar top?",
        a: "Use this page for the final flood coat. If the embedded object section creates a true cavity or depth pocket, calculate that volume separately before you estimate the finish layer."
      }
    ],
    related: [
      "epoxy-bar-top-cost",
      "table-top-epoxy-calculator",
      "countertop-epoxy-calculator",
      "epoxy-coverage-calculator",
      "epoxy-cost-calculator"
    ],
    note: "Bar tops often lose more resin at the perimeter than users expect. Use a conservative waste setting if the project has a thick front edge, rounded profile, or heavy runoff.",
    compareLabel: "Top-only vs edge-heavy bar finish",
    resultEyebrow: "Coverage recommendation"
  }),
  calculatorPage({
    slug: "countertop-epoxy-calculator",
    title: "Countertop Epoxy Calculator: Coverage, Edges & Resin",
    h1: "Countertop Epoxy Calculator",
    description:
      "Use this countertop epoxy calculator to estimate coverage, finish thickness, waste, and resin quantity for kitchen, island, vanity, and other surface projects.",
    eyebrow: "Countertop Planning",
    intro:
      "Countertop projects are usually surface-first, but they become expensive when edges, waterfall faces, seams, and finish thickness are handled loosely. This page keeps the math focused on those realities rather than pretending the job is a simple block of volume.",
    primaryKeyword: "countertop epoxy calculator",
    supportingKeywords: ["epoxy countertop calculator", "counter top epoxy calculator"],
    calculatorType: "surface",
    bullets: [
      "Built for kitchen counters, islands, vanity tops, and other flat surface refinishing work.",
      "Uses finish thickness and practical waste instead of cavity-depth assumptions.",
      "Makes it easier to decide whether the layout is simple enough for one coating estimate or needs extra edge and seam buffer."
    ],
    howTo: [
      "Measure the full footprint and note any waterfall faces, drop edges, returns, or wrapped sections that will also receive epoxy.",
      "Enter the finished build thickness you want to see after leveling, not the thickness of the substrate itself.",
      "Increase waste when the countertop layout includes many seams, edge details, or multiple disconnected sections."
    ],
    mistakes: [
      "Ignoring waterfall faces, splash edges, or wrapped returns.",
      "Trying to use one estimate for multiple separate finish passes without buffer.",
      "Using a volume or cavity page for what is fundamentally a surface-coating job."
    ],
    faq: [
      {
        q: "Can I use this page for kitchen islands and vanity tops?",
        a: "Yes. It works for flat surface coating projects where the main drivers are area, edges, and finish thickness."
      },
      {
        q: "Should I include backsplashes and waterfall ends?",
        a: "Include them if they will actually be coated. On many kitchen and island projects, those vertical faces are a material cost people forget to count."
      },
      {
        q: "What if I am doing multiple countertop sections at once?",
        a: "Measure the total coated area across all sections, then raise the waste buffer if the work will be split across multiple pours, edges, or disconnected shapes."
      }
    ],
    related: [
      "epoxy-countertop-cost",
      "epoxy-coverage-calculator",
      "table-top-epoxy-calculator",
      "bar-top-epoxy-calculator",
      "epoxy-cost-calculator"
    ],
    note: "Countertop jobs often become edge-heavy faster than expected. If the project includes waterfall faces, wrapped returns, or multiple sections, use a more conservative buffer.",
    compareLabel: "Surface-only vs edge-inclusive plan",
    resultEyebrow: "Coverage recommendation"
  }),
  calculatorPage({
    slug: "garage-floor-epoxy-calculator",
    title: "Epoxy Garage Floor Cost Calculator: Price per Sq Ft (2026)",
    h1: "Epoxy Garage Floor Cost Calculator",
    description:
      "Epoxy garage floor cost: $4–$10 per sq ft installed, about $1,600–$4,000 for a 400 sq ft 2-car garage. Compare DIY kits, flake, metallic, and polyaspartic.",
    eyebrow: "Floor Cost Estimator",
    intro:
      "Enter the floor size, coating system, and slab condition to get an installed price range, the cost per square foot, and what prep and repairs add. Ranges are U.S. national averages from current cost guides, with sources listed below.",
    primaryKeyword: "epoxy garage floor cost calculator",
    supportingKeywords: ["epoxy garage floor cost", "epoxy floor cost", "epoxy flooring cost calculator", "epoxy floor cost per square foot", "garage floor coating cost calculator"],
    calculatorType: "floor-cost",
    ...floorCostContent,
    bullets: [],
    howTo: [
      "Measure the coated floor only: skip the area under cabinets, steps, or built-in storage.",
      "Pick the system you are actually comparing. Flake and solid-color epoxy share one price band.",
      "Set the floor condition honestly. Cracks, moisture, and old coatings change the price more than the coating choice does.",
      "Use the result to sanity-check quotes, not to replace them."
    ],
    mistakes: [
      "Comparing a DIY kit price (materials only) with a professional quote (materials and labor).",
      "Skipping a moisture check on a basement or slab-on-grade garage.",
      "Choosing the lowest bid without asking how the concrete will be prepared."
    ],
    checklist: [],
    generalFaq: [],
    related: [
      "epoxy-floor-coverage-calculator",
      "two-car-garage-epoxy-calculator",
      "epoxy-coverage-chart",
      "how-much-does-a-gallon-of-epoxy-cover",
      "epoxy-waste-factor-guide"
    ],
    note: "Ranges are U.S. national averages for materials and labor. Get itemized quotes before you commit.",
    compareLabel: "Low vs high estimate",
    resultEyebrow: "Estimated cost",
    statLabels: {
      raw: "Price per sq ft",
      split: "Coating",
      cost: "Prep & repairs",
      layers: "DIY vs pro"
    },
    nextStepLinks: [
      { label: "Gallons & Kits Calculator", slug: "epoxy-floor-coverage-calculator" },
      { label: "See Methodology", slug: "methodology" }
    ],
    ui: {
      calculatorHeading: "Estimate your floor cost",
      currentRecommendation: "Estimated cost",
      estimatedCost: "Per sq ft",
      standard: "Low estimate",
      conservative: "High estimate",
      productFit: "Other system",
      whyChangedEyebrow: "Cost Breakdown",
      whyChangedHeading: "What makes up the estimate",
      compareEyebrow: "Range",
      howToTitle: "How to get an accurate estimate",
      mistakesTitle: "Mistakes that make quotes look wrong",
      faqHeading: "Epoxy floor cost questions",
      resultFallback: "Enter the floor size to see an installed price range.",
      breakdownFallback: "Enter the floor size to see the coating, prep, and repair costs.",
      nextStepHeading: "Compare two or three itemized quotes",
      nextStepCopy: "Use the range to check quotes. Ask how the concrete will be prepared, how many coats go down, and what the warranty covers."
    },
    lastmod: "2026-10-03"
  }),
  calculatorPage({
    slug: "void-fill-epoxy-calculator",
    title: "Void Fill Epoxy Calculator for Cracks & Knots",
    h1: "Void Fill Epoxy Calculator",
    description:
      "Calculate epoxy for cracks, knots, and void fills with small-volume estimates, waste buffer, and unit conversion.",
    eyebrow: "Small Fill Planning",
    intro:
      "For small, irregular fills where ounces and milliliters matter: cracks, knots, bark inclusions, and other localized voids.",
    primaryKeyword: "void fill epoxy calculator",
    supportingKeywords: ["epoxy void filling calculator", "crack fill epoxy calculator", "epoxy knot fill calculator", "small epoxy fill calculator"],
    calculatorType: "void-fill",
    bullets: [
      "Small-volume planning for cracks, knots, and localized voids.",
      "Strong emphasis on ounces, liters, and waste buffer.",
      "Useful when the job is too small for gallon-oriented planning.",
      "Pairs the raw cavity amount with a sand-back buffer so tiny fills are not under-ordered."
    ],
    howTo: [
      "Measure the longest, widest, and deepest likely points of the fill.",
      "Round up for messy edges or irregular bark pockets.",
      "Use the converter if your resin kit is sold in ounces, milliliters, or small bottle sizes.",
      "Use a higher buffer if you will overfill and sand back."
    ],
    mistakes: [
      "Using a gallon-oriented planning mindset on a tiny fill.",
      "Forgetting to account for resin that will be sanded away.",
      "Ignoring the irregular profile of bark pockets and cracks."
    ],
    faq: [
      {
        q: "Should I add extra resin if I plan to sand flush later?",
        a: "Yes. Overfilling and sanding back is common, so your practical usage is usually higher than the cavity-only number."
      }
    ],
    related: [
      "epoxy-volume-calculator",
      "epoxy-unit-converter",
      "epoxy-waste-factor-guide",
      "epoxy-cost-calculator",
      "how-to-measure-a-river-table-for-epoxy"
    ],
    compareLabel: "Tight fill vs sand-back buffer",
    lastmod: "2026-10-03"
  }),
  calculatorPage({
    slug: "round-epoxy-table-calculator",
    title: "Round Epoxy Table Calculator",
    h1: "Round Epoxy Table Calculator",
    description:
      "Calculate epoxy resin for round tables and circular molds with diameter-based volume, waste, and project planning guidance.",
    eyebrow: "Round Shape Calculator",
    intro:
      "Round projects deserve their own page because the inputs and mental model are different. Use this page when diameter is the most natural measurement for the project.",
    primaryKeyword: "round epoxy table calculator",
    supportingKeywords: ["round table epoxy calculator", "round resin table calculator", "epoxy calculator circle", "resin calculator circle"],
    calculatorType: "round",
    bullets: [
      "Diameter-first planning for circular projects.",
      "Better than converting round shapes into rough rectangles.",
      "Outputs purchase-ready units with waste guidance.",
      "Works for round tables, trays, and circular molds with one diameter and one depth."
    ],
    howTo: [
      "Measure the widest true diameter of the project or mold.",
      "Use the intended resin depth, not the full table thickness.",
      "Increase waste if the perimeter is irregular or highly exposed."
    ],
    mistakes: [
      "Using rectangular dimensions to approximate a circular project.",
      "Confusing radius and diameter.",
      "Ignoring perimeter waste on a round edge."
    ],
    faq: [
      {
        q: "Does this page work for round molds as well as tables?",
        a: "Yes. It is useful whenever the core geometry is circular and the main inputs are diameter and target resin depth."
      }
    ],
    related: [
      "epoxy-volume-calculator",
      "table-top-epoxy-calculator",
      "epoxy-unit-converter",
      "epoxy-calculator",
      "epoxy-cost-calculator"
    ],
    compareLabel: "Round volume vs buffered order",
    lastmod: "2026-10-03"
  }),
  guidePage({
    slug: "how-much-epoxy-do-i-need",
    title: "How Much Epoxy Do I Need? Formula, Chart & Examples",
    h1: "How Much Epoxy Do I Need?",
    description:
      "Learn how to calculate epoxy needs by volume, coverage, thickness, and waste, then use the right calculator for your project.",
    eyebrow: "Guide",
    intro:
      "This guide answers the broad quantity question first, then points you to the right calculator for the job. The main mistake people make is treating every epoxy project like the same geometry problem.",
    primaryKeyword: "how much epoxy do i need",
    supportingKeywords: ["how much resin do i need epoxy", "how to calculate epoxy needed"],
    answer:
      "You need enough epoxy to cover the raw project volume or surface thickness, plus realistic extra material for waste, seepage, edge loss, and safety margin. The correct tool depends on whether your project is a cavity, a coating, a deep cast, or an irregular live-edge pour.",
    takeaways: [
      "Regular shapes can use pure volume math, but irregular projects need extra planning.",
      "Coverage jobs and deep-pour jobs should not be estimated the same way.",
      "Purchase quantity should usually be higher than raw geometric volume."
    ],
    sections: [
      {
        title: "Choose the right planning model",
        points: [
          "Use the coverage calculator for top coats and thin finish applications.",
          "Use the epoxy resin calculator for regular cavities, slabs, and molds.",
          "Use the river table and deep pour pages when project geometry or product type introduces more risk."
        ]
      },
      {
        title: "What changes the final number",
        points: [
          "Waste from cups, sticks, spills, and overmixing.",
          "Edge soak-in and seepage in live-edge wood.",
          "Seal coat needs and conservative order sizing."
        ]
      },
      {
        title: "Fast route by project type",
        cards: [
          {
            title: "Epoxy Resin Calculator",
            text: "Enter length, width, and depth to get mixed resin in ounces, gallons, or liters, with waste and the Part A / Part B split.",
            slug: "epoxy-calculator"
          }
        ],
        points: [
          "Use the general calculator for rectangles, circles, and quick metric or imperial checks.",
          "Use the cost calculator when the quantity is known and the real question is how many kits you can afford.",
          "Use the coverage chart when you know the square footage and coat thickness rather than a cavity volume."
        ]
      }
    ],
    faq: [],
    related: [
      "epoxy-calculator",
      "epoxy-coverage-calculator",
      "epoxy-volume-calculator",
      "epoxy-unit-converter",
      "epoxy-cost-calculator",
      "epoxy-coverage-chart"
    ],
    lastmod: "2026-10-03"
  }),
  guidePage({
    slug: "how-much-epoxy-do-i-need-for-a-river-table",
    title: "How Much Epoxy for a River Table? Calculator & Guide",
    h1: "How Much Epoxy Do You Need for a River Table?",
    description:
      "Estimate how much epoxy a river table needs with measurement tips, waste guidance, segment-based planning, and a dedicated calculator.",
    eyebrow: "Guide",
    intro:
      "River table estimates usually come up short when they rely on one average width and ignore seepage and the seal coat. This guide covers how to measure the channel and how much extra to plan, then hands off to the river table calculator.",
    primaryKeyword: "how much epoxy do i need for a river table",
    supportingKeywords: ["how much resin for river table", "river table epoxy amount"],
    answer:
      "A river table needs enough epoxy to fill the channel geometry, plus extra material for seepage, seal coat, mixing waste, and a safe ordering margin. For irregular channels, the most trustworthy path is to measure width in segments instead of relying on one average number.",
    takeaways: [
      "Segment measurement is usually more believable than one average width.",
      "Live-edge wood often consumes more resin than the raw geometry suggests.",
      "Deep pour vs table top resin is a separate decision from total quantity."
    ],
    sections: [
      {
        title: "Why river tables are different",
        points: [
          "The channel shape changes along the length of the project.",
          "Edges can leak, soak up resin, or require a seal coat.",
          "The correct resin type depends on target depth and pour schedule."
        ]
      },
      {
        title: "What to do next",
        points: [
          "Measure widths at multiple points and use the river table calculator.",
          "Add a realistic waste factor before you decide how many kits to buy.",
          "Check whether the planned depth requires a deep pour product."
        ]
      }
    ],
    faq: [],
    related: [
      "river-table-epoxy-calculator",
      "how-to-measure-a-river-table-for-epoxy",
      "deep-pour-epoxy-calculator",
      "epoxy-cost-calculator"
    ],
    lastmod: "2026-10-03"
  }),
  guidePage({
    slug: "how-to-measure-a-river-table-for-epoxy",
    title: "How to Measure a River Table for Epoxy",
    h1: "How to Measure a River Table for Epoxy",
    description:
      "Learn how to measure a river table for epoxy using segment widths, average depth, waste allowance, and practical accuracy tips.",
    eyebrow: "Guide",
    intro:
      "Measurement quality decides whether the calculator feels believable. This page explains the fastest way to capture enough geometric detail without turning the planning step into a headache.",
    primaryKeyword: "how to measure a river table for epoxy",
    supportingKeywords: ["measure river table for resin", "river width measurement for epoxy"],
    answer:
      "Measure the total project length, determine the intended resin depth, and record river width at multiple points along the channel. Then calculate either with a segment-based estimator or use the average only as a quick rough check.",
    takeaways: [
      "The more the river shape changes, the more width points you should capture.",
      "Average depth is acceptable only when the cavity is actually consistent.",
      "Seal coat and seepage should be handled as planning buffers, not hidden assumptions."
    ],
    sections: [
      {
        title: "Simple field workflow",
        points: [
          "Mark the river length first so your width points are evenly spaced.",
          "Record widths every 6 to 8 inches or more often on complex bends.",
          "Use the deepest realistic target pour depth for planning."
        ]
      },
      {
        title: "When to move from quick mode to segment mode",
        points: [
          "Use quick mode when the river width is fairly consistent.",
          "Use segment mode when the channel opens and narrows noticeably.",
          "If you are spending heavily on resin, segment mode is usually worth the extra minute."
        ]
      }
    ],
    faq: [],
    related: [
      "river-table-epoxy-calculator",
      "how-much-epoxy-do-i-need-for-a-river-table",
      "epoxy-waste-factor-guide",
      "void-fill-epoxy-calculator"
    ],
    lastmod: "2026-05-05"
  }),
  guidePage({
    slug: "deep-pour-vs-table-top-epoxy",
    title: "Deep Pour vs Table Top Epoxy: Which Should You Use?",
    h1: "Deep Pour vs Table Top Epoxy",
    description:
      "Compare deep pour and table top epoxy by thickness, cure behavior, use case, and project fit for river tables, slabs, and coatings.",
    eyebrow: "Comparison Guide",
    intro:
      "Many projects know how much epoxy they need before deciding which kind of resin can handle the pour. This guide compares deep pour and table top epoxy by depth per pour, cure, and use.",
    primaryKeyword: "deep pour vs table top epoxy",
    supportingKeywords: ["deep pour or tabletop epoxy", "what epoxy for river table"],
    answer:
      "Use deep pour epoxy for thick casting work where heat management and layer depth matter. Use table top epoxy for thin flood coats and finish layers where leveling and surface clarity matter more than mass volume.",
    takeaways: [
      "The total amount needed does not determine the right product type by itself.",
      "A thin finish coat and a thick river channel can require completely different resins.",
      "Always compare target depth against the product specification before ordering."
    ],
    sections: [
      {
        title: "How the use cases differ",
        points: [
          "Deep pour resin is for thickness, layers, and controlled cure.",
          "Table top resin is for thin self-leveling finish work.",
          "Some projects use both: deep pour in the cavity and table top on the final surface."
        ]
      },
      {
        title: "Decision shortcuts",
        points: [
          "If the planned resin depth is substantial, start on the deep pour page.",
          "If you are coating a finished surface, start on the table top page.",
          "If you are unsure, compare the result with the product specification before buying."
        ]
      }
    ],
    faq: [],
    related: [
      "deep-pour-epoxy-calculator",
      "table-top-epoxy-calculator",
      "river-table-epoxy-calculator"
    ],
    lastmod: "2026-10-03"
  }),
  guidePage({
    slug: "epoxy-waste-factor-guide",
    title: "Epoxy Waste Factor Guide: How Much Extra to Buy",
    h1: "Epoxy Waste Factor Guide",
    description:
      "Learn how much extra epoxy to buy for waste, seepage, edge soak-in, mixing loss, and irregular project geometry.",
    eyebrow: "Planning Guide",
    intro:
      "Most ruined resin orders were not caused by bad geometry. They were caused by unplanned waste, edge loss, or forgetting that the purchase quantity should be safer than the bare minimum.",
    primaryKeyword: "epoxy waste factor",
    supportingKeywords: ["how much extra epoxy should i buy", "epoxy overage guide"],
    answer:
      "The right waste factor depends on how messy, porous, or irregular the project is. Simple sealed surfaces may need only a modest margin, while live-edge and overfill-and-sand projects often justify a more conservative buffer.",
    takeaways: [
      "Waste is not one thing. It includes cup loss, spills, overfill, edge soak-in, and seepage.",
      "Irregular wood projects usually deserve more margin than simple surface coats.",
      "Waste planning often matters as much as the raw formula."
    ],
    sections: [
      {
        title: "Common sources of overage",
        points: [
          "Mixing cup and stir-stick loss.",
          "Porous edges and end grain soak-in.",
          "Intentional overfill before sanding flush."
        ]
      },
      {
        title: "When to raise the buffer",
        points: [
          "The shape is irregular or hard to measure precisely.",
          "The substrate is porous or only lightly sealed.",
          "The project uses many edges, pockets, or small cavities."
        ]
      }
    ],
    faq: [],
    related: [
      "epoxy-calculator",
      "river-table-epoxy-calculator",
      "void-fill-epoxy-calculator",
      "epoxy-cost-calculator"
    ],
    lastmod: "2026-05-05"
  }),
  guidePage({
    slug: "epoxy-coverage-chart",
    title: "Epoxy Thickness & Coverage Chart: Mils, Inches, Sq Ft per Gallon",
    h1: "Epoxy Thickness and Coverage Chart",
    description:
      "How thick is epoxy? Typical thickness for garage floors (10-20 mils), tabletops (1/8 inch), and deep pours, plus square feet per gallon at every thickness.",
    eyebrow: "Reference Chart",
    intro:
      "Thickness is the number that decides how far a gallon of epoxy goes. Find the typical thickness for your job first, then read across to see how many square feet one gallon covers at that thickness.",
    primaryKeyword: "epoxy thickness",
    supportingKeywords: ["epoxy coating thickness", "how thick is epoxy flooring", "epoxy coverage chart", "epoxy coverage per gallon"],
    answer:
      "Epoxy thickness depends on the job: garage floor coatings go on at about 10 to 20 mils per coat (0.25 to 0.5 mm), a tabletop flood coat self-levels at about 1/8 inch (3 mm) per pour, and deep-pour casting resin goes in at 1/2 inch to 2 inches per layer, depending on the product. Coverage drops as thickness rises: one gallon covers about 160 sq ft at 10 mils but only about 12.8 sq ft at 1/8 inch.",
    takeaways: [
      "1 mil is 0.001 inch (0.0254 mm). Floor coatings are measured in mils, tabletop and casting resin in fractions of an inch.",
      "One US gallon is 231 cubic inches, so coverage in sq ft = 231 / (thickness in inches x 144).",
      "Doubling the thickness halves the square feet one gallon covers.",
      "Chart values are raw coverage. Add 10-15% for runoff, edges, and mixing loss."
    ],
    sections: [
      {
        title: "How thick is epoxy? Typical thickness by application",
        body:
          "These are common planning ranges. The product data sheet always wins, especially for floor coatings and deep-pour resins with a stated maximum pour depth.",
        table: {
          headers: ["Application", "Typical thickness per coat", "Metric", "Notes"],
          rows: [
            ["Seal coat on wood", "Thin brushed coat, 1/32 in or less", "Under 0.8 mm", "Seals pores and edges so the flood coat does not bubble or drain."],
            ["Garage floor coating (100% solids)", "10-20 mils", "0.25-0.5 mm", "Usually 2 coats. Water-based kits build less film per coat."],
            ["Tabletop or bar top flood coat", "About 1/8 in", "About 3 mm", "Most tabletop epoxies self-level near 1/8 in per pour."],
            ["Countertop coating", "1/16-1/8 in per coat", "1.5-3 mm", "Budget extra for edges, drips, and a second coat."],
            ["Deep pour or river table", "1/2-2 in per pour", "13-50 mm", "Maximum depth per layer is product-specific."]
          ]
        }
      },
      {
        title: "Epoxy coverage chart: square feet per gallon by thickness",
        body:
          "Raw coverage for one US gallon of 100% solids epoxy with no waste. For metric, 1 liter covers 1 m² at 1 mm.",
        table: {
          headers: ["Thickness", "Inches", "Millimeters", "Sq ft per gallon"],
          rows: [
            ["5 mils", "0.005", "0.13", "321"],
            ["10 mils", "0.010", "0.25", "160"],
            ["20 mils", "0.020", "0.51", "80"],
            ["1/32 inch", "0.031", "0.79", "51"],
            ["1/16 inch", "0.063", "1.59", "25.7"],
            ["1/8 inch", "0.125", "3.18", "12.8"],
            ["1/4 inch", "0.250", "6.35", "6.4"],
            ["1/2 inch", "0.500", "12.7", "3.2"],
            ["1 inch", "1.000", "25.4", "1.6"]
          ]
        }
      },
      {
        title: "How to use a coverage chart well",
        points: [
          "Match your target finish thickness to the nearest row first.",
          "Treat chart values as raw material guidance, not final order quantity.",
          "Move to the detailed coverage page if the layout is complex."
        ]
      },
      {
        title: "Fast per-square-foot planning",
        points: [
          "For a thin seal coat, the square-foot number can look generous because the target thickness is small.",
          "For a flood coat, the same gallon covers less area because the finish thickness is higher.",
          "For garage floors and countertops, include edges, multiple coats, and runoff before buying."
        ]
      }
    ],
    faq: [],
    related: [
      "epoxy-coverage-calculator",
      "how-much-epoxy-per-square-foot",
      "how-much-does-a-gallon-of-epoxy-cover",
      "table-top-epoxy-calculator",
      "countertop-epoxy-calculator",
      "garage-floor-epoxy-calculator",
      "maximum-epoxy-pour-depth",
      "epoxy-cost-calculator"
    ],
    lastmod: "2026-10-03"
  }),
  guidePage({
    slug: "epoxy-mixing-ratio-guide",
    title: "Epoxy Mix Ratio Guide: Resin to Hardener Chart (1:1, 2:1, 3:1)",
    h1: "Epoxy Mix Ratio: Resin to Hardener Chart",
    description:
      "How to split epoxy resin and hardener at 1:1, 2:1, and 3:1 in ounces and milliliters, when to measure by weight, and what happens if the ratio is off.",
    eyebrow: "Mixing Guide",
    intro:
      "The mix ratio on your resin's label tells you how to split the total into Part A (resin) and Part B (hardener). The charts below do the split for common batch sizes, and the steps cover how to measure and mix so the epoxy cures fully.",
    primaryKeyword: "epoxy mix ratio",
    supportingKeywords: ["resin to hardener ratio", "resin mix ratio", "epoxy mixing ratio chart", "how to mix epoxy resin"],
    answer: `Use the ratio printed on your product. At 1:1, mix equal parts resin and hardener; at 2:1, two parts resin to one part hardener; at 3:1, three parts to one. A 16 fl oz batch is ${ratioSplit(16, 1, 1, "oz")} at 1:1, ${ratioSplit(16, 2, 1, "oz")} at 2:1, and ${ratioSplit(16, 3, 1, "oz")} at 3:1. If the label gives the ratio by weight, weigh both parts instead of using cups.`,
    takeaways: [
      "The first number is the resin (Part A), the second the hardener (Part B).",
      "Tabletop and coating resins are often 1:1; many casting and deep-pour resins are 2:1 or more. The label decides.",
      "A ratio by weight is not the same as a ratio by volume, because the two parts differ in density.",
      "An off-ratio mix may never fully cure, so measure each part, do not guess."
    ],
    sections: [
      {
        title: "Resin to hardener chart in fluid ounces",
        table: {
          headers: ["Total mixed", ...mixRatios.map(([a, b]) => `${a}:${b}`)],
          rows: [4, 8, 16, 32, 64, 128].map((total) => [
            total === 128 ? "128 fl oz (1 gal)" : `${total} fl oz`,
            ...mixRatios.map(([a, b]) => ratioSplit(total, a, b, "oz"))
          ]),
          note: "Each cell is resin (Part A) + hardener (Part B), by volume. Rounded to 0.1 fl oz."
        }
      },
      {
        title: "Resin to hardener chart in milliliters",
        table: {
          headers: ["Total mixed", ...mixRatios.map(([a, b]) => `${a}:${b}`)],
          rows: [100, 250, 500, 1000].map((total) => [`${fmtNum(total, 0)} ml`, ...mixRatios.map(([a, b]) => ratioSplit(total, a, b, "ml"))]),
          note: "Each cell is resin (Part A) + hardener (Part B), by volume. Rounded to 0.1 ml."
        }
      },
      {
        title: "By volume or by weight?",
        body:
          "Resin and hardener usually have different densities, so a ratio by weight (for example 100:45) does not match the same numbers by volume. Use measuring cups only when the label gives a volume ratio; for a weight ratio, use a digital scale.",
        cards: [
          {
            title: "Epoxy Mix Ratio by Volume vs Weight",
            text: "When to measure with cups and when you need a scale.",
            slug: "epoxy-mix-ratio-by-volume-vs-weight"
          }
        ]
      },
      {
        title: "How to mix epoxy resin",
        points: [
          "Measure each part in its own graduated cup at the ratio on the label.",
          "Combine them and stir slowly, scraping the sides and bottom of the cup, for the full mixing time on the label.",
          "For larger batches, pour into a second clean cup and stir again, so no unmixed resin from the cup walls reaches the pour.",
          "Pour soon after mixing: mixed epoxy heats up in the cup, and bigger batches lose working time faster.",
          "Mix in batches you can pour within the working time, rather than the whole project at once."
        ]
      },
      {
        title: "What happens if the ratio is off",
        body:
          "An off-ratio mix may not cure, or may cure with weaker properties. Typical signs are soft or sticky spots, areas that never cure, cracking, and excess shrinkage. Changing the amount of hardener does not fix a pour; follow the label ratio.",
        links: [
          { label: "Crosslink Technology: mix ratio related problems", url: "https://crosslinktech.com/support/trouble-shooting-guide/mix-ratio-related-problems.html" }
        ]
      }
    ],
    faq: [],
    related: [
      "epoxy-mix-ratio-by-volume-vs-weight",
      "epoxy-calculator",
      "deep-pour-epoxy-calculator",
      "epoxy-unit-converter",
      "void-fill-epoxy-calculator"
    ],
    lastmod: "2026-10-03"
  }),
  calculatorPage({
    slug: "epoxy-cost-calculator",
    title: "Epoxy Cost Calculator: Resin Project Budget Planner",
    h1: "Epoxy Cost Calculator",
    description:
      "Estimate epoxy project cost from planned resin quantity, waste, and price input for river tables, deep pours, coatings, and other resin projects.",
    eyebrow: "Budget Planning",
    intro:
      "Enter the resin quantity and the price per gallon or liter to see the project budget with a waste buffer. Use it once you know how much resin the project needs.",
    primaryKeyword: "epoxy cost calculator",
    supportingKeywords: ["epoxy cost per gallon", "epoxy project cost calculator", "epoxy price calculator", "resin project budget calculator"],
    calculatorType: "cost",
    answerHeading: "How much does epoxy cost per gallon?",
    answer:
      "Floor-coating epoxy runs about $30 to $150 per gallon depending on type: water-based is the cheapest, 100% solids costs the most, and polyurea or polyaspartic topcoats run about $150 per gallon. Enter your quantity and price below to see the budget with waste.",
    answerTable: {
      headers: ["Epoxy type", "Angi (2026)", "HomeGuide (2026)"],
      rows: [
        ["Water-based", "$30 – $50", "$40 – $100"],
        ["Solvent-based", "$40 – $55", "$50 – $100"],
        ["100% solids", "$45 – $150", "$70 – $150"],
        ["Polyurea / polyaspartic", "About $150 (This Old House 2026)", "—"]
      ],
      note: "Per gallon of floor coating material. Tabletop, casting, and art resin kits are priced per mixed gallon on the product listing."
    },
    sections: [
      {
        title: "Pricing a garage or basement floor?",
        body: "Installed floor prices include prep and labor, which usually cost more than the material.",
        cards: [
          {
            title: "Epoxy Garage Floor Cost Calculator",
            text: "Installed price per square foot for professional epoxy, metallic, and polyaspartic floors, plus DIY kits.",
            slug: "garage-floor-epoxy-calculator"
          }
        ],
        links: [
          { label: "Angi: Epoxy Flooring Cost", url: "https://www.angi.com/articles/epoxy-flooring-costs-advantages-and-installation.htm", note: "updated Aug 3, 2026" },
          { label: "HomeGuide: Epoxy Flooring Cost", url: "https://homeguide.com/costs/epoxy-flooring-cost", note: "2026" },
          { label: "This Old House: Epoxy Floor Cost", url: "https://www.thisoldhouse.com/flooring/epoxy-floor-cost", note: "updated Mar 13, 2026" }
        ]
      }
    ],
    bullets: [
      "Translates planned quantity into a budget range you can actually compare against suppliers.",
      "Useful for quoting, procurement planning, and sanity-checking expensive pours before you order.",
      "Works best after the geometry is already solved on the right scenario page.",
      "Keeps waste factor, price normalization, and kit-size thinking in one place."
    ],
    howTo: [
      "Start with the quantity you realistically expect to order, not the bare raw geometric minimum.",
      "Normalize your supplier price to a clear unit before comparing options.",
      "Use the unit converter first if one supplier lists liters and another lists gallons.",
      "Increase the waste setting if the project has irregular geometry, seepage risk, or overfill-and-sand steps."
    ],
    mistakes: [
      "Budgeting from raw volume instead of the buffered order quantity you will actually buy.",
      "Comparing resin prices without first converting them to the same unit basis.",
      "Ignoring how waste and overage can change the budget on high-volume pours."
    ],
    faq: [
      {
        q: "Should I cost from the calculator output or from the product kit size I will actually buy?",
        a: "The most practical answer is the kit size you will actually buy, because that is the real procurement decision."
      },
      {
        q: "Why does the budget change so much when the waste factor changes?",
        a: "Because resin is a high-cost input. On larger pours, even a modest change in waste or safety margin can move the total cost much more than people expect."
      },
      {
        q: "Should I use this page before or after the geometry calculators?",
        a: "After. This page is strongest when the quantity side is already believable and you are trying to convert that plan into a budget range."
      }
    ],
    related: [
      "epoxy-calculator",
      "resin-art-pricing-calculator",
      "garage-floor-epoxy-calculator",
      "river-table-epoxy-cost",
      "epoxy-countertop-cost",
      "epoxy-bar-top-cost",
      "epoxy-cost-per-square-foot",
      "river-table-epoxy-calculator",
      "deep-pour-epoxy-calculator",
      "epoxy-unit-converter",
      "epoxy-waste-factor-guide",
      "void-fill-epoxy-calculator",
      "epoxy-mixing-ratio-guide"
    ],
    note: "Enter the quantity you plan to order. If you are still working out how much resin you need, start with a project calculator.",
    compareLabel: "Planned quantity vs conservative budget",
    resultEyebrow: "Budget range",
    statLabels: {
      raw: "Base quantity",
      split: "Budget basis",
      cost: "Projected cost",
      layers: "Planning note"
    },
    lastmod: "2026-10-03"
  }),
  {
    slug: "epoxy-unit-converter",
    category: "converter",
    pageType: "calculator",
    title: "Epoxy Unit Converter: Gallons, Liters, Quarts & Ounces",
    h1: "Epoxy Unit Converter",
    description:
      "Convert cubic inches, gallons, liters, quarts, fluid ounces, and milliliters for epoxy planning, kit comparison, and resin quantity checks.",
    eyebrow: "Converter Hub",
    intro:
      "Use this page when the number is already known but the unit is getting in the way. It is designed for real epoxy planning, where one source might show gallons, another liters, and your notes may still be in cubic inches or ounces.",
    primaryKeyword: "epoxy unit converter",
    supportingKeywords: ["cubic inches to gallons epoxy", "liters to gallons resin calculator", "ounces to gallons epoxy", "epoxy calculator metric"],
    calculatorType: "converter",
    answerHeading: "How many liters, ounces, and cubic inches are in a gallon of epoxy?",
    answer:
      "One US gallon of mixed epoxy is 3.785 liters, 4 quarts, 128 fl oz, or 231 cubic inches, and one liter is about 33.8 fl oz. Volume conversions are exact. Converting volume to weight is not: kits sold by weight need the resin density from the data sheet.",
    answerTable: {
      headers: ["Volume", "Liters / ml", "US fl oz", "Cubic inches", "US gallons"],
      rows: [
        ["1 gallon", "3.785 L", "128", "231", "1"],
        ["1/2 gallon", "1.893 L", "64", "115.5", "0.5"],
        ["1 quart", "946 ml", "32", "57.75", "0.25"],
        ["16 fl oz", "473 ml", "16", "28.88", "0.125"],
        ["1 liter", "1,000 ml", "33.81", "61.02", "0.264"],
        ["500 ml", "500 ml", "16.91", "30.51", "0.132"],
        ["100 cu in", "1.639 L", "55.41", "100", "0.433"]
      ],
      note: "US liquid measures. UK (imperial) gallons and fluid ounces are larger."
    },
    bullets: [
      "Converts the units epoxy buyers and manufacturers actually use.",
      "Useful when your measurement notes and supplier listings are not in the same unit system.",
      "Best treated as a bridge between the geometry pages and the final project plan."
    ],
    howTo: [
      "Choose the source and target volume units before typing the value.",
      "Enter the number exactly as it appears in your notes, spreadsheet, or supplier listing.",
      "Use the converted result inside a scenario page if the project still needs waste, layer, or product-fit guidance."
    ],
    mistakes: [
      "Mixing linear measurement thinking with volume conversion in the same step.",
      "Forgetting whether the source value is gallons, quarts, liters, or fluid ounces.",
      "Treating unit conversion as a replacement for project planning."
    ],
    faq: [
      {
        q: "When should I use the converter instead of a calculator page?",
        a: "Use the converter when the geometry is already solved and you only need to move between units. If you still need waste, layer, or project-fit guidance, move back to the matching calculator page."
      },
      {
        q: "Can I use this for comparing product kit sizes across brands?",
        a: "Yes. That is one of the best uses for the page, especially when one brand lists liters and another lists gallons or ounces."
      },
      ...generalFaq
    ],
    related: [
      "epoxy-calculator",
      "epoxy-calculator-metric",
      "epoxy-kit-size-guide",
      "epoxy-mix-ratio-by-volume-vs-weight",
      "epoxy-volume-calculator",
      "epoxy-cost-calculator",
      "void-fill-epoxy-calculator",
      "round-epoxy-table-calculator",
      "resin-calculator",
      "cylinder-resin-calculator"
    ],
    checklist: scenarioChecklist,
    note: "Volume conversions are exact. Converting volume to weight needs the resin density from the product data sheet.",
    compareLabel: "Source value vs planning unit",
    resultEyebrow: "Converted value",
    statLabels: {
      raw: "Source value",
      split: "Equivalent volume",
      cost: "Planning note",
      layers: "Use case"
    },
    lastmod: "2026-10-03"
  },
  ...firstBatchPages,
  infoPage({
    slug: "methodology",
    title: "Epoxy Calculator Methodology",
    h1: "How Our Epoxy Calculations Work",
    description:
      "Learn the formulas, conversion constants, assumptions, and planning logic behind the epoxy calculator site.",
    eyebrow: "Methodology",
    intro:
      "This site is designed to be transparent. The goal is not to hide the math, but to make the math usable for real purchasing decisions.",
    sections: [
      {
        title: "What the formulas do",
        body:
          "The calculators start from geometry or coverage math, then add practical planning adjustments. Volume pages calculate raw capacity first. Coverage pages estimate material from area and thickness. Scenario pages then layer on waste, seepage, seal coat, and ordering margin."
      },
      {
        title: "Why the site reports both raw volume and recommended order quantity",
        body:
          "Raw volume is the geometric minimum. Recommended order quantity is a planning number that reflects real project loss. Showing both values is more useful than pretending the raw number is enough."
      },
      {
        title: "What users should still verify",
        body:
          "Always verify maximum pour depth, cure windows, mix ratio, and coverage claims against the product documentation you plan to buy. This site is a planning tool, not a replacement for the manufacturer data sheet."
      }
    ],
    includeInSitemap: true
  }),
  infoPage({
    slug: "about",
    title: "About Epoxy Project Planner",
    h1: "About This Epoxy Planning Tool",
    description:
      "Learn why this epoxy calculator site exists and how it is designed to help with river tables, coatings, and deep pours.",
    eyebrow: "About",
    intro:
      "This site was built to solve a narrow but expensive problem: people often know they need resin, but not how to convert real project geometry into a believable purchasing plan.",
    sections: [
      {
        title: "Why the site exists",
        body:
          "Most epoxy calculators stop at geometry. This site adds the parts that actually matter when money is on the line: waste, seepage, layer guidance, cost, and practical next steps."
      },
      {
        title: "What makes the site different",
        body:
          "The calculators are organized by project type. River tables, deep pours, coatings, and floor jobs each get their own logic because the underlying task is genuinely different."
      },
      {
        title: "Who the site is for",
        points: [
          "Woodworkers planning river tables, void fills, and casting jobs.",
          "DIY users estimating top coats, countertop pours, and garage floor kits.",
          "Shops that need fast material and budget estimates before ordering resin."
        ]
      },
      {
        title: "What the calculators do not replace",
        body:
          "Every estimate on this site is intended for planning. Before buying or pouring, users should still verify maximum pour depth, cure schedule, mix ratio, and coverage claims against the manufacturer documentation for the exact product they plan to use."
      },
      {
        title: "Monetization and editorial independence",
        body:
          "The site is designed to remain useful even when no advertising or commercial placement is shown. Rankings, formulas, and recommendations are not sold placement. If monetization is introduced later, it should not change the calculator logic or hide the methodology behind promotional content."
      }
    ],
    indexable: false
  }),
  infoPage({
    slug: "authors",
    title: "Why You Can Trust These Calculators",
    h1: "Why You Can Trust These Calculators",
    description:
      "Learn who builds and maintains Epoxy Project Planner, why the formulas work, and how to report an issue if a result looks wrong.",
    eyebrow: "Trust & Accuracy",
    intro:
      "You are about to buy resin based on a number from the internet. Fair to ask: why should you trust it? This page explains who is behind the math, how the formulas are validated, and what to do if something looks off.",
    sections: [
      {
        title: "Who builds this site",
        body:
          "Epoxy Project Planner is built and maintained by a small team focused exclusively on resin quantity planning. We do not sell epoxy. We do not take commissions from resin brands. The only goal is to give you a number you can actually buy against without wasting money or running short mid-pour."
      },
      {
        title: "How the formulas are validated",
        points: [
          "Every calculator is built on published geometric formulas and unit conversion constants — not guesswork or marketing claims.",
          "Waste buffers, seepage estimates, and layer guidance come from documented project patterns, not arbitrary percentages.",
          "The methodology page shows every formula and assumption so you can verify the math yourself before you spend money.",
          "When a user reports a result that does not match real-world outcomes, we investigate and update the formula or assumptions."
        ]
      },
      {
        title: "What makes this different from a generic calculator",
        points: [
          "Most epoxy calculators give you raw volume and stop. That number is always too low for a real project.",
          "This site adds waste, seepage, seal-coat, mixing loss, and layer guidance — the things that actually determine how much resin you need to order.",
          "Each calculator is tuned for a specific project type. A river table and a garage floor do not share the same measurement logic, so they should not share the same calculator."
        ]
      },
      {
        title: "What we show and what we do not",
        points: [
          "We show raw volume and recommended order quantity side by side so you can see exactly where the extra material comes from.",
          "We do not hide assumptions. Waste percentage, seepage buffer, and seal-coat allowance are all visible and adjustable.",
          "We do not recommend specific resin brands. The calculators help you figure out how much to buy — the product choice is yours."
        ]
      },
      {
        title: "Found a problem? Tell us",
        body:
          "If a calculator gives you a result that does not match your real project, we want to know. Send the page URL, your measurements, and what you expected through the contact page. Accuracy fixes always take priority over new features.",
        contactEmail
      }
    ],
    includeInSitemap: true
  }),
  infoPage({
    slug: "contact",
    title: "Contact",
    h1: "Contact",
    description:
      "Contact the site with feedback about formulas, measurement methods, or site errors.",
    eyebrow: "Contact",
    intro:
      "If you spot a formula issue, a misleading recommendation, or a broken page, use this page to send feedback. Accuracy matters more than pretending the first version is perfect.",
    sections: [
      {
        title: "How to reach us",
        body:
          "Use the email link below for site feedback, formula corrections, partnership requests, or broken-page reports.",
        contactEmail
      },
      {
        title: "What feedback is most useful",
        points: [
          "The exact page URL you were using.",
          "The project type and measurements you entered.",
          "The result you expected and why the current output looks wrong.",
          "Any manufacturer limit or product sheet that conflicts with the page guidance."
        ]
      },
      {
        title: "What this inbox can and cannot do",
        body:
          "This contact path is intended for site feedback and accuracy issues. It is not a guarantee of project-specific engineering advice, product support for third-party resin brands, or emergency troubleshooting during a live pour."
      },
      {
        title: "Response scope",
        body:
          "The site may review messages for corrections, future feature ideas, and content gaps. Submission of feedback does not create a consulting relationship, but well-documented reports are valuable input for improving the calculators."
      }
    ],
    indexable: false
  }),
  infoPage({
    slug: "privacy",
    title: "Privacy Policy",
    h1: "Privacy Policy",
    description:
      "Read how Epoxy Project Planner handles contact messages, analytics, cookies, and advertising-related disclosures.",
    eyebrow: "Privacy",
    intro:
      "This privacy policy explains what information the site may receive, how it may be used, and what advertising and consent-related disclosures apply if third-party services are enabled.",
    sections: [
      {
        title: "Information the site may receive",
        points: [
          "Information you choose to send by email, such as your name, email address, and message contents.",
          "Basic technical and server data that may be logged by the hosting provider, such as IP address, browser type, referrer, and request time.",
          "Usage and performance information collected through analytics or similar tooling if those services are enabled."
        ]
      },
      {
        title: "How information may be used",
        points: [
          "To respond to feedback, correction requests, and support inquiries sent to the contact address.",
          "To maintain site security, diagnose errors, and improve calculator accuracy and page performance.",
          "To understand which calculators and guides are most useful so future updates focus on real user needs."
        ]
      },
      {
        title: "Cookies, local storage, analytics, and ads",
        body:
          "The site may use cookies or similar storage for essential functionality, analytics, and advertising if those services are activated. If Google services such as AdSense are enabled, Google and its partners may use cookies or local storage to serve and measure ads. Where required by law, the site will provide a consent mechanism before enabling non-essential storage or personalized advertising."
      },
      {
        title: "Third-party services",
        body:
          "Hosting, analytics, search, advertising, and embedded third-party services may process limited technical data in order to deliver the site. Each third-party provider operates under its own terms and privacy practices, so users should review those providers directly when relevant."
      },
      {
        title: "Google advertising disclosures",
        body:
          "If Google AdSense or related Google advertising services are enabled on the site, Google and participating advertising technology providers may access device information, cookies, local storage, IP address, and related usage data in accordance with the consent choices made by the user and the policies that apply in the user's region."
      },
      {
        title: "Data retention and your choices",
        body:
          "Contact emails and operational logs may be retained for as long as reasonably necessary to answer messages, troubleshoot issues, comply with legal obligations, and maintain the service. You can request privacy-related help or ask a question about your data by writing to the contact address below.",
        contactEmail
      },
      {
        title: "Policy updates",
        body:
          "This policy may be updated as the site adds new features, analytics, or monetization tools. Material changes should be reflected on this page before or when the change goes live."
      }
    ],
    indexable: false
  }),
  infoPage({
    slug: "terms",
    title: "Terms of Use",
    h1: "Terms of Use",
    description:
      "Read the terms for using Epoxy Project Planner, including planning-only use, user responsibilities, and liability limitations.",
    eyebrow: "Terms",
    intro:
      "By using this site, you agree to use the calculators and guides as planning tools only and to independently verify product-specific requirements before buying or pouring epoxy.",
    sections: [
      {
        title: "Planning-only information",
        body:
          "The calculators, guides, charts, and examples on this site are provided for general informational and planning purposes. They are not a substitute for manufacturer data sheets, jobsite testing, engineering review, or professional advice tailored to a specific project."
      },
      {
        title: "Your responsibilities",
        points: [
          "Confirm dimensions, waste assumptions, and measurement inputs before relying on any estimate.",
          "Verify maximum pour depth, cure schedule, mix ratio, working time, and coverage claims against the product you intend to use.",
          "Use safe handling practices and follow all manufacturer instructions, warnings, and local regulations."
        ]
      },
      {
        title: "No warranty",
        body:
          "The site is provided on an as-is basis without warranties of accuracy, completeness, merchantability, fitness for a particular purpose, or uninterrupted availability. Epoxy projects are highly sensitive to material choice, temperature, substrate condition, and execution quality, so final outcomes remain the user's responsibility."
      },
      {
        title: "Limitation of liability",
        body:
          "To the fullest extent permitted by law, the site and its operators are not liable for losses, damages, project failures, purchasing decisions, or other consequences arising from the use of the site or reliance on its estimates."
      },
      {
        title: "Acceptable use and intellectual property",
        body:
          "You may use the site for personal or business planning. You may not misuse the service, interfere with the site, attempt unauthorized access, or copy site content in a way that violates applicable law or the rights of the site operator."
      },
      {
        title: "Third-party links and services",
        body:
          "The site may reference or link to third-party products, documentation, or services. Those third parties control their own content, pricing, policies, and availability, and the site is not responsible for them."
      },
      {
        title: "Contact",
        body:
          "Questions about these terms can be sent to the contact address below.",
        contactEmail
      }
    ],
    indexable: false
  }),
  infoPage({
    slug: "faq",
    title: "Epoxy Calculator FAQ",
    h1: "Epoxy Calculator FAQ",
    description:
      "Answers to the most common site-wide questions about epoxy calculations, waste, conversions, and product planning.",
    eyebrow: "FAQ",
    intro:
      "Answers to the questions people ask most before choosing a calculator: accuracy, waste, units, and product limits.",
    sections: [
      {
        title: "Most common questions",
        faqs: generalFaq
      },
      {
        title: "Where to go next",
        cards: [
          { title: "General Calculator", text: "Broad project estimate.", slug: "epoxy-calculator" },
          { title: "River Table Planner", text: "Segment mode and live-edge planning.", slug: "river-table-epoxy-calculator" },
          { title: "Coverage Calculator", text: "Surface coats and flood pours.", slug: "epoxy-coverage-calculator" },
          { title: "Unit Converter", text: "Gallons, liters, quarts, and ounces.", slug: "epoxy-unit-converter" }
        ]
      }
    ],
    indexable: false
  }),
  ...multilingualWave1Pages
];

// 按 GSC 数据合并的重复意图页：旧地址 301 到保留页，站内所有链接在构建时改写到新地址。
const englishRedirects = {
  "resin-calculator": "epoxy-calculator",
  "epoxy-volume-calculator": "epoxy-calculator",
  "epoxy-amount-calculator": "epoxy-calculator",
  "epoxy-square-foot-calculator": "epoxy-coverage-calculator",
  "epoxy-garage-floor-cost-calculator": "garage-floor-epoxy-calculator",
  "epoxy-garage-floor-cost": "garage-floor-epoxy-calculator"
};

export const redirects = { ...englishRedirects, ...createMultilingualRedirects() };

function resolveSlug(slug) {
  return Object.hasOwn(redirects, slug) ? redirects[slug] : slug;
}

function uniqueBySlug(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!item.slug) return true;
    if (seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });
}

function rewriteLinks(page) {
  return {
    ...page,
    related: [...new Set((page.related || []).map(resolveSlug))].filter((slug) => slug !== page.slug),
    heroActions: page.heroActions && uniqueBySlug(page.heroActions.map((action) => ({ ...action, slug: resolveSlug(action.slug) }))),
    sections:
      page.sections &&
      page.sections.map((section) =>
        section.cards
          ? { ...section, cards: uniqueBySlug(section.cards.map((card) => (card.slug ? { ...card, slug: resolveSlug(card.slug) } : card))) }
          : section
      )
  };
}

const livePages = basePages.filter((page) => !Object.hasOwn(redirects, page.slug)).map(rewriteLinks);
const liveSlugs = new Set(livePages.map((page) => page.slug));
for (const [from, to] of Object.entries(redirects)) {
  if (!liveSlugs.has(to)) throw new Error(`Redirect target missing: /${from}/ -> /${to}/`);
}

export const pages = applyMultilingualAlternates(livePages);
