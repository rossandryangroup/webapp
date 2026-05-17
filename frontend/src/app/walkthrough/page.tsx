import type { Metadata } from 'next';
import WalkthroughClient from './WalkthroughClient';

export const metadata: Metadata = {
  title: 'The Walkthrough',
  description:
    'Notes from inside the LA market. Neighborhood breakdowns, rate environment commentary, and the kind of context you only get walking the streets every week.',
  alternates: { canonical: 'https://rossandryangroup.com/walkthrough' },
  openGraph: {
    title: 'The Walkthrough | Ross & Ryan Group',
    description: 'Notes from inside the LA market. Neighborhoods, rates, and real context.',
    url: 'https://rossandryangroup.com/walkthrough',
    images: [
      { url: '/og-home.jpg', width: 1200, height: 630, alt: 'Ross & Ryan Group · The Walkthrough' },
    ],
  },
};

export default function WalkthroughPage() {
  return <WalkthroughClient />;
}
