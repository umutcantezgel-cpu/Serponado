# Handoff Report: Tier 3 E2E Tests Strategy

## 1. Observation
- `SCOPE_TIER3.md` requires Playwright tests to verify: 1) `hero_image` attributes (`fetchpriority="high"`, `alt`), 2) complete absence of "Schlüsseldienst", 3) the existence of a "mainContent" area containing standard HTML tags (paragraphs, headings), and 4) that the FAQ section visually renders.
- `app/serponado/[slug]/page.tsx` renders dynamic content via `dangerouslySetInnerHTML` inside an `<article className="prose ...">` element.
- The `SeoHeroImage` component sets `priority={true}` which Next.js transpiles to the DOM attribute `fetchpriority="high"`.
- The `FAQAccordion` component (used on the homepage and intended for FAQ sections) utilizes `<button aria-expanded="...">` as the interactive toggle.
- `app/serponado/[slug]/page.tsx` currently only contains FAQ markup in `application/ld+json` schema but not as visual DOM components (e.g. `FAQAccordion` is missing in the return JSX).

## 2. Logic Chain
1. **Hero Image**: To verify the image without relying on internal Next.js React state, the test must resolve `img[fetchpriority="high"]` using `page.locator()` and assert visibility and `alt` length > 0.
2. **Vocabulary Purge**: The fastest and most robust way to verify absence of text is retrieving `body.textContent()` and asserting it `.not.toMatch(/Schl[üu]sseldienst/i)`. This ignores `<meta>` tags or URL strings but strictly verifies user-facing text.
3. **Main Content**: Since pSEO data is injected into `<article className="prose">`, targeting this selector and checking for the visibility of `.first()` `<p>` and `<h2>` children proves the standard HTML tags rendered successfully.
4. **FAQ Section**: The specification explicitly states the FAQ must "render". Therefore, the E2E test must target the visual DOM (e.g., `button[aria-expanded]` or heading `/FAQ/i`), and if it fails, it will flag that the UI implementer missed rendering the visual FAQ on pSEO pages.

## 3. Caveats
- The pSEO UI `app/serponado/[slug]/page.tsx` currently lacks visual FAQ components. The test will naturally fail until an implementer updates the template to include the `<FAQAccordion>` or a similar visual structure.
- Depending on layout composition, the `hero_image` might be handled inside `data.htmlContent` rather than a direct `next/image`. If it's an inline `<img>` tag inside the HTML string, it must explicitly have `fetchpriority="high"` set in the database generator.

## 4. Conclusion
The Playwright strategy is finalized. Tests must use agnostic DOM selectors (`img[fetchpriority="high"]`, `article.prose`, `button[aria-expanded]`) and text-content assertions to fulfill the Tier 3 requirements without tightly coupling to React internals.

## 5. Verification Method
- The strategy can be found in `analysis.md` in this directory.
- The next agent must write the `e2e/tier3.spec.ts` using the provided test case structure.
- Verification is done by running `npx playwright test e2e/tier3.spec.ts`.
