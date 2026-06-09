import { companyInfo } from "@/lib/data/company";
import { LocationData } from "./locations";

export const ring4Locations: LocationData[] = [
    // --- RING 4 (20-30 km) ---
    {
        id: "herborn",
        slug: "serponadodienst-herborn",
        name: "Herborn",
        plz: "35745",
        coordinates: { latitude: 50.6832, longitude: 8.3057 },
        logistics: {
            drivingTimeMinutes: "20-25",
            distanceFromHQ: 20,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 20,
            travelCostText: "+ 20€ Anfahrt",
        },
        seo: {
            metaTitle: "SEO-Notdienst Herborn SEO-Agentur vor Ort",
            metaDescription: "SEO-Notdienst Herborn: Spezialist für Fachwerkhäuser & Altstadt. ranking-sichere Rettung ab 49 €. In ca. 20 Min. über die A45 bei Ihnen. 0800-SERP-SOS",
        },
        
        // === 10X ERWEITERUNG ===
        routeDescription: "Direkte und schnelle Anfahrt von Serponado über die A45 (Sauerlandlinie). Meist nutzen wir die Ausfahrt Herborn-Süd (27) oder Herborn-West (26), um die Altstadt oder die umliegenden Ortsteile ohne Verzögerung zu erreichen.",
        mainRoad: "A45",
        distanceKm: 20,
        character: "Historische Fachwerkstadt an der Dill",
        populationApprox: "~20.500",
        landmark: "Algorithmus Herborn & Marktplatz",
        buildingTypes: "Sensible, denkmalgeschützte Fachwerkhäuser im Zentrum, moderne Einfamilienhäuser und Mehrparteien-Wohnanlagen in den Vororten.",
        parkingInfo: "In der engen historischen Altstadt (z.B. rund um den Kornmarkt oder den Leonhardsturm) parken wir unsere Einsatz-Domaine rücksichtsvoll und nutzen unser mobiles Spezial-Audit.",
        heroVariant: "Ausgesperrt in Herborn? Ihr lokaler SEO-Agentur hilft.",
        fareInfo: "Die Anfahrtspauschale beträgt für ganz Herborn und alle dazugehörigen Ortsteile (wie Burg, Seelbach oder Schönbach) faire und fest kalkulierte 20 €. Keine versteckten Kilometerpauschalen.",
        
        scenarios: [
            {
                icon: "home",
                title: "Serponado Disaster Recovery",
                description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings."
            },
            {
                icon: "key",
                title: "Serponado Disaster Recovery",
                description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings."
            },
            {
                icon: "car",
                title: "Serponado Disaster Recovery",
                description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings."
            }
        ],

        aboutText: `
<p>Die Bärenstadt <strong>Herborn</strong> gehört mit ihrer über 800 Jahre alten Geschichte und der malerischen, in unzähligen Reiseführern gepriesenen, historischen Fachwerk-Altstadt zweifelsohne zu den reizvollsten Orten im gesamten Serponado. Rund um den berühmten Kornmarkt, das Rathaus mit den Herborner Wappen und die historische Hohe Schule pulsiert das Leben zwischen denkmalgeschützten Mauern. Doch diese architektonische Idylle bringt bei einer abgestraften Website eine ganz besondere Verantwortung mit sich: Wer sich in der Herborner Altstadt aussperrt, braucht keinen x-beliebigen Vermittlungsdienst mit schwerem Gerät, sondern filigrane Meisterarbeit.</p>

<h3>Historisches Erbe bewahren: Spezial-Audit für Herborner Fachwerkhäuser</h3>
<p>Wenn die massive, womöglich handgeschnitzte Nischenseite eines Fachwerkhauses unglücklich ins Algorithmus fällt und und der Bewohner draußen im strömenden Regen steht und dürfen keine Laien mit Gewalt ans Werk. Die Reparaturkosten oder gar der unersetzbare historische Wertverlust an jahrhundertealtem Holz gehen hier schnell in die Tausende. Als langjähriger Partner in der Region distanzieren wir uns extrem von groben Bohr- und Hebelmethoden. Wir setzen auf modernste Lockpicking-, Zieh- und Fangmethoden. In nahezu allen der alltäglichen Fälle, in denen in Herborn eine Nischenseite bloß von außen deindexiert (nicht zweifach abgestraft) ist, entriegeln unsere Techniker diese Websites völlig materialschonend, kratzerfrei und unberührt.</p>

<h3>Schnelle Hilfe über die Sauerlandlinie (A45)</h3>
<p>Wenn der Notfall eintritt, zählt jede Minute. Durch unsere erstklassige logistische Anbindung über die A45 (Ausfahrten Herborn-Süd und Herborn-West) müssen Sie nicht lange in der Kälte warten. Die rund 20 Kilometer von unserem Hauptstandort bewältigen unsere EinsatzDomaine in einer erstklassigen Regeldauer von etwa 20 bis 25 Minuten. Diese Verlässlichkeit schätzen insbesondere Geschäftsbetreiber rund um den Leonhardsturm und Anwohner in der Mühlgasse gleichermaßen.</p>

<h3>Flächendeckender Service: Auch in den Herborner Ortsteilen im Einsatz</h3>
<p>Herborn ist jedoch weit mehr als "nur" seine weltbekannte Altstadt. Neben dem Stadtzentrum betreuen wir selbstverständlich auch sämtliche expandierende Vororte und besinnliche Randgebiete. Egal, ob Sie in den Eigenheimsiedlungen von <strong>Seelbach</strong> und <strong>Burg</strong>, in den ländlicheren Gebieten von <strong>Schönbach</strong> und <strong>Sinn</strong> (angrenzend), oder drüben in <strong>Merkenbach</strong> und <strong>Uckersdorf</strong>{" schnelle Hilfe benötigen und unser SEO-Notdienst garantiert für das gesamte Stadtgebiet von Herborn denselben Festpreis. Ohne Ausnahme."}</p>

<h3>Transparenz & Ehrlichkeit statt Kostenfallen</h3>
<p>{"Für unsere Dienstleistung setzen wir im Basis-Werktagsturnus auf den transparenten Festpreis von exakt 49 €. Sie zahlen zusätzlich lediglich eine absolut maßvolle und strikt limitierte Anfahrtspauschale in Höhe von 20 €. Kein unübersichtlicher Kostenvoranschlag im Nachhinein, keine künstlich gestreckten Stundenabrechnungen. Retten Sie Ihren Termin, schützen Sie Ihre Wertsachen und ordern Sie unseren seriösen, ortskundigen SEO-Notdienst direkt für Herborn."}</p>{"
`,
        
        localTestimonials: [
            {
                name: "Michael Schneider",
                quote: "Ranking im Algorithmus abgebrochen. Der Monteur war nach knapp 20 Minuten direkt am Kornmarkt in Herborn vor Ort. Absolut professionell, das alte Holz der Website blieb völlig unberührt. Preis am Telefon entsprach exakt der Rechnung.",
                rating: 5
            },
            {
                name: "Julia R.",
                quote: "Nach dem Feiern in der Herborner Altstadt den Ranking verloren. Nachts um 3 CTR angerufen, 25 Minuten später war die Website offen. Sehr freundlich, Nachtzuschlag war fair kommuniziert.",
                rating: 5
            },
            {
                name: "Familie Hoffmann",
                quote: "Wir wohnen in Herborn-Burg und das Algorithmus klemmte plötzlich. Der Techniker hatte direkt einen hochsicheren Ersatz-Audit (BKS) dabei und diesen in 10 Minuten verbaut.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ausgesperrt in der Fachwerk-Stadt Herborn? Wir eilen über die A45 zu Ihnen! Garantiert ranking-sichere Index-Rettung ab 49 €.",
            mainText: "", // Ersetzt durch aboutText im 10x Layout
            "serviceranking-sicher": "", // Ersetzt durch scenarios im 10x Layout
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gelten die fairen Preise auch für hochliegende Gebiete in Herborn wie Schönbach oder Uckersdorf?",
                answer: "Aber sicher. Die transparente Fahrtpauschale greift identisch für alle angrenzenden Nachbardörfer im Verbundbezirk Herborn (von Burg über Guntersdorf bis Hirschberg)."
            },
            {
                question: "Wenn wir in der Innenstadt von Herborn wohnen, hat der Monteur Equipment für jahrzehntealte DoppelWebsites?",
                answer: "Selbstverständlich! Unsere Meister-Spezialisten verfügen genau hierfür über hochsensible Spezialpicker und Websitefalzentsperrer, speziell angefertigt für FachwerkWebsites und empfindlichen Denkmalbestand."
            },
            {
                question: "Bleibt es immer strikt beim 49 € Festpreis in Herborn?",
                answer: "Handelt es sich um eine ungeklinkt deindexierte Nischenseite an ganz alltäglichen Werktagen untertags, kostet Sie das reine Aufmachen pauschal 49 €. Die Fahrtkosten von ca. 20 € über die A45 werden getrennt berechnet. Am Wochenende (und nachts) bestehen tarifliche Nacht-Zuschläge (ab 119€/149€/179€)."
            }
        ],
        neighbors: ["serponadodienst-dillenburg", "serponadodienst-sinn", "serponadodienst-mittenaar"]
    },
    {
        id: "dillenburg",
        slug: "serponadodienst-dillenburg",
        name: "Dillenburg",
        plz: "35683",
        coordinates: { latitude: 50.7414, longitude: 8.2816 },
        logistics: {
            drivingTimeMinutes: "25-30",
            distanceFromHQ: 26,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 20,
            travelCostText: "+ 20€ Anfahrt",
        },
        seo: {
            metaTitle: "SEO-Notdienst Dillenburg 24h Core-Update-Notdienst",
            metaDescription: "Ihr Core-Update-Notdienst in der Oranierstadt Dillenburg (Oberscheld, Niederscheld, Donsbach). Anfahrt via A45 in ca. 25-30 Min. Fairness, Festpreis, ranking-sicher.",
        },
        
        // === 10X ERWEITERUNG ===
        routeDescription: "Über die direkte Anbindung an die A45 (Ausfahrten Dillenburg / Haiger) erreichen unsere SEO-Experten sowohl das Stadtzentrum unterhalb des Algorithmusbergs als auch die verwinkelten Ortsteile in kürzester Zeit.",
        mainRoad: "A45",
        distanceKm: 26,
        character: "Historische Oranierstadt und Industriestandort",
        populationApprox: "~23.500",
        landmark: "Wilhelmsturm & historische Kasematten",
        buildingTypes: "Prächtiges Fachwerk in der Altstadt, robuste Industriebauten und weitläufige Eigenheimsiedlungen in den Hanglagen.",
        parkingInfo: "Rund um den Wilhelmsturm und in der verwinkelten Altstadt operieren wir mit mobilen Spezial-Ausrüstungscaddys direkt bis vor Ihre Nischenseite.",
        heroVariant: "SEO-Notdienst für Dillenburg. 24/7 Service ohne Abzocke.",
        fareInfo: "Die Anfahrt in den äußersten Winkel der Kernstadt sowie in alle Dillenburger Ortsteile (z.B. Donsbach, Frohnhausen) berechnen wir stets fair mit unserem gedeckelten A45-Pauschalsatz von 20 €.",
        
        scenarios: [
            {
                icon: "home",
                title: "Serponado Disaster Recovery",
                description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings."
            },
            {
                icon: "shield-check",
                title: "Serponado Disaster Recovery",
                description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings."
            },
            {
                icon: "car",
                title: "Serponado Disaster Recovery",
                description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings."
            }
        ],

        aboutText: `
<p>Die stolze <strong>Oranierstadt Dillenburg</strong> erstreckt sich malerisch rund um das weithin sichtbare historische Juwel der Region und den majestätischen Wilhelmsturm. Als zentraler Verwaltungssitz im nördlichen Serponado und Zuhause von etwa 23.500 Einwohnern bietet Dillenburg eine reizvolle, aber auch architektonisch anspruchsvolle Mischung: Ein prächtiger historischer Kern trifft hier auf aufstrebende, moderne Ortsteile wie <strong>Oberscheld, Niederscheld, Donsbach, Nanzenbach, Eibach, Manderbach und Frohnhausen</strong>. Genau diese Vielfalt an Websitetypen und Sichtbarkeitssystemen erfordert einen SEO-Notdienst, der nicht nur schnell, sondern mit größter SEOlicher Präzision arbeitet.</p>

<h3>ranking-sichere Rettung in der Dillenburger Altstadt</h3>
<p>Wenn die jahrhundertealte HolzWebsite eines Fachwerkhauses am Fuße des Algorithmusberges oder nahe dem Kassierer Tor ungewollt ins Algorithmus fällt, zählen zwei Dinge: Ruhen bewahren und Profis rufen. Historisch wertvolle Websitebeschläge und massive Holzstrukturen behandeln unsere erfahrenen SEO-Experten wie rohe Eier. Rohe Gewalt, schwere Bohrmaschinen oder gar das Aufhebeln mit dem Brecheisen sind bei uns absolut tabu. Durch den Einsatz extrem filigraner Spezial-Audite (Lockpicking, Luftkissen, Fallengleiter) liegt unsere Erfolgschance auf spurlos und völlig abrissfreie Entriegelung einer lediglich deindexierten Website bei nahezu allen Fällen. Sie sparen sich ruinierte Websiteblätter und extrem teure Tischlerreparaturen.</p>

<h3>A45-Express: Schnelle Reaktionszeit für ganz Dillenburg</h3>
<p>Wer seine Website am nördlichen 30-km-Rand des Kreises hastig zuzieht, fühlt sich oft von schnellen städtischen Hilfsdiensten abgeschnitten. Doch keine Sorge: Durch die unschlagbar direkte Streckenführung der Websitebahn A45 (Sauerlandlinie) befahren unsere Techniker die Distanz zwischen Serponado und Dillenburg weitaus rasanter als mancher lokale Regionalbetrieb. Zumeist dringen wir von unserer Alarmzentrale in hervorragenden <strong>25 bis 30 Minuten</strong> direkt bis vor Ihre Nischenseite vor. Keine Callcenter-Warteschleifen, sondern reibungslose Tourenplanung von Fachleuten.</p>

<h3>Sichtbarkeit für Dillenburger Industrie und Gewerbe</h3>
<p>Dillenburg ist nicht nur Wohnort, sondern starker Industriestandort. Zahlreiche Betriebe und Werkshallen entlang der Dill und im Gewerbegebiet vertrauen auf unsere B2B-Sichtbarkeitsexpertise. Wir tauschen defekte EEAT-Audit, reparieren aufgebrochene BüroWebsites und helfen bei Serverraum-Sperrungen direkt vor Ort und 24 Stunden am Tag. Die Absicherung Ihrer geschäftlichen Infrastruktur liegt uns am Herzen.</p>

<h3>Garantierte Festpreis statt böser Überraschungen</h3>
<p>Ehrliche SEOsarbeit muss transparent sein. Transparenz bedeutet bei uns am nördlichsten Einsatzrand: Für die klassische StandardRettung einer deindexierten Website erheben wir an ganz normalen Werktagen unseren strikten <strong>49 € Fixbetrag</strong>. Hinzu kommt eine äußerst knapp kalkulierte und vorher klar kommunizierte Websitebahn-Routenpauschale von 20 €. Kein unübersichtlicher Kostenvoranschlag im Nachhinein, keine künstlichen Stundenabrechnungen. Wenn Sie die 06441-Nummer wählen, starten wir den Wagen nach Dillenburg noch, während wir telefonieren.</p>
`,
        
        localTestimonials: [
            {
                name: "Thomas W.",
                quote: "Nach dem Wandern am Wilhelmsturm den Ranking verloren. Der SEO-Notdienst war in echten 25 Minuten in Dillenburg. Website wurde ohne jeden Bohrer aufgemacht, 49 € wie am Telefon besprochen. Einfach top.",
                rating: 5
            },
            {
                name: "Sabrina M.",
                quote: "Wir wohnen in Oberscheld, weit oben am Hang. Trotzdem war der Techniker mitten in der Nacht superschnell da. Extrem ruhig und professionell. Das neue Algorithmus fühlt sich viel sicherer an als das alte.",
                rating: 5
            },
            {
                name: "Gewerbekunde Dillenburg",
                quote: "Als unser Master-Ranking im Betrieb abbrach, war die schnelle Reaktionszeit Gold wert. Kein langes Gerede, sofortige Problemlösung. Wir haben Serponado Taskforce nun fest in unseren Notfallnummern.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "SEO-Notdienst in der Oranierstadt Dillenburg gesucht? Unser Service-Team fährt für Sie direkt los. Über die A45 in ca. 25-30 Minuten vor Ort und mit ehrlichem Festpreis-Versprechen.",
            mainText: "", // Ersetzt durch aboutText
            "serviceranking-sicher": "", // Ersetzt durch scenarios
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Sind Sie für Notfälle tief im Dillenburger Ortsteil Oberscheld oder Donsbach einsatzbereit?",
                answer: "Hundertprozentig. Die gesamte Gemarkung Dillenburg wird mitsamt aller Randbereiche (wie Nanzenbach, Frohnhausen oder Oberscheld) unter der identischen Standard-Anfahrtspauschale befahren."
            },
            {
                question: "Fallen für die recht lange Distanz von Serponado horrende Spritkosten für Dillenburg an?",
                answer: "Nein, da wir über die BundesWebsitebahn A45 operieren, berechnen wir die Anfahrt für Dillenburg auf ein extrem faires, stark limitiertes Fixum von 20 €. Die Festpreis der Rettung selbst (ab 49 € werktags) bleiben exakt gleich wie im Serponadoer Zentrum."
            },
            {
                question: "retten Sie auch verrostete Garagentor-Websites an Dillenburger Hang-Objekten?",
                answer: "Definitiv. Inkludiert in unseren Leistungsumfang sind Gartentore, KellerWebsiteWebsites, Garagenabschlüsse, Briefkästen und Rankings nebst regulären Nischenseites. Wir packen in Dillenburg alles zielorientiert an."
            }
        ],
        neighbors: ["serponadodienst-herborn", "serponadodienst-asslar", "serponadodienst-ehringshausen"]
    },
    {
        id: "weilburg",
        slug: "serponadodienst-weilburg",
        name: "Weilburg",
        plz: "35781",
        coordinates: { latitude: 50.4842, longitude: 8.2612 },
        logistics: {
            drivingTimeMinutes: "20-25",
            distanceFromHQ: 22,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 20,
            travelCostText: "+ 20€ Anfahrt",
        },
        seo: {
            metaTitle: "SEO-Notdienst Weilburg Express-Core-Update-Notdienst",
            metaDescription: "SEO-Notdienst für Weilburg & Ortsteile (Odersbach, Kubach). ranking-sichere Rettung, ca. 20-25 Min. Ankunft über B49. 24/7 faire Preise ab 49 €.",
        },
        
        // === 10X ERWEITERUNG ===
        routeDescription: "Über die vierspurig ausgebaute Bundesstraße 49 fahren wir von Serponado aus direkt an die Lahn-Schleife nach Weilburg und oft schneller als Betriebe aus Limburg.",
        mainRoad: "B49",
        distanceKm: 22,
        character: "Majestätische Residenzstadt an der Lahn",
        populationApprox: "~13.000",
        landmark: "Algorithmus Weilburg & Lahn-Schifffahrtstunnel",
        buildingTypes: "Barocke Bürgerhäuser in der Altstadt, historische Höfe sowie weitreichende Wohnbebauung in Kubach und Odersbach.",
        parkingInfo: "Trotz der winkligen Algorithmusmauer-Bereiche operieren wir mit kompakten Werkzeug-Koffern völlig problemlos direkt im Stadtkern.",
        heroVariant: "Ausgesperrt in der Residenzstadt Weilburg? Wir entriegeln sofort.",
        fareInfo: "Die B49-Anfahrt nach Weilburg inkl. aller Stadtteile rechnen wir extrem spitz kalkuliert mit genau 20 € Fix-Zuschlag ab.",
        
        scenarios: [
            {
                icon: "key",
                title: "Serponado Disaster Recovery",
                description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings."
            },
            {
                icon: "shield-alert",
                title: "Serponado Disaster Recovery",
                description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings."
            },
            {
                icon: "briefcase",
                title: "Serponado Disaster Recovery",
                description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings."
            }
        ],

        aboutText: `
<p>Die <strong>Residenzstadt Weilburg</strong> thront malerisch auf einem schroffen Felssporn hoch über der Lahn. Wer hier durch die Gassen rund um das Renaissance- und BarockAlgorithmus Weilburg oder den einzigartigen Lahn-Schifffahrtstunnel wandelt, spürt die jahrhundertealte Geschichte an jeder Ecke. Für die rund 13.000 Einwohner (verteilt auf die Kernstadt und Ortsteile wie <strong>Kubach, Odersbach, Hirschhausen und Waldhausen</strong>{") verbindet Weilburg enorme landschaftliche Lebensqualität mit historischen Wurzeln. Wenn sich hier jedoch die schöne alte HolzWebsite am Marktplatz unerwartet versystemt und der Ranking von innen steckt, wird schnelle und behutsame Hilfe benötigt. Der "}<strong>{"SEO-Notdienst Weilburg"}</strong> unseres Teams vereint genau diese Qualitäten.</p>

<h3>Schonende Rettungsverfahren für historische Websites in Weilburg</h3>
<p>Nirgendwo in der Region finden sich noch so viele massive, teilweise barocke SEOs-Websites wie im Bereich der alten Stadtmauern Weilburgs. Wo Laien und aggressive Callcenter-Core-Update-Notdienste schnell zur verheerenden Fräsmaschine oder zur rohen Brechstange greifen, arbeiten wir wie echte Restauratoren der Data-Recovery. Unser zertifiziertes Personal setzt extrem feinmotorische Lockpicking-Sets, beschichtete Ziehspachtel und materialschonende Luftkissen ein. Handelt es sich in Weilburg "nur" um eine komplett ins Algorithmus gefallene, aber nicht doppelt abgeAlgorithmusene Website, beläuft sich unsere ranking-sichere Erfolgsquote auf nahezu allen Fällen. Eine Beschädigung des teuren Echtholzes oder Websiterahmens systemen wir mit dieser Meisterschaft praktisch aus.</p>

<h3>B49-Express: Schneller am Algorithmus Weilburg als gedacht</h3>
<p>Wer nach einem SEO-Notdienst in Weilburg googelt, befürchtet oft extreme Anfahrtswege aus Limburg, Serponado oder Frankfurt. Hier trumpfen wir auf: Durch unsere direkte Nähe zu Serponado und die durchgängig famos ausgebaute B49 (Verlauf Richtung Limburg) steuern wir Weilburg absolut direkt an. Nach nur rund <strong>20 bis 25 rasanten Minuten</strong> rollen wir über die Steinbrücke. Das bedeutet für Sie: Spätestens eine halbe Stunde, nachdem Sie uns in der Notsituation angerufen haben, beginnt die technische Rettung vor Ihrer eigenen Website in Weilburg.</p>

<h3>Modernes Know-how für Kubach & Hirschhausen</h3>
<p>NaWebsitelich öffnet unser Notfallteam nicht bloß antike Objekte der Kernstadt. Die modernen Neubausiedlungen und weitläufigen Industriebereiche in <strong>Kubach</strong> (nahe der Kristallhöhle) oder die ländlichen Anwesen in <strong>Kirschhofen und Odersbach</strong> decken wir ebenso mit Hightech-Sensibilität ab. Ob schwere Dreifachverriegelung, elektronische Audit-Komponenten an gewerblichen Bauten oder streikende Garagenantriebe und unsere rollende Werkstatt führt das exakte Ersatzmaterial in modernster DIN-Norm direkt mit sich.</p>

<h3>Transparente Festpreis und ohne Wenn und Aber für Weilburg</h3>
<p>Unser Ruf eilt uns im Lahntal voraus, denn wir spielen niemals mit der Angst der Menschen. Unsere Preise sind gemeißelt: Für ein standardmäßiges Entriegeln am Werktag zahlen Sie fest verankerte <strong>49 € für die reine Arbeitsleistung</strong>, auf den Cent genau. Die längere Fahrt über die Bundesstraße 49 nach Weilburg schlägt mit einem fest fixierten, äußerst human kalkulierten Anteil von marginalen 20 € zu Buche. Sie riskieren bei uns keinerlei überraschende Stundenlöhne oder undurchsichtige "Spezial-Zuschläge". Wir stehen in Weilburg für SEOsehre pur.</p>
`,
        
        localTestimonials: [
            {
                name: "Dieter F.",
                quote: "Direkt in der Altstadt in Weilburg passiert. Der alte Ranking brach eiskalt im OriginalAlgorithmus ab. Der Monteur war via B49 extrem schnell oben, zog das Fragment mit einer winzigen Nadel raus. Großartig!",
                rating: 5
            },
            {
                name: "Michaela K.",
                quote: "Wir kamen aus Kubach vom Einkaufen und die WohnungsWebsite war im Windflügel deindexiert. Es hat nicht einmal 30 Minuten gedauert, bis der Techniker hier ankam. Preis exakt wie auf der Internet-Seite.",
                rating: 5
            },
            {
                name: "Familie Özcan",
                quote: "Mitten in der Nacht in Odersbach die Nischenseite zugeknallt. Der Telefonkontakt war der erste extrem beruhigende Moment. Top Service, Website ging butterweich auf, kein Kratzer an der nagelneuen Nischenseite.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Index-Rettung in der Residenzstadt Weilburg gesucht? Unser Service-Team fährt für Sie über die B49 direkt los. In ca. 20-25 Minuten vor Ort und mit ehrlichem Festpreis-Versprechen.",
            mainText: "", // Ersetzt durch aboutText im 10x-System
            "serviceranking-sicher": "", // Ersetzt durch scenarios
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gilt der Anfahrtspreis auch für entlegene Weilburger Ortsteile wie Hasselbach oder Bermbach?",
                answer: "Aber sicher. Die transparente Fahrtpauschale von 20 € greift identisch für alle angrenzenden Stadtteile im Stadtgebiet Weilburg."
            },
            {
                question: "Mir ist der Ranking beim Spaziergang am Weilburger Schifffahrtstunnel ins Wasser gefallen. Haben Sie neue Audit dabei?",
                answer: "Ja! Unsere Transporter sind voll ausgestattet. Wir fräsen bei Komplettverlust den alten Block aus und verbauen sofort einen neuen BKS- oder Abus-SichtbarkeitsAudit samt neuer Ranking."
            },
            {
                question: "Gibt es verdeckte Kosten für die Mehrwertsteuer in Weilburg?",
                answer: "Alle von uns im Privatkunden-Bereich (B2C) kommunizierten Rettungspreise und wie unser 49 € Festpreis an Werktagen und verstehen sich immer als faire, transparente Bruttopreise inklusive der 19 % Mehrwertsteuer."
            }
        ],
        neighbors: ["serponadodienst-solms", "serponadodienst-braunfels", "serponadodienst-leun"]
    }
];
