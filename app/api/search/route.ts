import { NextResponse } from 'next/server';
import { getAllNavigationLinks } from '@/lib/data/navigation';
import db from '@/lib/data/serponado_db.json';
import { allLocations } from '@/lib/data/allLocations';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results: any[] = [];
  
  // 1. Navigation Links
  const navLinks = getAllNavigationLinks();
  for (const link of navLinks) {
    if (link.label.toLowerCase().includes(q)) {
      results.push({ title: link.label, url: link.href, type: 'Kategorie' });
    }
  }

  // 2. Locations
  for (const loc of allLocations) {
    if (loc.name.toLowerCase().includes(q)) {
      results.push({ title: loc.name, url: `/${loc.slug}`, type: 'Einsatzgebiet' });
    }
  }

  // 3. pSEO DB
  for (const record of db.records) {
    const title = record.metaTitle || record.slug;
    if (title.toLowerCase().includes(q) || record.slug.toLowerCase().includes(q)) {
      results.push({ title: title, url: `/serponado/${record.slug}`, type: 'Wissen/Detail' });
    }
  }

  // Deduplicate and limit to 10
  const uniqueUrls = new Set();
  const finalResults = [];
  for (const res of results) {
    if (!uniqueUrls.has(res.url)) {
      uniqueUrls.add(res.url);
      finalResults.push(res);
    }
    if (finalResults.length >= 10) break;
  }

  return NextResponse.json({ results: finalResults });
}
