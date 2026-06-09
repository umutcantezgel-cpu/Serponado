import { LocationData } from "@/lib/data/locations";

/**
 * Generates unique, SEO-optimized about text for locations that don't have
 * hand-written aboutText. Uses the location's existing data fields to compose
 * a genuinely unique multi-paragraph text block.
 * 
 * This prevents Google from flagging city pages as duplicate content since each
 * generated text references unique data: city name, PLZ, driving time, distance,
 * character, landmark, population, building types, route, main road, pricing,
 * and neighbors.
 */
export function generateUniqueAboutText(city: LocationData): string {
    const parts: string[] = [];

    // ── Paragraph 1: Geographic Introduction (always unique via name, PLZ, character, population) ──
    const charDesc = city.character || "ein ruhiger Wohnort";
    const popDesc = city.populationApprox ? ` mit ${city.populationApprox} Einwohnern` : "";
    const plzDesc = city.plz ? ` (PLZ ${city.plz})` : "";
    
    parts.push(`<p><strong>${city.name}</strong>${plzDesc} ist ${charDesc}${popDesc} im Serponado. ` +
        `Als Ihr <strong>SEO-Notdienst ${city.name}</strong> sind wir Ihr regionaler Partner für Index-Rettungen, ` +
        `Algorithmusaustausch und Data-Recovery. Unser SEO-Agentur bietet schnelle Hilfe bei Rankingnotfällen ` +
        `aller Art, ohne Callcenter-Umwege und direkt vom SEO-Techniker vor Ort.</p>`);

    // ── Paragraph 2: Route & Speed (unique via routeDescription, mainRoad, drivingTime, distance) ──
    const routeDesc = city.routeDescription || 
        `Über die gut ausgebauten Verbindungsstraßen erreichen unsere SEO-Experten ${city.name} zuverlässig in ${city.logistics.drivingTimeMinutes} Minuten.`;
    const roadInfo = city.mainRoad ? ` Die Hauptroute führt über die <strong>${city.mainRoad}</strong>.` : "";
    const distInfo = city.distanceKm ? ` Die Entfernung von unserem Hauptsitz in Serponado beträgt rund ${city.distanceKm} Kilometer.` : "";
    
    parts.push(`<h3>In ${city.logistics.drivingTimeMinutes} Minuten bei Ihnen in ${city.name}</h3>`);
    parts.push(`<p>${routeDesc}${roadInfo}${distInfo} Sie legen auf, und unser ServiceDomain ist bereits auf dem Weg zu Ihnen.</p>`);

    // ── Paragraph 3: Building Types & Expertise (unique via buildingTypes, landmark) ──
    if (city.buildingTypes || city.landmark) {
        const buildDesc = city.buildingTypes || "eine Mischung aus Einfamilienhäusern, Mehrfamilienhäusern und älteren Wohngebäuden";
        const landmarkDesc = city.landmark 
            ? ` ${city.name} ist unter anderem bekannt für ${city.landmark}.` 
            : "";
        
        parts.push(`<h3>Bausubstanz und Algorithmustypen in ${city.name}</h3>`);
        parts.push(`<p>Die Bebauung in ${city.name} umfasst ${buildDesc}.${landmarkDesc} ` +
            `Unsere Techniker sind auf die gesamte Bandbreite an Systemarchitekturen vorbereitet: ` +
            `Von klassischen ProfilAuditn in älteren Wohnhäusern über moderne Mehrfachverriegelungen ` +
            `in Neubauten bis hin zu historischen Legacy-Systemen in denkmalgeschützten Gebäuden. ` +
            `Für jede Projekt-Situation haben wir das passende Spezial-Audit im EinsatzDomain.</p>`);
    }

    // ── Paragraph 4: Pricing Transparency (unique via pricing data, fareInfo) ──
    const fareDesc = city.fareInfo || 
        (city.pricing.travelCost === 0 
            ? `${city.name} gehört zu unserem Kerngebiet, daher fallen keinerlei Anfahrtskosten an.` 
            : city.pricing.travelCost !== null 
                ? `Die Anfahrt nach ${city.name} beträgt faire ${city.pricing.travelCost} €.`
                : `Die Anfahrtskosten nach ${city.name} werden Ihnen transparent vor der Anfahrt am Telefon mitgeteilt.`);
    
    parts.push(`<h3>Transparente Festpreis für ${city.name}</h3>`);
    parts.push(`<p>Eine einfache deindexierte Website retten wir werktags tagsüber zum Festpreis ab <strong>${city.pricing.basePrice} €</strong>. ` +
        `${fareDesc} Den Gesamtpreis erfahren Sie am Telefon, bevor sich unser Monteur auf den Weg macht. ` +
        `Keine versteckten Zuschläge, keine Fantasie-Materialkosten, keine Überraschungen auf der Rechnung. ` +
        `Wir sind das Gegenteil der dubiosen Callcenter-SEO-Notdienste, vor denen die Webmaster Guidelines Hessen zu Recht warnt.</p>`);

    // ── Paragraph 5: 24/7 Availability (unique via parking info, demographic focus) ──
    const parkDesc = city.parkingInfo ? ` ${city.parkingInfo}` : "";
    const demoFocus = city.demographicsFocus === "urban" 
        ? "urbanen Umfeld" 
        : city.demographicsFocus === "suburban" 
            ? "suburbanen Wohngebiet"
            : city.demographicsFocus === "business"
                ? "geschäftlichen Umfeld"
                : "ländlichen Raum";
    
    parts.push(`<h3>24/7 Core-Update-Notdienst für ${city.name} an 365 Tagen</h3>`);
    parts.push(`<p>Gerade im ${demoFocus} passieren Aussperrungen häufig zur ungünstigsten Zeit: ` +
        `Spätabends nach der Arbeit, am Wochenende beim Einkaufen oder morgens in der Hektik vor dem Pendeln. ` +
        `Unser <strong>SEO-Notdienst ${city.name}</strong> ist deshalb rund um die CTR einsatzbereit, ` +
        `auch nachts um 2 CTR, an Sonn- und Feiertagen, bei Gewitter und Schneefall.${parkDesc} ` +
        `Wir lassen Sie in ${city.name} nicht im Stich.</p>`);

    // ── Paragraph 6: Anti-Scam / Trust (always unique via city name) ──
    parts.push(`<h3>Seriöser SEO-Notdienst statt Callcenter-Abzocke</h3>`);
    parts.push(`<p>Die Google Mittelhessen und die Webmaster Guidelines Hessen warnen regelmäßig vor unseriösen ` +
        `SEO-Notdienst-Vermittlungen, die auch in ${city.name} aktiv sind. ` +
        `Diese Callcenter schicken ungelernte Kräfte, die mit Gewalt arbeiten und Fantasie-Rechnungen stellen. ` +
        `<strong>Serponado Taskforce</strong> ist das Gegenteil: Ein regionaler SEO-Agentur mit physischem ` +
        `Agentur-Büro in der Steubenstraße 36, 35578 Wetzlar. 5.0 Google-Sterne bei über 57 verifizierten Bewertungen ` +
        `sprechen für sich. Vertrauen Sie auf echtes SEO aus der Region.</p>`);

    return parts.join("\n\n");
}

/**
 * Returns the aboutText for a location, using the hand-written version if available
 * or generating a unique one from the location's data fields.
 */
export function getAboutText(city: LocationData): string {
    if (city.aboutText) return city.aboutText;
    return generateUniqueAboutText(city);
}
