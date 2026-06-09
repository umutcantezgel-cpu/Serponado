"use client";

import { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Search, X, ChevronRight, FileText, MapPin, Map, Navigation } from "lucide-react";
import Link from "next/link";
import { useFocusTrap } from "@/hooks/useFocusTrap";

interface SearchResult {
  title: string;
  url: string;
  type: string;
}

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const trapRef = useFocusTrap(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data.results || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Kategorie': return <Navigation className="w-5 h-5 text-indigo-500" />;
      case 'Einsatzgebiet': return <Map className="w-5 h-5 text-blue-500" />;
      case 'Wissen/Detail': return <FileText className="w-5 h-5 text-amber-500" />;
      default: return <MapPin className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[200] bg-gray-900/40 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
          onClick={onClose}
        >
          <m.div 
            ref={trapRef as any}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-h-[70vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
              <Search className="w-6 h-6 text-gray-400" />
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Suchen nach Städten, Leistungen, Ratgebern..." 
                className="flex-1 text-lg font-medium text-gray-900 placeholder:text-gray-400 bg-transparent border-none outline-none focus:ring-0 px-0"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={onClose} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-slate-50/50 p-2">
              {loading && <div className="p-6 text-center text-gray-500">Suche läuft...</div>}
              {!loading && query.length > 0 && query.length < 2 && <div className="p-6 text-center text-gray-500">Bitte geben Sie mindestens 2 Zeichen ein.</div>}
              {!loading && query.length >= 2 && results.length === 0 && <div className="p-6 text-center text-gray-500">Keine Ergebnisse für &quot;{query}&quot; gefunden.</div>}
              
              {!loading && results.length > 0 && (
                <div className="flex flex-col gap-1 p-2">
                  <div className="px-3 pb-2 pt-1 text-xs font-bold text-gray-400 uppercase tracking-wider">Ergebnisse</div>
                  {results.map((res, i) => (
                    <Link 
                      key={i} 
                      href={res.url} 
                      onClick={onClose}
                      className="group flex items-center justify-between p-3 sm:p-4 rounded-xl bg-white hover:bg-red-50 border border-transparent hover:border-red-100 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm">
                          {getIcon(res.type)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900 group-hover:text-red-700">{res.title}</span>
                          <span className="text-xs text-gray-500">{res.type}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
