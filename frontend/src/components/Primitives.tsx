import type { CSSProperties, ReactNode } from 'react';
import { LAIcon, type LAIconName } from './LAIcons';

export const Hillside = ({
  size = 44,
  color = 'currentColor',
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={Math.round(size * 0.44)}
    viewBox="0 0 48 21"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M0 17 C8 17 12 5 20 5 C28 5 30 13 36 13 C40 13 44 9 48 9"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line x1="0" y1="20" x2="48" y2="20" stroke={color} strokeWidth=".8" />
  </svg>
);

export const Photo = ({
  h = 300,
  ph = 'ph-1',
  src,
  alt = '',
  objectPosition = 'center',
  label,
  icon,
  children,
  style: sx = {},
}: {
  h?: number;
  ph?: 'ph-1' | 'ph-2' | 'ph-3';
  src?: string;
  alt?: string;
  objectPosition?: string;
  label?: string;
  icon?: LAIconName;
  children?: ReactNode;
  style?: CSSProperties;
}) => (
  <div
    style={{
      height: h,
      background: src ? 'var(--bg-alt)' : `var(--${ph})`,
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
      ...sx,
    }}
  >
    {src && (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition,
          display: 'block',
        }}
      />
    )}
    {!src && icon && (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--ink)',
          opacity: 0.55,
        }}
      >
        <LAIcon name={icon} size={Math.min(h * 1.1, 280)} />
      </div>
    )}
    {children}
    {label && (
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 14,
          fontFamily: 'var(--font-serif), serif',
          fontSize: 10,
          fontVariant: 'small-caps',
          letterSpacing: '.06em',
          color: 'var(--ph-lbl)',
          lineHeight: 1.5,
          pointerEvents: 'none',
        }}
      >
        {label}
      </div>
    )}
  </div>
);

export const Rule = ({ accent, style: sx = {} }: { accent?: boolean; style?: CSSProperties }) => (
  <div
    style={{
      height: accent ? 2 : 1,
      background: accent ? 'var(--accent)' : 'var(--border)',
      flexShrink: 0,
      ...sx,
    }}
  />
);

export const Ey = ({
  children,
  style: sx = {},
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <div
    style={{
      fontFamily: 'var(--font-sans), sans-serif',
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      lineHeight: 1,
      ...sx,
    }}
  >
    {children}
  </div>
);

export const Ov = ({
  children,
  style: sx = {},
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <div
    style={{
      fontFamily: 'var(--font-sans), sans-serif',
      fontSize: 9,
      fontWeight: 500,
      letterSpacing: '.13em',
      textTransform: 'uppercase',
      color: 'var(--ink-mute)',
      lineHeight: 1,
      ...sx,
    }}
  >
    {children}
  </div>
);

export const SectionHead = ({ label, note }: { label: string; note?: string }) => (
  <div style={{ marginBottom: 40 }}>
    <Rule style={{ marginBottom: 14 }} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
      <Ey>{label}</Ey>
      {note && <Ov>{note}</Ov>}
    </div>
  </div>
);
