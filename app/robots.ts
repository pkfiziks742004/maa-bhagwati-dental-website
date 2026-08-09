import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://mbdentaljewar.in';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Hide API and potential admin routes from bots
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
