// 2026-11 按 GSC 缺口新增的两个地坪页面：彩砂用量计算器、地坪厚度指南。
// 表格里的数字都由共享费率或公式现算，改费率只改 src/assets/calculator.js 的 FLAKE_RATES。
import { FLAKE_RATES } from "../assets/calculator.js";

const pageDate = "2026-11-01";
const fmt = (value, digits = 1) => new Intl.NumberFormat("en-US", { maximumFractionDigits: digits }).format(value);
const per100 = ([low, , high]) => `${fmt(low * 100, 2)} – ${fmt(high * 100, 2)} lb`;
const flakeWaste = 1.1; // 与计算器默认 10% 余量一致
const flakeLb = (area, rate) => `${fmt(area * rate * flakeWaste, area * rate * flakeWaste < 10 ? 1 : 0)} lb`;
const boxes = (area, rate, size = 40) => Math.ceil((area * rate * flakeWaste) / size);

const flakeSources = [
  { label: "Miracote: MiraFlor Flake Full Broadcast installation guideline", url: "https://miracote.com/wp-content/uploads/IG_MiraFlor-Flake-Full-Brodcast_MID-System-MIR-Rev-04.10.20.pdf", note: "manufacturer, rev. 04.10.20" },
  { label: "Fidelio: Torginol vinyl flake quantity guide per 100 sq ft", url: "https://dfm.fidelio.ca/en/Catalog/Details/F2240-1/4", note: "distributor listing" },
  { label: "ArmorPoxy: light, medium, heavy and full flake coverage", url: "https://help.armorpoxy.com/knowledge/differences-flakes-light-medium-heavy", note: "kit seller" }
];

const garageAreas = [
  ["1-car (12 × 24 ft)", 288],
  ["2-car (20 × 20 ft)", 400],
  ["2-car (24 × 24 ft)", 576],
  ["3-car (24 × 36 ft)", 864]
];

const fullQuarter = FLAKE_RATES.full["1/4"][1];
const fullEighth = FLAKE_RATES.full["1/8"][1];
const medium = FLAKE_RATES.medium[1];

export const flakeCalculatorContent = {
  answerHeading: "How many pounds of flake do I need for an epoxy floor?",
  answer: `For a full broadcast of 1/4 in flake, plan about ${fmt(fullQuarter * 100, 1)} lb per 100 sq ft. A 400 sq ft two-car garage needs roughly ${flakeLb(400, fullQuarter)} with 10% waste, or ${boxes(400, fullQuarter)} boxes of 40 lb. Smaller 1/8 in flake takes about ${fmt(fullEighth * 100)} lb per 100 sq ft. A partial broadcast needs far less, around ${per100([FLAKE_RATES.light[0], 0, FLAKE_RATES.heavy[2]])} per 100 sq ft.`,
  answerTable: {
    headers: ["Garage", "Area", "Full, 1/4 in flake", "Full, 1/8 in flake", "Medium partial"],
    rows: garageAreas.map(([label, area]) => [
      label,
      `${area} sq ft`,
      `${flakeLb(area, fullQuarter)} (${boxes(area, fullQuarter)} × 40 lb)`,
      `${flakeLb(area, fullEighth)} (${boxes(area, fullEighth)} × 40 lb)`,
      flakeLb(area, medium)
    ]),
    note: "Planning rates with a 10% waste allowance. Your flake supplier's rate for the exact blend and size takes priority."
  },
  sections: [
    {
      title: "Flake broadcast rates by density and flake size",
      body: "A full broadcast covers the base coat completely, so the amount depends on chip size: smaller chips pack tighter and weigh more per square foot. A partial broadcast leaves the base color showing, and the amount depends on how much of it you want to see.",
      table: {
        headers: ["Broadcast", "Flake size", "Per 100 sq ft", "What the floor looks like"],
        rows: [
          ["Full", "1/4 in", per100(FLAKE_RATES.full["1/4"]), "No base color showing. The most common garage look."],
          ["Full", "1/8 in", per100(FLAKE_RATES.full["1/8"]), "Finer, denser pattern. Common in commercial spaces."],
          ["Full", "1/16 in", per100(FLAKE_RATES.full["1/16"]), "Very fine, almost granite-like texture."],
          ["Heavy partial", "Any", per100(FLAKE_RATES.heavy), "Dense flecks, base color still visible."],
          ["Medium partial", "Any", per100(FLAKE_RATES.medium), "Base color and flake share the surface."],
          ["Light partial", "Any", per100(FLAKE_RATES.light), "Scattered flecks on a solid-color floor."]
        ],
        note: "Full-broadcast rates follow Miracote's installation guideline (0.12 lb/sq ft for 1/4 in chips, 0.15 lb/sq ft for 1/8 in) and a Torginol quantity guide (12.5, 15 and 25 lb per 100 sq ft). Partial rates follow ArmorPoxy's 1, 2 and 3–4 lb per 250 sq ft."
      }
    },
    {
      title: "Full broadcast or partial broadcast?",
      points: [
        "Full broadcast covers the base coat completely and gives the most texture underfoot. It also uses ten to thirty times more flake than a partial broadcast and needs a clear topcoat over the chips.",
        "Partial broadcast keeps the base color as the main look. It uses so little flake that one box can cover several garages.",
        "In a full broadcast you throw flake until the wet base coat cannot hold any more. Miracote notes that very little of the scraped-up excess can be reused because the chips break, so buy for the full amount.",
        "You still need the base coat and topcoat. Work out their gallons separately in the floor coverage calculator."
      ]
    },
    {
      title: "Sources and method",
      body: "The calculator multiplies the floor area by a broadcast rate in pounds per square foot, adds your waste allowance, and rounds up to whole boxes. The planning rate is in the middle of the published range. The comparison also shows the high end, which is what a heavy hand uses. Rates come from one manufacturer's installation guide and two sellers' guides, so check them against your own supplier.",
      links: flakeSources,
      cards: [
        { title: "Base coat and topcoat gallons", text: "Turn square feet, coats, and kit coverage into gallons and kits for the coating under and over the flake.", slug: "epoxy-floor-coverage-calculator" },
        { title: "How thick is an epoxy floor?", text: "Mils and mm for primers, flake base coats, self-leveling and mortar systems.", slug: "epoxy-floor-thickness" }
      ]
    }
  ],
  howTo: [
    "Measure the floor you will coat and leave out areas under cabinets or steps.",
    "Pick full broadcast if no base color should show; otherwise pick the partial density you want.",
    "For full broadcast, choose the flake size. Smaller chips need more pounds for the same area.",
    "Enter the box or bag size your supplier sells. Miracote ships its chips in 55 lb boxes, and partial broadcast blends are often sold in smaller bags."
  ],
  mistakes: [
    "Buying partial-broadcast quantities for a floor you want fully covered.",
    "Planning to reuse scraped-up excess flake in a full broadcast.",
    "Letting the base coat start to set before the flake goes on, so the chips do not stick.",
    "Forgetting the clear topcoat that a full broadcast needs over the chips."
  ],
  checklist: [
    "Confirm the flake blend and size with your supplier before ordering several boxes.",
    "Keep all boxes from the same batch, or mix them together, so the color stays even.",
    "Plan to broadcast one section at a time while the base coat is still wet.",
    "Have a floor scraper and vacuum ready to remove loose chips before the topcoat."
  ],
  faq: [
    {
      q: "How much flake do I need for a 2-car garage?",
      a: `For a 400 sq ft garage, about ${flakeLb(400, fullQuarter)} of 1/4 in flake for a full broadcast, or ${flakeLb(576, fullQuarter)} for a 576 sq ft (24 × 24 ft) garage. A medium partial broadcast needs only about ${flakeLb(400, medium)} for 400 sq ft.`
    },
    {
      q: "Does flake size change how much I need?",
      a: `Yes, for a full broadcast. Smaller chips cover the base coat with less gap between them, so they weigh more per square foot: about ${fmt(fullQuarter * 100, 1)} lb per 100 sq ft for 1/4 in, ${fmt(fullEighth * 100)} lb for 1/8 in, and ${fmt(FLAKE_RATES.full["1/16"][1] * 100)} lb for 1/16 in.`
    },
    {
      q: "Can I reuse the extra flake after a full broadcast?",
      a: "Plan not to. After the base coat cures, the loose chips are scraped and vacuumed off. Many of them break in the process, and Miracote's installation guideline says recovery is very low."
    },
    {
      q: "Do flakes make the floor thicker?",
      a: "They add texture, but nobody measures them as film thickness. The film comes from the base coat and the clear topcoat that locks the chips in, so each of those needs its own coverage estimate."
    }
  ]
};

// ---- 地坪厚度指南 ----
const MM_PER_MIL = 0.0254;
const SQFT_PER_GAL_ONE_MIL = 231 / (0.001 * 144);
const milsRow = (value) => [`${fmt(value, 0)} mils`, `${fmt(value / 1000, 3)} in`, `${fmt(value * MM_PER_MIL, 2)} mm`];
const filmRow = (label, wet, solids) => {
  const dry = (wet * solids) / 100;
  return [label, `${fmt(wet)} mils`, `${fmt(solids, 1)}%`, `${fmt(dry)} mils (${fmt(dry * MM_PER_MIL, 2)} mm)`, `${fmt(SQFT_PER_GAL_ONE_MIL / wet, 0)} sq ft`];
};

const thicknessSources = [
  { label: "Sherwin-Williams: How thick should an epoxy floor coating be?", url: "https://industrial.sherwin-williams.com/na/us/en/resin-flooring/contractor-center/technical-articles/thick-epoxy-floor-coating.html", note: "manufacturer article" },
  { label: "Sika: Sikafloor MultiDur SL system data", url: "https://usa.sika.com/dam/dms/us01/l/sikafloor-multidursl.pdf", note: "self-leveling, 62–125 mils" },
  { label: "Sika: Sikafloor MultiDur SLB system data", url: "https://usa.sika.com/dam/dms/us01/b/sikafloor-multidurslb.pdf", note: "broadcast slurry, 125–156 mils" },
  { label: "Rust-Oleum: EpoxyShield water-based garage floor coating, technical data ESH-09", url: "https://images.homedepot-static.com/catalog/pdfImages/44/4464ca72-1614-4782-b352-46e2b1a15b82.pdf", note: "hosted by Home Depot" },
  { label: "Miracote: MiraFlor Flake Full Broadcast installation guideline", url: flakeSources[0].url, note: "flake base coat at 10 mils" }
];

export const floorThicknessContent = {
  answer:
    "Most epoxy floors are between 3 mils and 1/4 inch thick. A water-based garage kit dries to about 3 mils per coat, and a professional thin-film system of primer and topcoat totals about 11 to 25 mils (0.3 to 0.6 mm). Self-leveling epoxy goes down at 62 to 125 mils (1.6 to 3.2 mm), and forklift areas often get 1/4 inch (6 mm) of aggregate-filled mortar.",
  takeaways: [
    "1 mil is 0.001 inch, or 0.0254 mm. Floor coatings are specified in mils; thick systems in mm or fractions of an inch.",
    "Data sheets often give dry film thickness. Dry film = wet film × volume solids, so a 50% solids coating loses half its wet thickness as it cures.",
    "Choose the thickness for the heaviest load the floor will carry. Forklifts need far more than cars.",
    "Read your product's data sheet for its own per-coat limits; the ranges here are for comparing systems."
  ],
  sections: [
    {
      title: "Epoxy floor thickness by coating system",
      body: "Per-coat values are for one layer. System values include the primer, body coats, and topcoat.",
      table: {
        headers: ["System", "Thickness", "Metric", "Typical use"],
        rows: [
          ["Water-based DIY garage kit", "3–3.5 mils dry per coat (6–7 mils wet)", "0.08–0.09 mm", "Light residential garages; Rust-Oleum EpoxyShield data sheet"],
          ["Epoxy primer", "About 8 mils", "About 0.2 mm", "Bond coat under thicker systems; Sika MultiDur SL"],
          ["Flake broadcast base coat", "About 10 mils wet", "0.25 mm", "Holds the vinyl chips before the clear topcoat; Miracote"],
          ["Thin-film system (primer, optional mid coat, topcoat)", "11–25 mils total", "0.28–0.64 mm", "Garages and light to moderate traffic; Sherwin-Williams"],
          ["Self-leveling smooth epoxy", "62–125 mils", "1.6–3.2 mm", "Seamless smooth floors; Sika MultiDur SL"],
          ["Self-leveling broadcast slurry", "125–156 mils", "3.2–4.0 mm", "Textured, slip-resistant floors; Sika MultiDur SLB"],
          ["Aggregate-filled mortar", "1/4 in (250 mils)", "About 6.4 mm", "Forklifts and heavy machinery; Sherwin-Williams"],
          ["Heavy-duty systems", "3/8 in (375 mils) or more", "9.5 mm and up", "Heavy loads and impact, with grout coats and topcoats; Sherwin-Williams"]
        ],
        note: "Sherwin-Williams puts most professional systems between 20 and 250 mils. Use the data sheet of the exact product for per-coat limits and recoat windows."
      }
    },
    {
      title: "Wet film vs dry film thickness",
      body: "The thickness you spread is the wet film. What stays on the floor after the water or solvent leaves is the dry film, and data sheets usually specify that number. A 100% solids epoxy keeps its full wet thickness. Rust-Oleum's water-based EpoxyShield is 52.6–52.8% solids by volume, so 6–7 wet mils dry to 3–3.5 mils.",
      table: {
        headers: ["Coating", "Wet film", "Volume solids", "Dry film", "Coverage per gallon (wet)"],
        rows: [
          filmRow("100% solids epoxy, thin coat", 10, 100),
          filmRow("100% solids epoxy, heavy coat", 20, 100),
          filmRow("Water-based kit (EpoxyShield)", 6.5, 52.7),
          filmRow("50% solids coating", 20, 50)
        ],
        note: "One US gallon spread 1 mil thick covers about 1,604 sq ft. Coverage = 1,604 ÷ wet mils, before waste."
      }
    },
    {
      title: "What thickness does your floor need?",
      points: [
        "Residential garage with cars and foot traffic: a thin-film system or a flake system with a clear topcoat. A single water-based coat is the thinnest option and wears fastest.",
        "Busy commercial floors without heavy impact: thin systems can hold up when the topcoat is abrasion resistant, according to Sherwin-Williams.",
        "Forklifts, pallet jacks, and dropped loads: aggregate-filled systems spread load and impact better, which is why many plants standardize on about 1/4 inch.",
        "Pitted or cracked concrete: deep pits need more material locally, and a self-leveling layer or resurfacer may be needed first.",
        "Chemical exposure: choose the resin for chemical resistance first. Thickness alone does not make a floor resistant."
      ]
    },
    {
      title: "Mils to inches and millimeters",
      table: {
        headers: ["Mils", "Inches", "Millimeters"],
        rows: [3, 10, 20, 62, 125, 250, 375].map(milsRow)
      }
    },
    {
      title: "How to check the thickness on the job",
      points: [
        "Press a wet film gauge into the fresh coat right after spreading it and read the last wet tooth. This is the quickest check that you are not spreading too thin.",
        "Check your spread rate: divide the area coated by the gallons used and compare it with the coverage in the table above.",
        "Mark out the floor in sections sized for one mixed batch so each batch covers its share and no more."
      ]
    },
    {
      title: "Sources",
      body: "Thickness ranges come from manufacturer system data and technical articles. Contractor blogs give wider ranges that often contradict each other, so this page does not use them.",
      links: thicknessSources,
      cards: [
        { title: "Gallons for your floor", text: "Square feet, coats, and the coverage on your kit label turned into gallons and kits.", slug: "epoxy-floor-coverage-calculator" },
        { title: "Flake for a broadcast floor", text: "Pounds of vinyl flake and boxes for full or partial broadcast.", slug: "epoxy-flake-calculator" },
        { title: "Coverage at any thickness", text: "Square feet per gallon from 5 mils to 1 inch, including tabletop and deep pours.", slug: "epoxy-coverage-chart" }
      ]
    }
  ],
  faq: [
    {
      q: "How thick is an epoxy garage floor in mm?",
      a: "A water-based DIY coat is about 0.08 mm per coat after it dries. A professional thin-film system of primer and topcoat totals about 0.3 to 0.6 mm (11 to 25 mils). Self-leveling epoxy is 1.6 to 3.2 mm."
    },
    {
      q: "How thick should commercial epoxy flooring be?",
      a: "It depends on the load. Busy floors with foot traffic and carts can use a thin system with an abrasion-resistant topcoat. Areas with forklifts or heavy impact usually get an aggregate-filled system around 1/4 inch, and heavy-duty floors 3/8 inch or more."
    },
    {
      q: "Is a thicker epoxy floor always better?",
      a: "No. Thickness helps with impact, heavy loads, and uneven concrete, but a floor also needs the right prep and topcoat. Spreading one coat much thicker than its data sheet allows can trap bubbles or cause cure problems."
    },
    {
      q: "Does the flake in a flake floor count toward its thickness?",
      a: "The measured film comes from the base coat and the clear topcoat. The chips add texture and help hide the slab. The flake calculator works out the pounds of flake separately."
    }
  ]
};

export const floorThicknessCalculator = {
  calculatorType: "film-thickness",
  resultEyebrow: "Dry film per coat",
  compareLabel: "Wet film, dry film, and the wet film for 10 dry mils",
  note: "Enter the wet thickness you plan to spread and the volume solids from the data sheet. The result shows the cured film and the gallons for your floor.",
  statLabels: { raw: "Total dry build", split: "Coverage at this wet film", cost: "Material for the floor", layers: "Wet film per coat" },
  nextStepLinks: [
    { label: "Floor coverage calculator", slug: "epoxy-floor-coverage-calculator" },
    { label: "See Methodology", slug: "methodology" }
  ],
  ui: {
    calculatorHeading: "Convert wet film to dry film",
    currentRecommendation: "Dry film per coat",
    estimatedCost: "Material",
    standard: "Wet film",
    conservative: "Dry film",
    productFit: "Wet film for 10 dry mils",
    whyChangedEyebrow: "Working",
    whyChangedHeading: "How the thickness was worked out",
    compareEyebrow: "Wet vs dry",
    resultFallback: "Enter the wet film and volume solids to see the dry thickness.",
    breakdownFallback: "Enter the inputs to see the wet-to-dry conversion and coverage."
  }
};

export const floorSystemsLastmod = pageDate;
