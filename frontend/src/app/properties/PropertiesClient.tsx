'use client';

import Link from 'next/link';
import { useState } from 'react';
import { InquireBand } from '../../components/Bands';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Nav';
import { Ey, Ov, Photo, SectionHead } from '../../components/Primitives';
import { LISTINGS, NEIGHBORHOODS } from '../../data/mock';

export default function PropertiesClient() {
  const [active, setActive] = useState('All');

  const cover = LISTINGS[0];
  const grid =
    active === 'All' ? LISTINGS.slice(1) : LISTINGS.slice(1).filter((l) => l.hood.includes(active));

  return (
    <>
      <Nav current="Properties" />

      <section
        className="section-pad"
        style={{ maxWidth: 1320, margin: '0 auto', padding: '48px 40px 72px' }}
      >
        <SectionHead label="This month's featured listings" />
        <div
          className="grid-collapse"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 56,
            alignItems: 'start',
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 'clamp(2.5rem,6vw,5rem)',
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-.025em',
                color: 'var(--ink)',
                textWrap: 'pretty',
                marginBottom: 22,
              }}
            >
              {cover.addr}
            </h1>
            <div
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '.08em',
                color: 'var(--ink-mute)',
                marginBottom: 5,
              }}
            >
              {cover.hood}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 10,
                letterSpacing: '.06em',
                color: 'var(--ink-mute)',
                marginBottom: 18,
              }}
            >
              {cover.spec}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 28,
                fontWeight: 400,
                color: 'var(--ink)',
                marginBottom: 26,
              }}
            >
              {cover.price}
            </div>
            <Link
              href={`/properties/${cover.slug}`}
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                borderBottom: '1px solid var(--accent)',
                paddingBottom: 2,
              }}
            >
              View the listing →
            </Link>
          </div>
          <div>
            <Photo h={480} ph={cover.ph} src={cover.image} alt={cover.addr} />
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border)', padding: '56px 0' }}>
        <div
          className="section-pad"
          style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}
        >
          <SectionHead label="Active listings" />
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 36 }}>
            <Ov style={{ marginRight: 12, alignSelf: 'center' }}>Neighborhood</Ov>
            {NEIGHBORHOODS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 9,
                  fontWeight: active === f ? 700 : 500,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: active === f ? 'var(--bg)' : 'var(--ink-mute)',
                  background: active === f ? 'var(--ink)' : 'transparent',
                  border: '1px solid var(--border-md)',
                  padding: '6px 14px',
                  borderRadius: 1,
                }}
              >
                {f}
              </button>
            ))}
          </div>
          {grid.length === 0 ? (
            <div
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 20,
                color: 'var(--ink-mute)',
                fontStyle: 'italic',
                paddingTop: 16,
              }}
            >
              No active listings here right now. Inquire for off-market options.
            </div>
          ) : (
            <div
              className="grid-collapse-3"
              style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 2 }}
            >
              {grid.map((l, i) => (
                <Link
                  key={l.slug}
                  href={`/properties/${l.slug}`}
                  style={{ background: 'var(--bg-alt)', overflow: 'hidden', display: 'block' }}
                >
                  <Photo h={i === 0 ? 260 : 190} ph={l.ph} src={l.image} alt={l.addr}>
                    <div style={{ position: 'absolute', top: 12, left: 12 }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans), sans-serif',
                          fontSize: 8,
                          fontWeight: 700,
                          letterSpacing: '.14em',
                          textTransform: 'uppercase',
                          background: 'var(--ink)',
                          color: 'var(--bg)',
                          padding: '3px 8px',
                        }}
                      >
                        {l.status}
                      </span>
                    </div>
                  </Photo>
                  <div style={{ padding: '18px 20px 22px' }}>
                    <Ey style={{ marginBottom: 7 }}>{l.hood}</Ey>
                    <div
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontSize: 18,
                        fontWeight: 500,
                        lineHeight: 1.2,
                        color: 'var(--ink)',
                        marginBottom: 10,
                      }}
                    >
                      {l.addr}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans), sans-serif',
                        fontSize: 10,
                        color: 'var(--ink-mute)',
                        letterSpacing: '.04em',
                        marginBottom: 14,
                      }}
                    >
                      {l.spec}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-serif), serif',
                          fontSize: 20,
                          fontWeight: 400,
                          color: 'var(--ink)',
                        }}
                      >
                        {l.price}
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans), sans-serif',
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: '.12em',
                          textTransform: 'uppercase',
                          color: 'var(--accent)',
                        }}
                      >
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <InquireBand headline="Not all listings are public. Let's talk about what you're looking for." />
      <Footer />
    </>
  );
}
