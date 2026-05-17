import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ContraryBand } from '../../../components/Bands';
import { Footer } from '../../../components/Footer';
import { Nav } from '../../../components/Nav';
import { Ov, Photo, Rule, SectionHead } from '../../../components/Primitives';
import { getListing, LISTINGS, RECENT_COMPS_BY_SLUG } from '../../../data/mock';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getListing(slug);
  if (!l) return { title: 'Property | Ross & Ryan Group' };
  return {
    title: `${l.addr} | Ross & Ryan Group`,
    description: `${l.hood}. ${l.spec}. ${l.price}.`,
  };
}

const CONTRARY = [
  {
    dont: 'The bones are genuinely good.',
    instead:
      'Mid-2000s construction, solid systems, no deferred maintenance. Nothing to hedge here.',
  },
  {
    dont: 'The kitchen is dated.',
    instead:
      'Budget $60 to $80K and it becomes a very different house. The layout is already right.',
  },
  {
    dont: 'South-facing backyard.',
    instead: 'Afternoon shade in summer. A feature if you run warm.',
  },
  {
    dont: 'One bathroom short for the price.',
    instead: "That's fair. Factor it into your starting number.",
  },
  { dont: 'Seller is priced accurately.', instead: 'This is not a play. Come in reasonable.' },
  {
    dont: 'Not ideal for investors.',
    instead: "The rent math doesn't work. You need to live here for this to make sense.",
  },
];

export default async function PropertyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const l = getListing(slug);
  if (!l) notFound();
  const comps = RECENT_COMPS_BY_SLUG[slug] ?? [];
  const bedBath = l.beds && l.baths ? `${l.beds} / ${l.baths}` : '';
  const stats: Array<[string, string]> = [
    [l.price, 'Asking price'],
    [bedBath, 'Bed / Bath'],
    [l.sqft, l.beds ? 'Interior' : 'Size'],
  ].filter(([v]) => v && v.trim()) as Array<[string, string]>;

  return (
    <>
      <Nav current="Properties" />

      <section
        className="section-pad grid-collapse"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '48px 40px 64px',
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: 56,
          alignItems: 'end',
        }}
      >
        <div>
          <SectionHead label="Active listing" note={`${l.hood} · May 2026`} />
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
            }}
          >
            {l.addr}
          </h1>
          <div style={{ display: 'flex', gap: 32, marginBottom: 28, flexWrap: 'wrap' }}>
            {stats.map(([v, lbl]) => (
              <div key={lbl}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 22,
                    fontWeight: 400,
                    color: 'var(--ink)',
                    marginBottom: 4,
                  }}
                >
                  {v}
                </div>
                <Ov>{lbl}</Ov>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                background: 'var(--accent)',
                color: '#F8F5F0',
                padding: '11px 22px',
                borderRadius: 1,
              }}
            >
              Inquire about this property
            </Link>
            <Link
              href="/properties"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: '.10em',
                textTransform: 'uppercase',
                color: 'var(--ink-mute)',
                borderBottom: '1px solid var(--border-md)',
                paddingBottom: 1,
              }}
            >
              ← All listings
            </Link>
          </div>
        </div>
        <div>
          <Photo h={500} ph={l.ph} src={l.image} alt={l.addr} />
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div
          className="grid-collapse section-pad"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 3,
            marginBottom: 64,
          }}
        >
          <Photo
            h={320}
            ph="ph-2"
            src={l.images?.[1]}
            alt={`${l.addr} interior`}
            label={l.images?.[1] ? undefined : 'Photography placeholder'}
          />
          <Photo
            h={320}
            ph="ph-3"
            src={l.images?.[2]}
            alt={`${l.addr} interior`}
            label={l.images?.[2] ? undefined : 'Photography placeholder'}
          />
        </div>
        <div
          className="grid-collapse section-pad"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          <div>
            <SectionHead label="About this property" note={l.hood} />
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 15,
                lineHeight: 1.82,
                color: 'var(--ink-soft)',
                marginBottom: 22,
                textWrap: 'pretty',
              }}
            >
              {l.blurb1}
            </p>
            <div
              style={{ margin: '28px 0', paddingLeft: 24, borderLeft: '2px solid var(--accent)' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 22,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: 'var(--ink)',
                  textWrap: 'pretty',
                }}
              >
                &ldquo;{l.pullquote}&rdquo;
              </div>
              <Ov style={{ marginTop: 10 }}>Ross + Ryan</Ov>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 15,
                lineHeight: 1.82,
                color: 'var(--ink-soft)',
                textWrap: 'pretty',
              }}
            >
              {l.blurb2}
            </p>
          </div>
          <div>
            <SectionHead label="Recent comps" note={`${l.hood} · Last 6 months`} />
            <div style={{ borderTop: '1px solid var(--border)' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 72px 72px 72px 72px',
                  gap: 10,
                  padding: '10px 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {['Address', 'Closed', 'Beds', 'Sq ft', 'Price'].map((h) => (
                  <div
                    key={h}
                    style={{
                      fontFamily: 'var(--font-sans), sans-serif',
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-mute)',
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>
              {comps.map((c) => (
                <div
                  key={c.addr}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 72px 72px 72px 72px',
                    gap: 10,
                    padding: '14px 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontSize: 14,
                      color: 'var(--ink)',
                    }}
                  >
                    {c.addr}
                  </div>
                  {[
                    ['close', c.close],
                    ['beds', c.beds],
                    ['sqft', c.sqft],
                    ['price', c.price],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      style={{
                        fontFamily: 'var(--font-sans), sans-serif',
                        fontSize: 12,
                        color: 'var(--ink-soft)',
                      }}
                    >
                      {v}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 13,
                lineHeight: 1.78,
                color: 'var(--ink-soft)',
                marginTop: 24,
                textWrap: 'pretty',
              }}
            >
              {l.hood} sits in a tight pocket of the market. Inventory is thin. Comparable closes
              have averaged 96 days on market over the last six months.
            </p>
          </div>
        </div>
      </section>

      <ContraryBand
        label="What we'd tell a friend"
        note="Six honest lines about this property"
        items={CONTRARY}
      />

      <section className="section-pad" style={{ padding: '80px 40px' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <SectionHead label="Inquire about this property" note="We respond same day" />
          <h2
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.2,
              color: 'var(--ink)',
              marginBottom: 36,
              textWrap: 'pretty',
            }}
          >
            Interested in {l.addr}? Let&apos;s talk.
          </h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            {[
              { l: 'Name', p: 'Your full name', t: 'text' },
              { l: 'Email', p: 'your@email.com', t: 'email' },
              { l: "What you're considering", p: 'Buyer · Seller · Just looking', t: 'text' },
            ].map((f) => (
              <div key={f.l}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 13,
                    fontStyle: 'italic',
                    color: 'var(--ink-mute)',
                    marginBottom: 6,
                  }}
                >
                  {f.l}
                </div>
                <input type={f.t} placeholder={f.p} className="inp" />
              </div>
            ))}
            <div style={{ paddingTop: 8 }}>
              <button
                type="submit"
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  background: 'var(--ink)',
                  color: 'var(--bg)',
                  padding: '13px 28px',
                  border: 'none',
                  borderRadius: 1,
                }}
              >
                Send inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <Rule />
      <Footer />
    </>
  );
}
