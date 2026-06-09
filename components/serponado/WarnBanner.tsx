'use client';
import { AlertTriangle } from 'lucide-react';

interface WarnBannerProps {
  threatLevel?: string;
  region?: string;
}

export default function WarnBanner({ threatLevel = "AKUT", region = "DACH-Raum" }: WarnBannerProps) {
  return (
    <div className="bg-red-600/10 border border-red-500/50 rounded-lg p-4 sm:p-6 my-8 flex items-start sm:items-center flex-col sm:flex-row gap-4 relative overflow-hidden group">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="bg-red-600/20 p-3 rounded-full shrink-0">
        <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
      </div>
      
      <div className="flex-1">
        <h3 className="text-xl font-bold text-red-500 m-0 leading-tight uppercase tracking-wide">
          Serponado-Warnstufe: {threatLevel}
        </h3>
        <p className="text-gray-300 mt-2 text-sm leading-relaxed mb-0">
          Algorithmische Turbulenzen in <strong>{region}</strong> registriert. Überprüfen Sie sofort Ihre Google Search Console auf Crawl-Rate-Drops und Sinken der Sichtbarkeit.
        </p>
      </div>
      
      <div className="shrink-0 mt-4 sm:mt-0 w-full sm:w-auto">
        <a href="#crisis-form" className="block w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors shadow-[0_0_15px_rgba(220,38,38,0.4)]">
          Soforthilfe anfordern
        </a>
      </div>
    </div>
  );
}
