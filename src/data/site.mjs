import { createFirstBatchPages } from "./seo-batch-2026-05.mjs";
import {
  applyMultilingualAlternates,
  createLanguageMarketCards,
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
    { label: "Resin", slug: "resin-calculator" },
    { label: "River Table", slug: "river-table-epoxy-calculator" },
    { label: "Deep Pour", slug: "deep-pour-epoxy-calculator" },
    { label: "Coverage", slug: "epoxy-coverage-calculator" },
    {
      label: "More",
      children: [
        { label: "Garage Floor", slug: "garage-floor-epoxy-calculator" },
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

const firstBatchPages = createFirstBatchPages({ calculatorPage, guidePage });
const multilingualWave1Pages = createMultilingualWave1Pages({ calculatorPage, infoPage });
const languageMarketCards = createLanguageMarketCards();

const basePages = [
  infoPage({
    slug: "",
    title: "Epoxy Calculator for River Tables, Deep Pours & Coatings",
    h1: "Epoxy Calculator and Resin Project Planner",
    description:
      "Estimate epoxy resin volume, coverage, waste, cost, and project-specific needs for river tables, deep pours, coatings, void fills, and floor jobs.",
    eyebrow: "Precision Resin Planning",
    intro:
      "Calculate exactly how much epoxy resin you need — with waste, seepage, layer count, Part A / Part B split, cost, and product-fit guidance built in.",
    heroActions: [
      { label: "River Table", slug: "river-table-epoxy-calculator", icon: "🪵" },
      { label: "Deep Pour", slug: "deep-pour-epoxy-calculator", icon: "🧊" },
      { label: "Coverage & Coatings", slug: "epoxy-coverage-calculator", icon: "🖌️" },
      { label: "General Calculator", slug: "epoxy-calculator", icon: "📐" },
      { label: "Resin Calculator", slug: "resin-calculator", icon: "🧪" },
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
            title: "Epoxy Calculator",
            text: "Best first stop for regular shapes, quick planning, and broad resin estimates.",
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
            title: "Garage Floor Calculator",
            text: "Plan floor coatings from square footage, coats, kit coverage, and waste.",
            slug: "garage-floor-epoxy-calculator",
            primary: true
          },
          {
            title: "Resin Calculator",
            text: "Use the broader resin quantity page before choosing a specific scenario.",
            slug: "resin-calculator",
            primary: true
          },
          {
            title: "Square Foot Calculator",
            text: "Estimate coating material from area, thickness, and edge runoff.",
            slug: "epoxy-square-foot-calculator",
            primary: true
          },
          {
            title: "Garage Floor Cost",
            text: "Turn square footage and kit coverage into a material budget.",
            slug: "epoxy-garage-floor-cost-calculator",
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
        title: "Localized metric calculators for non-English searches",
        body:
          "The first multilingual rollout adds native-language calculator paths for German, French, Brazilian Portuguese, Spanish, and Italian. These pages are not direct translations: they start from local search wording, metric units, and local price expectations.",
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
          "Search traffic around epoxy is not only looking for a formula. People also want to know how much extra to buy, how to measure irregular rivers, and when they need deep-pour resin instead of a top coat.",
        cards: [
          { title: "How Much Epoxy Do I Need?", text: "Short answer first, then the right calculator path.", slug: "how-much-epoxy-do-i-need" },
          { title: "How Much Epoxy for a River Table?", text: "Estimate quantity, waste, and kit count for a live-edge river build.", slug: "how-much-epoxy-do-i-need-for-a-river-table" },
          { title: "How to Measure a River Table", text: "A practical segment method for irregular channels.", slug: "how-to-measure-a-river-table-for-epoxy" },
          { title: "Deep Pour vs Table Top Epoxy", text: "Know when the resin class is the real bottleneck.", slug: "deep-pour-vs-table-top-epoxy" },
          { title: "Waste Factor Guide", text: "Decide how much extra resin to buy and why.", slug: "epoxy-waste-factor-guide" },
          { title: "Coverage Chart", text: "Quick square-foot reference before using the detailed calculator.", slug: "epoxy-coverage-chart" },
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
    lastmod: "2026-05-05"
  }),
  calculatorPage({
    slug: "epoxy-calculator",
    title: "Epoxy Calculator: Resin Volume, Waste, Cost & Coverage",
    h1: "Epoxy Calculator",
    description:
      "Use this epoxy calculator to estimate resin volume, waste, part A/B split, and project cost for common epoxy jobs and regular shapes.",
    eyebrow: "Head-Term Hub",
    intro:
      "This epoxy resin calculator handles how much epoxy you need for common shapes and projects. Enter dimensions, and it converts raw geometry into an order-ready recommendation with waste, Part A / Part B split, and cost guidance.",
    primaryKeyword: "epoxy calculator",
    supportingKeywords: ["epoxy resin calculator", "how much epoxy do i need", "epoxy calculator metric", "epoxy calculator circle"],
    calculatorType: "general",
    bullets: [
      "Best for regular shapes, simple slabs, basic fills, and fast sanity checks.",
      "Shows raw volume, recommended order quantity, part A / Part B split, and budget.",
      "Helps you decide when to stay here and when to move to a more specific calculator.",
      "Covers rectangular and round inputs, including metric entries for people searching for a circle or resin volume calculator."
    ],
    howTo: [
      "Pick the shape that most closely matches the cavity or pour area you are planning.",
      "Enter finished dimensions, not rough board size or mold outside dimensions.",
      "Use round mode for circular pours, round table estimates, and epoxy calculator circle searches.",
      "Switch the unit toggle before entering values if your notes are in metric.",
      "Increase the waste buffer if the project has porous edges, cup loss, runoff, or uncertain measurements."
    ],
    mistakes: [
      "Using the general page for river tables, garage floors, or other jobs with their own constraints.",
      "Treating raw geometric volume as the amount you should order.",
      "Choosing a resin before checking whether the job needs casting, deep-pour, or coating behavior."
    ],
    faq: [
      {
        q: "When should I switch to a more specific calculator?",
        a: "Use a scenario-specific page when the project introduces unique measurement or product constraints, such as river tables, garage floors, or countertop coatings."
      },
      {
        q: "Is this the right page for a first pass estimate?",
        a: "Yes. This page is intended to be the fastest broad estimate for standard shapes. Once you know the project is irregular or product-limited, switch to the matching scenario page."
      },
      {
        q: "Why does this page show more resin than the raw math?",
        a: "Because a buying decision is not the same as a pure geometry problem. Waste, mixing loss, and small measuring errors are normal, so the recommendation is intentionally more conservative than the raw volume."
      }
    ],
    related: [
      "resin-calculator",
      "epoxy-amount-calculator",
      "epoxy-calculator-metric",
      "river-table-epoxy-calculator",
      "deep-pour-epoxy-calculator",
      "epoxy-coverage-calculator",
      "epoxy-volume-calculator",
      "epoxy-circle-calculator",
      "epoxy-rectangle-calculator",
      "round-epoxy-table-calculator",
      "void-fill-epoxy-calculator",
      "garage-floor-epoxy-calculator",
      "how-much-epoxy-do-i-need",
      "epoxy-cost-calculator",
      "epoxy-unit-converter",
      "epoxy-mixing-ratio-guide",
      "epoxy-kit-size-guide"
    ],
    note: "Use this page for regular shapes and fast planning. If the job is a river table, deep cast, or floor coating, switch to the scenario page before buying.",
    compareLabel: "Raw math vs order-ready planning",
    lastmod: "2026-05-05"
  }),
  calculatorPage({
    slug: "epoxy-coverage-calculator",
    title: "Epoxy Coverage Calculator: Surface Area, Thickness & Resin",
    h1: "Epoxy Coverage Calculator",
    description:
      "Estimate epoxy coverage by surface area and target coat thickness, with runoff, edge soak-in, waste, and resin-class guidance for finish coats and surface pours.",
    eyebrow: "Coverage Intent",
    intro:
      "Use this page when the real question is coverage, not cavity volume. It is built for top coats, flood coats, tabletops, countertops, and other thin resin layers where surface area, coat thickness, runoff, and edge behavior matter more than block volume math.",
    primaryKeyword: "epoxy coverage calculator",
    supportingKeywords: ["epoxy resin coverage calculator", "epoxy coverage estimator", "how much epoxy do i need per square foot", "epoxy resin coverage"],
    calculatorType: "coverage",
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
      "epoxy-square-foot-calculator",
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
    lastmod: "2026-05-05"
  }),
  calculatorPage({
    slug: "epoxy-volume-calculator",
    title: "Epoxy Volume Calculator for Tables, Voids & Slabs",
    h1: "Epoxy Volume Calculator",
    description:
      "Calculate epoxy volume for rectangular, round, and simple slab projects with unit conversion, waste guidance, and practical examples.",
    eyebrow: "Volume Intent",
    intro:
      "This page focuses on pure volume math for regular shapes. It is the best choice when you know the cavity shape and simply want the conversion and waste planning handled cleanly.",
    primaryKeyword: "epoxy volume calculator",
    supportingKeywords: ["epoxy resin volume calculator", "calculate epoxy volume"],
    calculatorType: "volume",
    bullets: [
      "Handles rectangular and round volume calculations.",
      "Converts instantly into gallons, quarts, ounces, and liters.",
      "Best for regular shapes that do not need advanced scenario logic."
    ],
    howTo: [
      "Choose a shape first so you only see the inputs that matter.",
      "Use the deepest planned fill point when the cavity is uniform.",
      "If the shape is irregular, move to a scenario page instead."
    ],
    mistakes: [
      "Using regular-shape formulas on irregular live-edge voids.",
      "Not converting depth correctly when switching units.",
      "Treating raw volume as the purchase quantity."
    ],
    faq: [
      {
        q: "What is the difference between the volume and coverage calculators?",
        a: "The volume calculator is for cavities and poured depth. The coverage calculator is for surface area and thin coats."
      }
    ],
    related: [
      "epoxy-rectangle-calculator",
      "resin-mold-calculator",
      "sphere-resin-calculator",
      "cylinder-resin-calculator",
      "cube-resin-calculator",
      "round-epoxy-table-calculator",
      "void-fill-epoxy-calculator",
      "epoxy-unit-converter",
      "epoxy-calculator"
    ],
    compareLabel: "Raw volume vs recommended amount"
  }),
  calculatorPage({
    slug: "river-table-epoxy-calculator",
    title: "River Table Epoxy Calculator: Resin Volume, Waste & Cost",
    h1: "River Table Epoxy Calculator",
    description:
      "Estimate epoxy for river tables with quick mode, segment mode, seepage, seal-coat buffer, cost planning, and deep-pour recommendations.",
    eyebrow: "High-Value Scenario",
    intro:
      "Whether you call it an epoxy calculator for river table projects, a live edge epoxy calculator, or simply a river table resin calculator — this page has two modes: a fast average-width estimate and a segment mode for irregular channels, with seepage, seal-coat, and cost planning built in.",
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
    compareLabel: "Quick mode vs segment mode"
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
    title: "Garage Floor Epoxy Calculator: Coverage & Kits",
    h1: "Garage Floor Epoxy Calculator",
    description:
      "Estimate epoxy coverage, kit size, waste, and floor area for garage floor coatings with practical project planning guidance.",
    eyebrow: "Floor Coating Calculator",
    intro:
      "Garage floors behave differently from woodworking pours. This page focuses on floor area, coats, and kit sizing rather than cavity volume or live-edge seepage.",
    primaryKeyword: "garage floor epoxy calculator",
    supportingKeywords: ["epoxy floor calculator", "floor epoxy calculator", "epoxy flooring calculator", "garage epoxy coverage calculator"],
    calculatorType: "garage-floor",
    bullets: [
      "Floor-area-first coverage planning.",
      "Useful for kit sizing and material budgeting.",
      "Separate from wood and river-table workflows by design.",
      "Built for people comparing one-car, two-car, and workshop floor kit coverage."
    ],
    howTo: [
      "Measure the usable coated area after excluding cabinets, steps, or uncoated zones.",
      "Set the planned number of coats rather than guessing with total gallons.",
      "Use the product coverage rate from the floor coating kit, then compare the result against the kit size you can actually buy.",
      "Confirm your coverage rate against the specific floor product you will use."
    ],
    mistakes: [
      "Using a woodworking calculator for a garage floor coating.",
      "Ignoring the number of coats in the final estimate.",
      "Treating published coverage rates as exact instead of as planning ranges."
    ],
    faq: [
      {
        q: "Why is the garage floor page separate from the coverage page?",
        a: "The coverage page handles general coatings, but garage floors introduce a different product context, area assumptions, and commercial buying logic."
      }
    ],
    related: [
      "epoxy-floor-coverage-calculator",
      "epoxy-garage-floor-cost-calculator",
      "two-car-garage-epoxy-calculator",
      "epoxy-garage-floor-cost",
      "epoxy-cost-per-square-foot",
      "epoxy-coverage-calculator",
      "epoxy-cost-calculator",
      "epoxy-coverage-chart",
      "how-much-epoxy-do-i-need",
      "epoxy-waste-factor-guide"
    ],
    compareLabel: "Baseline coat vs kit buffer",
    lastmod: "2026-05-05"
  }),
  calculatorPage({
    slug: "void-fill-epoxy-calculator",
    title: "Void Fill Epoxy Calculator for Cracks & Knots",
    h1: "Void Fill Epoxy Calculator",
    description:
      "Calculate epoxy for cracks, knots, and void fills with small-volume estimates, waste buffer, and unit conversion.",
    eyebrow: "Small Fill Planning",
    intro:
      "This page is tuned for small irregular fills where ounces and milliliters matter. It is a better choice than a broad volume page when you are filling cracks, knots, and localized voids.",
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
    lastmod: "2026-05-05"
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
      "Covers the circle-calculator intent that does not fit a rectangular epoxy form."
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
    lastmod: "2026-05-05"
  }),
  guidePage({
    slug: "how-much-epoxy-do-i-need",
    title: "How Much Epoxy Do I Need? Formula, Chart & Calculator",
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
          "Use the volume calculator for regular cavities and slabs.",
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
        points: [
          "Use the general calculator for rectangles, circles, and quick metric or imperial checks.",
          "Use the cost calculator when the quantity is known and the real question is how many kits you can afford.",
          "Use the coverage chart when the search starts as a square-foot question rather than a cavity-volume question."
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
    lastmod: "2026-05-05"
  }),
  guidePage({
    slug: "how-much-epoxy-do-i-need-for-a-river-table",
    title: "How Much Epoxy for a River Table? Calculator & Guide",
    h1: "How Much Epoxy Do You Need for a River Table?",
    description:
      "Estimate how much epoxy a river table needs with measurement tips, waste guidance, segment-based planning, and a dedicated calculator.",
    eyebrow: "Guide",
    intro:
      "River table estimates usually fail when the user relies on one average width and ignores seepage, seal coat, and the real buying decision. This guide fixes that thinking first, then pushes you to the dedicated planner.",
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
    lastmod: "2026-05-05"
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
      "This is one of the highest-value decision pages on the site. Users often know how much epoxy they need before they know which category of resin will actually survive the pour.",
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
    lastmod: "2026-05-05"
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
    title: "Epoxy Coverage Chart: Sq Ft, Thickness & Volume",
    h1: "Epoxy Coverage Chart",
    description:
      "Use this epoxy coverage chart to estimate resin by square footage, thickness, and volume, then move to a detailed calculator.",
    eyebrow: "Reference Guide",
    intro:
      "Coverage charts are useful when you need a fast planning reference. The chart gets you close quickly, and the coverage calculator gets you from quick estimate to purchase-ready number.",
    primaryKeyword: "epoxy coverage chart",
    supportingKeywords: ["epoxy coverage table", "epoxy coverage reference", "how much epoxy do i need per square foot", "how much does a gallon of epoxy cover"],
    answer:
      "A coverage chart is the fastest way to estimate resin for standard finish thicknesses across known surface areas. Use it as a starting point, then move to the detailed calculator for waste and edge planning.",
    takeaways: [
      "Charts are good for quick checks but not a replacement for project-specific planning.",
      "Coat thickness changes the number dramatically.",
      "The more edges and runoff you expect, the less a simple chart is enough.",
      "One gallon covers very different square footage at 1/16 inch, 1/8 inch, and 1/4 inch."
    ],
    sections: [
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
      "table-top-epoxy-calculator",
      "countertop-epoxy-calculator",
      "garage-floor-epoxy-calculator",
      "epoxy-cost-calculator"
    ],
    lastmod: "2026-05-05"
  }),
  guidePage({
    slug: "epoxy-mixing-ratio-guide",
    title: "Epoxy Mixing Ratio Guide: Part A / Part B Calculator",
    h1: "Epoxy Mixing Ratio Guide",
    description:
      "Understand epoxy mix ratios, part A/B calculations, and practical batch planning for river tables, void fills, and coating jobs.",
    eyebrow: "Mixing Guide",
    intro:
      "Users often know the total amount of resin they need but still get stuck on how to split it into batches or how to think about part A and part B. This guide resolves that gap.",
    primaryKeyword: "epoxy mixing ratio guide",
    supportingKeywords: ["part a part b epoxy calculator", "epoxy mix ratio chart"],
    answer:
      "Once you know the recommended mixed volume, split it according to the product mix ratio and batch size constraints. The safest workflow is to plan both the total project quantity and the per-batch mixing routine.",
    takeaways: [
      "Part A and part B planning matters most when batch size and pour timing matter.",
      "The same total quantity can be mixed in very different ways.",
      "Always follow the ratio on the product documentation.",
      "Batch size mistakes usually show up after the quantity estimate is already correct."
    ],
    sections: [
      {
        title: "What this guide does and does not assume",
        points: [
          "It helps you think about mixed total volume and batch planning.",
          "It does not replace the product-specific ratio on the resin data sheet.",
          "The calculator pages already show a simple part A / part B split for planning."
        ]
      },
      {
        title: "Where this guide matters most",
        points: [
          "Deep pours where exotherm risk makes batch planning part of the workflow.",
          "Void fills and small pours where ounces and milliliters need to be split accurately.",
          "Budget planning where you want the quantity, batch size, and unit price to agree."
        ]
      }
    ],
    faq: [],
    related: [
      "epoxy-calculator",
      "deep-pour-epoxy-calculator",
      "epoxy-cost-calculator",
      "epoxy-unit-converter",
      "void-fill-epoxy-calculator"
    ],
    lastmod: "2026-05-05"
  }),
  calculatorPage({
    slug: "epoxy-cost-calculator",
    title: "Epoxy Cost Calculator: Resin Project Budget Planner",
    h1: "Epoxy Cost Calculator",
    description:
      "Estimate epoxy project cost from planned resin quantity, waste, and price input for river tables, deep pours, coatings, and other resin projects.",
    eyebrow: "Budget Planning",
    intro:
      "This page exists because the real question is often not only how much resin you need, but what that plan will cost once waste, buffer, and real order quantity are included. Use it to pressure-test the budget before you choose kits or quote a project.",
    primaryKeyword: "epoxy cost calculator",
    supportingKeywords: ["how much does epoxy cost for a river table", "epoxy project cost calculator", "epoxy price calculator", "resin project budget calculator"],
    calculatorType: "cost",
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
      "epoxy-garage-floor-cost-calculator",
      "epoxy-garage-floor-cost",
      "river-table-epoxy-cost",
      "epoxy-countertop-cost",
      "epoxy-bar-top-cost",
      "epoxy-cost-per-square-foot",
      "river-table-epoxy-calculator",
      "deep-pour-epoxy-calculator",
      "epoxy-unit-converter",
      "epoxy-waste-factor-guide",
      "void-fill-epoxy-calculator",
      "garage-floor-epoxy-calculator",
      "epoxy-mixing-ratio-guide"
    ],
    note: "This page is for budget pressure-testing, not geometry discovery. Use a project calculator first if you are still unsure about the resin quantity itself.",
    compareLabel: "Planned quantity vs conservative budget",
    resultEyebrow: "Budget range",
    statLabels: {
      raw: "Base quantity",
      split: "Budget basis",
      cost: "Projected cost",
      layers: "Planning note"
    },
    lastmod: "2026-05-05"
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
        q: "Why keep one converter page instead of separate pages for every unit pair?",
        a: "Because the user intent is the same: convert a known epoxy volume from one unit to another. One stronger page is better than dozens of thin near-duplicates."
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
    note: "One strong converter page covers many unit-pair searches. Do not split every conversion pair into thin near-duplicate pages.",
    compareLabel: "Source value vs planning unit",
    resultEyebrow: "Converted value",
    statLabels: {
      raw: "Source value",
      split: "Equivalent volume",
      cost: "Planning note",
      layers: "Use case"
    },
    lastmod: "2026-05-05"
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
    ]
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
          "The core pages are organized by project intent rather than by arbitrary keyword variants. River tables, deep pours, coatings, and floor jobs each get their own logic because the underlying task is genuinely different."
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
    ]
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
      "This page collects the broadest questions that appear across the site, especially the ones users ask before they choose a scenario-specific tool.",
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

export const pages = applyMultilingualAlternates(basePages);
