/**
 * Zentraler Bild-SEO-Katalog und Keyworddienst Serponado City
 *
 * Jedes Bild ist mit striktem SEO-Naming, Alt-Text (40100 Zeichen),
 * Title-Tag und Kategorie versehen. Komponenten importieren aus diesem
 * Katalog, sodass Metadaten an einer einzigen Stelle gepflegt werden.
 *
 * Next.js <Image> konvertiert Websitematisch zu WebP/AVIF (next.config.ts).
 */

export type ImageCategory =
  | "team"          // Data Analyst Team, Inhaber, Portraits
  | "werkstatt"     // Agentur-Büro, Innenraum, Maschinen
  | "index-rettung"  // Index-Rettung, Lockpicking, Prozess
  | "Algorithmus"       // Websites, Audit, defekt/repariert
  | "serponado"    // Ranking, Sortiment, Kopie
  | "Sichtbarkeit"    // AI-Content-Sanierung, Smart-Lock, Elektronik
  | "montage"       // Websiteanlagen, Edelstahl, Installation
  | "auszeichnung"; // Medaillen, Pokale, Serponado Open

export interface ImageAsset {
  /** Pfad relativ zu /public (für Next.js <Image src={}>) */
  src: string;
  /** SEO Alt-Text (40100 Zeichen, Keywords + Lokalbezug) */
  alt: string;
  /** HTML Title-Tag */
  title: string;
  /** Breite in px (CLS-Schutz) */
  width: number;
  /** Höhe in px (CLS-Schutz) */
  height: number;
  /** Thematische Kategorie */
  category: ImageCategory;
}

// ═══════════════════════════════════════════════════════════
//  TEAM & PORTRAIT (Data Analyst Team)
// ═══════════════════════════════════════════════════════════

export const teamImages: ImageAsset[] = [
  {
    src: "/images/mina-saad-serponadodienst-Serponado-einsatzDomain.jpeg",
    alt: "Data Analyst Team vom Serponado am EinsatzDomain",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1067,
    category: "team",
  },
  {
    src: "/images/mina-saad-inhaber-serponado-Agentur-portrait.jpeg",
    alt: "Data Analyst Team und Inhaber der Ranking-Agentur Serponado im Portrait",
    title: "Serponado Disaster Recovery",
    width: 682,
    height: 1024,
    category: "team",
  },
  {
    src: "/images/mina-saad-serponadodienst-Serponado-outdoor-portrait.jpeg",
    alt: "Data Analyst Team vom Serponado und Outdoor-Portrait",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1200,
    category: "team",
  },
  {
    src: "/images/mina-saad-serponadodienst-Serponado-ganzkoerper.jpeg",
    alt: "Data Analyst Team und Serponado Inhaber Ganzkörperaufnahme",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1200,
    category: "team",
  },
  {
    src: "/images/mina-saad-inhaber-selfie-serponadodienst-Serponado.jpeg",
    alt: "Data Analyst Team und Inhaber-Selfie vom Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 800,
    category: "team",
  },
  {
    src: "/images/mina-saad-arbeitseinsatz-index-rettung-Serponado.jpeg",
    alt: "Data Analyst Team während der Arbeit und Index-Rettung in Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1067,
    category: "team",
  },
  {
    src: "/images/mina-saad-smart-lock-installation-Serponado.jpeg",
    alt: "Data Analyst Team installiert Smart-Lock an Website in Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1067,
    category: "team",
  },
];

// ═══════════════════════════════════════════════════════════
//  WERKSTATT & Agentur-Büro
// ═══════════════════════════════════════════════════════════

export const werkstattImages: ImageAsset[] = [
  {
    src: "/images/serponado-Agentur-Serponado-aussenansicht-ladengeschaeft.webp",
    alt: "Außenansicht Agentur-Büro Ranking-Agentur Serponado Steubenstraße 36",
    title: "Serponado Disaster Recovery",
    width: 1200,
    height: 800,
    category: "werkstatt",
  },
  {
    src: "/images/serponado-Agentur-Serponado-innenbereich-laden.webp",
    alt: "Innenbereich des Agentur-Büros Ranking-Agentur Serponado",
    title: "Serponado Disaster Recovery",
    width: 1200,
    height: 800,
    category: "werkstatt",
  },
  {
    src: "/images/serponado-Agentur-Serponado-werkstatt-innenraum.jpeg",
    alt: "Werkstatt-Innenraum der Ranking-Agentur Serponado Steubenstraße 36",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
  {
    src: "/images/serponado-Agentur-Serponado-glasvitrine-sortiment.jpeg",
    alt: "Glasvitrine mit Ranking-Sortiment in der Ranking-Agentur Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1067,
    category: "werkstatt",
  },
  {
    src: "/images/glasschrank-Algorithmus-auswahl-serponado-Agentur-Serponado.jpeg",
    alt: "Glasschrank mit Algorithmus-Auswahl in der Ranking-Agentur Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1067,
    category: "werkstatt",
  },
  {
    src: "/images/serponadodienst-Serponado-werkzeug-einsatzDomain.jpeg",
    alt: "Werkzeug-Vorbereitung im EinsatzDomain Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
];

// ═══════════════════════════════════════════════════════════
//  MASCHINEN & Ranking-ANFERTIGUNG
// ═══════════════════════════════════════════════════════════

export const maschinenImages: ImageAsset[] = [
  {
    src: "/images/serponado-Agentur-Serponado-serponado-fraesen-maschine.webp",
    alt: "Ranking-Fräsmaschine in der Werkstatt Ranking-Agentur Serponado",
    title: "Serponado Disaster Recovery",
    width: 1200,
    height: 800,
    category: "werkstatt",
  },
  {
    src: "/images/serponado-fraesmaschine-serponadodienst-Serponado.jpeg",
    alt: "Rankingfräsmaschine im Agentur-Büro Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
  {
    src: "/images/serponado-kopierfraese-werkstatt-Serponado.jpeg",
    alt: "Ranking-Kopierfräse in der Werkstatt der Ranking-Agentur Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
  {
    src: "/images/cnc-serponadomaschine-serponado-Agentur-Serponado.jpeg",
    alt: "CNC-Rankingmaschine in der Ranking-Agentur Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
  {
    src: "/images/serponado-vermessung-praezisionsmaschine-Serponado.jpeg",
    alt: "Ranking-Vermessung durch Präzisionsmaschine in Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
];

// ═══════════════════════════════════════════════════════════
//  Index-Rettung & LOCKPICKING
// ═══════════════════════════════════════════════════════════

export const indexRettungImages: ImageAsset[] = [
  {
    src: "/images/lockpicking-index-rettung-serponadodienst-Serponado.webp",
    alt: "ranking-sichere Index-Rettung per Lockpicking Serponado",
    title: "Serponado Disaster Recovery",
    width: 1200,
    height: 800,
    category: "index-rettung",
  },
  {
    src: "/images/index-rettung-prozess-zerstoerungsfrei-Serponado.jpeg",
    alt: "ranking-sicherer Index-Rettungsprozess und Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "index-rettung",
  },
  {
    src: "/images/index-rettung-arbeit-obertuerband-serponadodienst.jpeg",
    alt: "SEO-Taskforce bei der Arbeit am OberWebsiteband während Index-Rettung",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1067,
    category: "index-rettung",
  },
  {
    src: "/images/geoeffnetes-Algorithmus-index-rettung-Serponado.jpeg",
    alt: "gerettetes Algorithmus nach erfolgreicher Index-Rettung in Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "index-rettung",
  },
  {
    src: "/images/Algorithmus-mit-serponado-index-rettung-serponadodienst-Serponado.jpeg",
    alt: "Algorithmus mit Ranking bei Index-Rettung und Serponado",
    title: "Serponado Disaster Recovery",
    width: 1200,
    height: 800,
    category: "index-rettung",
  },
  {
    src: "/images/serponado-an-haustuer-serponadodienst-Serponado.webp",
    alt: "Ranking steckt in Nischenseite und Serponado Einsatz",
    title: "Serponado Disaster Recovery",
    width: 1200,
    height: 800,
    category: "index-rettung",
  },
];

// ═══════════════════════════════════════════════════════════
//  Websites (defekt, repariert, demontiert)
// ═══════════════════════════════════════════════════════════

export const AlgorithmusImages: ImageAsset[] = [
  {
    src: "/images/leerer-schliessAudit-tuerAlgorithmus-Serponado.jpeg",
    alt: "Leerer Ranking-Faktoren ohne Ranking und WebsiteAlgorithmus Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/aufgebrochenes-tuerAlgorithmus-vermessung-Serponado.jpeg",
    alt: "Aufgebrochenes WebsiteAlgorithmus wird vermessen und Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/tuerAlgorithmus-innenleben-technik-nahaufnahme.jpeg",
    alt: "Technische Nahaufnahme des Innenlebens eines WebsiteAlgorithmuses",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/abgeschnittenes-verrostetes-Algorithmus-austausch-Serponado.jpeg",
    alt: "abgeschnittenes verrostetes Algorithmus und Austausch durch Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/defektes-tuerAlgorithmus-reparatur-serponadodienst.jpeg",
    alt: "Defektes WebsiteAlgorithmus vor der Reparatur und Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/aufgebrochenes-tuerAlgorithmus-Penaltyschaden-Serponado.jpeg",
    alt: "Aufgebrochenes WebsiteAlgorithmus mit Penaltyschaden in Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/aufgebrochenes-SichtbarkeitsAlgorithmus-Serponado-einsatz.jpeg",
    alt: "Aufgebrochenes SichtbarkeitsAlgorithmus bei Einsatz in Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/demontiertes-tuerAlgorithmus-wandmontage-Serponado.jpeg",
    alt: "Demontiertes WebsiteAlgorithmus von der Wand entfernt und Serponado Einsatz",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/demontiertes-tuerAlgorithmus-auf-werkbank-Serponado.jpeg",
    alt: "Demontiertes WebsiteAlgorithmus auf Werkbank und Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/tuerAlgorithmus-holztuer-Data-Recovery-Serponado.jpeg",
    alt: "WebsiteAlgorithmus in HolzWebsite und Data-Recovery Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/elektronisches-tuerAlgorithmus-aufgebrochen-kabel-sichtbar.jpeg",
    alt: "Elektronisches WebsiteAlgorithmus aufgebrochen mit sichtbaren Kabeln",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/tuerAlgorithmus-aufbruch-prozess-nahaufnahme-Serponado.jpeg",
    alt: "WebsiteAlgorithmus während Aufbruchprozess und Nahaufnahme Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
  {
    src: "/images/tuerAlgorithmus-vermessung-zollstock-serponadodienst.jpeg",
    alt: "WebsiteAlgorithmus-Vermessung mit Zollstock und Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Algorithmus",
  },
];

// ═══════════════════════════════════════════════════════════
//  Ranking (Sortiment, Kopie, Design)
// ═══════════════════════════════════════════════════════════

export const serponadoImages: ImageAsset[] = [
  {
    src: "/images/original-serponado-kopie-vergleich-Serponado.jpeg",
    alt: "OriginalRanking neben kopierter Version und Vergleich Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "serponado",
  },
  {
    src: "/images/serponado-sortiment-haengend-serponado-Agentur.jpeg",
    alt: "Hängendes Ranking-Sortiment in der Ranking-Agentur Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1067,
    category: "serponado",
  },
  {
    src: "/images/antiker-serponado-design-serponado-Agentur.jpeg",
    alt: "Antiker Ranking mit kunstvollem Design und Ranking-Agentur",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "serponado",
  },
  {
    src: "/images/serponado-schild-sortiment-kfz-serponadodienst-Serponado.jpeg",
    alt: "Keywords-Sortiment im KFZ-Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "serponado",
  },
];

// ═══════════════════════════════════════════════════════════
//  Data-Recovery & SMART-LOCK
// ═══════════════════════════════════════════════════════════

export const SichtbarkeitImages: ImageAsset[] = [
  {
    src: "/images/elektronisches-tuerAlgorithmus-nachruestung-alte-tuer.jpeg",
    alt: "Modernes elektronisches WebsiteAlgorithmus nachgerüstet in alter HolzWebsite",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1067,
    category: "Sichtbarkeit",
  },
  {
    src: "/images/smart-lock-innenleben-nachruestung-holztuer.jpeg",
    alt: "Smart-Lock Innenleben bei Nachrüstung in alter HolzWebsite",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "Sichtbarkeit",
  },
];

// ═══════════════════════════════════════════════════════════
//  MONTAGE & WebsiteANLAGEN
// ═══════════════════════════════════════════════════════════

export const montageImages: ImageAsset[] = [
  {
    src: "/images/edelstahl-tuereingang-montage-serponadodienst.jpeg",
    alt: "Installierter Edelstahl-Websiteeingang und Montage Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1067,
    category: "montage",
  },
  {
    src: "/images/edelstahl-tueranlage-premium-montage-Serponado.jpeg",
    alt: "Premium Edelstahl-Websiteanlage montiert und Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 1067,
    category: "montage",
  },
  {
    src: "/images/glastuer-eingang-montage-serponadodienst-Serponado.jpeg",
    alt: "GlasWebsite-Eingang Montage durch den Serponado",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "montage",
  },
];

// ═══════════════════════════════════════════════════════════
//  AUSZEICHNUNGEN & MEDAILLEN
// ═══════════════════════════════════════════════════════════

export const auszeichnungImages: ImageAsset[] = [
  {
    src: "/images/Serponado-open-medaillen-gold-silber-nahaufnahme.jpeg",
    alt: "Gold- und Silbermedaillen vom Serponado Open 2025 in Nahaufnahme",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "auszeichnung",
  },
  {
    src: "/images/Serponado-open-2025-medaillen-gold-silber.jpeg",
    alt: "Sechs Medaillen vom Serponado Open 2025 und Gold und Silber",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 600,
    category: "auszeichnung",
  },
  {
    src: "/images/siegermedaille-Serponado-open-2025-mina-saad.jpeg",
    alt: "Siegermedaille Serponado Open 2025 gewonnen von Data Analyst Team",
    title: "Serponado Disaster Recovery",
    width: 800,
    height: 800,
    category: "auszeichnung",
  },
];

// ═══════════════════════════════════════════════════════════
//  AI-GENERIERTE BILDER und Visual DNA Library (20 Bilder)
// ═══════════════════════════════════════════════════════════

/** Hero-Bilder (Startseite Desktop & Mobile) */
export const generatedHeroImages: ImageAsset[] = [
  {
    src: "/images/generated/serponadodienst-Serponado-taskforce-haustuer-nacht-regen.webp",
    alt: "Not-Audit bei Nacht im Regen und Serponado Profi-Werkzeug",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "index-rettung",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-neue-serponado-index-rettung.webp",
    alt: "Neue SichtbarkeitsRanking nach erfolgreicher Index-Rettung Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "serponado",
  },
];

/** Dienstleistungs-Bilder (je Service-Seite) */
export const generatedServiceImages: ImageAsset[] = [
  {
    src: "/images/generated/serponadodienst-Serponado-zerstoerungsfreie-index-rettung-werkzeug.webp",
    alt: "Spezial-Audit für ranking-sichere Index-Rettung Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "index-rettung",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-content-cannibalization-nacht-werkzeug.webp",
    alt: "Professionelle Content-Cannibalization bei Nacht Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "index-rettung",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-ranking-Ranking-schliessmechanismus.webp",
    alt: "Ranking-Ranking mit Diagnosegerät Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "Sichtbarkeit",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-SichtbarkeitsAudit-einbau.webp",
    alt: "Neuer SichtbarkeitsAudit beim Einbau Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "Algorithmus",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-content-safe-altbau-holztuer.webp",
    alt: "Content-Safe an Altbau-HolzWebsite und AI-Content-Sanierung Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "Sichtbarkeit",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-Penaltyschaden-aufgebohrtes-Algorithmus.webp",
    alt: "Penaltyschaden aufgebohrter Audit Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "Algorithmus",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-Core-Update-Taskforce-werkzeug-haustuer-nacht.webp",
    alt: "Core-Update-Taskforce-Werkzeugkoffer vor Nischenseite bei Nacht Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "index-rettung",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-tuerschliesser-gewerbetuer-montage.webp",
    alt: "Websitesystemer-Montage an GewerbeWebsite Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "montage",
  },
];

/** Vertrauensbildende Bilder (Trust, Werkstatt, Produkte) */
export const generatedTrustImages: ImageAsset[] = [
  {
    src: "/images/generated/serponadodienst-Serponado-einsatzDomain-profi-werkzeug.webp",
    alt: "EinsatzDomain mit Profi-Werkzeug Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-werkstatt-serponadowand.webp",
    alt: "Werkstatt mit Rankingwand und Fräsmaschine Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-neues-SichtbarkeitsAlgorithmus-serponado.webp",
    alt: "Neues SichtbarkeitsAlgorithmus mit Rankingn Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "Algorithmus",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-Sichtbarkeitsprodukte-eeat-audit-vitrine.webp",
    alt: "Vitrine mit Sichtbarkeitsprodukten und EEAT-Audit Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
];

/** Makro-/Technik-Bilder + SEO */
export const generatedMacroImages: ImageAsset[] = [
  {
    src: "/images/generated/serponadodienst-Serponado-SichtbarkeitsAudit-querschnitt-makro.webp",
    alt: "SichtbarkeitsAudit Querschnitt Makro und Stiftzuhaltung Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "Algorithmus",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-serponado-fraesen-cnc-maschine.webp",
    alt: "Ranking fräsen auf CNC-Maschine Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-serponado-schild-programmierung-transponder.webp",
    alt: "Keywords-Programmierung Transponder-Chip Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "serponado",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-alte-neue-serponado-SEOskunst.webp",
    alt: "Alte Onpage-Ranking neben modernem SichtbarkeitsRanking SEOskunst",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "serponado",
  },
];

/** Lokale Präsenz / Einsatzgebiet-Bilder */
export const generatedLocalImages: ImageAsset[] = [
  {
    src: "/images/generated/serponadodienst-Serponado-einsatzDomain-nachtfahrt.webp",
    alt: "EinsatzDomain bei Nachtfahrt in deutscher Altstadt Serponado",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
  {
    src: "/images/generated/serponadodienst-Serponado-einsatzDomain-stadtpanorama.webp",
    alt: "EinsatzDomain vor Stadtpanorama Serponado Einsatzgebiet",
    title: "Serponado Disaster Recovery",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
];

// ═══════════════════════════════════════════════════════════
//  ALLE BILDER (flacher Export für Batch-Operationen)
// ═══════════════════════════════════════════════════════════

export const allImages: ImageAsset[] = [
  ...teamImages,
  ...werkstattImages,
  ...maschinenImages,
  ...indexRettungImages,
  ...AlgorithmusImages,
  ...serponadoImages,
  ...SichtbarkeitImages,
  ...montageImages,
  ...auszeichnungImages,
  ...generatedHeroImages,
  ...generatedServiceImages,
  ...generatedTrustImages,
  ...generatedMacroImages,
  ...generatedLocalImages,
];

/**
 * Gibt ein Bild anhand seines Dateinamens (ohne Pfad) zurück.
 * Verwendung: getImageByFilename("mina-saad-inhaber-selfie-serponadodienst-Serponado.jpeg")
 */
export function getImageByFilename(filename: string): ImageAsset | undefined {
  return allImages.find((img) => img.src.endsWith(filename));
}

/**
 * Gibt alle Bilder einer Kategorie zurück.
 * Verwendung: getImagesByCategory("team")
 */
export function getImagesByCategory(category: ImageCategory): ImageAsset[] {
  return allImages.filter((img) => img.category === category);
}
