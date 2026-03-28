const siteOrigin = process.env.SITE_ORIGIN || "https://epoxyplanner.example";
const contactEmail = process.env.CONTACT_EMAIL || "hello@epoxyplanner.example";

export const site = {
  name: "Epoxy Project Planner",
  shortName: "Epoxy Planner",
  origin: siteOrigin,
  description:
    "A high-trust epoxy calculator and resin planning site for river tables, deep pours, coatings, void fills, conversions, and project cost planning.",
  nav: [
    { label: "Epoxy Calculator", slug: "epoxy-calculator" },
    { label: "River Table", slug: "river-table-epoxy-calculator" },
    { label: "Deep Pour", slug: "deep-pour-epoxy-calculator" },
    { label: "Coverage", slug: "epoxy-coverage-calculator" },
    { label: "Cost", slug: "epoxy-cost-calculator" },
    { label: "Converter", slug: "epoxy-unit-converter" },
    { label: "Guides", slug: "how-much-epoxy-do-i-need" }
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
  statLabels
}) {
  return {
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
    faq: [...faq, ...generalFaq],
    related,
    checklist: scenarioChecklist,
    note,
    compareLabel,
    resultEyebrow,
    statLabels
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
  related
}) {
  return {
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
    faq: [...faq, ...generalFaq],
    related
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
  sections
}) {
  return {
    slug,
    category: "info",
    pageType: "info",
    title,
    h1,
    description,
    eyebrow,
    intro,
    heroActions,
    sections
  };
}

export const pages = [
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
      { label: "General Calculator", slug: "epoxy-calculator", icon: "📐" }
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
          }
        ]
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
          { title: "How to Measure a River Table", text: "A practical segment method for irregular channels.", slug: "how-to-measure-a-river-table-for-epoxy" },
          { title: "Deep Pour vs Table Top Epoxy", text: "Know when the resin class is the real bottleneck.", slug: "deep-pour-vs-table-top-epoxy" },
          { title: "Waste Factor Guide", text: "Decide how much extra resin to buy and why.", slug: "epoxy-waste-factor-guide" }
        ]
      },
      {
        title: "Why trust the number",
        body:
          "This site is designed to be transparent about assumptions. It reports both raw volume and recommendation, keeps the methodology visible, and gives you scenario-specific tools instead of forcing every job through one generic formula.",
        cards: [
          { title: "Methodology", text: "See formulas, conversion constants, and planning assumptions.", slug: "methodology" },
          { title: "Authors", text: "Understand the editorial standard behind the pages.", slug: "authors" },
          { title: "FAQ", text: "Review common questions before you rely on the estimate.", slug: "faq" }
        ]
      }
    ]
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
    supportingKeywords: ["epoxy resin calculator", "how much epoxy do i need"],
    calculatorType: "general",
    bullets: [
      "Best for regular shapes, simple slabs, basic fills, and fast sanity checks.",
      "Shows raw volume, recommended order quantity, part A / Part B split, and budget.",
      "Helps you decide when to stay here and when to move to a more specific calculator."
    ],
    howTo: [
      "Pick the shape that most closely matches the cavity or pour area you are planning.",
      "Enter finished dimensions, not rough board size or mold outside dimensions.",
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
      "river-table-epoxy-calculator",
      "deep-pour-epoxy-calculator",
      "epoxy-coverage-calculator",
      "epoxy-volume-calculator",
      "how-much-epoxy-do-i-need",
      "epoxy-cost-calculator",
      "epoxy-unit-converter"
    ],
    note: "Use this page for regular shapes and fast planning. If the job is a river table, deep cast, or floor coating, switch to the scenario page before buying.",
    compareLabel: "Raw math vs order-ready planning"
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
    supportingKeywords: ["epoxy resin coverage calculator", "epoxy coverage estimator"],
    calculatorType: "coverage",
    bullets: [
      "Best for tabletops, countertops, bar tops, and other surface-finish jobs.",
      "Turns area and thickness into an order-ready resin estimate with realistic buffer.",
      "Makes edge soak-in, runoff, and waste visible instead of hiding them inside one vague number."
    ],
    howTo: [
      "Measure every face that will actually receive epoxy, including exposed edges if you plan to coat them.",
      "Use the intended finished coat thickness, not the height of the whole project or substrate.",
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
      "table-top-epoxy-calculator",
      "bar-top-epoxy-calculator",
      "countertop-epoxy-calculator",
      "epoxy-cost-calculator",
      "epoxy-coverage-chart",
      "epoxy-calculator"
    ],
    note: "Use this page for finish coats and surface pours. If the resin is filling a cavity or thick section, move to the volume, river-table, or deep-pour page instead.",
    compareLabel: "Coverage baseline vs buffered order",
    resultEyebrow: "Coverage recommendation"
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
    supportingKeywords: ["epoxy floor calculator", "garage epoxy coverage calculator"],
    calculatorType: "garage-floor",
    bullets: [
      "Floor-area-first coverage planning.",
      "Useful for kit sizing and material budgeting.",
      "Separate from wood and river-table workflows by design."
    ],
    howTo: [
      "Measure the usable coated area after excluding cabinets, steps, or uncoated zones.",
      "Set the planned number of coats rather than guessing with total gallons.",
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
      "epoxy-coverage-calculator",
      "epoxy-cost-calculator",
      "how-much-epoxy-do-i-need"
    ],
    compareLabel: "Baseline coat vs kit buffer"
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
    supportingKeywords: ["epoxy void filling calculator", "crack fill epoxy calculator"],
    calculatorType: "void-fill",
    bullets: [
      "Small-volume planning for cracks, knots, and localized voids.",
      "Strong emphasis on ounces, liters, and waste buffer.",
      "Useful when the job is too small for gallon-oriented planning."
    ],
    howTo: [
      "Measure the longest, widest, and deepest likely points of the fill.",
      "Round up for messy edges or irregular bark pockets.",
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
      "epoxy-waste-factor-guide"
    ],
    compareLabel: "Tight fill vs sand-back buffer"
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
    supportingKeywords: ["round table epoxy calculator", "round resin table calculator"],
    calculatorType: "round",
    bullets: [
      "Diameter-first planning for circular projects.",
      "Better than converting round shapes into rough rectangles.",
      "Outputs purchase-ready units with waste guidance."
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
      "epoxy-unit-converter"
    ],
    compareLabel: "Round volume vs buffered order"
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
      }
    ],
    faq: [],
    related: [
      "epoxy-calculator",
      "epoxy-coverage-calculator",
      "epoxy-volume-calculator",
      "epoxy-unit-converter"
    ]
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
    ]
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
      "epoxy-waste-factor-guide"
    ]
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
    ]
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
    ]
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
    supportingKeywords: ["epoxy coverage table", "epoxy coverage reference"],
    answer:
      "A coverage chart is the fastest way to estimate resin for standard finish thicknesses across known surface areas. Use it as a starting point, then move to the detailed calculator for waste and edge planning.",
    takeaways: [
      "Charts are good for quick checks but not a replacement for project-specific planning.",
      "Coat thickness changes the number dramatically.",
      "The more edges and runoff you expect, the less a simple chart is enough."
    ],
    sections: [
      {
        title: "How to use a coverage chart well",
        points: [
          "Match your target finish thickness to the nearest row first.",
          "Treat chart values as raw material guidance, not final order quantity.",
          "Move to the detailed coverage page if the layout is complex."
        ]
      }
    ],
    faq: [],
    related: [
      "epoxy-coverage-calculator",
      "table-top-epoxy-calculator",
      "countertop-epoxy-calculator",
      "garage-floor-epoxy-calculator"
    ]
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
      "Always follow the ratio on the product documentation."
    ],
    sections: [
      {
        title: "What this guide does and does not assume",
        points: [
          "It helps you think about mixed total volume and batch planning.",
          "It does not replace the product-specific ratio on the resin data sheet.",
          "The calculator pages already show a simple part A / part B split for planning."
        ]
      }
    ],
    faq: [],
    related: [
      "epoxy-calculator",
      "deep-pour-epoxy-calculator",
      "epoxy-cost-calculator"
    ]
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
    supportingKeywords: ["how much does epoxy cost for a river table", "epoxy project cost calculator"],
    calculatorType: "cost",
    bullets: [
      "Translates planned quantity into a budget range you can actually compare against suppliers.",
      "Useful for quoting, procurement planning, and sanity-checking expensive pours before you order.",
      "Works best after the geometry is already solved on the right scenario page."
    ],
    howTo: [
      "Start with the quantity you realistically expect to order, not the bare raw geometric minimum.",
      "Normalize your supplier price to a clear unit before comparing options.",
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
      "river-table-epoxy-calculator",
      "deep-pour-epoxy-calculator",
      "epoxy-unit-converter",
      "epoxy-waste-factor-guide"
    ],
    note: "This page is for budget pressure-testing, not geometry discovery. Use a project calculator first if you are still unsure about the resin quantity itself.",
    compareLabel: "Planned quantity vs conservative budget",
    resultEyebrow: "Budget range",
    statLabels: {
      raw: "Base quantity",
      split: "Budget basis",
      cost: "Projected cost",
      layers: "Planning note"
    }
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
    supportingKeywords: ["cubic inches to gallons epoxy", "liters to gallons resin calculator", "ounces to gallons epoxy"],
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
      "epoxy-volume-calculator",
      "epoxy-cost-calculator",
      "void-fill-epoxy-calculator",
      "round-epoxy-table-calculator"
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
    }
  },
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
      }
    ]
  }),
  infoPage({
    slug: "authors",
    title: "Authors and Editorial Standards",
    h1: "Authors and Editorial Standards",
    description:
      "See who maintains the epoxy planning site and how formulas, comparisons, and guide content are reviewed and updated.",
    eyebrow: "Editorial Standards",
    intro:
      "This site should not read like anonymous affiliate filler. The editorial standard is that every page must help the reader make a better project decision than a generic formula alone would allow.",
    sections: [
      {
        title: "Authoring approach",
        body:
          "Pages are written and maintained around real user tasks: estimating, measuring, comparing resin types, budgeting, and converting units. Each page is tied to a defined search intent and a practical use case."
      },
      {
        title: "Update policy",
        body:
          "The site reviews formula logic, conversion constants, and product-type guidance whenever the core methodology changes or when user feedback reveals a blind spot in a scenario page."
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
        body:
          "The most valuable reports include the page URL, the project type you were estimating, your expected result, and why the page felt wrong or incomplete."
      }
    ]
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
    ]
  })
];
