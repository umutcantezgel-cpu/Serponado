# Handoff: Tier 3 E2E Tests Strategy

## 1. Observation
- `SCOPE_TIER3.md` demands implementation of four Playwright E2E tests focusing on: the `hero_image` attributes (`fetchpriority`, `alt`), complete purging of "Schlüsseldienst" and related legacy vocabulary, validation of the `mainContent` area's HTML structure, and the successful rendering of the FAQ section.
- `TEST_INFRA.md` dictates an opaque-box testing philosophy running against the production build, ensuring that we test the final generated markup via DOM inspection.

## 2. Logic Chain
- **Structure**: We group the tests under a single `describe('Tier 3: Edge Cases & UI Polish')` block to logically contain the P2 Tier tests.
- **Hero Image Test**: By selecting the first primary image on a pSEO page (e.g., using `page.locator('main img').first()` or a specific `data-testid`), we can directly assert `toHaveAttribute('fetchpriority', 'high')` and `toHaveAttribute('alt', /.+/)`.
- **Vocabulary Purge Test**: To ensure complete absence of legacy terms, we extract the full text context of the `body` element and use regex assertions (e.g., `.not.toMatch(/schlüsseldienst/i)`) on both the homepage and a representative pSEO page.
- **Main Content Test**: We target the `<main>` or `<article>` element and count the number of `<p>` and heading tags using `page.locator('main p').count()` to verify that the rich text content is rendering correctly.
- **FAQ Section Test**: We look for the FAQ container (e.g., `section#faq` or by heading text) and verify its visibility, plus the presence of child interactive elements (like `<details>` and `<summary>`).

## 3. Caveats
- The exact DOM selectors (e.g., `data-testid` attributes, specific element IDs like `#faq`) are hypothetical. The implementer may need to adapt these based on the actual component markup in the repository.
- We assume standard native elements (like `<details>` for FAQs) or basic semantic markup (`<main>`, `<article>`) are used.
- We have not reviewed the application code itself, only the test infrastructure guidelines.

## 4. Conclusion
The proposed strategy aligns perfectly with the opaque-box testing philosophy of `TEST_INFRA.md`. The implementer can proceed by writing the tests in `e2e/tier3.spec.ts` using standard Playwright assertions to validate the required DOM attributes, structural elements, and text content against a running production build.

## 5. Verification Method
- The implementer will write the test file at `e2e/tier3.spec.ts`.
- Run the tests using the project test command, typically `npx playwright test e2e/tier3.spec.ts`.
- The tests should pass against a production build (started via `npm run build && npm run start`).
