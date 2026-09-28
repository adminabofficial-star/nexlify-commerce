import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const routes = [
  '', '/about', '/services', '/portfolio', '/pricing', '/blog',
  '/faq', '/testimonials', '/careers', '/contact', '/privacy-policy', '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
