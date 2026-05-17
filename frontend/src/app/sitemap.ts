import type { MetadataRoute } from 'next';
import { LISTINGS, WALKTHROUGH } from '../data/mock';

const SITE = 'https://rossandryangroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/properties`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE}/walkthrough`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
  const propertyRoutes: MetadataRoute.Sitemap = LISTINGS.map((l) => ({
    url: `${SITE}/properties/${l.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
  const walkthroughRoutes: MetadataRoute.Sitemap = WALKTHROUGH.map((w) => ({
    url: `${SITE}/walkthrough/${w.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  return [...staticRoutes, ...propertyRoutes, ...walkthroughRoutes];
}
