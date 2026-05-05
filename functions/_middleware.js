import { HTML_ROUTES } from "./_generated-routes.js";

const CANONICAL_HOST = "epoxyplanner.com";

const STATIC_ROOT_FILES = new Set([
  "/404.html",
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap-index.xml",
  "/sitemap-calculators.xml",
  "/sitemap-guides.xml",
  "/sitemap-site.xml",
  "/_redirects"
]);

function isAssetPath(pathname) {
  return pathname.startsWith("/assets/") || /\.[a-z0-9]+$/i.test(pathname);
}

function notFoundHtml() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, follow" />
    <title>Page Not Found | Epoxy Planner</title>
    <meta name="description" content="This Epoxy Planner page does not exist." />
    <link rel="canonical" href="https://epoxyplanner.com/404.html" />
    <link rel="stylesheet" href="/assets/site.css" />
  </head>
  <body>
    <main class="page-shell">
      <section class="hero">
        <div class="hero__copy">
          <p class="eyebrow">404</p>
          <h1>Page Not Found</h1>
          <p class="hero__intro">Use the epoxy calculators and guides to find the planning page you need.</p>
          <div class="hero-actions">
            <a class="hero-action" href="/epoxy-calculator/"><span class="hero-action__text">Epoxy Calculator</span></a>
            <a class="hero-action" href="/epoxy-coverage-calculator/"><span class="hero-action__text">Coverage Calculator</span></a>
            <a class="hero-action" href="/epoxy-cost-calculator/"><span class="hero-action__text">Cost Calculator</span></a>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>`;
}

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === `www.${CANONICAL_HOST}`) {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  if (url.protocol !== "https:" && url.hostname === CANONICAL_HOST) {
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  if (STATIC_ROOT_FILES.has(url.pathname) || isAssetPath(url.pathname)) {
    return context.next();
  }

  if (HTML_ROUTES.has(url.pathname)) {
    return context.next();
  }

  const slashPath = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
  if (HTML_ROUTES.has(slashPath)) {
    url.pathname = slashPath;
    return Response.redirect(url.toString(), 301);
  }

  return new Response(notFoundHtml(), {
    status: 404,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, follow"
    }
  });
}
