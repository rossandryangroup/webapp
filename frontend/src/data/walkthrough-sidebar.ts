import type { LAIconName } from '../components/LAIcons';

type SidebarStat = { label: string; value: string };

export type SidebarConfig = {
  icon: LAIconName;
  stats: SidebarStat[];
  marker: string;
};

export const SIDEBAR: Record<string, SidebarConfig> = {
  'spring-2026-rate-environment': {
    icon: 'city',
    marker: 'BEVERLY HILLS · 90210',
    stats: [
      { label: 'Median, April 2026', value: '$5.7M' },
      { label: 'Days on market', value: '68' },
      { label: 'Sale to list', value: '91.4%' },
      { label: 'Cash share, $8M+', value: '~62%' },
    ],
  },
  'venice-still-most-interesting': {
    icon: 'venice',
    marker: 'VENICE · 90291',
    stats: [
      { label: 'Canals actives', value: '14' },
      { label: 'Canals median', value: '$4.2M' },
      { label: 'Walk-street actives', value: '8' },
      { label: 'East of Lincoln median', value: '$2.7M' },
    ],
  },
  'trousdale-mid-century': {
    icon: 'beverly-hills',
    marker: 'TROUSDALE ESTATES',
    stats: [
      { label: 'Total lots', value: '410' },
      { label: 'Restoration range', value: '$9M to 15M' },
      { label: 'New-build range', value: '$18M to 30M' },
      { label: 'Build years', value: '1957 to 1965' },
    ],
  },
  'palm-springs-october': {
    icon: 'mountains',
    marker: 'COACHELLA VALLEY · 92262',
    stats: [
      { label: 'Day high', value: '~85°F' },
      { label: 'Night low', value: '~55°F' },
      { label: 'Fall Preview', value: 'Oct 16 to 19' },
      { label: '2025 YoY median', value: '+8%' },
    ],
  },
  'beverly-hills-inventory-2026': {
    icon: 'beverly-hills',
    marker: 'BEVERLY HILLS · 90210',
    stats: [
      { label: 'Active listings (90210)', value: '133' },
      { label: 'March new listings', value: '31' },
      { label: 'Median, April 2026', value: '$5.7M' },
      { label: 'YoY median (March)', value: '+29.4%' },
    ],
  },
  'marina-del-rey-waterfront': {
    icon: 'malibu',
    marker: 'MARINA DEL REY · 90292',
    stats: [
      { label: 'Peninsula actives', value: '9' },
      { label: 'Peninsula median', value: '$2.91M' },
      { label: 'Median DOM (2025)', value: '38' },
      { label: 'Drive to LAX', value: '15 min' },
    ],
  },
  'off-market-deals': {
    icon: 'palms',
    marker: 'WESTSIDE LUXURY',
    stats: [
      { label: '2025 off-market share', value: '~18%' },
      { label: 'Typical price gap vs MLS', value: '3 to 7 pts' },
      { label: 'Our share off-market', value: '~25%' },
      { label: 'Best fit', value: 'hard timing constraint' },
    ],
  },
  'culver-city-tuesday': {
    icon: 'city',
    marker: 'CULVER CITY · 90232',
    stats: [
      { label: 'Mid-century band', value: '$2.1M to 2.6M' },
      { label: 'School district', value: 'CCUSD (separate)' },
      { label: 'Drive to LAX (Tue AM)', value: '12 to 15 min' },
      { label: 'Drive to Santa Monica', value: '15 min' },
    ],
  },
  'year-end-2025-recap': {
    icon: 'ocean',
    marker: 'WESTSIDE · 2025',
    stats: [
      { label: 'BH 2025 median', value: '$5.7M' },
      { label: 'BH YoY', value: '+4.1%' },
      { label: 'BH DOM (avg)', value: '68' },
      { label: 'Sale-to-list (Westside)', value: '91 to 93%' },
    ],
  },
};
