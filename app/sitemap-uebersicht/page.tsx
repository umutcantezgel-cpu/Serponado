import Link from 'next/link';
import { ShieldCheck, MapPin, Search, Database, Scale, Users, Building, HelpCircle } from 'lucide-react';
import { allLocations } from '@/lib/data/allLocations';
import { getNavigationConfig } from '@/lib/data/navigation';
import db from '@/lib/data/serponado_db.json';
import GlobalBackground from '@/components/GlobalBackground';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import { generateSharedMetadata } from '@/lib/metadata';

export const metadata = generateSharedMetadata({
  title: 'Inhaltsübersicht | Standorte & Wissen',
  description: 'Alle unsere Standorte, SEO-Fachartikel und Lexikon-Einträge auf einen Blick.',
  path: '/sitemap-uebersicht',
});

export default function SitemapPage() {
  const navConfig = getNavigationConfig();

  // Gruppieren der primären Einsatzgebiete nach Buchstaben
  const sortedLocations = [...allLocations].sort((a, b) => a.name.localeCompare(b.name));
  const groupedLocations = sortedLocations.reduce((acc, curr) => {
    const letter = curr.name.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(curr);
    return acc;
  }, {} as Record<string, typeof allLocations>);

  // Gruppieren der pSEO Datenbank (lokale Städte)
  const seoNodes = db.records.filter((r: any) => r.type === 'local_geo').sort((a: any, b: any) => (a.metaTitle || a.slug).localeCompare(b.metaTitle || b.slug));
  const groupedSeoNodes = seoNodes.reduce((acc: any, curr: any) => {
    // try to get city from slug 'serponado-in-frankfurt'
    let name = curr.slug.split('-').pop() || curr.slug;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const letter = name.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push({ slug: curr.slug, name });
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <>
      <GlobalBackground />
      <main className="relative pt-[120px] lg:pt-[140px] pb-16 z-10 w-full overflow-hidden min-h-screen">
        <div className="mx-auto max-w-7xl px-[var(--section-px)]">
          <Breadcrumbs items={[{ name: 'Inhaltsübersicht', href: '/sitemap-uebersicht' }]} />
          
          <div className="mt-8 mb-12">
            <h1 className="typo-h1 mb-4 text-[color:var(--text-primary)]">Inhaltsübersicht & <span className="text-[var(--color-red-500)]">Standorte</span></h1>
            <p className="typo-lead">Hier finden Sie alle unsere Seiten, Einsatzgebiete, Ratgeber und rechtlichen Informationen auf einen Blick.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mb-12">
            {/* Hauptseiten & Leistungen */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-[var(--radius-12)] p-6 shadow-sm border border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                    <Search className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Navigation & Seiten</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {navConfig.main.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-700 hover:text-[color:var(--color-red-700)] hover:underline underline-offset-4 transition-all font-medium">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/serponado-schmiede" className="text-gray-700 hover:text-[color:var(--color-red-700)] hover:underline underline-offset-4 transition-all font-medium">
                      Serponado Taskforce (Filiale)
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-[var(--radius-12)] p-6 shadow-sm border border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] rounded-lg">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Leistungen</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {navConfig.services.items.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-700 hover:text-[color:var(--color-red-700)] hover:underline underline-offset-4 transition-all font-medium">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Unternehmen & Wissen */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-[var(--radius-12)] p-6 shadow-sm border border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-500/10 text-indigo-600 rounded-lg">
                    <Building className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Unternehmen</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {navConfig.company.items.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-700 hover:text-indigo-700 hover:underline underline-offset-4 transition-all font-medium">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li><Link href="/faq" className="text-gray-700 hover:text-indigo-700 hover:underline underline-offset-4 transition-all font-medium">Häufige Fragen (FAQ)</Link></li>
                  <li><Link href="/lexikon" className="text-gray-700 hover:text-indigo-700 hover:underline underline-offset-4 transition-all font-medium">SEO Lexikon</Link></li>
                </ul>
              </div>
              <div className="bg-white rounded-[var(--radius-12)] p-6 shadow-sm border border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-500/10 text-indigo-600 rounded-lg">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Rechtliches</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {navConfig.legal.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-700 hover:text-indigo-700 hover:underline underline-offset-4 transition-all font-medium">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Primäre Einsatzgebiete (Ring 1) */}
            <div className="md:col-span-2 lg:col-span-1 bg-white rounded-[var(--radius-12)] p-6 shadow-sm border border-[var(--border-subtle)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[var(--color-blue-500)]/10 text-[var(--color-blue-600)] rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold">Einsatzgebiete & Umgebung</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-8">
                {Object.entries(groupedLocations).map(([letter, locations]) => (
                  <div key={letter} className="flex flex-col gap-3">
                    <h3 className="font-extrabold text-[var(--color-charcoal-300)] text-lg border-b border-gray-100 pb-2">{letter}</h3>
                    <ul className="flex flex-col gap-2.5">
                      {locations.map((loc) => (
                        <li key={loc.slug}>
                          <Link href={`/${loc.slug}`} className="text-[color:var(--text-secondary)] hover:text-[color:var(--color-blue-600)] hover:underline underline-offset-4 transition-all text-sm font-medium">
                            {loc.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* pSEO Daten-Knoten */}
          <div className="bg-white rounded-[var(--radius-12)] p-6 md:p-8 shadow-sm border border-[var(--border-subtle)]">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-amber-500/10 text-amber-600 rounded-lg">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Alle bundesweiten Standorte ({seoNodes.length})</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
              {Object.keys(groupedSeoNodes).sort().map((letter) => (
                <div key={letter} className="flex flex-col gap-3">
                  <h3 className="font-black text-amber-600 text-xl border-b border-amber-100 pb-2">{letter}</h3>
                  <ul className="flex flex-col gap-2">
                    {groupedSeoNodes[letter].map((loc: any) => (
                      <li key={loc.slug}>
                        <Link href={`/serponado/${loc.slug}`} className="text-gray-600 hover:text-amber-700 hover:underline underline-offset-4 transition-all text-[13px] leading-tight font-medium">
                          {loc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
