"use client";

import { useState, useId } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { pickVariant } from "@/lib/textRotation";

interface FAQAccordionProps {
  question: string;
  answer: string;
  isDarkerBg?: boolean;
}

const callVariants = [
  "0800-SERP-SOS anrufen",
  "Unter 0800-SERP-SOS kontaktieren",
  "Direkt anrufen: 0800-SERP-SOS",
  "Kostenlose Fachberatung: 0800-SERP-SOS",
  "Jetzt unter 0800-SERP-SOS anfragen",
  "Techniker kontaktieren: 0800-SERP-SOS",
  "Schnelle Hilfe: 0800-SERP-SOS",
  "Rückfragen unter 0800-SERP-SOS",
  "Persönliche Hilfe: 0800-SERP-SOS",
  "Zum Festpreis anrufen: 0800-SERP-SOS",
  "0800-SERP-SOS und Jetzt beraten lassen",
  "Notrufnummer: 0800-SERP-SOS",
  "Experten-Hotline: 0800-SERP-SOS",
  "Telefonische Auskunft: 0800-SERP-SOS",
  "Sofort-Hilfe anrufen: 0800-SERP-SOS"
];

export default function FAQAccordion({ question, answer, isDarkerBg = false }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const buttonId = `faq-btn-${uniqueId}`;
  const panelId = `faq-panel-${uniqueId}`;

  // Deterministic link text to solve duplicate anchor text issues via SEO audit
  const linkText = pickVariant(callVariants, question);

  return (
    <div className={`rounded-[var(--radius-12)] ${isDarkerBg ? 'bg-[var(--surface-secondary)]' : 'bg-surface-elevated'} overflow-hidden transition-all duration-300 ease-out mb-6 shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)]`}>
      <div>
        <button
          id={buttonId}
          onClick={() => setIsOpen(!isOpen)}
          className="faq-hover-accent w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 outline-none focus-visible:ring-2 focus-visible:ring-[var(--value-primary)] rounded-[var(--radius-12)]"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="flex gap-3 text-lg font-bold text-[color:var(--text-primary)]">
            <HelpCircle className="h-6 w-6 text-[var(--value-icon-color)] shrink-0" aria-hidden="true" />
            {question}
          </span>
          <span className={`shrink-0 text-[var(--value-icon-color)] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`} aria-hidden="true">
            <Plus className="h-6 w-6" />
          </span>
        </button>
      </div>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-out ${isOpen ?"grid-rows-[1fr] opacity-100" :"grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 flex flex-col gap-[var(--space-4)]">
            <p className="text-base text-[color:var(--text-secondary)] leading-[1.75]">
              {answer}
            </p>
            <div className="mt-2 text-base font-medium text-[color:var(--text-tertiary)] pt-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <span>Direkte Rückfrage?</span>
              <a href="tel:0800-SERP-SOS" className="inline-flex items-center text-[var(--color-red-500)] hover:underline font-bold">
                {linkText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
