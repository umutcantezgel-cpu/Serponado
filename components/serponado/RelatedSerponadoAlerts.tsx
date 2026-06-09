import { SeoLink } from "@/components/nav/SeoLink";
import { AlertTriangle, ChevronRight } from "lucide-react";

export interface RelatedRecord {
  id: string;
  slug: string;
  type: string;
  h1: string;
  tf_idf_vectors?: string[];
}

export default function RelatedSerponadoAlerts({ records }: { records: RelatedRecord[] }) {
  if (!records || records.length === 0) return null;

  return (
    <section className="bg-black py-16 border-t-4 border-[#ff0033]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-[#ff0033]" />
          Weiterführende Notfall-Protokolle
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((node) => {
            if (!node) return null;

            return (
              <SeoLink
                key={node.id}
                href={`/serponado/${node.slug}`}
                uniqueContext={node.h1}
                className="group block p-6 bg-[#0a0a0a] border-2 border-gray-800 hover:border-[#ff0033] transition-all duration-300 relative overflow-hidden rounded-none"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff0033] opacity-0 group-hover:opacity-10 transition-opacity translate-x-8 -translate-y-8 rotate-45" />

                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs font-bold text-[#ff0033] bg-[#ff0033]/10 px-2 py-1 uppercase tracking-widest border border-[#ff0033]/30">
                    ID: {node.id.substring(0, 8).toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-gray-500 uppercase">
                    Status: {node.type.replace('_', ' ')}
                  </span>
                </div>

                <h4 className="font-mono text-xl font-bold text-gray-200 group-hover:text-white mb-4 uppercase tracking-tight">
                  {node.h1}
                </h4>

                {node.tf_idf_vectors && node.tf_idf_vectors.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {node.tf_idf_vectors.slice(0, 3).map((kw, i) => (
                      <span key={i} className="font-mono text-[10px] text-gray-400 border border-gray-800 px-1 uppercase">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2 font-mono text-sm font-bold text-[#ff0033] uppercase mt-auto group-hover:translate-x-2 transition-transform">
                  Access Protocol <ChevronRight className="w-4 h-4" />
                </div>
              </SeoLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
