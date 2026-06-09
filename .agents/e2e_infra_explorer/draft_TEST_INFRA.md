# E2E Test Infrastructure Plan: Serponado pSEO

## 1. Playwright Strategy (Opaque-Box)
- **Framework:** Playwright (Node.js).
- **Philosophy:** Opaque-box testing. Tests must not rely on internal application state, database fixtures, or component internals. All verifications are performed via DOM inspection, routing, and network responses.
- **Environment:** Tests will execute against the production build (`npm run build` followed by `npm run start`) to guarantee Static Site Generation (SSG) behaviors like the generation of the 235 pSEO pages and `generateMetadata`.

## 2. Identified Features for E2E Testing
Based on `ORIGINAL_REQUEST.md`, we identify the following user-facing and systemic features that require E2E validation:

- **F1: Global UI & Theming (R1):** The site must render the "Industrial Brutalism / Dark-Tech" theme. Specific layout container name changes must be verified ("Serponado Schadensberichte", "Serponado Notfall-Audit"). The old vocabulary ("Schlüsseldienst") must be completely purged.
- **F2: pSEO Dynamic Routing (R4):** The application must correctly serve dynamic routes under `/serponado/[slug]`. Representative pSEO pages must load correctly without 404/500 errors.
- **F3: SEO Meta & Schema.org (R4):** Individual pSEO pages must inject the correct dynamic `<title>`, `<meta name="description">`, OpenGraph tags, and valid JSON-LD schemas (`Article` and `FAQPage`).
- **F4: Image Rendering & Optimization (R2, R4):** The `hero_image` must load correctly on the pages, utilizing Next.js `next/image` with proper `alt` tags and `fetchpriority="high"`.
- **F5: Internal Link Silo (R5):** The `<RelatedSerponadoAlerts />` component must be visible and contain valid `<a>` tags pointing to 4-5 related cyclic pSEO slugs.
- **F6: Blog / Static Pages (R6):** The adapted "SEO Contest 2026" blog post must be accessible and render the adapted content.
- **F7: Sitemap & Static Generation (R6):** The `sitemap.xml` must be generated, returning HTTP 200, and include the proper route structures.

## 3. Test Coverage Thresholds (Tiers 1-4)

### Tier 1: Critical Path (P0)
**Goal:** Core navigation and basic rendering of the application and pSEO templates.
- **Tests:**
  - Verify the homepage loads successfully (HTTP 200).
  - Verify the homepage displays the new Brutalist theme and the updated section titles ("Serponado Schadensberichte", "Serponado Notfall-Audit").
  - Navigate to a known pSEO route (e.g., `/serponado/slug-1`) and verify successful page load.
  - Verify the "SEO Contest 2026" blog page loads successfully.

### Tier 2: Core Functionality & SEO (P1)
**Goal:** Validating the primary value propositions of the pSEO engine (Metadata, Schema, Silos).
- **Tests:**
  - On a sample pSEO page, verify the presence of dynamic `<title>` and `<meta name="description">`.
  - Verify the presence and structure of the `<script type="application/ld+json">` containing `Article` and `FAQPage` schemas.
  - Verify the `<RelatedSerponadoAlerts />` component renders on a pSEO page, containing exactly 4-5 internal links with valid `href` attributes pointing to `/serponado/[slug]`.
  - Request `/sitemap.xml` and verify it returns HTTP 200.

### Tier 3: Edge Cases & UI Polish (P2)
**Goal:** Validating image properties, content structure, and absolute purging of old terminology.
- **Tests:**
  - Verify `hero_image` is present in the DOM with `fetchpriority="high"` and an SEO-relevant `alt` attribute.
  - Scan the DOM of the homepage and sample pSEO pages to assert the complete absence of old vocabulary (e.g., "Schlüsseldienst").
  - Verify the "mainContent" area exists on a pSEO page and contains standard HTML tags (e.g., paragraphs, headings).
  - Verify the FAQ section renders (e.g., looking for accordion elements or heading structures).

### Tier 4: Comprehensive/Scale Testing (P3)
**Goal:** Ensuring scale limits (235 pages) and robustness across varying routes.
- **Tests:**
  - Request a small randomized batch of pSEO slugs (e.g., 5-10 distinct slugs) and verify they all return HTTP 200 OK without console/network errors.
  - Perform visual layout checks (or CSS property assertions) on mobile viewports for the Brutalist UI layout.
  - Assert that `sitemap.xml` contains a `<urlset>` with at least 235 `<url>` tags.
