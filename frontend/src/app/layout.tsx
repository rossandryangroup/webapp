import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '../components/ThemeProvider';
import './globals.css';

const manrope = localFont({
  src: './fonts/Manrope-Variable.ttf',
  variable: '--font-sans',
  display: 'swap',
  weight: '200 800',
});

const cormorant = localFont({
  src: './fonts/CormorantGaramond-Variable.ttf',
  variable: '--font-serif',
  display: 'swap',
  weight: '300 700',
});

const SITE = 'https://rossandryangroup.com';
const TITLE_DEFAULT = 'Ross & Ryan Group · Beverly Hills + Greater LA Real Estate';
const DESCRIPTION =
  'Quiet, considered residential real estate in Beverly Hills and greater LA. Two partners. Fifteen years. The kind of representation that picks up on Sunday.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: TITLE_DEFAULT, template: '%s | Ross & Ryan Group' },
  description: DESCRIPTION,
  keywords: [
    'Beverly Hills real estate',
    'Beverly Hills realtor',
    'Los Angeles luxury real estate',
    'Douglas Elliman Beverly Hills',
    'Westside LA real estate',
    'Santa Monica realtor',
    'Trousdale real estate',
    'Ross Groefsema',
    'Ryan Hirsh',
  ],
  authors: [{ name: 'Ross & Ryan Group' }],
  alternates: { canonical: SITE },
  openGraph: {
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    url: SITE,
    siteName: 'Ross & Ryan Group',
    images: [
      { url: '/og-home.jpg', width: 1200, height: 630, alt: 'Ross & Ryan Group · Beverly Hills' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: ['/og-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Ross & Ryan Group',
  alternateName: 'RRG',
  url: SITE,
  logo: `${SITE}/logo/rrg-monogram-dark.png`,
  image: `${SITE}/og-home.jpg`,
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '150 El Camino Drive',
    addressLocality: 'Beverly Hills',
    addressRegion: 'CA',
    postalCode: '90212',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Beverly Hills' },
    { '@type': 'City', name: 'Santa Monica' },
    { '@type': 'City', name: 'Los Angeles' },
  ],
  telephone: '+1-310-595-3888',
  sameAs: ['https://www.elliman.com/agent/ross-groefsema/1030383'],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Douglas Elliman Real Estate',
    identifier: 'CalDRE #01947727',
  },
  employee: [
    {
      '@type': 'Person',
      name: 'Ross Groefsema',
      jobTitle: 'Founding Partner',
      identifier: 'CalDRE #01915056',
      telephone: '+1-310-795-0943',
      email: 'ross@rossandryangroup.com',
      sameAs: ['https://www.elliman.com/agent/ross-groefsema/1030383'],
    },
    { '@type': 'Person', name: 'Ryan Hirsh', jobTitle: 'Founding Partner' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${manrope.variable} ${cormorant.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('rrg-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
