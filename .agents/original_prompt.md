# Original User Request

## 2026-06-09T16:29:59Z

Refactor a local Next.js "Schlüsseldienst" application into a highly optimized, 235-page programmatic SEO (pSEO) network targeting the keyword "Serponado". The project requires a complete UI overhaul to an "Industrial Brutalism / Dark-Tech" theme, programmatic image asset mapping, JSON database generation, dynamic Next.js routing, an internal PageRank silo, and integration with the Google Cloud Indexing API.

Working directory: `/Users/umurey/Documents/antigravity/peaceful-hopper/ms-schluesseldienst`
Integrity mode: development

## Requirements

### R1. The Purge & UI Refactoring
- Completely remove all "Schlüsseldienst" vocabulary, local addresses, old phone numbers, trust badges, and old local Schema.org from the codebase.
- Transform the UI to an "Industrial Brutalist / Dark-Tech / Alert" theme (Black, Dark Gray, Neon-Red `#ff0033` for warnings, Monospace fonts for data).
- Refactor layout containers: "Unsere Leistungen" becomes "Serponado Schadensberichte", "Kontakt" becomes "Serponado Notfall-Audit".

### R2. Image Pipeline & Asset Mapping
- Read `coday_campaign_images_200` folder which contains 200 images.
- Move/copy these images to `public/images/serponado/` and rename them programmatically to strict SEO names (e.g. `serponado-algorithmus-anomalie-01.jpg`).
- All 200 images must be used at least once as `hero_image` across the 235 JSON records (use modulo operator).

### R3. JSON Database Generation
- Write and run `scripts/generate-pseo-db.js` to create `data/serponado-data.json` with exactly 235 entries (15 Core-Pillars, 110 DACH cities, 110 B2B niches).
- Each node must contain `slug`, `metaTitle`, `metaDescription`, `h1`, `hero_image` (path & alt), and `content_image`.
- Generate unique, highly relevant SEO `alt`-tags for each image.
- Generate a `mainContent` field (min. 800 words, valid HTML string in highly scientific, clinical SEO German) and a `faq` array for each entry. Use spintax to ensure 0% duplicate content.

### R4. Next.js Routing & Core Web Vitals
- Build the dynamic route `app/serponado/[slug]/page.tsx` using `generateStaticParams` to render all 235 pages at build time.
- Use the `next/image` component strictly for mapped images. The `hero_image` must have `priority={true}` and `fetchPriority="high"`.
- Inject dynamic Title-Tags and OpenGraph data via `generateMetadata`.
- Integrate a dynamic `<script type="application/ld+json">` that generates valid `Article` and `FAQPage` Schema.org for each page.

### R5. Internal Link Siloing
- Calculate a cyclic array `related_slugs` (4-5 related URLs) for each JSON record during the build script.
- Implement a `<RelatedSerponadoAlerts />` UI component at the bottom of `page.tsx` to output these internal links as clickable cards with clean HTML `<a>` tags for PageRank siloing.

### R6. Sitemap, Indexing Engine & Blog Adaptation
- Overwrite `app/sitemap.ts` to dynamically output the homepage and all 235 `/serponado/[slug]` URLs.
- Write `scripts/google-indexer.js` for the Google Cloud Indexing API to read the sitemap.xml and push all 235 URLs as a batch request.
- Adapt the provided "Position One SEO-Contest 2024" blog post text for the "SEO Contest 2026" and target "Serponado". Integrate this updated blog post into the application as a new static page or blog entry.

## Acceptance Criteria

### Verification
- [ ] `npm run build` executes and completes successfully without any TypeScript, linter, or path errors.
- [ ] Exactly 235 static pages are generated for the `/serponado/[slug]` route during the build process.
- [ ] All 200 images are successfully copied to `public/images/serponado/` and referenced correctly in the JSON database.
- [ ] `serponado-data.json` contains exactly 235 records with no placeholder duplication in `mainContent`.
- [ ] The newly adapted "SEO Contest 2026" blog post is present and accessible in the application.
