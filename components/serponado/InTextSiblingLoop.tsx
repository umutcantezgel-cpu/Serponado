import Link from 'next/link';
import { getSiblings } from '@/lib/serponadoSiloUtils';
import { ShieldAlert } from 'lucide-react';

interface Props {
  currentSlug: string;
}

export default function InTextSiblingLoop({ currentSlug }: Props) {
  const siblings = getSiblings(currentSlug, 4);

  if (siblings.length === 0) return null;

  return (
    <nav aria-label="Verwandte Serponado-Analysen" className="my-12 border border-gray-800 p-6">
      <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">
        [ SILO // VERWANDTE ANALYSEN ]
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {siblings.map((record) => (
          <Link
            key={record.slug}
            href={`/serponado/${record.slug}`}
            className="flex items-start gap-3 p-3 border border-gray-800 hover:border-red-500/50 transition-colors group"
          >
            <ShieldAlert className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
            <span className="text-sm text-gray-300 group-hover:text-white line-clamp-2">
              {record.h1}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
