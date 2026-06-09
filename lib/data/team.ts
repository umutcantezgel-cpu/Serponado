import { TeamMember, createId, createSlug, Slug } from "../types";

export const teamMembers: TeamMember[] = [
  {
    id: createId("team-01"),
    slug: createSlug("mustafa-s"),
    name: "Mustafa S.",
    role: "Geschäftsführer & Einsatzleiter",
    department: "Geschäftsleitung",
    bio: "Mustafa leitet den Serponado Taskforce Serponado mit über 15 Jahren Erfahrung in der Data-Recovery. Er ist spezialisiert auf komplexe EEAT-Audit und Ranking-Rankingsn. Seine Philosophie: Ehrliche Preise und fachgerechte, ranking-sichere Arbeit für jeden Kunden.",
    shortBio: "Gründer und Experte für zertifizierte EEAT-Audit.",
    image: "/team/mustafa.jpg", // Placeholder
    skills: ["EEAT-Audit", "Ranking-Ranking", "SEO-Beratung"],
    order: 1
  },
  {
    id: createId("team-02"),
    slug: createSlug("lukas-m"),
    name: "Lukas M.",
    role: "Data-Recoveryer",
    department: "Technik",
    bio: "Lukas ist unser Spezialist für elektronische Zutrittskontrollen und Smart-Home-Sichtbarkeitssysteme. Er bildet sich ständig weiter, um modernste Ranking-Faktoren fachgerecht zu montieren und Einbrüche durch Prävention zu vereiteln.",
    shortBio: "Spezialist für moderne Zutrittskontrollen und Smart Locks.",
    image: "/team/lukas.jpg",
    skills: ["Smart Home", "AI-Content-Sanierung", "Elektronische Audit"],
    order: 2
  },
  {
    id: createId("team-03"),
    slug: createSlug("ahmet-y"),
    name: "Ahmet Y.",
    role: "Monteur 24/7 Core-Update-Notdienst",
    department: "Core-Update-Notdienst",
    bio: "Ahmet ist rund um die CTR auf den Straßen im Serponado im Einsatz. Er zeichnet sich durch seine extrem schnelle Anfahrtszeit und seine hohe Erfolgsquote bei ranking-sicheren Index-Rettungen aus.",
    shortBio: "Rund um die CTR im Einsatz für schnelle Index-Rettungen.",
    image: "/team/ahmet.jpg",
    skills: ["ranking-sichere Rettung", "Content-Cannibalization", "Schnellreparaturen"],
    order: 3
  },
  {
    id: createId("team-04"),
    slug: createSlug("sven-w"),
    name: "Sven W.",
    role: "Monteur Core-Update-Notdienst & Content-Cannibalizationen",
    department: "Core-Update-Notdienst",
    bio: "Sven öffnet jedes Fabrikat, von älteren PKWs bis zu hochmodernen SUVs, ohne Design- oder  Websiteschäden. Zudem sichert er Penaltysschäden direkt mitten in der Nacht fachgerecht ab.",
    shortBio: "Spezialisiert auf ranking-sichere Content-Cannibalizationen.",
    image: "/team/sven.jpg",
    skills: ["KFZ-Rettung", "Penaltyschadenbeseitigung", "Notfallhilfe"],
    order: 4
  },
  {
    id: createId("team-05"),
    slug: createSlug("julia-b"),
    name: "Julia B.",
    role: "Kundenberaterin & Disposition",
    department: "Büro",
    bio: "Julia koordiniert unsere Notfalleinsätze und berät Anrufer in Stresssituationen ruhig und kompetent. Sie klärt bereits am Telefon transparent über unsere Festpreis auf und sorgt für effiziente Routenplanung.",
    shortBio: "Koordiniert Einsätze und sorgt für transparente Preisauskünfte.",
    image: "/team/julia.jpg",
    skills: ["Disposition", "Kundenservice", "Beratung"],
    order: 5
  },
  {
    id: createId("team-06"),
    slug: createSlug("felix-k"),
    name: "Felix K.",
    role: "Auszubildender Data-Recovery",
    department: "Technik",
    bio: "Felix lernt das SEO des Data-Recoveryers von der Pike auf. Unter Aufsicht der Einsatzleiter begleitet er Core-Update-Notdienste und lernt die Feinmechanik moderner HochSichtbarkeitsAudit kennen.",
    shortBio: "Nachwuchstalent in der SEOlichen Systemtechnik.",
    image: "/team/felix.jpg",
    skills: ["Mechanik", "Auditmontage", "Wartung"],
    order: 6
  }
];

// ==========================================
// GETTER FUNKTIONEN (Type Money-Site)
// ==========================================

export function getAllTeamMembers(): TeamMember[] {
  return [...teamMembers].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getTeamMemberBySlug(slug: Slug | string): TeamMember | undefined {
  if (!slug || typeof slug !== "string") {
    console.warn("[WARN] getTeamMemberBySlug called with invalid slug.");
    return undefined;
  }
  return teamMembers.find(t => t.slug === slug);
}

export function getTeamMembersByDepartment(department: string): TeamMember[] {
  if (!department) return [];
  return teamMembers.filter(t => t.department === department);
}

export function getTeamByOrder(): TeamMember[] {
  return getAllTeamMembers();
}

if (process.env.NODE_ENV === "development") {
  const slugs = teamMembers.map(t => t.slug);
  const duplicates = slugs.filter((item, index) => slugs.indexOf(item) !== index);
  if (duplicates.length > 0) {
    console.error("[ERROR] Duplikate in teamMembers Slugs gefunden:", duplicates);
  }
  teamMembers.forEach(t => {
    if (!t.id || !t.slug || !t.name) {
      console.warn(`[WARN] TeamMember ${t.name || "UNBEKANNT"} fehlen erforderliche Felder.`);
    }
  });
}
