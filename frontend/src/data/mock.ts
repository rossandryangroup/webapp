type Ph = 'ph-1' | 'ph-2' | 'ph-3';

export type Listing = {
  slug: string;
  addr: string;
  hood: string;
  spec: string;
  price: string;
  status: 'Active' | 'Available';
  ph: Ph;
  beds: string;
  baths: string;
  sqft: string;
  blurb1: string;
  blurb2: string;
  pullquote: string;
};

export const LISTINGS: Listing[] = [
  {
    slug: '901-rexford-drive',
    addr: '901 Rexford Drive',
    hood: 'Beverly Hills Flats',
    spec: '5 bd · 5.5 ba · 6,200 sf',
    price: '$8.495M',
    status: 'Active',
    ph: 'ph-1',
    beds: '5',
    baths: '5.5',
    sqft: '6,200 sf',
    blurb1:
      "Placeholder editorial copy. This reads like a magazine piece, not a listing description. The property's character leads, the long driveway, the library with original paneling, the kitchen that gets morning light from the east. It does not say 'stunning' or 'one of a kind.'",
    blurb2:
      'Placeholder second paragraph. More editorial prose, the neighborhood context, the specific block, the pocket within Beverly Hills Flats that makes this address work.',
    pullquote:
      "The proportions are right in a way a floor plan can't fully communicate. You feel it when you walk the main level.",
  },
  {
    slug: '1240-shadybrook-drive',
    addr: '1240 Shadybrook Drive',
    hood: 'Bel Air',
    spec: '4 bd · 4 ba · 3,800 sf',
    price: '$4.250M',
    status: 'Active',
    ph: 'ph-2',
    beds: '4',
    baths: '4',
    sqft: '3,800 sf',
    blurb1:
      'A quieter Bel Air block, set back from the road. The bones are 1960s, updated thoughtfully through the 2010s. South-light primary suite, garden that holds shade through August.',
    blurb2:
      'Walkable to the Bel Air Country Club. The street keeps low traffic year round, which matters here more than the square footage on the listing sheet.',
    pullquote: 'Not the trophy house on the block. Quietly the best built one on it.',
  },
  {
    slug: '2104-stradella-road',
    addr: '2104 Stradella Road',
    hood: 'Bel Air',
    spec: '6 bd · 6.5 ba · 7,400 sf',
    price: '$12.75M',
    status: 'Available',
    ph: 'ph-3',
    beds: '6',
    baths: '6.5',
    sqft: '7,400 sf',
    blurb1:
      'East Gate Bel Air. A long driveway, mature olive trees, and a main floor that genuinely lives. Built in 2018, finished in materials that are aging well rather than dating.',
    blurb2:
      'The lot is the story. Flat, usable, with a pool deck oriented to catch afternoon light without baking the interior. Rare on this part of Stradella.',
    pullquote: 'The kind of lot that decides a house. This one decided well.',
  },
  {
    slug: '312-delfern-drive',
    addr: '312 Delfern Drive',
    hood: 'Holmby Hills',
    spec: '7 bd · 8 ba · 9,200 sf',
    price: '$14.9M',
    status: 'Active',
    ph: 'ph-1',
    beds: '7',
    baths: '8',
    sqft: '9,200 sf',
    blurb1:
      'A formal Holmby compound, hedged and gated. Cary Grant lived two doors down. The trees on this block were planted before the house was built, and they show.',
    blurb2:
      'Single-story footprint with a tucked second floor. Easier to live in than the square footage suggests.',
    pullquote: 'Holmby done correctly. Restraint instead of theater.',
  },
  {
    slug: '4820-vanalden-ave',
    addr: '4820 Vanalden Ave',
    hood: 'Tarzana',
    spec: '3 bd · 3 ba · 2,400 sf',
    price: '$1.895M',
    status: 'Active',
    ph: 'ph-2',
    beds: '3',
    baths: '3',
    sqft: '2,400 sf',
    blurb1:
      'South of the boulevard, on a flat lot with a real backyard. The 405 is twenty minutes off-peak, which is the point.',
    blurb2:
      'Renovated in 2022, mostly correctly. Kitchen is a strong layout. Primary bath is the only room we would touch.',
    pullquote: 'A house that does the basic things right. Underrated in this market.',
  },
  {
    slug: '2750-manning-ave',
    addr: '2750 Manning Ave',
    hood: 'Santa Monica',
    spec: '4 bd · 3.5 ba · 2,900 sf',
    price: '$3.45M',
    status: 'Active',
    ph: 'ph-3',
    beds: '4',
    baths: '3.5',
    sqft: '2,900 sf',
    blurb1:
      'Sunset Park. A walkable Santa Monica grid with mature trees and an actual sidewalk culture.',
    blurb2:
      'Spanish revival, 1928, with the original tile work intact in two bathrooms. Renovations done in keeping with the period.',
    pullquote: 'Santa Monica that still feels like Santa Monica.',
  },
  {
    slug: '11949-goshen-ave',
    addr: '11949 Goshen Ave',
    hood: 'Brentwood',
    spec: '3 bd · 2 ba · 1,680 sf',
    price: '$1.595M',
    status: 'Active',
    ph: 'ph-1',
    beds: '3',
    baths: '2',
    sqft: '1,680 sf',
    blurb1:
      'Brentwood Glen. Smaller footprint, larger lot than the neighbors. The kind of address you keep.',
    blurb2: 'The schools are the long-run number here. The house is solid and updatable.',
    pullquote: 'Entry Brentwood that still has room to grow.',
  },
];

export const NEIGHBORHOODS = [
  'All',
  'Beverly Hills',
  'Bel Air',
  'Holmby Hills',
  'Santa Monica',
  'Brentwood',
];

export type WalkthroughEntry = {
  slug: string;
  cat: 'Market Commentary' | 'Neighborhood Guide' | 'Property Report' | 'Lifestyle';
  title: string;
  date: string;
  read: string;
  by: 'Ross Groefsema' | 'Ryan Hirsh';
  ph: Ph;
  pullquote: string;
};

export const WALKTHROUGH: WalkthroughEntry[] = [
  {
    slug: 'spring-2026-rate-environment',
    cat: 'Market Commentary',
    title: 'Spring 2026 rate environment: what it actually means for buyers',
    date: 'May 12, 2026',
    read: '4 min',
    by: 'Ross Groefsema',
    ph: 'ph-1',
    pullquote:
      'The buyers who moved in February are going to look smart by September. The ones who waited for certainty are going to keep waiting.',
  },
  {
    slug: 'venice-still-most-interesting',
    cat: 'Neighborhood Guide',
    title: 'Why Venice stays the most interesting block in LA',
    date: 'Apr 28, 2026',
    read: '6 min',
    by: 'Ryan Hirsh',
    ph: 'ph-2',
    pullquote:
      "Venice keeps its character because the people who live there fight for it. That fight isn't going away.",
  },
  {
    slug: 'trousdale-mid-century',
    cat: 'Property Report',
    title: 'Trousdale Estates: the case for mid-century over new construction',
    date: 'Apr 14, 2026',
    read: '5 min',
    by: 'Ross Groefsema',
    ph: 'ph-3',
    pullquote:
      "The view lots in Trousdale aren't being made anymore. The houses on them can be improved.",
  },
  {
    slug: 'palm-springs-october',
    cat: 'Lifestyle',
    title: 'Palm Springs in early October. Our favorite long weekend.',
    date: 'Mar 30, 2026',
    read: '5 min',
    by: 'Ryan Hirsh',
    ph: 'ph-1',
    pullquote: 'October is the month the desert remembers what it is supposed to be.',
  },
  {
    slug: 'beverly-hills-inventory-2026',
    cat: 'Market Commentary',
    title: 'What inventory in Beverly Hills actually looks like right now',
    date: 'Mar 12, 2026',
    read: '3 min',
    by: 'Ross Groefsema',
    ph: 'ph-2',
    pullquote:
      'Thin inventory, slower closes, more honest pricing. A healthier market than the headlines suggest.',
  },
  {
    slug: 'marina-del-rey-waterfront',
    cat: 'Neighborhood Guide',
    title: 'Marina del Rey: the quiet case for waterfront living in LA',
    date: 'Feb 28, 2026',
    read: '6 min',
    by: 'Ryan Hirsh',
    ph: 'ph-3',
    pullquote:
      'Waterfront in LA is harder to find than it sounds. Marina is one of the few places it still exists at scale.',
  },
  {
    slug: 'off-market-deals',
    cat: 'Property Report',
    title: 'Off-market deals: what they are and when they make sense',
    date: 'Feb 10, 2026',
    read: '4 min',
    by: 'Ross Groefsema',
    ph: 'ph-1',
    pullquote: 'Off-market is a tool, not a strategy. When it fits, it fits well.',
  },
  {
    slug: 'culver-city-tuesday',
    cat: 'Lifestyle',
    title: 'Culver City on a Tuesday. What it actually looks like to live there.',
    date: 'Jan 22, 2026',
    read: '5 min',
    by: 'Ryan Hirsh',
    ph: 'ph-2',
    pullquote: 'Tuesday is the day a neighborhood tells you the truth about itself.',
  },
  {
    slug: 'year-end-2025-recap',
    cat: 'Market Commentary',
    title: 'Year-end 2025 recap: what held, what moved, what surprised us.',
    date: 'Dec 18, 2025',
    read: '7 min',
    by: 'Ross Groefsema',
    ph: 'ph-3',
    pullquote:
      'A year of patient money winning quietly while loud money waited for a signal that never came.',
  },
];

export const WALKTHROUGH_CATS = [
  'All',
  'Market Commentary',
  'Neighborhood Guide',
  'Property Report',
  'Lifestyle',
];

export function getListing(slug: string) {
  return LISTINGS.find((l) => l.slug === slug);
}
export function getWalkthrough(slug: string) {
  return WALKTHROUGH.find((w) => w.slug === slug);
}
