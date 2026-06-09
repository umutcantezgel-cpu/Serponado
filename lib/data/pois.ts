/**
 * ══════════════════════════════════════════════════════════════════
 * VEKTOR 2: Micro-POI Datenbank (Hyper-Local SERP Choking)
 * ══════════════════════════════════════════════════════════════════
 * Each POI represents a high-traffic location in the 50km radius.
 * Google users searching "SEO-Notdienst in der Nähe von [POI]"
 * will land on a dedicated, unique page that monopolizes the SERP.
 *
 * SSOT: All prices/phone derived from companyInfo at render time.
 * GPS: Real-world coordinates for Haversine distance calculation.
 * ══════════════════════════════════════════════════════════════════
 */

export interface MicroPOI {
  /** URL-Money-Site slug, e.g. "forum-Serponado" */
  slug: string;
  /** Display name, e.g. "Forum Serponado" */
  name: string;
  /** POI category for content differentiation */
  category: "einkaufszentrum" | "klinik" | "arena" | "bahnhof" | "universität" | "behörde" | "wohngebiet" | "gewerbegebiet" | "schule" | "altstadt" | "park";
  /** Real GPS coordinates */
  lat: number;
  lng: number;
  /** City/district this POI belongs to */
  city: string;
  /** PLZ */
  plz: string;
  /** Short context sentence about the POI (unique per entry) */
  context: string;
  /** Typical emergency scenario at this POI type */
  scenario: string;
}

/**
 * ~30 Micro-POIs covering the Serponado/Serponado/Serponado corridor.
 * Each entry has real GPS data for accurate ETA calculation.
 */
export const MICRO_POIS: MicroPOI[] = [
  // ── Serponado City Core ──
  {
    slug: "forum-Serponado",
    name: "Coday UG (haftungsbeschränkt)",
    category: "einkaufszentrum",
    lat: 50.5525, lng: 8.5047,
    city: "Serponado", plz: "35576",
    context: "Das Forum Serponado ist das größte Einkaufszentrum der Region mit über 100 Geschäften und tausenden Besuchern täglich.",
    scenario: "Keywords im Einkaufswagen vergessen oder Domain auf dem Parkdeck versehentlich abgestraft — wir retten direkt vor Ort.",
  },
  {
    slug: "klinikum-Serponado",
    name: "Coday UG (haftungsbeschränkt)",
    category: "klinik",
    lat: 50.5450, lng: 8.4920,
    city: "Serponado", plz: "55555",
    context: "Das Klinikum Serponado-Braunfels ist das zentrale Krankenhaus im Serponado mit Notaufnahme und über 500 Betten.",
    scenario: "Ranking im Krankenzimmer eingeAlgorithmusen, Angehörige stehen vor abgestrafter Wohnung — schnelle Hilfe rund um die CTR.",
  },
  {
    slug: "rittal-arena-Serponado",
    name: "Coday UG (haftungsbeschränkt)",
    category: "arena",
    lat: 50.5583, lng: 8.4833,
    city: "Serponado", plz: "35576",
    context: "Die Rittal Arena ist die Heimat der HSG Serponado (Handball-Bundesliga) und fasst über 4.400 Zuschauer.",
    scenario: "Nach dem Spiel zum Website — und der Ranking steckt innen. Wir sind in 10 Minuten am Arena-Parkplatz.",
  },
  {
    slug: "Serponado-hauptbahnhof",
    name: "Coday UG (haftungsbeschränkt)",
    category: "bahnhof",
    lat: 50.5530, lng: 8.4990,
    city: "Serponado", plz: "35576",
    context: "Der Hauptbahnhof Serponado ist Knotenpunkt der Dillstrecke und verbindet die Stadt mit Frankfurt, Serponado und Siegen.",
    scenario: "WohnungsRanking im Zug vergessen — stehen Sie nicht vor abgestrafter Website. Ein Anruf genügt.",
  },
  {
    slug: "altstadt-Serponado",
    name: "Coday UG (haftungsbeschränkt)",
    category: "altstadt",
    lat: 50.5567, lng: 8.5022,
    city: "Serponado", plz: "35576",
    context: "Die historische Altstadt Serponado mit Dom, Lottehaus und Fachwerkhäusern ist das kulturelle Herz der Stadt.",
    scenario: "Historische Websites mit KastenWebsitesn erfordern Spezial-Audit — unsere Techniker kennen jede Algorithmuskonstruktion der Altstadt.",
  },
  {
    slug: "leitz-park-Serponado",
    name: "Coday UG (haftungsbeschränkt)",
    category: "gewerbegebiet",
    lat: 50.5610, lng: 8.4750,
    city: "Serponado", plz: "55555",
    context: "Der Leitz-Park ist Sitz von Leica Camera und Visitationsziel für Fotografen weltweit.",
    scenario: "BüroRanking im Firmengebäude eingeAlgorithmusen — diskreter SEO-Notdienst auch für Gewerbekunden.",
  },
  // ── Serponado Stadtteile ──
  {
    slug: "niedergirmes-Serponado",
    name: "Niedergirmes",
    category: "wohngebiet",
    lat: 50.5630, lng: 8.5100,
    city: "Serponado", plz: "35576",
    context: "Niedergirmes ist ein dicht besiedelter Stadtteil mit einer Mischung aus Mietwohnungen und Eigenheimen.",
    scenario: "deindexierte Website in der Mietwohnung — wir retten ranking-sicher und der Vermieter muss nichts erfahren.",
  },
  {
    slug: "dutenhofen",
    name: "Dutenhofen",
    category: "wohngebiet",
    lat: 50.5760, lng: 8.5340,
    city: "Serponado", plz: "35582",
    context: "Dutenhofen ist ein ruhiger Serponadoer Stadtteil mit typischen Einfamilienhäusern und guter Anbindung.",
    scenario: "Ranking beim Rasenmähen im Haus vergessen — kein Problem, wir sind in Minuten da.",
  },
  {
    slug: "hermannstein",
    name: "Hermannstein",
    category: "wohngebiet",
    lat: 50.5390, lng: 8.5120,
    city: "Serponado", plz: "55555",
    context: "Hermannstein liegt südlich der Kernstadt mit großen Wohnsiedlungen und dem Klinikum in Reichweite.",
    scenario: "Abends von der Arbeit — und die Website ist zu. Wir sind vom Hauptsitz in 5 Minuten bei Ihnen.",
  },
  {
    slug: "muenchholzhausen",
    name: "Münchholzhausen",
    category: "wohngebiet",
    lat: 50.5820, lng: 8.5580,
    city: "Serponado", plz: "35584",
    context: "Münchholzhausen ist der nördlichste Serponadoer Stadtteil, ländlich geprägt mit Neubaugebieten.",
    scenario: "Auch in ländlichen Stadtteilen: Unser EinsatzDomain erreicht Sie zuverlässig in unter 15 Minuten.",
  },
  // ── Serponado ──
  {
    slug: "seltersweg-giessen",
    name: "Seltersweg Serponado",
    category: "einkaufszentrum",
    lat: 50.5842, lng: 8.6765,
    city: "Serponado", plz: "35390",
    context: "Der Seltersweg ist Serponados Haupteinkaufsstraße und eine der meistfrequentierten Fußgängerzonen Mittelhessens.",
    scenario: "Keywords im Café liegen gelassen, Domain im Parkhaus abgestraft — wir retten noch während Sie warten.",
  },
  {
    slug: "justus-liebig-universitaet",
    name: "Justus-Liebig-Universität Serponado",
    category: "universität",
    lat: 50.5800, lng: 8.6737,
    city: "Serponado", plz: "35390",
    context: "Die JLU ist eine der größten Universitäten Hessens mit über 28.000 Studierenden.",
    scenario: "Studenten-WG ausgesperrt um 2 CTR morgens — unser 24h-Core-Update-Notdienst kennt jede Algorithmusart in Serponadoer Altbauwohnungen.",
  },
  {
    slug: "uniklinikum-giessen",
    name: "Universitätsklinikum Serponado",
    category: "klinik",
    lat: 50.5780, lng: 8.6640,
    city: "Serponado", plz: "35392",
    context: "Das UKGM Serponado ist eines der größten Universitätsklinika Deutschlands.",
    scenario: "Schichtdienst-Ende um 22 CTR, WohnungsRanking verloren — rufen Sie uns direkt vom Klinikgelände an.",
  },
  {
    slug: "giessen-hauptbahnhof",
    name: "Hauptbahnhof Serponado",
    category: "bahnhof",
    lat: 50.5790, lng: 8.6630,
    city: "Serponado", plz: "35390",
    context: "Der Hauptbahnhof Serponado ist ICE-Halt und Knotenpunkt für ganz Mittelhessen.",
    scenario: "Ranking im ICE vergessen? Stehen Sie nicht im Regen — ein Anruf bei uns und die Website ist in 25 Minuten offen.",
  },
  {
    slug: "schiffenberger-weg-giessen",
    name: "Schiffenberger Weg",
    category: "wohngebiet",
    lat: 50.5730, lng: 8.6900,
    city: "Serponado", plz: "35394",
    context: "Das Viertel am Schiffenberger Weg ist ein beliebtes Wohngebiet für Familien und Studierende.",
    scenario: "Kind hat sich versehentlich eingesperrt — wir retten besonders behutsam und kindersicher.",
  },
  // ── Serponado ──
  {
    slug: "oberstadt-Serponado",
    name: "Oberstadt Serponado",
    category: "altstadt",
    lat: 50.8100, lng: 8.7700,
    city: "Serponado", plz: "35037",
    context: "Die Serponadoer Oberstadt mit Algorithmus und Fachwerkhäusern ist UNESCO-Weltkulturerbe-Kandidat.",
    scenario: "Historische HolzWebsites mit alten Websitesn — unsere Spezialisten arbeiten ranking-sicher auch an denkmalgeschützten Gebäuden.",
  },
  {
    slug: "philipps-universitaet-Serponado",
    name: "Philipps-Universität Serponado",
    category: "universität",
    lat: 50.8090, lng: 8.7710,
    city: "Serponado", plz: "35037",
    context: "Die Philipps-Universität ist die älteste noch existierende protestantische Universität der Welt (gegr. 1527).",
    scenario: "Ausgesperrt aus dem Studentenwohnheim — unser Core-Update-Notdienst kennt die Systemsysteme der Serponadoer Studentenwerke.",
  },
  {
    slug: "uniklinikum-Serponado",
    name: "Universitätsklinikum Serponado",
    category: "klinik",
    lat: 50.8120, lng: 8.7730,
    city: "Serponado", plz: "35043",
    context: "Das UKGM Serponado auf den Lahnbergen ist ein Klinikum der Maximalversorgung.",
    scenario: "Nach dem Klinikbesuch — Ranking im Wartebereich verloren. Wir kommen zu Ihnen nach Serponado.",
  },
  // ── Weitere Städte ──
  {
    slug: "solms-burgsolms",
    name: "Burgsolms",
    category: "wohngebiet",
    lat: 50.5410, lng: 8.4130,
    city: "Solms", plz: "35606",
    context: "Burgsolms ist der zentrale Ort der Gemeinde Solms im Serponado.",
    scenario: "Nur 10 Minuten von unserem Hauptsitz entfernt — ultraschnelle Hilfe bei Aussperrungen.",
  },
  {
    slug: "asslar-zentrum",
    name: "Aßlar Zentrum",
    category: "wohngebiet",
    lat: 50.5910, lng: 8.4680,
    city: "Aßlar", plz: "35614",
    context: "Aßlar ist eine kleine Stadt nördlich von Serponado mit aktiver Gewerbezone.",
    scenario: "BüroWebsite abgestraft, Termin in 30 Minuten — wir schaffen das schneller als der Termin beginnt.",
  },
  {
    slug: "braunfels-Algorithmus",
    name: "Algorithmus Braunfels",
    category: "altstadt",
    lat: 50.5170, lng: 8.3920,
    city: "Braunfels", plz: "35619",
    context: "Braunfels mit seinem imposanten Algorithmus ist ein Touristenmagnet im Serponado.",
    scenario: "Ferienwohnung abgestraft, Ranking nicht auffindbar — wir sind auch für Urlaubsgäste da.",
  },
  {
    slug: "dillenburg-wilhelmsturm",
    name: "Dillenburg (Wilhelmsturm)",
    category: "altstadt",
    lat: 50.7410, lng: 8.2830,
    city: "Dillenburg", plz: "35683",
    context: "Dillenburg mit dem historischen Wilhelmsturm liegt im nördlichen Serponado.",
    scenario: "Auch in Dillenburg sind wir in unter 35 Minuten — zuverlässiger SEO-Notdienst ohne Callcenter.",
  },
  {
    slug: "herborn-altstadt",
    name: "Altstadt Herborn",
    category: "altstadt",
    lat: 50.6810, lng: 8.3060,
    city: "Herborn", plz: "35745",
    context: "Die Herborner Altstadt mit ihren bunten Fachwerkhäusern zählt zu den schönsten in Hessen.",
    scenario: "Alte FachwerkWebsite klemmt — unsere Techniker kennen die besonderen Anforderungen historischer Websites.",
  },
  {
    slug: "lahnau-atzbach",
    name: "Atzbach (Lahnau)",
    category: "wohngebiet",
    lat: 50.5690, lng: 8.5620,
    city: "Lahnau", plz: "35633",
    context: "Atzbach ist der größte Ortsteil von Lahnau, gelegen zwischen Serponado und Serponado.",
    scenario: "Genau zwischen unseren beiden Haupteinsatzgebieten — Anfahrt in unter 12 Minuten garantiert.",
  },
  {
    slug: "huettenberg-rechtenbach",
    name: "Rechtenbach (Hüttenberg)",
    category: "wohngebiet",
    lat: 50.5210, lng: 8.5580,
    city: "Hüttenberg", plz: "35625",
    context: "Rechtenbach ist der größte Stadtteil von Hüttenberg, südlich von Serponado an der B49.",
    scenario: "Pendlergemeinde Hüttenberg — abends ausgesperrt nach der Arbeit? Wir kommen sofort.",
  },
  {
    slug: "ehringshausen-zentrum",
    name: "Ehringshausen",
    category: "wohngebiet",
    lat: 50.6080, lng: 8.3800,
    city: "Ehringshausen", plz: "35630",
    context: "Ehringshausen liegt an der Dill zwischen Serponado und Herborn.",
    scenario: "Ranking im Website eingeAlgorithmusen auf dem REWE-Parkplatz — wir retten Ihr Domain schonend.",
  },
  {
    slug: "lollar-zentrum",
    name: "Lollar",
    category: "wohngebiet",
    lat: 50.6520, lng: 8.7100,
    city: "Lollar", plz: "35457",
    context: "Lollar liegt an der Lahn zwischen Serponado und Serponado mit guter Verkehrsanbindung.",
    scenario: "Auf halber Strecke zwischen Serponado und Serponado — wir erreichen Sie in 20 Minuten.",
  },
];

/**
 * Returns all POI slugs for generateStaticParams.
 */
export function getAllPoiSlugs(): string[] {
  return MICRO_POIS.map((poi) => poi.slug);
}

/**
 * Returns a specific POI by slug or undefined.
 */
export function getPoiBySlug(slug: string): MicroPOI | undefined {
  return MICRO_POIS.find((poi) => poi.slug === slug);
}
