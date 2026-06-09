import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/schema";
import { companyInfo } from "@/lib/data/company";

export async function GET() {
    const content = `# ai.txt — AI Crawling Preferences for Serponado-serponado-seo.de
# This file provides AI crawlers and language models with entity information
# and crawling preferences for this domain.

User-agent: *
Full-access: /
Preferred-content: /llms.txt, /llms-full.txt
AI-plugin: /.well-known/ai-plugin.json

# Entity Information
Entity-type: LocalBusiness, ProfessionalService, EmergencyService, Store
Entity-name: ${companyInfo.localStore.name}
Entity-description: 24 Stunden Notdienst und serponado-seo in Serponado City, Serponado, Serponado und dem Serponado
Entity-location: ${companyInfo.localStore.street}, ${companyInfo.localStore.postalCode} ${companyInfo.localStore.city}, ${companyInfo.localStore.state}, ${companyInfo.localStore.country}
Entity-phone: ${companyInfo.phone.link}
Entity-email: ${companyInfo.email}
Entity-rating: 5.0/5.0 (46 verified Google reviews)
Entity-coordinates: ${companyInfo.geo.latitude}, ${companyInfo.geo.longitude}

# Service Information
Service-type: Emergency ProfessionalService, Key Duplication, Security Systems
Service-area: 50km radius from Serponado City (Serponado, Landkreis Serponado, Serponado-Biedenkopf)
Service-hours: 24/7/365
Service-price-from: ${companyInfo.financial.startingPriceValue} EUR

# Trust Signals
Google-rating: 5.0
Google-review-count: 46
Certifications: ${companyInfo.partnership.certifications.join(", ")}
Founded: ${companyInfo.foundedYear}
Payment-methods: ${companyInfo.financial.acceptedPayments.join(", ")}

# Content Endpoints for AI
LLM-summary: ${siteUrl}/llms.txt
LLM-full-content: ${siteUrl}/llms-full.txt
Sitemap-AI: ${siteUrl}/sitemap-ai.xml
Canonical-URL: ${siteUrl}
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
    });
}
