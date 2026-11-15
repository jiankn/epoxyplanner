export const epoxyMeasurementLinks = {
  metric: { label: "Calculate in cm", href: "/epoxy-calculator/?unit=metric#calculator" },
  round: { label: "Calculate a circular pour", href: "/epoxy-calculator/?shape=round#calculator" }
};

export const anchorAdhesiveSection = {
  title: "Looking for an epoxy calculator for concrete anchors?",
  body: "Use the adhesive manufacturer's tool to estimate how many cartridges you need for threaded rods or rebar. Start with your specified adhesive and installation details, such as hole diameter, embedment depth and number of holes.",
  links: [
    { label: "Hilti Adhesive Anchor Volume Calculator", url: "https://www.hilti.com/content/hilti/W1/US/en/business/business/engineering/anchors/volume-calculator.html", note: "iPhone and Android app" },
    { label: "Simpson Strong-Tie Adhesive Cartridge Estimator", url: "https://app.strongtie.com/ace/" },
    { label: "DEWALT Adhesive Anchor Volume Estimator", url: "https://anchors.dewalt.com/anchors/support-software/adhesive_anchor_volume_estimator2.php" }
  ]
};

export const epoxyResinCalculatorsByBrand = {
  slug: "epoxy-resin-calculators-by-brand",
  title: "Epoxy Resin Calculators for TotalBoat, MAS & Promise",
  h1: "Epoxy Resin Calculators by Brand",
  description: "Find the official TotalBoat, MAS Epoxies and Promise Epoxy calculators. Use a worked tabletop example to turn mixed resin volume into whole kits.",
  intro: "Find your brand's calculator, then match the mixed resin estimate to the kit size on your exact product label.",
  primaryKeyword: "epoxy resin calculators by brand",
  answer: "Divide the mixed epoxy you plan to buy, including your waste allowance, by the mixed yield of one kit. Round up to whole kits. A tabletop that needs 1.51 US gal after waste takes two 1-gal kits or one 2-gal kit.",
  takeaways: [
    "Start with the dimensions of the surface or cavity that will actually take resin.",
    "Use the combined Part A and Part B yield listed for the exact kit.",
    "For a deep cast, check the product's layer and batch limits separately."
  ],
  sections: [
    {
      title: "TotalBoat Epoxy Calculator",
      body: "Use TotalBoat's tool for a rectangular or circular pour. For a round surface, enter the diameter and the thickness of the coat. The linked TableTop instructions show coverage for the kit sizes and give the mixing and application limits for that product.",
      links: [
        { label: "TotalBoat Epoxy Calculator", url: "https://www.totalboat.com/pages/epoxy-calculator" },
        { label: "TotalBoat TableTop Epoxy instructions and technical data", url: "https://support.totalboat.com/hc/en-us/articles/42950167264923-TotalBoat-TableTop-Epoxy-Instruction-Sheet-and-TDS" }
      ]
    },
    {
      title: "MAS Epoxies Resin Calculator",
      body: "Select your exact MAS product before reading the mixing amounts. The official tool offers rectangular and round volume calculations. Table Top Pro also has a separate weight calculator, so match the tool to the measurement method on your label.",
      links: [
        { label: "MAS Epoxies Resin Calculator", url: "https://masepoxies.com/pages/resin-calculator" },
        { label: "MAS Table Top Pro kit sizes and coverage", url: "https://masepoxies.com/products/table-top-epoxy" }
      ]
    },
    {
      title: "Promise Epoxy Calculator",
      body: "Enter the dimensions of the area taking resin. On a river table, measure the channel between the slabs. If its width changes along the length, use the [segmented river table calculator](river-table-epoxy-calculator) to estimate the cavity before choosing a kit.",
      links: [
        { label: "Promise Epoxy Calculator", url: "https://promiseepoxy.com/pages/epoxy-calculator" },
        { label: "Promise Table Top Epoxy kit sizes", url: "https://promiseepoxy.com/products/tabletop" }
      ]
    },
    {
      title: "How many kits for a 3 × 6 ft tabletop?",
      body: "A 1/8 in coat on the flat top needs 324 cubic inches, or 1.40 US gal of mixed epoxy. With an illustrative 8% allowance, plan for about 1.51 US gal. The example covers the top surface. Enter edge runoff separately in the [table top epoxy calculator](table-top-epoxy-calculator) if your project coats the edges.",
      table: {
        headers: ["Product", "Using 1 US gal kits", "Using 2 US gal kits"],
        rows: [
          ["TotalBoat TableTop", "2 kits", "1 kit"],
          ["MAS Table Top Pro", "2 kits", "1 kit"],
          ["Promise Table Top", "2 kits", "1 kit"]
        ],
        note: "Both purchase options supply 2 US gal, about 0.49 gal above the buffered estimate. Confirm the combined A + B yield on the package you buy."
      },
      points: [
        "When the product lists coverage for your coat thickness, you can estimate from that rate. For example, MAS lists about 12 sq ft per gallon at 1/8 in. Divide 18 sq ft by 12 to get 1.50 US gal before any additional project allowance. The coverage rate and the geometry are two ways to estimate the same coat.",
        "For a thick casting, use the [deep pour epoxy calculator](deep-pour-epoxy-calculator) with the limits for your casting product. A whole-kit purchase may cover several mixing batches."
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
  lastmod: "2026-11-16"
};
