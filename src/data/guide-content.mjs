// Worked examples and decision aids for the existing English guides.
// Prices and buffer percentages below are explicitly illustrative inputs.
const layerSource = {
  label: "PrimaLoc: maximum thickness for a single layer",
  url: "https://primaloc.helpscoutdocs.com/article/789-maximum-thickness-depth"
};

export const guideAdditions = {
  "how-much-epoxy-do-i-need-for-a-river-table": {
    answer: "For a river table, multiply the channel length by its average width and fill depth, then add separately chosen waste, seepage and seal-coat allowances. A 72 × 6 × 1.5 in channel needs 2.81 US gal before allowances, or 3.51 gal with the river calculator's default 12% waste, 8% seepage and 5% seal-coat options enabled.",
    sections: [
      {
        title: "Worked quantity example: a six-foot river channel",
        body: "The table length is not the resin width. Measure only the gap between the slabs. For a 72 in channel averaging 6 in wide and 1.5 in deep, raw volume is 72 × 6 × 1.5 = 648 in³. Dividing by 231 gives 2.805 US gal, or 10.619 L. Wood that occupies the space must be excluded; knots and additional cavities must be added separately.",
        table: {
          headers: ["Planning stage", "Calculation", "Mixed resin"],
          rows: [
            ["Raw channel", "648 / 231", "2.81 gal"],
            ["12% waste only", "2.805 × 1.12", "3.14 gal"],
            ["Waste + 8% seepage + 5% seal coat", "2.805 × 1.25", "3.51 gal"]
          ],
          note: "These allowances are the tool's editable defaults, not a manufacturer specification or a guarantee against leaks. Both components together make the mixed quantity."
        }
      },
      {
        title: "Separate the channel from the final finish",
        body: "A full-table finish layer is a different surface from the river. A 72 × 30 in top coated at 1/8 in would add 270 in³, or 1.17 gal before waste and edge runoff. That 1/8 in depth is an example input; choose your coating's approved thickness. Calculate it in the surface tool and do not count an already-measured seal coat again in the river allowance."
      },
      {
        title: "Turn the result into an order",
        points: [
          "For a varying channel, enter average widths from equal-length segments rather than the widest gap.",
          "Check that the stated kit volume includes both resin and hardener. Round the order up to actual kit sizes after calculating the buffered amount.",
          "Choose resin and the pour schedule from the exact product's batch-volume and depth limits. A gallon estimate is not a safe batch size.",
          "Use a sealed mold and inspect for gaps before mixing. Extra resin cannot make a leaking mold reliable."
        ]
      }
    ],
    faq: [
      { q: "Does the river quantity include coating the entire table?", a: "No. It covers the measured river channel plus selected allowances. Calculate a full-table finish and edges separately." },
      { q: "Are the 8% and 5% allowances mandatory?", a: "No. They are editable planning inputs. Reduce or disable an allowance when that work has been measured separately, and use your actual losses when available." },
      { q: "Should I use the widest river measurement?", a: "For irregular channels, segment averages are more useful. The widest point applied to the whole length can substantially overstate volume." }
    ]
  },
  "how-to-measure-a-river-table-for-epoxy": {
    sections: [
      {
        title: "An equal-segment measurement sheet",
        body: "Split a 72 in channel into six 12 in sections. For each section, estimate its average clear width from more than one reading; a reading at a sharp bulge alone is not an average. Suppose the widths are 4, 6, 8, 7, 5 and 6 in, with a consistent 1.5 in depth. The widths sum to 36 in, so volume = 12 × 36 × 1.5 = 648 in³ = 2.81 US gal before allowances. This matches the river calculator's equal-segment model.",
        table: {
          headers: ["Section", "Length", "Average width", "Volume at 1.5 in"],
          rows: [["1", "12 in", "4 in", "72 in³"], ["2", "12 in", "6 in", "108 in³"], ["3", "12 in", "8 in", "144 in³"], ["4", "12 in", "7 in", "126 in³"], ["5", "12 in", "5 in", "90 in³"], ["6", "12 in", "6 in", "108 in³"]]
        }
      },
      {
        title: "What changes if the bottom is uneven?",
        body: "The calculator applies one depth to the whole river. Using the deepest point across a sloping bottom is a conservative estimate, not the exact volume. For better accuracy, divide the cavity into sections with their own measured depth and add length × width × depth for each. Do not multiply all widths by the full table length, and do not treat unequally spaced width readings as equal-length sections."
      },
      {
        title: "Keep uncertainty visible",
        body: "In the example, being wrong by 1 in about the average width changes raw volume by 72 × 1 × 1.5 / 231 = 0.47 gal. That is about a sixth of the estimated channel quantity. Measure inside the finished mold, subtract occupied wood and inserts, and check dimensions after final positioning. Keep a photograph and the measurement sheet so a later discrepancy can be traced to geometry, absorption or loss rather than guessed at."
      }
    ]
  },
  "deep-pour-vs-table-top-epoxy": {
    answer: "Use a coating resin for the specified thin finish layer and a casting resin rated for the depth and volume of the cavity. For example, PrimaLoc publishes a maximum 1/8 in layer for its bar/tabletop epoxy; that limit cannot be transferred to a deep-pour product. A 1.5 in river channel needs a product-specific casting plan, even if its total volume is small.",
    sections: [
      {
        title: "Compare the job, not the product name",
        table: {
          headers: ["Decision", "Thin finish layer", "Thick cavity or river"],
          rows: [
            ["Quantity model", "Surface area × chosen coat thickness", "Cavity length × clear width × depth"],
            ["Main check", "Approved coat thickness and finish use", "Approved depth, batch volume and cure conditions"],
            ["Surface to measure", "Top plus any coated edges", "Space left after wood and inserts"],
            ["Timing", "Recoat window for the coating", "Lift timing and surface preparation between casts"]
          ]
        },
        links: [layerSource]
      },
      {
        title: "Two resin tasks on one table",
        body: "A 72 × 6 × 1.5 in river holds 2.81 gal before buffers. The finished 72 × 30 in table covered at an illustrative 1/8 in thickness needs another 1.17 gal before edges and runoff. These are separate applications. Do not select a resin solely because it can supply the combined gallons, and do not assume a coating rated for 1/8 in can fill the river in one batch."
      },
      {
        title: "Read these fields before ordering",
        points: [
          "Find the exact product and hardener combination, permitted layer depth and any maximum mixed batch volume.",
          "Check the room-temperature range and the specified time or preparation for another coat/lift. Products sold under the same broad resin category can differ.",
          "Confirm the volume or weight mix ratio. A ratio from one coating must not be reused with a different casting product.",
          "When the depth is outside the published conditions, obtain product-specific instructions rather than extending a generic chart."
        ]
      }
    ]
  },
  "epoxy-waste-factor-guide": {
    answer: "Choose a waste allowance separately from the raw geometry. For a raw 2 US gal pour, 8% adds 0.16 gal and 20% adds 0.40 gal. These are planning scenarios, not universal recommended percentages: use the loss observed on a comparable project and account separately for measured seal coat or edge work.",
    sections: [
      {
        title: "What a waste percentage actually adds",
        body: "Order quantity = raw mixed volume × (1 + waste / 100). Entering 10% means adding a tenth of the raw volume, not buying another full kit. Apply the buffer before rounding to kit sizes. The table uses the same 2 gal cavity to show how the assumption affects the order; it does not rank the percentages as safe for every resin or substrate.",
        table: {
          headers: ["Illustrative buffer", "Extra mixed resin", "Buffered total"],
          rows: [["0%", "0 gal", "2.00 gal"], ["8%", "0.16 gal", "2.16 gal"], ["12%", "0.24 gal", "2.24 gal"], ["20%", "0.40 gal", "2.40 gal"]]
        }
      },
      {
        title: "Use a measured loss instead of guessing",
        body: "Record the amount mixed, the amount left in containers and any separately measured overfill or runoff on a comparable job. If 100 ml of a 1,000 ml batch never reaches the intended cavity, usable material is 900 ml. Replacing that loss requires 1,000 / 900 − 1 = 11.1% extra relative to the usable volume, not exactly 10%. The example explains the percentage bases; actual absorption and leaks may remain difficult to measure."
      },
      {
        title: "Keep different allowances from being counted twice",
        body: "In the river tool, waste, seepage and the optional seal-coat estimate are added as percentage points to raw volume. With 12%, 8% and 5%, the factor is 1.25. If you calculate a seal coat as its own area-and-thickness quantity, turn off the estimated seal-coat option before adding that separate result. Likewise, do not add a second edge allowance without checking the coverage tool's breakdown. A leaking mold needs repair before a bigger allowance."
      }
    ],
    faq: [
      { q: "Is 8% an industry standard?", a: "No. It is the general tool's editable default. Your substrate, application and recorded loss should determine the working assumption." },
      { q: "Can I solve a leak by adding 20%?", a: "No. Loss from a leak is not reliably bounded by the cavity's volume. Seal and test the mold before pouring." },
      { q: "Do I apply waste to a kit or the project?", a: "Apply it to the project quantity first, then round up to usable mixed kit sizes. Show unused kit material separately from application waste." }
    ]
  },
  "river-table-epoxy-cost": {
    answer: "Calculate the river volume, add chosen allowances, then multiply the mixed quantity by your supplier's price per mixed gallon or liter. A 72 × 6 × 1.5 in channel with 25% total allowances needs 3.51 gal; at an illustrative $100 per mixed gallon that is $350.65 before kit rounding, tax and shipping.",
    sections: [
      {
        title: "A resin-only budget with visible inputs",
        body: "The channel holds 648 in³ / 231 = 2.805 gal. The river calculator's default 12% waste plus optional 8% seepage and 5% seal coat produce 2.805 × 1.25 = 3.506 gal. At an assumed $100 per mixed gallon, material used is worth about $350.65. If the supplier sells 2 gal mixed kits at $200 each, you buy two kits for $400 and have roughly 0.49 gal left. These are arithmetic examples, not current market prices.",
        table: {
          headers: ["Budget line", "Example amount"],
          rows: [["Raw channel", "2.81 gal"], ["With selected allowances", "3.51 gal"], ["Calculated resin value at $100/gal", "$350.65"], ["Purchased mixed resin: two 2 gal kits", "$400"], ["Tax, shipping, pigments and tools", "Add actual quotes separately"]]
        }
      },
      {
        title: "Compare kits on the same mixed-volume basis",
        body: "For a 2:1 volume-ratio product, 1 gal of resin plus 0.5 gal of hardener makes a nominal 1.5 gal mixed kit. If it costs $150, its comparable price is $100 per mixed gallon, not $150 per gallon. Check the package listing for what its headline quantity means. Weight-based kits cannot be converted to gallons from weight alone without the product's density information."
      },
      {
        title: "Show uncertainty before committing to an order",
        body: "Changing the average river width from 6 to 7 in increases this raw volume from 2.81 to 3.27 gal. At the same 25% allowance, the order changes from 3.51 to 4.09 gal, which would require a third 2 gal kit in the example. Remeasure a costly irregular channel with segments, price any full-table finish separately, and verify the chosen resin is rated for the required casting conditions."
      }
    ]
  },
  "epoxy-countertop-cost": {
    answer: "For an epoxy countertop coating, calculate area × coat thickness, add separately measured edges and seal coat, then use the actual kit price. A 60 sq ft horizontal surface at an illustrative 1/8 in needs 4.68 US gal raw or 5.14 gal with 10% waste; at an assumed $100 per mixed gallon, buying three 2 gal kits costs $600 before other materials.",
    sections: [
      {
        title: "Worked material budget for 60 square feet",
        body: "At the chosen 1/8 in example thickness, raw volume is 60 × 144 × 0.125 = 1,080 in³. Divide by 231 to get 4.675 gal, then multiply by 1.10 for 5.143 gal. If a mixed 2 gal kit is quoted at $200, three kits provide 6 gal for $600. Use your product's approved coat thickness: doubling thickness doubles raw resin, but does not make an excessive coat safe.",
        table: {
          headers: ["Line item", "What the example includes"],
          rows: [["Horizontal finish layer", "60 sq ft at 1/8 in"], ["10% waste scenario", "5.14 gal to plan for"], ["Kit purchase", "6 gal, assumed $600"], ["Edges, seal coat, backsplash", "Measure and budget separately"], ["Pigment, tools, tax, delivery and labor", "Excluded; use your actual costs"]],
          note: "Prices and waste are example inputs. This is a coating budget, not a quote for a replacement countertop or an installed service."
        }
      },
      {
        title: "Measure returns and openings without inflating the top",
        body: "Subtract a sink or appliance opening from the horizontal surface only if it truly will not be coated. Measure coated vertical faces as perimeter length × exposed height, then use a thickness permitted for that application. A backsplash is another surface. The coating may require a separate application method for vertical faces, so a top-surface allowance should not be mistaken for installation instructions."
      },
      {
        title: "Keep prep and replacement costs separate",
        body: "The substrate must be suitable for the selected coating. Budget any repair, cleaning, masking and manufacturer-specified primer or seal coat from their own quantities. If you pay an installer, ask what substrate work, edges, pigment effects and final topcoat are included. Do not compare the material-only example with a complete countertop replacement quote; they cover different work."
      }
    ]
  },
  "epoxy-bar-top-cost": {
    answer: "Bar-top epoxy material cost follows coated area, thickness, edges, waste and the price per mixed kit. An 8 × 2 ft horizontal top at an illustrative 1/8 in holds 1.25 US gal before loss; with a 10% example buffer it needs 1.37 gal. Use the actual product specification and supplier quote to price the purchase.",
    sections: [
      {
        title: "From an eight-foot bar to a kit price",
        body: "An 8 × 2 ft top is 16 sq ft, or 2,304 square inches. At 1/8 in it holds 288 in³ / 231 = 1.247 gal. With a selected 10% buffer the planning quantity is 1.371 gal. A nominal 1.5 gal mixed kit would cover that horizontal-only estimate, but measured edges, a seal coat or runoff could change the order. At an illustrative kit price of $150, the purchase is $150, not the $137.14 value of resin estimated to be used."
      },
      {
        title: "Budget the surfaces that guests actually see",
        body: "A long front edge and end returns add coated surface beyond the top. Include them only after measuring their exposed height and confirming the product's vertical application method. Embedded objects and a raised lip can change the cavity volume. For a porous wood top, budget the specified sealing application separately rather than pretending a larger finish coat performs both tasks."
      },
      {
        title: "Questions for an installed quote",
        points: [
          "Does the quote include stripping an old finish, flattening or repair of the existing bar?",
          "Are edge coverage, embedded objects, tint, multiple coats and a compatible protective finish included?",
          "What do the manufacturer's instructions say about cure before service, cleaning and the intended use?",
          "Are labor, masking, delivery and tax included, and what work would trigger a separate charge?"
        ],
        links: [layerSource]
      }
    ]
  },
  "epoxy-pour-depth-guide": {
    answer: "Plan staged pours from the exact product's permitted layer depth: layers = ceiling(total fill depth / permitted layer depth). A 3 in cavity requires six layers at an illustrative 1/2 in limit or three at a 1 in limit. Those limits are example inputs, not permission to pour any epoxy at that thickness.",
    sections: [
      {
        title: "Build a layer plan for a three-inch cavity",
        table: {
          headers: ["Product limit entered", "Calculated layer count", "One possible depth plan"],
          rows: [["0.5 in", "6", "Six 0.5 in layers"], ["1 in", "3", "Three 1 in layers"], ["1.5 in", "2", "Two 1.5 in layers"]],
          note: "Hypothetical limits for the calculation only. Each product must actually permit the chosen depth at the planned batch volume and conditions."
        },
        body: "A 48 × 18 × 3 in cavity holds 2,592 in³ = 11.22 gal before allowances. At a hypothetical 1 in limit, each full-depth layer holds 3.74 gal. A depth-compliant layer can still exceed a product's maximum batch volume. Check both restrictions and the mold conditions before using this schedule."
      },
      {
        title: "Prepare the next lift before the first one",
        points: [
          "Read the manufacturer's recoat/lift instructions and record the stated temperature conditions.",
          "Confirm when a new lift can be applied and what cleaning or abrasion is required if the earlier surface has cured beyond that window.",
          "Separate the total project order from the amount mixed in one cup. Mix only batches allowed by the instructions and your working time.",
          "Plan pigment consistency and the remaining depth after each lift. A layer-count calculation does not predict cure time or bond strength."
        ]
      },
      {
        title: "Use a published limit, not a category average",
        body: "PrimaLoc's bar/tabletop instructions specify a maximum 1/8 in layer. That is one product's coating limit, not a general deep-casting limit. For choosing a product or interpreting limits, use the Maximum Epoxy Pour Depth guide; for a schedule once the limit is known, enter it in the deep-pour calculator.",
        links: [layerSource],
        cards: [{ title: "Read a product's maximum pour depth", text: "Distinguish a depth limit from batch-volume and temperature conditions.", slug: "maximum-epoxy-pour-depth" }]
      }
    ]
  },
  "maximum-epoxy-pour-depth": {
    answer: "The maximum is a limit for an exact resin/hardener combination under stated conditions, not a universal depth for epoxy. PrimaLoc publishes a maximum 1/8 in layer for its bar/tabletop product. Before casting, also check your own product's maximum mixed volume, temperature range and mold/application restrictions.",
    sections: [
      {
        title: "A product-sheet checklist before you choose resin",
        table: {
          headers: ["Specification", "What to record", "Why depth alone is insufficient"],
          rows: [["Product/hardener", "Exact names and ratio", "Different systems can have different cure behavior"], ["Maximum layer depth", "Number, units and application", "A coating limit is not a casting limit"], ["Batch or casting volume", "Published maximum and conditions", "The same depth can contain very different total volumes"], ["Ambient conditions", "Specified temperature and other restrictions", "A limit does not apply outside its stated conditions"], ["Next lift/recoat", "Window and required preparation", "Multiple pours need a bonding plan"]]
        }
      },
      {
        title: "What a verified coating limit does and does not say",
        body: "PrimaLoc's published 1/8 in maximum layer equals 3.175 mm. Its instructions are evidence for that named product, not proof that any tabletop epoxy has the same maximum. If another product sheet gives a different limit, use that product's instructions. Do not infer the allowed depth from a kit's gallon size, the words deep pour on a search result, or another brand's specification.",
        links: [layerSource]
      },
      {
        title: "Compare volume at the same depth",
        body: "A 12 × 12 × 1 in mold holds 144 in³ = 0.62 gal. A 72 × 30 × 1 in cavity holds 2,160 in³ = 9.35 gal. Both are one inch deep, yet the second contains fifteen times the volume. This arithmetic does not establish a safe temperature or batch size; it shows why the manufacturer's volume and application restrictions must accompany the depth limit. If no suitable limit is published, ask the manufacturer rather than assume permission.",
        cards: [{ title: "Plan lifts after finding the limit", text: "Convert a verified maximum layer depth into a project schedule.", slug: "epoxy-pour-depth-guide" }]
      }
    ]
  },
  "seal-coat-vs-flood-coat": {
    sections: [
      {
        title: "Calculate the two applications separately",
        body: "A seal coat addresses the substrate before the finish. Its amount is better taken from the selected product's coverage instructions than from a guessed cavity depth. Suppose, purely for budgeting, the instructions or a recorded comparable application require 3 fl oz per sq ft on a 16 sq ft top: that is 48 fl oz, or 0.375 US gal. A separate 1/8 in finish on the same area is 16 × 144 × 0.125 / 231 = 1.247 gal before edges and waste. Together those example inputs total 1.622 gal before allowances.",
        table: {
          headers: ["Application", "Example input", "Raw mixed quantity"],
          rows: [["Seal coat", "16 sq ft × assumed 3 fl oz/sq ft", "0.375 gal"], ["Finish layer", "16 sq ft × illustrative 1/8 in", "1.247 gal"], ["Combined", "Separate tasks added once", "1.622 gal"]],
          note: "The seal-coat rate and finish thickness are illustrative, not product recommendations. Use the actual instructions."
        }
      },
      {
        title: "A second coat depends on the first surface",
        body: "Follow the product's recoat conditions. If the seal coat has passed its permitted window, the surface may need manufacturer-specified cleaning or abrasion before another layer. Do not assume wet, tacky and fully cured surfaces accept the same process. Seal porous edges and inclusions only as the selected product directs; a thicker finish cannot reliably correct a poorly prepared substrate."
      },
      {
        title: "Where the river allowance fits",
        body: "The river tool's optional 5% seal-coat input is an estimate added to channel volume. It is not a measured coverage rate for an entire tabletop. When you have calculated the seal coat separately, turn that estimate off to avoid double counting. Keep the full-table finish, coated edges and any other resin work as separate lines in the purchasing sheet."
      }
    ]
  },
  "how-to-prevent-epoxy-leaks": {
    sections: [
      {
        title: "Inspect a mold as a container, not a flat outline",
        points: [
          "Check each bottom seam, wall joint, corner and fastener penetration. A continuous boundary matters more than the visible size of a gap.",
          "Confirm the mold and supporting surface can hold the weight and stay level. A wall that bows can open a seam after filling.",
          "Use a release surface and sealing method compatible with the chosen resin and mold materials. Check the relevant instructions rather than assume any tape or caulk will work.",
          "Let the sealing material reach the condition specified for use, then reinspect joints before placing wood or mixing resin."
        ]
      },
      {
        title: "Allow for a leak test without contaminating the pour",
        body: "Use a test method suitable for the mold, substrate and resin. Adding water to a wood-filled mold can introduce moisture, so it is not a universal leak-test instruction. A dry inspection or other manufacturer-compatible test must be followed by removal of contamination and the required drying/preparation. A sealed appearance alone is not evidence that every hidden corner is sound."
      },
      {
        title: "What a small loss does to the order",
        body: "A 72 × 6 × 1.5 in river requires 2.81 gal before allowances. Losing 0.25 gal through a seam removes about 8.9% of that raw amount. A cup-loss buffer could already have been consumed elsewhere, and an ongoing leak can lose much more. Protect the work area with suitable secondary containment and follow the product's spill and exposure instructions. Pause and address the source safely rather than repeatedly mix extra material into an uncontrolled leak."
      }
    ]
  },
  "how-to-calculate-epoxy-pour": {
    answer: "For a rectangular cavity, use inside length × width × depth in one unit system. Divide cubic inches by 231 for US gallons, or cubic centimeters by 1,000 for liters, then add measured extra work and a chosen loss allowance. Keep the order quantity separate from the permitted batch or layer size.",
    sections: [
      {
        title: "A calculation you can repeat in two unit systems",
        body: "For 48 × 18 × 1.25 in, volume = 1,080 in³. That is 4.675 US gal or 17.698 L. The same dimensions are 121.92 × 45.72 × 3.175 cm: their product is 17,698.029 cm³, and dividing by 1,000 gives the same liters. With a selected 8% allowance, the order is 5.049 gal or 19.114 L. Small differences in displayed decimals come from rounding, not a different model.",
        table: {
          headers: ["Step", "Calculation"],
          rows: [["Inside volume", "48 × 18 × 1.25 = 1,080 in³"], ["US gallons", "1,080 / 231 = 4.675"], ["8% example allowance", "4.675 × 1.08 = 5.049 gal"], ["Purchase", "Round up to usable mixed kit sizes after choosing the buffer"]]
        }
      },
      {
        title: "Adjust the formula for the shape",
        body: "For a circular cavity use π × (diameter / 2)² × depth, not diameter × diameter × depth. A 4 in diameter cavity 1/4 in deep holds π in³, or about 1.74 US fl oz. For several independent pockets, calculate each and add the volumes. Subtract occupied inserts only when their displaced volume can be measured; use segment calculations for an irregular river."
      },
      {
        title: "Check three common unit mistakes",
        points: [
          "Convert feet to inches before multiplying with inch depths. Square feet need a factor of 144 when combined with an inch thickness.",
          "Use US liquid gallons/fluid ounces for these tools. A weight ounce and an Imperial gallon are different units.",
          "Keep price per liter with liters and price per mixed gallon with mixed gallons. For a weight-based kit, use the product's own volume or density data."
        ]
      }
    ]
  },
  "epoxy-mix-ratio-by-volume-vs-weight": {
    answer: "Use the basis stated on the product: graduated measures for a volume ratio, a scale for a weight ratio. The numbers are not generally interchangeable because the two components can have different densities. Never derive a substitute weight ratio without the manufacturer's approved ratio or component data.",
    sections: [
      {
        title: "Why 2:1 by volume is not necessarily 2:1 by weight",
        body: "Consider a hypothetical product requiring 200 ml of Part A and 100 ml of Part B. If its component densities were 1.10 and 1.00 g/ml, the weights would be 220 g and 100 g: a 2.2:1 weight ratio. This example demonstrates the arithmetic only; the densities and ratio must not be used for another product. Actual data must come from its manufacturer.",
        table: {
          headers: ["Component", "Example volume", "Assumed density", "Calculated weight"],
          rows: [["A", "200 ml", "1.10 g/ml", "220 g"], ["B", "100 ml", "1.00 g/ml", "100 g"], ["Ratio", "2:1", "Different densities", "2.2:1"]],
          note: "Hypothetical component properties for explanation, not a resin formulation or mixing recommendation."
        }
      },
      {
        title: "How to use a published 100:45 weight ratio",
        body: "If your actual label specifies 100:45 by weight, a 290 g total batch is 290 × 100 / 145 = 200 g of A and 90 g of B. Tare the container and follow the product's measurement and mixing instructions. Do not pour 200 ml plus 90 ml merely because the scale example uses those numbers. The same total volume is split differently unless the label confirms the corresponding volume ratio."
      },
      {
        title: "What to do when the calculator's example ratio differs",
        body: "The quantity result is total mixed resin; the displayed A/B split is a labeled example associated with a resin class. Use your own product ratio for the final split. Choosing a different ratio does not change the cavity's geometric volume. If a kit is described only by component weight, check the manufacturer's stated yield rather than assuming kilograms equal liters."
      }
    ]
  },
  "epoxy-kit-size-guide": {
    sections: [
      {
        title: "Find usable mixed yield before comparing kits",
        body: "A 2:1 by-volume kit containing 1 gal of A and 0.5 gal of B supplies a nominal 1.5 gal mixed amount. A 1:1 kit with 1 gal of each supplies 2 gal. A package saying one gallon may refer to a component or the complete kit, so read the component volumes. These examples do not authorize changing a kit's ratio or using another manufacturer's hardener.",
        table: {
          headers: ["Stated component volumes", "Volume ratio", "Nominal mixed yield"],
          rows: [["1 gal A + 0.5 gal B", "2:1", "1.5 gal"], ["1 gal A + 1 gal B", "1:1", "2 gal"], ["2 L A + 1 L B", "2:1", "3 L (0.793 US gal)"]]
        }
      },
      {
        title: "Round the project to complete kit sizes",
        body: "Suppose your measured project and selected allowances total 3.51 gal. If the product comes only in 2 gal mixed kits, ceiling(3.51 / 2) = 2 kits, giving 4 gal. At an illustrative $200 per kit, purchase cost is $400 and nominal spare volume is 0.49 gal. With 1.5 gal kits the order is three kits, or 4.5 gal; compare the actual prices and suitability before assuming smaller packages are cheaper."
      },
      {
        title: "Do not turn an order size into a batch size",
        body: "Buying 4 gal does not mean mixing 4 gal at once. The product's maximum mixed volume, depth, temperature and working time still control the batch and lift schedule. Keep partially used components in their labeled containers under the manufacturer's storage conditions. Reserve complete matched sets, avoid cross-brand combinations, and use published mixed yield or density data when a kit is sold by weight."
      }
    ]
  }
};
