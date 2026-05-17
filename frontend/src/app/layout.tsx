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

export const metadata: Metadata = {
  metadataBase: new URL('https://rossandryangroup.com'),
  title: 'Ross & Ryan Group | Beverly Hills Real Estate',
  description:
    'A residential real estate group based in Beverly Hills. Two partners, fifteen years, real reach across greater LA.',
  openGraph: {
    title: 'Ross & Ryan Group | Beverly Hills Real Estate',
    description:
      'A residential real estate group based in Beverly Hills. Two partners, fifteen years, real reach across greater LA.',
    url: 'https://rossandryangroup.com',
    siteName: 'Ross & Ryan Group',
    images: [{ url: '/rrg-logo.jpg', width: 1200, height: 900, alt: 'Ross & Ryan Group' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ross & Ryan Group | Beverly Hills Real Estate',
    description:
      'A residential real estate group based in Beverly Hills. Two partners, fifteen years, real reach across greater LA.',
    images: ['/rrg-logo.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${cormorant.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
