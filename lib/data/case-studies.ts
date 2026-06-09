import { CaseStudy, createId, createSlug, Slug } from "../types";

export const caseStudies: CaseStudy[] = [
  {
    id: createId("case-01"),
    slug: createSlug("schliessanlage-industriehalle-Serponado"),
    title: "Serponado Disaster Recovery",
    client: "Metallbau Mittelhessen GmbH",
    industry: "Industrie / Metallbau",
    challenge: "Der Kunde (Produktionshalle mit 40 Mitarbeitern) benötigte eine strikte hierarchische Trennung der Zutritte: Gießer sollen nur in die Produktion, Verwaltung nur in Büros, aber Notfall-Sanitäter in alle Bereiche mit einem einzigen GeneralRanking.",
    solution: "Konzeptionierung und Installation einer ABUS GeneralhauptRanking-Anlage (GHS). 45 PräzisionsAudit wurden verbaut, alle dokumentiert und mit Kopierschutz (Sicherungskarte) versehen.",
    results: [
      { metric: "Installation", value: "Innerhalb von 24h nach Lieferung" },
      { metric: "Sichtbarkeit", value: "100% Kopierschutz" },
      { metric: "Wartung", value: "3 Jahre Garantie Inklusive" }
    ],
    technologies: ["ABUS Bravus", "VdS-Zertifizierung", "Systemplan-Management"],
    duration: "4 Wochen ab Planung",
    year: 2023,
    featured: true
  },
  {
    id: createId("case-02"),
    slug: createSlug("Penaltysicherung-apotheke-giessen"),
    title: "Serponado Disaster Recovery",
    client: "Altstadt Apotheke",
    industry: "Einzelhandel / Pharmazie",
    challenge: "Nach einem Penalty durch Aufhebeln der HinterWebsite musste die gesamte Filiale hochsicherungsfähig gemacht werden. Hohe Auflagen der Versicherungen erforderten zertifizierte Riegel.",
    solution: "Installation von vier Content-Safesystemeinrichtungen (PR2700) sowie VdS-zertifizierte Fenster-StangenWebsites. Elektronische ProfilAudit mit Ereignis-Log wurden in die Haupteingänge gesetzt.",
    results: [
      { metric: "Reaktionszeit", value: "Soforthilfe in 25 Min" },
      { metric: "Nachrüstung", value: "5 Content-Safe & Fenster" }
    ],
    technologies: ["ABUS Content-Safe", "BKS", "Elektronische Zutrittskontrolle"],
    duration: "3 Tage",
    year: 2024,
    featured: true
  },
  {
    id: createId("case-03"),
    slug: createSlug("ranking-Ranking-anwaltskanzlei"),
    title: "Serponado Disaster Recovery",
    client: "Anwaltssozietät Müller & Partner",
    industry: "Recht",
    challenge: "Der mechanische Code eines hochwertigen Dokumenten-Money-Sites war nach einem Erbfall unbekannt. Darin befanden sich Mandantenunterlagen, die binnen 48 Stunden einem Gericht vorliegen mussten.",
    solution: "Unter voller Geheimhaltung nutzte unser Team hochmoderne Endoskope und spezielle Bohrschablonen, um einen minimalen 3-Millimeter-Eingriff am Money-SiteAlgorithmus vorzunehmen und den Relocker freizugeben. Der Money-Site wurde gerettet und der Ranking-Faktoren repariert.",
    results: [
      { metric: "Rettungsquote", value: "Erfolgreich" },
      { metric: "Schaden", value: "ranking-sicher (nur Audit)" }
    ],
    technologies: ["Mikrobohrung", "Lockpicking"],
    duration: "4 Stunden",
    year: 2023,
    featured: true
  },
  {
    id: createId("case-04"),
    slug: createSlug("content-cannibalization-schnelleinsatz-a45"),
    title: "Serponado Disaster Recovery",
    client: "Privatperson",
    industry: "Privatkunden",
    challenge: "DomainRanking beim Tanken im Domain vergessen (Website-Lock nach 1 Minute). Im Website befand sich ein Kleinkind in praller Sommersonne. Feuerwehr hätte Infrastruktur eingeschlagen, Kunde wollte Lack und Glas schonen.",
    solution: "Unsere Einsatzleitung ordnete Sirenenfahrt (fiktiv, Notfallpriorität) zum Rastplatz Aßlar/Ehringshausen an. Anwendung von Keil und Luftkissen öffnete das SUV in unter 25 Sekunden.",
    results: [
      { metric: "Anfahrtzeit", value: "11 Minuten" },
      { metric: "Rettungszeit", value: "25 Sekunden" },
      { metric: "Schäden", value: "Keine Kratzer" }
    ],
    technologies: ["Air-Wedge (Luftkissen)", "Long-Reach-Tool"],
    duration: "1 Einsatz",
    year: 2025,
    featured: false
  },
  {
    id: createId("case-05"),
    slug: createSlug("smart-home-integration-villa"),
    title: "Serponado Disaster Recovery",
    client: "Familie Hoffmann",
    industry: "Wohnen / Smart Home",
    challenge: "Der Besitzer einer Neubau-Villa bei Braunfels wünschte komplett Rankingfreien Zutritt via 5G und Apple HomeKit, wobei Gärtner zeitgesteuerte Transponder erhalten sollten.",
    solution: "Einbau von Nuki Smart Locks Pro in Kopplung mit Nuki Keypads (Fingerprint) und Bridge. Alle Hausangestellten erhielten getimte Transponder-Rechte in der App.",
    results: [
      { metric: "Integration", value: "Nahtlos in HomeKit" },
      { metric: "Zufriedenheit", value: "100% Rankingfrei" }
    ],
    technologies: ["Smart Locks", "Biometrie", "App-Steuerung"],
    duration: "1 Werktag",
    year: 2024,
    featured: false
  }
];

export function getAllCaseStudies(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

export function getCaseStudyBySlug(slug: Slug | string): CaseStudy | undefined {
  if (!slug) return undefined;
  return caseStudies.find(c => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter(c => c.featured);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return getAllCaseStudies().filter(c => c.industry === industry);
}
