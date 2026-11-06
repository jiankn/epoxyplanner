// 2026-11 新增的四篇地坪指南。造价都由 floor-cost-rates.js 的共享费率现算，改价格只改那里。
// 施工时间、温度和测试标准取自下方列出的厂商资料，文中写明是哪一款产品的数据。
import { FLOOR_COST_RATES, floorCostRange } from "../assets/floor-cost-rates.js";

const pageDate = "2026-11-07";
const usd = (value) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Math.round(value));
const rate = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 }).format(value);
const range = (area, system, condition = "good") => {
  const { low, high } = floorCostRange(area, system, condition, false);
  return `${usd(low)} – ${usd(high)}`;
};
const rateRange = (system) => `${rate(FLOOR_COST_RATES[system].low)} – ${rate(FLOOR_COST_RATES[system].high)}`;
const diyLow = FLOOR_COST_RATES["diy-basic"].low;
const diyHigh = FLOOR_COST_RATES["diy-solids"].high;
const diyRange = (area) => `${usd(area * diyLow)} – ${usd(area * diyHigh)}`;
const midpoint = (system) => (FLOOR_COST_RATES[system].low + FLOOR_COST_RATES[system].high) / 2;

const garages = [
  ["1-car (12 × 24 ft)", 288],
  ["2-car (20 × 20 ft)", 400],
  ["2-car (24 × 24 ft)", 576],
  ["3-car (24 × 36 ft)", 864]
];

const sika = { label: "Sika: Sikafloor-200 Garage Epoxy Kit instruction sheet", url: "https://can.sika.com/dam/dms/ca01/9/Garage-kit_SIKA_Guide-installation_EN.pdf", note: "manufacturer" };
const apf = { label: "APF: Polyaspartic 7500 Low Odor product data sheet", url: "https://apfepoxy.com/cdn/shop/files/APF_Polyaspartic_7500_LowOdorMC_PDS__07.18.25.pdf", note: "manufacturer, Jul 18, 2025" };
const simiron = { label: "Simiron: 2000PA polyaspartic product data sheet", url: "https://assets.unilogcorp.com/187/ITEM/DOC/Simiron_103191957_Specification_Sheet.pdf", note: "manufacturer, Feb 2020" };
const armorPoly = { label: "ArmorGarage: polyaspartic floor system data sheet", url: "https://armorgarage.com/content/ArmorGarage_Polyaspartic_Floor_Coating_80_TDS.pdf", note: "kit seller" };
const carboline = { label: "Carboline: Coating Concrete, Part 2", url: "https://carboline.com/solution-spot/posts/coating-concrete-part-2", note: "coatings manufacturer" };
const concreteNetwork = { label: "Concrete Network: What's the Best Concrete Garage Floor Coating?", url: "https://www.concretenetwork.com/concrete/garage_floor/best-coating.html" };
const vilaEpoxy = { label: "Bob Vila: Epoxy Garage Floor Cost", url: "https://www.bobvila.com/articles/epoxy-garage-floor-cost/", note: "updated Apr 26, 2024" };
const vilaPoly = { label: "Bob Vila: Polyaspartic Floor Coating Cost", url: "https://www.bobvila.com/articles/polyaspartic-floor-coating-cost/", note: "updated Jan 31, 2024" };
const armorCost = { label: "ArmorGarage: Epoxy Flooring Cost per Sq Ft", url: "https://armorgarage.com/blog/epoxy-flooring-cost-per-square-foot/", note: "kit seller" };
const homeGuide = { label: "HomeGuide: Garage Floor Coating Cost", url: "https://homeguide.com/costs/garage-floor-coating-cost", note: "2026" };

// ---- Polyaspartic vs Epoxy ----
const epoxyMid = midpoint("pro-epoxy");
const polyMid = midpoint("pro-poly");
const midPremiumPct = Math.round((polyMid / epoxyMid - 1) * 100);
const perYear = (perSqFt, years) => `${usd((perSqFt * 400) / years)} per year`;

export const polyasparticVsEpoxy = {
  slug: "polyaspartic-vs-epoxy",
  title: "Polyaspartic vs Epoxy: Cost, Cure Time & Which Floor Lasts",
  h1: "Polyaspartic vs Epoxy Floor Coatings",
  description: `Polyaspartic costs ${rateRange("pro-poly")} per sq ft installed against ${rateRange("pro-epoxy")} for epoxy. Compare cure time, yellowing, working time, and which suits your garage.`,
  eyebrow: "Floor Coating Guide",
  intro: "Both coatings make a hard, seamless floor. They differ in price, working time, and how they handle sunlight. The comparison below uses real product data sheets, so you can see the numbers behind the sales claims.",
  primaryKeyword: "polyaspartic vs epoxy",
  supportingKeywords: ["epoxy vs polyaspartic", "polyaspartic vs epoxy cost", "polyaspartic vs epoxy garage floor", "polyurea vs epoxy", "polyaspartic vs polyurea"],
  answer: `Epoxy costs less, gives you more working time, and suits a careful DIY install. Polyaspartic costs about $1 to $2 more per square foot installed, can take vehicles in about a day, and resists yellowing. Choose polyaspartic for a sunlit garage or a fast turnaround, and epoxy for a shaded floor on a tighter budget.`,
  takeaways: [
    `A 400 sq ft garage runs about ${range(400, "pro-epoxy")} in professional epoxy and ${range(400, "pro-poly")} in polyaspartic.`,
    "One epoxy kit needs 72 hours before light vehicles. One polyaspartic data sheet lists about 24 hours.",
    "Polyaspartic gives you less working time, which makes a first-time DIY install risky.",
    "Neither coating fixes a damp slab, so test the concrete before you compare quotes."
  ],
  sections: [
    {
      title: "Polyaspartic vs epoxy at a glance",
      body: "Installed prices are the U.S. national ranges used in our floor cost calculator. Timing comes from one published product on each side, so read it as a real example and check the data sheet for the product you are quoted.",
      table: {
        headers: ["Factor", "Epoxy", "Polyaspartic"],
        rows: [
          ["Installed cost per sq ft", rateRange("pro-epoxy"), rateRange("pro-poly")],
          ["Working time", "45 – 55 min on the floor at 77°F, 30 min in the pail", "About 20 – 30 min at 77°F"],
          ["Recoat window", "8 – 24 hours at 68°F", "About 2 – 24 hours"],
          ["Foot traffic", "24 hours at 68°F", "About 4 – 6 hours"],
          ["Vehicles", "72 hours for light vehicles", "About 24 hours"],
          ["Full cure", "7 days at 68°F", "About 72 hours"],
          ["Sunlight", "Discolors under regular UV exposure", "UV stable, resists yellowing"],
          ["DIY fit", "Reasonable on a dry, sound slab", "Hard, because the mix sets quickly"],
          ["Typical lifespan", "3 – 20 years, depending on the system", "10 – 20+ years"]
        ],
        note: "Epoxy timing: Sikafloor-200 Garage Epoxy Kit. Polyaspartic timing: APF Polyaspartic 7500 Low Odor. Lifespans: HomeGuide (2026). Other products differ. Bob Vila reports polyaspartic that starts to set in about 10 minutes."
      }
    },
    {
      title: "How much more does polyaspartic cost?",
      body: `Polyaspartic adds about $1 to $2 per square foot at the published ranges, or roughly ${midPremiumPct}% at the midpoints. On a garage floor that usually means a few hundred dollars. You can test your own size and floor condition in the [epoxy garage floor cost calculator](garage-floor-epoxy-calculator).`,
      table: {
        headers: ["Garage", "Area", "Pro epoxy", "Pro polyaspartic"],
        rows: garages.map(([label, area]) => [label, `${area} sq ft`, range(area, "pro-epoxy"), range(area, "pro-poly")]),
        note: "U.S. national averages for a floor in good condition. The polyaspartic range assumes a flake floor, so ask for the same finish when you compare two quotes."
      }
    },
    {
      title: "Is polyaspartic cheaper over the life of the floor?",
      body: `It can be, if it lasts longer. At the midpoint prices, polyaspartic has to last only about ${midPremiumPct}% longer than epoxy to match its cost per year. The table shows a 400 sq ft floor at those prices. The lifespans are assumptions, so swap in the warranty terms from your quotes.`,
      table: {
        headers: ["Coating", "Midpoint price", "If it lasts", "Cost per year"],
        rows: [
          ["Epoxy", usd(epoxyMid * 400), "10 years", perYear(epoxyMid, 10)],
          ["Epoxy", usd(epoxyMid * 400), "15 years", perYear(epoxyMid, 15)],
          ["Polyaspartic", usd(polyMid * 400), "15 years", perYear(polyMid, 15)],
          ["Polyaspartic", usd(polyMid * 400), "20 years", perYear(polyMid, 20)]
        ],
        note: "Illustrative arithmetic, not a durability test. Lifespan depends on prep, traffic, and sunlight."
      }
    },
    {
      title: "Does polyaspartic last longer than epoxy?",
      body: "Usually, in a bright garage, because it does not yellow. For overall life the evidence is weaker than the marketing suggests. We found no independent long-term test, and published figures disagree: Bob Vila gives epoxy 10 to 20 years in one article and 5 to 10 in another, while Concrete Network says polyaspartic can pass 15 years when installed well. Most other numbers come from companies selling one of the two.",
      points: [
        "Both coatings fail early on damp or poorly prepared concrete, so prep matters more than the resin. Our [epoxy floor pros and cons guide](epoxy-floor-pros-and-cons) lists the usual failures.",
        "Polyaspartic is not moisture-proof. Concrete Network warns that it can bubble and lift on a floor with high vapor emission.",
        "Ask what a warranty covers. Peeling and hot-tire pickup matter more than the headline number of years."
      ]
    },
    {
      title: "What does a one-day floor cost you in working time?",
      body: "Speed is the reason to buy polyaspartic and also the reason it is hard to install. Concrete Network reports that a two- or three-car garage can be coated in a day with polyaspartic, against two to three days for a 100% solids epoxy. The same fast cure leaves less time to fix a roller mark or a missed edge, and installers usually work in small batches.",
      points: [
        "Epoxy lets you keep a wet edge longer, so it forgives slower rollers and first-timers.",
        "Polyaspartic kits exist, but Bob Vila's sources advise against DIY and warn that a failed install can double or triple the cost to put right.",
        "If you plan to coat the floor yourself, start with [how to epoxy a garage floor](how-to-epoxy-a-garage-floor)."
      ]
    },
    {
      title: "Which coating should you choose?",
      table: {
        headers: ["Your situation", "Better fit", "Why"],
        rows: [
          ["Sun reaches the floor or the door stays open", "Polyaspartic, or epoxy with a UV-stable topcoat", "Standard epoxy discolors under UV"],
          ["You cannot lose the garage for several days", "Polyaspartic", "About 24 hours to vehicles"],
          ["The garage is cold", "A polyaspartic rated for it", "One data sheet allows 30°F; one epoxy kit stops at 50°F"],
          ["First floor you have ever coated", "Epoxy", "Longer working time"],
          ["Shaded floor and a tight budget", "Epoxy", "Lower price, and UV is not a concern"],
          ["Rough floor that needs a thick build", "Epoxy", "Self-leveling systems can reach 1/16 to 1/8 in"],
          ["Damp slab", "Neither, until it is fixed", "Vapor pressure can lift either coating"]
        ],
        note: "Temperature limits: ArmorGarage polyaspartic data sheet (30 – 90°F) and Sikafloor-200 (50 – 86°F). Thickness ranges are in our [floor thickness guide](epoxy-floor-thickness)."
      }
    },
    {
      title: "Can you use epoxy and polyaspartic together?",
      body: "Yes, and many professional floors do. A common build uses an epoxy or polyurea base coat with flake, then a clear polyaspartic topcoat for UV and chemical resistance. Simiron's 2000PA, for example, is made to seal floors broadcast with chip or quartz. Follow the recoat window on both products. APF says surface preparation is required again once its 24-hour window passes.",
      points: [
        "A topcoat over flake adds material, so work out the gallons for each layer with the [epoxy floor coverage calculator](epoxy-floor-coverage-calculator).",
        "Polyaspartic can be slippery when wet. Ask for an anti-slip additive in the topcoat, especially near the door."
      ]
    },
    {
      title: "Sources",
      body: "Timing and limits come from manufacturer documents. Installed prices are compiled in our floor cost calculator from neutral cost guides. Seller pages are used only for product data and are labeled.",
      links: [sika, apf, simiron, armorPoly, concreteNetwork, vilaPoly, vilaEpoxy, homeGuide],
      cards: [
        { title: "Price your floor", text: "Compare epoxy and polyaspartic for your garage size and slab condition.", slug: "garage-floor-epoxy-calculator" },
        { title: "Gallons and kits", text: "Turn square feet and coats into the amount to buy.", slug: "epoxy-floor-coverage-calculator" }
      ]
    }
  ],
  faq: [
    { q: "Is polyaspartic better than epoxy for a garage floor?", a: "It is better in sunlight and when you need the garage back fast. Epoxy is the better value on a shaded floor, and it is easier to install yourself. Prep and moisture control decide how long either one lasts." },
    { q: "Can I install polyaspartic myself?", a: "Kits are sold, but the short working time makes it a hard first project. You need to mix small batches, keep a wet edge, and finish each section quickly. If you want to do the work yourself, epoxy leaves more room for mistakes." },
    { q: "Does polyaspartic turn yellow?", a: "Aliphatic polyaspartics are made to resist it. The APF and Simiron data sheets both describe their coatings as UV stable. Standard epoxy discolors under regular UV exposure, and Sika says so on its garage kit sheet." },
    { q: "Can you put polyaspartic over an old epoxy floor?", a: "Often, if the old coating is well bonded and the products are compatible. Sand off all the gloss, clean up the dust, and test adhesion in a small area first. A peeling floor has to come off before any new coat goes down." },
    { q: "What is the difference between polyaspartic and polyurea?", a: "Polyaspartic is a type of polyurea with a slower reaction and better UV stability. Concrete Network notes that polyurea can cure in about 10 minutes and can discolor outdoors, while polyaspartic cures a little slower and suits sunlit garages." }
  ],
  generalFaq: [],
  related: ["garage-floor-epoxy-calculator", "epoxy-floor-pros-and-cons", "how-to-epoxy-a-garage-floor", "epoxy-flake-calculator", "epoxy-floor-thickness"],
  lastmod: pageDate,
  reviewedOn: pageDate
};

// ---- Basement Epoxy Floor Cost ----
const basementSizes = [300, 500, 800, 1000, 1200];

export const basementEpoxyFloorCost = {
  slug: "basement-epoxy-floor-cost",
  title: "Basement Epoxy Floor Cost: Price per Sq Ft & Moisture Extras",
  h1: "Basement Epoxy Floor Cost",
  description: `A basement epoxy floor costs about ${rateRange("pro-epoxy")} per sq ft installed, plus around $1 per sq ft for a vapor barrier. See prices by size and test the slab first.`,
  eyebrow: "Floor Cost Guide",
  intro: "Estimate your basement below, then check the moisture section before you take a quote at face value. A basement slab sits against the ground, so moisture changes both the price and whether epoxy is a good idea.",
  primaryKeyword: "basement epoxy floor cost",
  supportingKeywords: ["cost to epoxy basement floor", "basement epoxy floor", "can you epoxy a basement floor", "epoxy basement floor cost per square foot"],
  embeddedCalculator: {
    calculatorType: "floor-cost",
    formDefaults: { sizePreset: "custom", length: 30, width: 25, condition: "moisture" },
    compareLabel: "Low vs high estimate",
    resultEyebrow: "Estimated cost",
    statLabels: { raw: "Price per sq ft", split: "Coating", cost: "Prep & repairs", layers: "DIY vs pro" },
    note: "Ranges are U.S. national averages for materials and labor. Enter your basement's length and width, then get itemized quotes before you commit.",
    nextStepLinks: [
      { label: "Gallons & Kits Calculator", slug: "epoxy-floor-coverage-calculator" },
      { label: "See Methodology", slug: "methodology" }
    ],
    ui: {
      formReplacements: { "Garage size": "Floor size" },
      calculatorHeading: "Estimate your basement floor",
      currentRecommendation: "Estimated cost",
      estimatedCost: "Per sq ft",
      standard: "Low estimate",
      conservative: "High estimate",
      productFit: "Other system",
      whyChangedEyebrow: "Cost Breakdown",
      whyChangedHeading: "What makes up the estimate",
      compareEyebrow: "Range",
      resultFallback: "Enter the floor size to see an installed price range.",
      breakdownFallback: "Enter the floor size to see the coating, prep, and repair costs.",
      nextStepHeading: "Compare two or three itemized quotes",
      nextStepCopy: "Use the range to check quotes. Ask how the slab will be tested, how the concrete will be prepared, and what the warranty says about moisture."
    }
  },
  answer: `Professional epoxy costs about ${rateRange("pro-epoxy")} per square foot installed, so a 500 sq ft basement runs roughly ${range(500, "pro-epoxy")} on a dry, sound slab. A vapor barrier adds about $1 per square foot. DIY kits cost about ${rate(diyLow)} to ${rate(diyHigh)} per square foot in materials.`,
  takeaways: [
    `With a vapor barrier, the same 500 sq ft floor runs about ${range(500, "pro-epoxy", "moisture")}.`,
    "Test the slab before you buy anything. A failed moisture test changes the whole job.",
    "One passing test is a snapshot, and ground moisture changes with the seasons.",
    "A coating cannot stop liquid water coming through the slab. Fix the drainage first."
  ],
  sections: [
    {
      title: "Basement epoxy floor cost by size",
      body: "Cost guides rarely price basements separately, so these figures use the same national epoxy floor rates as our garage calculator. Expect to land higher in the range if the crew has to carry equipment down a narrow stair or work around posts and mechanical equipment.",
      table: {
        headers: ["Basement size", "DIY kit (materials)", "Pro epoxy, dry slab", "With vapor barrier", "With resurfacing"],
        rows: basementSizes.map((area) => [
          `${new Intl.NumberFormat("en-US").format(area)} sq ft`,
          diyRange(area),
          range(area, "pro-epoxy"),
          range(area, "pro-epoxy", "moisture"),
          range(area, "pro-epoxy", "resurface")
        ]),
        note: "Vapor barrier at about $1 per sq ft (installer quoted by Bob Vila). Resurfacing at $3 – $7 per sq ft (HomeGuide 2026). Some contractor price lists show $2 – $4 per sq ft for moisture-mitigating primers, so ask for this as its own line on the quote."
      }
    },
    {
      title: "Is your basement slab dry enough for epoxy?",
      body: "Find out before you get quotes. Standard epoxy forms a tight film, so vapor rising through the slab collects under the coating and can push it off. These are the common tests, from the quick DIY check to the ones a professional uses.",
      table: {
        headers: ["Test", "How it works", "Pass mark"],
        rows: [
          ["Plastic sheet", "Tape an 18 × 18 in sheet to the slab and wait at least 24 hours", "No condensation and no darkened concrete"],
          ["Concrete moisture meter", "Read the slab with a meter such as a Tramex CME", "4% or less for Sikafloor-200"],
          ["Calcium chloride (ASTM F1869)", "Measures the vapor emission rate at the surface", "3 lb per 1,000 sq ft, per Carboline"],
          ["In-slab humidity probes (ASTM F2170)", "Measures relative humidity inside the concrete", "80% for standard coatings per Carboline; 75% for Simiron 2000PA"]
        ],
        note: "The plastic sheet test only shows whether moisture is present, not how much. Your coating's data sheet sets the limit that counts for your job."
      }
    },
    {
      title: "Why a basement can pass the test and still fail",
      body: "A moisture test measures one moment. Carboline points out that all of these tests capture conditions at a single point in time, and Simiron warns that seasonal changes in ground moisture can cause too much vapor transmission whatever the earlier readings showed. Its data sheet says a suitable moisture barrier must be in place for slabs on grade.",
      points: [
        "Test during the wettest part of your year if you can. A dry August reading says little about April.",
        "Ask whether the slab was poured over a vapor barrier. In an older house the answer is often unknown, so plan as if it was not.",
        "White powder on the concrete, musty smells, or a tide line on the walls all point to moisture. Investigate these before you price a coating.",
        "A dehumidifier can dry the surface for a coat to go down, as Sika notes, but it does not stop vapor rising from the ground."
      ]
    },
    {
      title: "What adds to a basement floor quote",
      table: {
        headers: ["Item", "Typical cost", "When it applies"],
        rows: [
          ["Vapor barrier or moisture primer", "About +$1 per sq ft", "Failed test, or no barrier under the slab"],
          ["Patching cracks and chips", "$25 – $250 per job", "Most older floors"],
          ["Resurfacing", "$3 – $7 per sq ft", "Spalled or badly uneven concrete"],
          ["Removing old paint or sealer", "Ask for a quote", "Any previously coated floor"],
          ["Coating stem walls", "Usually charged as an extra", "If you want the coating to run up the wall"],
          ["Contractor minimum", "$500 – $1,000 per job", "Small rooms"],
          ["Grinder rental (DIY)", "$100 – $200 per day", "DIY jobs that need mechanical prep"]
        ],
        note: "Sources: Angi and This Old House (patching), HomeGuide (resurfacing), Bob Vila (vapor barrier, minimum, stem walls), ArmorGarage (rental). Prices compiled in the [epoxy garage floor cost calculator](garage-floor-epoxy-calculator)."
      }
    },
    {
      title: "Can you epoxy a basement floor?",
      body: "Yes, if the slab stays dry. Epoxy works well in a basement workshop, gym, or laundry area, where a seamless and easy-to-clean floor is useful. Skip it if the basement floods, if water seeps through cracks after rain, or if the slab keeps failing moisture tests. Bob Vila notes that solid epoxy is not recommended for high-moisture areas.",
      points: [
        "Sunlight is rarely a problem underground, so a basement can usually skip the premium UV-stable topcoat. Our [polyaspartic vs epoxy comparison](polyaspartic-vs-epoxy) covers when it is worth paying for.",
        "Epoxy is hard and cold underfoot. Plan on rugs in living areas, because the coating adds no insulation.",
        "A smooth, glossy coat is slippery when wet. Flake or an anti-slip additive helps near stairs and laundry areas. The [epoxy flake calculator](epoxy-flake-calculator) gives the pounds to order.",
        "Cool basements cure slowly. Sika's chart moves foot traffic from 24 to 30 hours and full cure from 7 to 10 days at 50°F."
      ]
    },
    {
      title: "DIY or professional for a basement?",
      body: `DIY materials for a 500 sq ft basement run about ${diyRange(500)}. ArmorGarage's own example puts a 1,000 sq ft basement at $1,158 in kits, or $1.16 per square foot. DIY suits a slab that has passed its moisture test and has no old coating. Hire a pro if the slab needs a moisture system or heavy repair, because those steps decide whether the floor stays down.`,
      points: [
        "Ventilation matters more than in a garage. Plan how you will move air out during the coat and the cure, and read the safety sheet for your kit.",
        "Work out the amount with the [epoxy floor coverage calculator](epoxy-floor-coverage-calculator), then follow the sequence in [how to epoxy a garage floor](how-to-epoxy-a-garage-floor). The steps are the same in a basement."
      ]
    },
    {
      title: "Sources",
      body: "Installed prices use the shared rates behind our floor cost calculator, which are U.S. national averages. No major cost guide we checked publishes a separate basement rate, so treat these as planning ranges and confirm them with local quotes.",
      links: [sika, carboline, simiron, vilaEpoxy, vilaPoly, armorCost, homeGuide],
      cards: [
        { title: "Gallons and kits", text: "Turn square feet and coats into gallons and kits for your basement.", slug: "epoxy-floor-coverage-calculator" },
        { title: "Is epoxy right for your floor?", text: "The trade-offs, how long it lasts, and why floors fail.", slug: "epoxy-floor-pros-and-cons" }
      ]
    }
  ],
  faq: [
    { q: "How much does it cost to epoxy a 1,000 sq ft basement?", a: `About ${range(1000, "pro-epoxy")} installed on a dry, sound slab, or ${range(1000, "pro-epoxy", "moisture")} with a vapor barrier. DIY materials run about ${diyRange(1000)}.` },
    { q: "Will epoxy stop moisture coming through a basement floor?", a: "A standard epoxy coat will not. It traps vapor under the film, which is how floors blister and peel. Moisture-tolerant primers exist for that job, and they are chosen and priced separately. Liquid water needs a drainage fix." },
    { q: "Is it cheaper to epoxy a basement or lay vinyl?", a: "It depends on the slab and the products you compare, so get a price for each. Include the moisture work in both quotes, because a damp slab causes trouble under most floor coverings." },
    { q: "How long before I can use the basement?", a: "For Sikafloor-200 at 68°F, allow 24 hours for foot traffic, 3 days for light use, and 7 days for full cure. At 50°F those become 30 hours, 5 days, and 10 days. Your product's sheet takes priority." }
  ],
  generalFaq: [],
  related: ["garage-floor-epoxy-calculator", "epoxy-floor-coverage-calculator", "epoxy-floor-pros-and-cons", "polyaspartic-vs-epoxy", "how-to-epoxy-a-garage-floor"],
  lastmod: pageDate,
  reviewedOn: pageDate
};

// ---- Epoxy Floor Pros and Cons ----
const kitLow = 400 * diyLow;
const kitHigh = 400 * FLOOR_COST_RATES["diy-basic"].high;
const proLow = 400 * FLOOR_COST_RATES["pro-epoxy"].low;
const proHigh = 400 * FLOOR_COST_RATES["pro-epoxy"].high;

export const epoxyFloorProsAndCons = {
  slug: "epoxy-floor-pros-and-cons",
  title: "Epoxy Floor Pros and Cons: How Long It Lasts & Why It Fails",
  h1: "Epoxy Floor Pros and Cons",
  description: "The real pros and cons of epoxy flooring: how long it lasts, why it peels or yellows, what it costs per year, and when another floor is the better choice.",
  eyebrow: "Floor Coating Guide",
  intro: "An epoxy floor can look great for years or start peeling in one. The difference usually comes down to the slab and the prep. This guide covers the trade-offs, the likely lifespan, and how each common failure happens.",
  primaryKeyword: "epoxy floor pros and cons",
  supportingKeywords: ["epoxy flooring pros and cons", "how long does epoxy floor last", "disadvantages of epoxy flooring", "how long does epoxy garage floor last", "epoxy garage floor pros and cons"],
  answer: "Epoxy floors are hard, seamless, easy to clean, and cheaper than most premium coatings. The main drawbacks are yellowing in sunlight, a slippery surface when wet, slow curing, and peeling on damp or badly prepared concrete. A good system can last 10 to 20 years, while thin water-based kits may need recoating in 1 to 3 years.",
  takeaways: [
    "Most early failures start with the concrete: moisture, oil, or a surface left too smooth.",
    "Lifespan depends far more on the system than on the word epoxy.",
    "Standard epoxy discolors in sunlight, so sunlit floors need a UV-stable topcoat.",
    "A cheap kit can still be good value per year if you do the labor and accept recoating."
  ],
  sections: [
    {
      title: "Epoxy floor pros and cons at a glance",
      table: {
        headers: ["Pros", "Cons"],
        rows: [
          ["Seamless surface that wipes clean", "Slippery when wet unless textured"],
          ["Resists oil, salt, and many chemicals once cured", "Standard epoxy yellows under UV"],
          ["Covers stained or worn concrete", "Peels if the slab is damp or poorly prepared"],
          [`Lower cost than polyaspartic: ${rateRange("pro-epoxy")} against ${rateRange("pro-poly")} per sq ft`, "Takes days to cure, not hours"],
          ["Wide choice of solid, flake, and metallic finishes", "Hard and cold underfoot"],
          ["Bright surface reflects light", "Removing it later means grinding"]
        ]
      }
    },
    {
      title: "How long does an epoxy floor last?",
      body: "A well-installed epoxy floor usually lasts 10 to 20 years, according to Bob Vila, while water-based coatings may need reapplying every 1 to 3 years. Published figures vary a lot, and some sellers quote them to favor their own product. Use these as rough ranges for planning.",
      table: {
        headers: ["System", "Expected life", "Source"],
        rows: [
          ["Water-based or big-box DIY kit", "1 – 3 years", "Bob Vila; ArmorGarage"],
          ["Solid epoxy, professionally installed", "10 – 20 years", "Bob Vila"],
          ["Polyaspartic or polyurea system, for comparison", "10 – 20+ years", "HomeGuide 2026"]
        ],
        note: "A separate Bob Vila article gives epoxy 5 to 10 years, which shows how loose these numbers are. A heavily used garage with sun on the floor sits at the short end."
      }
    },
    {
      title: "What makes an epoxy floor last longer?",
      points: [
        "Thickness: a thin water-based film wears through sooner than a full-build system. See typical build by system in our [epoxy floor thickness guide](epoxy-floor-thickness).",
        "Prep: Sika calls for an open profile like fine sandpaper, and warns that smooth concrete can lead to peeling.",
        "Topcoat: a clear UV-stable or abrasion-resistant topcoat takes the wear and protects the color.",
        "Care: sweep off grit, clean up road salt and spills, and use a mat under a car that drips or a jack stand that scrapes."
      ]
    },
    {
      title: "Why do epoxy floors fail?",
      body: "Most failures have a known cause. The fixes below follow one manufacturer's published kit instructions, so your own product's sheet may set different limits.",
      table: {
        headers: ["What you see", "Likely cause", "How to prevent it"],
        rows: [
          ["Peeling or lifting sheets", "Moisture, or concrete left too smooth", "Run a moisture test and grind to a CSP 3 profile"],
          ["Black spots or wet, uncured patches", "Oil left on the concrete", "Degrease before sanding or grinding"],
          ["Bubbles and pinholes", "Coating in direct sun or as the slab warms", "Coat as temperatures fall, out of direct sun"],
          ["Sticky or uneven areas", "Coating outside the temperature or humidity range", "Stay within 50 – 86°F and 80% humidity"],
          ["White stains or lost gloss", "Water on the coat too soon", "Keep it dry for at least 72 hours"],
          ["Yellow or amber color", "UV exposure", "Add a UV-stable topcoat"],
          ["Tire marks or coating lifting under tires", "Driving on it too soon, or a thin coat softened by hot tires", "Wait out the vehicle cure and choose a tougher system"],
          ["Visible lap marks", "Letting the wet edge dry", "Mix in sections and keep a wet edge"]
        ],
        note: "Limits are from the Sikafloor-200 Garage Epoxy Kit instruction sheet, except the tire row, which is general installer guidance."
      }
    },
    {
      title: "Is an epoxy floor slippery?",
      body: "A smooth, glossy epoxy floor can be slippery when wet. Flake gives more texture, and an anti-slip additive in the topcoat adds grip. This matters most near garage doors, in laundry areas, and at the foot of stairs. Bob Vila notes that polyaspartic has the same issue, and an abrasive topcoat may cost extra.",
      points: [
        "A full flake broadcast is the easiest way to add texture. The [epoxy flake calculator](epoxy-flake-calculator) gives the pounds and boxes to order.",
        "Test a sample if you can. More texture grips better, but it also holds more dirt."
      ]
    },
    {
      title: "What does an epoxy floor cost per year?",
      body: `Divide the price by the years you expect. For a 400 sq ft garage, a basic kit at ${usd(kitLow)} – ${usd(kitHigh)} and a professional floor at ${usd(proLow)} – ${usd(proHigh)} can come out closer than the sticker prices suggest. The kit needs your labor every time, and the pro floor only pays off if it reaches its full life.`,
      table: {
        headers: ["Option", "Price for 400 sq ft", "If it lasts", "Cost per year"],
        rows: [
          ["Basic DIY kit", `${usd(kitLow)} – ${usd(kitHigh)}`, "3 years", `${usd(kitLow / 3)} – ${usd(kitHigh / 3)}`],
          ["Pro epoxy", `${usd(proLow)} – ${usd(proHigh)}`, "10 years", `${usd(proLow / 10)} – ${usd(proHigh / 10)}`],
          ["Pro epoxy", `${usd(proLow)} – ${usd(proHigh)}`, "20 years", `${usd(proLow / 20)} – ${usd(proHigh / 20)}`]
        ],
        note: "Materials only for the kit. Your time, tools, and any grinder rental are extra. Get a price for your own floor in the [epoxy garage floor cost calculator](garage-floor-epoxy-calculator)."
      }
    },
    {
      title: "When is epoxy the wrong floor?",
      points: [
        "The slab is damp or floods. Epoxy traps vapor, and Bob Vila notes that solid epoxy is not recommended for high-moisture areas. Our [basement epoxy floor cost guide](basement-epoxy-floor-cost) covers the tests.",
        "The floor is outdoors. Sika limits its kit to indoor use, and standard epoxy discolors in the sun.",
        "The garage gets strong sun and you want no color change. Look at [polyaspartic vs epoxy](polyaspartic-vs-epoxy) first.",
        "You need the space back within a day. Most epoxy needs about three days before vehicles.",
        "You want a soft or warm floor. Epoxy is a hard coating with no cushion or insulation."
      ]
    },
    {
      title: "Sources",
      body: "Failure causes and limits come from a manufacturer's instruction sheet. Lifespans are from consumer guides and are labeled where a seller is the source. We found no independent long-term field study of residential floors.",
      links: [sika, vilaEpoxy, vilaPoly, armorCost, homeGuide],
      cards: [
        { title: "Price your floor", text: "See the installed range for your floor size and slab condition.", slug: "garage-floor-epoxy-calculator" },
        { title: "Doing it yourself?", text: "The full sequence from moisture test to first drive.", slug: "how-to-epoxy-a-garage-floor" }
      ]
    }
  ],
  faq: [
    { q: "What are the disadvantages of epoxy flooring?", a: "The main ones are yellowing in sunlight, a slippery surface when wet, days of cure time, sensitivity to moisture and poor prep, and a hard, cold feel underfoot. Removing it later takes grinding." },
    { q: "How long does an epoxy garage floor last?", a: "About 10 to 20 years for a well-installed solid system, and as little as 1 to 3 years for a thin water-based kit. Heavy use and strong sun shorten that." },
    { q: "Does epoxy flooring crack?", a: "The coating follows the concrete, so a moving crack in the slab can show through. Repair cracks before coating. Very hard, brittle coatings can also chip under dropped tools." },
    { q: "Can a worn epoxy floor be recoated?", a: "Yes, if the old coat is still bonded. Sika says to sand the whole surface until the gloss is gone, vacuum the dust, and test adhesion and compatibility first. Peeling areas need to come off." },
    { q: "Is epoxy flooring worth it?", a: "Usually yes for a dry garage, workshop, or basement where easy cleaning matters. It is a poor buy on a damp slab, and a sunlit floor needs a UV-stable topcoat." }
  ],
  generalFaq: [],
  related: ["polyaspartic-vs-epoxy", "garage-floor-epoxy-calculator", "basement-epoxy-floor-cost", "how-to-epoxy-a-garage-floor", "epoxy-floor-thickness"],
  lastmod: pageDate,
  reviewedOn: pageDate
};

// ---- How to Epoxy a Garage Floor ----
const kitCoverage = 200; // Sikafloor-200：每套约 200 sq ft（8 mil）
const coats = 2;
const kitWaste = 1.1; // 与地坪计算器常用的 10% 余量一致
const kitsFor = (area) => Math.ceil((area * coats * kitWaste) / kitCoverage);

export const howToEpoxyGarageFloor = {
  slug: "how-to-epoxy-a-garage-floor",
  title: "How to Epoxy a Garage Floor: Steps, Timeline & Materials",
  h1: "How to Epoxy a Garage Floor",
  description: "How to epoxy a garage floor step by step: moisture test, grinding, mixing, coating, and cure times by temperature, with a timeline and a materials list.",
  eyebrow: "Floor Coating Guide",
  intro: "Most of the work happens before you open the kit. This guide walks through the full sequence and the numbers that matter. Times and limits come from Sika's published Sikafloor-200 garage kit instructions, used here as a worked example. The sheet for your own kit takes priority.",
  primaryKeyword: "how to epoxy a garage floor",
  supportingKeywords: ["how to epoxy garage floor", "how to apply epoxy floor coating", "how to prep concrete for epoxy", "how to epoxy basement floor"],
  answer: "Test the slab for moisture, then degrease it, grind it to a fine-sandpaper texture, and repair the cracks. Mix one kit at a time, brush the edges, roll on the first coat, and recoat within the label's window. Plan on about four days of work, then about three more before you park on it.",
  takeaways: [
    "Run the moisture test first. A damp slab can make the rest of the work a waste.",
    "Oil has to come off before you grind, or the grinder spreads it across the floor.",
    "At 68°F this kit gives you 8 to 24 hours to recoat. Missing that means sanding.",
    "Cooler garages add days. At 50°F full cure takes 10 days instead of 7."
  ],
  sections: [
    {
      title: "What you need",
      body: "Sika lists these supplies for its kit. Add degreaser, crack filler, painter's tape, and a stopwatch or phone timer.",
      points: [
        "Epoxy kits, resin and hardener. See the table below for the count.",
        "Moisture meter or an 18 × 18 in plastic sheet and duct tape.",
        "Thermometer for the slab and the air.",
        "Floor grinder or sander, plus a vacuum. Rental usually runs $100 to $200 a day.",
        "Mixing drill with a paddle. Sika says not to mix by hand with a stir stick.",
        "Paint brush for the edges and a 5 mm lint-free roller with an extension pole.",
        "Mask, gloves, and safety glasses. Check the safety sheet for your kit, since some products call for a respirator."
      ]
    },
    {
      title: "How many kits for your garage?",
      body: `Kit counts depend on the coverage printed on your label. This table uses ${kitCoverage} sq ft per kit per coat, ${coats} coats, and 10% extra. For a 400 sq ft garage that is 400 × ${coats} × 1.1 ÷ ${kitCoverage} = 4.4, so buy ${kitsFor(400)} kits. Enter your own label coverage in the [epoxy floor coverage calculator](epoxy-floor-coverage-calculator).`,
      table: {
        headers: ["Garage", "Area", "Kits for 2 coats"],
        rows: garages.map(([label, area]) => [label, `${area} sq ft`, `${kitsFor(area)} kits`]),
        note: "Rough or porous concrete soaks up more on the first coat. For a flake floor, add the chips with the [epoxy flake calculator](epoxy-flake-calculator)."
      }
    },
    {
      title: "Sample timeline at 68°F",
      table: {
        headers: ["Day", "Work", "Why it takes this long"],
        rows: [
          ["Day 1", "Empty the garage, degrease, tape down the moisture test", "The plastic sheet needs at least 24 hours"],
          ["Day 2", "Check the test, grind, repair cracks", "Filler has to cure before you sand it flush"],
          ["Day 3", "Vacuum, coat the edges, roll the first coat", "Start when the slab is cool and shaded"],
          ["Day 4", "Roll the second coat", "Recoat 8 to 24 hours after the first coat"],
          ["Day 5", "Walk on it", "24 hours after the last coat"],
          ["Day 7", "Light vehicles", "72 hours after the last coat"],
          ["Day 11", "Full chemical resistance", "7 days after the last coat"]
        ],
        note: "Based on the Sikafloor-200 kit at 68°F. A damp slab or a failed test stops the schedule at Day 2."
      }
    },
    {
      title: "Step 1: Check the slab and the weather",
      points: [
        "Slab age: Sika prefers a new slab to cure for at least 90 days before coating.",
        "Moisture: tape an 18 × 18 in plastic sheet to the concrete and wait at least 24 hours. Condensation or darker concrete means it is too wet to coat. A meter reading should be 4% or less for this kit.",
        "Weather: stay between 50°F and 86°F with humidity no higher than 80%. Outside that range you risk wet spots and poor adhesion.",
        "Old coatings: test adhesion and compatibility first. Anything loose has to come off, and the rest needs sanding until no gloss remains.",
        "A slab that fails has to be solved before you buy a kit. The [basement epoxy floor cost guide](basement-epoxy-floor-cost) covers moisture testing and vapor barriers in more depth."
      ]
    },
    {
      title: "Step 2: Clean and degrease",
      body: "Sweep and vacuum, then treat every oil and grease stain with a concrete degreaser. Do this before you grind, because sanding spreads the oil across the floor. Oil left in the concrete causes poor adhesion, black spots, and wet, uncured patches. If you rinse with water, let the slab dry fully before moving on."
    },
    {
      title: "Step 3: Grind the concrete",
      body: "The surface needs an open profile. Sika specifies ICRI CSP 3, which feels like fine sandpaper, and warns that smooth concrete can lead to peeling later. Its kit calls for mechanical prep with a sander or grinder, which you can usually rent.",
      points: [
        "Some budget kits allow acid etching instead. Follow your label, but grinding gives a more reliable surface and removes old sealers that acid will not.",
        "Drop water on the ground slab. If it beads, a sealer or smooth patch is still there.",
        "Pay attention to the edges, since a floor grinder will not reach them. Use a hand grinder or sander.",
        "Wear a dust-rated mask and use a vacuum shroud. Concrete dust is harmful to breathe."
      ]
    },
    {
      title: "Step 4: Repair cracks and holes",
      body: "Fill cracks and holes with a crack filler made for concrete. Once it has cured, sand it level with the slab, then sweep and vacuum everything again. Any dust left behind ends up in the coating. A crack that keeps moving will likely show through later, so expect some repairs to be cosmetic."
    },
    {
      title: "Step 5: Plan your batches",
      points: [
        "Mix only once the prep is finished and the moisture result is acceptable.",
        "Split the floor into sections, one per kit, and mark them with tape or chalk at the walls. This keeps each kit spread to the right thickness.",
        "Never mix two kits at once. Sika warns that the working time is limited.",
        "Coat as the day cools and out of direct sun. Sika warns that rising temperature makes concrete off-gas, which causes bubbles and pinholes.",
        "Tape the line at the garage door if the slab runs past it, and pull the tape after about 45 minutes, before the coating sets.",
        "Plan your exit. Start in the far corner and finish at the door."
      ]
    },
    {
      title: "Step 6: Mix the resin and hardener",
      body: "Stir each part on its own first so it is uniform. Add the hardener to the resin at the ratio on your label, then mix with a drill and paddle for the time the label gives. Start coating right away. Mixed epoxy heats up faster in a pail than on the floor: Sika's kit starts to gel after 30 minutes in the pail, against about 45 minutes of working time on the floor at 77°F."
    },
    {
      title: "Step 7: Brush the edges and roll the first coat",
      points: [
        "Brush a band of coating along the walls in the far corner.",
        "Pour a 1 to 2 in wide ribbon along the back of the section.",
        "Spread it with the roller to the label thickness. This kit targets 8 mils, or about 200 sq ft per kit.",
        "Back-roll with light pressure to remove puddles, ridges, and roller marks.",
        "Keep a wet edge. If the next batch comes too late, the overlap can show in the finished floor.",
        "Check your spread rate as you go. Our [epoxy floor thickness guide](epoxy-floor-thickness) shows how to convert wet film to dry film."
      ]
    },
    {
      title: "Step 8: Add flake, if you want it",
      body: "Flake goes into the wet coat, so have it ready before you start rolling. Throw it upward and let it fall evenly. A full broadcast keeps going until the wet coat cannot hold any more. A partial broadcast leaves the base color showing. A full broadcast needs scraping smooth once cured, and a clear topcoat over the chips. Use the [epoxy flake calculator](epoxy-flake-calculator) to work out the pounds and boxes."
    },
    {
      title: "Step 9: Apply the second coat in the window",
      body: "Roll the second coat the same way, inside the recoat window on your label. If you miss it, the surface has to be sanded until the gloss is gone and vacuumed clean before you continue. Temperature moves the window, as this table from Sika's sheet shows.",
      table: {
        headers: ["Slab temperature", "Recoat (min / max)", "Foot traffic", "Light vehicles", "Full cure"],
        rows: [
          ["50°F", "16 / 48 hours", "30 hours", "5 days", "10 days"],
          ["68°F", "8 / 24 hours", "24 hours", "3 days", "7 days"],
          ["86°F", "6 / 24 hours", "16 hours", "2 days", "5 days"]
        ],
        note: "Sikafloor-200 Garage Epoxy Kit. Measure the slab, not just the air. Concrete stays cold well after the air warms up."
      }
    },
    {
      title: "Step 10: Let it cure",
      points: [
        "Keep water, damp, and condensation off the floor for at least 72 hours, or it can show white stains or lose its gloss.",
        "Do not drive on it early. Give it the full vehicle time on your label, and longer in a cold garage.",
        "Wait for the full cure before you clean with chemicals or leave oil spills on it.",
        "Clean tools straight away with the solvent your sheet names. Cured epoxy can only be removed mechanically."
      ]
    },
    {
      title: "Should you do it yourself?",
      body: `Materials for a 400 sq ft garage run about ${diyRange(400)}. A professional epoxy floor runs ${range(400, "pro-epoxy")}, and most of that labor goes into prep. Bob Vila's advice is that applying epoxy is the easy part and preparing the floor is the hard part.`,
      points: [
        "Do it yourself if the slab is dry, sound, and uncoated, and you can keep the garage empty for about a week.",
        "Hire a pro if the slab fails a moisture test, has an old coating, or needs major repairs. Check a quote against the [epoxy garage floor cost calculator](garage-floor-epoxy-calculator).",
        "Compare finishes first. [Polyaspartic vs epoxy](polyaspartic-vs-epoxy) explains why polyaspartic is a harder DIY job, and the [epoxy floor pros and cons](epoxy-floor-pros-and-cons) cover what can go wrong."
      ]
    },
    {
      title: "Sources",
      body: "Steps, limits, and timing follow Sika's instruction sheet for one DIY kit, used as a worked example. We publish planning tools and have not tested this product. Other kits differ, sometimes a lot, so follow your own product's instructions and safety sheet.",
      links: [sika, carboline, vilaEpoxy, concreteNetwork],
      cards: [
        { title: "Gallons and kits", text: "Enter your floor and label coverage to get the amount to buy.", slug: "epoxy-floor-coverage-calculator" },
        { title: "Two-car garage", text: "Quick kit and gallon numbers for the most common garage size.", slug: "two-car-garage-epoxy-calculator" }
      ]
    }
  ],
  faq: [
    { q: "How long does it take to epoxy a garage floor?", a: "Plan on about four days of work: a day for cleaning and the moisture test, a day for grinding and repairs, and two days of coating. At 68°F, add three days before light vehicles and seven before full cure." },
    { q: "Do you have to grind concrete before epoxy?", a: "Sika's kit requires mechanical prep to a CSP 3 profile. Some budget kits allow acid etching. Grinding is the safer choice, and it is the only way to remove an old sealer or a thin coating." },
    { q: "How cold is too cold to epoxy a garage floor?", a: "Sika's kit stops at 50°F, and Concrete Network says epoxy should not go down below that. Check the slab temperature with a thermometer, because concrete can be colder than the air." },
    { q: "How long before you can drive on an epoxy floor?", a: "Sika's kit needs a minimum of 72 hours at 68°F, or 5 days at 50°F. Other products differ, so use the vehicle time on your label." },
    { q: "Can you epoxy over a painted or coated garage floor?", a: "Only if the old coating is firmly bonded and compatible. Sand the whole surface until the gloss is gone, vacuum, and test a small area. If it peels, remove it first." },
    { q: "Do you need a primer?", a: "It depends on the system. Sika's kit goes straight onto prepared concrete, while many professional systems start with a primer. A moisture-tolerant primer is a separate product for damp slabs." }
  ],
  generalFaq: [],
  related: ["epoxy-floor-coverage-calculator", "two-car-garage-epoxy-calculator", "epoxy-flake-calculator", "polyaspartic-vs-epoxy", "epoxy-floor-pros-and-cons"],
  lastmod: pageDate,
  reviewedOn: pageDate
};
