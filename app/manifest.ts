import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Maa Bhagwati Dental Care',
    short_name: 'MB Dental',
    description: 'Premium dental clinic offering advanced laser and cosmodent treatments in New Delhi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0047AB',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // In a real production scenario, you would generate 192x192 and 512x512 PNGs and place them in public/
    ],
  };
}
