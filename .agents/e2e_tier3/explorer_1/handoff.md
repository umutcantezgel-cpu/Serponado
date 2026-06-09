# Handoff: Tier 3 E2E Tests Strategy

## 1. Observation
*   I read `/Users/umurey/Documents/antigravity/peaceful-hopper/ms-schluesseldienst/.agents/e2e_orch/SCOPE_TIER3.md` which lists the 4 core Tier 3 requirements: verifying the `hero_image` properties (`fetchpriority="high"`, SEO `alt`), verifying complete removal of old vocabulary ("Schlüsseldienst"), ensuring a "mainContent" element exists with standard HTML tags, and validating the rendering of the FAQ section.
*   I read `/Users/umurey/Documents/antigravity/peaceful-hopper/ms-schluesseldienst/TEST_INFRA.md` which establishes that tests use Playwright (Opaque-box), hit a production build (SSG routes under `/serponado/[slug]`), and run in `e2e/tier3.spec.ts`.

## 2. Logic Chain
*   **Structure:** We need a single test suite `describe('Tier 3: Edge Cases & UI Polish (P2)')` in `tier3.spec.ts` that aligns with the `TEST_INFRA.md` classification.
*   **Hero Image:** To verify the `hero_image` requirements transparently, the test must resolve the main image element via a standard DOM locator (e.g., `page.locator('img').first()` or specifically tagged class/data-attr) and assert against its `fetchpriority` and `alt` properties.
*   **Vocabulary Purge:** Since "Schlüsseldienst" needs to be completely eradicated from the layout, a broad check extracting the entire `page.locator('body').innerText()` (or `textContent()`) on both the homepage and a standard `/serponado/slug-1` pSEO page is the most foolproof method.
*   **mainContent Validation:** The `mainContent` instruction requires targeting the primary content area (e.g., `page.locator('main')` or `#mainContent`) and asserting the child elements via `count > 0` for `<p>`, `<h2>`, etc., to confirm standard semantic HTML.
*   **FAQ Validation:** Testing the FAQ rendering means navigating to a pSEO page, locating the FAQ container (e.g., `section#faq`), and asserting visibility of at least one child FAQ item.

## 3. Caveats
*   The exact DOM classes/IDs (e.g., `#mainContent`, `.faq-item`, specific hero image classes) are currently theoretical because I am performing a read-only strategy definition without inspecting the compiled UI codebase.
*   If the FAQ uses specific client-side hydration (like a headless UI Accordion), additional checks might be required (e.g., clicking the trigger and awaiting the answer visibility).

## 4. Conclusion
The Tier 3 test implementation should consist of a Playwright file (`e2e/tier3.spec.ts`) containing a single root `describe` block grouping 4 specific feature checks. It will execute opaque-box DOM traversals to inspect attributes (`fetchpriority`, `alt`), recursively scan textual content for forbidden vocabulary, and ensure structural HTML integrity in the main body and FAQ sections.

## 5. Verification Method
To verify this strategy:
1.  Open `/Users/umurey/Documents/antigravity/peaceful-hopper/ms-schluesseldienst/.agents/e2e_tier3/explorer_1/analysis.md` to see the proposed structure and locator logic.
2.  Have an implementer agent translate the strategy into `e2e/tier3.spec.ts`.
3.  Run the test suite using standard Playwright commands (e.g., `npx playwright test e2e/tier3.spec.ts`).
