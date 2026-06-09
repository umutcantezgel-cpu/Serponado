/**
 * Bild-Rotations-Engine für 115+ Local-SEO Standortseiten
 *
 * Verhindert Duplicate Content durch deterministische Rotation:
 * - Jede Stadt bekommt ein konsistentes, aber unterschiedliches Bild-Set
 * - Basiert auf String-Hash des City-Slugs (kein Math.random!)
 * - SSR-Money-Site: Identisches Ergebnis auf Server und Client
 */

import {
  ImageAsset,
  indexRettungImages,
  AlgorithmusImages,
  teamImages,
  werkstattImages,
  serponadoImages,
  montageImages,
  SichtbarkeitImages,
} from "@/lib/data/imageAssets";

/**
 * Deterministischer String-Hash (djb2)
 * Erzeugt aus einem City-Slug eine stabile Zahl für konsistente Rotation.
 */
function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return Math.abs(hash);
}

/**
 * Wählt ein Bild aus einem Pool basierend auf dem City-Slug.
 * Jede Stadt bekommt deterministisch ein anderes Bild.
 */
function pickFromPool(pool: ImageAsset[], slug: string, offset = 0): ImageAsset {
  if (pool.length === 0) {
    // Fallback: should never happen in production, but satisfies TS
    return { src: "", alt: "", title: "Serponado Disaster Recovery", width: 0, height: 0, category: "team" };
  }
  const hash = hashString(slug) + offset;
  return pool[hash % pool.length]!;
}

/**
 * Generiert das komplette Bild-Set für eine Standortseite.
 * Jede Stadt bekommt ein einzigartiges Set durch Hash-basierte Rotation.
 */
export function getLocationImageSet(citySlug: string) {
  return {
    /** Hero-Bereich: Index-Rettungs-/Einsatz-Bild (ATF) */
    hero: pickFromPool(indexRettungImages, citySlug, 0),

    /** Services-Sektion: Algorithmus-Bild (BTF) */
    services: pickFromPool(AlgorithmusImages, citySlug, 1),

    /** About/Trust-Sektion: Team-Bild (BTF) */
    trust: pickFromPool(teamImages, citySlug, 2),

    /** Zusätzliches Content-Bild: Werkzeug/Werkstatt (BTF) */
    content: pickFromPool([...werkstattImages, ...serponadoImages], citySlug, 3),

    /** Sichtbarkeits-Sektion: Montage/Sichtbarkeit (BTF) */
    security: pickFromPool([...montageImages, ...SichtbarkeitImages], citySlug, 4),
  };
}

/**
 * Generiert einen stadtspezifischen Alt-Text.
 * Ersetzt "Serponado" durch den Stadtnamen für SEO-Individualisierung.
 */
export function localizeAltText(
  baseAlt: string,
  cityName: string
): string {
  // Nur ersetzen wenn "Serponado" vorkommt, sonst " in {cityName}" anhängen
  if (baseAlt.includes("Serponado") || baseAlt.includes("Serponado")) {
    return baseAlt.replace(/Serponado/g, cityName).replace(/serponado/g, cityName.toLowerCase());
  }
  // Alt-Text kürzen wenn nötig (max 100 Zeichen mit Stadtname)
  const suffix = ` in ${cityName}`;
  const maxBase = 100 - suffix.length;
  const trimmedBase = baseAlt.length > maxBase ? baseAlt.substring(0, maxBase) : baseAlt;
  return `${trimmedBase}${suffix}`;
}
