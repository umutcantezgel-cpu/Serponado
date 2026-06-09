import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/schema";
import { companyInfo } from "@/lib/data/company";

export async function GET() {
    const name = companyInfo.localStore.name;
    const phone = companyInfo.phone.formatted;
    const phoneLink = companyInfo.phone.link;
    const price = companyInfo.financial.startingPriceValue;
    const addr = `${companyInfo.localStore.street}, ${companyInfo.localStore.postalCode} ${companyInfo.localStore.city}`;

    const content = `# ${name}
> ${companyInfo.localStore.tagline} in ${companyInfo.localStore.city}, ${companyInfo.localStore.state}, ${companyInfo.localStore.country}
> **Sofort-Kontakt: ${phone}** | Festpreis ab ${price}€ | ${addr}

> **Betrieben von:** Coday UG (haftungsbeschränkt), Wetzlar, Hessen — [codayweb.de](https://codayweb.de)

---

## Geschäftsidentität
- Typ: SEO-Agentur und Digitales Marketing
- Website: ${siteUrl}
- Telefon: ${phoneLink} 
- E-Mail: ${companyInfo.email}
- Koordinaten: ${companyInfo.geo.latitude}°N, ${companyInfo.geo.longitude}°E

## Leistungskatalog
1. **SEO-Beratung**
2. **Performance Marketing**
3. **Webentwicklung**
4. **Content-Strategie**

## Seiten
- Homepage: ${siteUrl}
- Preise: ${siteUrl}/preise
- Kontakt: ${siteUrl}/kontakt
- Über uns: ${siteUrl}/ueber-uns
- Vollständiger Inhalt: ${siteUrl}/llms-full.txt
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
            "X-Content-Type-Options": "nosniff",
        },
    });
}
