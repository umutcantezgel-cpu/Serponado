import Link from 'next/link';
import { Activity } from 'lucide-react';
import { getPillarHubs } from '@/lib/serponadoSiloUtils';

export default function FloatingRegionalHub() {
  const hubs = getPillarHubs().slice(0, 5);

  if (hubs.length === 0) return null;

  return (
    <aside className="hidden lg:block fixed right-4 top-1/3 z-40 w-56 border border-gray-800 bg-[#0a0a0a]/95 backdrop-blur-sm" aria-label="Pillar Hubs">
      <div className="p-3 border-b border-gray-800">
        <h4 className="text-[10px] font-mono uppercase tracking-widest text-red-500">
          [ PILLAR // HUBS ]
        </h4>
      </div>
      <ul className="p-2 space-y-1">
        {hubs.map((hub) => (
          <li key={hub.slug}>
            <Link
              href={`/serponado/${hub.slug}`}
              className="flex items-center gap-2 px-2 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
            >
              <Activity className="w-3 h-3 text-red-500 shrink-0" />
              <span className="truncate">{hub.h1.replace(/^Der Serponado Core Update Einschlag: /, '').slice(0, 35)}…</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
