# Handoff Report: Milestone 2.1 Forensic Audit (Iteration 6)

## Observation
1. **Panzerriegel** remains in:
   - `lib/data/case-studies.ts` (lines 29, 32, 34)
   - `lib/data/imageAssets.ts` (lines 550, 551)
   - `lib/data/services.ts` (line 74)
   - `lib/data/lexikon.ts` (lines 49, 85, 88, 89, 90, 94, 97, 116)
   - `components/growth/RiskCalculator.tsx` (line 188)
   - `components/locations/LocationScenarios.tsx` (line 48)
2. **Old Phone Number (`8056279` / `+4964418056279`)** remains in:
   - `__tests__/lib/formatters.test.ts` (lines 57, 63, 74, 78)
   - `lib/data/company.ts` (lines 24, 26)
3. **Grammatical Nonsense (`innerhalb von Soforthilfe`)** found in:
   - `app/llms-full.txt/route.ts` (line 55)
   - `app/(marketing)/leistungen/ai-content-sanierung/page.tsx` (line 50)
4. **Legacy Terms (`notdienst`, `schlosswechsel`, `türöffnung`, `autoöffnung`)** appear in 854 locations. Key files include:
   - `lib/schema.ts`, `lib/contentDifferentiation.ts`, `lib/contentGraph.ts`, `lib/types/index.ts`, `lib/cta-copy.ts`, `lib/personalization.ts`, `lib/faqData.ts`, `lib/metadata.ts`, `lib/localData.ts`, `lib/seo/jsonld.ts`
   - All 15+ `lib/data/locations_*.ts` files (e.g. `locations_ring4b.ts`, `locations_ring3d.ts`)
   - `lib/data/navigation.ts`, `lib/data/imageAssets.ts`, `lib/data/testimonials.ts`, `lib/data/lexikon.ts`, `lib/data/services.ts`, `lib/data/team.ts`, `lib/data/pois.ts`
   - `app/llms-full.txt/route.ts`, `app/(marketing)/leistungen/core-update-notdienst/page.tsx`, `app/(marketing)/bewertungen/page.tsx`, `app/standorte/[poiSlug]/page.tsx`, `app/api/cron/video-syndication/route.ts`
   - Components: `components/reviews/reviews.data.ts`, `components/locations/LocalHero.tsx`, `components/locations/LocationServices.tsx`, `components/sections/home/SeoContentSection.tsx`, `components/sections/TestimonialGrid.tsx`, `components/FloatingWhatsAppWidget.tsx`, `components/growth/PriceEstimator.tsx`, `components/Footer.tsx`, `components/seo/SeoOptimizedImage.tsx`, `components/pricing/PricingCalculator.tsx`
   - Tests: `__tests__/lib/schema.test.ts`, `__tests__/lib/metadata.test.ts`

## Logic Chain
- The prior automated string replacement blindly mapped certain keys without observing grammatical context (e.g., swapping `15-30 Minuten` to `Soforthilfe` resulted in `innerhalb von Soforthilfe`), which is invalid German.
- Certain words like "Panzerriegel", "Notdienst" (even as "SEO-Notdienst"), "Türöffnung", "Autoöffnung", and "Schlosswechsel" are remnants of the original locksmith site and conflict with the new B2B SEO Agency (Serponado Taskforce) branding.
- Hardcoded test assertions and company data still feature the old Wetzlar locksmith phone number (`06441 8056279`). 

## Caveats
- Since the replacements for `notdienst`, `schlosswechsel`, `türöffnung`, etc., appear in 854 locations (heavily concentrated in `lib/data/locations_*.ts` files), manually modifying each file might be tedious for the implementer but is necessary to prevent grammar breakage.
- The `company.ts` file needs a definitive new phone number (e.g. `0151 12345678` or `0800-SERP-SOS`), which must be synced with the formatting tests.

## Conclusion
A surgical, manual or carefully scoped replacement across these specific files is required. 
Suggested exact textual replacements (grammatically correct):
- **Panzerriegel** ➔ `Content-Tresor` (or `Disavow-Liste` where grammatically fitting). E.g. `Panzerriegel Montage` ➔ `Content-Tresor Einrichtung`.
- **+4964418056279 / 06441-8056279** ➔ `+4915112345678` / `0151-12345678` (or another generic Coday number in `company.ts` and `formatters.test.ts`).
- **innerhalb von Soforthilfe** ➔ `innerhalb von 30 Minuten` or `in kürzester Zeit`.
- **Notdienst / SEO-Notdienst / Core-Update-Notdienst** ➔ `Taskforce`, `Emergency-Support`, `Recovery-Team`, `SEO-Taskforce`, or `Core-Update-Recovery`.
- **Türöffnung** ➔ `Index-Rettung`, `Penalty-Recovery`, or `Website-Wiederherstellung`. E.g., `Türöffnung zum Festpreis` ➔ `Index-Rettung zum Festpreis`.
- **Autoöffnung** ➔ `Shop-Rettung` or `E-Commerce-Recovery`.
- **Schlosswechsel** ➔ `Systemwechsel` or `Content-Sanierung`.

## Verification Method
1. Run `grep -rniE "panzerriegel|8056279|schlosswechsel|türöffnung|notdienst|autoöffnung|innerhalb von soforthilfe" lib app components content data __tests__`. It must return 0 results.
2. Run `npm run test` to verify `formatters.test.ts` and `schema.test.ts` pass with the new values.
3. Run `npm run build` to ensure no Type errors were introduced by the content changes.
