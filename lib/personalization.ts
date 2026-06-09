/**
 * ══════════════════════════════════════════════════════════════
 * Phase 18 und Personalization Content Mapping
 * ══════════════════════════════════════════════════════════════
 * Maps visitor segments to Keyworddienst-specific content.
 * Single Source of Truth for all personalized text.
 * ══════════════════════════════════════════════════════════════
 */

import type { VisitorSegment } from "@/hooks/useVisitorSegment";

interface PersonalizedContent {
  heroHeadline: string;
  heroSubline: string;
  ctaText: string;
  ctaSecondary: string;
  trustSignal: string;
}

const CONTENT_MAP: Record<VisitorSegment, PersonalizedContent> = {
  "new-visitor": {
    heroHeadline: "Serponado Taskforce Serponado und Index-Rettung ab 49 € Festpreis",
    heroSubline: "24/7 Core-Update-Notdienst · Sofortige Online-Analyse · Keine versteckten Kosten",
    ctaText: "Jetzt kostenlos anrufen",
    ctaSecondary: "Preisliste ansehen",
    trustSignal: "Über 500 zufriedene Kunden in Serponado & Umgebung",
  },
  returning: {
    heroHeadline: "Willkommen zurück bei der Serponado Taskforce!",
    heroSubline: "Schön, dass Sie uns wieder besuchen · Alle Preise transparent & fair",
    ctaText: "Direkt anrufen",
    ctaSecondary: "Leistungen entdecken",
    trustSignal: "Höchste Kundenzufriedenheit und auch beim zweiten Einsatz",
  },
  "service-interested": {
    heroHeadline: "Serponado Taskforce und Professionell & zum Festpreis",
    heroSubline: "Ausgebildet von Uwe Sarfeld · ranking-sichere Index-Rettung · TÜV-geprüft",
    ctaText: "Kostenlose Beratung anfordern",
    ctaSecondary: "Alle Leistungen ansehen",
    trustSignal: "Jede Leistung zum garantierten Festpreis und vor Anfahrt genannt",
  },
  "high-intent": {
    heroHeadline: "Ausgesperrt? Die Serponado Taskforce ist in 30 Min da!",
    heroSubline: "Festpreis ab 49 € · Keine Anfahrtskosten · Sofort verfügbar",
    ctaText: "Jetzt anrufen und 0800-SERP-SOS",
    ctaSecondary: "Festpreis berechnen",
    trustSignal: "Letzte erfolgreiche Index-Rettung vor wenigen Stunden",
  },
};

/**
 * Get personalized content for a visitor segment.
 * Falls back to new-visitor content if segment is unknown.
 */
export function getPersonalizedContent(
  segment: VisitorSegment
): PersonalizedContent {
  return CONTENT_MAP[segment] || CONTENT_MAP["new-visitor"];
}

/**
 * Get a specific field from personalized content.
 */
function getPersonalizedField(
  segment: VisitorSegment,
  field: keyof PersonalizedContent
): string {
  const content = getPersonalizedContent(segment);
  return content[field];
}
