'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

type Item = { label: string; href: string };

const COLUMNS: Array<{ label: string; items: Item[] }> = [
  {
    label: 'Properties',
    items: [{ label: 'Active Listings', href: '/properties' }],
  },
  {
    label: 'The Walkthrough',
    items: [{ label: 'All entries', href: '/walkthrough' }],
  },
  {
    label: 'Contact',
    items: [{ label: 'Schedule a conversation', href: '/contact#contact-form' }],
  },
];

export function Footer() {
  const { theme } = useTheme();
  const monogramSrc =
    theme === 'light' ? '/logo/rrg-monogram-light.png' : '/logo/rrg-monogram-dark.png';
  return (
    <footer style={{ background: 'var(--footer-bg)', transition: 'background .3s' }}>
      <div
        className="section-pad"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '64px 40px 40px',
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: 48,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <Image
              src={monogramSrc}
              alt="Ross & Ryan Group"
              width={32}
              height={32}
              style={{ height: 32, width: 32, display: 'block', flexShrink: 0 }}
            />
            <div
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--footer-word)',
              }}
            >
              Ross &amp; Ryan Group
            </div>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 8,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--footer-tag)',
              marginBottom: 20,
            }}
          >
            Douglas Elliman · Beverly Hills
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 14,
              lineHeight: 1.8,
              color: 'var(--footer-body)',
              textWrap: 'pretty',
            }}
          >
            A residential real estate group based in Beverly Hills. Two partners, fifteen years,
            real reach across greater LA.
          </p>
        </div>
        {COLUMNS.map(({ label, items }) => (
          <div key={label}>
            <div
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--footer-tag)',
                marginBottom: 18,
              }}
            >
              {label}
            </div>
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'var(--footer-link)',
                  marginBottom: 11,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div
        className="section-pad"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '20px 40px',
          borderTop: '1px solid var(--footer-div)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 10,
            color: 'var(--footer-copy)',
          }}
        >
          © 2026 Ross &amp; Ryan Group · DRE #01234567
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 10,
            color: 'var(--footer-copy)',
          }}
        >
          Douglas Elliman Real Estate
        </span>
      </div>
    </footer>
  );
}
