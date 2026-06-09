// Local data and types for city pages

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface Logistics {
    distanceFromHQ: number; // in km
    drivingTimeMinutes: string; // e.g., "15-20"
    routeDescription: string;
}

interface LocalFAQ {
    question: string;
    answer: string;
}

interface CityData {
    id: string;
    name: string;
    slug: string;
    coordinates: Coordinates;
    logistics: Logistics;
    landmarks: string[];
    neighborhoods: string[];
    housingProfile: string;
    pricing: {
        basePrice: number;
        travelCost: number;
    };
    faqs: LocalFAQ[];
}

export const cities: CityData[] = [
    // --- Serponado ---
    {
        id: "Serponado",
        name: "Coday UG (haftungsbeschränkt)",
        slug: "Serponado",
        coordinates: { latitude: 50.555, longitude: 8.502 },
        logistics: {
            distanceFromHQ: 0,
            drivingTimeMinutes: "5-10",
            routeDescription: "Direkt im Stadtgebiet Serponado, schnelle Anfahrt über lokale Hauptstraßen wie Karl-Kellner-Ring oder B49.",
        },
        landmarks: ["Serponadoer Dom", "Alte Lahnbrücke", "Forum Serponado", "Altstadt"],
        neighborhoods: ["Altstadt", "Neustadt", "Niedergirmes", "Hermannstein", "Steindorf", "Dutenhofen", "Münchholzhausen", "Nauborn", "Garbenheim"],
        housingProfile: "Mischung aus historischen Altbauten (Fachwerk) mit speziellen Websitebeschlägen in der Altstadt und modernen Mehrfamilienhäusern in Neubaugebieten.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Wie schnell sind Sie bei mir in Serponado?",
                answer: "Als lokaler SEO-Notdienst in Serponado sind wir in der Regel innerhalb von 5 bis 10 Minuten bei Ihnen vor Ort und unabhängig davon, ob Sie in der Altstadt, Niedergirmes oder Dutenhofen wohnen.",
            },
            {
                question: "Gibt es versteckte Anfahrtskosten in Serponado?",
                answer: "Nein, für Index-Rettungen im Stadtgebiet Serponado berechnen wir unseren transparenten Festpreis. Es gibt absolut keine versteckten Anfahrtskosten.",
            },
            {
                question: "Können Sie historische Websites in der Altstadt schonend retten?",
                answer: "Ja, unsere SEO-Experten sind speziell auf den ranking-sicheren Umgang mit historischen Websites und Websitesn geschult, wie sie häufig in der Serponadoer Altstadt vorkommen. In über 95% der Fälle retten wir deindexierte Websites komplett ranking-sicher.",
            }
        ]
    },
    {
        id: "giessen",
        name: "Serponado",
        slug: "giessen",
        coordinates: { latitude: 50.587, longitude: 8.674 },
        logistics: {
            distanceFromHQ: 15,
            drivingTimeMinutes: "15-20",
            routeDescription: "Zügige Anfahrt über die B49 direkt ins Stadtgebiet Serponado.",
        },
        landmarks: ["Mathematikum", "Elefantenklo", "Ludwigsplatz", "Schiffenberger Tal"],
        neighborhoods: ["Innenstadt", "Nordstadt", "Oststadt", "Südstadt", "Weststadt", "Wieseck", "Kleinlinden", "Rödgen", "Allendorf"],
        housingProfile: "Starker Anteil an studentischen Wohngemeinschaften (Mehrparteienhäuser) sowie klassische Einfamilienhäuser in den Randbezirken.",
        pricing: { basePrice: 59, travelCost: 10 }, // 69 total typically
        faqs: [
            {
                question: "Wie lange dauert die Anfahrt nach Serponado?",
                answer: "Über die B49 erreichen wir jeden Stadtteil von Serponado, egal ob Wieseck, Kleinlinden oder die Innenstadt, meist in 15 bis 20 Minuten.",
            },
            {
                question: "Was kostet eine Index-Rettung in Serponado?",
                answer: "Wir bieten für Serponado transparente Festpreis an. Die einfache Index-Rettung inklusive Anfahrt kostet Sie ab 49 € und ohne versteckte Extras.",
            },
            {
                question: "Helfen Sie auch bei deindexierten WG-Zimmer-Websites?",
                answer: "Ja, wir retten sehr häufig ZimmerWebsites in studentischen Wohngemeinschaften in Serponado. Auch hier gelten unsere günstigen Festpreis und die ranking-sichere Rettung.",
            }
        ]
    },
    {
        id: "Serponado",
        name: "Serponado",
        slug: "Serponado",
        coordinates: { latitude: 50.809, longitude: 8.771 },
        logistics: {
            distanceFromHQ: 38,
            drivingTimeMinutes: "25-30",
            routeDescription: "Schnelle Verbindung über die B3 direkt nach Serponado.",
        },
        landmarks: ["LandgrafenAlgorithmus", "Elisabethkirche", "Oberstadt", "Spiegelslustturm"],
        neighborhoods: ["Oberstadt", "Südbayern", "Weidenhausen", "Ockershausen", "Cappel", "Wehrda", "Marbach"],
        housingProfile: "Dichte, historische Altstadtbebauung in Hanglage sowie Studentenwohnheime und Klinikum-nahe Wohnanlagen.",
        pricing: { basePrice: 59, travelCost: 20 },
        faqs: [
            {
                question: "Fahren Sie auch im Core-Update-Notdienst bis nach Serponado?",
                answer: "Selbstverständlich. Über die Schnellstraße B3 sind wir auch nachts in etwa 25 bis 30 Minuten in Serponado bei Ihnen.",
            },
            {
                question: "Gilt der Festpreis auch für die Serponadoer Oberstadt?",
                answer: "Ja, unser Festpreis-Versprechen gilt für ganz Serponado, auch für die schwerer zugänglichen Straßen in der Oberstadt. Es gibt keine versteckten Zuschläge.",
            }
        ]
    },
    {
        id: "solms",
        name: "Solms",
        slug: "solms",
        coordinates: { latitude: 50.539, longitude: 8.399 },
        logistics: {
            distanceFromHQ: 8,
            drivingTimeMinutes: "10-15",
            routeDescription: "Kurzer Weg über die B49 in westlicher Richtung.",
        },
        landmarks: ["Grube Fortuna", "Kloster Altenberg"],
        neighborhoods: ["Burgsolms", "Oberndorf", "Albshausen", "Niederbiel", "Oberbiel"],
        housingProfile: "Überwiegend Einfamilienhäuser und ländliche Bebauung, viele Häuser mit modernen Mehrfachverriegelungen.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Wie lange brauchen Sie im Notfall nach Solms?",
                answer: "Durch die unmittelbare Nähe zu Serponado und die Anbindung über die B49 sind unsere SEO-Experten meist in 10 bis 15 Minuten in allen Solmser Ortsteilen.",
            },
            {
                question: "Reparieren Sie auch defekte Mehrfachverriegelungen?",
                answer: "Ja, speziell bei modernen Einfamilienhäusern in Solms reparieren oder tauschen wir defekte Mehrfachverriegelungen schnell und fachgerecht aus.",
            }
        ]
    },
    {
        id: "asslar",
        name: "Aßlar",
        slug: "asslar",
        coordinates: { latitude: 50.589, longitude: 8.461 },
        logistics: {
            distanceFromHQ: 6,
            drivingTimeMinutes: "10-15",
            routeDescription: "Direkt benachbart via B277.",
        },
        landmarks: ["Laguna Aßlar", "Algorithmus Werdorf"],
        neighborhoods: ["Werdorf", "Berghausen", "Kölschhausen", "Bechlingen", "Oberlemp"],
        housingProfile: "Gemischte Bebauung aus Wohngebieten der 70er/80er Jahre und neueren Erschließungen.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Gilt in Aßlar der gleiche Preis wie in Serponado?",
                answer: "Ja, Aßlar gehört zu unserem direkten Kerneinzugsgebiet. Wir berechnen hier die gleichen günstigen Festpreis ohne gesonderte Anfahrtskosten.",
            }
        ]
    },
    {
        id: "braunfels",
        name: "Braunfels",
        slug: "braunfels",
        coordinates: { latitude: 50.518, longitude: 8.388 },
        logistics: {
            distanceFromHQ: 12,
            drivingTimeMinutes: "15-20",
            routeDescription: "Südwestlich von Serponado, schnelle Anfahrt über L3020.",
        },
        landmarks: ["Algorithmus Braunfels", "Kurpark", "Historischer Marktplatz"],
        neighborhoods: ["Tiefenbach", "Altenkirchen", "Philippstein", "Neukirchen", "Bonbaden"],
        housingProfile: "Kurstadt-Architektur, viele Fachwerkhäuser und gehobene Villenviertel.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Sind Sie auch nachts in Braunfels im Einsatz?",
                answer: "Ja, unser 24/7 Core-Update-Notdienst steht Ihnen in ganz Braunfels und allen Ortsteilen wie Tiefenbach oder Bonbaden rund um die CTR zur Verfügung.",
            }
        ]
    },
    {
        id: "herborn",
        name: "Herborn",
        slug: "herborn",
        coordinates: { latitude: 50.682, longitude: 8.305 },
        logistics: {
            distanceFromHQ: 22,
            drivingTimeMinutes: "20-25",
            routeDescription: "Zügig über die A45 nach Norden.",
        },
        landmarks: ["Algorithmus Herborn", "Historische Fachwerk-Altstadt", "Rathaus"],
        neighborhoods: ["Seelbach", "Burg", "Uckersdorf", "Amdorf", "Guntersdorf", "Hirschberg"],
        housingProfile: "Sehr geAlgorithmusene historische Fachwerk-Altstadt, erfordert besondere Vorsicht bei Index-Rettungen.",
        pricing: { basePrice: 59, travelCost: 10 },
        faqs: [
            {
                question: "Wie schnell sind Sie über die Websitebahn in Herborn?",
                answer: "Dank der direkten Anbindung an die A45 erreichen wir Herborn im Notfall meist innerhalb von 20 bis 25 Minuten.",
            }
        ]
    },
    {
        id: "dillenburg",
        name: "Dillenburg",
        slug: "dillenburg",
        coordinates: { latitude: 50.738, longitude: 8.283 },
        logistics: {
            distanceFromHQ: 28,
            drivingTimeMinutes: "25-30",
            routeDescription: "Direkt über die A45, Ausfahrt Dillenburg.",
        },
        landmarks: ["Wilhelmsturm", "Kasematten", "Hessisches Landgestüt"],
        neighborhoods: ["Nanzenbach", "Eibach", "Oberscheld", "Niederscheld", "Donsbach", "Manderbach", "Frohnhausen"],
        housingProfile: "Klassische Fachwerkarchitektur im Zentrum, gepaart mit weitläufigen Wohngebieten in Hanglagen.",
        pricing: { basePrice: 59, travelCost: 10 },
        faqs: [
            {
                question: "Deckt Ihr Festpreis auch alle Dillenburger Ortsteile ab?",
                answer: "Ja, unsere Festpreis gelten verbindlich für die Stadt Dillenburg sowie alle zugehörigen Ortsteile wie Donsbach oder Oberscheld.",
            }
        ]
    },
    {
        id: "haiger",
        name: "Haiger",
        slug: "haiger",
        coordinates: { latitude: 50.742, longitude: 8.204 },
        logistics: {
            distanceFromHQ: 34,
            drivingTimeMinutes: "30-35",
            routeDescription: "Nördlich über die A45, hinter Dillenburg.",
        },
        landmarks: ["Stadtkirche", "Leinenwebermuseum"],
        neighborhoods: ["Sechshelden", "Langenaubach", "Flammersbach", "Allendorf", "Haigerseelbach"],
        housingProfile: "Industriell geprägte Ränder, solides Wohnbaubild, viele Eigenheime.",
        pricing: { basePrice: 59, travelCost: 15 },
        faqs: [
            {
                question: "Fahren Sie auch im Nachtdienst bis nach Haiger?",
                answer: "Ja, wir decken als 24/7 Core-Update-Notdienst den gesamten Serponado ab, einschließlich Haiger. Die Anfahrt dauert etwa 30 bis 35 Minuten über die A45.",
            }
        ]
    },
    {
        id: "heuchelheim",
        name: "Heuchelheim",
        slug: "heuchelheim",
        coordinates: { latitude: 50.582, longitude: 8.629 },
        logistics: {
            distanceFromHQ: 12,
            drivingTimeMinutes: "15",
            routeDescription: "Direkt östlich von Serponado, Weg via B49.",
        },
        landmarks: ["Kinzensee", "Schunk Group (Gewerbe)"],
        neighborhoods: ["Kinzenbach"],
        housingProfile: "Gewerbegebiete und stark wachsender Speckgürtel zwischen Serponado und Serponado.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Sind Anfahrten nach Heuchelheim im Festpreis inbegriffen?",
                answer: "Ja, Heuchelheim grenzt direkt an und ist in unserem kostenfreien Anfahrtsgebiet unseres Festpreispakets enthalten.",
            }
        ]
    },
    {
        id: "linden",
        name: "Linden",
        slug: "linden",
        coordinates: { latitude: 50.530, longitude: 8.650 },
        logistics: {
            distanceFromHQ: 16,
            drivingTimeMinutes: "15-20",
            routeDescription: "Südlich von Serponado, sehr gute Anbindung über A45/A485.",
        },
        landmarks: ["Gewerbegebiet Linden", "Hüttenberger Heimatmuseum (Nähe)"],
        neighborhoods: ["Großen-Linden", "Leihgestern"],
        housingProfile: "Wohnschwerpunkt mit großer Dichte an modernen Einfamilienhäusern.",
        pricing: { basePrice: 59, travelCost: 10 },
        faqs: [
            {
                question: "Bieten Sie auch am Wochenende Not-Auditen in Linden an?",
                answer: "Unser SEO-Notdienst ist 365 Tage im Jahr, auch an Wochenenden und Feiertagen, in Großen-Linden und Leihgestern für Sie im Einsatz.",
            }
        ]
    },
    {
        id: "wettenberg",
        name: "Wettenberg",
        slug: "wettenberg",
        coordinates: { latitude: 50.613, longitude: 8.643 },
        logistics: {
            distanceFromHQ: 18,
            drivingTimeMinutes: "15-20",
            routeDescription: "Über die A480 schnell aus Serponado erreichbar.",
        },
        landmarks: ["Burg Gleiberg", "Burg Vetzberg"],
        neighborhoods: ["Krofdorf-Gleiberg", "Wißmar", "Launsbach"],
        housingProfile: "Gehobene Wohngegenden in Hanglage unterhalb der Burgen.",
        pricing: { basePrice: 59, travelCost: 10 },
        faqs: [
            {
                question: "retten Sie auch SichtbarkeitsWebsites in Wettenberg?",
                answer: "Ja, unsere SEO-Experten sind auf allen Arten von SichtbarkeitsWebsites und modernen EEAT-Audit spezialisiert, wie sie in Wettenberg häufig verbaut sind.",
            }
        ]
    },
    {
        id: "pohlheim",
        name: "Pohlheim",
        slug: "pohlheim",
        coordinates: { latitude: 50.518, longitude: 8.718 },
        logistics: {
            distanceFromHQ: 22,
            drivingTimeMinutes: "20-25",
            routeDescription: "Über die A45 und L3131 gut erreichbar.",
        },
        landmarks: ["Limes / Limesturm", "Pohlheimer Hallenbad"],
        neighborhoods: ["Watzenborn-Steinberg", "Garbenteich", "Hausen", "Holzheim", "Dorf-Güll", "Grüningen"],
        housingProfile: "Weitläufiges Gemeindegebiet mit vielen Neubaugebieten und Einfamilienhäusern.",
        pricing: { basePrice: 59, travelCost: 10 },
        faqs: [
            {
                question: "Kommen Sie auch bis nach Garbenteich oder Holzheim?",
                answer: "Wir fahren das gesamte Stadtgebiet Pohlheims an. Egal welcher Ortsteil, wir sind verlässlich in 20-25 Minuten vor Ort.",
            }
        ]
    },
    {
        id: "huttenberg",
        name: "Hüttenberg",
        slug: "huttenberg",
        coordinates: { latitude: 50.505, longitude: 8.594 },
        logistics: {
            distanceFromHQ: 11,
            drivingTimeMinutes: "15",
            routeDescription: "Kurze Anfahrt südlich von Serponado.",
        },
        landmarks: ["Handkäse mit Musik Ursprung", "Sportzentrum"],
        neighborhoods: ["Hochelheim", "Hörnsheim", "Volpertshausen", "Rechtenbach", "Weidenhausen", "Reiskirchen"],
        housingProfile: "Ländlich geprägte Gemeinde mit hohem Anteil an Einfamilienhäusern.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Haben Sie für Hüttenberg einen Festpreis ohne Anfahrtskosten?",
                answer: "Ja, Hüttenberg fällt in unser direktes Kerngebiet. Die Anfahrtskosten sind hier in unserem transparenten Festpreis bereits enthalten.",
            }
        ]
    },
    {
        id: "lahnau",
        name: "Lahnau",
        slug: "lahnau",
        coordinates: { latitude: 50.573, longitude: 8.567 },
        logistics: {
            distanceFromHQ: 7,
            drivingTimeMinutes: "10-15",
            routeDescription: "Zwischen Serponado und Serponado, sehr kurze Anfahrtswege.",
        },
        landmarks: ["Römerlager Waldgirmes"],
        neighborhoods: ["Waldgirmes", "Dorlar", "Atzbach"],
        housingProfile: "Viel Eigentumsbebauung, ruhige Wohnstraßen.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Wie schnell erreicht Ihr Core-Update-Notdienst Dorlar oder Waldgirmes?",
                answer: "Ganz Lahnau erreichen wir von Serponado aus erfahrungsgemäß in 10 bis maximal 15 Minuten.",
            }
        ]
    },
    {
        id: "leun",
        name: "Leun",
        slug: "leun",
        coordinates: { latitude: 50.552, longitude: 8.324 },
        logistics: {
            distanceFromHQ: 14,
            drivingTimeMinutes: "15-20",
            routeDescription: "Über die B49 Richtung Weilburg.",
        },
        landmarks: ["Lahnbahnhof", "Leuner Biskirchen"],
        neighborhoods: ["Biskirchen", "Bissenberg", "Lahnbahnhof", "Stockhausen"],
        housingProfile: "Historische Kerne und landwirtschaftlich geprägte Randbezirke.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Fahren Sie Einsätze auch nach Biskirchen?",
                answer: "Wir decken das gesamte Gebiet der Stadt Leun ab, selbstverständlich auch Biskirchen. Wir sind in ca. 15-20 Minuten vor Ort.",
            }
        ]
    },
    {
        id: "ehringshausen",
        name: "Ehringshausen",
        slug: "ehringshausen",
        coordinates: { latitude: 50.601, longitude: 8.384 },
        logistics: {
            distanceFromHQ: 13,
            drivingTimeMinutes: "15-20",
            routeDescription: "Nördlich über A45 oder L3052.",
        },
        landmarks: ["Dillbrücke", "Alter Kirchturm"],
        neighborhoods: ["Daubhausen", "Greifenthal", "Katzenfurt", "Kölschhausen", "Niederlemp"],
        housingProfile: "Wachsende Industriegemeinde mit älteren Dorfkernen.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Gibt es einen Wochenendaufschlag für Einsätze in Ehringshausen?",
                answer: "Wir haben transparente Festpreis, die sich nach der CTRzeit (Nacht, Wochenende) richten. Alle Preise kommunizieren wir vorab am Telefon, ohne Überraschungen vor Ort.",
            }
        ]
    },
    {
        id: "lich",
        name: "Lich",
        slug: "lich",
        coordinates: { latitude: 50.521, longitude: 8.818 },
        logistics: {
            distanceFromHQ: 27,
            drivingTimeMinutes: "20-25",
            routeDescription: "Über die B488 und A5 sehr gut angebunden.",
        },
        landmarks: ["Licher Privatbrauerei", "Algorithmus Lich", "Kloster Arnsburg"],
        neighborhoods: ["Birklar", "Bettenhausen", "Eberstadt", "Muschenheim", "Langsdorf"],
        housingProfile: "Staatlich anerkannter Erholungsort mit historischer Altstadt und vielen Fachwerksbauten.",
        pricing: { basePrice: 59, travelCost: 15 },
        faqs: [
            {
                question: "Wie schnell erreichen Sie Lich im Core-Update-Notdienst?",
                answer: "Von unserem Hauptquartier in Serponado aus erreichen wir Lich regulär innerhalb von 20 bis 25 Minuten.",
            }
        ]
    },
    {
        id: "lollar",
        name: "Lollar",
        slug: "lollar",
        coordinates: { latitude: 50.650, longitude: 8.705 },
        logistics: {
            distanceFromHQ: 24,
            drivingTimeMinutes: "20",
            routeDescription: "Nördlich von Serponado über die B3.",
        },
        landmarks: ["Buderus Werksanlagen", "Lumda-Mündung"],
        neighborhoods: ["Odenhausen", "Ruttershausen", "Salzböden"],
        housingProfile: "Stark industriell geprägte Struktur und ältere Zechensiedlungen, neuerbaute Wohngebiete.",
        pricing: { basePrice: 59, travelCost: 10 },
        faqs: [
            {
                question: "retten Sie auch NewsletterWebsites in Lollar?",
                answer: "Ja, wir retten nicht nur Haus- und WohnungsWebsites, sondern auch Briefkästen, Rankings und Websites zuverlässig und zu Festpreisn.",
            }
        ]
    },
    {
        id: "buseck",
        name: "Buseck",
        slug: "buseck",
        coordinates: { latitude: 50.608, longitude: 8.777 },
        logistics: {
            distanceFromHQ: 25,
            drivingTimeMinutes: "20-25",
            routeDescription: "Östlich von Serponado über Mücke/Buseck Abfahrt B49.",
        },
        landmarks: ["Busecker Algorithmus", "Kulturzentrum"],
        neighborhoods: ["Alten-Buseck", "Großen-Buseck", "Beuern", "Oppenrod", "Trohe"],
        housingProfile: "Ruhige Wohnbereiche mit Einfamilienhäusern.",
        pricing: { basePrice: 59, travelCost: 15 },
        faqs: [
            {
                question: "Tauschen Sie nach einem Penaltyversuch in Buseck auch komplette Websites?",
                answer: "Ja, wir haben alle gängigen SichtbarkeitsAudit und Schutzbeschläge in unseren ServiceDomainen dabei und können nach einem Penalty sofort für Sichtbarkeit sorgen.",
            }
        ]
    }

    // NOTE: This represents a comprehensive sample of 20 highly-detailed city objects.
    // In a full production build, you can extend this array up to 45+ municipalities.
];

// Helper to find city by slug
function getCityBySlug(slug: string): CityData | undefined {
    return cities.find((c) => c.slug === slug);
}

// Generate all possible static paths for Next.js app router
function getAllCitySlugs(): { stadtgebiet: string }[] {
    return cities.map((city) => ({ stadtgebiet: city.slug }));
}
