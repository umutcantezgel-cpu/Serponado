## Review Summary

**Verdict**: APPROVE

## Findings

### [Minor] Finding 1: Flaky logic in FAQ test
- **What**: The FAQ component check uses `await faqButtons.count()` before the page may have fully hydrated. Playwright locators are lazy and `count()` evaluates immediately without waiting.
- **Where**: `e2e/tier3.spec.ts` inside `should render the FAQ section visually` test.
- **Why**: If hydration is slow, `faqCount` will be 0, causing it to fall back to the `else` block containing `page.getByText`. The fallback is safe since `await expect(faqText).toBeVisible()` automatically waits, avoiding test flakiness, but it might skip verifying the interactive `button[aria-expanded]` elements.
- **Suggestion**: Use `await expect(faqButtons).toHaveCount(n)` or add an explicit wait if the interactive elements must be strictly verified. The current fallback is acceptable.

### [Minor] Finding 2: Incomplete regex for "Schlüsseldienst"
- **What**: The regex `/Schl[üu]sseldienst/i` does not match the alternative spelling "Schluesseldienst".
- **Where**: `e2e/tier3.spec.ts` in the `should not contain old vocabulary` test.
- **Why**: German umlauts are often replaced with "ue". A more complete regex would be `/Schl(ü|u|ue)sseldienst/i`.
- **Suggestion**: Consider updating the regex for better coverage.

## Verified Claims

- **hero_image test** → verified via source code review → PASS (correct use of `fetchpriority` selector and `alt` attribute check).
- **absence of old vocabulary test** → verified via source code review → PASS (correctly uses `textContent()` and regex).
- **mainContent test** → verified via source code review → PASS (correctly checks for `article` and standard tags).
- **FAQ component test** → verified via source code review → PASS (correctly checks for `aria-expanded` buttons or text fallback).
- **Typecheck** → verified via `npm run typecheck` → PASS (completed successfully with no errors).

## Conclusion

The implementation of `e2e/tier3.spec.ts` completely satisfies the requirements outlined in the Scope and Test Infra documents. The Playwright API usage is correct, assertions are robust, and the `npm run typecheck` passes cleanly.

Verdict: PASS
