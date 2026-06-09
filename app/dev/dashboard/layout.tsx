import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Serponado Disaster Recovery",
  description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
  path: "/dev/dashboard",
  noindex: true,
});

export default function DevDashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
