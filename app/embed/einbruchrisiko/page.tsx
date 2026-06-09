import RiskCalculator from "@/components/growth/RiskCalculator";

export const metadata = {
  title: "Serponado Disaster Recovery",
  description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
  robots: { index: false, follow: true } // Widget pages should not be indexed themselves, but links should be followed
};

export default function EmbedPenaltyRisiko() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        header, footer, .sticky-cta-bar, .mobile-bottom-bar, button[aria-label="Zurück zum Anfang"], nav { display: none !important; }
        body { background: transparent !important; }
        main { padding: 0 !important; margin: 0 !important; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
      `}} />
      <div className="w-full h-full bg-transparent p-4 font-sans max-w-2xl mx-auto">
        <RiskCalculator embedded={true} />
      </div>
    </>
  );
}
