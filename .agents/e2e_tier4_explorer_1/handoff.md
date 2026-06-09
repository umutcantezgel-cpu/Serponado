# Handoff Report: Tier 4 E2E Test Strategy

## 1. Observation
- `TEST_INFRA.md` and `SCOPE_TIER4.md` require testing three specific areas for tier 4: HTTP 200 for a batch of 5 pSEO slugs, mobile viewport visual/CSS checks for the Brutalist UI layout, and validating `sitemap.xml` for `>= 235` URLs.
- By inspecting `/lib/data/serponado_db.json`, I observed it holds the source of truth for the 235 pSEO pages (`records` array containing `slug` properties).
- Inspecting `/app/serponado/[slug]/page.tsx` shows the Brutalist UI uses Tailwind classes like `bg-[#0a0a0a]`, and responsive classes such as `grid-cols-1` for mobile and `sm:grid-cols-2` for larger viewports, as well as `py-8` vs `sm:py-12`.
- Playwright configuration (`playwright.config.ts`) runs tests against `http://localhost:3000` via `npm run dev`.

## 2. Logic Chain
- **Batch of 5 pSEO Slugs**: Since `lib/data/serponado_db.json` contains all the slugs, the test can securely read/import this JSON, slice the first 5 records, and iterate over them using `test.describe`. Inside the loop, it can use `page.goto()` and expect the response `status()` to equal 200. We can listen to `page.on('console', msg => ...)` and `page.on('pageerror')` to verify the absence of errors.
- **Mobile Viewport Checks**: Playwright allows overriding viewports per test block using `test.use({ viewport: { width: 375, height: 667 } })`. In this block, navigating to a pSEO page allows asserting mobile-specific Brutalist CSS. We can verify the dark theme background color (`rgb(10, 10, 10)`) and structural mobile styles (e.g. `toHaveCSS('padding-top', '32px')` on the main container resulting from the `py-8` Tailwind class).
- **Sitemap URL Verification**: Using Playwright's `page.request.get('/sitemap.xml')`, the test can fetch the raw XML. By reading the response body as text and counting the occurrences of the `<url>` tag (via string splitting or regex matching), we can cleanly assert that the count is `>= 235`.

## 3. Caveats
- Next.js development server (`npm run dev`) may emit harmless console warnings or HMR logs. The error assertion must specifically target severity `error` or `pageerror` (exceptions) to avoid flaky test failures.
- Checking exact RGB values might fail if opacity is mixed in some elements, but the base background `#0a0a0a` translates cleanly to `rgb(10, 10, 10)`.

## 4. Conclusion
The implementation strategy for `e2e/tier4.spec.ts` should consist of three distinct test scenarios:
1. Load `serponado_db.json`, iterate over 5 slugs, perform `page.goto()`, and assert HTTP 200 with no severe console errors.
2. Create a test block with `test.use({ viewport: { width: 375, height: 667 } })` and assert `toHaveCSS` values reflecting the Brutalist mobile design (`background-color`, `padding-top`).
3. Use `page.request.get('/sitemap.xml')`, extract the response body, and assert that the `<url>` tag count is `235` or higher.

## 5. Verification Method
- The receiving agent should implement `e2e/tier4.spec.ts` using this exact strategy.
- Run the test file via `npx playwright test e2e/tier4.spec.ts`.
- Invalidation condition: The strategy is invalid if `serponado_db.json` is missing or the CSS classes in `page.tsx` change to different paradigms rendering `.toHaveCSS()` checks obsolete.
