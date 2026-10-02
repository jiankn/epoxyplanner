// 环氧地坪包工包料成本的费率与区间算法。
// 浏览器里的计算器（calculator.js）和构建时生成的价格表（site.mjs）共用这一份，改价格只改这里。
// ---- 地坪包工包料成本（美国全国平均，$/sq ft）----
// 出处（2026-10-03 核对）：
//   专业环氧 4–10：HomeGuide 2026（Angi 2026 为 2–12，This Old House 2026 为 3–12）
//   金属效果 5–12：This Old House 2026；Bob Vila 2024
//   聚天门冬 / 聚脲 5–12：HomeGuide 2026；Bob Vila 2024 为 4–9
//   DIY 大卖场套装 0.50–1.50：HomeGuide 套装总价按面积折算；ArmorGarage 0.50–1.00
//   DIY 100% 固含量彩砂套装 1.10–2.70：ArmorGarage 套装标价
//   修补 $25–250（Angi、This Old House）；防潮层 +$1/sq ft（Bob Vila 2024）；
//   翻新 +$3–7/sq ft（HomeGuide 2026）；打磨机日租 $100–200（ArmorGarage）；承包商最低收费 $500–1,000（Bob Vila 2024）
export const FLOOR_COST_RATES = {
  "pro-epoxy": { low: 4, high: 10, pro: true, label: "Professional epoxy (solid color or flake)" },
  "pro-metallic": { low: 5, high: 12, pro: true, label: "Professional metallic epoxy" },
  "pro-poly": { low: 5, high: 12, pro: true, label: "Professional polyaspartic / polyurea with flake" },
  "diy-basic": { low: 0.5, high: 1.5, pro: false, label: "DIY basic water-based kit" },
  "diy-solids": { low: 1.1, high: 2.7, pro: false, label: "DIY 100% solids kit with flake" }
};
export const FLOOR_CONDITION = {
  good: { label: "Good condition", flat: [0, 0], perSqFt: [0, 0] },
  cracks: { label: "Crack and chip patching", flat: [25, 250], perSqFt: [0, 0] },
  moisture: { label: "Vapor barrier for moisture", flat: [0, 0], perSqFt: [1, 1] },
  resurface: { label: "Concrete resurfacing", flat: [0, 0], perSqFt: [3, 7] }
};
export const FLOOR_PRO_MINIMUM = [500, 1000];
export const FLOOR_GRINDER_RENTAL = [100, 200];

// 返回总价区间；请人施工时套用承包商最低收费
export function floorCostRange(area, systemKey, conditionKey, needsGrinding) {
  const rate = FLOOR_COST_RATES[systemKey] || FLOOR_COST_RATES["pro-epoxy"];
  const condition = FLOOR_CONDITION[conditionKey] || FLOOR_CONDITION.good;
  const coating = [area * rate.low, area * rate.high];
  const prep = [
    condition.flat[0] + condition.perSqFt[0] * area,
    condition.flat[1] + condition.perSqFt[1] * area
  ];
  const grinding = !rate.pro && needsGrinding ? FLOOR_GRINDER_RENTAL : [0, 0];
  let low = coating[0] + prep[0] + grinding[0];
  let high = coating[1] + prep[1] + grinding[1];
  let minimumApplied = false;
  if (rate.pro && (low < FLOOR_PRO_MINIMUM[0] || high < FLOOR_PRO_MINIMUM[1])) {
    minimumApplied = true;
    low = Math.max(low, FLOOR_PRO_MINIMUM[0]);
    high = Math.max(high, FLOOR_PRO_MINIMUM[1]);
  }
  return { rate, condition, coating, prep, grinding, low, high, minimumApplied };
}
