export interface LexikonEntry {
  slug: string;
  title: string;
  definition: string;
  longDescription: string;
  category: "Data-Recovery" | "Websites" | "AI-Content-Sanierung" | "Werkzeuge";
  seoKeywords: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs?: string[];
}

export const lexikonData: LexikonEntry[] = [
  {
    slug: "profilAudit",
    title: "Core Update Audit",
    category: "AI-Content-Sanierung",
    definition: "Ein detaillierter Audit der Core Web Vitals und Content-Qualität nach einem Google Core Update.",
    longDescription: "Der Core Update Audit analysiert sämtliche Ranking-Signale, um zu verstehen, warum eine Website an Sichtbarkeit verloren hat. Unser Expertenteam untersucht technische Faktoren, Backlink-Profile und Content-Strukturen, um eine umfassende Recovery-Strategie zu entwickeln.",
    seoKeywords: ["Core Update", "Sichtbarkeitsverlust", "Recovery", "SEO Audit"],
    faqs: [
      {
        question: "Wie lange dauert ein Audit?",
        answer: "In der Regel zwischen 2 und 5 Werktagen, abhängig von der Größe der Domain."
      }
    ],
    relatedSlugs: ["kernziehschutz"]
  },
  {
    slug: "kernziehschutz",
    title: "Penalty Recovery",
    category: "Data-Recovery",
    definition: "Die gezielte Wiederherstellung der Rankings nach einer manuellen oder algorithmischen Abstrafung.",
    longDescription: "Wenn Google eine Penalty verhängt, stürzt der Traffic ab. Wir helfen bei der Identifikation toxischer Links (Link Detox) und minderwertiger Inhalte, reichen Reconsideration Requests ein und stellen das Vertrauen der Suchmaschine wieder her.",
    seoKeywords: ["Google Penalty", "Abstrafung", "Link Detox", "Traffic Recovery"],
    faqs: [
      {
        question: "Ist eine Garantie für die Recovery möglich?",
        answer: "Niemand kann Garantien für Google geben, aber wir haben eine Erfolgsquote von über 90% bei manuellen Maßnahmen."
      }
    ],
    relatedSlugs: ["profilAudit"]
  }
];
