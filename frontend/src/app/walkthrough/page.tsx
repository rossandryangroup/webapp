'use client';

import Link from 'next/link';
import { useState } from 'react';
import { InquireBand } from '../../components/Bands';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Nav';
import { Ey, Ov, Photo, Rule, SectionHead } from '../../components/Primitives';
import { WALKTHROUGH, WALKTHROUGH_CATS } from '../../data/mock';

export default function WalkthroughPage() {
  const [cat, setCat] = useState('All');

  const lead = WALKTHROUGH[0];
  const filtered =
    cat === 'All' ? WALKTHROUGH.slice(0, 3) : WALKTHROUGH.filter((e) => e.cat === cat).slice(0, 3);
  const archive = WALKTHROUGH.slice(3);

  return (
    <>
      <Nav current="The Walkthrough" />

      <section
        className="section-pad grid-collapse"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '48px 40px 72px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 56,
          alignItems: 'start',
        }}
      >
        <div>
          <SectionHead label="The Walkthrough" />
          <Ey style={{ marginBottom: 14 }}>{lead.cat}</Ey>
          <h1
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(2.5rem,6vw,5rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-.025em',
              color: 'var(--ink)',
              textWrap: 'pretty',
              marginBottom: 24,
              maxWidth: 580,
            }}
          >
            {lead.title}
          </h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 28,
              flexWrap: 'wrap',
            }}
          >
            <Ov>{lead.date}</Ov>
            <div style={{ width: 1, height: 10, background: 'var(--border-md)' }} />
            <Ov>{lead.read} read</Ov>
            <div style={{ width: 1, height: 10, background: 'var(--border-md)' }} />
            <Ov>By {lead.by}</Ov>
          </div>
          <Link
            href={`/walkthrough/${lead.slug}`}
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
            Read the piece →
          </Link>
        </div>
        <div>
          <Photo h={480} ph={lead.ph} />
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border)', padding: '56px 0' }}>
        <div
          className="section-pad"
          style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}
        >
          <div
            style={{
              display: 'flex',
              gap: 4,
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: 40,
            }}
          >
            <Ov style={{ marginRight: 12 }}>Filter</Ov>
            {WALKTHROUGH_CATS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 9,
                  fontWeight: cat === c ? 700 : 500,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: cat === c ? 'var(--bg)' : 'var(--ink-mute)',
                  background: cat === c ? 'var(--ink)' : 'transparent',
                  border: '1px solid var(--border-md)',
                  padding: '6px 14px',
                  borderRadius: 1,
                  cursor: 'pointer',
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <SectionHead label="Recent entries" />
          <div
            className="grid-collapse-3"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr 1fr',
              gap: 2,
              alignItems: 'start',
            }}
          >
            {filtered.map((e, i) => (
              <Link
                key={e.slug}
                href={`/walkthrough/${e.slug}`}
                style={{ background: 'var(--bg-alt)', display: 'block' }}
              >
                <Photo h={i === 0 ? 260 : 170} ph={e.ph} label={`${e.cat} · ${e.date}`} />
                <div style={{ padding: i === 0 ? '24px 24px 28px' : '18px 18px 22px' }}>
                  <Ov style={{ marginBottom: 10 }}>
                    {e.date} · {e.read} read
                  </Ov>
                  <Rule accent style={{ width: 28, marginBottom: 12 }} />
                  <Ey style={{ marginBottom: 10 }}>{e.cat}</Ey>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontSize: i === 0 ? 20 : 16,
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: 'var(--ink)',
                      textWrap: 'pretty',
                      marginBottom: 18,
                    }}
                  >
                    {e.title}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Ov>By {e.by}</Ov>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans), sans-serif',
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                      }}
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
          padding: '72px 0',
        }}
      >
        <div
          className="section-pad"
          style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}
        >
          <SectionHead label="Archive" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 180px 1fr 60px',
              gap: 0,
              paddingBottom: 10,
              borderBottom: '1px solid var(--border-md)',
            }}
          >
            {['Date', 'Category', 'Title', ''].map((h, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: header labels include empty string
                key={`${h}-${i}`}
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                  paddingBottom: 10,
                }}
              >
                {h}
              </div>
            ))}
          </div>
          {archive.map((e) => (
            <Link
              key={e.slug}
              href={`/walkthrough/${e.slug}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 180px 1fr 60px',
                gap: 0,
                padding: '15px 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 12,
                  color: 'var(--ink-mute)',
                }}
              >
                {e.date.split(',')[0]}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                {e.cat}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 16,
                  fontWeight: 500,
                  color: 'var(--ink)',
                  lineHeight: 1.3,
                  paddingRight: 16,
                  textWrap: 'pretty',
                }}
              >
                {e.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 11,
                  color: 'var(--ink-mute)',
                  textAlign: 'right',
                }}
              >
                {e.read}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <InquireBand
        headline="Considering a move? Let's have a real conversation first."
        href="/contact#contact-form"
      />
      <Footer />
    </>
  );
}
