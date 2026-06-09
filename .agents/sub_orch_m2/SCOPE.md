# Scope: Milestone 2 (The Purge & UI Refactor)

## Architecture
- Completely remove all "Schlüsseldienst" vocabulary, local addresses, old phone numbers, trust badges, and old local Schema.org from the codebase.
- Transform UI to "Industrial Brutalist / Dark-Tech / Alert" theme (Black, Dark Gray, Neon-Red `#ff0033`, Monospace fonts).
- Refactor layout containers: "Unsere Leistungen" -> "Serponado Schadensberichte", "Kontakt" -> "Serponado Notfall-Audit".
- Implement `<RelatedSerponadoAlerts />` UI component (to be used later at bottom of `page.tsx`) to output internal links as clickable cards with clean HTML `<a>` tags.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 2.1 | Vocabulary Purge | Remove all trace of Schlüsseldienst strings and assets. | none | PLANNED |
| 2.2 | Theme Refactor | Apply Industrial Brutalism theme globally. Rename containers. | 2.1 | PLANNED |
| 2.3 | Related Cards Component | Create `<RelatedSerponadoAlerts />` component. | none | DONE |
