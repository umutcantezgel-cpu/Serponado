# Coday UG (haftungsbeschränkt) — Next.js 15 Website

> **Operated by:** Coday UG (haftungsbeschränkt), Wetzlar  
> **Domain:** [codayweb.de](https://codayweb.de)  
> **Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion

---

## 🚀 Quick Start

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (http://localhost:3000)
npm run dev

# Produktions-Build erstellen
npm run build

# Produktions-Build lokal testen
npm start
```

---

## 📂 Projektstruktur

```
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root Layout, Metadata API, Icons
│   ├── page.tsx                  # Homepage (SEO Content)
│   ├── (marketing)/              # Marketing-Seiten (Leistungen, Kontakt, etc.)
│   ├── (legal)/                  # Rechtliche Seiten (Impressum, Datenschutz, AGB)
│   ├── llms.txt/                 # LLM-Kurzindex (AI Crawler Support)
│   └── llms-full.txt/            # LLM-Vollindex
├── components/
│   ├── StickyHeader.tsx          # Hauptnavigation mit Mega-Menü
│   ├── Footer.tsx                # Footer mit Trust-Links
│   ├── HeroSection.tsx           # H1-optimierter Hero
│   └── seo/                      # SEO-Komponenten (JsonLd, SeoOptimizedImage)
├── lib/
│   ├── schema.ts                 # Schema.org (siteUrl = Single Source of Truth)
│   ├── metadata.ts               # Shared Metadata Generator
│   ├── seo/jsonld.ts             # Organization/Website Schema
│   └── data/                     # Company, Navigation, Locations Daten
├── next.config.ts                # Server-Config (Redirects, Headers)
└── public/                       # Statische Assets (Icons, Fonts, Images)
```

---

## 🔧 SEO-Architektur

### Schema.org
- **Typ:** `["ProfessionalService", "ITUtility"]`
- **GPS:** 50.5537 / 8.5014
- **Telefon:** +4964418056279

### Link-Struktur
- **Header ↔ Footer:** Synonym-Strategie (keine duplicate Anchor Texts)
- **Logo:** `<span className="sr-only">` für Crawler-Sichtbarkeit

---

## 📊 Build-Status

| Metrik | Wert |
|---|---|
| TypeScript Errors | 0 |
| ESLint Errors | 0 |
| Build Exit Code | 0 |

---

## 📝 Kontakt

- **Telefon:** 06441 8056279
- **E-Mail:** info@codayweb.de
- **Adresse:** Am Forum 3, 35578 Wetzlar

---

## 📄 Lizenz

Proprietär — © 2026 Coday UG (haftungsbeschränkt). Alle Rechte vorbehalten.
