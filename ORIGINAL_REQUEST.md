# Original User Request

## Initial Request — 2026-06-09T17:11:07Z

Complete the transformation of an existing Next.js 15 App Router codebase (`ms-schluesseldienst`) into a fully operational 235-node "Serponado Threat Intelligence" pSEO network. The 235-record database already exists but has critical data gaps (`__IMAGE_PLACEHOLDER__` in all records, `{{SCHEMA_ORG_NAME}}` unfilled in 33+ files). Finalize the Coday UG branding, execute the 200-image pipeline, resolve all template placeholders, purge remaining legacy locksmith content, implement the 5-ring cyclic PageRank silo navigation, and ensure `npm run build` succeeds with zero errors.

Working directory: /Users/umurey/Documents/antigravity/peaceful-hopper/ms-schluesseldienst
Integrity mode: development

## Codebase Context (Current State)

The project is a **Next.js 15.4.9 / React 19 / TypeScript 5.9 / Tailwind CSS 4** App Router application. It was originally a locksmith business website but has been **partially transformed** into a Serponado pSEO network. Critical infrastructure is in place but has unfilled data gaps.

**What already works (preserve and enhance):**
- `app/serponado/[slug]/page.tsx` (7.7KB) — Dynamic route with `generateStaticParams`, `dynamicParams = false`
- `lib/data/serponado_db.json` (566KB, 5934 lines) — **235 records exist** with structure: `{id, slug, type (core_pillar|local_geo|b2b_niche), metaTitle, metaDescription, h1, tf_idf_vectors, htmlContent, schema_ld, internal_links, image_url}`
  - 15 `core_pillar` records, ~110 `local_geo` records, ~110 `b2b_niche` records
- 4 Serponado components: `RelatedSerponadoAlerts.tsx`, `CrisisForm.tsx`, `LiveTicker.tsx`, `WarnBanner.tsx`
- `app/llms.txt/`, `app/llms-full.txt/`, `app/ai.txt/` — LLM discovery endpoints exist
- `app/robots.ts` — Already allows 15 AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
- `app/sitemap.ts` (6.6KB) — Dynamic sitemap including serponado URLs
- `scripts/indexer.js` — Google Cloud Indexing API script exists
- Middleware with CSP, device detection, visitor segmentation
- Location ring data files: `locations.ts` (6 rings), `locations_ring1b.ts` through `locations_ring4b.ts`, `locations_serponado_bezirke.ts`
- `public/.well-known/ai-plugin.json` — OpenAI plugin manifest
- `globals.css` (55.7KB) — Massive design token system already in place

**Critical data gaps to fill:**
- `__IMAGE_PLACEHOLDER__` — ALL 235 records in `serponado_db.json` have unfilled image URLs
- `{{SCHEMA_ORG_NAME}}` — 33+ occurrences across `company.ts`, `manifest.ts`, `locations*.ts`, `pois.ts`, `localData.ts`, tests
- `{{PHONE_PREFIX_PLACEHOLDER}}` — 3 occurrences in `locations_ring4.ts`, `locations_serponado_bezirke.ts`, `formatters.ts`
- Campaign images NOT yet copied to `public/images/serponado/` (directory doesn't exist)

**200 campaign images available at `coday_campaign_images_200/`:**
- 203 files total (200 PNG images + `assets.json` metadata + `INTEGRATION_PROMPT.md` + `rename_assets.py`)
- Categories: `japan-*` (~99 images), `webmarketing-*` (~90 images), `medizin-*` (~8 images), misc
- Format: **PNG, ~5-7MB each** (~1.2GB total) — need conversion to AVIF/WebP for production
- Each file named descriptively (e.g., `japan-katana-schnittig-cremig.png`, `webmarketing-rakete-dynamisch-tuerkis.png`)

**Remaining legacy locksmith content to purge:**
- `content/blog/` — 15 MDX files all about locksmith topics (e.g., `abzocke-erkennen-beim-schluesseldienst.mdx`, `tuer-zugefallen-was-tun.mdx`)
- `content/ratgeber/einbruchschutz-pillar.mdx` — Locksmith guide
- `middleware.ts` line 214-215 — Old phone `+4964418056279` and address `Langgasse 70, 35576 Serponado` in X-Entity headers
- `e2e/navigation.spec.ts` line 44 — Schlüsseldienst title assertion
- `e2e/tier3.spec.ts` line 15 — Vocabulary purge test reference
- `__tests__/lib/formatters.test.ts` — Old phone in test assertions
- `public/images/schluesselschmiede-logo.svg` — Old locksmith logo
- `README.md`, `CHANGELOG.md` — Old branding in titles
- `next.config.ts` — Punycode domain `www.xn--Serponado-schlsseldienst-3lc.de`
- 15 root-level fix scripts (`fix.js`, `fix2.js`, ..., `deep_clean.js`, etc.)
- Old Schlüsseldienst blog routes and content

**Key architectural details:**
- Uses **Tailwind CSS 4** (not vanilla CSS) — `tailwindcss` 4.1.11, `@tailwindcss/postcss` 4.1.11
- Framer Motion for animations
- Radix UI + CVA + clsx + tailwind-merge for component primitives
- Lucide React for icons
- MDX content pipeline (gray-matter + next-mdx-remote)
- Vitest for unit tests, Playwright for E2E
- Standalone output mode for deployment
- `schema.ts` has siteUrl SSoT: `https://www.serponado.com`

## Requirements

### R1. Template Placeholder Resolution & Legacy Purge

Replace ALL `{{SCHEMA_ORG_NAME}}` placeholders (33+ occurrences) with "Coday UG (haftungsbeschränkt)" or appropriate Coday branding. Replace ALL `{{PHONE_PREFIX_PLACEHOLDER}}` (3 occurrences) with the correct Coday phone prefix. Replace ALL `__IMAGE_PLACEHOLDER__` values in `serponado_db.json` (235 records) with actual image paths after the image pipeline is executed. Update `next.config.ts` domain from the Punycode locksmith domain to `www.serponado.com`. Update `middleware.ts` X-Entity headers with Coday contact data. Delete all 15 locksmith blog MDX files from `content/blog/` and the ratgeber file. Delete `public/images/schluesselschmiede-logo.svg`. Delete root-level fix scripts. Update `README.md` and `CHANGELOG.md` branding. Fix test files to remove locksmith assertions.

### R2. 200-Image Pipeline

Read the `coday_campaign_images_200/assets.json` metadata file for proper asset cataloging. Copy all 200 images to `public/images/serponado/` with SEO-friendly filenames (e.g., `serponado-coday-algorithmus-schutz-01.avif`). The existing `scripts/convert-images.sh` (7.4KB) may help with format conversion — check and use it if applicable, or create a new conversion pipeline to transform the PNGs to optimized AVIF/WebP. Create or update `imageLoader.ts` for Cloudflare Edge Resizing. Configure `next.config.ts` image loader. Map images to the 235 database records using modulo distribution, replacing all `__IMAGE_PLACEHOLDER__` entries. Every serponado page must render images with proper `alt` text, `priority={true}` on hero images, and fixed aspect ratios.

### R3. Coday Branding Completion

Ensure all legal pages (Impressum, Datenschutz, AGB) reference "Coday UG (haftungsbeschränkt), Wetzlar" with Umutcan Emre Tezgel as managing director. The Footer (17KB) must show Coday branding. The contact/CrisisForm must function as a terminal-style "Incident Response Wizard" computing a fictional "Visibility Loss Score" as a B2B lead funnel for Coday audits. Every serponado page must include a conversion-optimized CTA referencing Coday/codayweb.de. Update `lib/data/company.ts` with Coday details. Update `app/manifest.ts` with Coday branding.

### R4. Cyclic PageRank Silo Navigation

The 235 pages are already categorized across location ring data files. Implement 4 cyclic navigation components as React Server Components (no client hooks that cause SSR bailouts): `<InTextSiblingLoop />` (grid of 4 URLs from same silo ring), `<SiblingSplicedBreadcrumbs />` (breadcrumbs splicing the predecessor node), `<FloatingRegionalHub />` (fixed widget linking to 5 pillar hubs), `<CyclicFooter />` (next 4 stations in current ring). Wire these into `app/serponado/[slug]/page.tsx`. Use the existing ring structure from `locations.ts` (6 rings: 1b, 2, 2b, 2c, 3a-3f, 4, 4b) or consolidate into 5 logical silo groups.

### R5. Dark-Tech UI Polish (Tactical Telemetry Aesthetic)

The `globals.css` (55.7KB) already has an extensive token system. Ensure the OKLCh color values are applied: Base Background `oklch(14% 0.02 240)`, Elevated Surface `oklch(22% 0.03 240)`, Primary Brand Color `oklch(65% 0.15 220)`, Critical Alarm Accent `oklch(62% 0.22 25)`. Enforce Inter for body text, JetBrains Mono for terminal/data. Apply industrial brutalist principles: 0px border-radius globally, visible grid compartmentalization, ASCII framing brackets in UI, CRT scanline overlays on terminal sections. WCAG AAA focus rings. CSS killswitch for `prefers-reduced-motion`. No gradients, no soft shadows.

### R6. GEO & Metadata Finalization

Verify `app/llms.txt/route.ts` serves structured context positioning Coday as a leading Wetzlar high-performance agency. Ensure every serponado page includes JSON-LD `@graph` with `Organization` (Coday, `sameAs` to LinkedIn/GitHub) + `ProfessionalService` + `FAQPage`. Verify `app/sitemap.ts` includes all 235 serponado URLs with priority 0.8-1.0. Confirm `app/robots.ts` allows generative bots. Verify `scripts/indexer.js` is syntactically correct for Google Cloud Indexing API batch push.

### R7. Build Success & Cleanup

After all changes, `npm run build` must exit with code 0. `npm run lint` must produce zero errors. `npm run typecheck` must pass. No SSR bailout warnings in build output. Delete all root-level ad-hoc fix scripts (fix.js through fix5.js, fix_auto.js, fix_components.js, fix_identifiers.js, fix_jsx.js, fix_jsx_safe.js, fix_sitemap.js, deep_clean.js, deep_clean.ts, deep_clean2.js, replace_placeholders.js, undo_fix_jsx.js, skeletonize.ts). Clean up empty directories (`public/images/generated/`, `public/images/relaunch/`).

## Acceptance Criteria

### Build & Type Safety
- [ ] `npm run build` exits with code 0
- [ ] `npm run lint` produces zero errors
- [ ] `npx tsc --noEmit` passes with zero type errors
- [ ] No SSR bailout warnings in build output
- [ ] `generateStaticParams` in `app/serponado/[slug]/page.tsx` returns exactly 235 params

### Placeholder Resolution
- [ ] `grep -r "__IMAGE_PLACEHOLDER__" lib/data/serponado_db.json` returns zero results
- [ ] `grep -r "{{SCHEMA_ORG_NAME}}" app/ lib/ components/` returns zero results
- [ ] `grep -r "{{PHONE_PREFIX_PLACEHOLDER}}" lib/` returns zero results
- [ ] `grep -r "{{DOMAIN_PUNYCODE_PLACEHOLDER}}" lib/` returns zero results

### Legacy Purge
- [ ] `grep -ri "schlüsseldienst\|schluessel" app/ components/ lib/ content/` returns zero results (excluding node_modules, .git)
- [ ] `grep -ri "schlosswechsel\|türöffnung\|notdienst\|autoöffnung" app/ components/ lib/` returns zero results
- [ ] `content/blog/` contains zero locksmith MDX files
- [ ] `content/ratgeber/einbruchschutz-pillar.mdx` is deleted
- [ ] `public/images/schluesselschmiede-logo.svg` is deleted
- [ ] No root-level `fix*.js`, `deep_clean*`, `replace_placeholders.js`, `undo_fix_jsx.js`, or `skeletonize.ts` files exist
- [ ] `next.config.ts` does not reference the Punycode locksmith domain

### Image Pipeline
- [ ] `public/images/serponado/` directory exists and contains ≥200 image files
- [ ] All 235 `image_url` fields in `serponado_db.json` contain valid paths to files in `public/images/serponado/`
- [ ] An `imageLoader.ts` file exists implementing Cloudflare Edge Resizing URL pattern
- [ ] Hero images on serponado pages use `priority={true}` and have descriptive alt text

### Branding
- [ ] `lib/data/company.ts` references "Coday UG (haftungsbeschränkt)" — no `{{SCHEMA_ORG_NAME}}`
- [ ] `app/manifest.ts` uses Coday branding — no `{{SCHEMA_ORG_NAME}}`
- [ ] Footer component displays "Coday UG (haftungsbeschränkt), Wetzlar"
- [ ] Impressum page references Coday UG with Umutcan Emre Tezgel
- [ ] Every serponado page contains at least one CTA mentioning "Coday" or "codayweb.de"

### Navigation & Silos
- [ ] `<InTextSiblingLoop />` component exists and renders 4 sibling links on serponado pages
- [ ] `<FloatingRegionalHub />` component exists and links to pillar hub pages
- [ ] `<CyclicFooter />` component exists and renders ring navigation
- [ ] All navigation components are Server Components (no `"use client"` with `useSearchParams`/`useRouter`)

### SEO & GEO
- [ ] `/llms.txt` route serves text content mentioning Coday
- [ ] Every serponado page includes JSON-LD with `Organization` schema for Coday
- [ ] `app/sitemap.ts` generates entries for all 235 serponado slugs
- [ ] `app/robots.ts` explicitly allows GPTBot, ClaudeBot, PerplexityBot

### UI
- [ ] `globals.css` contains OKLCh color values for the dark-tech palette
- [ ] JetBrains Mono is loaded and applied to terminal/code UI elements
- [ ] `@media (prefers-reduced-motion: reduce)` is present in CSS/components
- [ ] Focus styles use visible `3px solid` outlines
