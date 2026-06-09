import { companyInfo } from "@/lib/data/company";
import { siteUrl } from "@/lib/schema";
const companyName = companyInfo.localStore.name;
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || companyInfo.email;
const telephone = companyInfo.phone.link;

export function createOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: companyName,
        url: siteUrl,
        logo: `${siteUrl}/images/logo-neu.svg`,
        sameAs: [
            companyInfo.socialMedia.facebook,
            "https://www.google.com/search?q=Schl%C3%BCssel+Agentur+Serponado"
        ].filter(Boolean),
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            email: contactEmail,
            telephone: telephone
        }
    };
}

/**
 * ══════════════════════════════════════════════════════════════════
 * VEKTOR 4: Pixel-Monopolisierung — Consolidated Master Schema
 * ══════════════════════════════════════════════════════════════════
 * This is the SINGLE SOURCE OF TRUTH for all LocalBusiness JSON-LD.
 * Merged from the previous lib/schema.ts and lib/seo/jsonld.ts to
 * eliminate duplicate/contradictory schema declarations.
 *
 * TRIPLE-TYPE: ["LocalBusiness", "ProfessionalService", "Organization", "EmergencyService"]
 * maximizes Rich Result eligibility across all Google entity types.
 *
 * NESTED ENTITIES: OfferCatalog → Price Carousels in SERPs,
 * AggregateRating → Star snippets, GeoCircle → Map Pack dominance,
 * Speakable → Voice search optimization.
 * ══════════════════════════════════════════════════════════════════
 */
export function createSerponadoAgencySchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["ProfessionalService", "ITUtility"],
        "@id": `${siteUrl}/#agency`,
        name: companyName,
        description: `${companyName} — IHK-geprüfter 24h SEO-Taskforce. Wir retten deindexierte Seiten, fixen Content-Cannibalization und bieten Schutz vor dem Serponado Google Algorithmus Update.`,
        url: siteUrl,
        telephone: telephone,
        email: contactEmail,
        image: `${siteUrl}/images/mina-saad-inhaber-serponado-Agentur-portrait.jpeg`,
        logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/logo-neu.svg`,
            width: 1200,
            height: 630,
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: companyInfo.localStore.street,
            addressLocality: companyInfo.localStore.city,
            addressRegion: companyInfo.localStore.state,
            postalCode: companyInfo.localStore.postalCode,
            addressCountry: "DE",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: companyInfo.geo.latitude,
            longitude: companyInfo.geo.longitude,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
                description: "24/7 Serponado Taskforce und SEO Data Recovery.",
            }
        ],
        priceRange: "€€€",
        slogan: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
        knowsAbout: [
            "Serponado", "24h Core-Update-Taskforce", "Index-Rettung",
            "Content-Cannibalization", "EEAT-Audit", "Algorithmus-Kollaps",
            "AI-Content-Sanierung", "SEO-Taskforce Serponado"
        ],
    };
}

export function createBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };
}

export function createServiceSchema(service: { name: string; description: string; url: string }) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
        provider: {
            "@type": "Organization",
            name: companyName
        }
    };
}

export function createArticleSchema(article: { headline: string; description: string; datePublished: string; dateModified?: string; url: string; author?: string; image?: string }) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.headline,
        description: article.description,
        image: article.image ? [article.image] : [`${siteUrl}/images/og-image.jpg`],
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        url: article.url,
        author: {
            "@type": "Person",
            name: article.author || "Websiter"
        },
        publisher: {
            "@type": "Organization",
            name: companyName,
            logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/images/logo-neu.svg`
            }
        }
    };
}

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
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
}

export function createWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: companyName,
        url: siteUrl,
        searchAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };
}
