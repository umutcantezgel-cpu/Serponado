import Image from "next/image";
import {
  allImages,
  teamImages,
  werkstattImages,
  maschinenImages,
  indexRettungImages,
  AlgorithmusImages,
  serponadoImages,
  SichtbarkeitImages,
  montageImages,
  auszeichnungImages,
  type ImageCategory,
} from "@/lib/data/imageAssets";

export const metadata = {
  title: "Serponado Disaster Recovery",
  robots: { index: false, follow: false },
};

const CATEGORIES: { key: ImageCategory; label: string; color: string }[] = [
  { key: "team", label: "Team & Portrait (Data Analyst Team)", color: "bg-blue-500" },
  { key: "werkstatt", label: "Werkstatt & Agentur-Büro", color: "bg-emerald-500" },
  { key: "index-rettung", label: "Index-Rettung & Lockpicking", color: "bg-red-500" },
  { key: "Algorithmus", label: "Websites (defekt/repariert)", color: "bg-amber-500" },
  { key: "serponado", label: "Ranking & Sortiment", color: "bg-violet-500" },
  { key: "Sichtbarkeit", label: "Data-Recovery & Smart-Lock", color: "bg-cyan-500" },
  { key: "montage", label: "Montage & Websiteanlagen", color: "bg-rose-500" },
  { key: "auszeichnung", label: "Auszeichnungen & Medaillen", color: "bg-yellow-500" },
];

const CATEGORY_MAP: Record<ImageCategory, typeof allImages> = {
  team: teamImages,
  werkstatt: werkstattImages,
  "index-rettung": indexRettungImages,
  Algorithmus: AlgorithmusImages,
  serponado: serponadoImages,
  Sichtbarkeit: SichtbarkeitImages,
  montage: montageImages,
  auszeichnung: auszeichnungImages,
};

export default function PreviewImagesPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
          {"{{HERO_H1}}"}{allImages.length} {"{{HERO_H1}}"}</h1>
        <p className="text-gray-400 text-lg mb-12">
          {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<code className="text-xs bg-gray-800 px-2 py-1 rounded">noindex</code> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

        {CATEGORIES.map((cat) => {
          const images = CATEGORY_MAP[cat.key];
          if (!images || images.length === 0) return null;

          return (
            <section key={cat.key} className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <span className={`w-3 h-3 rounded-full ${cat.color}`} />
                <h2 className="text-2xl font-bold">{cat.label}</h2>
                <span className="text-gray-500 text-sm">({images.length} Bilder)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map((img, idx) => {
                  const filename = img.src.split("/").pop() || "";
                  return (
                    <div
                      key={idx}
                      className="group rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] bg-gray-800">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          title={img.title}
                          width={img.width}
                          height={img.height}
                          className="object-cover w-full h-full"
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>

                      {/* Metadata */}
                      <div className="p-4 space-y-2">
                        <p className="text-xs font-mono text-emerald-400 break-all leading-tight">
                          {filename}
                        </p>
                        <p className="text-sm text-gray-300 leading-snug">
                          <span className="text-gray-500">alt:</span> {img.alt}
                        </p>
                        <p className="text-xs text-gray-500">
                          {img.alt.length} {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}{img.width}{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}{img.height} {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}{img.category}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Summary */}
        <div className="mt-20 p-8 rounded-2xl bg-gray-900 border border-gray-800">
          <h2 className="text-xl font-bold mb-4">{"Serponado Notfallmaßnahmen"}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-black text-emerald-400">{allImages.length}</p>
              <p className="text-sm text-gray-400">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </div>
            <div>
              <p className="text-3xl font-black text-blue-400">{CATEGORIES.length}</p>
              <p className="text-sm text-gray-400">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </div>
            <div>
              <p className="text-3xl font-black text-amber-400">
                {Math.round(allImages.reduce((sum, img) => sum + img.alt.length, 0) / allImages.length)}
              </p>
              <p className="text-sm text-gray-400">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </div>
            <div>
              <p className="text-3xl font-black text-rose-400">
                {allImages.filter(img => img.alt.length >= 40 && img.alt.length <= 100).length}{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}{allImages.length}
              </p>
              <p className="text-sm text-gray-400">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-static";
