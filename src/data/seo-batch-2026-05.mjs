const batchLastmod = "2026-05-05";

const calculatorSpecs = [
  {
    slug: "resin-calculator",
    title: "Resin Calculator: Epoxy Amount, Waste & Cost",
    h1: "Resin Calculator",
    description:
      "Estimate resin volume, waste buffer, part A/B split, and project cost for epoxy pours, molds, tabletops, and simple resin projects.",
    eyebrow: "Resin Amount Hub",
    intro:
      "Use this resin calculator when you know the basic shape but have not decided whether the project belongs on a river table, mold, coating, or cost page. It gives a fast material estimate and points you to the more specific planner when the job needs different assumptions.",
    primaryKeyword: "resin calculator",
    supportingKeywords: ["epoxy resin calculator", "resin amount calculator", "how much resin do i need"],
    calculatorType: "general",
    bullets: [
      "Best first stop for generic resin quantity searches that are not yet tied to one project type.",
      "Supports rectangular and round inputs, with imperial or metric entry.",
      "Shows raw volume, buffered order quantity, part A/B planning, and estimated cost.",
      "Keeps the user from forcing every resin job through a river table or floor calculator."
    ],
    howTo: [
      "Start with the simplest shape that matches the cavity or surface you want to fill.",
      "Use finished inside dimensions, not the outside size of the mold or wood blank.",
      "Keep the waste buffer modest for clean molds and raise it for porous wood, leaky seams, or many small cups.",
      "After the first estimate, move to the matching page for molds, river tables, floors, or coatings if the project has special constraints."
    ],
    mistakes: [
      "Searching for a resin calculator but using a floor coverage rate for a deep cast.",
      "Entering outside mold dimensions instead of the actual inside resin cavity.",
      "Ignoring kit size rounding and ending up short even when the raw calculation looks exact."
    ],
    faq: [
      {
        q: "Is this the same as an epoxy calculator?",
        a: "It overlaps with the main epoxy calculator, but this page is written for people searching the broader resin term before choosing a specific epoxy project page."
      },
      {
        q: "Should art resin and casting resin use the same estimate?",
        a: "The volume math can start the same, but product choice changes. Thin art resin, tabletop resin, and deep casting resin have different pour-depth and cure limits."
      },
      {
        q: "When should I leave this page?",
        a: "Use a more specific page when you know the job is a garage floor, river table, dice mold, flood coat, or small jewelry pour."
      }
    ],
    related: [
      "epoxy-calculator",
      "epoxy-amount-calculator",
      "resin-mold-calculator",
      "resin-art-pricing-calculator",
      "epoxy-kit-size-guide",
      "epoxy-unit-converter"
    ],
    note: "Use this as a broad resin estimate. If your project has a known scenario, switch to the matching page before buying.",
    compareLabel: "Raw resin math vs buying quantity",
    resultEyebrow: "Resin estimate"
  },
  {
    slug: "epoxy-pour-calculator",
    title: "Epoxy Pour Calculator: Depth, Volume, Layers & Waste",
    h1: "Epoxy Pour Calculator",
    description:
      "Calculate epoxy for a pour by length, width, depth, maximum layer depth, waste buffer, and cost before choosing a resin system.",
    eyebrow: "Pour Planning",
    intro:
      "This epoxy pour calculator is for people who already know they are filling a defined cavity or casting area. It focuses on total depth, staged layers, and buying margin instead of treating the pour as a thin surface coat.",
    primaryKeyword: "epoxy pour calculator",
    supportingKeywords: ["epoxy pour volume calculator", "calculate epoxy pour", "epoxy pour amount"],
    calculatorType: "deep-pour",
    bullets: [
      "Built around total pour depth and maximum layer depth.",
      "Useful before checking whether a product can handle the planned lift thickness.",
      "Shows layer count, raw volume, buffered quantity, and projected cost.",
      "Helps separate cavity pours from shallow flood coat jobs."
    ],
    howTo: [
      "Measure the inside length and width of the pour area.",
      "Use the deepest final depth you plan to fill, not the first lift depth.",
      "Enter the maximum layer depth from the product data sheet or your planned conservative lift size.",
      "Increase the waste buffer for rough wood, many corners, or pours where leaks are possible."
    ],
    mistakes: [
      "Using a flood coat calculator for a thick cavity pour.",
      "Assuming every epoxy can be poured to the same depth.",
      "Forgetting that staged pours need timing, prep, and enough total material before the first mix."
    ],
    faq: [
      {
        q: "What makes this different from a volume calculator?",
        a: "A volume calculator gives a raw amount. This pour page also asks how deep the lift can be and turns that into a layer plan."
      },
      {
        q: "Can this page choose the resin for me?",
        a: "No. It estimates quantity and layer count. You still need to verify maximum pour depth, working time, and cure conditions with the resin manufacturer."
      },
      {
        q: "Should I enter total depth or each layer depth?",
        a: "Enter total final depth in the project depth field and the planned maximum layer depth in the layer field."
      }
    ],
    related: [
      "deep-pour-epoxy-calculator",
      "epoxy-pour-depth-guide",
      "maximum-epoxy-pour-depth",
      "how-to-calculate-epoxy-pour",
      "resin-mold-calculator",
      "epoxy-kit-size-guide"
    ],
    note: "Use total project depth here. The max layer depth input controls the staged-pour recommendation.",
    compareLabel: "Planned pour vs conservative lift plan",
    resultEyebrow: "Pour quantity"
  },
  {
    slug: "epoxy-amount-calculator",
    title: "Epoxy Amount Calculator: How Much Epoxy to Buy",
    h1: "Epoxy Amount Calculator",
    description:
      "Find the amount of epoxy to buy from project dimensions, waste buffer, price, and practical kit-size planning.",
    eyebrow: "Buying Amount",
    intro:
      "This page answers the buying question behind many searches: not just what the raw volume is, but how much epoxy you should actually order after waste, rounding, and project uncertainty.",
    primaryKeyword: "epoxy amount calculator",
    supportingKeywords: ["how much epoxy to buy", "how much resin to buy", "epoxy resin amount calculator"],
    calculatorType: "general",
    bullets: [
      "Translates dimensions into an order-ready mixed epoxy quantity.",
      "Keeps raw volume and recommended amount visible side by side.",
      "Useful for quick buying decisions before comparing real kit sizes.",
      "Works as a bridge between how-much guides and scenario calculators."
    ],
    howTo: [
      "Measure the fill area using finished dimensions.",
      "Pick rectangle or round shape and enter the planned depth.",
      "Set a waste buffer that reflects the risk of spills, runoff, porous edges, and measuring uncertainty.",
      "Use the result with the kit size guide before placing the order."
    ],
    mistakes: [
      "Buying exactly the raw calculated volume with no overage.",
      "Using the amount page for garage floors, where coverage rate matters more than volume.",
      "Forgetting that Part A and Part B are included in the mixed total."
    ],
    faq: [
      {
        q: "Does the amount include both parts of the epoxy kit?",
        a: "Yes. The main result is mixed epoxy. The Part A/B split is shown separately as a planning example."
      },
      {
        q: "How much extra epoxy should I buy?",
        a: "For clean simple shapes, a small buffer may be enough. For porous wood, irregular edges, leaks, or many small batches, use a larger buffer and compare the conservative scenario."
      },
      {
        q: "Is this a kit size calculator?",
        a: "It gives the target quantity. Use the kit size guide to match that target against real product packaging."
      }
    ],
    related: [
      "how-much-epoxy-do-i-need",
      "epoxy-kit-size-guide",
      "epoxy-calculator",
      "epoxy-cost-calculator",
      "epoxy-unit-converter",
      "epoxy-waste-factor-guide"
    ],
    note: "The useful buying number is usually the recommended amount, not the raw geometric minimum.",
    compareLabel: "Raw amount vs order amount",
    resultEyebrow: "Amount to buy"
  },
  {
    slug: "epoxy-calculator-metric",
    title: "Metric Epoxy Calculator: Centimeters, Liters & Resin Cost",
    h1: "Metric Epoxy Calculator",
    description:
      "Use metric measurements to estimate epoxy resin volume in liters, with waste buffer, Part A/B split, and cost planning.",
    eyebrow: "Metric Planner",
    intro:
      "This metric epoxy calculator is for projects measured in centimeters and liters. It keeps metric entry first while still showing gallon equivalents for users comparing products sold in different unit systems.",
    primaryKeyword: "epoxy calculator metric",
    supportingKeywords: ["metric resin calculator", "epoxy calculator cm liters", "resin calculator metric"],
    calculatorType: "general",
    bullets: [
      "Designed for users measuring length, width, diameter, and depth in centimeters.",
      "Outputs liter-based planning while preserving gallon equivalents for kit comparison.",
      "Works for rectangular and circular shapes.",
      "Pairs naturally with the unit converter for mixed supplier listings."
    ],
    howTo: [
      "Switch the unit system to metric before entering measurements.",
      "Enter centimeters for dimensions and keep depth in the same measurement system.",
      "Use the liter result as the main planning number, then compare any gallon-based kit listing with the converter.",
      "Move to the deep-pour page if the metric depth is large enough to require staged lifts."
    ],
    mistakes: [
      "Entering millimeters into centimeter fields without converting.",
      "Mixing inch depth with centimeter length and width.",
      "Comparing a liter result against a gallon kit without conversion."
    ],
    faq: [
      {
        q: "Can I enter millimeters?",
        a: "Convert millimeters to centimeters first. For example, 12 mm is 1.2 cm."
      },
      {
        q: "Why does the page still mention gallons?",
        a: "Many epoxy kits are sold in gallons even when the project is measured in metric, so both units help with buying."
      },
      {
        q: "Is this different from the main calculator?",
        a: "The core math is the same, but this page is structured for metric search intent and metric buying questions."
      }
    ],
    related: [
      "epoxy-unit-converter",
      "epoxy-volume-calculator",
      "resin-calculator",
      "cylinder-resin-calculator",
      "sphere-resin-calculator",
      "epoxy-kit-size-guide"
    ],
    note: "Switch to metric first, then enter centimeter values. The result includes liter and gallon context.",
    compareLabel: "Metric estimate vs buying buffer",
    resultEyebrow: "Metric resin estimate"
  },
  {
    slug: "epoxy-circle-calculator",
    title: "Epoxy Circle Calculator: Round Pour & Mold Volume",
    h1: "Epoxy Circle Calculator",
    description:
      "Calculate epoxy for circular pours, round molds, coasters, and round tabletops by diameter, depth, waste, and cost.",
    eyebrow: "Circle Geometry",
    intro:
      "Use this page when the shape is a circle and the only dimensions that matter are diameter and depth. It is a cleaner fit than forcing a round project through a rectangular calculator.",
    primaryKeyword: "epoxy circle calculator",
    supportingKeywords: ["round epoxy calculator", "circle resin calculator", "epoxy calculator circle"],
    calculatorType: "round",
    bullets: [
      "Built for round molds, round tabletops, coasters, and circular fills.",
      "Uses diameter and depth instead of length and width.",
      "Shows raw circular volume, waste-adjusted order quantity, and cost.",
      "Links to round table and coaster pages when the project needs more specific guidance."
    ],
    howTo: [
      "Measure the inside diameter of the resin area.",
      "Enter the final filled depth, not the mold height if the mold will not be filled completely.",
      "Use a higher buffer for uneven rims, porous wood, or decorative inclusions.",
      "For many identical circles, calculate one piece first and multiply the recommended amount externally."
    ],
    mistakes: [
      "Using radius instead of diameter.",
      "Entering outside mold diameter instead of the inside cavity.",
      "Forgetting that shallow coasters and deep round casts need different resin classes."
    ],
    faq: [
      {
        q: "Should I enter radius or diameter?",
        a: "Enter diameter. The calculator divides it internally to apply the circle volume formula."
      },
      {
        q: "Can this estimate coasters?",
        a: "Yes for one round coaster. Use the coaster calculator if you want craft-specific batching and waste guidance."
      },
      {
        q: "What if my mold is oval?",
        a: "Use this only for true circles. For oval or irregular shapes, break the project into segments or use a more conservative estimate."
      }
    ],
    related: [
      "round-epoxy-table-calculator",
      "resin-coaster-calculator",
      "resin-mold-calculator",
      "sphere-resin-calculator",
      "epoxy-volume-calculator",
      "epoxy-unit-converter"
    ],
    note: "Enter diameter, not radius. The result assumes a true circular pour area.",
    compareLabel: "Circle volume vs conservative order",
    resultEyebrow: "Circle pour estimate"
  },
  {
    slug: "epoxy-rectangle-calculator",
    title: "Epoxy Rectangle Calculator: Length, Width, Depth & Resin",
    h1: "Epoxy Rectangle Calculator",
    description:
      "Calculate epoxy for rectangular molds, slabs, trays, and cavities with length, width, depth, waste, and cost guidance.",
    eyebrow: "Rectangle Geometry",
    intro:
      "Most epoxy math starts with a rectangular volume. This page focuses on that job directly, so users with boxes, trays, slabs, and straight-edged cavities can get to a clean estimate fast.",
    primaryKeyword: "epoxy rectangle calculator",
    supportingKeywords: ["rectangular resin calculator", "epoxy length width depth calculator", "rectangle epoxy volume"],
    calculatorType: "volume",
    bullets: [
      "Uses length, width, and depth for straight-sided resin projects.",
      "Good for trays, box molds, slab fills, and simple rectangular cavities.",
      "Separates raw volume from waste-adjusted buying quantity.",
      "Connects to cube and mold pages for projects where all sides or mold behavior matter."
    ],
    howTo: [
      "Measure the internal dimensions of the pour area.",
      "Enter the actual filled depth, not the total mold height if you are only doing a partial pour.",
      "Add extra buffer for textured bottoms, porous wood, and cleanup loss.",
      "Use the cost or kit-size page after calculating the amount."
    ],
    mistakes: [
      "Measuring the outside of the mold instead of the inside cavity.",
      "Ignoring bevels or rounded corners that reduce true volume.",
      "Using this page for surface coatings where thickness and edges drive the estimate."
    ],
    faq: [
      {
        q: "Is rectangular epoxy volume just length times width times depth?",
        a: "Raw volume is that simple, but the useful buying number also needs waste, cup loss, and kit rounding."
      },
      {
        q: "Should trays use this page or the tray calculator?",
        a: "Use this page for a plain rectangular fill. Use the tray page when the project is a shallow decorative tray with coating-style concerns."
      },
      {
        q: "Can this handle metric dimensions?",
        a: "Yes. Switch the unit system before entering centimeter measurements."
      }
    ],
    related: [
      "epoxy-volume-calculator",
      "cube-resin-calculator",
      "resin-mold-calculator",
      "resin-tray-calculator",
      "epoxy-amount-calculator",
      "epoxy-kit-size-guide"
    ],
    note: "Use internal dimensions and finished fill depth for a realistic rectangular estimate.",
    compareLabel: "Rectangle math vs buying buffer",
    resultEyebrow: "Rectangle volume"
  },
  {
    slug: "epoxy-square-foot-calculator",
    title: "Epoxy Square Foot Calculator: Coverage by Area & Thickness",
    h1: "Epoxy Square Foot Calculator",
    description:
      "Estimate epoxy needed per square foot from surface area, coat thickness, edge runoff, waste buffer, and cost.",
    eyebrow: "Area Coverage",
    intro:
      "This epoxy square foot calculator is for coating jobs where area is the starting point. It turns surface size and intended thickness into resin quantity, then adds the planning margin that flat formulas miss.",
    primaryKeyword: "epoxy square foot calculator",
    supportingKeywords: ["epoxy per square foot calculator", "resin square foot calculator", "epoxy coverage per square foot"],
    calculatorType: "coverage",
    bullets: [
      "Best for coatings, flood coats, countertops, tabletops, and area-driven estimates.",
      "Uses area and thickness instead of cavity volume thinking.",
      "Includes runoff, edge soak, and waste buffer.",
      "Pairs with cost-per-square-foot and gallon coverage guides for buying decisions."
    ],
    howTo: [
      "Measure the coated surface area and enter length and width.",
      "Use the intended finished thickness, such as a thin seal coat or flood coat.",
      "Add edges only if they will receive epoxy or lose material through runoff.",
      "Check the cost-per-square-foot guide if the buying decision is budget-driven."
    ],
    mistakes: [
      "Using square footage alone without a coat thickness.",
      "Forgetting edges, drips, and porous surfaces.",
      "Applying floor coating coverage rates to tabletop resin."
    ],
    faq: [
      {
        q: "Can square feet alone tell me how much epoxy I need?",
        a: "No. Square footage needs a target thickness. A seal coat and a flood coat on the same area use different amounts."
      },
      {
        q: "Is this the right page for floors?",
        a: "Use it for general area math. For garage floors, use the floor coverage page because floors are usually planned by published coverage rate and coat count."
      },
      {
        q: "Why does thickness matter so much?",
        a: "Doubling coat thickness roughly doubles the volume, before waste and runoff are added."
      }
    ],
    related: [
      "how-much-epoxy-per-square-foot",
      "how-much-does-a-gallon-of-epoxy-cover",
      "epoxy-cost-per-square-foot",
      "epoxy-coverage-calculator",
      "epoxy-flood-coat-calculator",
      "epoxy-floor-coverage-calculator"
    ],
    note: "Area is only half the estimate. Enter a realistic coat thickness before comparing kit sizes.",
    compareLabel: "Area baseline vs buffered coverage",
    resultEyebrow: "Square-foot estimate"
  },
  {
    slug: "epoxy-floor-coverage-calculator",
    title: "Epoxy Floor Coverage Calculator: Sq Ft, Coats & Kits",
    h1: "Epoxy Floor Coverage Calculator",
    description:
      "Estimate epoxy floor coating quantity from square footage, coat count, coverage rate, waste buffer, and projected material cost.",
    eyebrow: "Floor Coverage",
    intro:
      "Floor epoxy is usually planned from square footage, coats, and the coverage rate published for the coating system. This page uses that workflow instead of a woodworking-style volume formula.",
    primaryKeyword: "epoxy floor coverage calculator",
    supportingKeywords: ["epoxy floor calculator", "floor epoxy coverage calculator", "epoxy floor coating calculator"],
    calculatorType: "garage-floor",
    bullets: [
      "Built for garage, basement, workshop, and utility floor coating estimates.",
      "Uses length, width, number of coats, and square-foot coverage per gallon.",
      "Shows quantity and budget based on floor-coating logic.",
      "Links to garage floor cost pages for users comparing DIY kits."
    ],
    howTo: [
      "Measure floor length and width in feet or meters.",
      "Enter the number of coats in your system.",
      "Use the product's published coverage rate as the coverage-per-gallon input.",
      "Add waste for rough concrete, edges, stem walls, or heavy broadcast systems."
    ],
    mistakes: [
      "Using tabletop epoxy coverage assumptions on concrete floors.",
      "Forgetting primer or topcoat layers when planning total material.",
      "Assuming every floor coating covers the same square footage per gallon."
    ],
    faq: [
      {
        q: "Why does this calculator ask for coverage rate?",
        a: "Floor coating systems are usually sold with a published square-foot coverage range. That rate matters more than coat thickness entered in inches."
      },
      {
        q: "Should I include primer?",
        a: "If primer is part of the material you are estimating, include it as an additional coat or run a separate calculation using its own coverage rate."
      },
      {
        q: "Can this calculate a garage floor?",
        a: "Yes. Use the dedicated garage and two-car garage pages if you want garage-specific cost context."
      }
    ],
    related: [
      "garage-floor-epoxy-calculator",
      "epoxy-garage-floor-cost-calculator",
      "two-car-garage-epoxy-calculator",
      "epoxy-garage-floor-cost",
      "epoxy-cost-per-square-foot",
      "epoxy-square-foot-calculator"
    ],
    note: "Use the product's floor coverage rate. Floor estimates are coverage-based, not cavity-volume based.",
    compareLabel: "Floor coverage vs conservative material",
    resultEyebrow: "Floor material estimate"
  },
  {
    slug: "epoxy-garage-floor-cost-calculator",
    title: "Epoxy Garage Floor Cost Calculator: Sq Ft, Coats & Budget",
    h1: "Epoxy Garage Floor Cost Calculator",
    description:
      "Calculate garage floor epoxy material cost from floor size, coat count, coverage rate, waste buffer, and price per gallon.",
    eyebrow: "Garage Cost Tool",
    intro:
      "This page is for the moment after a homeowner knows the garage size and wants a budget number. It keeps coverage and material cost together so kit comparisons are more grounded.",
    primaryKeyword: "epoxy garage floor cost calculator",
    supportingKeywords: ["garage floor epoxy cost calculator", "epoxy garage cost estimator", "garage epoxy calculator cost"],
    calculatorType: "garage-floor",
    bullets: [
      "Turns floor size, coats, coverage rate, and price per gallon into a material budget.",
      "Best for DIY kit comparison and early project planning.",
      "Keeps substrate prep and labor out of the number unless you add them separately.",
      "Complements the guide page that explains cost drivers."
    ],
    howTo: [
      "Enter the garage's usable floor length and width.",
      "Use the planned coat count for primer, base coat, and topcoat if they are all part of the epoxy budget.",
      "Enter a realistic coverage rate from the product listing or technical sheet.",
      "Use price per gallon to compare kit options on the same basis."
    ],
    mistakes: [
      "Comparing kits by package price without normalizing coverage.",
      "Ignoring concrete porosity, cracks, stem walls, and waste.",
      "Treating material cost as the full installed cost when labor and prep may dominate."
    ],
    faq: [
      {
        q: "Does this include labor?",
        a: "No. It estimates material quantity and material budget. Installed cost depends on prep, repairs, labor, and coating system."
      },
      {
        q: "Is a two-car garage automatically 400 square feet?",
        a: "No. Many are close, but measure your own garage because small size differences change kit count."
      },
      {
        q: "Should flakes or topcoat be included?",
        a: "Include them only if you can express their material need through coat count, coverage, and price. Otherwise treat them as separate line items."
      }
    ],
    related: [
      "epoxy-garage-floor-cost",
      "two-car-garage-epoxy-calculator",
      "epoxy-floor-coverage-calculator",
      "garage-floor-epoxy-calculator",
      "epoxy-cost-per-square-foot",
      "epoxy-kit-size-guide"
    ],
    note: "This is a material cost estimate. Prep, repairs, labor, flakes, and tools may change the final project budget.",
    compareLabel: "Base floor material vs conservative budget",
    resultEyebrow: "Garage floor budget",
    statLabels: {
      raw: "Base material",
      split: "System type",
      cost: "Material cost",
      layers: "Coat plan"
    }
  },
  {
    slug: "two-car-garage-epoxy-calculator",
    title: "Two-Car Garage Epoxy Calculator: Floor Kits & Cost",
    h1: "Two-Car Garage Epoxy Calculator",
    description:
      "Estimate epoxy quantity and material cost for a two-car garage floor using square footage, coat count, coverage rate, and waste.",
    eyebrow: "Garage Scenario",
    intro:
      "A two-car garage is one of the most common epoxy floor searches, but the size is not universal. This calculator starts with a practical default and lets users adjust the real garage dimensions before comparing kits.",
    primaryKeyword: "two car garage epoxy calculator",
    supportingKeywords: ["2 car garage epoxy calculator", "epoxy for two car garage", "two car garage epoxy cost"],
    calculatorType: "garage-floor",
    bullets: [
      "Focused on the common two-car garage planning task.",
      "Uses floor dimensions, coat count, coverage rate, and price per gallon.",
      "Helps compare one-kit versus multi-kit buying decisions.",
      "Links to broader garage floor cost and coverage pages."
    ],
    howTo: [
      "Start with your measured garage size, even if a default two-car estimate seems close.",
      "Include every coat you are buying as part of the system.",
      "Use the lower end of the coverage range if the concrete is rough or porous.",
      "Compare the result against real kit coverage, not only kit volume."
    ],
    mistakes: [
      "Assuming all two-car garages have the same square footage.",
      "Ignoring the need for a primer or topcoat.",
      "Buying one kit because the label says two-car without checking actual coverage."
    ],
    faq: [
      {
        q: "How many gallons does a two-car garage need?",
        a: "It depends on square footage, coat count, and coverage rate. The calculator uses those inputs instead of a single fixed answer."
      },
      {
        q: "Should I use a conservative coverage rate?",
        a: "Yes when the slab is rough, old, patched, or very porous. Conservative coverage reduces the chance of running short."
      },
      {
        q: "Is this only for garages?",
        a: "It is written for garages, but the same coverage logic can apply to workshops or similar concrete floor areas."
      }
    ],
    related: [
      "garage-floor-epoxy-calculator",
      "epoxy-floor-coverage-calculator",
      "epoxy-garage-floor-cost-calculator",
      "epoxy-garage-floor-cost",
      "epoxy-cost-per-square-foot",
      "epoxy-kit-size-guide"
    ],
    note: "Measure the actual garage. A two-car label is not a substitute for square footage and coverage rate.",
    compareLabel: "Two-car baseline vs conservative kit plan",
    resultEyebrow: "Two-car garage estimate"
  },
  {
    slug: "epoxy-flood-coat-calculator",
    title: "Epoxy Flood Coat Calculator: Tabletop, Bar Top & Countertop",
    h1: "Epoxy Flood Coat Calculator",
    description:
      "Estimate epoxy for a flood coat by surface size, coat thickness, edge runoff, waste buffer, and material cost.",
    eyebrow: "Flood Coat",
    intro:
      "A flood coat is a finish layer, not a deep cast. This calculator focuses on surface area, thin coat thickness, runoff, and edge loss for tabletops, bar tops, and countertops.",
    primaryKeyword: "epoxy flood coat calculator",
    supportingKeywords: ["flood coat epoxy calculator", "tabletop flood coat calculator", "epoxy top coat calculator"],
    calculatorType: "surface",
    bullets: [
      "Best for glossy top coats and self-leveling finish layers.",
      "Uses surface dimensions and thin coat thickness.",
      "Adds edge runoff and waste so the result is not too lean.",
      "Links to the seal coat page when the substrate should be sealed first."
    ],
    howTo: [
      "Measure the top surface and any edges that will receive epoxy.",
      "Enter the intended flood coat thickness.",
      "Use a higher buffer for large edges, waterfall sides, or heavy runoff.",
      "Run a separate seal coat estimate if the wood or surface is porous."
    ],
    mistakes: [
      "Using flood coat math for a thick river table pour.",
      "Forgetting vertical edges and runoff.",
      "Skipping the seal coat when the substrate can release bubbles or absorb resin."
    ],
    faq: [
      {
        q: "What is a flood coat?",
        a: "It is a self-leveling surface coat intended to create a continuous glossy finish, usually much thinner than a casting pour."
      },
      {
        q: "Do I need a seal coat first?",
        a: "Porous wood, bottle caps, photos, and many handmade surfaces often benefit from a seal coat before the flood coat."
      },
      {
        q: "Can this estimate a countertop?",
        a: "Yes. Use the countertop calculator or cost guide if you need more countertop-specific assumptions."
      }
    ],
    related: [
      "epoxy-seal-coat-calculator",
      "seal-coat-vs-flood-coat",
      "table-top-epoxy-calculator",
      "bar-top-epoxy-calculator",
      "countertop-epoxy-calculator",
      "epoxy-square-foot-calculator"
    ],
    note: "Use this for a finish layer. For thick casts, use the pour or deep-pour calculator instead.",
    compareLabel: "Flood coat baseline vs runoff buffer",
    resultEyebrow: "Flood coat estimate"
  },
  {
    slug: "epoxy-seal-coat-calculator",
    title: "Epoxy Seal Coat Calculator: Thin Coat Before Flood Coat",
    h1: "Epoxy Seal Coat Calculator",
    description:
      "Estimate epoxy for a thin seal coat before a flood coat, river table, countertop, or porous wood project.",
    eyebrow: "Seal Coat",
    intro:
      "A seal coat is a small but important planning step. This page estimates a thin first coat so users can reduce bubbles, absorption, and leaks before the main pour or flood coat.",
    primaryKeyword: "epoxy seal coat calculator",
    supportingKeywords: ["seal coat epoxy calculator", "epoxy skim coat calculator", "epoxy first coat calculator"],
    calculatorType: "surface",
    bullets: [
      "Built for thin first coats on wood, bar tops, countertops, and porous surfaces.",
      "Useful before flood coat and river table planning.",
      "Keeps seal coat material separate from the main pour estimate.",
      "Links to leak-prevention and seal-vs-flood guidance."
    ],
    howTo: [
      "Measure the surface or edges that need sealing.",
      "Use a thin target thickness rather than flood coat depth.",
      "Estimate the seal coat separately so the main pour quantity does not hide the first-coat material.",
      "Raise the buffer for porous slabs, live edges, cracks, and end grain."
    ],
    mistakes: [
      "Treating the seal coat and flood coat as the same pour.",
      "Skipping end grain and live edges when estimating seal coat area.",
      "Using a thick deep-pour product as if it were a thin seal coat."
    ],
    faq: [
      {
        q: "Why calculate a seal coat separately?",
        a: "It makes the main pour estimate cleaner and prevents the first coat from quietly consuming resin you expected to use later."
      },
      {
        q: "Is a seal coat always required?",
        a: "No. It is most useful on porous, uneven, or inclusion-heavy surfaces where bubbles and absorption are likely."
      },
      {
        q: "What should I do after estimating the seal coat?",
        a: "Use the flood coat, river table, or countertop page for the main resin amount."
      }
    ],
    related: [
      "epoxy-flood-coat-calculator",
      "seal-coat-vs-flood-coat",
      "how-to-prevent-epoxy-leaks",
      "river-table-epoxy-calculator",
      "table-top-epoxy-calculator",
      "epoxy-waste-factor-guide"
    ],
    note: "This page estimates a thin first coat. Run the main pour separately after the seal coat plan is clear.",
    compareLabel: "Seal coat baseline vs porous-surface buffer",
    resultEyebrow: "Seal coat estimate"
  },
  {
    slug: "resin-mold-calculator",
    title: "Resin Mold Calculator: Epoxy Volume for Molds",
    h1: "Resin Mold Calculator",
    description:
      "Estimate resin for silicone molds, casting molds, trays, blocks, and simple mold cavities with waste and cost guidance.",
    eyebrow: "Mold Planning",
    intro:
      "This resin mold calculator is for mold-based projects where the inside cavity controls the amount. It gives users a practical starting point before they move to cube, sphere, cylinder, coaster, or jewelry-specific pages.",
    primaryKeyword: "resin mold calculator",
    supportingKeywords: ["epoxy mold calculator", "resin casting mold calculator", "how much resin for mold"],
    calculatorType: "volume",
    bullets: [
      "Best for reusable molds and simple casting cavities.",
      "Uses internal mold dimensions and fill depth.",
      "Connects to shape-specific pages for sphere, cylinder, cube, coasters, and dice.",
      "Includes cost and waste guidance for small-batch craft work."
    ],
    howTo: [
      "Measure the inside cavity, not the outside mold body.",
      "Use the planned fill height if the mold will not be filled to the top.",
      "Add extra waste for many small molds because cups and stir sticks consume material.",
      "Use a shape-specific page if the mold is a sphere, cylinder, cube, or round coaster."
    ],
    mistakes: [
      "Using outside mold dimensions.",
      "Ignoring embedded objects that displace resin.",
      "Using one large-cast estimate for many tiny molds without extra cup-loss buffer."
    ],
    faq: [
      {
        q: "How do I account for objects inside the mold?",
        a: "Objects displace resin. For a precise estimate, subtract the object volume or use a conservative test pour."
      },
      {
        q: "Should I fill the mold with water to measure volume?",
        a: "That can work for non-porous molds if you dry them completely afterward. This calculator is faster when dimensions are reliable."
      },
      {
        q: "Why link to separate shape calculators?",
        a: "Spheres, cylinders, cubes, and round coasters use different geometry, so they deserve cleaner inputs."
      }
    ],
    related: [
      "sphere-resin-calculator",
      "cylinder-resin-calculator",
      "cube-resin-calculator",
      "resin-coaster-calculator",
      "resin-dice-calculator",
      "resin-jewelry-calculator"
    ],
    note: "Measure the mold cavity, not the outside mold. Use a shape-specific page when possible.",
    compareLabel: "Mold cavity vs craft waste buffer",
    resultEyebrow: "Mold resin estimate"
  },
  {
    slug: "resin-coaster-calculator",
    title: "Resin Coaster Calculator: Round Mold Batch Estimate",
    h1: "Resin Coaster Calculator",
    description:
      "Calculate resin for round coaster molds by diameter, depth, waste buffer, batch planning, and cost.",
    eyebrow: "Craft Batch",
    intro:
      "Coasters are small enough that cup loss and batching matter. This calculator estimates one round coaster cleanly, then explains how to multiply the result for a set without ignoring craft waste.",
    primaryKeyword: "resin coaster calculator",
    supportingKeywords: ["coaster resin calculator", "resin amount for coasters", "epoxy coaster calculator"],
    calculatorType: "round",
    bullets: [
      "Designed for round coaster molds and small craft batches.",
      "Uses diameter and depth instead of rectangular inputs.",
      "Makes waste and cup loss more visible for small pours.",
      "Links to pricing and mold pages for craft sellers."
    ],
    howTo: [
      "Measure the inside diameter of one coaster mold.",
      "Enter the final fill depth for one coaster.",
      "Calculate one coaster first, then multiply by the number in the batch.",
      "Raise the waste buffer for pigments, glitter, split colors, or many tiny cups."
    ],
    mistakes: [
      "Calculating the whole coaster set as one large pour.",
      "Ignoring color split cups and leftover resin in mixing containers.",
      "Entering the outside mold diameter."
    ],
    faq: [
      {
        q: "Does this calculate a full coaster set?",
        a: "The form calculates one coaster. Multiply the recommended amount by the number of coasters, then keep the waste buffer for batching."
      },
      {
        q: "Should pigments change the estimate?",
        a: "Pigments usually do not change volume much, but multi-color work increases cup loss and process waste."
      },
      {
        q: "Can square coasters use this page?",
        a: "Use the rectangle or cube-style page for square coasters because the geometry is different."
      }
    ],
    related: [
      "epoxy-circle-calculator",
      "resin-mold-calculator",
      "resin-art-pricing-calculator",
      "resin-tray-calculator",
      "resin-jewelry-calculator",
      "epoxy-cost-calculator"
    ],
    note: "This estimates one round coaster. Multiply after the result, then keep a batch waste margin.",
    compareLabel: "Single coaster vs craft batch buffer",
    resultEyebrow: "Coaster resin estimate"
  },
  {
    slug: "resin-jewelry-calculator",
    title: "Resin Jewelry Calculator: Small Mold & Pendant Resin",
    h1: "Resin Jewelry Calculator",
    description:
      "Estimate resin for jewelry molds, pendants, bezels, charms, and small cavity pours with realistic waste guidance.",
    eyebrow: "Small Batch",
    intro:
      "Jewelry resin projects use tiny volumes, so the main risk is not geometry alone. Cup loss, pipettes, bubbles, pigments, and small overfills can dominate the estimate.",
    primaryKeyword: "resin jewelry calculator",
    supportingKeywords: ["jewelry resin calculator", "resin pendant calculator", "epoxy jewelry amount"],
    calculatorType: "void-fill",
    bullets: [
      "Designed for small cavities, bezels, pendants, charms, and detail pours.",
      "Uses length, width, and depth for a simple small mold estimate.",
      "Adds a higher waste mindset for tiny batches.",
      "Connects to craft pricing and mold planning pages."
    ],
    howTo: [
      "Measure the cavity you actually fill, not the full jewelry blank.",
      "Use a shallow depth for doming or a deeper value for filled bezels.",
      "Increase the waste buffer for pipettes, split colors, and small cups.",
      "Calculate one item first, then multiply for the batch and add process margin."
    ],
    mistakes: [
      "Using no waste because the raw volume is tiny.",
      "Filling by eye without estimating how many pieces one batch can cover.",
      "Ignoring doming overfill that may be sanded or cleaned later."
    ],
    faq: [
      {
        q: "Why does small jewelry need a high waste buffer?",
        a: "Because leftover resin in cups, pipettes, and color mixes can be larger than the resin inside one piece."
      },
      {
        q: "Can this calculate doming resin?",
        a: "Yes, enter a shallow depth and keep an overfill buffer if you intentionally dome the surface."
      },
      {
        q: "Is this precise enough for production pricing?",
        a: "It is a planning estimate. For production pricing, track actual batch yield and adjust the waste percentage over time."
      }
    ],
    related: [
      "resin-art-pricing-calculator",
      "resin-mold-calculator",
      "resin-coaster-calculator",
      "resin-dice-calculator",
      "epoxy-mix-ratio-by-volume-vs-weight",
      "epoxy-unit-converter"
    ],
    note: "Small pieces often need a larger process buffer than their raw volume suggests.",
    compareLabel: "Tiny cavity vs process waste",
    resultEyebrow: "Jewelry resin estimate"
  },
  {
    slug: "resin-dice-calculator",
    title: "Resin Dice Calculator: Cube Mold Volume & Batch Cost",
    h1: "Resin Dice Calculator",
    description:
      "Estimate resin for dice molds and cube-shaped resin casts by side length, waste buffer, and project cost.",
    eyebrow: "Dice Mold",
    intro:
      "Dice molds are cube-based, but real batches add sprues, overflow, pigments, and cleanup loss. This calculator starts with cube volume and keeps the waste decision visible.",
    primaryKeyword: "resin dice calculator",
    supportingKeywords: ["dice resin calculator", "resin dice mold calculator", "epoxy dice calculator"],
    calculatorType: "cube",
    bullets: [
      "Uses side length for cube-style dice or block molds.",
      "Works for one die or a single cube-shaped cavity.",
      "Shows cost and conservative buffer for small-batch craft work.",
      "Links to cube, jewelry, mold, and pricing pages."
    ],
    howTo: [
      "Measure one side of the dice cavity.",
      "Use the filled cube size, not the outside mold block.",
      "Calculate one die first and multiply for a set.",
      "Raise waste for pressure-pot overflow, sprues, pigments, and failed pulls."
    ],
    mistakes: [
      "Using the outside mold block instead of the dice cavity.",
      "Forgetting sprue and overflow material.",
      "Pricing dice from raw resin only and ignoring failed casts or finishing work."
    ],
    faq: [
      {
        q: "Does this calculate a full dice set?",
        a: "The calculator estimates one cube cavity. Multiply by the number of dice and keep the waste buffer for the whole batch."
      },
      {
        q: "What about different die shapes?",
        a: "Polyhedral dice are not perfect cubes. Use this as a planning baseline and verify with water-fill testing for production."
      },
      {
        q: "Should I include sprues?",
        a: "Yes. Increase the waste buffer if your mold uses sprues, overflow reservoirs, or heavy trimming."
      }
    ],
    related: [
      "cube-resin-calculator",
      "resin-mold-calculator",
      "resin-jewelry-calculator",
      "resin-art-pricing-calculator",
      "epoxy-unit-converter",
      "epoxy-kit-size-guide"
    ],
    note: "This estimates one cube-style cavity. Multiply for the set and keep extra margin for sprues.",
    compareLabel: "Cube cavity vs dice batch buffer",
    resultEyebrow: "Dice resin estimate"
  },
  {
    slug: "resin-tray-calculator",
    title: "Resin Tray Calculator: Shallow Pour & Surface Coat",
    h1: "Resin Tray Calculator",
    description:
      "Estimate resin for decorative trays, shallow molds, and tray flood coats by surface size, thickness, waste, and cost.",
    eyebrow: "Tray Projects",
    intro:
      "Trays can behave like shallow molds or like coated surfaces. This page uses surface-style inputs so decorative tray makers can plan thickness, edges, and runoff without using a floor or river table tool.",
    primaryKeyword: "resin tray calculator",
    supportingKeywords: ["tray resin calculator", "epoxy tray calculator", "resin tray amount"],
    calculatorType: "surface",
    bullets: [
      "Best for shallow trays, decorative pours, and surface-style tray coats.",
      "Uses length, width, and target thickness.",
      "Adds edge and runoff allowance.",
      "Connects to mold, flood coat, and craft pricing pages."
    ],
    howTo: [
      "Measure the tray's filled surface area, not the outside rim.",
      "Enter the planned resin thickness for the decorative layer.",
      "Add waste for pigments, inclusions, split colors, and edge cleanup.",
      "Use the mold calculator instead if the tray is a deep casting mold."
    ],
    mistakes: [
      "Treating a shallow tray as a deep pour.",
      "Ignoring rim height or uneven tray bottoms.",
      "Forgetting that pigments and split designs create extra cup loss."
    ],
    faq: [
      {
        q: "Is a tray a surface coat or mold fill?",
        a: "It depends on depth. Most decorative trays are shallow surface-style pours, while deep tray molds may need mold volume logic."
      },
      {
        q: "Should handles and rims be included?",
        a: "Include any areas that will receive resin or cause runoff. Do not include outside features that stay dry."
      },
      {
        q: "Can I price trays from this result?",
        a: "Use the resin art pricing calculator after this page to turn material quantity into a minimum pricing baseline."
      }
    ],
    related: [
      "resin-mold-calculator",
      "epoxy-flood-coat-calculator",
      "resin-coaster-calculator",
      "resin-art-pricing-calculator",
      "epoxy-square-foot-calculator",
      "epoxy-cost-calculator"
    ],
    note: "Use shallow surface depth for decorative tray pours. Deep molds belong on the mold calculator.",
    compareLabel: "Tray surface vs craft runoff buffer",
    resultEyebrow: "Tray resin estimate"
  },
  {
    slug: "sphere-resin-calculator",
    title: "Sphere Resin Calculator: Round Ball Mold Volume",
    h1: "Sphere Resin Calculator",
    description:
      "Calculate resin for sphere molds and ball-shaped castings by diameter, waste buffer, and material cost.",
    eyebrow: "Sphere Mold",
    intro:
      "Sphere molds use different geometry from round flat molds. This page gives a dedicated input for ball-shaped castings so users are not forced to approximate a sphere as a cylinder.",
    primaryKeyword: "sphere resin calculator",
    supportingKeywords: ["resin sphere calculator", "sphere epoxy calculator", "ball mold resin calculator"],
    calculatorType: "sphere",
    bullets: [
      "Uses sphere diameter for ball-shaped resin molds.",
      "Better fit than a round-table calculator for full 3D casts.",
      "Shows raw volume, buffered quantity, and cost.",
      "Useful for art spheres, paperweights, ornaments, and ball molds."
    ],
    howTo: [
      "Measure the inside diameter of the sphere mold.",
      "Use the largest internal diameter when the mold is a true sphere.",
      "Add waste for pour spouts, trimming, and small leaks.",
      "If the mold is only half a sphere, calculate the full sphere and use half the result as a starting point."
    ],
    mistakes: [
      "Using a circle area formula for a full sphere.",
      "Entering circumference instead of diameter.",
      "Ignoring overflow or sprue material."
    ],
    faq: [
      {
        q: "Can this estimate half-sphere molds?",
        a: "The form calculates a full sphere. For a half sphere, use half the recommended amount and keep a waste buffer."
      },
      {
        q: "Is diameter measured inside the mold?",
        a: "Yes. Use the inner cavity diameter, not the outside silicone mold size."
      },
      {
        q: "What if the shape is an ornament with a hollow insert?",
        a: "Subtract the insert volume if known, or test with water and dry the mold completely before casting."
      }
    ],
    related: [
      "resin-mold-calculator",
      "epoxy-circle-calculator",
      "cylinder-resin-calculator",
      "cube-resin-calculator",
      "resin-art-pricing-calculator",
      "epoxy-unit-converter"
    ],
    note: "Enter the inside diameter of the sphere mold. Half-sphere projects can start from half the full-sphere estimate.",
    compareLabel: "Sphere volume vs casting buffer",
    resultEyebrow: "Sphere resin estimate"
  },
  {
    slug: "cylinder-resin-calculator",
    title: "Cylinder Resin Calculator: Diameter, Height & Volume",
    h1: "Cylinder Resin Calculator",
    description:
      "Calculate resin for cylinder molds, round columns, tumbler inserts, and cylindrical casts by diameter, height, waste, and cost.",
    eyebrow: "Cylinder Mold",
    intro:
      "Cylinders need diameter and height, not length and width. This page targets tumbler inserts, round columns, candle-style molds, and other straight-sided round castings.",
    primaryKeyword: "cylinder resin calculator",
    supportingKeywords: ["resin cylinder calculator", "cylindrical mold resin calculator", "epoxy cylinder volume"],
    calculatorType: "cylinder",
    bullets: [
      "Uses diameter and height for cylinder-shaped resin casts.",
      "Good for straight-sided round molds and inserts.",
      "Shows raw cylinder volume and buffered order quantity.",
      "Links to sphere and circle pages for nearby shapes."
    ],
    howTo: [
      "Measure the inside diameter and fill height of the cylinder.",
      "Use final filled height, not outside mold height.",
      "Add waste for pour spouts, inclusions, and trimming.",
      "For hollow cylinders, subtract the inner cylinder volume or use a water test."
    ],
    mistakes: [
      "Entering radius when the form asks for diameter.",
      "Using outside mold size instead of inside cavity.",
      "Ignoring a hollow center or large embedded object."
    ],
    faq: [
      {
        q: "Can this calculate a hollow cylinder?",
        a: "Not directly. Calculate the outside cylinder and subtract the inside cylinder volume, or use a water-fill test for the mold."
      },
      {
        q: "Is height the same as depth?",
        a: "For cylinder molds, height is the filled vertical dimension of the resin cast."
      },
      {
        q: "Can I use this for a round tabletop?",
        a: "Use the circle or round table page for shallow round tabletops. This page is for cylinder-style casts."
      }
    ],
    related: [
      "resin-mold-calculator",
      "sphere-resin-calculator",
      "epoxy-circle-calculator",
      "cube-resin-calculator",
      "epoxy-calculator-metric",
      "epoxy-unit-converter"
    ],
    note: "Enter diameter and filled height. For hollow cylinders, subtract the inner void separately.",
    compareLabel: "Cylinder volume vs casting buffer",
    resultEyebrow: "Cylinder resin estimate"
  },
  {
    slug: "cube-resin-calculator",
    title: "Cube Resin Calculator: Block Mold Volume & Cost",
    h1: "Cube Resin Calculator",
    description:
      "Calculate resin for cube molds, block castings, dice blanks, and square resin forms by side length, waste, and cost.",
    eyebrow: "Cube Mold",
    intro:
      "A cube is simple, but a dedicated page removes confusion for dice blanks, block molds, and square casting forms. Enter the side length and let the calculator handle volume and buying buffer.",
    primaryKeyword: "cube resin calculator",
    supportingKeywords: ["resin cube calculator", "epoxy cube calculator", "cube mold resin volume"],
    calculatorType: "cube",
    bullets: [
      "Uses one side length for true cube molds.",
      "Works for block castings, dice blanks, and square resin forms.",
      "Shows raw cube volume, waste-adjusted quantity, and cost.",
      "Links to dice and rectangular pages when shape assumptions differ."
    ],
    howTo: [
      "Measure the inside side length of the cube cavity.",
      "Enter the final filled side length in the selected unit system.",
      "Increase waste for sprues, overflow, pigments, and trimming.",
      "Use the rectangle page if length, width, and depth are not equal."
    ],
    mistakes: [
      "Using a cube calculator when the mold is actually rectangular.",
      "Entering outside mold dimensions instead of the inside cavity.",
      "Ignoring sprues or overflow channels."
    ],
    faq: [
      {
        q: "What if my mold is not a perfect cube?",
        a: "Use the rectangle calculator when length, width, and depth are not all the same."
      },
      {
        q: "Can this page estimate dice blanks?",
        a: "Yes for cube-style blanks. Use the dice page if you want dice-specific batching guidance."
      },
      {
        q: "Should I add extra for sanding?",
        a: "Yes if you intentionally overfill or expect trimming and sanding loss."
      }
    ],
    related: [
      "resin-dice-calculator",
      "epoxy-rectangle-calculator",
      "resin-mold-calculator",
      "sphere-resin-calculator",
      "cylinder-resin-calculator",
      "epoxy-kit-size-guide"
    ],
    note: "Use this only for equal-sided cube cavities. Rectangular molds need length, width, and depth inputs.",
    compareLabel: "Cube volume vs casting buffer",
    resultEyebrow: "Cube resin estimate"
  },
  {
    slug: "resin-art-pricing-calculator",
    title: "Resin Art Pricing Calculator: Material Cost & Margin",
    h1: "Resin Art Pricing Calculator",
    description:
      "Estimate resin art material cost from resin quantity, waste buffer, and price per gallon before setting a minimum selling price.",
    eyebrow: "Craft Pricing",
    intro:
      "Resin art pricing starts with knowing the material floor. This calculator turns resin quantity into a cost baseline so artists can add pigments, molds, hardware, packaging, labor, fees, and margin with less guesswork.",
    primaryKeyword: "resin art pricing calculator",
    supportingKeywords: ["resin art cost calculator", "how to price resin art", "epoxy art pricing calculator"],
    calculatorType: "cost",
    bullets: [
      "Best after you already estimated resin quantity from a mold, coaster, tray, or jewelry page.",
      "Turns gallons or liters into a material cost baseline.",
      "Useful for craft sellers who need a pricing floor, not just a volume estimate.",
      "Keeps resin cost separate from labor, marketplace fees, packaging, and failed batches."
    ],
    howTo: [
      "Calculate the resin quantity on the matching craft page first.",
      "Enter that amount here as gallons or liters.",
      "Add a waste buffer that reflects pigments, split cups, failed pieces, and cleanup loss.",
      "Use the output as material cost, then add non-resin costs and margin outside this calculator."
    ],
    mistakes: [
      "Pricing from resin cost alone and ignoring labor or failed pieces.",
      "Using raw volume instead of waste-adjusted resin quantity.",
      "Treating marketplace fees, packaging, and shipping as optional when selling."
    ],
    faq: [
      {
        q: "Does this set my final selling price?",
        a: "No. It estimates resin material cost. Final price should include pigments, molds, packaging, labor, fees, failed batches, and profit."
      },
      {
        q: "Why is this useful for AdSense and affiliate traffic?",
        a: "Pricing searches are commercial and decision-heavy. The page helps users make a real buying and selling decision without turning into a pure sales page."
      },
      {
        q: "Can I use liters instead of gallons?",
        a: "Yes. Choose liters as the quantity unit when your project estimate or supplier listing is metric."
      }
    ],
    related: [
      "resin-coaster-calculator",
      "resin-jewelry-calculator",
      "resin-tray-calculator",
      "resin-dice-calculator",
      "resin-mold-calculator",
      "epoxy-cost-calculator"
    ],
    note: "Use this after a project calculator. It estimates resin material cost, not the full retail price.",
    compareLabel: "Base resin cost vs conservative material floor",
    resultEyebrow: "Pricing baseline",
    statLabels: {
      raw: "Base quantity",
      split: "Pricing basis",
      cost: "Material floor",
      layers: "Pricing note"
    }
  }
];

const guideSpecs = [
  {
    slug: "epoxy-garage-floor-cost",
    title: "Epoxy Garage Floor Cost: Material Budget & Cost Drivers",
    h1: "Epoxy Garage Floor Cost",
    description:
      "Understand epoxy garage floor material cost, square-foot drivers, coat count, kit coverage, waste, and when a calculator is more reliable than averages.",
    eyebrow: "Garage Cost Guide",
    intro:
      "Garage floor cost searches are usually buying-decision searches. This guide explains what changes the material budget and points users to the calculator when they know their square footage.",
    primaryKeyword: "epoxy garage floor cost",
    supportingKeywords: ["garage floor epoxy cost", "cost to epoxy garage floor", "epoxy garage floor material cost"],
    answer:
      "Epoxy garage floor material cost depends mainly on square footage, coat count, published coverage rate, slab condition, and kit price. A measured calculation is more reliable than a generic per-garage average.",
    takeaways: [
      "Square footage and coverage rate drive material quantity.",
      "Primer, base coat, flakes, and topcoat can change the coat count.",
      "Rough or porous concrete usually needs a more conservative coverage assumption.",
      "Material cost is not the same as installed cost."
    ],
    sections: [
      {
        title: "What changes the cost",
        body:
          "The biggest variables are floor size, number of coats, coating coverage per gallon, surface condition, and kit price. Labor, concrete repair, grinding, moisture mitigation, flakes, and topcoat can add cost outside the calculator."
      },
      {
        title: "When to use the calculator",
        points: [
          "Use the garage floor cost calculator once you know floor length and width.",
          "Use the floor coverage calculator when the question is quantity rather than budget.",
          "Use cost per square foot when comparing different systems on the same floor."
        ]
      },
      {
        title: "Ad placement note",
        body:
          "This is a strong monetization page because users are comparing products and project budgets. Ads should sit after the direct answer or calculator links, not before the cost explanation."
      }
    ],
    faq: [
      {
        q: "Why do garage floor cost estimates vary so much?",
        a: "Because prep, coating system, slab condition, and coat count differ. Material-only estimates are narrower than installed-cost estimates."
      },
      {
        q: "Is a DIY kit cheaper than a professional install?",
        a: "Usually on material and labor cost, but a professional install may include prep, repairs, and coating systems a basic kit does not include."
      },
      {
        q: "Should I buy by gallons or by coverage?",
        a: "For floors, start from coverage. Gallons only make sense after you know how much area the system covers per gallon."
      }
    ],
    related: [
      "epoxy-garage-floor-cost-calculator",
      "garage-floor-epoxy-calculator",
      "epoxy-floor-coverage-calculator",
      "two-car-garage-epoxy-calculator",
      "epoxy-cost-per-square-foot",
      "epoxy-kit-size-guide"
    ]
  },
  {
    slug: "river-table-epoxy-cost",
    title: "River Table Epoxy Cost: Resin Budget Before You Buy",
    h1: "River Table Epoxy Cost",
    description:
      "Estimate river table epoxy cost by resin quantity, deep-pour needs, waste, seepage, seal coat, kit size, and price per gallon.",
    eyebrow: "River Table Budget",
    intro:
      "River table cost depends on the actual channel volume and the resin class needed for the pour. This guide explains the cost drivers before sending users to the calculator.",
    primaryKeyword: "river table epoxy cost",
    supportingKeywords: ["how much does epoxy cost for a river table", "river table resin cost", "epoxy cost for river table"],
    answer:
      "River table epoxy cost is driven by channel volume, pour depth, waste, seepage, seal-coat allowance, and the price of a deep-pour compatible resin. Measure the river before comparing kits.",
    takeaways: [
      "Irregular river width is the main reason cost estimates miss.",
      "Deep-pour resin often costs more than simple top-coat resin.",
      "Seepage, seal coat, and waste should be visible in the budget.",
      "Kit rounding can change the final amount you actually buy."
    ],
    sections: [
      {
        title: "Why river tables are expensive to estimate",
        body:
          "A live-edge channel is rarely a perfect rectangle. Segment measurement, seal coat, leaks, and depth limits all affect the final resin quantity and therefore the resin budget."
      },
      {
        title: "Budget workflow",
        points: [
          "Measure the river with quick mode or segment mode.",
          "Check whether the depth requires deep-pour resin.",
          "Add seepage and seal-coat buffers before calculating cost.",
          "Compare the result against real kit sizes and shipping constraints."
        ]
      },
      {
        title: "What this guide does not include",
        body:
          "It does not estimate slab cost, milling, flattening, pigment, forms, finish, tools, or labor. It is focused on resin material cost."
      }
    ],
    faq: [
      {
        q: "Why not use a generic epoxy cost calculator?",
        a: "River tables have irregular geometry and deep-pour constraints, so a generic quantity input can hide the biggest cost drivers."
      },
      {
        q: "Does deep pour resin cost more?",
        a: "Often it does, but actual pricing depends on brand, kit size, and availability. The important point is to compare products that can handle the required depth."
      },
      {
        q: "Should I include seal coat cost?",
        a: "Yes when the wood is porous or the live edge can leak or release bubbles. Treat it as a separate buffer rather than hoping the main pour covers it."
      }
    ],
    related: [
      "river-table-epoxy-calculator",
      "how-much-epoxy-do-i-need-for-a-river-table",
      "how-to-measure-a-river-table-for-epoxy",
      "deep-pour-epoxy-calculator",
      "epoxy-cost-calculator",
      "epoxy-kit-size-guide"
    ]
  },
  {
    slug: "epoxy-countertop-cost",
    title: "Epoxy Countertop Cost: Coverage, Coats & Material Budget",
    h1: "Epoxy Countertop Cost",
    description:
      "Plan epoxy countertop material cost from surface area, flood coat thickness, edges, waste, kit size, and price per gallon.",
    eyebrow: "Countertop Budget",
    intro:
      "Countertop searches often mix quantity, cost, and finish quality. This guide explains how area, edge treatment, seal coat, and flood coat change material budget.",
    primaryKeyword: "epoxy countertop cost",
    supportingKeywords: ["countertop epoxy cost", "epoxy countertops cost", "countertop resin cost"],
    answer:
      "Epoxy countertop material cost depends on square footage, edges, seal coat needs, flood coat thickness, waste, and kit price. Start from coverage, then convert quantity into budget.",
    takeaways: [
      "Countertops are surface-coating projects, not deep casts.",
      "Edges, backsplashes, and waterfall sides can increase material.",
      "Seal coat and flood coat should be planned separately when the substrate is porous.",
      "Material cost is only part of the finished project budget."
    ],
    sections: [
      {
        title: "Cost drivers",
        body:
          "Countertop epoxy material cost changes with surface area, coat thickness, edge coverage, substrate absorption, color layers, and the chosen kit price."
      },
      {
        title: "Recommended page path",
        points: [
          "Use the countertop calculator for quantity.",
          "Use the flood coat calculator for the finish layer.",
          "Use the seal coat calculator if the substrate can absorb resin.",
          "Use the cost calculator after the material quantity is believable."
        ]
      },
      {
        title: "Where ads fit",
        body:
          "Countertop cost pages can carry ads after the direct answer and before the FAQ, but ads should not interrupt the calculator or make the page look like a product ranking."
      }
    ],
    faq: [
      {
        q: "Is epoxy countertop cost based on gallons or square feet?",
        a: "Start with square feet and intended thickness. Gallons become useful after coverage is calculated."
      },
      {
        q: "Do edges matter?",
        a: "Yes. Edges, overhangs, and vertical surfaces can increase material and runoff."
      },
      {
        q: "Should I calculate seal coat separately?",
        a: "Yes if the substrate is porous or if embedded material can trap air."
      }
    ],
    related: [
      "countertop-epoxy-calculator",
      "epoxy-flood-coat-calculator",
      "epoxy-seal-coat-calculator",
      "seal-coat-vs-flood-coat",
      "epoxy-cost-calculator",
      "epoxy-cost-per-square-foot"
    ]
  },
  {
    slug: "epoxy-bar-top-cost",
    title: "Epoxy Bar Top Cost: Flood Coat Budget & Coverage",
    h1: "Epoxy Bar Top Cost",
    description:
      "Estimate epoxy bar top material cost by surface area, flood coat thickness, edge runoff, seal coat, waste, and kit price.",
    eyebrow: "Bar Top Budget",
    intro:
      "Bar tops often use a glossy flood coat, thick visual finish, or embedded objects. This guide focuses on the material budget and the mistakes that make bar top estimates too low.",
    primaryKeyword: "epoxy bar top cost",
    supportingKeywords: ["bar top epoxy cost", "epoxy bar top material cost", "bar top resin cost"],
    answer:
      "Epoxy bar top cost is mostly a coverage problem: surface area, coat thickness, edges, embedded objects, seal coat, waste, and kit price determine the material budget.",
    takeaways: [
      "Flood coat thickness drives material use.",
      "Edges and runoff matter more on exposed bar tops.",
      "Bottle caps, photos, and porous surfaces may need a separate seal coat.",
      "Use a calculator before comparing kit prices."
    ],
    sections: [
      {
        title: "Bar top cost workflow",
        points: [
          "Calculate the bar top surface with the flood coat calculator.",
          "Estimate a seal coat if objects, wood, or porous surfaces need locking down.",
          "Use cost per square foot to compare finish options.",
          "Match the final amount to real kit sizes."
        ]
      },
      {
        title: "Common hidden costs",
        body:
          "Tape, forms, torches or heat tools, pigments, edge protection, cups, stir sticks, and replacement material for a failed flood coat can all affect the real project budget."
      },
      {
        title: "Why this page is not a pure product page",
        body:
          "The goal is to help users understand the budget before buying. Commercial links or ads should support the decision after the planning content is visible."
      }
    ],
    faq: [
      {
        q: "Why is a bar top different from a regular tabletop?",
        a: "Bar tops often have exposed edges, larger surfaces, embedded objects, or thicker visual finish goals, which changes waste and runoff."
      },
      {
        q: "Should bottle caps be included in the volume?",
        a: "They displace resin but create voids and sealing needs. Use conservative planning or a test section when the surface is irregular."
      },
      {
        q: "Can I use the tabletop calculator instead?",
        a: "Yes for basic surface quantity. This cost page is better for budget framing and related buying decisions."
      }
    ],
    related: [
      "bar-top-epoxy-calculator",
      "epoxy-flood-coat-calculator",
      "epoxy-seal-coat-calculator",
      "seal-coat-vs-flood-coat",
      "epoxy-cost-calculator",
      "epoxy-kit-size-guide"
    ]
  },
  {
    slug: "epoxy-cost-per-square-foot",
    title: "Epoxy Cost Per Square Foot: Coverage & Budget Guide",
    h1: "Epoxy Cost Per Square Foot",
    description:
      "Calculate and understand epoxy cost per square foot for floors, countertops, tabletops, flood coats, and coverage-based resin projects.",
    eyebrow: "Cost Per Area",
    intro:
      "Cost per square foot is useful only when the project is truly area-driven. This guide explains how thickness, coverage rate, coat count, and material price change the number.",
    primaryKeyword: "epoxy cost per square foot",
    supportingKeywords: ["epoxy price per square foot", "resin cost per square foot", "epoxy coating cost per square foot"],
    answer:
      "Epoxy cost per square foot equals material cost divided by the covered area, but the correct material cost depends on thickness for surface coats and coverage rate for floor systems.",
    takeaways: [
      "Per-square-foot cost needs context: floors and tabletops are not planned the same way.",
      "Thickness changes resin quantity for flood coats.",
      "Coverage rate and coat count drive floor coating budgets.",
      "Use cost per square foot to compare options only after the quantity model is consistent."
    ],
    sections: [
      {
        title: "Two ways to calculate cost per square foot",
        points: [
          "Surface coats: area times target thickness equals resin quantity.",
          "Floors: area times coat count divided by coverage rate equals gallons.",
          "Then multiply quantity by material price and divide by area."
        ]
      },
      {
        title: "Where users should go next",
        body:
          "Use the square-foot calculator for tabletop or coating thickness, the floor coverage calculator for concrete floors, and the cost calculator after the quantity is known."
      },
      {
        title: "AdSense value",
        body:
          "This page can monetize well because it is a budget comparison page, but it must avoid pretending one universal per-square-foot price applies to every project."
      }
    ],
    faq: [
      {
        q: "Is epoxy cost per square foot the same for floors and tables?",
        a: "No. Floors use coating coverage rates and coat counts. Tables and countertops use surface area and thickness."
      },
      {
        q: "Why do calculators show gallons first?",
        a: "Because resin is usually purchased by volume. Cost per square foot is a comparison metric after quantity and price are known."
      },
      {
        q: "Can this guide estimate labor?",
        a: "No. It focuses on material cost. Labor, prep, repairs, and tools should be separate."
      }
    ],
    related: [
      "epoxy-square-foot-calculator",
      "how-much-epoxy-per-square-foot",
      "epoxy-floor-coverage-calculator",
      "epoxy-garage-floor-cost",
      "epoxy-cost-calculator",
      "how-much-does-a-gallon-of-epoxy-cover"
    ]
  },
  {
    slug: "how-much-epoxy-per-square-foot",
    title: "How Much Epoxy Per Square Foot? Thickness & Coverage",
    h1: "How Much Epoxy Per Square Foot?",
    description:
      "Learn how much epoxy is needed per square foot at common coat thicknesses and when to use a coverage calculator.",
    eyebrow: "Coverage Answer",
    intro:
      "This page answers a common coverage question with the missing variable included: thickness. A square foot by itself does not determine the amount of epoxy.",
    primaryKeyword: "how much epoxy per square foot",
    supportingKeywords: ["how much resin per square foot", "epoxy per square foot", "epoxy coverage per sq ft"],
    answer:
      "The amount of epoxy per square foot depends on thickness. A thin seal coat uses much less resin than a flood coat or floor system covering the same area.",
    takeaways: [
      "Area alone is not enough; thickness or coverage rate is required.",
      "Use coating thickness for tabletops and countertops.",
      "Use manufacturer coverage rate for garage floors.",
      "Add waste for edges, runoff, and porous surfaces."
    ],
    sections: [
      {
        title: "The simple formula",
        body:
          "For surface coats, resin volume equals area multiplied by thickness. The calculator handles unit conversion and adds practical buffer so the result can be used for buying."
      },
      {
        title: "Which calculator to use",
        points: [
          "Use the square-foot calculator for tabletop, countertop, and flood coat planning.",
          "Use the floor coverage calculator for garage floors.",
          "Use the gallon coverage guide when a product listing only says one gallon covers a range."
        ]
      },
      {
        title: "Why estimates go wrong",
        body:
          "Most low estimates ignore edge runoff, surface absorption, uneven thickness, and the fact that real kit sizes rarely match the exact raw volume."
      }
    ],
    faq: [
      {
        q: "Can one number answer how much epoxy per square foot?",
        a: "No. Thickness and application type must be known first."
      },
      {
        q: "Is floor epoxy calculated the same way?",
        a: "Not usually. Floor systems are better estimated by published square-foot coverage per gallon and coat count."
      },
      {
        q: "Should I include edges?",
        a: "Yes if the edges receive epoxy or cause runoff during the pour."
      }
    ],
    related: [
      "epoxy-square-foot-calculator",
      "epoxy-coverage-calculator",
      "how-much-does-a-gallon-of-epoxy-cover",
      "epoxy-cost-per-square-foot",
      "epoxy-flood-coat-calculator",
      "epoxy-floor-coverage-calculator"
    ]
  },
  {
    slug: "how-much-does-a-gallon-of-epoxy-cover",
    title: "How Much Does a Gallon of Epoxy Cover?",
    h1: "How Much Does a Gallon of Epoxy Cover?",
    description:
      "Understand how far a gallon of epoxy goes by coat thickness, coverage rate, surface type, and waste assumptions.",
    eyebrow: "Gallon Coverage",
    intro:
      "A gallon coverage question needs context. One gallon can cover very different areas depending on whether the user is sealing wood, flooding a tabletop, or coating concrete.",
    primaryKeyword: "how much does a gallon of epoxy cover",
    supportingKeywords: ["epoxy gallon coverage", "1 gallon epoxy coverage", "how far does a gallon of epoxy go"],
    answer:
      "A gallon of epoxy covers more area at a thinner coat and less area at a thicker coat. For floors, use the product's stated coverage rate; for tabletops and flood coats, calculate from thickness.",
    takeaways: [
      "There is no universal coverage number without thickness or product coverage rate.",
      "Seal coats cover more area than flood coats.",
      "Floor systems should use the manufacturer's square-foot coverage range.",
      "Waste and runoff reduce practical coverage."
    ],
    sections: [
      {
        title: "Why product labels differ",
        body:
          "Labels may describe floor coating coverage, flood coat coverage, or mixed kit volume. Compare products only after you know the intended application and thickness."
      },
      {
        title: "Practical planning path",
        points: [
          "Use the coverage calculator for surface coats.",
          "Use the floor coverage calculator for concrete floors.",
          "Use the cost calculator after deciding how many gallons the project needs."
        ]
      },
      {
        title: "What to verify",
        body:
          "Check the product data sheet for recommended thickness, working time, coverage range, maximum pour depth, and whether the stated kit size is mixed volume."
      }
    ],
    faq: [
      {
        q: "Why do some products say one gallon covers a large range?",
        a: "Coverage ranges depend on thickness, substrate, application method, and whether the product is a floor coating or a tabletop resin."
      },
      {
        q: "Can I use a gallon coverage claim for deep pours?",
        a: "No. Deep pours should be calculated by volume and product depth limit, not square-foot coverage."
      },
      {
        q: "Should I trust the high end of the coverage range?",
        a: "Use it only for smooth surfaces and thin coats. For rough or porous surfaces, plan conservatively."
      }
    ],
    related: [
      "epoxy-coverage-chart",
      "epoxy-coverage-calculator",
      "epoxy-square-foot-calculator",
      "epoxy-floor-coverage-calculator",
      "epoxy-cost-per-square-foot",
      "epoxy-flood-coat-calculator"
    ]
  },
  {
    slug: "epoxy-pour-depth-guide",
    title: "Epoxy Pour Depth Guide: Layers, Resin Type & Safety",
    h1: "Epoxy Pour Depth Guide",
    description:
      "Choose epoxy pour depth, layer strategy, and resin type for surface coats, river tables, deep pours, molds, and casting projects.",
    eyebrow: "Depth Decision",
    intro:
      "Pour depth is where many epoxy projects fail. This guide helps users understand when they need a thin coat, a staged pour, or a deep-pour resin.",
    primaryKeyword: "epoxy pour depth guide",
    supportingKeywords: ["epoxy pour depth", "epoxy layer depth", "how deep can you pour epoxy"],
    answer:
      "Epoxy pour depth should be chosen from the product's maximum lift depth, the project's total depth, temperature, volume, and resin type. Do not assume all epoxies can be poured deeply.",
    takeaways: [
      "Thin flood coats and deep casts require different resin behavior.",
      "Maximum layer depth comes from the product data sheet.",
      "Large volumes and warm conditions can increase exotherm risk.",
      "Staged layers need planning before the first mix."
    ],
    sections: [
      {
        title: "Depth categories",
        points: [
          "Seal coats are thin first coats used to lock down pores or inclusions.",
          "Flood coats are shallow self-leveling finish layers.",
          "Deep pours are thicker casts that require suitable casting resin and often staged lifts."
        ]
      },
      {
        title: "How to use calculators with depth",
        body:
          "Use the pour calculator or deep-pour calculator when depth controls the project. Use the coverage calculator when the coating is shallow and surface-driven."
      },
      {
        title: "Trust boundary",
        body:
          "This guide is a planning aid. The safe maximum pour depth must come from the exact resin product documentation and conditions."
      }
    ],
    faq: [
      {
        q: "Can I pour any epoxy two inches deep?",
        a: "No. Maximum depth depends on the resin formulation, volume, temperature, and manufacturer guidance."
      },
      {
        q: "Why do deep pours need layers?",
        a: "Layers reduce the risk of heat buildup and cure problems when the total depth exceeds the product's safe lift depth."
      },
      {
        q: "Does a thinner pour always cure better?",
        a: "Not automatically, but staying within the product's recommended range is much safer than exceeding it."
      }
    ],
    related: [
      "epoxy-pour-calculator",
      "deep-pour-epoxy-calculator",
      "maximum-epoxy-pour-depth",
      "deep-pour-vs-table-top-epoxy",
      "how-to-calculate-epoxy-pour",
      "epoxy-kit-size-guide"
    ]
  },
  {
    slug: "maximum-epoxy-pour-depth",
    title: "Maximum Epoxy Pour Depth: What Limits a Deep Pour?",
    h1: "Maximum Epoxy Pour Depth",
    description:
      "Understand maximum epoxy pour depth, resin type, exotherm, project volume, layer planning, and why manufacturer limits matter.",
    eyebrow: "Max Depth",
    intro:
      "Maximum pour depth is not a universal number. This page explains what limits depth and why product documentation matters before a user buys resin.",
    primaryKeyword: "maximum epoxy pour depth",
    supportingKeywords: ["max epoxy pour depth", "how deep can epoxy be poured", "deep pour maximum depth"],
    answer:
      "Maximum epoxy pour depth depends on the exact resin, total volume, mold shape, ambient temperature, and manufacturer instructions. The calculator can plan layers, but the product data sheet sets the limit.",
    takeaways: [
      "Deep-pour resin and tabletop resin are not interchangeable.",
      "Exceeding max depth can cause overheating, bubbles, cracking, or cure failure.",
      "Large pours may need staged lifts even when the depth seems acceptable.",
      "Depth, volume, and temperature should be evaluated together."
    ],
    sections: [
      {
        title: "What sets the limit",
        body:
          "Resin formulation, mass of mixed epoxy, mold insulation, room temperature, and surface area all affect heat buildup and cure behavior."
      },
      {
        title: "Practical depth workflow",
        points: [
          "Find the maximum layer depth from the product documentation.",
          "Enter total project depth in the deep-pour calculator.",
          "Enter max layer depth to estimate staged lifts.",
          "Plan timing and surface prep between lifts before mixing."
        ]
      },
      {
        title: "What not to do",
        body:
          "Do not choose a resin only because a search result says it is deep pour. Confirm the actual lift limit for the quantity and conditions you plan to use."
      }
    ],
    faq: [
      {
        q: "Is maximum pour depth the same for every brand?",
        a: "No. Different formulations have different limits, and the safe limit can also depend on pour size and temperature."
      },
      {
        q: "Can I solve excess depth by adding more hardener?",
        a: "No. Changing the mix ratio can ruin cure behavior and should not be used to force a deeper pour."
      },
      {
        q: "When should I stage layers?",
        a: "Stage layers when total depth exceeds the product's safe lift depth or when the pour volume creates heat risk."
      }
    ],
    related: [
      "deep-pour-epoxy-calculator",
      "epoxy-pour-depth-guide",
      "epoxy-pour-calculator",
      "deep-pour-vs-table-top-epoxy",
      "river-table-epoxy-calculator",
      "epoxy-kit-size-guide"
    ]
  },
  {
    slug: "seal-coat-vs-flood-coat",
    title: "Seal Coat vs Flood Coat: Epoxy Layer Planning",
    h1: "Seal Coat vs Flood Coat",
    description:
      "Compare seal coat and flood coat epoxy layers, when to calculate them separately, and how they affect resin quantity, bubbles, and coverage.",
    eyebrow: "Coating Comparison",
    intro:
      "Many users search seal coat and flood coat because they are about to pour over a surface. This guide explains the difference and links directly to calculators for each layer.",
    primaryKeyword: "seal coat vs flood coat",
    supportingKeywords: ["epoxy seal coat vs flood coat", "seal coat flood coat epoxy", "what is epoxy flood coat"],
    answer:
      "A seal coat is a thin first coat used to lock down pores, edges, or inclusions. A flood coat is the main self-leveling finish layer. Calculate them separately when both are needed.",
    takeaways: [
      "Seal coat reduces bubbles and absorption on porous surfaces.",
      "Flood coat creates the main glossy finish and uses more resin.",
      "Separate estimates prevent the first coat from stealing material from the final coat.",
      "Some smooth non-porous surfaces may not need a separate seal coat."
    ],
    sections: [
      {
        title: "When a seal coat helps",
        points: [
          "Live-edge wood and end grain.",
          "Bottle caps, photos, paper, porous stone, or mixed-media surfaces.",
          "Projects where leaks or bubbles would ruin the main coat."
        ]
      },
      {
        title: "When a flood coat is the main estimate",
        body:
          "Tabletops, bar tops, countertops, and trays usually need a flood coat estimate based on surface area, intended thickness, edges, and runoff."
      },
      {
        title: "Recommended workflow",
        body:
          "Calculate the seal coat first if needed. Then calculate the flood coat separately and combine the buying quantities before matching kit sizes."
      }
    ],
    faq: [
      {
        q: "Can I skip the seal coat?",
        a: "Sometimes. Smooth, sealed, non-porous surfaces may not need one, but porous or inclusion-heavy surfaces often benefit from it."
      },
      {
        q: "Does seal coat use the same amount as flood coat?",
        a: "No. A seal coat is usually much thinner and should be estimated separately."
      },
      {
        q: "Which calculator should I use first?",
        a: "Use the seal coat calculator first when the surface needs sealing, then use the flood coat calculator for the final layer."
      }
    ],
    related: [
      "epoxy-seal-coat-calculator",
      "epoxy-flood-coat-calculator",
      "table-top-epoxy-calculator",
      "bar-top-epoxy-calculator",
      "countertop-epoxy-calculator",
      "how-to-prevent-epoxy-leaks"
    ]
  },
  {
    slug: "how-to-prevent-epoxy-leaks",
    title: "How to Prevent Epoxy Leaks Before a Pour",
    h1: "How to Prevent Epoxy Leaks",
    description:
      "Prevent epoxy leaks in river tables, molds, live-edge slabs, cracks, and seal coat projects before mixing resin.",
    eyebrow: "Leak Prevention",
    intro:
      "Leaks turn a correct resin calculation into a shortage. This guide explains practical pre-pour checks and links to the calculators where seepage and seal-coat buffers matter.",
    primaryKeyword: "how to prevent epoxy leaks",
    supportingKeywords: ["epoxy leak prevention", "stop epoxy from leaking", "river table epoxy leaks"],
    answer:
      "Prevent epoxy leaks by sealing porous edges, taping and caulking forms, testing the mold, leveling the surface, and adding a realistic seepage or waste buffer before mixing.",
    takeaways: [
      "Leak prevention starts before measuring the final pour.",
      "Seal coats reduce absorption and bubble release.",
      "Forms and seams should be tested before expensive resin is mixed.",
      "A seepage buffer is part of the material plan, not an afterthought."
    ],
    sections: [
      {
        title: "Pre-pour checklist",
        points: [
          "Seal live edges, end grain, cracks, and porous surfaces.",
          "Tape, caulk, or mechanically seal mold seams.",
          "Check that the surface is level before mixing.",
          "Run a small test with low-risk liquid when the mold design is new.",
          "Keep spare tape, cups, and cleanup tools ready."
        ]
      },
      {
        title: "Where leaks affect calculators",
        body:
          "River tables, void fills, molds, and seal coats often need higher buffers than clean geometric formulas. Use the scenario page that exposes seepage or overfill assumptions."
      },
      {
        title: "What not to rely on",
        body:
          "Do not assume more resin solves a leaky mold. The right fix is a better seal, then a realistic buffer."
      }
    ],
    faq: [
      {
        q: "Should I add extra epoxy for possible leaks?",
        a: "Yes, but only after the mold is sealed properly. A buffer cannot rescue a major leak."
      },
      {
        q: "Does a seal coat stop all leaks?",
        a: "No. It helps with porous surfaces and small absorption issues, but mechanical seams still need to be sealed."
      },
      {
        q: "Which pages include leak or seepage logic?",
        a: "The river table, void fill, seal coat, and mold-related pages are the most relevant."
      }
    ],
    related: [
      "epoxy-seal-coat-calculator",
      "river-table-epoxy-calculator",
      "void-fill-epoxy-calculator",
      "resin-mold-calculator",
      "epoxy-waste-factor-guide",
      "seal-coat-vs-flood-coat"
    ]
  },
  {
    slug: "how-to-calculate-epoxy-pour",
    title: "How to Calculate an Epoxy Pour",
    h1: "How to Calculate an Epoxy Pour",
    description:
      "Learn the epoxy pour calculation workflow: choose shape, measure dimensions, convert volume, add waste, check depth, and match kit size.",
    eyebrow: "Calculation Workflow",
    intro:
      "This guide teaches the page-selection and measurement logic behind the calculators. It is for users who want to understand the method before trusting a number.",
    primaryKeyword: "how to calculate epoxy pour",
    supportingKeywords: ["calculate epoxy pour", "how to calculate resin needed", "epoxy pour formula"],
    answer:
      "To calculate an epoxy pour, identify the shape, measure internal dimensions, calculate raw volume, add waste and project buffers, check pour-depth limits, then match the result to real kit sizes.",
    takeaways: [
      "Start by choosing the right project type, not by guessing a formula.",
      "Use internal dimensions and final fill depth.",
      "Add waste, seepage, seal coat, or runoff only when the project calls for them.",
      "Check depth and kit sizes before buying."
    ],
    sections: [
      {
        title: "Calculation sequence",
        points: [
          "Choose the page that matches the project: volume, coverage, river, floor, mold, or cost.",
          "Measure the dimensions that the project type actually needs.",
          "Calculate raw volume or coverage baseline.",
          "Add waste, seepage, seal coat, runoff, or overfill.",
          "Compare the final amount with kit size and product limits."
        ]
      },
      {
        title: "When formulas change",
        body:
          "A rectangle, circle, sphere, cylinder, floor coating, and live-edge river channel do not share the same calculation model. That is why this site uses separate intent pages."
      },
      {
        title: "Why this matters for indexing",
        body:
          "This page has a different job from a calculator page: it explains the decision path and sends users to the correct tool instead of repeating one generic form."
      }
    ],
    faq: [
      {
        q: "What is the basic epoxy formula?",
        a: "For simple rectangular volume, use length times width times depth. For coverage, use area times thickness. For floors, use area, coats, and coverage rate."
      },
      {
        q: "Why not use one formula for everything?",
        a: "Because project intent changes the variables. Floors, flood coats, river tables, and molds need different assumptions."
      },
      {
        q: "When do I add waste?",
        a: "Add waste after raw volume or coverage is calculated, then adjust the buffer for the project risk."
      }
    ],
    related: [
      "epoxy-pour-calculator",
      "epoxy-amount-calculator",
      "epoxy-volume-calculator",
      "epoxy-coverage-calculator",
      "river-table-epoxy-calculator",
      "epoxy-kit-size-guide"
    ]
  },
  {
    slug: "epoxy-mix-ratio-by-volume-vs-weight",
    title: "Epoxy Mix Ratio by Volume vs Weight",
    h1: "Epoxy Mix Ratio by Volume vs Weight",
    description:
      "Understand when epoxy mix ratio should be measured by volume or by weight, and why manufacturer instructions override generic ratio calculators.",
    eyebrow: "Mix Ratio Decision",
    intro:
      "Part A and Part B ratio searches are high-trust queries. This guide explains why volume and weight ratios can differ and why users must follow the product's own instructions.",
    primaryKeyword: "epoxy mix ratio by volume vs weight",
    supportingKeywords: ["epoxy ratio by weight", "epoxy ratio by volume", "part a part b by weight"],
    answer:
      "Use the mix method specified by the epoxy manufacturer. A 1:1 ratio by volume is not automatically 1:1 by weight because resin and hardener can have different densities.",
    takeaways: [
      "Volume ratio and weight ratio are not always interchangeable.",
      "Manufacturer instructions override generic calculators.",
      "Mixed total quantity includes both Part A and Part B.",
      "Incorrect ratio can cause soft, sticky, or failed epoxy."
    ],
    sections: [
      {
        title: "Why weight and volume differ",
        body:
          "Part A and Part B may have different densities, so the same volume can weigh different amounts. That is why a product can specify one ratio by volume and another by weight."
      },
      {
        title: "Planning workflow",
        points: [
          "Use the project calculator to estimate mixed total quantity.",
          "Check the product instructions for ratio and measuring method.",
          "Split the mixed total into Part A and Part B only after the method is confirmed.",
          "Do not change ratio to speed cure or increase depth."
        ]
      },
      {
        title: "Trust and safety boundary",
        body:
          "This guide explains planning logic. The exact ratio must come from the product documentation for the resin being used."
      }
    ],
    faq: [
      {
        q: "Is 2:1 epoxy always measured by volume?",
        a: "No. Some products specify ratio by volume, some by weight, and some provide both. Follow the product instructions."
      },
      {
        q: "Can I convert volume ratio to weight ratio myself?",
        a: "Only if you know the density of both parts. Otherwise use the ratio supplied by the manufacturer."
      },
      {
        q: "What happens if the ratio is wrong?",
        a: "The epoxy may stay soft, sticky, brittle, cloudy, or fail to cure properly."
      }
    ],
    related: [
      "epoxy-mixing-ratio-guide",
      "epoxy-unit-converter",
      "epoxy-amount-calculator",
      "resin-jewelry-calculator",
      "resin-dice-calculator",
      "epoxy-kit-size-guide"
    ]
  },
  {
    slug: "epoxy-kit-size-guide",
    title: "Epoxy Kit Size Guide: Match Gallons, Liters & Project Need",
    h1: "Epoxy Kit Size Guide",
    description:
      "Choose epoxy kit size after calculating project quantity, waste, Part A/B split, unit conversion, and product-specific limits.",
    eyebrow: "Buying Guide",
    intro:
      "Most users do not buy exactly the calculated resin volume. They buy real kits. This guide helps convert a calculated need into a safer buying decision without overbuilding thin product pages.",
    primaryKeyword: "epoxy kit size guide",
    supportingKeywords: ["what size epoxy kit do i need", "epoxy kit calculator", "resin kit size guide"],
    answer:
      "Choose an epoxy kit size by starting with the waste-adjusted mixed quantity, converting units if needed, checking product limits, and rounding up to a kit size that leaves a small safety margin.",
    takeaways: [
      "Use recommended quantity, not raw volume, when matching kit size.",
      "Confirm whether kit volume is mixed total or per part.",
      "Convert liters, gallons, quarts, and ounces before comparing products.",
      "Do not choose a kit that cannot handle the required pour depth or application type."
    ],
    sections: [
      {
        title: "Kit size workflow",
        points: [
          "Calculate quantity on the most specific project page.",
          "Use the recommended mixed volume as the buying target.",
          "Convert units if the kit listing uses a different system.",
          "Check whether the kit size is mixed total or separate Part A and Part B.",
          "Round up to the nearest practical kit size."
        ]
      },
      {
        title: "Why this page matters",
        body:
          "A user can calculate correctly and still buy incorrectly if the product listing uses a different unit, ratio, or package convention. This guide closes that gap."
      },
      {
        title: "Commercial intent without thin content",
        body:
          "This is a high-value monetization page because it sits close to purchase, but it should remain a buying method guide rather than a doorway to brand pages."
      }
    ],
    faq: [
      {
        q: "Should I round up or down?",
        a: "Round up. Running short mid-pour is usually more costly than having a small amount left over."
      },
      {
        q: "Does a one-gallon kit mean one gallon mixed?",
        a: "Usually, but product listings can vary. Confirm whether the stated size is total mixed volume or individual component volume."
      },
      {
        q: "Can one kit work for every project type?",
        a: "No. Kit size is only one part of the decision. The resin also has to fit the depth, surface, and cure requirements."
      }
    ],
    related: [
      "epoxy-amount-calculator",
      "epoxy-unit-converter",
      "epoxy-cost-calculator",
      "resin-calculator",
      "deep-pour-epoxy-calculator",
      "epoxy-mix-ratio-by-volume-vs-weight"
    ]
  }
];

export function createFirstBatchPages({ calculatorPage, guidePage }) {
  return [
    ...calculatorSpecs.map((spec) => calculatorPage({ ...spec, lastmod: batchLastmod })),
    ...guideSpecs.map((spec) => guidePage({ ...spec, lastmod: batchLastmod }))
  ];
}
