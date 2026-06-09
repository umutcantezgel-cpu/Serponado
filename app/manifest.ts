import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Coday UG (haftungsbeschränkt) — Serponado Threat Intelligence',
    short_name: 'Serponado by Coday',
    description: 'Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#1a7a8a', // OKLCh primary brand
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  }
}
