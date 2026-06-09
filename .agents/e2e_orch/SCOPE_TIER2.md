# Scope: Tier 2 E2E Tests (Core Functionality & SEO)

## Objective
Implement Tier 2 E2E tests using Playwright based on TEST_INFRA.md.

## Requirements
- Write Playwright tests in the `e2e/tier2.spec.ts` file.
- On a sample pSEO page, verify the presence of dynamic `<title>` and `<meta name="description">`.
- Verify the presence and structure of the `<script type="application/ld+json">` containing `Article` and `FAQPage` schemas.
- Verify the `<RelatedSerponadoAlerts />` component renders on a pSEO page, containing exactly 4-5 internal links with valid `href` attributes pointing to `/serponado/[slug]`.
- Request `/sitemap.xml` and verify it returns HTTP 200.
