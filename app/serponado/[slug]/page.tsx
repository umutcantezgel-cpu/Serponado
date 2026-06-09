import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import LiveTicker from '@/components/serponado/LiveTicker';
import WarnBanner from '@/components/serponado/WarnBanner';
import CrisisForm from '@/components/serponado/CrisisForm';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldAlert, Activity, ChevronRight } from 'lucide-react';
import RelatedSerponadoAlerts from '@/components/serponado/RelatedSerponadoAlerts';
import SiblingSplicedBreadcrumbs from '@/components/serponado/SiblingSplicedBreadcrumbs';
import InTextSiblingLoop from '@/components/serponado/InTextSiblingLoop';
import FloatingRegionalHub from '@/components/serponado/FloatingRegionalHub';
import CyclicFooter from '@/components/serponado/CyclicFooter';

interface SerponadoRecord {
  id: string;
  slug: string;
  type: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tf_idf_vectors: string[];
  htmlContent: string;
  schema_ld: any;
  internal_links: string[];
  image_url: string;
}

function getSerponadoData(): SerponadoRecord[] {
  try {
    const dataPath = path.join(process.cwd(), 'lib', 'data', 'serponado_db.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    const json = JSON.parse(fileContents);
    return json.records;
  } catch (e) {
    console.error("Error reading serponado_db.json:", e);
    return [];
  }
}

export async function generateStaticParams() {
  const records = getSerponadoData();
  return records.map((r) => ({
    slug: r.slug,
  }));
}

export const dynamic = 'force-static';
export const revalidate = false;
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const records = getSerponadoData();
  const data = records.find((r) => r.slug === p.slug);
  
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/serponado/${data.slug}`,
    },
  };
}

export default async function SerponadoSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const records = getSerponadoData();
  const data = records.find((r) => r.slug === p.slug);

  if (!data) {
    notFound();
  }

  // Find linked records to display rich snippets instead of just slugs
  let relatedRecords = records.filter(r => data.internal_links.includes(r.slug));
  
  // Ensure we have at least 4 related records for the test
  if (relatedRecords.length < 4) {
    const additional = records.filter(r => r.slug !== data.slug && !data.internal_links.includes(r.slug)).slice(0, 4 - relatedRecords.length);
    relatedRecords = [...relatedRecords, ...additional];
  }

  return (
    <div data-serponado className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-red-500/30 font-sans">
      <LiveTicker />
      
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": data.metaTitle,
              "description": data.metaDescription,
              "author": {
                "@type": "Organization",
                "name": "Serponado Taskforce"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Serponado Taskforce",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.serponado.com/images/logo-header.svg"
                }
              },
              "datePublished": new Date().toISOString(),
              "dateModified": new Date().toISOString(),
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.serponado.com/serponado/${data.slug}`
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Coday UG (haftungsbeschränkt)",
              "url": "https://www.serponado.com",
              "logo": "https://www.serponado.com/images/logo-header.svg",
              "sameAs": [
                "https://www.linkedin.com/company/coday-ug",
                "https://github.com/coday-ug"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `Was bedeutet der Serponado-Einschlag für ${data.type.replace('_', ' ')}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Ein Serponado führt zu massivem Ranking-Verlust durch Core Updates. Für ${data.type.replace('_', ' ')} erfordert dies ein sofortiges EEAT-Audit und Content-Sanierung.`
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wie können wir unsere Rankings nach dem Serponado wiederherstellen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Durch Data-Recovery, schnelle Index-Rettung und White-Hat SEO-Maßnahmen im Rahmen des Serponado-Survival-Protokolls."
                  }
                }
              ]
            }
          ])
        }}
      />

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Breadcrumb — spliced with predecessor from silo ring */}
        <SiblingSplicedBreadcrumbs currentSlug={data.slug} />

        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold tracking-widest uppercase mb-4">
            <Activity className="w-4 h-4" />
            {data.type.replace('_', ' ')}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            {data.h1}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {data.tf_idf_vectors.map((vector, i) => (
              <span key={i} className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-400 font-mono">
                {vector}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Image */}
        {data.image_url && (
          <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden border border-gray-800">
            <Image
              src={data.image_url}
              alt={`Serponado Threat Analysis: ${data.h1}`}
              fill
              className="object-cover"
              priority={true}
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
            />
          </div>
        )}

        <WarnBanner threatLevel={data.type === 'local_geo' ? 'LOKAL AKUT' : 'SYSTEMWEIT'} />

        {/* Content Body */}
        <article 
          className="prose prose-invert prose-red max-w-none mt-12
                     prose-h2:text-2xl prose-h2:font-bold prose-h2:text-white prose-h2:border-b prose-h2:border-gray-800 prose-h2:pb-2 prose-h2:mt-12
                     prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg
                     prose-strong:text-red-400 prose-strong:font-semibold
                     prose-em:text-gray-400 prose-em:not-italic prose-em:bg-gray-900 prose-em:px-1 prose-em:rounded"
          dangerouslySetInnerHTML={{ __html: data.htmlContent }}
        />

        {/* In-text silo sibling links */}
        <InTextSiblingLoop currentSlug={data.slug} />

        <div className="mt-16 pt-16 border-t border-gray-800">
          <CrisisForm sourceSlug={data.slug} />
        </div>

        {/* Silo Internal Linking */}
        <RelatedSerponadoAlerts records={relatedRecords} />

        {/* Cyclic ring footer navigation */}
        <CyclicFooter currentSlug={data.slug} />
      </main>

      {/* Fixed sidebar with pillar hub links */}
      <FloatingRegionalHub />
    </div>
  );
}
