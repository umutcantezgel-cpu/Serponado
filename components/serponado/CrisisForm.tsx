'use client';

import { useState } from 'react';
import { ShieldCheck, Loader2 } from 'lucide-react';

export default function CrisisForm({ sourceSlug = "unknown" }: { sourceSlug?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const url = formData.get('url');
    const email = formData.get('email');

    // Simulate validation and server action
    try {
      if (!url || !email || !String(url).includes('.')) {
        throw new Error('Bitte geben Sie eine gültige Domain und E-Mail ein.');
      }
      
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API delay
      setScore(Math.floor(Math.random() * 60) + 40);
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Ein Fehler ist aufgetreten.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-[#111] border border-green-500/30 rounded-xl p-8 text-center" id="crisis-form">
        <ShieldCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Erfolgreich übermittelt!</h3>
        <h3 className="text-xl font-bold text-red-500 mb-2">Ihr Visibility Loss Score: {score}%</h3>
        <p className="text-gray-400">
          Unser Notfall-Team analysiert die Vektordaten Ihrer Domain und meldet sich innerhalb von 30 Minuten mit dem Serponado-Recovery-Protokoll.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden" id="crisis-form">
      {/* Decorative radar sweep bg */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Serponado Notfall-Analyse</h3>
      <p className="text-gray-400 text-sm mb-6 relative z-10">
        Leidet Ihre Domain unter Rankingverlust? Wir scannen den Index auf toxische Pogo-Sticking-Muster und eE-A-T Disruptionen.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-1">Betroffene Domain</label>
          <input 
            type="text" 
            id="url" 
            name="url" 
            placeholder="https://www.ihredomain.de" 
            className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Kontakt E-Mail (für das Analyse-Protokoll)</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="ceo@ihredomain.de" 
            className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
            required
          />
        </div>

        <input type="hidden" name="source" value={sourceSlug} />

        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded transition-all mt-4 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] disabled:opacity-70"
        >
          {isSubmitting ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Analyse initialisieren...</>
          ) : (
            'Kostenlose Erstanalyse anfordern'
          )}
        </button>

        <p className="text-gray-500 text-xs mt-4 text-center relative z-10">
          Betrieben von <strong>Coday UG (haftungsbeschränkt)</strong> — <a href="https://codayweb.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">codayweb.de</a>
        </p>
      </form>
    </div>
  );
}
