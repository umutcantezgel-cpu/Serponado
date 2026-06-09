# Scope: Tier 1 E2E Tests (Critical Path)

## Objective
Implement Tier 1 E2E tests using Playwright based on TEST_INFRA.md.

## Requirements
- Write Playwright tests in the `e2e/tier1.spec.ts` file.
- Verify the homepage loads successfully (HTTP 200).
- Verify the homepage displays the new Brutalist theme and the updated section titles ("Serponado Schadensberichte", "Serponado Notfall-Audit").
- Navigate to a known pSEO route (e.g., `/serponado/serponado-algorithmus-anomalie`) and verify successful page load.
- Verify the "SEO Contest 2026" blog page loads successfully.
- Tests should mock or rely on basic routing (opaque box). If pages don't exist yet, write the tests as they should pass when implemented. Do not write the implementation code.
