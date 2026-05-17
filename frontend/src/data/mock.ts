import type { LAIconName } from '../components/LAIcons';

type Ph = 'ph-1' | 'ph-2' | 'ph-3';

export type Listing = {
  slug: string;
  addr: string;
  hood: string;
  spec: string;
  price: string;
  status: 'Active' | 'Available' | 'Sold';
  ph: Ph;
  image?: string;
  images?: string[];
  icon?: LAIconName;
  beds: string;
  baths: string;
  sqft: string;
  blurb1: string;
  blurb2: string;
  pullquote: string;
};

// Active listings sourced from the Douglas Elliman agent page for Ross Groefsema (1030383),
// scraped 2026-05-16 via scripts/scrape-elliman.mjs. Refresh by re-running the scrape
// + scripts/merge-listings.mjs, then porting the four active records here.
export const LISTINGS: Listing[] = [
  {
    slug: '2525-main-st-santa-monica',
    addr: '2525 Main St',
    hood: 'Santa Monica',
    spec: 'Commercial · 23,000 sf · Art Deco landmark',
    price: '$21.95M',
    status: 'Active',
    ph: 'ph-1',
    image:
      'https://imgproxy.elliman.com/DIBEJTU7F8sBJRZMoLTDBGKAQ1_RuFClW_Tu4B7kDYU/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F43683da4-9e21-42ba-931b-c4030523cd6e.jpg',
    images: [
      'https://imgproxy.elliman.com/DIBEJTU7F8sBJRZMoLTDBGKAQ1_RuFClW_Tu4B7kDYU/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F43683da4-9e21-42ba-931b-c4030523cd6e.jpg',
      'https://imgproxy.elliman.com/truMBQgKLvdV5kFtXj6cm_livJlZPCaVwek1kGL1liw/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F38e0ecb4-7788-41a1-abdf-fc86735abd8b.jpg',
      'https://imgproxy.elliman.com/7iFIai8q0PVgM2kzh3UjSYT8ofj8ivSukpHHKLCTcFE/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F22ebee0f-0b90-4b80-b752-11bd017b531a.jpg',
      'https://imgproxy.elliman.com/tRsGhShRoxn0gL02b-ciZWZXcU6iaYXLmUtUrBiSsUM/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F41a6776f-21a5-469b-880e-c4b3b1bd74f6.jpg',
      'https://imgproxy.elliman.com/O2eAq9R_nLNIk9EXitu84A0IiLcipnWAuddQ7AD3vNE/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F5a9db277-b918-4970-8497-6698e97ec872.jpg',
    ],
    beds: '',
    baths: '',
    sqft: '23,000 sf',
    blurb1:
      'Main on Main, in the heart of Santa Monica at Main Street and Ocean Park. Two blocks from the beach, a mile from the pier. A three-story Art Deco landmark accommodating approx. 23,000 rentable square feet with retail at grade.',
    blurb2:
      'The building has a roof deck above the penthouse, hardwood floors, and individual tenant-controlled HVAC throughout the offices. One of the most prestigious landmark buildings in Santa Monica, previously occupied by Neutrogena and AOL. Walkable to Urth Café and the Victorian.',
    pullquote: 'An Art Deco landmark on Main Street, two blocks from the beach.',
  },
  {
    slug: '0-blueridge-dr-lake-arrowhead',
    addr: '0 Blueridge Dr',
    hood: 'Lake Arrowhead',
    spec: 'Development site · 39.8 acres · 360-degree views',
    price: '$1.895M',
    status: 'Active',
    ph: 'ph-2',
    icon: 'mountains',
    beds: '',
    baths: '',
    sqft: '39.8 acres',
    blurb1:
      'A development site at the top of Lake Arrowhead, set on a private mountain ridge-line with unobstructed 360-degree views of the surrounding mountains and lake. The site comes with its own water well and full water and lake rights.',
    blurb2:
      'Surrounded by multi-million dollar estates, moments from the gated communities of Cedars Ridge and Millpond, SkyPark resort, and Lake Arrowhead Village. Two parcels (APN 0331-251-07 and APN 0331-251-08) totaling 39.8 acres. Range of options from owner-user to a trophy resort build.',
    pullquote: 'Forty acres at the top of Lake Arrowhead. The water rights come with it.',
  },
  {
    slug: '0-cumberland-dr-lake-arrowhead',
    addr: '0 Cumberland Dr',
    hood: 'Lake Arrowhead',
    spec: 'Development site · Ridge-line · Lake rights',
    price: '$1.495M',
    status: 'Active',
    ph: 'ph-3',
    icon: 'mountains',
    beds: '',
    baths: '',
    sqft: 'Lot',
    blurb1:
      'The adjacent parcel to Blueridge. Same private mountain ridge-line at the top of Lake Arrowhead, same unobstructed 360-degree views, same water well and lake rights. Bought together, the two parcels span 39.8 acres of contiguous ridge.',
    blurb2:
      "Moments from Cedars Ridge, Millpond, SkyPark, and Lake Arrowhead Village. Bought separately, this is the smaller, lower-price entry into the ridge. Bought with Blueridge, it's a single 39.8-acre estate site with no neighbor between the two builds.",
    pullquote: 'Adjacent ridgeline parcels. Build one estate or two.',
  },
  {
    slug: '208-columbia-pl-echo-park',
    addr: '208 Columbia Pl',
    hood: 'Echo Park',
    spec: '2 bd · 1 ba · 1,364 sf · Duplex',
    price: '$550K',
    status: 'Active',
    ph: 'ph-1',
    image:
      'https://imgproxy.elliman.com/U7Q41iIhkr83wNKEVXIhGpqPOZIH0Lt-J32_pYAGA88/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25622077%2F25622077_c799d1aa-b44d-4f16-8049-404e351f9b74.jpg',
    images: [
      'https://imgproxy.elliman.com/U7Q41iIhkr83wNKEVXIhGpqPOZIH0Lt-J32_pYAGA88/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25622077%2F25622077_c799d1aa-b44d-4f16-8049-404e351f9b74.jpg',
      'https://imgproxy.elliman.com/E_2QxBFtbpQYKM9L7Cdp4MZf63eSaMr8RPAfvI5K1mM/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25622077%2F25622077_52000912-9085-427e-b937-7a688ad3c34c.jpg',
      'https://imgproxy.elliman.com/kKaADi1R12ItNiCEdiEmu-SUYBzg-b-HLpriCNVzOAg/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25622077%2F25622077_73cf99c4-9dea-4efe-b58a-709a425a2ad7.jpg',
      'https://imgproxy.elliman.com/MgYJke57G7tv2QRljMy5i9HRhQxYWnDfCAoYK4aXouo/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25622077%2F25622077_5e50b2df-d724-4e59-8e9d-e973e5b00394.jpg',
      'https://imgproxy.elliman.com/6HeFEp89lGODSKzoN44xoHdAZTYaQaeIMXrlAvlkCkI/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25622077%2F25622077_b967533c-cd5a-4d18-802c-d60bc1b857bf.jpg',
    ],
    beds: '2',
    baths: '1',
    sqft: '1,364 sf',
    blurb1:
      'A 1924 East Coast style duplex in the Historic Belmont Square district of Echo Park, on a pedestrian-only walk street. Designed by David Julius Witmer. Charming row homes, lush gardens, and a private courtyard in the spirit of the historic garden apartments. Rare to find in the heart of the city.',
    blurb2:
      'The duplex at 208 and 210 Columbia is two units, each with one bedroom and one bath, ready for a full renovation. Separate utility meters, low-maintenance lot, classic duplex layout. Minutes from DTLA, Silver Lake, and Historic Filipinotown. The kind of project where a careful rebuild lands as a real piece of LA architecture again.',
    pullquote: 'A 1924 duplex on a hidden walk street in Echo Park.',
  },
];

export const NEIGHBORHOODS = ['All', 'Santa Monica', 'Lake Arrowhead', 'Echo Park'];

// Recent comps surfaced on each property detail page. Pulled from Ross's Zillow past-sales
// history (scripts/merge-listings.mjs > content/listings/listings.json > .sold), filtered to
// roughly match the listing's neighborhood + size band. Refresh by re-running the merge and
// re-picking three relevant rows per active listing.
export const RECENT_COMPS_BY_SLUG: Record<
  string,
  Array<{ addr: string; close: string; beds: string; sqft: string; price: string }>
> = {
  '2525-main-st-santa-monica': [
    { addr: '2268 30th St, Santa Monica', close: 'Aug 2021', beds: '', sqft: '', price: '$3.10M' },
    {
      addr: '612 S Catalina Ave, Redondo Beach',
      close: 'Jul 2025',
      beds: '',
      sqft: '',
      price: '$15.63M',
    },
    {
      addr: '4850 San Feliciano Dr, Woodland Hills',
      close: 'Oct 2025',
      beds: '',
      sqft: '',
      price: '$2.35M',
    },
  ],
  '0-blueridge-dr-lake-arrowhead': [
    {
      addr: '4850 San Feliciano Dr, Woodland Hills',
      close: 'Oct 2025',
      beds: '',
      sqft: '',
      price: '$2.35M',
    },
    { addr: '3744 Winford Dr, Tarzana', close: 'Jun 2024', beds: '', sqft: '', price: '$3.60M' },
    {
      addr: '1623 Larkfield Ave, Westlake Village',
      close: 'Jul 2021',
      beds: '',
      sqft: '',
      price: '$2.875M',
    },
  ],
  '0-cumberland-dr-lake-arrowhead': [
    {
      addr: '4850 San Feliciano Dr, Woodland Hills',
      close: 'Oct 2025',
      beds: '',
      sqft: '',
      price: '$2.35M',
    },
    {
      addr: '1623 Larkfield Ave, Westlake Village',
      close: 'Jul 2021',
      beds: '',
      sqft: '',
      price: '$2.875M',
    },
    {
      addr: '11534 Amanda Dr, Studio City',
      close: 'Mar 2022',
      beds: '',
      sqft: '',
      price: '$2.915M',
    },
  ],
  '208-columbia-pl-echo-park': [
    {
      addr: '1020 N Garfield Ave, Pasadena',
      close: 'Dec 2025',
      beds: '4 / 3',
      sqft: '2,160',
      price: '$1.48M',
    },
    { addr: '3641 4th Ave, Los Angeles', close: 'Apr 2025', beds: '', sqft: '', price: '$1.31M' },
    {
      addr: '1664 Elevado St, Los Angeles',
      close: 'Apr 2025',
      beds: '',
      sqft: '',
      price: '$1.65M',
    },
  ],
};

export type WalkthroughEntry = {
  slug: string;
  cat: 'Market Commentary' | 'Neighborhood Guide' | 'Property Report' | 'Lifestyle';
  title: string;
  date: string;
  read: string;
  by: 'Ross Groefsema' | 'Ryan Hirsh';
  ph: Ph;
  pullquote: string;
  image: string;
};

// Editorial imagery for the marketing surfaces. Reuses the high-resolution
// imgproxy.elliman.com photos already scraped for active listings (see
// content/listings/listings.json) so the lifestyle/cover/related cards
// carry the same production value as the property pages.
const IMG = {
  santaMonicaArtDeco:
    'https://imgproxy.elliman.com/DIBEJTU7F8sBJRZMoLTDBGKAQ1_RuFClW_Tu4B7kDYU/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F43683da4-9e21-42ba-931b-c4030523cd6e.jpg',
  santaMonicaRoofDeck:
    'https://imgproxy.elliman.com/truMBQgKLvdV5kFtXj6cm_livJlZPCaVwek1kGL1liw/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F38e0ecb4-7788-41a1-abdf-fc86735abd8b.jpg',
  santaMonicaInterior:
    'https://imgproxy.elliman.com/7iFIai8q0PVgM2kzh3UjSYT8ofj8ivSukpHHKLCTcFE/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F22ebee0f-0b90-4b80-b752-11bd017b531a.jpg',
  santaMonicaCorner:
    'https://imgproxy.elliman.com/tRsGhShRoxn0gL02b-ciZWZXcU6iaYXLmUtUrBiSsUM/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F41a6776f-21a5-469b-880e-c4b3b1bd74f6.jpg',
  santaMonicaDetail:
    'https://imgproxy.elliman.com/O2eAq9R_nLNIk9EXitu84A0IiLcipnWAuddQ7AD3vNE/quality:100/plain/https%3A%2F%2Fmedia.elliman.com%2F5a9db277-b918-4970-8497-6698e97ec872.jpg',
  ridgeline1:
    'https://imgproxy.elliman.com/1prL9N9Xy_TJ4ds58GFAj4QgfNmtBklOQJdq-TtKcA0/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25583029%2F25583029_3724d8c4-7716-4858-811f-3fee9217fb55.jpg',
  ridgeline2:
    'https://imgproxy.elliman.com/FG8iFZdOKGy7Jk6z6Z6LFiN84QW4bTwWIwzcm-b_dqY/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25583029%2F25583029_05f3dab1-83ff-46ba-bc2f-f06547170d9a.jpg',
  ridgeline3:
    'https://imgproxy.elliman.com/9B8hq9kfCjCcafjvSKOq1BkkjcwzXDTsMvkebM4o_6U/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25583029%2F25583029_2a14b681-8205-4509-8909-a61b99781455.jpg',
  ridgeline4:
    'https://imgproxy.elliman.com/c3CGsJxNdcMfdYONeRi9L4r41G-AjLcKorOdJIquh2Y/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25583029%2F25583029_6e6b425e-597e-4e7d-8b04-b480d16bf197.jpg',
  ridgeline5:
    'https://imgproxy.elliman.com/FLigPxExUzZgk_1Hmd4z1jiFPW7IuwImX2MRtTAo8z8/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25583061%2F25583061_03dc49d0-8b6e-406a-94a0-6e09f78a931b.jpg',
  ridgeline6:
    'https://imgproxy.elliman.com/dsSmuEcDQpT2_2zy2HaSMULawrFJZrSYzi2LpNAUwfc/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25583061%2F25583061_07653e16-887e-4e12-8c05-b2db1e4a6645.jpg',
  walkStreet:
    'https://imgproxy.elliman.com/U7Q41iIhkr83wNKEVXIhGpqPOZIH0Lt-J32_pYAGA88/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25622077%2F25622077_c799d1aa-b44d-4f16-8049-404e351f9b74.jpg',
  walkStreetCourtyard:
    'https://imgproxy.elliman.com/E_2QxBFtbpQYKM9L7Cdp4MZf63eSaMr8RPAfvI5K1mM/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25622077%2F25622077_52000912-9085-427e-b937-7a688ad3c34c.jpg',
  walkStreetInterior:
    'https://imgproxy.elliman.com/kKaADi1R12ItNiCEdiEmu-SUYBzg-b-HLpriCNVzOAg/quality:100/plain/https%3A%2F%2Fmediaservice.themls.com%2Flarge%2F25622077%2F25622077_73cf99c4-9dea-4efe-b58a-709a425a2ad7.jpg',
  // Wikimedia LA landmarks (already proven inside article markdown).
  greystone: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Greystone_Mansion.JPG',
  bhNight:
    'https://upload.wikimedia.org/wikipedia/commons/6/6f/Downtown_Beverly_Hills_At_Night.jpg',
  marinaAerial:
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Marina_Del_Rey_and_Venice_Beach_aerial_view.jpg',
  marinaSouth:
    'https://upload.wikimedia.org/wikipedia/commons/e/e9/Marina_Del_Rey_Looking_South.jpg',
} as const;

export const EDITORIAL_IMAGES = IMG;

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
    image: IMG.greystone,
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
    image: IMG.marinaAerial,
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
    image: IMG.santaMonicaInterior,
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
    image: IMG.ridgeline2,
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
    image: IMG.bhNight,
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
    image: IMG.marinaSouth,
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
    image: IMG.santaMonicaArtDeco,
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
    image: IMG.walkStreet,
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
    image: IMG.santaMonicaRoofDeck,
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
