import { plannerText } from "../assets/planner-text.js";

export const remediationRedirects = {
  "epoxy-calculator-metric": "epoxy-calculator",
  "epoxy-rectangle-calculator": "epoxy-calculator",
  "epoxy-circle-calculator": "epoxy-calculator",
  "epoxy-pour-calculator": "deep-pour-epoxy-calculator",
  "round-epoxy-table-calculator": "table-top-epoxy-calculator",
  "bar-top-epoxy-calculator": "table-top-epoxy-calculator",
  "epoxy-flood-coat-calculator": "table-top-epoxy-calculator",
  "pt-br/calculadora-volume-resina-epoxi": "pt-br",
  "pt-br/quanta-resina-epoxi-preciso": "pt-br"
};

export const redirectPresets = {
  "epoxy-calculator-metric": { unit: "metric" },
  "epoxy-rectangle-calculator": { shape: "rectangle" },
  "epoxy-circle-calculator": { shape: "round" },
  "round-epoxy-table-calculator": { dimensionMode: "dimensions", shape: "round" }
};

const ratioSource = { label: "Crosslink Technology: volume and weight mixing ratios", url: "https://crosslinktech.com/support/trouble-shooting-guide/mix-ratio-related-problems.html" };
const layerSource = { label: "MAS Deep Pour: technical bulletin and product conditions", url: "https://masepoxies.com/products/deep-pour-epoxy-resin" };
const coatingSource = { label: "PrimaLoc: product-specific layer and recoat instructions", url: "https://primaloc.helpscoutdocs.com/article/789-maximum-thickness-depth" };

const examples = {
  "epoxy-calculator": ["Rectangle measurements and a checkable order", "Measure the finished inside length L, width W and filled depth d. A 48 × 18 × 1.25 in cavity is 1,080 in³, or 4.6753 US gal. An 8% allowance gives 5.0494 gal. Switching to metric converts the same geometry to 121.92 × 45.72 × 3.175 cm; it does not change the physical quantity. Part A/B and lift limits stay unconfirmed until you enter the exact product information."],
  "river-table-epoxy-calculator": ["What equal-length segments mean", "The segment mode divides the full channel length into equal sections and uses one representative width for each section. For a 72 in channel, widths of 4.5, 6 and 7.5 in have a 6 in mean. At 1.5 in depth the raw amount is 648 in³ = 2.8052 gal. The example 12% waste, 8% seepage and 5% seal-coat allowances add 25 percentage points, giving 3.5065 gal. These are editable budgeting assumptions, not measured loss rates. For unequal sections, first calculate a length-weighted mean width or calculate each section separately."],
  "deep-pour-epoxy-calculator": ["Total order, lift count and batch count are different", "A 48 × 14 × 2.5 in cavity holds 7.2727 gal before waste, or 8 gal with the example 10% allowance. If your product actually permits a 1 in layer under your conditions, the depth calculation gives three lifts. If it also specifies a maximum mixed batch, enter that separately: a lift can require more than one batch. Neither the order quantity nor a computed lift count establishes a safe mixing volume or recoat schedule."],
  "table-top-epoxy-calculator": ["Separate the surface from the edges", "For a rectangular 72 × 24 in top, area is 12 ft². A theoretical 1/8 in wet layer is 216 in³ = 0.9351 gal before edges and losses. The example 8% waste plus 4% edge/runoff allowance gives 1.0473 gal. A round 24 in top has 3.1416 ft² instead: choose the round dimensions mode. If you know a product's published coverage, switch to label coverage rather than assuming a wet thickness. Raised edges, end grain and an earlier seal coat need their own measurements."],
  "countertop-epoxy-calculator": ["Plan countertop sections before summing them", "Measure each straight countertop run without counting an overlapping corner twice. Two 6 × 2 ft runs give 24 ft² only if the runs do not overlap. A 1/8 in theoretical finish over that area is 1.8701 gal before losses. Add separate quantities for a backsplash, exposed edges or substrate preparation according to the selected system. The allowance field is a percentage reserve, not a measured vertical-edge model."],
  "epoxy-coverage-calculator": ["Check the units before adding a reserve", "One square meter at 1 mm wet thickness is exactly 1 L geometrically. Therefore 10 m² at 1 mm and one coat needs 10 L before allowances; 10% waste and zero edge allowance gives 11 L. A 3 L mixed-yield kit would require four kits. A product coverage rate is a different input: it incorporates that product's stated application conditions and should not be added as a second volume calculation."],
  "epoxy-seal-coat-calculator": ["Use a coverage rate for the seal coat itself", "The example 42.7 ft² per mixed gallon is an illustrative input close to 3 fl oz per ft². On a 16 ft² top, 16 ÷ 42.7 = 0.3747 gal before waste. It is not a recommended rate for an unspecified product or substrate. Use the exact seal-coat label rate and account for porous end grain separately. Calculate the later flood coat as another task; do not use flood-coat thickness as a seal-coat specification."],
  "void-fill-epoxy-calculator": ["A cavity estimate is not its bounding box", "A rectangular 6 × 2.5 × 1 in cavity contains 15 in³ = 245.8 mL. With the example 15% waste and 8% sanding overfill it becomes 302.3 mL. A natural crack can be much smaller than the surrounding rectangular box. For a measured mold or an irregular cavity with known mixed capacity, use the mold calculator. Verify any measuring or leak-test method is compatible with the wood, resin and preparation instructions."],
  "epoxy-floor-coverage-calculator": ["Read mixed yield and coverage together", "For 400 ft², two equal coats and a label rate of 160 ft² per mixed gallon per coat, raw quantity is 400 × 2 ÷ 160 = 5 gal. A 7% reserve gives 5.35 gal; 2 gal mixed-yield kits require three kits. This model repeats one product at one rate. If a primer, color coat and clear coat have different rates or prices, run each product separately and add their purchase plans."],
  "two-car-garage-epoxy-calculator": ["A garage-size preset is still a measured floor", "The 20 × 20 ft example is 400 ft², not a universal two-car garage size. At 160 ft² per mixed gallon and two coats it needs 5 gal raw or 5.35 gal after 7% waste. A 24 × 24 ft garage is 576 ft² and needs 7.704 gal with those same assumptions. Measure your floor, subtract areas that will not be coated, and use each product's own coverage. An installed quotation is a separate cost calculation."],
  "resin-mold-calculator": ["Choose geometry or an actual known mold capacity", "A simple 12 × 8 × 1 cm rectangular cavity holds 96 mL before waste. A mold with curved corners or inserts may hold less. If the supplier gives a mixed volume, use known capacity mode; if you measure it, follow a method compatible with the mold and resin. Six 50 mL cavities are 300 mL raw and 324 mL at 8% waste. Kit yield is the combined mixed volume, not the bottle size of Part A alone."],
  "resin-coaster-calculator": ["A six-piece coaster batch", "One theoretical round coaster 4 in in diameter and 1/4 in deep holds π × 2² × 0.25 = 3.1416 in³, or 51.48 mL. Six identical coasters need 308.89 mL raw and 333.60 mL with 8% waste. Square mode uses the actual inside length and width. Curved rims, raised details and inserts change the cavity: use known mold capacity when geometry is not a good match. The calculator reports the batch in mL so a small purchase is not hidden by gallon rounding."],
  "resin-jewelry-calculator": ["Count cavities rather than using a large rectangular box", "For irregular jewelry molds, known mixed capacity is usually a clearer planning input than outside dimensions. As a hypothetical example, ten cavities requiring 3 mL each need 30 mL raw; at 15% waste that is 34.5 mL. Replace the capacity with your supplier's value or a compatible measurement. Findings, inclusions and sprues can change the actual volume. This is a volume plan, not a weight or cure-time estimate."],
  "resin-dice-calculator": ["Cube blanks and polyhedral dice are not interchangeable", "Cube mode estimates identical cubic blanks only. A 16 mm side is 1.6 cm, so one full cube contains 4.096 mL; seven identical cubes contain 28.672 mL raw or 32.113 mL with 12% waste. A d4, d8, d10, d12 or d20 mold does not have that volume merely because a listing says 16 mm. For those molds or a complete set, enter its known mixed capacity and set the count to the number of identical molds or sets."],
  "resin-tray-calculator": ["Decide whether you are filling a tray mold or coating a tray", "A rectangular 12 × 18 in surface covered by 1/8 in of resin has a theoretical volume of 27 in³ = 442.45 mL. A tray casting with raised walls is a different cavity. Its outside length × width × height overestimates the resin where the tray has an empty center. Use a supplier's mixed capacity or a compatible measured cavity value for such molds; use the surface coating tool when applying a thin layer to an existing tray."],
  "sphere-resin-calculator": ["Diameter controls the volume cubically", "A solid 4 cm diameter sphere has volume 4π × 2³ ÷ 3 = 33.510 mL. Ten identical spheres with 10% waste need 368.61 mL. Doubling the diameter makes eight times the volume, not twice. A half-sphere or hollow insert is not a full sphere; use the actual cavity capacity for those shapes. Confirm the product's mass, depth and temperature limits before casting."],
  "cylinder-resin-calculator": ["Measure the inside diameter and filled height", "A solid cylinder 3 cm in inside diameter and 5 cm high contains π × 1.5² × 5 = 35.343 mL. Four such pieces with 10% waste need 155.51 mL. This model is solid: a tumbler wall or hollow insert needs its inside void subtracted, or a known mixed capacity. It does not estimate an outside coating from a full solid cylinder."],
  "cube-resin-calculator": ["Use one consistent side length", "A 4 cm cube contains 64 cm³ = 64 mL. Two identical cubes with 12% waste require 143.36 mL. A rounded or beveled mold contains less than a sharp-cornered cube with the same outside size. Cube geometry is a planning approximation; known cavity capacity is preferable when available. The quantity field counts identical filled pieces, not unrelated dice shapes."],
  "epoxy-cost-calculator": ["Avoid adding the same allowance twice", "If the incoming quantity is already the recommended purchase amount from another calculator, set the waste buffer here to zero. For example, 5.35 gal at an illustrative $62 per mixed gallon is $331.70 of resin. A 2 gal mixed-yield kit means three kits and 6 gal purchased; compare that actual kit purchase with the continuous-volume material estimate. Tax, delivery, tools and labor are separate unless included in your price input."],
  "resin-art-pricing-calculator": ["A selling price that accounts for fees and profit", "The calculator prices one successful finished piece. Direct cost includes resin, supplies, packaging, labor and overhead. Expected failures increase cost per successful piece by dividing by 1 minus the failure rate. Selling fees are assumed to be a percentage of gross selling price plus the entered fixed fee. Profit margin is profit divided by selling price. If your target is markup on cost instead, convert the target or use a separate markup calculation; a 25% margin is not a 25% markup."]
};

const guideNotes = {
  "how-much-epoxy-do-i-need": "Start with the actual measuring task: cavity dimensions for casting, area and wet thickness for a surface, or the product's stated coverage for a floor. Keep the raw result separate from the reserve and the amount rounded up to complete kits. The calculator now accepts a confirmed product ratio and kit mixed yield; it does not infer a ratio from the project name.",
  "how-much-epoxy-do-i-need-for-a-river-table": "The river tool's equal-length segment calculation is a width average, not a scan of the live edge. Divide a channel into comparable lengths, record representative widths, and check for depth changes. Do not count the seal coat twice if it was already included in a separate product calculation. The editable seepage and seal-coat percentages are planning inputs.",
  "how-to-measure-a-river-table-for-epoxy": "Use L for the full channel length and w₁, w₂, w₃ for widths at representative equal-length sections. If the sections have different lengths, use Σ(length × width) divided by total length, or calculate each separately. Width sampling cannot reveal hidden voids or a sloping mold floor; those require their own measured allowance.",
  "deep-pour-vs-table-top-epoxy": "Selecting a resin category does not confirm its A/B ratio or allowable lift. The planning tools now leave these unknown until you supply product information. Read the technical sheet for the exact hardener combination and the permitted casting volume and temperature, then use the stated limits for that product only.",
  "epoxy-waste-factor-guide": "A reserve percentage changes the purchase plan, not the cavity geometry or the manufacturer's mix ratio. If raw volume is 1 L, 8% waste plus a separate 5% allowance gives 1.13 L when both are percentages of raw volume. Applying 5% to 1.08 L instead gives 1.134 L. The calculator states which additive convention it uses.",
  "epoxy-coverage-chart": "The wet-film geometry chart and a manufacturer's spread rate answer different questions. One m² at one mm is one liter of wet material before waste. A product label may specify a spread rate for a particular coat, surface and solids content. Choose one model for that product; do not treat both as separate amounts to add together.",
  "epoxy-mixing-ratio-guide": "The calculator's ratio selector refers to the ratio on your product label. An unconfirmed ratio stays unconfirmed. Weight mode does not split a geometric volume into component masses: you need the manufacturer's weight quantities or appropriate component density data. Purchasing a full matched kit is also different from mixing the full kit at once.",
  "river-table-epoxy-cost": "Distinguish the resin order from each batch. A budget may cover several complete kits even though product limits require smaller batches and staged lifts. Retain the per-kit price and mixed yield alongside the continuous price per liter/gallon; the rounded purchase amount can cost more than the exact geometric estimate.",
  "epoxy-countertop-cost": "List the horizontal top, exposed edges and any backsplash as separate measured areas. A resin-only estimate is not a countertop replacement quotation. When comparing supplier or installer prices, write down whether primer, pigments, clear topcoat, substrate repair and labor are included so that the scopes match.",
  "epoxy-bar-top-cost": "A long bar top can have substantial front and end edges relative to its top area. An illustrative 12 × 2 ft top has 24 ft² of horizontal area; three exposed 1.5 in-deep edges totaling 16 ft add another 2 ft² of vertical area before accounting for runoff. The percentage allowance is a reserve, not a prediction of how much will stay on those edges.",
  "epoxy-cost-per-square-foot": "The interactive estimate below uses your own area, product price and either wet thickness or label coverage. Its primary result is cost per ft² or m² and the result panel also gives total mixed quantity and total budget. Additional cost per area is optional and comes from you; it is not an estimate of local installer labor.",
  "how-much-epoxy-per-square-foot": "At 1/8 in, one ft² holds 18 in³ = 0.077922 US gal, or 9.974 fl oz, before losses. At 1/16 in those numbers halve. For a floor label rate, use the floor quantity calculator instead; a tabletop flood thickness is not a universal floor specification.",
  "how-much-does-a-gallon-of-epoxy-cover": "The geometry inversion is area in ft² = 231 ÷ (144 × thickness in inches). At 1/8 in that is 12.833 ft² before losses. A 10% allowance reduces the area that a fixed purchased gallon can cover to about 11.667 ft² under that geometric model. Use label coverage when the product supplies one for your application.",
  "epoxy-pour-depth-guide": "Enter the verified product limit in the deep-pour tool rather than accepting a generic depth. Layer count is a depth calculation. A limit on the mixed amount creates a separate batch count, and neither automatically supplies a recoat window or permission to mix an entire project order in one container.",
  "maximum-epoxy-pour-depth": "Record the product name, hardener, source URL, allowed volume and ambient conditions with the depth limit. If any of those conditions is missing, a general calculator cannot resolve it by project type. The calculator therefore continues to calculate total quantity while leaving the execution limit unconfirmed.",
  "seal-coat-vs-flood-coat": "The seal-coat tool now works from a product coverage rate. The surface coating tool can work from area and wet thickness or from label coverage. Keep the two material estimates separate and apply the actual recoat instructions; entering the same thickness for both does not establish that both applications require the same amount.",
  "how-to-prevent-epoxy-leaks": "The diagram in the river measurement guide can help identify the channel perimeter, corners and joins that need inspection. A percentage seepage reserve does not make an unsealed mold leak-proof. Follow a compatible inspection or test method and resolve contamination or drying requirements before resin is mixed.",
  "how-to-calculate-epoxy-pour": "Write the unit beside every measurement before multiplying. For a metric cavity, cm × cm × cm gives mL; for inch measurements, divide in³ by 231 for US gallons. Add named allowances to the raw quantity, then round up to the mixed yield of a complete kit. Keep the kit order and the permitted batch size separate.",
  "epoxy-mix-ratio-by-volume-vs-weight": "A ratio is not a loss allowance: changing the reserve changes how much matched resin/hardener you buy, while the product chemistry still determines their ratio. The tool supports a user-confirmed volume ratio or directs you back to the manufacturer's weight quantities. It never substitutes a universal density to infer the component masses.",
  "epoxy-kit-size-guide": "Enter the manufacturer's total mixed yield, not just the Part A bottle capacity. The purchase count uses a ceiling: 5.35 gal required divided by a 2 gal mixed-yield kit means three kits, with 6 gal total nominal yield. A complete kit purchase can be stored and used in permitted smaller batches; it is not a mixing instruction."
};

const localCopy = {
  de: {
    core: ["Rechenbeispiel in Zentimetern", "Eine rechteckige Form mit 120 × 60 × 1 cm fasst 7.2 L. Mit 8% Reserve ergibt das 7.776 L. Innenmaße verwenden; eine Kilogramm-Angabe lässt sich ohne Produktdaten nicht als Literzahl lesen."],
    coverage: ["Fläche und Nassschichtdicke prüfen", "10 m² × 1 mm ergeben geometrisch 10 L. Mit 10% Reserve und ohne weitere Randreserve sind es 11 L. Alternativ die Reichweite des konkreten Produkts pro Schicht verwenden; nicht beide Mengen addieren."],
    cost: ["Materialkosten aus eigenen Produktdaten", "Bei beispielhaften 10 m², 1 mm Nassschicht, 10% Reserve und 28 €/L ergeben sich 11 L, 308 € gesamt und 30.80 €/m². Das ist eine Modellrechnung, kein deutscher Marktpreis. Lohn oder weitere Kosten nur mit eigenen Werten ergänzen."],
    floor: ["Zwei gleiche Schichten planen", "20 m² × 2 Schichten ÷ beispielhafte 8 m²/L ergeben 5 L vor Reserve oder 5.35 L mit 7%. Bei 3 L gemischter Menge pro Set sind zwei Sets nötig. Unterschiedliche Grundierung und Deckschicht getrennt rechnen."],
    note: "Produktdaten und Grenzen", detail: "Mischverhältnis, Reichweite und maximale Schicht- oder Mischmenge stammen vom konkreten Produkt. Preise und Reserven hier sind Eingaben für die Planung, keine bestätigten Marktmittel oder Sicherheitsgrenzen."
  },
  fr: {
    core: ["Un exemple en centimètres", "Une cavité rectangulaire de 120 × 60 × 1 cm contient 7.2 L. Une marge de 8% donne 7.776 L. Mesurez l’intérieur ; une quantité en kilogrammes ne devient pas un volume en litres sans les données du produit."],
    coverage: ["Vérifier surface et épaisseur humide", "10 m² × 1 mm correspondent géométriquement à 10 L. Avec 10% de marge et sans réserve supplémentaire pour les bords, il faut 11 L. Le rendement d’un produit par couche est une autre méthode : ne cumulez pas les deux volumes."],
    cost: ["Calculer avec le prix de votre produit", "Pour des valeurs d’exemple de 10 m², 1 mm, 10% de marge et 28 €/L, le résultat est 11 L, 308 € au total et 30.80 €/m². Ce n’est pas un prix moyen français. La main-d’œuvre doit venir de vos propres montants."],
    floor: ["Prévoir deux couches identiques", "20 m² × 2 couches ÷ un rendement d’exemple de 8 m²/L donnent 5 L avant marge, ou 5.35 L avec 7%. Des kits de 3 L mélangés nécessitent deux kits. Calculez séparément les produits de primaire et finition différents."],
    note: "Données et limites du produit", detail: "Le ratio, le rendement et les limites d’épaisseur ou de volume viennent du produit exact. Les prix et marges sont des données de calcul, pas des moyennes de marché ni des limites de sécurité vérifiées."
  },
  "pt-BR": {
    core: ["Um exemplo em centímetros", "Uma cavidade de 120 × 60 × 1 cm contém 7.2 L. Com sobra de 8%, a compra calculada é 7.776 L. Meça por dentro; uma embalagem em kg precisa do rendimento ou da densidade publicada para virar litros."],
    coverage: ["Conferir área e espessura úmida", "10 m² × 1 mm correspondem a 10 L geométricos. Com 10% de sobra e sem margem extra de borda, são 11 L. O rendimento por demão do produto é outro método; não some os dois volumes para o mesmo serviço."],
    cost: ["Custo de material com os seus dados", "Com entradas ilustrativas de 10 m², 1 mm, 10% de sobra e R$28/L, são 11 L, R$308 no total e R$30.80/m². Não é preço médio brasileiro nem orçamento de instalação. Mão de obra e outros custos precisam de valores seus."],
    floor: ["Planejar duas demãos do mesmo produto", "20 m² × 2 demãos ÷ um rendimento ilustrativo de 8 m²/L dão 5 L antes da sobra, ou 5.35 L com 7%. Com rendimento misturado de 3 L por kit, compre dois kits. Primer e acabamento com rendimentos diferentes são calculados separadamente."],
    note: "Dados e limites do produto", detail: "Proporção A/B, rendimento e limites de espessura ou mistura vêm do produto exato. Preços e margens são entradas de planejamento, não médias de mercado nem limites de segurança verificados."
  },
  es: {
    core: ["Un ejemplo en centímetros", "Una cavidad de 120 × 60 × 1 cm contiene 7.2 L. Con un margen del 8%, son 7.776 L. Mide por dentro; una cantidad en kg necesita el rendimiento o la densidad del producto para convertirse en litros."],
    coverage: ["Comprobar superficie y espesor húmedo", "10 m² × 1 mm equivalen a 10 L geométricos. Con un 10% de margen y sin reserva extra para bordes, son 11 L. El rendimiento por capa es otro método; no sumes ambos volúmenes para el mismo trabajo."],
    cost: ["Coste de material con tus datos", "Con entradas ilustrativas de 10 m², 1 mm, 10% de margen y 28 €/L, son 11 L, 308 € en total y 30.80 €/m². No es un precio medio español ni una instalación completa. Añade mano de obra solo con tus propios importes."],
    floor: ["Planificar dos capas del mismo producto", "20 m² × 2 capas ÷ un rendimiento ilustrativo de 8 m²/L dan 5 L antes del margen, o 5.35 L con 7%. Con kits de 3 L mezclados, compra dos kits. Calcula por separado imprimación y acabado si sus rendimientos difieren."],
    note: "Datos y límites del producto", detail: "La proporción, el rendimiento y los límites de espesor o mezcla proceden del producto exacto. Los precios y márgenes son entradas del cálculo, no medias de mercado ni límites de seguridad verificados."
  },
  it: {
    core: ["Un esempio in centimetri", "Una cavità di 120 × 60 × 1 cm contiene 7.2 L. Con un margine dell’8%, servono 7.776 L. Misura l’interno; un peso in kg richiede la resa o la densità del prodotto per diventare litri."],
    coverage: ["Verificare superficie e spessore umido", "10 m² × 1 mm corrispondono a 10 L geometrici. Con il 10% di margine e senza riserva extra per bordi, sono 11 L. La resa per strato è un altro metodo: non sommare i due volumi per lo stesso lavoro."],
    cost: ["Costo del materiale con i tuoi dati", "Con valori illustrativi di 10 m², 1 mm, 10% di margine e 28 €/L, sono 11 L, 308 € totali e 30.80 €/m². Non è un prezzo medio italiano né una posa completa. Aggiungi manodopera solo con importi propri."],
    floor: ["Pianificare due strati dello stesso prodotto", "20 m² × 2 strati ÷ una resa illustrativa di 8 m²/L danno 5 L prima del margine, oppure 5.35 L con il 7%. Con kit da 3 L miscelati, acquista due kit. Calcola separatamente fondo e finitura se le rese sono diverse."],
    note: "Dati e limiti del prodotto", detail: "Rapporto A/B, resa e limiti di spessore o miscela vengono dal prodotto esatto. Prezzi e margini sono dati di pianificazione, non medie di mercato né limiti di sicurezza verificati."
  }
};

const costTitles = {
  de: ["Epoxidharz Materialkosten pro m² berechnen", "Epoxidharz: Materialkosten pro m²"],
  fr: ["Prix résine époxy au m² : calcul du matériau", "Calculer le coût de résine époxy au m²"],
  "pt-BR": ["Preço piso epóxi m²: calculadora de material", "Custo de material para piso epóxi por m²"],
  es: ["Precio suelo epoxi m²: calculadora de material", "Coste de material para suelo epoxi por m²"],
  it: ["Prezzo pavimento resina epossidica m²: materiale", "Costo del materiale epossidico per m²"]
};

const diagramCaptions = {
  rectangle: "L and W are inside length and width; d is the filled depth. Keep all three in the same unit. The diagram shows a regular cavity, not hidden voids or inserts.",
  river: "L is the channel length. Each width w₁, w₂, w₃ represents an equal-length section; changing depths or unequal sections need separate calculations.",
  coating: "A is the surface area; t is wet thickness per coat. For label coverage, use the exact product's published spread rate instead of assuming a thickness.",
  round: "D is the inside diameter and d is the filled depth. Measure the resin cavity, not the outside of the mold.",
  sphere: "D is the full inside diameter of a solid spherical cavity. A dome or hollow mold needs its actual capacity instead.",
  cylinder: "D is the inside diameter; h is the filled height. The solid-cylinder model does not subtract an inner void.",
  cube: "s is the inside side length of a cubic blank. Non-cubic dice and irregular molds use known capacity instead."
};

const metricDiagramCaptions = {
  de: ["L × W × d: Innenmaße in derselben Einheit. Keine Hohlräume oder Einsätze automatisch abgezogen.", "A: tatsächliche Fläche. t: Nassschichtdicke pro Schicht. Hersteller-Reichweite ist eine alternative Mengenmethode."],
  fr: ["L × W × d : dimensions intérieures dans la même unité. Les vides et inserts ne sont pas soustraits automatiquement.", "A : surface réelle. t : épaisseur humide par couche. Le rendement fabricant est une méthode de volume différente."],
  "pt-BR": ["L × W × d: medidas internas na mesma unidade. Vazios e inclusões não são descontados automaticamente.", "A: área real. t: espessura úmida por demão. O rendimento do rótulo é outro método de quantidade."],
  es: ["L × W × d: medidas interiores con la misma unidad. Los huecos e insertos no se restan automáticamente.", "A: superficie real. t: espesor húmedo por capa. El rendimiento del producto es otro método de cantidad."],
  it: ["L × W × d: misure interne nella stessa unità. Vuoti e inserti non vengono sottratti automaticamente.", "A: superficie reale. t: spessore umido per strato. La resa del prodotto è un altro metodo di quantità."]
};

function appendSection(page, title, body, links) {
  page.sections = [...(page.sections || []), { title, body, ...(links ? { links } : {}) }];
}

function improvePage(original) {
  const page = { ...original, sections: original.sections ? [...original.sections] : [] };
  const locale = page.locale || "en";
  const type = page.calculatorType;
  if (page.pageType === "calculator") {
    // 整改后新增的页面保留自己更晚的日期
    if (!(page.lastmod > "2026-10-30")) page.lastmod = "2026-10-30";
    page.reviewedOn = page.lastmod;
    if (["coverage", "surface"].includes(type)) page.calculatorType = "coating";
    if (["void-fill", "sphere", "cylinder", "cube"].includes(type)) page.supportsCount = true;
    if (locale !== "en") {
      const copy = localCopy[locale];
      const task = page.hreflangGroup === "costM2" ? "cost" : type === "coverage" ? "coverage" : type === "garage-floor" ? "floor" : "core";
      if (task === "cost") {
        page.calculatorType = "area-cost";
        [page.title, page.h1] = costTitles[locale];
        page.intro = plannerText(locale, "scope");
        page.description = `${page.h1}. ${plannerText(locale, "scope")}`;
        page.answer = undefined;
        page.answerTable = undefined;
        page.resultEyebrow = plannerText(locale, "areaCost");
        page.statLabels = { ...page.statLabels, cost: plannerText(locale, "totalCost") };
        page.compareLabel = plannerText(locale, "quantity");
        page.ui = { ...page.ui, currentRecommendation: plannerText(locale, "areaCost") };
      }
      page.formDefaults = {
        length: task === "floor" ? 5 : 120, width: task === "floor" ? 4 : 60, depth: 1,
        diameter: 10, depthRound: 0.5, surfaceArea: 10, thickness: 1, pricePerGallon: 28,
        ...(task === "coverage" || task === "cost" ? { edgePct: 0 } : {}),
        ...(task === "floor" ? { coats: 2, coverageRate: 8 } : {})
      };
      appendSection(page, ...copy[task]);
      appendSection(page, copy.note, copy.detail);
      page.measurement = { kind: ["coverage", "cost", "floor"].includes(task) ? "coating" : "rectangle", caption: metricDiagramCaptions[locale][task === "core" ? 0 : 1] };
      return page;
    }
    if (page.slug === "resin-coaster-calculator") {
      page.calculatorType = "coaster";
      page.title = "Resin Coaster Calculator: Round, Square & Batch Amounts in mL";
      page.intro = "Enter the inside dimensions and number of identical coaster molds. Compare the raw batch volume, waste allowance and complete kits to buy, with small quantities shown in mL.";
      page.formDefaults = { diameter: 4, depth: 0.25, count: 6 };
      page.note = "Use inside cavity dimensions. The example is six identical round coasters; irregular molds can use a known capacity in the mold calculator.";
      page.bullets = ["Round or square/rectangular inside dimensions.", "Piece count, raw batch quantity and waste-adjusted purchase amount in mL.", "Confirmed product ratio and whole-kit mixed yield can be entered separately."];
      page.faq = [{ q: "Does this calculate a full coaster set?", a: "Yes. Enter the number of identical coasters. Raw and recommended quantities already include that count, so do not multiply the batch result again." }, { q: "Can I calculate square coasters?", a: "Yes. Choose Square / rectangle and enter inside length, width and depth. Irregular cavities can use the mold calculator's known-capacity mode." }, { q: "Does this include every pigment cup or mold detail?", a: "No. The geometric model does not measure raised details, inserts or extra cups. Use a suitable loss allowance or a known mixed cavity capacity for a more representative plan." }];
    }
    if (["resin-mold-calculator", "resin-jewelry-calculator", "resin-tray-calculator"].includes(page.slug)) {
      page.calculatorType = "mold";
      page.defaultUnit = "metric";
      page.priceUnit = "liter";
      page.formDefaults = { length: 12, width: 8, depth: 1, diameter: 10, depthRound: 1, count: 1, pricePerGallon: 28 };
      if (page.slug === "resin-jewelry-calculator") page.formDefaults = { ...page.formDefaults, moldMethod: "capacity", count: 10, capacityMl: 3, wastePct: 15 };
      if (page.slug === "resin-tray-calculator") page.formDefaults = { ...page.formDefaults, moldMethod: "capacity", capacityMl: 442.45 };
      page.note = "Choose inside geometry for a regular cavity, or a known mixed capacity for an irregular mold. Quantity counts identical molds or sets. Example capacities are illustrative.";
      page.bullets = ["Use inside dimensions or a known mixed volume per cavity.", "Count identical molds or sets and add a stated loss allowance.", "Small batches show mL; product limits and complete kit yield stay separate."];
      page.faq = [{ q: "How do I account for inserts or hollow parts?", a: "Dimension mode estimates a full regular shape. Use a known net cavity capacity or a separately measured displacement when inserts or hollow parts change that volume." }, { q: "Should I fill any mold with water to measure capacity?", a: "No universal measuring liquid is suitable for every material. Use a supplier's mixed capacity or a method compatible with the mold, substrate and resin, including its cleaning and drying requirements." }, { q: "Does the result include the number of molds?", a: "Yes. Enter capacity for one cavity or one complete set, then count identical units. The result already includes that count and the selected loss allowance." }];
    }
    if (page.slug === "resin-dice-calculator") {
      page.calculatorType = "dice";
      page.defaultUnit = "metric";
      page.priceUnit = "liter";
      page.title = "Dice Resin Calculator: Mold Capacity, Cube Blanks & Batch mL";
      page.intro = "Calculate identical cubic blanks from a side length, or use the known mixed capacity of a dice mold or set. The cube formula does not represent every polyhedral dice shape.";
      page.formDefaults = { length: 1.6, count: 7, capacityMl: 35, pricePerGallon: 28 };
      page.note = "The default is seven identical 16 mm cubic blanks, not a mixed seven-die polyhedral set. In capacity mode, enter one mold or one set's known capacity and count identical units.";
      page.answer = "A 16 mm cube contains 4.096 mL before waste. Seven identical cubic blanks need 28.672 mL raw, or 32.113 mL with the example 12% waste. For non-cubic dice or a whole polyhedral set, use the mold's known mixed capacity instead of the cube approximation.";
      page.answerHeading = "How much resin does a dice mold need?";
      page.answerTable = { headers: ["Cubic side", "One full cube", "Seven identical cubes + 12%"], rows: [["16 mm", "4.096 mL", "32.113 mL"], ["20 mm", "8 mL", "62.72 mL"], ["25 mm", "15.625 mL", "122.5 mL"]], note: "Theoretical full cubes only, not a seven-shape polyhedral set. Use actual cavity capacity for other molds." };
      page.bullets = ["Cube geometry for identical cubic blanks only.", "Known mold capacity for non-cubic dice or complete sets.", "Piece or set count, small-batch mL and explicit loss allowance."];
      page.faq = [{ q: "Does cube mode estimate a complete polyhedral dice set?", a: "No. It calculates identical cubic blanks. A set of different dice shapes needs a known total mixed cavity capacity; enter that as one unit and count identical sets." }, { q: "How do I include sprues or a reservoir?", a: "Include them in a known capacity if already measured, or add a clearly separate allowance. Do not count the same sprue volume twice." }];
    }
    if (page.slug === "epoxy-seal-coat-calculator") {
      page.calculatorType = "seal-coat";
      page.formDefaults = { surfaceArea: 16, coverageRate: 42.7, wastePct: 8 };
      page.note = "Use the selected seal-coat product's own coverage rate. Calculate a later flood coat separately.";
      page.howTo = ["Measure the actual area to seal in ft² or m².", "Enter the exact product's coverage rate and its stated units.", "Set the number of coats of that same product and your chosen loss allowance.", "Plan the later finish coat separately, following the permitted recoat instructions."];
    }
    if (page.slug === "resin-art-pricing-calculator") {
      page.calculatorType = "pricing";
      page.title = "Resin Art Pricing Calculator: Labor, Fees & Profit Margin";
      page.h1 = "Resin Art Pricing Calculator";
      page.description = "Calculate a selling price per resin piece including material, supplies, labor, packaging, expected failures, selling fees and a profit margin.";
      page.intro = "Set a selling price for one finished resin piece. Include your material, time, supplies, packaging, expected failures, selling fees and target profit margin.";
      page.resultEyebrow = "Selling price per finished piece";
      page.statLabels = { raw: "Direct cost, including labor", split: "Labor per piece", cost: "Selling fees", layers: "Profit per piece" };
      page.ui = { ...page.ui, standard: "Cost / successful piece", conservative: "Selling price", productFit: "Profit margin", currentRecommendation: "Price per piece" };
      page.ui.calculatorHeading = "Enter costs per finished piece";
      page.compareLabel = "Cost, selling price and margin";
      page.note = "All amounts refer to one finished piece. Default costs are illustrative; the result is a cost model, not a claim about what buyers will pay.";
      page.nextStepLinks = [{ label: "Check quantity first", slug: "resin-mold-calculator" }, { label: "Read the pricing method", slug: "methodology" }];
      page.bullets = ["Resin and supplies, packaging, labor and overhead are separate inputs.", "Expected failed pieces and selling fees affect the amount you need to charge.", "The profit target is a margin on selling price; labor already counts as a cost."];
      page.howTo = ["Measure resin per finished piece and enter its price per liter of mixed material.", "Allocate supplies and mold costs, then add packaging, hours and your hourly rate.", "Enter your own failure and selling-fee assumptions; keep fee plus profit margin below 100%.", "Compare the calculated price with actual demand before offering the item for sale."];
      page.mistakes = ["Treating markup and margin as the same percentage.", "Leaving labor, failed pieces or marketplace fees out of the cost.", "Interpreting the result as a guaranteed market price."];
      page.faq = [{ q: "Is labor already included before profit?", a: "Yes. Hours × hourly rate is part of direct cost. Profit is the amount left after that cost, expected failures and selling fees." }, { q: "Does this predict what an artwork will sell for?", a: "No. It calculates a price from the costs and margin you enter. Product demand, sales tax and shipping need your own assessment and inputs." }];
    }
    if (page.slug === "two-car-garage-epoxy-calculator") page.formDefaults = { length: 20, width: 20 };
    if (page.calculatorType === "coating" && type === "surface") page.formDefaults = { length: 72, width: 24, surfaceArea: 12, wastePct: 8 };
    if (page.slug === "epoxy-calculator") page.intro = "Estimate mixed resin from inside dimensions, add allowances and plan whole kits. Enter your product's ratio and limits when known.";
    if (page.slug === "deep-pour-epoxy-calculator") page.intro = "Calculate mixed resin from your cavity dimensions. Enter confirmed product depth and batch limits to see separate lift and batch counts.";
    if (page.calculatorType === "cost") {
      page.resultEyebrow = "Resin material estimate";
      page.statLabels = { raw: "Base mixed volume", split: "Quantity basis", cost: "Material estimate", layers: "Planning scope" };
      page.ui = { ...page.ui, calculatorHeading: "Enter quantity and price", standard: "Entered quantity budget", conservative: "Higher allowance budget", productFit: "Recommended quantity", currentRecommendation: "Material budget" };
      page.compareLabel = "Material budgets and quantity";
    }
    if (["coaster", "mold", "dice", "sphere", "cylinder", "cube", "void-fill"].includes(page.calculatorType)) {
      page.howTo = ["Choose inside geometry for a regular shape, or use a known cavity capacity where that mode is available.", "Set the number of identical pieces; the main quantity is the total batch, with a separate loss allowance.", "Check the raw quantity against a hand calculation or a product's published mixed capacity.", "Enter product ratio, limits and total kit mixed yield only when confirmed; purchase quantity is not a batch-mixing instruction."];
    }
    const example = examples[page.slug];
    if (example) {
      appendSection(page, ...example);
      const links = ["river", "deep-pour"].includes(type) ? [layerSource, ratioSource] : ["surface", "coverage"].includes(type) || page.calculatorType === "seal-coat" ? [coatingSource, ratioSource] : ["floor-cost", "converter", "pricing", "cost"].includes(page.calculatorType) ? undefined : [ratioSource];
      if (links) appendSection(page, "Product data before mixing", "Use the exact product documentation for mixing basis, maximum layer depth, mixed batch volume and cure or recoat conditions. A dimensional estimate and a purchase allowance do not supply those material limits.", links);
      const kind = type === "river" ? "river" : ["coating", "seal-coat", "garage-floor"].includes(page.calculatorType) ? "coating" : page.calculatorType === "coaster" ? "round" : ["cube", "dice"].includes(page.calculatorType) ? "cube" : ["sphere", "cylinder"].includes(type) ? type : "rectangle";
      if (!["pricing", "cost", "floor-cost"].includes(page.calculatorType)) page.measurement = { kind, caption: diagramCaptions[kind] };
    }
  }
  if (page.pageType === "guide" && guideNotes[page.slug]) {
    appendSection(page, "Using this guide with the planning tools", guideNotes[page.slug]);
    page.lastmod = "2026-10-30";
    page.reviewedOn = "2026-10-30";
    if (page.slug === "epoxy-cost-per-square-foot") page.embeddedCalculator = { calculatorType: "area-cost", resultEyebrow: "Budget per area", statLabels: { cost: "Total budget" } };
    if (page.slug === "how-to-measure-a-river-table-for-epoxy") page.measurement = { kind: "river", caption: guideNotes[page.slug] };
    if (page.slug === "how-to-calculate-epoxy-pour") page.measurement = { kind: "rectangle", caption: guideNotes[page.slug] };
  }
  if (page.slug === "") {
    page.intro = "Measure your project, estimate mixed resin, and plan allowances, complete kits and cost. Product ratios and pour limits come from your chosen resin.";
    page.quickCalculator = { calculatorType: "general", note: "For regular rectangular or round cavities. Use a project-specific calculator for floors, coatings or irregular river channels." };
    page.sections = page.sections.filter(section => !["Calculators for specific projects", "What every estimate gives you"].includes(section.title));
    page.lastmod = "2026-10-30";
  }
  if (page.slug === "authors") {
    page.title = "Who Maintains Epoxy Planner & How Calculations Are Checked";
    page.h1 = "Maintaining and Checking Epoxy Planner";
    page.intro = "Epoxy Planner is an independently maintained quantity and budget planning tool published under the Epoxy Planner name. This page explains its calculation checks and correction process.";
    page.sections = [
      { title: "Publisher and scope", body: "The site operator maintains the calculators, examples and documentation under the Epoxy Planner name. This is a software planning resource; it does not claim professional installer credentials, laboratory testing or a documented field study. Product manufacturers remain the source for their material instructions." },
      { title: "How calculations are checked", points: ["Geometry and unit conversions are compared with hand-calculated examples, including the same object in imperial and metric units.", "Automated regression checks cover invalid inputs, allowances, shape volumes, whole-kit rounding, user-entered ratios and pricing fees.", "The Methodology page records the models and the dated calculation changes. Example prices, mold capacities and allowances are labeled assumptions."] },
      { title: "Sources and corrections", body: "Product-specific statements link to the relevant manufacturer source. When reporting a calculation problem, include the page URL, chosen units, all active inputs, the result and the expected calculation. Corrections are checked against the mathematical model and, where relevant, the product instructions; meaningful calculation changes are recorded in Methodology.", contactEmail: "hello@epoxyplanner.com" }
    ];
    page.lastmod = "2026-10-30";
    page.reviewedOn = "2026-10-30";
  }
  if (page.slug === "methodology") {
    page.sections = page.sections.map(section => section.title === "Mix ratios, layers and costs" ? { ...section, points: section.points.map(point => point.startsWith("For a manufacturer's") ? "For a confirmed manufacturer's A:B volume ratio a:b, Part A = mixed volume × a/(a+b), and Part B = mixed volume × b/(a+b). Unknown ratios remain unconfirmed. Weight ratios require the product's weight instructions and are not inferred from geometric volume." : point) } : section);
    appendSection(page, "Area, capacity and kit models", "The area/thickness model uses wet mixed volume: m² × mm = L. The label model uses area × coats ÷ the selected product's coverage per mixed gallon or liter. Edge and waste percentages are added to raw volume as separate percentage points. Count multiplies the per-piece quantity. Whole kits are rounded up from required mixed volume divided by the kit's stated total mixed yield. A matched kit purchase is not an instruction to mix the whole kit at once.");
    appendSection(page, "A/B ratios and product limits", "No mix ratio is inferred from a shape or resin category. A user-entered volume ratio a:b splits the mixed volume as a/(a+b) and b/(a+b). Weight ratios need the manufacturer's weight quantities or component data and are not computed from volume alone. Maximum layer depth and maximum mixed batch volume are separate user-entered limits. Unknown limits remain unknown; this tool does not establish a safe casting schedule.", [ratioSource, layerSource]);
    appendSection(page, "Selling price per finished piece", "Direct cost = resin + supplies + packaging + labor hours × hourly rate + overhead. Expected cost per successful piece = direct cost ÷ (1 − failure rate). Selling price = (expected cost + fixed selling fee) ÷ (1 − percentage selling fee − target profit margin). Margin refers to profit divided by selling price. Shipping, tax and other costs are included only when entered. Fees plus margin must stay below 100%.");
    appendSection(page, "Calculation changes: 30 October 2026", "Added finite-number and percentage checks, mL display for small quantities, piece counts, direct surface area, product-label coverage, explicit product ratios and limits, whole-kit rounding and a complete resin-art selling-price model. Same-task shape and language quantity entries were consolidated. These changes concern the software and worked examples; they do not claim laboratory or installation experience.");
    page.lastmod = "2026-10-30";
    page.reviewedOn = "2026-10-30";
  }
  if (page.slug === "about") {
    appendSection(page, "Maintained as a planning product", "Epoxy Planner is independently maintained under its site name. Its original contribution is the interactive planning calculation and the accompanying checkable examples. No field-testing, installation qualification or manufacturer endorsement is claimed. See Authors for calculation checks and correction requests, and Methodology for the dated models and changes.");
    page.lastmod = "2026-10-30";
  }
  return page;
}

export function improvePages(pages) {
  const frequency = new Map();
  for (const page of pages) for (const faq of page.faq || []) {
    const key = `${faq.q}\n${faq.a}`;
    frequency.set(key, (frequency.get(key) || 0) + 1);
  }
  return pages.map((original) => {
    const page = improvePage(original);
    page.faq = (page.faq || []).filter(faq => (frequency.get(`${faq.q}\n${faq.a}`) || 1) < 3);
    return page;
  });
}
