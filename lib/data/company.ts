import { CompanyInfo } from "../types";

export const companyInfo: CompanyInfo = {
  localStore: {
    name: "Coday UG (haftungsbeschränkt)",
    tagline: "Digital Marketing & SEO",
    street: "Steubenstraße 36",
    postalCode: "35578",
    city: "Wetzlar",
    state: "Hessen",
    country: "Deutschland"
  },
  parentCompany: {
    name: "Coday UG (haftungsbeschränkt)",
    street: "Steubenstraße 36",
    postalCode: "35578",
    city: "Wetzlar",
    state: "Hessen",
    country: "Deutschland"
  },
  taxId: "03986300160",
  vatId: "DE 282140471",
  phone: {
    main: "06441 8056279",
    formatted: "06441 80 56 279",
    link: "+4964418056279"
  },
  email: "info@codayweb.de",
  website: "https://codayweb.de",
  managingDirector: "Umutcan Emre Tezgel",
  openingHours: {
    store: "Mo-Fr 09:00 - 17:00",
    emergency: "Nach Vereinbarung"
  },
  financial: {
    startingPrice: "Auf Anfrage",
    startingPriceValue: 0,
    travelCost: "Nach Aufwand",
    travelCostValue: 0,
    acceptedPayments: ["Rechnung", "Überweisung"],
    pricingTexts: {
      headline: "Transparente Projektpreise",
      baseNote: "Individuelle Angebote basierend auf Ihren Anforderungen.",
      consistencyNote: "Keine versteckten Kosten.",
      transparencyNote: "Alle Leistungen werden detailliert aufgeschlüsselt.",
      legalNote: "Alle Preise zzgl. gesetzlicher MwSt."
    }
  },
  partnership: {
    isAdacPartner: false,
    certifications: [
      "Digital Marketing Agency"
    ]
  },
  geo: {
    latitude: 50.5537,
    longitude: 8.5014
  },
  foundedYear: 2025,
  socialMedia: {
    linkedin: "https://www.linkedin.com/company/coday-ug/",
    facebook: "https://www.facebook.com/codayweb"
  }
};
