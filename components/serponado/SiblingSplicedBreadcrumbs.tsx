import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getPredecessor, getRecordBySlug } from '@/lib/serponadoSiloUtils';

interface Props {
  currentSlug: string;
}

export default function SiblingSplicedBreadcrumbs({ currentSlug }: Props) {
  const current = getRecordBySlug(currentSlug);
  const predecessor = getPredecessor(currentSlug);

  return (
    <nav className="flex items-center text-xs text-gray-500 mb-8 font-mono flex-wrap gap-1" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-red-400">Home</Link>
      <ChevronRight className="w-3 h-3 mx-1" />
      <Link href="/serponado" className="hover:text-red-400">Serponado-Radar</Link>
      {predecessor && (
        <>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href={`/serponado/${predecessor.slug}`} className="hover:text-red-400 truncate max-w-[200px]">
            {predecessor.h1.slice(0, 40)}…
          </Link>
        </>
      )}
      <ChevronRight className="w-3 h-3 mx-1" />
      <span className="text-gray-300 truncate">{current?.h1 ?? currentSlug}</span>
    </nav>
  );
}
