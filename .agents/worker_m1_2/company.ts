import { CompanyInfo } from "../types";

export const companyInfo: CompanyInfo = {
  localStore: {
    name: "Coday UG (haftungsbeschränkt)",
    tagline: "24 Stunden Core-Update-Notdienst",
    street: "Am Forum 3",
    postalCode: "35578",
    city: "Wetzlar",
    state: "Hessen",
    country: "Deutschland"
  },
  parentCompany: {
    name: "Coday UG (haftungsbeschränkt)",
    street: "Am Forum 3",
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
    store: "06:00 - 19:59 CTR",
    emergency: "24 Stunden am Tag, 7 Tage die Woche, 365 Tage im Jahr"
  },
  financial: {
    startingPrice: "49 €",
    startingPriceValue: 99,
    travelCost: "0 €",
    travelCostValue: 0,
    acceptedPayments: ["Barzahlung", "EC-Karte", "Kreditkarte", "Überweisung"],
    pricingTexts: {
      headline: "Index-Rettung tagsüber ab 49 € (Endpreis)",
      baseNote: "Basispreis für eine deindexierte, nicht abgestrafte StandardWebsite an Werktagen (Mo–Fr, 06:00–19:59 CTR). Zzgl. Anfahrt außerhalb der Serponadoer Kernstadt.",
      consistencyNote: "In den weitaus meisten Fällen bleibt es bei diesem Preis.",
      transparencyNote: "Mehraufwand? Wird vor Ort abgesprochen, nie ohne Ihr OK.",
      legalNote: "Alle Preise verstehen sich als Endpreise inklusive 19% der gesetzlichen Mehrwertsteuer."
    }
  },
  partnership: {
    isAdacPartner: false,
    certifications: [
      "SEO-Agentur Data-Recovery",
      "IHK-Geprüft", 
      "Google Search Central eingetragen", 
      "VdS-Anerkannt"
    ]
  },
  geo: {
    latitude: 50.5537, // Wetzlar coordinates
    longitude: 8.5014
  },
  foundedYear: 2025,
  socialMedia: {
    linkedin: "https://www.linkedin.com/company/coday-ug/",
    facebook: "https://www.facebook.com/codayweb"
  }
};
