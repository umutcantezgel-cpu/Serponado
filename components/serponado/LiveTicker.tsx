'use client';
import { useState, useEffect } from 'react';

export default function LiveTicker() {
  const [messages] = useState([
    "+++ EILMELDUNG +++ Erhöhte Rank-Tracker-Volatilität gemessen +++",
    "+++ WARNUNG +++ Serponado trifft DACH-Region mit Stärke 8 +++",
    "+++ UPDATE +++ Pogo-Sticking Raten steigen massiv +++",
    "+++ ALERT +++ Map-Pack Kollaps in Metropolregionen +++"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="bg-black text-red-500 font-mono text-sm sm:text-base py-2 px-4 border-b-2 border-red-600 overflow-hidden relative w-full flex items-center">
      <div className="animate-pulse w-3 h-3 bg-red-600 rounded-full mr-3 shrink-0" />
      <span className="whitespace-nowrap truncate animate-fade-in transition-opacity duration-500">
        {messages[currentIndex]}
      </span>
    </div>
  );
}
