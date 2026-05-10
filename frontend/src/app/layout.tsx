import type { Metadata } from 'next';
import { DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-body-next',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-display-next',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rossandryangroup.com'),
  title: 'Ross & Ryan Group | Beverly Hills Luxury Real Estate',
  description:
    'Top-producing agents at Douglas Elliman, specializing in luxury residential and commercial properties across Los Angeles.',
  openGraph: {
    title: 'Ross & Ryan Group | Beverly Hills Luxury Real Estate',
    description:
      'Top-producing agents at Douglas Elliman, specializing in luxury residential and commercial properties across Los Angeles.',
    url: 'https://rossandryangroup.com',
    siteName: 'Ross & Ryan Group',
    images: [{ url: '/rrg-logo.jpg', width: 1200, height: 900, alt: 'Ross & Ryan Group' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ross & Ryan Group | Beverly Hills Luxury Real Estate',
    description:
      'Top-producing agents at Douglas Elliman, specializing in luxury residential and commercial properties across Los Angeles.',
    images: ['/rrg-logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
