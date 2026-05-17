import type { Metadata } from 'next';
import PropertiesClient from './PropertiesClient';

export const metadata: Metadata = {
  title: 'Active Listings',
  description:
    'Current Ross & Ryan Group listings across Beverly Hills, Santa Monica, Trousdale, and greater LA. Architectural homes, view lots, and curated off-market opportunities.',
  alternates: { canonical: 'https://rossandryangroup.com/properties' },
  openGraph: {
    title: 'Active Listings | Ross & Ryan Group',
    description: 'Current Ross & Ryan Group listings across Beverly Hills and greater LA.',
    url: 'https://rossandryangroup.com/properties',
    images: [
      { url: '/og-home.jpg', width: 1200, height: 630, alt: 'Ross & Ryan Group · Active Listings' },
    ],
  },
};

export default function PropertiesPage() {
  return <PropertiesClient />;
}
