import Link from 'next/link';
import { Ey, Rule } from './Primitives';

export type ContraryItem = { dont: string; instead: string };

export function ContraryBand({
  label = "What we don't do",
  note,
  items,
}: {
  label?: string;
  note?: string;
  items: ContraryItem[];
}) {
  return (
    <section
      style={{
        background: 'var(--contrary-bg)',
        padding: '80px 0',
        transition: 'background .3s',
      }}
    >
      <div className="section-pad" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ height: 1, background: 'var(--contrary-div)', marginBottom: 14 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--contrary-label)',
                lineHeight: 1,
              }}
            >
              {label}
            </div>
            {note && (
              <div
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: '.13em',
                  textTransform: 'uppercase',
                  color: 'var(--contrary-label)',
                  opacity: 0.65,
                  lineHeight: 1,
                }}
              >
                {note}
              </div>
            )}
          </div>
        </div>
        <div
          className="grid-collapse-3"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}
        >
          {items.map(({ dont, instead }, i) => (
            <div
              key={dont}
              style={{
                padding: '28px 36px 28px 0',
                borderRight: i % 3 < 2 ? '1px solid var(--contrary-div)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 24,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: 'var(--contrary-text)',
                  textWrap: 'pretty',
                  marginBottom: 10,
                }}
              >
                {dont}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 11,
                  fontWeight: 400,
                  lineHeight: 1.78,
                  color: 'var(--contrary-sub)',
                  textWrap: 'pretty',
                }}
              >
                {instead}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InquireBand({
  headline = "Not all listings are public. Let's talk about what you're looking for.",
  label = 'Get in touch',
  href = '/contact',
}: {
  headline?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
      <div className="section-pad" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ maxWidth: 640 }}>
          <Rule accent style={{ width: 48, marginBottom: 18 }} />
          <Ey style={{ marginBottom: 16 }}>Properties available on request</Ey>
          <div
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.2,
              color: 'var(--ink)',
              textWrap: 'pretty',
              marginBottom: 28,
            }}
          >
            {headline}
          </div>
          <Link
            href={href}
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              background: 'var(--ink)',
              color: 'var(--bg)',
              padding: '12px 24px',
              display: 'inline-block',
              borderRadius: 1,
            }}
          >
            {label} →
          </Link>
        </div>
      </div>
    </section>
  );
}
