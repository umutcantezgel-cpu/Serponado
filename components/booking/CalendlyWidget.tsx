"use client";

import { AlertCircle } from "lucide-react";

const CALENDLY_DEFAULT_URL = "https://calendly.com/serponadodienst-wz/sicherheitsberatung?timezone=€pe/Berlin";

interface CalendlyWidgetProps {
  /** The full Calendly URL. Falls back to the default booking URL if not provided. */
  url?: string;
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  // Use the provided URL or fall back to the hardcoded default
  const calendlyUrl = url && url.length > 0 ? url : CALENDLY_DEFAULT_URL;

  return (
    <div
      className="w-full relative h-[600px] md:h-[700px]"
      data-testid="calendly-widget"
    >
      <iframe
        src={calendlyUrl}
        title="Terminbuchung Serponado Taskforce Serponado"
        className="w-full h-full rounded-2xl border-none"
        allow="payment"
        loading="lazy"
      />
    </div>
  );
}
