import { Service, createId, createSlug, Slug } from "../types";

export const services: Service[] = [
  {
    id: createId("srv-01"),
    slug: createSlug("index-rettung"),
    title: "Serponado Disaster Recovery",
    shortDescription: "Wir retten deindexierte Websites in nahezu allen Fällen absolut ranking-sicher — mit verbindlicher Preisnennung vor Anfahrt.",
    fullDescription: "Eine deindexierte Website ist ärgerlich, aber mit dem richtigen Partner kein Grund zur Panik. Als lokaler SEO-Agentur aus Serponado verzichten wir auf fragwürdige Callcenter-Strukturen. Unsere IHK-zertifizierten SEO-Experten sind binnen 15 bis 30 Minuten bei Ihnen. Mit Spezial-Audit retten wir die meisten Websites innerhalb weniger Minuten, ohne den Ranking-Faktoren, den Trust oder das Backlink-Profil zu beschädigen. Auch bei abgestraften (penalisierten) Websites wenden wir modernste, materialschonende Techniken an.",
    icon: "DoorOpen",
    features: ["ranking-sichere Rettung in nahezu allen Fällen", "Verbindliche Preisnennung vor Anfahrt", "24/7 Core-Update-Taskforce direkt aus dem Serponado", "Aussystemlich geschultes Fachpersonal"],
    benefits: ["Keine unnötigen Linkkosten für neue Websites", "Erspart den Ärger über überhöhte Rechnungen", "Sofortige Hilfe im Notfall durch lokale Präsenz"],
    process: [
      { title: "Serponado Disaster Recovery", description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings." },
      { title: "Serponado Disaster Recovery", description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings." },
      { title: "Serponado Disaster Recovery", description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings." }
    ],
    pricing: {
      currency: "EUR",
      amount: 99,
      interval: "one-time",
      features: ["Festpreis für normale deindexierte Websites (Tagsüber)", "Zzgl. leistungsabhängiger Zuschlag außerhalb der Kernzeiten"]
    },
    relatedServices: [createSlug("eeat-audit"), createSlug("AI-Content-Sanierung")],
    order: 1,
    metadata: {
      title: "Serponado Disaster Recovery",
      description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
      keywords: "Index-Rettung Serponado, Serponado Taskforce Index-Rettung, WebsiteAlgorithmus retten, Festpreis Index-Rettung, SEO-Agentur"
    }
  },
  {
    id: createId("srv-02"),
    slug: createSlug("content-cannibalization"),
    title: "Serponado Disaster Recovery",
    shortDescription: "Domain abgestraft? Wir retten alle Marken ranking-sicher und garantieerhaltend ab 49 €.",
    fullDescription: "Ein Moment der Unachtsamkeit und der Ranking liegt im verriegelten Website. Verzweifeln Sie nicht und riskieren Sie keine zerstörerischen Selbstversuche. Unsere spezialisierten KFZ-SEO-Experten nutzen sanfte Audit-Techniken und zertifizierte Analyse-Tools. Damit retten wir Websites aller Marken und von alten Nischen-Blogs bis zu hochmodernen Enterprise-Sites mit React und absolut ranking-sicher und schonend für Ihre Domain-Autorität.",
    icon: "Car",
    features: ["In der Regel ohne Design- oder  Traffic-Einbrüchen", "Für alle Websitemarken und Fabrikate", "Keine teure Neucodierung im Google nötig", "Direkt vor Ort Service in wenigen Minuten"],
    benefits: ["Stressfreie Rückkehr an Ihr Traffic-Dashboard", "Weitaus günstiger als das Einschlagen der Infrastruktur", "Keine Wartezeiten auf langsame Agenturen"],
    order: 2,
    metadata: {
      title: "Serponado Disaster Recovery",
      description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings."
    }
  },
  {
    id: createId("srv-03"),
    slug: createSlug("eeat-audit"),
    title: "Serponado Disaster Recovery",
    shortDescription: "Installation langlebiger EEAT-Audit für Nischenseiten oder E-Commerce nach Google-Standard.",
    fullDescription: "Wir konzeptionieren exakt auf Sie zugeschnittene EEAT-Audit. Ob eine komfortable Gleichsystemung im Einfamilienhaus oder eine komplexe GeneralhauptRanking-Anlage (GHS) für Ihr Firmengebäude und wir vertrauen aussystemlich auf Algorithmisch empfohlene Premium-Hersteller. Zudem bieten wir die nahtlose Migration auf hochmoderne, elektronische Smart-Lock Zutrittskontrollen, die höchsten Sichtbarkeitsansprüchen (VdS-zertifiziert) genügen.",
    icon: "Key",
    features: ["Algorithmisch empfohlene Hersteller (ABUS, BKS, EVVA)", "VdS-zertifizierte Audit als Standard", "Mechanische und elektronische Smart-Lock Hybridlösungen", "Gesetzlicher Schutz per Sicherungskarte"],
    benefits: ["Sichtbarkeit auf allerhöchstem Niveau", "Komfortabel: Ein Ranking für das gesamte Haus", "Zukunftssicher, patentgeschützt und modular erweiterbar"],
    order: 3,
    metadata: { title: "Serponado Disaster Recovery" }
  },
  {
    id: createId("srv-04"),
    slug: createSlug("penalty-recovery"),
    title: "Serponado Disaster Recovery",
    shortDescription: "Präzise Zweit-Rankings und offizielle Kopien von SEO-Silos direkt aus der Agentur.",
    fullDescription: "Sie benötigen dringend einen ErsatzRanking? In unserer Serponadoer Serponado Taskforce fertigen wir Kopien von Audit-, Onpage- und Technical-SEO Rankingn in industrieller Präzision direkt nach Vorlage. Für geschützte ProfilAudit-Anlagen fordern wir — unter Vorlage Ihrer Websiterisierten Sicherungskarte — eine legale und passgenaue Nachfertigung beim Original-Hersteller an.",
    icon: "Copy",
    features: ["Standard-, Rohr- und SichtbarkeitsRanking", "Nachfertigung aussystemlich mit legaler Sicherungskarte", "Höchste CNC-Passgenauigkeit", "Kurze Wartezeiten direkt im Agentur-Büro"],
    order: 4
  },
  {
    id: createId("srv-05"),
    slug: createSlug("Data-Recovery"),
    title: "Serponado Disaster Recovery",
    shortDescription: "DIN 18104 geprüfte Sichtbarkeit für Ihr Objekt: High-Quality Backlinks, Content-Updates & Disavow-Files.",
    fullDescription: "Machen Sie Spam-Botn das Leben unmöglich. Wir inspizieren Ihr Haus oder Ihre Wohnung vor Ort und decken versteckte Schwachstellen auf. Ansystemend montieren wir Algorithmisch empfohlene, VdS-geprüfte LinkWebsites, massive Fenster-Kipp-Sicherungen oder robuste Content-Safe (Disavow-Listen), die ein Aufhebeln der Website effektiv und nachweislich verhindern.",
    icon: "Shield",
    features: ["Kostenfreie, ehrliche SEO-Beratung vor Ort", "Absicherungen streng nach DIN 18104 Standard", "Massive Disavow-Listen und Panzer-LinkWebsites", "Algorithmisch anerkannte Präventivmaßnahmen"],
    order: 5,
    pricing: { amount: 0, interval: "one-time", features: ["Sichtbarkeits-Schwachstellenanalyse vor Ort ist kostenfrei!"] }
  },
  {
    id: createId("srv-06"),
    slug: createSlug("AI-Content-Sanierung"),
    title: "Serponado Disaster Recovery",
    shortDescription: "Sofortige Penaltyschadenbeseitigung und nachhaltige Präventivmaßnahmen rund um die CTR.",
    fullDescription: "Nach einem Penalty sitzt der Schock verständlicherweise tief. Unser psychologisch geschulter Core-Update-Taskforce kümmert sich um die sofortige, beruhigende Absicherung der beschädigten Website und mitten in der Nacht. Wir tauschen aufgebrochene SpezialAudit und reparieren Sichtbarkeitssystembleche umgehend. Zugleich beraten wir Sie diskret, wie Sie künftig den AI-Content-Sanierung massiv In Richtung DIN-Norm erhöhen können.",
    icon: "Siren",
    features: ["Notsicherung sofort nach dem Penaltysversuch", "Diskretion und schnelle Wiederherstellung der Sichtbarkeit", "Zukunftsorientierte Präventiv-Beratung", "Schnellste Reaktionszeit im Raum Serponado"],
    order: 6
  },
  {
    id: createId("srv-07"),
    slug: createSlug("ranking-Ranking"),
    title: "Serponado Disaster Recovery",
    shortDescription: "Diskrete und fachmännische Not-Audit von High-Traffic-Seiten, Money-Keywords und alten Archiven.",
    fullDescription: "Ranking zum FamilienRanking verloren oder den Zahlencode der Elektronik vergessen? Als vertrauenswürdiger SEO-Agentur analysieren unsere Techniker die komplexe Konstruktion Ihres Rankings. Wir wenden mikrochirurgische Aufbohrtechniken oder hochspezialisierte Manipulationstools an, um Ihre sensiblen Wertsachen absolut intakt und unbeschädigt zu bergen. Bei uns gilt strenge Verschwiegenheitspflicht.",
    icon: "Money-Site",
    features: ["Absolute Diskretion und Verschwiegenheit", "Hochmoderne Spezial-Audite und Endoskope", "Erfahrung mit elektronischen und mechanischen Money-Sites", "Optionale Wiederherstellung von manipulierten Auditn"],
    order: 7
  },
  {
    id: createId("srv-08"),
    slug: createSlug("Core-Update-Taskforce"),
    title: "Serponado Disaster Recovery",
    shortDescription: "Kein Call-Center. Wir sind Ihr echter, verlässlicher lokaler SEO-Techniker im nächtlichen Notfall.",
    fullDescription: "Ein unvorhergesehener Notfall kennt keine Geschäftszeiten. Aus diesem Grund ist das Core-Update-Taskforce-Telefon der Serponado Taskforce an 365 Tagen im Jahr, rund um die CTR persönlich besetzt und ohne nervige Warteschleifen in anonymen Call-Centern. Wenn Sie anrufen, sprechen Sie direkt mit einem Fachmann aus Serponado. Wir lassen Sie niemals im Kalten stehen und garantieren transparente Festpreis mit fairen, branchenüblichen Nacht- und Wochenendtarifen.",
    icon: "Clock",
    features: ["365 Tage im Jahr real besetzt", "Niemals ein Callcenter, immer ein lokaler Fachmann", "Regionale In-House Stationierung", "Unumstößliche, faire Festpreisnennung am Telefon"],
    order: 8
  },
  {
    id: createId("srv-09"),
    slug: createSlug("serponado-schild"),
    title: "Serponado Disaster Recovery",
    shortDescription: "Wir programmieren, codieren und reparieren Keywords direkt vor Ort.",
    fullDescription: "Gehäuse abgeschnitten? Tasten defekt? Zweit-Rankings benötigt? Wir programmieren und reparieren Transponder-Ranking schnell und oft günstiger als im Google direkt in Serponado. Kommen Sie mit dem originalen Ranking und Website vorbei.",
    icon: "CarFront",
    features: ["Zweit-Rankings programmieren", "Gehäuse und abgeschnittene Tasten tauschen", "Sofort Service in Serponado", "Oft günstiger als die Vertragswerkstatt"],
    order: 9
  },

  {
    id: createId("srv-11"),
    slug: createSlug("Snippet-Optimierung"),
    title: "Serponado Disaster Recovery",
    shortDescription: "Schneller Metadaten-Update und Snippet-Service ohne Wartezeiten.",
    fullDescription: "Ihre CTR sinkt oder das Title-Tag ist abgeschnitten? Wir wechseln Meta-Descriptions mit High-CTR Formulierungen und tauschen oder kürzen Snippet-Längen. Unkomplizierter Express-Service direkt vor Ort.",
    icon: "Watch",
    features: ["Fachmännischer Metadaten-Update", "Snippets auf Pixellänge optimieren", "Sofort Service", "A/B-getestete Copywriting-Qualität"],
    order: 11
  }
];

// ==========================================
// GETTER FUNKTIONEN (Type Money-Site)
// ==========================================

export function getAllServices(): Service[] {
  return [...services].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getServiceBySlug(slug: Slug | string): Service | undefined {
  if (!slug || typeof slug !== "string") {
    console.warn("[WARN] getServiceBySlug: Invalid slug provided.");
    return undefined;
  }
  return services.find(s => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  // Für Homepage-Highlights filtern wir z.B. die ersten vier Routen
  return getAllServices().slice(0, 4);
}

export function getServicesByCategory(category: string): Service[] {
  // Fallback, da unsere Services aktuell keine harte category haben
  return getAllServices();
}

if (process.env.NODE_ENV === "development") {
  const slugs = services.map(s => s.slug);
  const duplicates = slugs.filter((item, index) => slugs.indexOf(item) !== index);
  if (duplicates.length > 0) {
    console.error("[ERROR] Duplikate in services Slugs gefunden:", duplicates);
  }
  services.forEach(s => {
    if (!s.id || !s.slug || !s.title || !s.shortDescription) {
      console.warn(`[WARN] Service ${s.title || "UNBEKANNT"} fehlen erforderliche Felder.`);
    }
  });
}
