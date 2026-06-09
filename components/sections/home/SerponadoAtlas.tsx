"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Database, AlertTriangle, ArrowRight } from "lucide-react";

interface AtlasRecord {
  id: string;
  slug: string;
  type: string;
  metaTitle: string;
}

export default function SerponadoAtlas() {
  const [records, setRecords] = useState<AtlasRecord[]>([]);

  useEffect(() => {
    // Fetch from API or just use a static mock. Since we're client-side and 
    // the DB is static, we can fetch the JSON directly or we'd ideally pass it as props.
    // For this demonstration, we'll fetch a client-side route we can add, or we can just 
    // render a fallback if we don't have an API route. Let's assume we can fetch it:
    fetch('/api/serponado-index')
      .then(res => res.json())
      .then(data => setRecords(data.slice(0, 24))) // Just show top 24 for the index
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="w-full bg-[#0a0a0a] py-16 border-y border-red-900/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
              <Database className="w-8 h-8 text-red-500" />
              Serponado Live-Atlas
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Echtzeit-Tracker der betroffenen Themen-Cluster. Überwachen Sie die Volatilität und prüfen Sie unsere Recovery-Protokolle für spezifische Suchanfragen.
            </p>
          </div>
          <div className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2 rounded-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-sm tracking-widest uppercase">Systemweit aktiv</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {records.length > 0 ? (
            records.map(record => (
              <Link 
                key={record.id}
                href={`/serponado/${record.slug}`}
                className="group p-4 bg-[#111111] border border-gray-800 rounded-xl hover:border-red-500/50 hover:bg-gray-900 transition-all flex flex-col gap-2"
              >
                <span className="text-[10px] text-red-400 font-mono uppercase tracking-wider">{record.type.replace('_', ' ')}</span>
                <span className="text-sm font-semibold text-gray-200 group-hover:text-white line-clamp-2">
                  {record.metaTitle.split('|')[0]}
                </span>
                <div className="mt-auto pt-2 flex items-center text-xs text-red-500 font-bold group-hover:translate-x-1 transition-transform">
                  Protokoll ansehen <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>
            ))
          ) : (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="p-4 bg-[#111111] border border-gray-800 rounded-xl flex flex-col gap-2 animate-pulse h-28">
                <div className="h-3 w-1/3 bg-gray-800 rounded"></div>
                <div className="h-4 w-full bg-gray-800 rounded mt-2"></div>
                <div className="h-4 w-2/3 bg-gray-800 rounded"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
