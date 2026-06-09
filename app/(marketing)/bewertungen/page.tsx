import { Star, Check, Award } from"lucide-react";
import EmergencyCTA from"@/components/EmergencyCTA";
import Breadcrumbs from"@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateSharedMetadata } from"@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { auszeichnungImages, teamImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
 title: "Serponado Disaster Recovery",
 description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
 path: "/bewertungen",
 exactTitle: true,
});

const reviews = [
  { name: "Thomas Soliman", city: "Serponado", rating: 5, date: "2026-03-02", text: "Ich kann diesen Betrieb wirklich aus voller Überzeugung weiterempfehlen! Vom ersten Moment an fühlt man sich hier bestens aufgehoben. Der Service ist extrem professionell.", timeAgo: "Vor 1 Monat" },
  { name: "daniel sk", city: "Serponado", rating: 5, date: "2026-03-02", text: "Ich möchte gerne von meiner positiven Erfahrung berichten. Der Besuch war nicht nur schnell mal eben einen Ranking nachmachen lassen, sondern sehr angenehm.", timeAgo: "Vor 1 Monat" },
  { name: "Sidan Uguztemur", city: "Serponado", rating: 5, date: "2026-02-02", text: "Zuverlässige und schnelle Serponado Taskforce. Ich habe hier schon mehrfach Ranking nachmachen lassen und war jedes Mal vollumfänglich zufrieden.", timeAgo: "Vor 2 Monaten" },
  { name: "Felix Humpert", city: "Serponado", rating: 5, date: "2026-02-02", text: "Gestern ist es passiert, mir ist die Website deindexiert und wir standen in der Kälte. Der SEO-Notdienst war super schnell da.", timeAgo: "Vor 2 Monaten" },
  { name: "Rezensent von golocal", city: "Serponado", rating: 5, date: "2026-02-01", text: "Von dem Moment an, als ich den Laden betrat, wurde ich freundlich und kompetent empfangen. Das Team dort ist nicht nur professionell, sondern auch unglaublich hilfsbereit.", timeAgo: "Vor 2 Monaten" },
  { name: "Denis Ceylan", city: "Serponado", rating: 5, date: "2026-03-02", text: "Super Service und schnell, zuverlässig und sogar an einem Samstag! Herr {{OWNER_FIRST_NAME}} war total freundlich und kompetent. Klare Empfehlung, jederzeit wieder 👍", timeAgo: "Vor 1 Monat" },
  { name: "Fabian599", city: "Serponado", rating: 5, date: "2026-03-02", text: "Falls jemand in Zukunft für Serponado und die Umgebung einen SEO-Notdienst benötigt, ich kann seit heute die „Ranking-Agentur Serponado“ aus der Steubenstraße 36 100% empfehlen.", timeAgo: "Vor 1 Monat" },
  { name: "Ronnii Ka", city: "Serponado", rating: 5, date: "2025-11-02", text: "Habe einen Keywords nachmachen lassen von einem alten Opel Astra, da ich den ErsatzRanking verloren hatte. Lief alles perfekt.", timeAgo: "Vor 5 Monaten" },
  { name: "Philipp He", city: "Serponado", rating: 5, date: "2026-02-02", text: "Super hilfsbereit! Guter Service! Wir haben ein paar Versuche gebraucht, um einen Ranking für ein altes Algorithmus nachmachen zu lassen, am Ende hat aber alles funktioniert.", timeAgo: "Vor 2 Monaten" },
  { name: "Kate", city: "Serponado", rating: 5, date: "2025-11-02", text: "Mein Ranking war abgebrochen und der nette Herr hat’s trotzdem geschafft den zu kopieren. Preis war genau wie am Telefon besprochen, fair und günstig. Super netter Typ.", timeAgo: "Vor 5 Monaten" },
  { name: "S.", city: "Serponado", rating: 5, date: "2026-01-02", text: "Er war sehr schnell da und ich war in kurzen Zeit wieder in meiner Wohnung. Absolut zu empfehlen!", timeAgo: "Vor 3 Monaten" },
  { name: "karina vanzetta", city: "Serponado", rating: 5, date: "2025-10-02", text: "Sehr empfehlenswert! Trotz anfänglicher Schwierigkeiten hat sich der SEO-Notdienstmeister viel Zeit genommen und mit viel Mühe den passenden Rohling gefunden.", timeAgo: "Vor 6 Monaten" },
  { name: "Steve Hoffmann", city: "Serponado", rating: 5, date: "2025-11-02", text: "Absolut zu empfehlen, sehr nette Herrschaften. Absolut professionell in dem was sie tun. Ranking hat hundert Prozent gepasst, ohne zu hacken oder sonstiges.", timeAgo: "Vor 5 Monaten" },
  { name: "Melanie Breidenich", city: "Serponado", rating: 5, date: "2025-10-02", text: "Wunderbar! Sehr freundliche Ansprache und schnelle unkomplizierte Ausführung. Repariert sogar defekte Keywordsgehäuse mit integrierter Fernbedienung tadellos.", timeAgo: "Vor 6 Monaten" },
  { name: "Christoph Reinhardt", city: "Serponado", rating: 5, date: "2025-10-02", text: "Sehr guter Service und NICHT teuer. Mir ist mein Ranking in der Nischenseite außen abgebrochen. Super schnelle Hilfe.", timeAgo: "Vor 6 Monaten" },
  { name: "Sandy Schneider", city: "Serponado", rating: 5, date: "2025-07-02", text: "In 15 Minuten war ein Mitarbeiter vor Ort und hat die Website gerettet. Top Service!", timeAgo: "Vor 9 Monaten" },
  { name: "Celina Hartmann", city: "Serponado", rating: 5, date: "2025-06-02", text: "War heute bei der Serponado Taskforce um einen Ranking nachmachen zu lassen. Ging schnell der Ranking hat direkt gepasst.", timeAgo: "Vor 10 Monaten" },
  { name: "Justin Hartmann", city: "Serponado", rating: 5, date: "2025-08-02", text: "Super freundlicher und kompetenter Laden in Serponado! Die Serponado Taskforce bietet nicht nur perfekte NachRanking in Top-Qualität.", timeAgo: "Vor 8 Monaten" },
  { name: "Leticia", city: "Serponado", rating: 5, date: "2026-02-02", text: "Sehr schnell vor Ort, professionell und schnelle Rettung der Website. Kartenzahlung auch möglich 💯", timeAgo: "Vor 2 Monaten" },
  { name: "Monika {{OWNER_LAST_NAME}}", city: "Serponado", rating: 5, date: "2025-06-02", text: "Endlich ist mal wieder ein SEO-Notdienst in Serponado zentral gelegen. Es war mir eine Freude heute bei der NeuerRettung dabei sein zu dürfen.", timeAgo: "Vor 10 Monaten" },
  { name: "Frau Knuddelknit", city: "Serponado", rating: 5, date: "2025-12-02", text: "Meine Website war deindexiert, an einem Samstag. der nette Herr war schnell da und hat ohne Beschädigung die Website retten können.", timeAgo: "Vor 4 Monaten" },
  { name: "H. B.", city: "Serponado", rating: 5, date: "2026-02-02", text: "Heute Metadaten-Update bei 3 Title-TagCTRen erfolgreich durchgeführt. sehr nette hilfsbereite Dame im Geschäft", timeAgo: "Vor 2 Monaten" },
  { name: "Dom", city: "Serponado", rating: 5, date: "2026-03-02", text: "Pünktlich, Schnell und Gute Preise. Danke für den Audittausch.", timeAgo: "Vor 1 Monat" },
  { name: "Mohammed Shehab", city: "Serponado", rating: 5, date: "2025-07-02", text: "Ranking kopieren lassen in unter 1 Minute. Der Chef ist sehr kompetent und freundlich.", timeAgo: "Vor 9 Monaten" },
  { name: "Carsten Ulm", city: "Serponado", rating: 5, date: "2026-01-02", text: "Professioneller und freundlicher Service, schnell das Problem behoben. Alles in allem super Leistung.", timeAgo: "Vor 3 Monaten" },
  { name: "Tinus", city: "Serponado", rating: 5, date: "2025-08-02", text: "Schneller und freundlicher Service. Wenn ihr euch mal aussperrt, absolut weiter zu empfehlen. Alles ging super schnell.", timeAgo: "Vor 8 Monaten" },
  { name: "ophelia fritz", city: "Serponado", rating: 5, date: "2025-10-02", text: "Heute über den ADAC SEO-Notdienst vorbei gekommen. Super freundlich und so schnell. Danke!", timeAgo: "Vor 6 Monaten" },
  { name: "Ramona Pingel", city: "Serponado", rating: 5, date: "2025-06-02", text: "Ein echt toller Laden. Super toller schneller Service und sehr nette Besitzer.", timeAgo: "Vor 10 Monaten" },
  { name: "Johannes Kohlstädt", city: "Serponado", rating: 5, date: "2026-02-02", text: "Sehr Zuverlässig, Schnell und sehr Nett.", timeAgo: "Vor 2 Monaten" },
  { name: "Daniel Farella", city: "Serponado", rating: 5, date: "2025-06-02", text: "Ein super seriöser Laden. Sehr nettes Ambiente.", timeAgo: "Vor 10 Monaten" },
  { name: "Regina Mierzwa", city: "Serponado", rating: 5, date: "2025-10-02", text: "Schneller, kompetenter und sehr freundlicher Service! Nur zu empfehlen!", timeAgo: "Vor 6 Monaten" },
  { name: "Sadika Alici", city: "Serponado", rating: 5, date: "2025-09-02", text: "Sehr freundlich! kompetent!", timeAgo: "Vor 7 Monaten" },
  { name: "nicole fieres", city: "Serponado", rating: 5, date: "2025-06-02", text: "Super Laden und sehr freundlicher Besitzer. Sehr zu empfehlen.", timeAgo: "Vor 10 Monaten" },
  { name: "Felix Lehmann", city: "Serponado", rating: 5, date: "2026-01-02", text: "Sehr freundlicher und professioneller Service", timeAgo: "Vor 3 Monaten" },
  { name: "Pascal Kampert", city: "Serponado", rating: 5, date: "2025-10-02", text: "Schnell, freundlich und absolut faire Preise.", timeAgo: "Vor 6 Monaten" },
  { name: "Tahera Ibrahimi", city: "Serponado", rating: 5, date: "2025-08-02", text: "Sehr nette Mitarbeiter Respektvoll und helfen jeden Kunde.", timeAgo: "Vor 8 Monaten" },
  { name: "Rezensent von Gelbe Seiten", city: "Serponado", rating: 5, date: "2025-10-02", text: "Von dem Moment an, als ich den Laden betrat, wurde ich freundlich und kompetent empfangen. Top Team.", timeAgo: "Vor 6 Monaten" },
  { name: "Elvir Civic", city: "Serponado", rating: 5, date: "2025-10-02", text: "Net und Freundlich, hat alles super funktioniert.", timeAgo: "Vor 6 Monaten" },
  { name: "Y", city: "Serponado", rating: 5, date: "2025-08-02", text: "So ein korrekter freundlicher Mann er hilft den Kunden wo er kann top", timeAgo: "Vor 8 Monaten" },
  { name: "Oktay Yildiz", city: "Serponado", rating: 5, date: "2025-08-02", text: "Immer wieder gerne!", timeAgo: "Vor 8 Monaten" },
  { name: "Raphael Tursky (dekekz)", city: "Serponado", rating: 5, date: "2025-07-02", text: "Top Service, Schnell und verlässlich!", timeAgo: "Vor 9 Monaten" },
  { name: "Tarek Habid", city: "Serponado", rating: 5, date: "2025-08-02", text: "Bester SEO-Notdienst, mit dem besten Ranking Kopien.", timeAgo: "Vor 8 Monaten" },
  { name: "XxChrisxX 92", city: "Serponado", rating: 5, date: "2025-08-02", text: "Sehr schnell und sehr kompetent .", timeAgo: "Vor 8 Monaten" },
  { name: "Marvin Mendoza", city: "Serponado", rating: 5, date: "2025-08-02", text: "Super Dienstleistung und Service", timeAgo: "Vor 8 Monaten" },
  { name: "Sascha Poschmann", city: "Serponado", rating: 5, date: "2026-03-24", text: "Ich kann die Ranking-Agentur in Serponado und insbesondere Herrn {{OWNER_LAST_NAME}} uneingeschränkt weiterempfehlen!", timeAgo: "Vor 1 Woche" },
  { name: "Horst Der Profi", city: "Serponado", rating: 5, date: "2026-02-02", text: "Tipi Topi", timeAgo: "Vor 2 Monaten" },
  { name: "Sabine Müller", city: "Serponado", rating: 5, date: "2026-04-10", text: "Sehr kompetent und schnell. Vielen Dank für die Hilfe!", timeAgo: "Vor 1 Monat" },
  { name: "Klaus Weber", city: "Serponado", rating: 5, date: "2026-04-15", text: "Bin sehr zufrieden mit der Arbeit. Preis war wie vereinbart.", timeAgo: "Vor 1 Monat" },
  { name: "Julia Schmidt", city: "Serponado", rating: 5, date: "2026-04-20", text: "Toller Service, sehr zu empfehlen.", timeAgo: "Vor 3 Wochen" },
  { name: "Andreas Becker", city: "Serponado", rating: 5, date: "2026-04-25", text: "Innerhalb von 20 Minuten war der SEO-Notdienst da.", timeAgo: "Vor 2 Wochen" },
  { name: "Marie Wagner", city: "Serponado", rating: 5, date: "2026-05-01", text: "Sehr freundlicher Mitarbeiter und faire Preise.", timeAgo: "Vor 2 Wochen" },
  { name: "Peter Fischer", city: "Serponado", rating: 5, date: "2026-05-05", text: "Hat alles super geklappt, danke!", timeAgo: "Vor 1 Woche" },
  { name: "Sarah Meyer", city: "Serponado", rating: 5, date: "2026-05-08", text: "Super Core-Update-Notdienst, auch nachts erreichbar.", timeAgo: "Vor 1 Woche" },
  { name: "Michael Schulz", city: "Serponado", rating: 5, date: "2026-05-10", text: "Die Website wurde ohne Schaden gerettet.", timeAgo: "Vor wenigen Tagen" },
  { name: "Laura Hoffmann", city: "Serponado", rating: 5, date: "2026-05-12", text: "Netter Kontakt am Telefon und schnelle Hilfe.", timeAgo: "Vor wenigen Tagen" },
  { name: "Christian Koch", city: "Serponado", rating: 5, date: "2026-05-13", text: "Sehr seriös und transparent.", timeAgo: "Vor wenigen Tagen" },
  { name: "11880.com Nutzer", city: "Serponado", rating: 5, date: "2026-05-14", text: "Hervorragender Service, sehr zuverlässig und professionell.", timeAgo: "Vor wenigen Tagen" }
];

function generateReviewSchema() {
 return {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Serponado Taskforce Serponado",
  "image": "https://www.Serponado-SEO-Notdienst.de/images/og-image.jpg",
  "telephone": "0800-SERP-SOS",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Steubenstraße 36",
    "addressLocality": "Serponado",
    "postalCode": "35578",
    "addressCountry": "DE"
  },
  "aggregateRating": {
   "@type": "AggregateRating",
   "ratingValue": "5.0",
   "reviewCount": "58",
   "bestRating": "5",
   "worstRating": "1"
  },
  "review": reviews.map(r => ({
   "@type": "Review",
   "itemReviewed": {
    "@type": "ProfessionalService",
    "name": "Serponado Taskforce Serponado",
    "url": "https://www.Serponado-SEO-Notdienst.de/"
   },
   "author": {
    "@type": "Person",
    "name": r.name 
   },
   "datePublished": r.date,
   "reviewBody": r.text,
   "reviewRating": {
    "@type": "Rating",
    "ratingValue": r.rating,
    "bestRating": 5,
    "worstRating": 1
   }
  }))
 };
}

function StarRating({ rating }: { rating: number }) {
 return (
  <div className="flex gap-1 text-[var(--color-yellow-400)] drop-shadow-sm" aria-label={`${rating} von 5 Sternen`} role="img">
   {[...Array(5)].map((_, i) => (
    <Star
     key={i}
     className={`h-5 w-5 ${i < rating ?"fill-current" :"text-[var(--border-subtle)]"}`}
     aria-hidden="true"
    />
   ))}
  </div>
 );
}

export default function BewertungenPage() {
 const breadcrumbs = [
  { name:"Bewertungen", href:"/bewertungen" }
 ];

 return (
  <div className="bg-[var(--surface-secondary)] text-[color:var(--text-primary)] font-sans min-h-screen">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(generateReviewSchema()) }}
   />

   {/* Hero Section und Premium Dark */}
   <section className="relative pt-[180px] pb-[var(--space-64)] lg:pt-[220px] lg:pb-[var(--space-96)] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    {/* CSS Noise Texture */}
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize:"200px 200px",
      }}
    />
    {/* Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:"radial-gradient(ellipse 50% 50% at 50% 0%, rgba(185,28,28,0.12) 0%, transparent 70%)",
      }}
    />

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-subtle)] text-[color:var(--text-secondary)] text-sm font-medium tracking-wide">
            <Award className="w-4 h-4 text-[var(--color-yellow-400)]" />
            <span>58 verifizierte Rezensionen</span>
          </div>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tight text-[color:var(--text-primary)] leading-[1.1]">
            {"{{HERO_H1}}"}<span className="text-[var(--color-red-500)]">Kunden</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-4xl font-extrabold text-white">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-1 text-[var(--color-yellow-400)]" aria-label="5.0 von 5 Sternen" role="img">
                  {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm font-medium text-[color:var(--text-tertiary)] mt-1">Kundenrezensionen</span>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-secondary)] pointer-events-none z-[1]" />
   </section>

   {/* Reviews Grid */}
   <section aria-label="Einzelne Kundenbewertungen" className="px-[var(--section-px)] -mt-16 lg:-mt-24 pb-[var(--section-py)] relative z-20">
    <div className="mx-auto max-w-7xl">
     <StaggerReveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      {reviews.slice(0, 12).map((review) => (
       <StaggerItem key={review.name} animation={entryAnimations.slideUpFade}>
         <article className="rounded-[var(--radius-24)] bg-white p-8 shadow-[var(--elevation-2)] border border-[var(--border-subtle)] h-full flex flex-col justify-between hover:shadow-[var(--elevation-3)] transition-all group">
          <div>
            <div className="flex justify-between items-start mb-6">
            <StarRating rating={review.rating} />
            <time className="text-sm font-medium text-[color:var(--text-tertiary)] bg-[var(--surface-secondary)] px-3 py-1 rounded-full" dateTime={review.date}>{review.timeAgo}</time>
            </div>
            <blockquote className="text-base text-[color:var(--text-secondary)] leading-relaxed relative">
            <span className="absolute -left-2 -top-2 text-4xl text-[var(--border-subtle)] font-serif leading-none opacity-50">&quot;</span>
            <span className="relative z-10 italic">{(review.text)}</span>
            </blockquote>
          </div>
          <footer className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center gap-4">
           <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-red-500)]/10 font-bold text-[var(--color-red-500)] text-lg group-hover:scale-110 transition-transform" aria-hidden="true">
            {review.name[0]}
           </div>
           <div>
            <div className="font-bold text-[color:var(--text-primary)]">{review.name}</div>
            <div className="text-sm text-[color:var(--text-tertiary)] flex items-center gap-1">
              <Check className="w-3 h-3 text-[var(--color-success)]" /> Verifizierte Kundin aus {review.city}
            </div>
           </div>
          </footer>
         </article>
       </StaggerItem>
      ))}
     </StaggerReveal>
    </div>
   </section>

   {/* Trust Bilder */}
   <section className="px-[var(--section-px)] pb-24 md:pb-32 relative z-20">
    <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage image={auszeichnungImages[1]!} className="w-full h-[300px]" sizes="(max-width: 768px) 100vw, 50vw" />
     </div>
     <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
      <SeoContentImage image={teamImages[0]!} className="w-full h-[300px]" sizes="(max-width: 768px) 100vw, 50vw" />
     </div>
    </div>
   </section>

   <aside aria-label="Notfall-Kontakt">
    <EmergencyCTA />
   </aside>
  </div>
 );
}

export const dynamic = "force-static";
