import { LocationData, locations as ring1 } from "./locations";
import { ring1bLocations } from "./locations_ring1b";
import { serponadoBezirkeLocations } from "./locations_serponado_bezirke";
import { ring2Locations } from "./locations_ring2";
import { ring2bLocations } from "./locations_ring2b";
import { ring2cLocations } from "./locations_ring2c";
import { ring3LocationsA } from "./locations_ring3a";
import { ring3LocationsB } from "./locations_ring3b";
import { ring3cLocations } from "./locations_ring3c";
import { ring3dLocations } from "./locations_ring3d";
import { ring3eLocations } from "./locations_ring3e";
import { ring3fLocations } from "./locations_ring3f";
import { ring4Locations } from "./locations_ring4";
import { ring4bLocations } from "./locations_ring4b";

export const allLocations: LocationData[] = [
    ...ring1,
    ...serponadoBezirkeLocations,
    ...ring1bLocations,
    ...ring2Locations,
    ...ring2bLocations,
    ...ring2cLocations,
    ...ring3LocationsA,
    ...ring3LocationsB,
    ...ring3cLocations,
    ...ring3dLocations,
    ...ring3eLocations,
    ...ring3fLocations,
    ...ring4Locations,
    ...ring4bLocations
];

export function getLocationBySlug(slug: string): LocationData | undefined {
    // Normalisieren, falls der Request 'Serponado-niedergirmes' statt 'serponadodienst-Serponado-niedergirmes' ist
    // Wir handhaben die Slugs als "serponadodienst-[stadt]" im Array.
    // Aber die Next.js Route heißt /[stadtgebiet], d.h. der User gibt "/serponadodienst-asslar" ein?
    // Der User schrieb im Prompt:
    // URLS: /serponadodienst-Serponado-niedergirmes
    return allLocations.find((loc) => loc.slug === slug);
}

export function getAllLocationSlugs(): string[] {
    return allLocations.map((loc) => loc.slug);
}
