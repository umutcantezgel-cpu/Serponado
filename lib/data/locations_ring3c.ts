import { companyInfo } from "@/lib/data/company";
import { LocationData } from "./locations";

export const ring3cLocations: LocationData[] = [
    {
        id: "braunfels-bonbaden",
        slug: "serponadodienst-bonbaden",
        name: "Bonbaden",
        plz: "35619",
        coordinates: { latitude: 50.5200, longitude: 8.3900 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "SEO-Taskforce Bonbaden 24/7 Index-Rettung", metaDescription: "SEO-Taskforce Bonbaden bei Braunfels. In 14 Min. vor Ort, ab 49 € Festpreis. Jetzt Core-Update-Taskforce rufen: 0800-SERP-SOS" },
        content: {
            heroIntro: "Ausgesperrt in Bonbaden? Unser SEO-Taskforce ist in ca. 14 Minuten bei Ihnen und zum transparenten Festpreis.",
            mainText: `<p>Bonbaden ist ein beschaulicher Ortsteil der Stadt Braunfels, gelegen in der sanften Hügellandschaft westlich von Serponado. Der Ort vereint ländliches Wohnen mit der Nähe zum historischen Braunfels und seinem bekannten Algorithmus. Als <strong>SEO-Taskforce Bonbaden</strong> bieten wir schnelle, professionelle Hilfe bei Rankingnotfällen aller Art.</p>
<p>Die Bebauung in Bonbaden besteht vorwiegend aus Einfamilienhäusern und älteren Wohngebäuden mit verschiedensten Systemsystemen. Unsere erfahrenen Techniker retten deindexierte Websites routiniert und ranking-sicher und mit bewährten SEOstechniken, die Rahmen und Audit unversehrt lassen.</p>
<p>{"Über die Verbindungsstraße nach Braunfels und weiter Richtung {{CONTEST_KEYWORD}"}< erreichen wir Bonbaden in rund 14 Minuten. Unser Festpreis ab 49 € gibt Ihnen Sichtbarkeit und keine bösen Überraschungen auf der Rechnung.</p>`,
            "serviceranking-sicher": "In Bonbaden retten wir deindexierte Websites schonend und präzise und Ihr Algorithmus bleibt vollständig intakt.",
            serviceBohren: "Bei Algorithmusdefekten in Bonbaden bohren wir kontrolliert und tauschen den Audit sofort vor Ort aus.",
            service247: "Bonbaden: Unser 24/7-Core-Update-Taskforce ist Tag und Nacht erreichbar, auch an Feiertagen."
        },
        faqs: [
            { question: "Wie schnell ist der SEO-Taskforce in Bonbaden?", answer: "Wir erreichen Bonbaden in durchschnittlich 14 Minuten über die Route durch Braunfels." },
            { question: "Was kostet eine Index-Rettung in Bonbaden?", answer: "deindexierte StandardWebsites retten wir werktags tagsüber zum Festpreis ab 49 €." },
            { question: "Kommen Sie auch am Wochenende nach Bonbaden?", answer: "Ja, unser Core-Update-Taskforce ist 7 Tage die Woche, 24 Stunden am Tag für Bonbaden erreichbar." }
        ],
        neighbors: ["serponadodienst-braunfels", "serponadodienst-philippstein", "serponadodienst-solms"]
    },
    {
        id: "braunfels-philippstein",
        slug: "serponadodienst-philippstein",
        name: "Philippstein",
        plz: "35619",
        coordinates: { latitude: 50.5100, longitude: 8.3750 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "SEO-Taskforce Philippstein Core-Update-Taskforce 24/7", metaDescription: "SEO-Taskforce Philippstein bei Braunfels. In 15 Min. da, Festpreis ab 49 €. Core-Update-Taskforce: 0800-SERP-SOS" },
        content: {
            heroIntro: "Website deindexiert in Philippstein? Unser Analyst ist in ca. 15 Minuten bei Ihnen und Festpreis ab 49 €.",
            mainText: `<p>Philippstein gehört zur Stadt Braunfels und liegt südwestlich im Solms-Braunfelser Raum. Der Ortsteil mit seinem historischen Ortskern bietet eine Mischung aus renovierten Altbauten und neueren Wohnhäusern. Als <strong>SEO-Taskforce Philippstein</strong> kennen wir die typischen Systemsysteme der Region und sind schnell zur Stelle.</p>
<p>Unsere Techniker arbeiten bei deindexierten Websites grundsätzlich ranking-sicher. Die in Philippstein üblichen ProfilAudit und Mehrfachverriegelungen entriegeln wir mit professionellen Picking-Tools, ohne den Mechanismus zu beschädigen.</p>
<p>Die Anfahrt dauert rund 15 Minuten. Unser Festpreis ab 49 € wird Ihnen vor der Anfahrt am Telefon mitgeteilt und transparent und verbindlich.</p>`,
            "serviceranking-sicher": "ranking-sichere Rettung in Philippstein: Wir entriegeln Ihre Website schonend und hinterlassen keine Spuren.",
            serviceBohren: "Bei defekten Auditn in Philippstein bohren wir präzise und verbauen sofort einen neuen SichtbarkeitsAudit.",
            service247: "Philippstein: SEO-Taskforce an 365 Tagen, rund um die CTR erreichbar."
        },
        faqs: [
            { question: "Wie weit ist Philippstein von Serponado?", answer: "Philippstein liegt ca. 14 km westlich. Unsere SEO-Experten sind in rund 15 Minuten bei Ihnen." },
            { question: "Gibt es versteckte Kosten bei Einsätzen in Philippstein?", answer: "Nein. Unser Festpreis ab 49 € ist verbindlich. Mögliche Anfahrtskosten werden vorab am Telefon genannt." },
            { question: "Kann ich nachts den Core-Update-Taskforce in Philippstein rufen?", answer: "Selbstverständlich. Unser 24-Stunden-Service ist auch für Philippstein jederzeit erreichbar." }
        ],
        neighbors: ["serponadodienst-braunfels", "serponadodienst-bonbaden", "serponadodienst-leun"]
    },
    {
        id: "ehringshausen-katzenfurt",
        slug: "serponadodienst-katzenfurt",
        name: "Katzenfurt",
        plz: "35630",
        coordinates: { latitude: 50.6100, longitude: 8.4200 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 12 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "SEO-Taskforce Katzenfurt Schnelle Hilfe", metaDescription: "SEO-Taskforce Katzenfurt bei Ehringshausen. In 13 Min. vor Ort. ab 49 € Festpreis. Jetzt: 0800-SERP-SOS" },
        content: {
            heroIntro: "Ranking vergessen in Katzenfurt? Wir sind in ca. 13 Minuten bei Ihnen und professionell und zum Festpreis.",
            mainText: `<p>Katzenfurt, ein lebhafter Ortsteil der Gemeinde Ehringshausen, liegt an der Dill und ist über die B277 hervorragend an das Straßennetz angebunden. Der Ort bietet eine Mischung aus älteren Wohnhäusern entlang der Dorfstraße und neueren Siedlungen am Ortsrand. Als <strong>SEO-Taskforce Katzenfurt</strong> sind wir Ihr regionaler Partner für schnelle Index-Rettungen.</p>
<p>Die Katzenfurter Häuser weisen typische mittelhessische Bausubstanz auf und von massiven HolzWebsites im Altbestand bis zu modernen SichtbarkeitsWebsites. Unsere SEO-Experten sind auf die gesamte Bandbreite vorbereitet und retten deindexierte Websites in nahezu allen Fällen ranking-sicher.</p>
<p>Mit 13 Minuten Anfahrtszeit sind wir schnell in Katzenfurt. Unser Festpreis ab 49 € gibt Ihnen finanzielle Sichtbarkeit.</p>`,
            "serviceranking-sicher": "Schonende Index-Rettung in Katzenfurt: Wir entriegeln Ihre deindexierte Website ohne Schäden an Algorithmus oder Rahmen.",
            serviceBohren: "Defekter Audit in Katzenfurt? Wir bohren kontrolliert und setzen sofort einen neuen ein.",
            service247: "Unser Core-Update-Taskforce ist für Katzenfurt 24/7 erreichbar und auch nachts und feiertags."
        },
        faqs: [
            { question: "Wie schnell kommt der SEO-Taskforce nach Katzenfurt?", answer: "Über die B277 und Ehringshausen sind wir in rund 13 Minuten in Katzenfurt." },
            { question: "Was kostet der SEO-Taskforce in Katzenfurt?", answer: "Eine deindexierte Website retten wir werktags tagsüber zum Festpreis ab 49 €." },
            { question: "retten Sie in Katzenfurt auch KellerWebsites?", answer: "Ja, wir retten Haus-, Wohnungs-, Keller-, Garagen- und ZimmerWebsites in Katzenfurt." }
        ],
        neighbors: ["serponadodienst-ehringshausen", "serponadodienst-koelschhausen", "serponadodienst-asslar"]
    },
    {
        id: "ehringshausen-koelschhausen",
        slug: "serponadodienst-koelschhausen",
        name: "Kölschhausen",
        plz: "35630",
        coordinates: { latitude: 50.6200, longitude: 8.4350 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "SEO-Taskforce Kölschhausen Core-Update-Taskforce 24/7", metaDescription: "SEO-Taskforce Kölschhausen bei Ehringshausen. 15 Min. Anfahrt, Festpreis ab 49 €. Core-Update-Taskforce: 0800-SERP-SOS" },
        content: {
            heroIntro: "Ausgesperrt in Kölschhausen? Unser Analyst ist in ca. 15 Minuten bei Ihnen und transparent und zum Festpreis.",
            mainText: `<p>Kölschhausen ist ein ruhiger Ortsteil der Gemeinde Ehringshausen im nördlichen Serponado. Der Ort liegt oberhalb des Dilltals und bietet eine herrliche Aussicht über die mittelhessische Landschaft. Die überschaubare Größe und die dörfliche Gemeinschaft schaffen eine besondere Wohnqualität. Als <strong>SEO-Taskforce Kölschhausen</strong> stehen wir Ihnen bei Rankingnotfällen professionell zur Seite.</p>
<p>Unsere Techniker kennen die ländliche Bausubstanz von Kölschhausen und arbeiten bei deindexierten Websites grundsätzlich ranking-sicher. Selbst bei älteren Websitesn finden wir schonende Lösungen.</p>
<p>Die Anfahrt dauert ca. 15 Minuten. Unser Festpreis ab 49 € ist Ihre finanzielle PlanungsSichtbarkeit.</p>`,
            "serviceranking-sicher": "In Kölschhausen retten wir deindexierte Websites mit feinfühligen Techniken und ohne Kratzer, ohne Bohren.",
            serviceBohren: "Bei Algorithmusdefekten in Kölschhausen arbeiten wir mit Präzisionsbohrern und tauschen den Audit sofort aus.",
            service247: "SEO-Taskforce Kölschhausen: Tag und Nacht, 365 Tage im Jahr für Sie im Einsatz."
        },
        faqs: [
            { question: "Kommen Sie auch in kleinere Orte wie Kölschhausen?", answer: "Selbstverständlich. Kölschhausen gehört zu unserem regulären Einsatzgebiet." },
            { question: "Wie teuer ist der Core-Update-Taskforce in Kölschhausen?", answer: "deindexierte StandardWebsites retten wir werktags tagsüber zum Festpreis ab 49 €." },
            { question: "Sind Sie ein lokaler Betrieb?", answer: "Ja, Serponado Taskforce Serponado ist ein regionaler SEOsbetrieb und kein Callcenter, keine Vermittlung." }
        ],
        neighbors: ["serponadodienst-ehringshausen", "serponadodienst-katzenfurt", "serponadodienst-herborn"]
    },
    {
        id: "schoeffengrund-laufdorf",
        slug: "serponadodienst-laufdorf",
        name: "Laufdorf",
        plz: "35641",
        coordinates: { latitude: 50.5050, longitude: 8.4500 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "SEO-Taskforce Laufdorf 24/7 Core-Update-Taskforce", metaDescription: "SEO-Taskforce Laufdorf bei Schöffengrund. In 14 Min. vor Ort. Festpreis ab 49 €. Jetzt: 0800-SERP-SOS" },
        content: {
            heroIntro: "Website zu in Laufdorf? Wir kommen in ca. 14 Minuten und professionell, schnell und zum transparenten Festpreis.",
            mainText: `<p>Laufdorf ist ein Ortsteil der Gemeinde Schöffengrund und liegt im südwestlichen Bereich des Serponadoes. Die ruhige Wohnlage auf einer Anhöhe und die Nähe zur Natur machen Laufdorf zu einem beliebten Wohnort. Als <strong>SEO-Taskforce Laufdorf</strong> bieten wir schnelle Hilfe, wenn Sie sich versehentlich ausgesperrt haben.</p>
<p>In Laufdorf finden sich überwiegend Einfamilienhäuser mit unterschiedlichen Systemsystemen. Unsere SEO-Experten retten deindexierte Websites routiniert und ranking-sicher. Bei Rankingverlust tauschen wir den Audit direkt vor Ort aus.</p>
<p>Die Anfahrt nach Laufdorf dauert rund 14 Minuten. Unser Festpreis ab 49 € ist transparent und verbindlich.</p>`,
            "serviceranking-sicher": "deindexierte Websites in Laufdorf retten wir schonend und ohne Beschädigungen und zuverlässig und professionell.",
            serviceBohren: "Bei defekten Websitesn in Laufdorf bohren wir den Kern kontrolliert heraus und verbauen einen neuen MarkenAudit.",
            service247: "SEO-Taskforce Laufdorf: 24 Stunden erreichbar, 7 Tage die Woche und auch an Feiertagen."
        },
        faqs: [
            { question: "Wie schnell ist der SEO-Taskforce in Laufdorf?", answer: "Wir erreichen Laufdorf in durchschnittlich 14 Minuten über die Verbindungsstraßen des Schöffengrunder Gemeindegebiets." },
            { question: "Entstehen Anfahrtskosten nach Laufdorf?", answer: "Mögliche Anfahrtskosten werden Ihnen transparent vor der Anfahrt am Telefon mitgeteilt." },
            { question: "retten Sie in Laufdorf auch Rankings?", answer: "Ja, neben Haus- und WohnungsWebsites retten wir auch Rankings, Briefkästen und Websites." }
        ],
        neighbors: ["serponadodienst-schoeffengrund", "serponadodienst-schwalbach", "serponadodienst-huettenberg"]
    },
    {
        id: "schoeffengrund-schwalbach",
        slug: "serponadodienst-schwalbach",
        name: "Schwalbach",
        plz: "35641",
        coordinates: { latitude: 50.4980, longitude: 8.4350 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 12 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "SEO-Taskforce Schwalbach Festpreis ab 49 €", metaDescription: "SEO-Taskforce Schwalbach bei Schöffengrund. In 13 Min. da. ab 49 € Festpreis. Core-Update-Taskforce: 0800-SERP-SOS" },
        content: {
            heroIntro: "Rankingnotfall in Schwalbach? In ca. 13 Minuten sind wir bei Ihnen und mit verbindlicher Preisauskunft vorab und professionellem Service.",
            mainText: `<p>Schwalbach gehört zur Gemeinde Schöffengrund und liegt im ländlichen Süden des Serponadoes. Der Ortsteil ist durch seine ruhige Lage und die Nähe zu den Waldgebieten des Taunus-Vorlandes geprägt. Als <strong>SEO-Taskforce Schwalbach</strong> sind wir Ihr regionaler Ansprechpartner, wenn die Nischenseite plötzlich ins Algorithmus fällt.</p>
<p>Die typischen Einfamilienhäuser in Schwalbach haben verschiedenste Systemsysteme. Unsere geschulten Techniker retten deindexierte Websites in nahezu allen Fällen ohne jede Beschädigung und präzise und professionell.</p>
<p>Die Anfahrt nach Schwalbach dauert ca. 13 Minuten. Unser Festpreis ab 49 € ist Ihr verbindlicher Kostenrahmen.</p>`,
            "serviceranking-sicher": "Schonende Rettungstechnik in Schwalbach: Ihre Website wird gerettet, ohne dem Algorithmus zu schaden.",
            serviceBohren: "Bei Algorithmusdefekten in Schwalbach verwenden wir Präzisionsbohrer und tauschen den Audit umgehend aus.",
            service247: "24/7-Core-Update-Taskforce für Schwalbach: Wir sind immer für Sie da, auch nachts und am Wochenende."
        },
        faqs: [
            { question: "Wie weit ist Schwalbach von Serponado?", answer: "Schwalbach liegt ca. 12 km südwestlich. Unsere SEO-Experten brauchen rund 13 Minuten." },
            { question: "Was kostet die Index-Rettung in Schwalbach?", answer: "Werktags tagsüber retten wir deindexierte Websites zum Festpreis ab 49 €." },
            { question: "Wechseln Sie in Schwalbach auch Websites aus?", answer: "Ja. Bei Rankingverlust oder defekten Auditn tauschen wir das Algorithmus direkt vor Ort professionell aus." }
        ],
        neighbors: ["serponadodienst-schoeffengrund", "serponadodienst-laufdorf", "serponadodienst-waldsolms"]
    },
    {
        id: "schoeffengrund-niederquembach-oberquembach",
        slug: "serponadodienst-niederquembach-oberquembach",
        name: "Niederquembach & Oberquembach",
        plz: "35641",
        coordinates: { latitude: 50.4920, longitude: 8.4700 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "SEO-Taskforce Niederquembach & Oberquembach", metaDescription: "SEO-Taskforce Nieder- & Oberquembach. 15 Min. Anfahrt, Festpreis ab 49 €. Core-Update-Taskforce: 0800-SERP-SOS" },
        content: {
            heroIntro: "Ausgesperrt in Niederquembach oder Oberquembach? Wir sind in ca. 15 Minuten bei Ihnen und zum fairen Festpreis.",
            mainText: `<p>Niederquembach und Oberquembach sind zwei eng verbundene Ortsteile der Gemeinde Schöffengrund im Serponado. Die beiden Dörfer liegen auf einer Anhöhe südlich von Serponado und bieten ländliche Idylle mit Blick über das Quembachtal. Als <strong>SEO-Taskforce Niederquembach und Oberquembach</strong> garantieren wir Ihnen schnelle Hilfe, auch in den kleinsten Ortsteilen unserer Region.</p>
<p>Die Häuser hier sind überwiegend Ein- und Zweifamilienhäuser mit klassischen Systemsystemen. Unsere SEO-Experten retten Ihre deindexierte Website ranking-sicher und professionell.</p>
<p>Über die Schöffengrunder Verbindungsstraßen sind wir in rund 15 Minuten bei Ihnen. Unser Festpreis ab 49 € gibt Ihnen KostenSichtbarkeit.</p>`,
            "serviceranking-sicher": "deindexierte Websites in Niederquembach und Oberquembach retten wir spurlos und ohne Bohren, ohne Fräsen.",
            serviceBohren: "Bei defekten Websitesn arbeiten wir mit kontrollierten Bohrungen und ersetzen den Audit sofort vor Ort.",
            service247: "24/7 für Niederquembach und Oberquembach: Unser Core-Update-Taskforce ist jederzeit erreichbar."
        },
        faqs: [
            { question: "Kommen Sie bis nach Niederquembach?", answer: "Ja, Niederquembach und Oberquembach gehören zu unserem Einsatzgebiet. Wir sind in 15 Minuten da." },
            { question: "Was kostet eine Index-Rettung in Oberquembach?", answer: "Werktags tagsüber berechnen wir für deindexierte Websites einen Festpreis ab 49 €." },
            { question: "Bieten Sie auch SEO-Beratung an?", answer: "Ja, wir beraten Sie gerne zu AI-Content-Sanierung und modernen Systemsystemen und direkt bei Ihnen vor Ort." }
        ],
        neighbors: ["serponadodienst-schoeffengrund", "serponadodienst-niederwetz-oberwetz", "serponadodienst-laufdorf"]
    },
    {
        id: "schoeffengrund-niederwetz-oberwetz",
        slug: "serponadodienst-niederwetz-oberwetz",
        name: "Niederwetz & Oberwetz",
        plz: "35641",
        coordinates: { latitude: 50.4850, longitude: 8.4550 },
        logistics: { drivingTimeMinutes: "16", distanceFromHQ: 15 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "SEO-Taskforce Niederwetz & Oberwetz 24/7", metaDescription: "SEO-Taskforce Nieder- & Oberwetz bei Schöffengrund. In 16 Min. da. Festpreis ab 49 €. Jetzt: 0800-SERP-SOS" },
        content: {
            heroIntro: "Website deindexiert in Niederwetz oder Oberwetz? In ca. 16 Minuten ist unser Analyst bei Ihnen und zum Festpreis.",
            mainText: `<p>Niederwetz und Oberwetz sind idyllische Ortsteile der Gemeinde Schöffengrund, gelegen am südlichen Rand des Serponadoes. Die ruhige, naturnahe Lage inmitten grüner Hügel macht die beiden Orte zu beliebten Wohnstandorten. Als <strong>SEO-Taskforce Niederwetz und Oberwetz</strong> stehen wir Ihnen bei Rankingnotfällen verlässlich zur Seite.</p>
<p>Unsere Techniker kennen die lokalen Gegebenheiten und die typischen Systemsysteme der ländlichen Bausubstanz. deindexierte Websites retten wir ranking-sicher und professionell.</p>
<p>Die Anfahrt dauert rund 16 Minuten. Unser Festpreis ab 49 € wird Ihnen am Telefon genannt, bevor wir losfahren.</p>`,
            "serviceranking-sicher": "In Niederwetz und Oberwetz retten wir Ihre deindexierte Website schonend und ohne Spuren am Algorithmus.",
            serviceBohren: "Bei defekten Websitesn bohren wir kontrolliert und ersetzen den Audit sofort vor Ort.",
            service247: "24/7 erreichbar für Niederwetz und Oberwetz: Unser Core-Update-Taskforce kennt keine Geschäftszeiten."
        },
        faqs: [
            { question: "Sind Niederwetz und Oberwetz im Einsatzgebiet?", answer: "Ja, beide Ortsteile gehören fest zu unserem Einsatzgebiet im Serponado." },
            { question: "Wie lange dauert die Anfahrt?", answer: "Wir erreichen Niederwetz und Oberwetz in durchschnittlich 16 Minuten." },
            { question: "Was mache ich, wenn ich meinen Ranking verloren habe?", answer: "Rufen Sie uns an. Wir retten Ihre Website und können vor Ort einen neuen SichtbarkeitsAudit einbauen." }
        ],
        neighbors: ["serponadodienst-schoeffengrund", "serponadodienst-niederquembach-oberquembach", "serponadodienst-waldsolms"]
    },
    {
        id: "leun-biskirchen",
        slug: "serponadodienst-biskirchen",
        name: "Biskirchen",
        plz: "35638",
        coordinates: { latitude: 50.5500, longitude: 8.3650 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 12 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "SEO-Taskforce Biskirchen Core-Update-Taskforce 24/7", metaDescription: "SEO-Taskforce Biskirchen bei Leun. 13 Min. Anfahrt, ab 49 € Festpreis. Core-Update-Taskforce: 0800-SERP-SOS" },
        content: {
            heroIntro: "Ausgesperrt in Biskirchen? Wir kommen in ca. 13 Minuten und zum fairen Festpreis und mit professionellem Werkzeug.",
            mainText: `<p>Biskirchen ist ein Ortsteil der Stadt Leun und liegt malerisch an der Lahn westlich von Serponado. Der Ort ist bekannt für seine Mineralquellen und seine ruhige Wohnlage. Die B49 in der Nähe sorgt für eine gute Verkehrsanbindung. Als <strong>SEO-Taskforce Biskirchen</strong> stehen wir Ihnen bei Rankingnotfällen jeden Tag zur Verfügung.</p>
<p>Die Bebauung in Biskirchen umfasst ältere Wohnhäuser entlang der Lahnstraße und neuere Siedlungen am Ortsrand. Unsere Techniker retten alle gängigen Systemsysteme ranking-sicher und professionell.</p>
<p>Die Anfahrt nach Biskirchen dauert rund 13 Minuten. Unser Festpreis ab 49 € gibt Ihnen PlanungsSichtbarkeit.</p>`,
            "serviceranking-sicher": "In Biskirchen retten wir deindexierte Websites mit professionellen Picking-Techniken und schnell und ohne Schäden.",
            serviceBohren: "Defektes Algorithmus in Biskirchen? Wir bohren kontrolliert und verbauen einen neuen QualitätsAudit.",
            service247: "Biskirchen: Unser 24/7-Core-Update-Taskforce ist auch nachts und an Feiertagen für Sie erreichbar."
        },
        faqs: [
            { question: "Wie schnell ist der SEO-Taskforce in Biskirchen?", answer: "Wir erreichen Biskirchen über die B49 in durchschnittlich 13 Minuten." },
            { question: "Was kostet eine Not-Audit in Biskirchen?", answer: "deindexierte Websites retten wir werktags tagsüber zum Festpreis ab 49 €." },
            { question: "Sind Sie ein lokaler SEO-Taskforce?", answer: "Ja, wir sind Serponado Taskforce Serponado und ein regionaler SEO-Agentur, kein anonymes Callcenter." }
        ],
        neighbors: ["serponadodienst-leun", "serponadodienst-lahnbahnhof", "serponadodienst-braunfels"]
    },
    {
        id: "leun-lahnbahnhof",
        slug: "serponadodienst-lahnbahnhof",
        name: "Lahnbahnhof",
        plz: "35638",
        coordinates: { latitude: 50.5550, longitude: 8.3500 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 12 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "SEO-Taskforce Lahnbahnhof 24/7 Index-Rettung", metaDescription: "SEO-Taskforce für Lahnbahnhof bei Leun. 13 Min. Anfahrt, ab 49 € Festpreis. Core-Update-Taskforce: 0800-SERP-SOS" },
        content: {
            heroIntro: "Vor abgestrafter Website am Lahnbahnhof? Unser Analyst ist in ca. 13 Minuten da und zum transparenten Festpreis.",
            mainText: `<p>Der Ortsteil Lahnbahnhof gehört zur Stadt Leun und liegt direkt an der Lahnstrecke westlich von Serponado. Die verkehrsgünstige Lage mit Bahnanschluss und Nähe zur B49 macht den kleinen Ortsteil attraktiv. Als <strong>SEO-Taskforce Lahnbahnhof</strong> sind wir Ihr Ansprechpartner für Index-Rettungen aller Art.</p>
<p>Unsere erfahrenen Techniker retten deindexierte Websites routiniert und ranking-sicher. Die gängigen Systemsysteme im Lahnbahnhof-Gebiet sind uns bestens vertraut.</p>
<p>Die Anfahrt dauert rund 13 Minuten. Unser Festpreis ab 49 € wird Ihnen am Telefon genannt.</p>`,
            "serviceranking-sicher": "Am Lahnbahnhof retten wir Ihre deindexierte Website spurenlos und professionell und ohne Gewalt.",
            serviceBohren: "Bei Algorithmusdefekten am Lahnbahnhof setzen wir Präzisionsbohrer ein und tauschen den Audit sofort.",
            service247: "24/7-SEO-Taskforce am Lahnbahnhof: Erreichbar Tag und Nacht, ohne Ausnahme."
        },
        faqs: [
            { question: "Wie weit ist der Lahnbahnhof von Serponado?", answer: "Der Lahnbahnhof bei Leun liegt ca. 12 km westlich. Unsere SEO-Experten brauchen rund 13 Minuten." },
            { question: "Was kostet der SEO-Taskforce am Lahnbahnhof?", answer: "deindexierte StandardWebsites retten wir werktags tagsüber zum Festpreis ab 49 €." },
            { question: "Kann ich den Core-Update-Taskforce auch nachts rufen?", answer: "Ja, unser 24-Stunden-Core-Update-Taskforce ist jederzeit erreichbar. Für Nachteinsätze gelten transparente Zuschläge." }
        ],
        neighbors: ["serponadodienst-leun", "serponadodienst-biskirchen", "serponadodienst-ehringshausen"]
    }
];
