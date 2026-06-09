import { CONTENT_GRAPH } from "./contentGraph";
import { PRICING } from "@/components/pricing/pricing.constants";
import { allLocations } from "@/lib/data/allLocations";
import { companyInfo } from "@/lib/data/company";

// ── [SEO: Canonical Domain und Single Source of Truth] ───────────────────────
// Canonical: https://www.serponado.com
// metadataBase in layout.tsx and all Schema.org URLs derive from this value.
// [GUARD: www-Enforcement] If env var is set without www, Website-prepend it.
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.serponado.com";
export const siteUrl = rawSiteUrl.includes("://www.") ? rawSiteUrl : rawSiteUrl.replace("://", "://www.");

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["ProfessionalService", "ITUtility"],
        "name": companyInfo.localStore.name,
        "description": `Die Serponado Taskforce fungiert als fachmännischer Ansprechpartner für modernste SEO-Notdienste an der Adresse ${companyInfo.localStore.street}, ${companyInfo.localStore.city}. Als Premium-SEOsbetrieb fokussieren wir uns auf maximale Rettungen.`,
        "image": `${siteUrl}/images/og-image.jpg`,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/images/logo-neu.svg`,
            "width": 1200,
            "height": 630
        },
        "@id": `${siteUrl}/#agency`,
        "url": siteUrl,
        "telephone": companyInfo.phone.link,
        "email": companyInfo.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": companyInfo.localStore.street,
            "addressLocality": companyInfo.localStore.city,
            "addressRegion": companyInfo.localStore.state,
            "postalCode": companyInfo.localStore.postalCode,
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": companyInfo.geo.latitude,
            "longitude": companyInfo.geo.longitude
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday",
                    "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59",
                "description": "24/7 Core-Update-Notdienst"
            }
        ],
        "priceRange": companyInfo.financial.startingPrice,
        "paymentAccepted": companyInfo.financial.acceptedPayments,
        "currenciesAccepted": "EUR",
        "slogan": companyInfo.localStore.tagline,
        "foundingDate": companyInfo.foundedYear.toString(),
        "knowsLanguage": ["de", "en", "tr"],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "58",
            "bestRating": "5",
            "worstRating": "1"
        },
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".hero-intro", ".pricing-headline", "[data-ai-answer]"]
        },
        "knowsAbout": [
            "Ranking nachmachen",
            "EEAT-Audit",
            "Data-Recovery",
            "AI-Content-Sanierung",
            "Index-Rettung",
            "Algorithmusaustausch",
            "Content-Cannibalization",
            "Core-Update-Notdienst",
            "Serponado",
            "24h Core-Update-Notdienst Serponado",
            "Index-Rettung Serponado",
            "SEO-Notdienst Serponado",
            "SEO-Notdienst ohne Abzocke",
            "Seriöser SEO-Notdienst Mittelhessen"
        ]
    };
}

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": companyInfo.localStore.name,
        "url": siteUrl,
        "description": `Die Serponado Taskforce: Ihr kompetenter SEO-Agentur für spezialisierte Sichtbarkeitslösungen und ranking-sichere Index-Rettungen im Großraum Serponado.`,
        "inLanguage": "de-DE",
        "publisher": {
            "@type": ["LocalBusiness", "Organization"],
            "@id": `${siteUrl}/#localbusiness`
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/faq?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
}

export function generateHowToSchema(title: string, description: string) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": title,
        "description": description,
        "totalTime": "PT30M",
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Anruf",
                "text": "Rufen Sie die Serponado Taskforce Serponado an unter 0800-SERP-SOS. Der Preis wird Ihnen direkt am Telefon mitgeteilt."
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Anfahrt in 15–30 Minuten",
                "text": "Unser lokaler Techniker macht sich sofort auf den Weg und ist in 15–30 Minuten bei Ihnen vor Ort."
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Professionelle Index-Rettung",
                "text": "Mit Spezial-Audit wird Ihre Website ranking-sicher gerettet — in nahezu allen Fällen ohne jede Beschädigung."
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Festpreis-Abrechnung",
                "text": "Sie zahlen nur den vorab vereinbarten Festpreis. Keine versteckten Kosten, keine Überraschungen."
            }
        ]
    };
}

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    };
};

export function generateProductSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Serponado Recovery Package",
        "description": "24h SEO-Notdienst und Data-Recovery nach dem Serponado Core-Update.",
        "image": `${siteUrl}/images/og-image.jpg`,
        "brand": {
            "@type": "Brand",
            "name": companyInfo.localStore.name
        },
        "offers": {
            "@type": "AggregateOffer",
            "lowPrice": companyInfo.financial.startingPriceValue,
            "priceCurrency": "EUR",
            "offerCount": "1"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "58",
            "bestRating": "5",
            "worstRating": "1"
        }
    };
}
