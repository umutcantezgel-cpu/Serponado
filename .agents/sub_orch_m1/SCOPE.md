# Scope: Milestone 1 (Data Pipeline & Assets)

## Architecture
- `scripts/generate-pseo-db.js`: Script to generate `data/serponado-data.json`.
- DB must contain exactly 235 records (15 Core-Pillars, 110 DACH cities, 110 B2B niches).
- Schema per record: `slug`, `metaTitle`, `metaDescription`, `h1`, `hero_image` (path, alt), `content_image` (path, alt), `mainContent` (HTML string, min 800 words, highly scientific clinical SEO German, using spintax for 0% duplicate), `faq` (array), `related_slugs` (array of 4-5 related URLs).
- `coday_campaign_images_200` folder images must be moved/copied to `public/images/serponado/` and renamed programmatically to strict SEO names.
- All 200 images must be used at least once as `hero_image` across the 235 JSON records (use modulo). Generate unique SEO alt-tags.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1.1 | Image Mapping Script | Script to move/rename images. | none | PLANNED |
| 1.2 | DB Generation Script | Script to generate `serponado-data.json` with required schema and spintax. | 1.1 | PLANNED |

## Interface Contracts
- Next.js will read `data/serponado-data.json`. Structure must be exactly as required.
