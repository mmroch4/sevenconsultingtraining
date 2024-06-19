import { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Seven Consulting | Liderando com segurança há anos',
    short_name: 'Seven Consulting',
    description:
      'Desenvolvendo soluções através de uma logística eficiente door-to-door com uma equipe de profissionais com mais de 20 anos de experiência no mercado',
    start_url: BASE_URL,
    display: 'standalone',
    lang: 'pt-BR',
    background_color: '#fff',
    categories: [
      'education',
      'environment',
      'consulting',
      'segurança e saúde no trabalho',
      'educação',
      'consultoria de meio ambiente',
      'consultoria',
      'segurança',
      'saúde',
      'trabalho',
      'treinamentos',
      'capacitação',
      'normas regulamentadoras',
      'nr 5',
      'nr 6',
      'nr 11',
      'nr 12',
      'nr 15',
      'nr 17',
      'nr 18',
      'nr 23',
      'nr 33',
      'nr 34',
      'nr 35',
      'nr 37',
    ],
    theme_color: '#14b8a6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    related_applications: [{ platform: 'web', url: BASE_URL }],
  };
}
