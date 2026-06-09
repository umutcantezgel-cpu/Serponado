# Tier 2 E2E Playwright Strategy (pSEO & SEO Elements)

## 1. Observation
- **Scope & Infra:** `SCOPE_TIER2.md` and `TEST_INFRA.md` require Playwright opaque-box testing for dynamic metadata, JSON-LD schemas, internal silo links, and `sitemap.xml`.
- **Metadata:** In `app/serponado/[slug]/page.tsx`, `<title>` and `<meta name="description">` are generated dynamically via `generateMetadata()`.
- **JSON-LD Schema:** The schema is injected dynamically as an array containing both `{"@type": "Article"}` and `{"@type": "FAQPage"}` inside a `<script type="application/ld+json">`.
- **Internal Links (Silo):** The `RelatedSerponadoAlerts` feature is rendered inline in `page.tsx` within a `<section className="mt-16">` containing the `<h3>` "Weiterführende Notfall-Protokolle". Links are rendered as `<a>` elements (via Next.js `<Link>`) pointing to `/serponado/[slug]`. 
- **DB Check:** An analysis of `lib/data/serponado_db.json` shows that currently, pages have a maximum of 3 `internal_links` (110 records have 3 links, 126 have 1 link). None currently contain 4-5 links.
- **Sitemap:** `sitemap.xml` is fully generated via Next.js `app/sitemap.ts` encompassing all routes including pSEO.

## 2. Logic Chain
Based on these observations, the Playwright strategy for `e2e/tier2.spec.ts` should be:
- **Test 1: Metadata Verification**
  - **Action:** Navigate to a sample pSEO page (e.g., `/serponado/serponado-google-core-update-anomalie`).
  - **Selector/API:** `await expect(page).toHaveTitle(/./)` and `page.locator('meta[name="description"]')`.
  - **Assertion:** Ensure title and description are non-empty strings and match expected patterns (e.g., "SERPONADO").
- **Test 2: Schema.org Verification**
  - **Action:** Extract the JSON-LD script content on the same page.
  - **Selector/API:** `const jsonStr = await page.locator('script[type="application/ld+json"]').textContent();`
  - **Assertion:** `JSON.parse(jsonStr)` is an array. Assert it contains objects with `@type: "Article"` and `@type: "FAQPage"`.
- **Test 3: Internal Silo Links**
  - **Action:** Locate the internal links section.
  - **Selector/API:** `const links = page.locator('section:has-text("Weiterführende Notfall-Protokolle") a');`
  - **Assertion:** 
    1. Count: `await expect(links).toHaveCount(n)` (Note: Code will test for 4-5 per requirement, but it will fail against current DB data).
    2. Hrefs: Iterate through the links and assert `await expect(links.nth(i)).toHaveAttribute('href', /^\/serponado\/.+/);`.
- **Test 4: Sitemap Verification**
  - **Action:** Fetch `/sitemap.xml`.
  - **Selector/API:** `const response = await request.get('/sitemap.xml');`
  - **Assertion:** `expect(response.status()).toBe(200);` and `expect(await response.text()).toContain('<?xml');`.

## 3. Caveats
- **Link Count Discrepancy:** `SCOPE_TIER2.md` explicitly requires exactly 4-5 internal links. However, the current `serponado_db.json` only provides a maximum of 3 links per entry. The assertion `expect([4, 5]).toContain(count)` will fail. The implementer should either adapt the test to accept `3` or update the mock DB.
- **Component vs Inline:** The scope references `<RelatedSerponadoAlerts />` as a component, but the code implements it inline in `page.tsx`. This does not affect opaque-box testing.

## 4. Conclusion
The proposed strategy strictly aligns with opaque-box testing principles using built-in Playwright locators (`locator()`), assertions (`expect()`), and APIs (`request.get()`). It directly targets the DOM outputs rendered by Next.js SSG without relying on internal app states. 

## 5. Verification Method
The strategy can be implemented in `e2e/tier2.spec.ts`. Run the following command to verify the execution (after starting the dev server or build):
`npx playwright test e2e/tier2.spec.ts`

If the test for link count fails, verify `lib/data/serponado_db.json` for the actual number of links attached to the sample slug.
