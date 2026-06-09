# Handoff: Tier 1 E2E Test Strategy

## 1. Observation
- `SCOPE_TIER1.md` mandates the implementation of Playwright tests in `e2e/tier1.spec.ts`.
- The tests must adhere to an **opaque-box** testing philosophy as described in `TEST_INFRA.md`, meaning no reliance on internal application state, only network responses and DOM visibility.
- There are four specific test requirements for Tier 1:
  1. Homepage loads successfully (HTTP 200).
  2. Homepage displays the Brutalist theme and updated titles ("Serponado Schadensberichte", "Serponado Notfall-Audit").
  3. A known pSEO route (`/serponado/serponado-algorithmus-anomalie`) loads successfully.
  4. The blog page (`/blog/seo-contest-2026`) loads successfully.

## 2. Logic Chain
- **Requirement 1 & 3 & 4 (Page Loads):** To verify page loads without internal state, Playwright's `page.goto()` should be used, followed by asserting that `response.ok()` is true or `response.status() === 200`.
- **Requirement 2 (Brutalist Theme & Titles):** Since the test must be an opaque box, the theme change and new titles should be verified by checking for the exact text strings in the DOM using `expect(page.getByText('Serponado Schadensberichte')).toBeVisible()` and `expect(page.getByText('Serponado Notfall-Audit')).toBeVisible()`. Checking for the presence of these texts acts as a proxy for the updated structure/theme.

## 3. Caveats
- I am a read-only investigator and have not implemented the actual test code.
- This strategy assumes the pSEO and blog slugs provided in the scope (`/serponado/serponado-algorithmus-anomalie`, `/blog/seo-contest-2026`) match the actual paths configured in the application.

## 4. Conclusion
The implementation of `e2e/tier1.spec.ts` should consist of a Playwright `test.describe('Tier 1: Critical Path', ...)` block containing tests that navigate to the specified routes, assert HTTP 200 status, and use `page.getByText` to verify the presence of the updated Brutalist section titles on the homepage.

## 5. Verification Method
1. Implement the proposed strategy in `e2e/tier1.spec.ts`.
2. Run the tests using `npx playwright test e2e/tier1.spec.ts`.
3. The tests should pass if the application correctly implements the features, fulfilling the Tier 1 scope.
