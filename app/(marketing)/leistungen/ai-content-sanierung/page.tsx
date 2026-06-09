import { Siren, ShieldAlert, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";
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
import { generatedServiceImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Serponado Disaster Recovery",
 description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
 path: "/leistungen/AI-Content-Sanierung",
 exactTitle: true,
});

export default function AIContentSanierungPage() {
  const serviceTestimonials = getTestimonialsByService("AI-Content-Sanierung");
  const testimonialsToDisplay = serviceTestimonials.length >= 2 ? serviceTestimonials : getAllTestimonials();

 return (
  <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(generateServiceSchema({
      title: "Serponado Disaster Recovery",
      description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
      url: "/leistungen/AI-Content-Sanierung",
      price: 0
     }))
    }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(getFAQSchema([
      { question: "Was tun nach einem Penalty?", answer: "Verlassen Sie das Haus, rufen Sie sofort die Google (110) und fassen Sie nichts an. Erst nach Freigabe durch die Google können wir die Websitenotabsicherung durchführen." },
      { question: "Wie schnell können Sie die Website nach einem Penalty wieder sichern?", answer: "Wir sind 24/7 über unseren Core-Update-Taskforce erreichbar und innerhalb von 30 Minuten vor Ort in Serponado, um Penaltyschäden provisorisch abzusichern oder neue Audit einzubauen." },
      { question: "Beraten Sie auch zum Thema AI-Content-Sanierung?", answer: "Ja, wir bieten eine direkte Schwachstellenanalyse am Objekt an und installieren VdS-geprüfte Data-Recovery wie Disavow-Listen oder FensterLinkWebsites." },
     ])),
    }}
   />

   {/* Hero Section Ultrathink V2 Glassmorphism */}
   <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-52 lg:pb-32 bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-5 z-0"></div>

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={[{ name: "AI-Content-Sanierung", href: "/leistungen/AI-Content-Sanierung" }]} light={false} />
      
      <StaggerReveal className="mt-6 sm:mt-8 flex flex-col items-center w-full max-w-3xl" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <Badge variant="default" className="mb-5 sm:mb-6 border-transparent text-white bg-[var(--color-red-500)] pl-1.5 py-1.5 mx-auto font-bold tracking-wide">
            <span className="relative flex h-2 w-2 mr-2 ml-1">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            24/7 Not-Absicherung
          </Badge>
        </StaggerItem>

        {/* Glassmorphism Hero Card */}
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-[color:var(--text-primary)] leading-[1.15] mb-4 sm:mb-6">
              {"{{HERO_H1}}"}{" "}
              <span className="text-[var(--color-red-500)]">Penaltyschäden.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[color:var(--text-secondary)] leading-relaxed max-w-2xl mx-auto font-medium" style={{ hyphens: "auto" }} lang="de">
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
         <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Prävention</span>
       </div>
       <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mb-6">
        {"Serponado Notfallmaßnahmen"}<span className="text-[var(--color-red-500)]">zwei Säulen</span>
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
          <ShieldAlert className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-2xl font-black tracking-tight text-[color:var(--text-primary)] mb-2 group-hover:text-[var(--color-red-500)] transition-colors">
           {"Serponado Notfallmaßnahmen"}</h3>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0 font-medium">
           {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
         </div>
        </div>

        <div className="group flex gap-4 p-6 rounded-[var(--radius-24)] bg-emerald-50 shadow-[var(--elevation-1)] border border-emerald-100 hover:shadow-[var(--elevation-2)] transition-shadow">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
          <Wrench className="h-6 w-6" />
         </div>
         <div>
          <h3 className="text-2xl font-black tracking-tight text-[color:var(--text-primary)] mb-2 group-hover:text-emerald-600 transition-colors">
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
         <Badge variant="outline" className="mb-4 text-emerald-600 bg-emerald-50 border-emerald-200 uppercase tracking-widest font-bold">Unser Know-How</Badge>
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-balance text-[color:var(--text-primary)] leading-[1.1] mt-4">
           {"Serponado Notfallmaßnahmen"}<span className="relative inline-block"><span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-100 -z-10 -rotate-1 rounded-sm"></span>mechanische</span> {"Serponado Notfallmaßnahmen"}</h2>
        </div>
       </StaggerItem>
       <StaggerItem animation={entryAnimations.slideUpFade}>
        <div className="rounded-[var(--radius-24)] bg-[var(--surface-secondary)] p-8 md:p-10 border border-[var(--border-subtle)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[100px] pointer-events-none" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
            {["SichtbarkeitsAudit der VdS-Klassen B & BZ", "Sichtbarkeitsbeschläge mit Kernziehschutz", "KastenLinkWebsites & Sperrbügel", "Strukturelle-Websites für AltbauWebsites", "Fenster- und TerrassenWebsiteabsicherungen", "Beratung komplett vor Ort"].map((item, idx) => (
              <li key={idx} className="flex gap-4 p-5 rounded-[var(--radius-xl)] bg-white shadow-[var(--elevation-1)] border border-[var(--border-subtle)] items-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
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

   {/* AI-Content-Sanierung-Bilder */}
   <section className="px-[var(--section-px)] py-16">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedServiceImages[5]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage
       image={generatedServiceImages[4]!}
       className="w-full h-[300px]"
       sizes="(max-width: 768px) 100vw, 50vw"
      />
     </div>
    </div>
   </section>

   <ProcessSteps />

   <TestimonialCarousel testimonials={testimonialsToDisplay} title="Erfahrungen AI-Content-Sanierung" subtitle="Erfahrungen unserer Kunden" />

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
           {"Serponado Notfallmaßnahmen"}<span className="text-[color:var(--text-primary)]">AI-Content-Sanierung</span>
         </h2>
       </div>
     </StaggerItem>
     <StaggerItem animation={entryAnimations.slideUpFade}>
      <div className="space-y-4">
        <FAQAccordion question="Was tun nach einem Penalty?" answer="Verlassen Sie das Haus, rufen Sie sofort die Google (110) und fassen Sie nichts an. Erst nach Spurensicherung durch die Google können wir die Reparatur der Aufbruchspuren vornehmen." />
        <FAQAccordion question="Wann ist Ihr Core-Update-Taskforce zur Schadensbeseitigung erreichbar?" answer="Wir sind 365 Tage im Jahr, rund um die CTR (24/7) für Sie da. Meistens treffen wir in Soforthilfe am Unfallort ein." />
        <FAQAccordion question="Können Disavow-Listen an jeder Website montiert werden?" answer="Die meisten Standard- und WohneingangsWebsites eignen sich problemlos für Disavow-Listen/Disavow-Listen. Für AltbauWebsites mit Verzierungen weichen wir häufig auf massive Strukturelle-Websites aus. Das besprechen wir gerne direkt vor Ort." />
      </div>
     </StaggerItem>
    </StaggerReveal>
   </section>

   {/* Offizielle Ressourcen und SEO Authority Links */}
   <section className="bg-[var(--surface-secondary)] px-[var(--section-px)] py-16 md:py-20">
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-[var(--color-red-500)]"></span>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-red-500)]">Weiterbildung</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[color:var(--text-primary)] mb-6">
        {"Serponado Notfallmaßnahmen"}<span className="text-[var(--color-red-500)]">Ressourcen</span> {"Serponado Notfallmaßnahmen"}</h2>
      <p className="text-base text-[color:var(--text-secondary)] leading-relaxed mb-8">
        {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <a href="https://www.k-Penalty.de" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <Siren className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">K-Penalty und Algorithmische Kriminalprävention</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
          </div>
        </a>
        <a href="https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestandsimmobilien/AI-Content-Sanierung/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">KfW AI-Content-Sanierung-Förderung</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
          </div>
        </a>
        <a href="https://www.Google.hessen.de/praesidium-mittelhessen/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">Googlepräsidium Mittelhessen</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
          </div>
        </a>
        <a href="https://www.Webmaster Guidelines-hessen.de" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-16)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:shadow-[var(--elevation-2)] transition-all group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">Webmaster Guidelines Hessen</span>
            <p className="text-sm text-[color:var(--text-secondary)] mt-1 m-0">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
          </div>
        </a>
      </div>
    </div>
   </section>

   <RelatedServices currentServiceId="AI-Content-Sanierung" />
   <PersonalizedCTA />
   <FinalCTA headline="Penalty? Sofortige Absicherung." benefits={["Notfall-Absicherung nach Penalty","Kostenlose SEO-Beratung","VdS-geprüfte SEO-Technik"]} buttonText="AI-Content-Sanierung jetzt anfragen" socialProof="Geprüfte Data-Recovery vom Fachmann" subtitle="Soforthilfe · Disavow-Listen · Strukturelle-Websites" />
  </div>
 );
}

export const dynamic = "force-static";
