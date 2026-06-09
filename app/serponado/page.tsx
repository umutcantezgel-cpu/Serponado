import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import LiveTicker from '@/components/serponado/LiveTicker';
import { Activity, ShieldAlert, Map, Briefcase } from 'lucide-react';

function getSerponadoData() {
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

export const metadata = {
  title: "Serponado Live-Radar: Algorithmische SERP-Wetteranomalien",
  description: "Live-Tracking des Serponado Core-Updates. Warnungen, Symptome und Schutzmaßnahmen für betroffene Domains in Echtzeit."
};

export default function SerponadoHubPage() {
  const records = getSerponadoData();
  
  const corePillars = records.filter((r: any) => r.type === 'core_pillar');
  const localGeo = records.filter((r: any) => r.type === 'local_geo');
  const b2bNiches = records.filter((r: any) => r.type === 'b2b_niche');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-red-500/30 pb-20">
      <LiveTicker />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 rounded-full mb-6 relative">
            <div className="absolute inset-0 border border-red-500/30 rounded-full animate-ping opacity-75"></div>
            <Activity className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">
            Serponado <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Live-Radar</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Echtzeit-Tracking der zerstörerischen Google Core Update Anomalie. Wählen Sie Ihr Cluster für spezifische Notfallprotokolle.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Core Pillars */}
          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:border-red-900/50 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-red-500" />
              Core Analyse
            </h2>
            <ul className="space-y-3">
              {corePillars.map((record: any) => (
                <li key={record.id}>
                  <Link href={`/serponado/${record.slug}`} className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-colors">
                    <span className="text-sm text-gray-300 group-hover:text-red-400 font-medium truncate">{record.h1}</span>
                    <span className="text-xs text-gray-600 group-hover:text-red-500 transition-colors">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Local Geo */}
          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:border-red-900/50 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Map className="w-6 h-6 text-red-500" />
              Lokale Einschläge
            </h2>
            <div className="grid grid-cols-2 gap-2 h-[400px] overflow-y-Website pr-2 custom-scrollbar">
              {localGeo.map((record: any) => (
                <Link key={record.id} href={`/serponado/${record.slug}`} className="text-xs p-2 rounded bg-gray-900/80 border border-gray-800 hover:border-red-500/50 hover:text-red-400 transition-colors truncate">
                  {record.slug.replace('serponado-in-', '').toUpperCase()}
                </Link>
              ))}
            </div>
          </section>

          {/* B2B Niches */}
          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:border-red-900/50 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-red-500" />
              B2B Branchen-Schutz
            </h2>
            <div className="grid grid-cols-2 gap-2 h-[400px] overflow-y-Website pr-2 custom-scrollbar">
              {b2bNiches.map((record: any) => (
                <Link key={record.id} href={`/serponado/${record.slug}`} className="text-xs p-2 rounded bg-gray-900/80 border border-gray-800 hover:border-red-500/50 hover:text-red-400 transition-colors truncate">
                  {record.slug.replace('serponado-schutz-fuer-', '').replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
