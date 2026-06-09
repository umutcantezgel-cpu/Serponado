# Scope: Tier 3 E2E Tests (Edge Cases & UI Polish)

## Objective
Implement Tier 3 E2E tests using Playwright based on TEST_INFRA.md.

## Requirements
- Write Playwright tests in the `e2e/tier3.spec.ts` file.
- Verify `hero_image` is present in the DOM with `fetchPriority="high"` and an SEO-relevant `alt` attribute.
- Scan the DOM of the homepage and sample pSEO pages to assert the complete absence of old vocabulary (e.g., "Schlüsseldienst").
- Verify the "mainContent" area exists on a pSEO page and contains standard HTML tags (e.g., paragraphs, headings).
- Verify the FAQ section renders.
