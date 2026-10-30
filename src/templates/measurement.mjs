import { plannerText } from "../assets/planner-text.js";

function escape(value) {
  return String(value || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
}

export function renderMeasurement(page) {
  if (!page.measurement) return "";
  const { kind = "rectangle", caption } = page.measurement;
  const id = `measurement-${(page.slug || "home").replace(/[^a-z0-9]/gi, "-")}`;
  const drawings = {
    rectangle: `<path d="M110 70h280v110H110z M110 70l55-35h280v110l-55 35 M390 70l55-35 M165 35v110l-55 35"/><path class="dimension" d="M110 205h280 M82 70v110 M465 35v110"/><text x="242" y="230">L</text><text x="58" y="132">W</text><text x="482" y="98">d</text>`,
    river: `<path d="M95 55h365v120H95z"/><path class="resin-area" d="M95 89l60-8 60 16 60-6 60-14 60 12 65-6v48l-65-3-60 14-60-10-60 5-60-12-60 13z"/><path class="dimension" d="M217 55v120 M338 55v120 M95 205h365"/><path d="M155 81v44 M275 91v41 M395 89v39"/><text x="137" y="67">w₁</text><text x="260" y="74">w₂</text><text x="380" y="70">w₃</text><text x="270" y="230">L</text>`,
    coating: `<path class="resin-area" d="M110 48h330v95H110z"/><text x="269" y="104">A</text><path d="M110 190h330v12H110z M465 190v12"/><path class="dimension" d="M450 190h32 M450 202h32"/><text x="490" y="203">t</text>`,
    round: `<circle cx="270" cy="113" r="78"/><path class="dimension" d="M192 113h156"/><text x="262" y="100">D</text><path d="M400 62v102"/><text x="417" y="121">d</text>`,
    sphere: `<circle cx="275" cy="118" r="84"/><ellipse class="dimension" cx="275" cy="118" rx="84" ry="25"/><path class="dimension" d="M191 118h168"/><text x="266" y="102">D</text>`,
    cylinder: `<ellipse cx="270" cy="64" rx="88" ry="26"/><path d="M182 64v120a88 26 0 0 0 176 0V64"/><path class="dimension" d="M182 64h176 M390 64v120"/><text x="263" y="53">D</text><text x="405" y="132">h</text>`,
    cube: `<path d="M175 80h145v130H175z M175 80l65-42h145v130l-65 42 M320 80l65-42 M240 38v130l-65 42"/><path class="dimension" d="M175 230h145"/><text x="241" y="251">s</text>`
  };
  return `<section class="section measurement-section">
    <h2>${escape(plannerText(page.locale, "diagram"))}</h2>
    <figure class="measurement-figure">
      <svg viewBox="0 0 560 270" role="img" aria-labelledby="${id}-title ${id}-description">
        <title id="${id}-title">${escape(plannerText(page.locale, "diagram"))}</title>
        <desc id="${id}-description">${escape(caption)}</desc>
        <g>${drawings[kind] || drawings.rectangle}</g>
      </svg>
      <figcaption>${escape(caption)}</figcaption>
    </figure>
  </section>`;
}
