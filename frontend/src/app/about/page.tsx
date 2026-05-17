/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { ContraryBand, InquireBand } from '../../components/Bands';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Nav';
import { Ey, Ov, Rule, SectionHead } from '../../components/Primitives';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Fifteen years in the same market. Two partners, one shared point of view, and the kind of representation that returns your call on a Sunday.',
  alternates: { canonical: 'https://rossandryangroup.com/about' },
  openGraph: {
    title: 'About | Ross & Ryan Group',
    description:
      'Fifteen years in the same market. Two partners, one shared point of view, and the kind of representation that returns your call on a Sunday.',
    url: 'https://rossandryangroup.com/about',
    images: [{ url: '/og-about.jpg', width: 1200, height: 630, alt: 'Ross & Ryan Group · About' }],
    type: 'profile',
  },
  twitter: { card: 'summary_large_image', images: ['/og-about.jpg'] },
};

const CONTRARY = [
  {
    dont: "List a house we wouldn't buy.",
    instead:
      "We price every listing at a number we can honestly defend. If we can't, we pass on the listing.",
  },
  {
    dont: 'Volume-prospect cold leads.',
    instead:
      'Every client starts with a referral or a direct inquiry. No cold calls. No door-knocking.',
  },
  {
    dont: 'Run open houses for traffic.',
    instead: 'We show by appointment. Opens are for serious buyers, not foot traffic metrics.',
  },
  {
    dont: 'Inflate list price to win.',
    instead: 'We give the real number and explain it. Overpricing wastes time on both sides.',
  },
  {
    dont: 'Disappear after close.',
    instead: 'Still reachable when the A/C breaks three months later and you need a referral.',
  },
  {
    dont: 'Use the word luxury.',
    instead: 'Everything we sell sits above $445K. That word is industry wallpaper. We skip it.',
  },
];

const HOW = [
  {
    h: 'We keep the list intentionally small.',
    b: "The practical ceiling is around eight active clients at any time. More than that and quality degrades. When we're at capacity, we say so and help you find someone else who's good.",
  },
  {
    h: 'We give the same answer to everyone.',
    b: "Whether it's a $900K condo in Culver City or a $12M estate in Bel Air, the advice is what we'd tell a close friend. Real number. Real condition read. No hedge.",
  },
  {
    h: 'We stay involved after close.',
    b: "The relationship doesn't end at the settlement table. When you have a question about a contractor, renovation budget, or a refinance, we're still here.",
  },
  {
    h: 'You get us, not a junior team.',
    b: 'Every call, every showing, every offer. Not a licensed assistant, not a newer agent in training. The two people you hired are the two people doing the work.',
  },
];

const PARTNERS = [
  {
    name: 'Ross Groefsema',
    img: 'ross',
    bio1: "Ross grew up in Southern California and spent the first decade of his career learning the Beverly Hills market from the ground up. He's surfed the same break in Malibu for fifteen years and can tell you which taco truck is worth the detour on PCH.",
    bio2: "His practice has always leaned toward the buyer side without losing the discipline to represent sellers honestly. He'll tell you when a house is overpriced. He'll tell you when it isn't. The answer doesn't change depending on which side of the transaction he's on.",
  },
  {
    name: 'Ryan Hirsh',
    img: 'ryan',
    bio1: "Ryan spent three years in commercial real estate before switching to residential and deciding this was where the actual relationship work happened. He is constitutionally incapable of telling someone a house is right for them when it isn't.",
    bio2: "When he's not working, he's in the desert, Palm Springs, Joshua Tree, sometimes further out. He reads the market commentary the way other people read box scores. Placeholder second paragraph, same editorial register.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav current="About" />

      <section
        aria-label="About the team"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 'clamp(440px, 64vh, 660px)',
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.62) 100%), url(/hutton-garage.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <div
          className="section-pad"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '64px 40px 56px',
            width: '100%',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(2.5rem, 5.4vw, 4.5rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-.025em',
              color: '#fff',
              textWrap: 'pretty',
              textShadow: '0 1px 24px rgba(0,0,0,0.35)',
              margin: 0,
              maxWidth: 820,
            }}
          >
            Fifteen years in the same market.
          </h1>
        </div>
      </section>

      <section
        className="section-pad"
        style={{ maxWidth: 1320, margin: '0 auto', padding: '64px 40px 72px' }}
      >
        <div style={{ maxWidth: 720 }}>
          <Rule style={{ marginBottom: 14 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36 }}>
            <Ey>Our story</Ey>
            <Ov>Founded 2010</Ov>
          </div>
          <p
            className="drop-cap"
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 16,
              lineHeight: 1.82,
              color: 'var(--ink-soft)',
              marginBottom: 20,
              textWrap: 'pretty',
            }}
          >
            Ross and Ryan started this group because they kept bumping into the same problem.
            Clients were getting big teams that moved fast but knew less. The idea was simple, keep
            the client list small enough that every deal gets your full attention. That was 2010.
            The math still holds.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 16,
              lineHeight: 1.82,
              color: 'var(--ink-soft)',
              marginBottom: 20,
              textWrap: 'pretty',
            }}
          >
            Between them, they've closed north of 200 transactions, from a $445K starter condo in
            Culver City to a $15M estate in Trousdale. The range keeps the market model calibrated
            at every price point, not just the trophy end.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 16,
              lineHeight: 1.82,
              color: 'var(--ink-soft)',
              textWrap: 'pretty',
            }}
          >
            They are top 5% nationwide under Douglas Elliman, 5.0 across 74 Zillow reviews, and have
            appeared on Million Dollar Listing LA. Mentioned once here, then moved on.
          </p>
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
          className="grid-collapse section-pad"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
            gap: 72,
            alignItems: 'start',
          }}
        >
          <div>
            <SectionHead label="How we work" />
            <div
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 20,
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.4,
                color: 'var(--ink)',
                textWrap: 'pretty',
              }}
            >
              Small list. Full attention. Same answer every time.
            </div>
          </div>
          <div>
            {HOW.map((h) => (
              <div
                key={h.h}
                style={{
                  paddingBottom: 24,
                  marginBottom: 24,
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 18,
                    fontWeight: 500,
                    color: 'var(--ink)',
                    marginBottom: 8,
                  }}
                >
                  {h.h}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 14,
                    lineHeight: 1.82,
                    color: 'var(--ink-soft)',
                    textWrap: 'pretty',
                  }}
                >
                  {h.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContraryBand
        label="What we don't do"
        note="Six things we've taken off the table"
        items={CONTRARY}
      />

      <section style={{ padding: '72px 0' }}>
        <div
          className="section-pad"
          style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}
        >
          <SectionHead label="The partners" />
          {PARTNERS.map((p, i) => (
            <div
              key={p.name}
              className="grid-collapse"
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 340px' : '340px 1fr',
                gap: 64,
                alignItems: 'start',
                marginBottom: 64,
                paddingBottom: 64,
                borderBottom: i === 0 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 28,
                    fontWeight: 500,
                    color: 'var(--ink)',
                    marginBottom: 6,
                  }}
                >
                  {p.name}
                </div>
                <Ey style={{ marginBottom: 24 }}>Founding Partner</Ey>
                <p
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 15,
                    lineHeight: 1.82,
                    color: 'var(--ink-soft)',
                    marginBottom: 16,
                    textWrap: 'pretty',
                  }}
                >
                  {p.bio1}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 15,
                    lineHeight: 1.82,
                    color: 'var(--ink-soft)',
                    textWrap: 'pretty',
                  }}
                >
                  {p.bio2}
                </p>
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <img
                  src={`/${p.img}-headshot.jpg`}
                  alt={p.name}
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                  }}
                />
              </div>
            </div>
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
