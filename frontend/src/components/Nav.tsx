'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const Sun = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <circle cx="8" cy="8" r="3" />
    <line x1="8" y1="1" x2="8" y2="3" />
    <line x1="8" y1="13" x2="8" y2="15" />
    <line x1="1" y1="8" x2="3" y2="8" />
    <line x1="13" y1="8" x2="15" y2="8" />
    <line x1="3.2" y1="3.2" x2="4.6" y2="4.6" />
    <line x1="11.4" y1="11.4" x2="12.8" y2="12.8" />
    <line x1="12.8" y1="3.2" x2="11.4" y2="4.6" />
    <line x1="4.6" y1="11.4" x2="3.2" y2="12.8" />
  </svg>
);
const Moon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13.5 10.5A6 6 0 0 1 5.5 2.5a6 6 0 1 0 8 8z" />
  </svg>
);

const LINKS: Array<[string, string]> = [
  ['About', '/about'],
  ['Properties', '/properties'],
  ['The Walkthrough', '/walkthrough'],
];

export function Nav({ current = '' }: { current?: string }) {
  const { theme, toggle } = useTheme();
  const monogramSrc =
    theme === 'light' ? '/logo/rrg-monogram-light.png' : '/logo/rrg-monogram-dark.png';

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        transition: 'background .3s',
      }}
    >
      <div
        className="nav-pad"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 40px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <Image
            src={monogramSrc}
            alt="Ross & Ryan Group"
            width={30}
            height={30}
            priority
            style={{ height: 30, width: 30, display: 'block', flexShrink: 0 }}
          />
          <div style={{ lineHeight: 1.25 }}>
            <div
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
              }}
            >
              Ross &amp; Ryan
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 8,
                fontWeight: 500,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--ink-mute)',
              }}
            >
              Group
            </div>
          </div>
        </Link>

        <div
          className="nav-links-hide-mobile"
          style={{ display: 'flex', gap: 20, alignItems: 'center' }}
        >
          {LINKS.map(([l, h]) => (
            <Link
              key={l}
              href={h}
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: current === l ? 'var(--ink)' : 'var(--ink-soft)',
                borderBottom: current === l ? '1px solid var(--accent)' : '1px solid transparent',
                paddingBottom: 2,
              }}
            >
              {l}
            </Link>
          ))}
          <Link
            href="/contact#contact-form"
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              background: 'var(--accent)',
              color: theme === 'light' ? '#F8F5F0' : '#141210',
              padding: '9px 18px',
              borderRadius: 1,
            }}
          >
            Inquire
          </Link>
          <button
            type="button"
            onClick={toggle}
            title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
            aria-label="Toggle theme"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              height: 30,
              background: 'transparent',
              border: '1px solid var(--border-md)',
              borderRadius: 1,
              color: 'var(--ink-mute)',
              flexShrink: 0,
              cursor: 'pointer',
            }}
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </header>
  );
}
