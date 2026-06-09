# Handoff: Tier 3 E2E Tests Implementation

## Observation
- Verified requirements in `TEST_INFRA.md` and `SCOPE_TIER3.md`.
- Implemented `e2e/tier3.spec.ts` matching the four criteria:
  1. Hero image fetchpriority & alt text (`img[fetchpriority="high"]`).
  2. Absence of old vocabulary (`Schlüsseldienst`) on the homepage and pSEO page.
  3. Verification of `mainContent` HTML tags (`p`, `h2` inside `article.prose`).
  4. Visual rendering of the FAQ section (buttons with `aria-expanded` or FAQ heading).
- Ran `npm run typecheck` which completed without errors.
- Ran `npx playwright test e2e/tier3.spec.ts`, which we expect to fail due to the application not being fully built/deployed yet (per instructions).

## Logic Chain
- The test file groups all Tier 3 specs in `test.describe('Tier 3: Edge Cases & UI Polish (P2)', ...)` to organize correctly.
- Navigation targets include `/` for the homepage and `/serponado/notdienst-berlin` for the pSEO page.
- We use `.first()` on `img` and `article` as safety nets because multiple such tags might exist, and we just need to ensure at least one meets the criteria.
- Used regex matching for vocabulary purging (`not.toMatch(/Schl[üu]sseldienst/i)`).
- Validated TypeScript via `npm run typecheck` to ensure CI wouldn't fail on static analysis.

## Caveats
- Tests were evaluated conceptually but not validated against a running application, meaning selectors like `article.prose` might need to be refined if the application DOM layout changes.
- Fallback text search for FAQ (`/FAQ|Häufig/i`) was implemented in case the interactive accordion component uses a different DOM layout.

## Conclusion
- Playwright E2E tests for Tier 3 have been completely implemented in `e2e/tier3.spec.ts`.
- The code is syntactically correct and type-checks successfully.
- No further work is needed on this subtask as per the initial request.

## Verification Method
- Execute `npm run typecheck` to confirm TS compilation.
- Review `e2e/tier3.spec.ts` for structural adherence to Tier 3 tests.
- When the application is functional, run `npx playwright test e2e/tier3.spec.ts`.
