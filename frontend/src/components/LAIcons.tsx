import type { CSSProperties } from 'react';

type IconProps = { size?: number; color?: string; style?: CSSProperties };

const D = 'currentColor';

function HollywoodSign({ size = 220, color = D, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      width={size}
      height={(size * 200) / 320}
      style={style}
      aria-hidden="true"
    >
      <title>Hollywood Sign over the hills</title>
      <path
        d="M0 170 L40 140 L80 155 L130 110 L180 145 L230 95 L280 130 L320 115 L320 200 L0 200 Z"
        fill={color}
        opacity="0.08"
      />
      <path
        d="M0 170 L40 140 L80 155 L130 110 L180 145 L230 95 L280 130 L320 115"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
      />
      <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="square">
        <rect x="60" y="60" width="8" height="44" />
        <rect x="78" y="60" width="8" height="44" />
        <rect x="96" y="60" width="8" height="44" />
        <rect x="114" y="60" width="8" height="44" />
        <rect x="132" y="60" width="8" height="44" />
        <rect x="150" y="60" width="8" height="44" />
        <rect x="168" y="60" width="8" height="44" />
        <rect x="186" y="60" width="8" height="44" />
        <rect x="204" y="60" width="8" height="44" />
      </g>
      <g fontFamily="serif" fontSize="11" letterSpacing="3" fill={color} textAnchor="middle">
        <text x="64" y="82">
          H
        </text>
        <text x="82" y="82">
          O
        </text>
        <text x="100" y="82">
          L
        </text>
        <text x="118" y="82">
          L
        </text>
        <text x="136" y="82">
          Y
        </text>
        <text x="154" y="82">
          W
        </text>
        <text x="172" y="82">
          O
        </text>
        <text x="190" y="82">
          O
        </text>
        <text x="208" y="82">
          D
        </text>
      </g>
    </svg>
  );
}

function VeniceSign({ size = 220, color = D, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      width={size}
      height={(size * 200) / 320}
      style={style}
      aria-hidden="true"
    >
      <title>Venice arched sign</title>
      <g fill="none" stroke={color} strokeWidth="1.5">
        <line x1="60" y1="180" x2="60" y2="120" />
        <line x1="260" y1="180" x2="260" y2="120" />
        <path d="M60 120 Q160 30 260 120" />
        <path d="M60 130 Q160 45 260 130" />
      </g>
      <g fontFamily="serif" fontSize="22" letterSpacing="6" fill={color} textAnchor="middle">
        <text x="160" y="95">
          VENICE
        </text>
      </g>
      <g fill={color}>
        <circle cx="80" cy="118" r="2.5" />
        <circle cx="110" cy="92" r="2.5" />
        <circle cx="160" cy="78" r="2.5" />
        <circle cx="210" cy="92" r="2.5" />
        <circle cx="240" cy="118" r="2.5" />
      </g>
      <line x1="20" y1="180" x2="300" y2="180" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

function BeverlyHillsShield({ size = 220, color = D, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      width={size}
      height={(size * 200) / 320}
      style={style}
      aria-hidden="true"
    >
      <title>Beverly Hills shield with palms</title>
      <g fill="none" stroke={color} strokeWidth="1.5">
        <path d="M160 30 L240 50 L240 110 Q240 160 160 180 Q80 160 80 110 L80 50 Z" />
        <path d="M160 44 L226 60 L226 110 Q226 150 160 168 Q94 150 94 110 L94 60 Z" />
      </g>
      <text
        x="160"
        y="100"
        fontFamily="serif"
        fontSize="32"
        fontStyle="italic"
        fill={color}
        textAnchor="middle"
      >
        BH
      </text>
      <text
        x="160"
        y="128"
        fontFamily="sans-serif"
        fontSize="7"
        letterSpacing="3"
        fill={color}
        textAnchor="middle"
      >
        BEVERLY HILLS
      </text>
      <g stroke={color} strokeWidth="1.2" fill="none">
        <path d="M30 180 Q34 160 36 140 M36 140 Q24 138 22 130 M36 140 Q48 138 50 130 M36 140 Q32 130 28 124 M36 140 Q40 130 44 124" />
        <path d="M290 180 Q286 160 284 140 M284 140 Q272 138 270 130 M284 140 Q296 138 298 130 M284 140 Q280 130 276 124 M284 140 Q288 130 292 124" />
      </g>
      <line x1="0" y1="190" x2="320" y2="190" stroke={color} strokeWidth="0.6" />
    </svg>
  );
}

function MalibuPier({ size = 220, color = D, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      width={size}
      height={(size * 200) / 320}
      style={style}
      aria-hidden="true"
    >
      <title>Malibu pier over the Pacific</title>
      <g fill="none" stroke={color} strokeWidth="1">
        <path d="M0 80 Q60 70 120 78 T240 76 T320 80" opacity="0.5" />
        <path d="M0 90 Q80 84 160 88 T320 90" opacity="0.4" />
      </g>
      <g fill="none" stroke={color} strokeWidth="1.4">
        <line x1="0" y1="130" x2="260" y2="130" />
        <line x1="20" y1="130" x2="20" y2="170" />
        <line x1="60" y1="130" x2="60" y2="170" />
        <line x1="100" y1="130" x2="100" y2="170" />
        <line x1="140" y1="130" x2="140" y2="170" />
        <line x1="180" y1="130" x2="180" y2="170" />
        <line x1="220" y1="130" x2="220" y2="170" />
        <rect x="230" y="108" width="36" height="22" />
        <line x1="240" y1="130" x2="240" y2="170" />
      </g>
      <g fill={color}>
        <circle cx="248" cy="118" r="1.5" />
      </g>
      <g fill="none" stroke={color} strokeWidth="0.8" opacity="0.7">
        <path d="M0 175 Q20 170 40 174 T80 174 T120 174 T160 174 T200 174 T240 174 T280 174 T320 174" />
        <path d="M0 184 Q30 180 60 183 T120 183 T180 183 T240 183 T320 183" />
        <path d="M0 192 Q40 189 80 191 T160 191 T240 191 T320 191" />
      </g>
    </svg>
  );
}

function PalmRow({ size = 220, color = D, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      width={size}
      height={(size * 200) / 320}
      style={style}
      aria-hidden="true"
    >
      <title>Row of palms</title>
      <line x1="0" y1="180" x2="320" y2="180" stroke={color} strokeWidth="0.8" />
      {[40, 100, 160, 220, 280].map((x, i) => (
        <g key={x} stroke={color} strokeWidth="1.4" fill="none">
          <path d={`M${x} 180 Q${x + (i % 2 === 0 ? 2 : -2)} 130 ${x} 70`} />
          <path d={`M${x} 70 Q${x - 18} 60 ${x - 28} 50`} />
          <path d={`M${x} 70 Q${x + 18} 60 ${x + 28} 50`} />
          <path d={`M${x} 70 Q${x - 14} 78 ${x - 26} 80`} />
          <path d={`M${x} 70 Q${x + 14} 78 ${x + 26} 80`} />
          <path d={`M${x} 70 Q${x - 4} 56 ${x - 8} 42`} />
          <path d={`M${x} 70 Q${x + 4} 56 ${x + 8} 42`} />
          <circle cx={x} cy="70" r="3" fill={color} />
        </g>
      ))}
    </svg>
  );
}

function MountainRidge({ size = 220, color = D, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      width={size}
      height={(size * 200) / 320}
      style={style}
      aria-hidden="true"
    >
      <title>San Gabriel ridge</title>
      <path
        d="M0 170 L40 130 L70 145 L110 95 L150 130 L200 80 L240 120 L290 100 L320 130 L320 200 L0 200 Z"
        fill={color}
        opacity="0.12"
      />
      <path
        d="M0 170 L40 130 L70 145 L110 95 L150 130 L200 80 L240 120 L290 100 L320 130"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
      />
      <path
        d="M0 185 L60 165 L120 175 L180 155 L240 170 L320 158"
        fill="none"
        stroke={color}
        strokeWidth="1"
        opacity="0.7"
      />
      <circle cx="260" cy="40" r="14" fill="none" stroke={color} strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

function OceanWave({ size = 220, color = D, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      width={size}
      height={(size * 200) / 320}
      style={style}
      aria-hidden="true"
    >
      <title>Pacific wave curl</title>
      <g fill="none" stroke={color} strokeWidth="1.2" opacity="0.8">
        <path d="M0 60 Q60 50 120 60 T240 60 T320 60" />
        <path d="M0 80 Q70 70 140 80 T280 80 T320 80" opacity="0.6" />
      </g>
      <path
        d="M40 140 Q90 90 160 110 Q220 125 240 100 Q258 78 290 90 L290 160 L40 160 Z"
        fill={color}
        opacity="0.12"
      />
      <path
        d="M40 140 Q90 90 160 110 Q220 125 240 100 Q258 78 290 90"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
      />
      <path
        d="M60 150 Q120 110 180 130 Q230 145 260 125"
        fill="none"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />
      <line x1="0" y1="170" x2="320" y2="170" stroke={color} strokeWidth="0.6" opacity="0.5" />
    </svg>
  );
}

function CityGrid({ size = 220, color = D, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      width={size}
      height={(size * 200) / 320}
      style={style}
      aria-hidden="true"
    >
      <title>City grid skyline</title>
      <g fill="none" stroke={color} strokeWidth="1.2">
        <rect x="30" y="110" width="30" height="60" />
        <rect x="68" y="80" width="24" height="90" />
        <rect x="100" y="120" width="26" height="50" />
        <rect x="134" y="60" width="22" height="110" />
        <rect x="164" y="100" width="28" height="70" />
        <rect x="200" y="40" width="24" height="130" />
        <rect x="232" y="90" width="26" height="80" />
        <rect x="266" y="115" width="24" height="55" />
      </g>
      <g fill={color} opacity="0.55">
        <rect x="78" y="92" width="3" height="3" />
        <rect x="84" y="92" width="3" height="3" />
        <rect x="78" y="104" width="3" height="3" />
        <rect x="84" y="104" width="3" height="3" />
        <rect x="142" y="72" width="3" height="3" />
        <rect x="148" y="72" width="3" height="3" />
        <rect x="142" y="84" width="3" height="3" />
        <rect x="148" y="84" width="3" height="3" />
        <rect x="208" y="52" width="3" height="3" />
        <rect x="214" y="52" width="3" height="3" />
        <rect x="208" y="64" width="3" height="3" />
        <rect x="214" y="64" width="3" height="3" />
        <rect x="208" y="76" width="3" height="3" />
        <rect x="214" y="76" width="3" height="3" />
      </g>
      <line x1="0" y1="178" x2="320" y2="178" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

export type LAIconName =
  | 'hollywood'
  | 'venice'
  | 'beverly-hills'
  | 'malibu'
  | 'palms'
  | 'mountains'
  | 'ocean'
  | 'city';

const REGISTRY: Record<LAIconName, (p: IconProps) => React.ReactNode> = {
  hollywood: HollywoodSign,
  venice: VeniceSign,
  'beverly-hills': BeverlyHillsShield,
  malibu: MalibuPier,
  palms: PalmRow,
  mountains: MountainRidge,
  ocean: OceanWave,
  city: CityGrid,
};

export function LAIcon({ name, ...rest }: IconProps & { name: LAIconName }) {
  const Cmp = REGISTRY[name];
  return <>{Cmp(rest)}</>;
}
