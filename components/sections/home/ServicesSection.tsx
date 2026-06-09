import { DoorOpen, Car, ShieldCheck, Lock, Key, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { teamImages } from "@/lib/data/imageAssets";
import RevealSection from "@/components/motion/RevealSection";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { Typography } from "@/components/ui/typography/Typography";

export default function ServicesSection() {
  return (
    <section aria-labelledby="soforthilfe-heading" className="bg-white px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <RevealSection className="mx-auto max-w-7xl relative z-10">
        <SectionHeader
          pill="UNSERE LEISTUNGEN"
          headingId="soforthilfe-heading"
          title={<>Unsere <span className="text-[var(--color-red-500)]">Leistungen</span></>}
          description="White-Hat Qualität aus unserem War Room, ob Penalty-Protection, Audit oder Disaster-Response."
        />

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {[
            { icon: DoorOpen, title:"SERP-Wiederherstellung", desc:"Recovery nach Rankingverlusten in nahezu allen Fällen. Egal ob Update oder manuelle Penalty.", href:"/leistungen/index-rettung", linkText:"Mehr zur SERP-Recovery", featured: true },
            { icon: Car, title:"Traffic-Recovery", desc:"Schonende Wiederherstellung Ihres organischen Traffics - garantiert White-Hat und sicher.", href:"/leistungen/traffic-recovery", linkText:"Details zur Traffic-Recovery" },
            { icon: ShieldCheck, title:"Penalty-Protection", desc:"Professionelle Absicherung mit hochwertigem Content und sauberem Backlinkprofil.", href:"/leistungen/Data-Recovery", linkText:"Infos zur Penalty-Protection" },
            { icon: Lock, title:"Linkbuilding-Strukturen", desc:"Planung und Aufbau von Autorität für Ihre Domain nach dem Update.", href:"/leistungen/schliessanlagen", linkText:"Kostenlose Erstanalyse anfordern", isCTA: true },
            { icon: Key, title:"Ranking-Boost", desc:"Präzise OnPage-Optimierung als Sofort-Service in unserem Analytics-Dashboard.", href:"/leistungen/serponado-nachmachen", linkText:"Zum Analytics-Service" },
          ].map((service, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col items-start p-6 rounded-2xl bg-white/70 backdrop-blur-3xl border border-[var(--color-charcoal-100)] hover:border-[var(--value-hover-border)] hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden outline-none shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] ${service.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}
            >
              {/* Subtle top glow on featured */}
              {service.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[var(--value-primary)]/50 to-transparent" />
              )}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-red-50 text-[var(--color-red-500)] group-hover:bg-[var(--color-red-500)] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_4px_20px_-4px_rgba(220,38,38,0.4)] transition-all duration-300 mb-4">
                <service.icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <Typography variant="h3" as="div" className="mb-2">
                {service.title}
              </Typography>
              <Typography variant="body" color="secondary" className="mb-auto">
                {service.desc}
              </Typography>
              
              {service.isCTA ? (
                <Link href={service.href} className="mt-6 w-full flex items-center justify-center gap-2 h-11 px-4 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white rounded-xl font-bold text-sm shadow-[0_4px_14px_rgba(185,28,28,0.3)] hover:shadow-[0_6px_20px_rgba(185,28,28,0.4)] transition-all hover:-translate-y-0.5">
                  {service.linkText} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : (
                <Link href={service.href} className="mt-6 flex items-center gap-2 font-semibold typo-small text-[var(--value-link-hover)] hover:text-[var(--color-red-600)] transition-colors">
                  {service.linkText} <ArrowRight className="h-4 w-4 arrow-overshoot" aria-hidden="true" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Persönlichkeits-Quote */}
        <div className="mt-8 relative rounded-2xl bg-white/70 backdrop-blur-2xl border border-[var(--color-charcoal-100)] p-8 lg:p-10 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-full h-[280px] sm:h-[340px] md:w-52 md:h-[300px] lg:w-60 lg:h-[340px] shrink-0 rounded-2xl overflow-hidden border-2 border-white/80 shadow-[0_12px_40px_-12px_rgba(184,67,42,0.6)]">
              <SeoContentImage
                image={teamImages[1]!}
                className="w-full h-full object-cover object-[50%_15%] md:object-[50%_20%]"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 208px, 240px"
                quality={100}
              />
            </div>
            <div className="flex flex-col flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />)}
              </div>
              <Typography variant="h3" as="div" className="mb-3">Unseren SEO-Experten vertrauen</Typography>
              <Typography variant="body" color="secondary" className="italic mb-4">
                &quot;Ihre Rankings sind unser Handwerk. Ich verspreche Ihnen eine datengetriebene Beratung, transparente Analysen und eine schnelle Lösung nach dem Core Update.&quot;
              </Typography>
              <span className="inline-block self-start md:self-auto px-4 py-1.5 bg-[var(--value-primary)]/10 text-[color:var(--value-primary)] font-bold tracking-wider uppercase text-xs rounded-lg border border-[var(--value-primary)]/20">
                Lead SEO & Data Analyst
              </span>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
