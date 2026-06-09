# Scope: Tier 4 E2E Tests (Comprehensive/Scale Testing)

## Objective
Implement Tier 4 E2E tests using Playwright based on TEST_INFRA.md.

## Requirements
- Write Playwright tests in the `e2e/tier4.spec.ts` file.
- Request a batch of 5 pSEO slugs and verify they all return HTTP 200 OK without console/network errors.
- Perform visual layout checks (or CSS property assertions) on mobile viewports for the Brutalist UI layout.
- Assert that `sitemap.xml` contains a `<urlset>` with at least 235 `<url>` tags.
