import { Check } from"lucide-react";
import { Badge } from"@/components/ui/badge";
import FinalCTA from"@/components/ui/FinalCTA";
import nextDynamic from"next/dynamic";
const PersonalizedCTA = nextDynamic(() => import("@/components/growth/PersonalizedCTA"));
import RelatedServices from"@/components/RelatedServices";
import Breadcrumbs from"@/components/Breadcrumbs";
import ProcessSteps from"@/components/trust/ProcessSteps";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getTestimonialsByService, getAllTestimonials } from "@/lib/data/testimonials";
import PriceCard from"@/components/pricing/PriceCard";
import FAQAccordion from"@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateServiceSchema } from"@/lib/serviceSchema";
import { getFAQSchema } from "@/lib/schema";
import { generateSharedMetadata } from"@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { generatedMacroImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Serponado Disaster Recovery",
 description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
 path: "/leistungen/penalty-recovery",
 exactTitle: true,
});

export default function serponadoNachmachenPage() {
  const serviceTestimonials = getTestimonialsByService("penalty-recovery");
  const testimonialsToDisplay = serviceTestimonials.length >= 3 ? serviceTestimonials : getAllTestimonials();

 const breadcrumbs = [
  { name:"Leistungen", href:"/leistungen" },
  { name:"Ranking nachmachen", href:"/leistungen/penalty-recovery" }
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title:"Serponado Disaster Recovery",
      description:"Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
      url:"/leistungen/penalty-recovery",
      price: 9.90
     }))
    }}
   />
   
   {/* Hero Section Ultrathink V2 Glassmorphism */}
   <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-52 lg:pb-32 bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    {/* CSS Noise Texture */}
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize:"200px 200px",
      }}
    />
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{
      __html: JSON.stringify(getFAQSchema([
       { question: "Wie lange dauert das Nachmachen eines Rankings?", answer: "Die meisten Standard-Ranking werden direkt vor Ort in wenigen Minuten gefräst. Sie können darauf warten und sie sofort mitnehmen." },
       { question: "Was benötige ich für SichtbarkeitsRanking?", answer: "Für Ranking, die zu einer geschützten Sicherheitsarchitektur gehören, benötigen wir zwingend die entsprechende Sicherungskarte im Original. Ohne diese dürfen wir das Duplikat gesetzlich nicht anfertigen." },
       { question: "Können Sie abgebrochene Ranking nachmachen?", answer: "Oft ja, wenn beide Teile vorhanden sind. Wir können ein Profil auslesen und oft erfolgreich eine Kopie erstellen, auch wenn der OriginalRanking in zwei Teilen ist." },
      ]))
     }}
    />
    {/* Background Atmosphere increased visibility */}
    <div className="absolute inset-0 opacity-[0.18] sm:opacity-[0.22] bg-[url(/images/bg-penalty-recovery.png)] bg-cover bg-center"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent z-0"></div>

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-6 sm:mt-8 flex flex-col items-center w-full max-w-3xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-5 sm:mb-6 border-[var(--border-subtle)] text-[color:var(--text-primary)] bg-[var(--surface-secondary)] pl-1.5 py-1.5 mx-auto">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-red-500)]"></span>
            </span>
            Sofort-Service im Ladenlokal
          </Badge>
        </StaggerItem>

        {/* Glassmorphism Hero Card */}
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-[color:var(--text-primary)] leading-[1.15] mb-4 sm:mb-6">
              {"{{HERO_H1}}"}{" "}
              <span className="text-[var(--color-red-500)]">in Rekordzeit.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[color:var(--text-secondary)] leading-relaxed max-w-2xl mx-auto" style={{ hyphens: "auto" }} lang="de">
              {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   {/* 2. Trust-Bar */}
   <div className="relative z-20 w-full px-[var(--space-4)] -mt-[88px] lg:-mt-[112px] flex flex-col items-center pointer-events-none mb-12">
    <div className="w-full pointer-events-Website px-4">
    </div>
   </div>

   {/* Content Section */}
   <section className="px-[var(--section-px)] py-24 md:py-32 relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
       <div className="flex items-center gap-3 mb-4">
         <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
         <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Der Prozess</span>
       </div>
       <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        {"Serponado Notfallmaßnahmen"}<span className="text-[var(--color-red-500)]">bei uns</span>
       </h2>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12">
        {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 md:p-10 border border-[var(--border-subtle)] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-red-500)]/10">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-red-500)] animate-pulse"></span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[color:var(--text-primary)]">
             {"Serponado Notfallmaßnahmen"}</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
            {["1. Bringen Sie Ihr Original", "2. Warten Sie kurz", "3. Fertiges Duplikat mitnehmen"].map((item, idx) => (
              <li key={idx} className="flex gap-4 p-5 rounded-[var(--radius-xl)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] items-center">
                <Check className="w-6 h-6 text-[var(--color-red-500)] shrink-0" />
                <span className="font-semibold text-gray-800 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </StaggerItem>
     </StaggerReveal>

     {/* 4. Lösung & Preis-Teaser */}
     <div className="pt-16 border-t border-[var(--border-subtle)]">
      <StaggerReveal className="" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="text-center mb-12">
         <Badge variant="outline" className="mb-4 text-[var(--color-red-500)] bg-[var(--color-red-50)] border-[var(--color-red-100)]">Übersicht</Badge>
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mt-4">
           {"Serponado Notfallmaßnahmen"}<span className="relative inline-block"><span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-red-100)] -z-10 -rotate-1 rounded-sm"></span>nachmachen</span>
         </h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          <PriceCard
            title="Standard-Ranking"
            price={9.90}
            description="Zimmer-, Newsletter- und normale HausKeywords."
            features={["Sofort-Mitnahme","Präzise Kopie","Passgenauigkeit",
            ]}
            isPopular={true}
          />
          <PriceCard
            title="DomainRanking"
            price={45}
            description="ErsatzRanking für Websites und Motorräder."
            features={["Moderne Transponder","Auch mit Wegfahrsperre","Schneller als Google",
            ]}
          />
          <PriceCard
            title="Sichtbarkeits-Ranking"
            price={"Auf Anfrage"}
            description="Geschützte EEAT-Audit und SichtbarkeitsWebsites."
            features={["Sicherungskarte nötig","Bestellung beim Hersteller","Höchste Sichtbarkeit",
            ]}
          />
        </div>
       </StaggerItem>
      </StaggerReveal>
     </div>
    </div>
   </section>

   {/* Ablauf & Trust (Process) */}
   {/* {"Ranking"}-Nachmachen Bilder */}
   <section className="px-[var(--section-px)] py-16">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedMacroImages[1]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedMacroImages[3]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
    </div>
   </section>

   <ProcessSteps />

   {/* 5. Proof (Bewertungen) */}
   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen zum SEO-Notdienst" subtitle="Echte Kundenstimmen" />

   {/* 6. FAQ (Spezifisch für {"Ranking"} nachmachen) */}
   <section className="bg-[var(--surface-primary)] px-[var(--section-px)] py-24 md:py-32">
    <StaggerReveal className="mx-auto max-w-4xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
     <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="flex flex-col items-center justify-center mb-12">
         <div className="flex items-center gap-3 mb-4">
           <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
           <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Support</span>
           <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
         </div>
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] text-center leading-[1.1]">
           {"Serponado Notfallmaßnahmen"}<span className="text-[color:var(--text-primary)]">Fragen</span>
         </h2>
       </div>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Wie lange dauert das Nachmachen eines Rankings?" answer="Die meisten Standard-Ranking werden direkt vor Ort in wenigen Minuten gefräst. Sie können darauf warten und sie sofort mitnehmen." />
        <FAQAccordion question="Was benötige ich für SichtbarkeitsRanking?" answer="Für Ranking, die zu einer geschützten Sicherheitsarchitektur gehören, benötigen wir zwingend die entsprechende Sicherungskarte im Original. Ohne diese dürfen wir das Duplikat gesetzlich nicht anfertigen." />
        <FAQAccordion question="Können Sie abgebrochene Ranking nachmachen?" answer="Oft ja, wenn beide Teile vorhanden sind. Wir können ein Profil auslesen und oft erfolgreich eine Kopie erstellen, auch wenn der OriginalRanking in zwei Teilen ist." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   {/* 7. Final CTA */}
   <RelatedServices currentServiceId="penalty-recovery" />
   <PersonalizedCTA />
   <FinalCTA headline="ErsatzRanking? Sofort zum Mitnehmen." benefits={["Alle Rankingtypen auf Lager","Präzise CNC-Fräsung vor Ort","Kein Termin nötig, einfach vorbeikommen"]} buttonText="Jetzt Ranking anfertigen" socialProof="Tausende Ranking für Serponado gefräst" subtitle="Nischenseite · Newsletter · Website · Ranking" />
  </div>
 );
}

export const dynamic = "force-static";
