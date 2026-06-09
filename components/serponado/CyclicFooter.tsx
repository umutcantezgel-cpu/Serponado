import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getNextInRing } from '@/lib/serponadoSiloUtils';

interface Props {
  currentSlug: string;
}

export default function CyclicFooter({ currentSlug }: Props) {
  const nextStations = getNextInRing(currentSlug, 4);

  if (nextStations.length === 0) return null;

  return (
    <nav aria-label="Nächste Stationen im Ring" className="mt-16 pt-8 border-t border-gray-800">
      <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6">
        [ RING // NÄCHSTE STATIONEN ]
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {nextStations.map((record, i) => (
          <Link
            key={record.slug}
            href={`/serponado/${record.slug}`}
            className="flex items-center justify-between p-4 border border-gray-800 hover:border-red-500/50 transition-colors group"
          >
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-mono text-gray-600 uppercase">Station {i + 1}</span>
              <p className="text-sm text-gray-300 group-hover:text-white truncate">
                {record.h1}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-red-500 ml-3 shrink-0" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
