import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '@/constants/services';
import { BLOG_POSTS } from '@/constants/blog';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.maabhagwatidental.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static Routes
  const staticRoutes = ['', '/about', '/about-doctor', '/services', '/gallery', '/testimonials', '/faq', '/blog', '/contact', '/appointment'].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Dynamic Service Routes
  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Blog Routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
