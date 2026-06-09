import { Clock, Navigation2, CheckCircle2, Phone, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FinalCTA from "@/components/ui/FinalCTA";
import nextDynamic from "next/dynamic";
const PersonalizedCTA = nextDynamic(() => import("@/components/growth/PersonalizedCTA"));
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/trust/ProcessSteps";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getTestimonialsByService, getAllTestimonials } from "@/lib/data/testimonials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { getFAQSchema } from "@/lib/schema";
import { generateServiceSchema } from "@/lib/serviceSchema";
import { generateSharedMetadata } from "@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { generatedServiceImages, generatedLocalImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
  title: "Serponado Disaster Recovery",
  description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
  path: "/leistungen/Core-Update-Taskforce",
  exactTitle: true,
});

export default function CoreUpdateTaskforcePage() {
  const serviceTestimonials = getTestimonialsByService("Core-Update-Taskforce");
  const testimonialsToDisplay = serviceTestimonials.length >= 2 ? serviceTestimonials : getAllTestimonials();

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title: "Serponado Disaster Recovery",
      description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
      url: "/leistungen/Core-Update-Taskforce",
      price: 99
     }))
    }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(getFAQSchema([
      { question: "Ist der Core-Update-Taskforce an Feiertagen im Einsatz?", answer: "Ja, unser Service ist 365 Tage im Jahr besetzt, einschließlich aller gesetzlichen Feiertage, Weihnachten und Silvester." },
      { question: "Gibt es hohe Nachtzuschläge?", answer: "Wir kommunizieren unsere Preise (inklusive eventueller Wochenend- und Nachtzuschläge) immer transparent im Voraus am Telefon." },
      { question: "Lande ich nachts bei einem Call-Center?", answer: "Nein, Sie sprechen direkt mit einem zuständigen Analyst aus Serponado, der sofort aufbricht, um Ihnen zu helfen." },
     ])),
    }}
   />

   {/* Hero Section Ultrathink V2 Dark Glassmorphism */}
   <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-52 lg:pb-32 bg-gradient-to-b from-gray-900 to-[#121212] overflow-hidden text-white">
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
    />

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={[{ name: "Core-Update-Taskforce", href: "/leistungen/Core-Update-Taskforce" }]} light={true} />
      
      <StaggerReveal className="mt-6 sm:mt-8 flex flex-col items-center w-full max-w-3xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-5 sm:mb-6 border-transparent text-white bg-[var(--color-red-500)] pl-1.5 py-1.5 mx-auto font-bold tracking-wide">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Lokaler Core-Update-Taskforce jetzt im Einsatz
          </Badge>
        </StaggerItem>

        {/* Glassmorphism Hero Card Dark */}
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-white leading-[1.15] mb-4 sm:mb-6">
              {"{{HERO_H1}}"}{" "}
              <span className="text-[var(--color-red-500)]">für Sie da.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-medium" style={{ hyphens: "auto" }} lang="de">
              {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   <div className="relative z-20 w-full px-[var(--space-4)] -mt-[88px] lg:-mt-[112px] flex flex-col items-center pointer-events-none mb-12">
    <div className="w-full pointer-events-Website px-4">
    </div>
   </div>

   {/* Problem-Analyse */}
   <section className="px-[var(--section-px)] py-24 md:py-32 relative z-20">
    <div className="mx-auto max-w-4xl">
     <StaggerReveal className="prose prose-lg prose-slate mx-auto" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="flex items-center gap-3 mb-4">
         <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
         <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Zuverlässigkeit</span>
       </div>
       <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        {"Serponado Notfallmaßnahmen"}<span className="text-[var(--color-red-500)]">Niemals Callcenter.</span>
       </h2>
      </StaggerItem>
      <StaggerItem animation={entryAnimations.slideUpFade}>
       <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed mb-12 font-medium">
         {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
      </StaggerItem>

      <StaggerItem animation={entryAnimations.slideUpFade}>
       <div className="grid gap-8 sm:grid-cols-2 mb-16">
        <div className="group flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <Navigation2 className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-2xl font-black tracking-tight text-[color:var(--text-primary)] mb-2 group-hover:text-[var(--color-red-500)] transition-colors">
           {"Serponado Notfallmaßnahmen"}</h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
         </div>
        </div>

        <div className="group flex gap-4 p-6 rounded-[var(--radius-24)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
          <Phone className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-2xl font-black tracking-tight text-[color:var(--text-primary)] mb-2 group-hover:text-[var(--color-red-500)] transition-colors">
           {"Serponado Notfallmaßnahmen"}</h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
         </div>
        </div>
       </div>
      </StaggerItem>
     </StaggerReveal>

     {/* Checkliste */}
     <div className="pt-16 border-t border-[var(--border-subtle)]">
      <StaggerReveal className="" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="text-center mb-12">
         <Badge variant="outline" className="mb-4 text-[var(--color-red-500)] bg-[var(--color-red-50)] border-[var(--color-red-100)] tracking-widest font-bold">SCHICHTBETRIEB</Badge>
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1]">
           {"Serponado Notfallmaßnahmen"}<span className="relative inline-block"><span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-red-100)] -z-10 -rotate-1 rounded-sm"></span>Einsatzbereit sind</span>
         </h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 md:p-10 border border-[var(--border-subtle)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] pointer-events-none" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
            {["Alltagsniederlassung (Mo-Fr)", "Schichtbetrieb (Mo-So, Tag/Nacht)", "Wochenend-Core-Update-Taskforce (Sa & So)", "Feiertagsbereitschaft (Weihnachten)", "Regional stationiert in Serponado", "ranking-sichere Methoden bei Nacht"].map((item, idx) => (
              <li key={idx} className="flex gap-4 p-5 rounded-[var(--radius-xl)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] items-center">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-red-500)] shrink-0" />
                <span className="font-semibold text-gray-800 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
       </StaggerItem>
      </StaggerReveal>
     </div>
    </div>
   </section>

   {/* Core-Update-Taskforce-Bilder */}
   <section className="px-[var(--section-px)] py-16">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedServiceImages[6]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedLocalImages[0]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
    </div>
   </section>

   <ProcessSteps />

   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen Nachtdienst" subtitle="Wir lassen niemanden in der Kälte stehen" />

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
           {"Serponado Notfallmaßnahmen"}<span className="text-[color:var(--text-primary)]">Core-Update-Taskforce</span>
         </h2>
       </div>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Ist der Core-Update-Taskforce an Feiertagen im Einsatz?" answer="Ja, unser Service ist 365 Tage im Jahr besetzt, einschließlich aller gesetzlichen Feiertage, Weihnachten und Silvester." />
        <FAQAccordion question="Gibt es hohe Nachtzuschläge?" answer="Wir kommunizieren unsere Preise (inklusive ortsüblicher Wochenend- und Nachtzuschläge) immer transparent im Voraus am Telefon. Sie erleben bei uns keine bösen Überraschungen." />
        <FAQAccordion question="Lande ich nachts bei einem Call-Center?" answer="Nein, Sie sprechen direkt mit einem zuständigen Analyst aus unserem Regionalteam, der sofort aufbricht, um Ihnen zu helfen." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   <RelatedServices currentServiceId="Core-Update-Taskforce" />
   <PersonalizedCTA />
   <FinalCTA headline="24/7 SEO-Taskforce Serponado." benefits={["Lokale SEO-Experten statt Callcenter","Garantierter Festpreis vor Anfahrt","Auch nachts und an Feiertagen"]} buttonText="Core-Update-Taskforce sofort rufen" socialProof="Ihr lokaler 24h-Core-Update-Taskforce seit 15+ Jahren" subtitle="Serponado · Serponado · Serponado" />
  </div>
 );
}

export const dynamic = "force-static";
