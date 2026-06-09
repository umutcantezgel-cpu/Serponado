import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Serponado Disaster Recovery",
  description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
  path: "/preview",
  noindex: true,
});

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
