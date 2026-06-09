# Project: Serponado pSEO Refactoring

## Architecture
- **Data Generation:** Node.js scripts in `scripts/` to generate `data/serponado-data.json` with 235 records using spintax and mapping `coday_campaign_images_200` to `public/images/serponado/`.
- **UI & Layout:** Next.js App Router. Global layout re-themed to Industrial Brutalist / Dark-Tech. Eradication of previous local "Schlüsseldienst" specific vocabulary.
- **Dynamic Routing:** `app/serponado/[slug]/page.tsx` using `generateStaticParams`.
- **SEO & Indexing:** Dynamic `generateMetadata`, Schema.org injection, `sitemap.ts` overwrite, and Google Cloud Indexing API script.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Data Pipeline & Assets | Generate `data/serponado-data.json` (235 records with spintax, `related_slugs`). Map and rename 200 images to `public/images/serponado/`. | none | PLANNED |
| 2 | The Purge & UI Refactor | Remove old vocabulary. Apply "Industrial Brutalism / Dark-Tech / Alert" theme (Black, Dark Gray, Neon-Red `#ff0033`, Monospace fonts). Create `<RelatedSerponadoAlerts />` component. | none | PLANNED |
| 3 | Routing, SEO & Sitemap | Build `app/serponado/[slug]/page.tsx`, `next/image`, Schema.org, dynamic `sitemap.ts`, `google-indexer.js`, and adapt blog post. | M1, M2 | PLANNED |
| 4 | Final E2E Validation | Pass 100% of the E2E test suite (Tiers 1-4). Adversarial hardening (Tier 5). | M3 | PLANNED |

## Interface Contracts
### `generate-pseo-db.js` ↔ Next.js Routing
- JSON structure expected by the frontend: `[{ slug, metaTitle, metaDescription, h1, hero_image: { path, alt }, content_image: { path, alt }, mainContent, faq: [{ question, answer }], related_slugs: [slugs] }]`

## Code Layout
- Frontend pages: `app/`
- Data store: `data/`
- Scripts: `scripts/`
- Static Assets: `public/images/serponado/`
