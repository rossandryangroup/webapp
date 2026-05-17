import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { Ey, Ov, Photo, Rule } from '../components/Primitives';
import { EDITORIAL_IMAGES, LISTINGS, WALKTHROUGH } from '../data/mock';

const SIDEBAR = [
  {
    cat: 'Market Commentary',
    title: "Spring 2026 buyer's window: what the data actually says",
    date: 'May 2026',
  },
  {
    cat: 'Neighborhood',
    title: 'Trousdale Estates: the last mid-century view lots',
    date: 'Apr 2026',
  },
  {
    cat: 'Lifestyle',
    title: 'Palm Springs in early October. Our favorite long weekend.',
    date: 'Mar 2026',
  },
];

export default function HomePage() {
  const featured = LISTINGS.slice(0, 3);
  const notes = WALKTHROUGH.slice(0, 3);

  return (
    <>
      <Nav />

      {/* Cover hero: full-bleed background image with overlaid title */}
      <section
        aria-label="Cover feature"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 'clamp(480px, 72vh, 720px)',
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.62) 100%), image-set(url(/beverly-hills-palms.webp) type("image/webp"), url(/beverly-hills-palms.jpg) type("image/jpeg"))`,
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
          <div style={{ maxWidth: 820 }}>
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
              }}
            >
              A house on a quiet street is still the best investment in Los Angeles.
            </h1>
          </div>
        </div>
      </section>

      {/* Cover lede + walkthrough sidebar */}
      <section
        className="section-pad"
        style={{ maxWidth: 1320, margin: '0 auto', padding: '56px 40px 0' }}
      >
        <Rule accent style={{ marginBottom: 28 }} />
        <div
          className="grid-collapse"
          style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 48, alignItems: 'start' }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                marginBottom: 22,
              }}
            >
              <Ey>Cover Feature</Ey>
              <div style={{ height: 1, width: 80, background: 'var(--border)' }} />
              <Ov>Beverly Hills · Evening light</Ov>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 16,
                lineHeight: 1.82,
                color: 'var(--ink-soft)',
                marginBottom: 22,
                maxWidth: 540,
                textWrap: 'pretty',
              }}
            >
              Quiet streets hold their value in ways the listing sites don't really capture. The
              lots are bigger, the neighbors stay longer, and the comps move slower in both
              directions when the Fed gets loud. We've watched the same blocks south of Sunset trade
              through three rate cycles now, and the pattern keeps showing up. The houses that stay
              boring are the ones that compound.
            </p>
            <Link
              href="/walkthrough/spring-2026-rate-environment"
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

          <div style={{ paddingTop: 4 }}>
            {SIDEBAR.map((s) => (
              <div
                key={s.title}
                style={{ padding: '17px 0', borderBottom: '1px solid var(--border)' }}
              >
                <Ey style={{ marginBottom: 7 }}>{s.cat}</Ey>
                <div
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 15,
                    fontWeight: 500,
                    lineHeight: 1.35,
                    color: 'var(--ink)',
                    textWrap: 'pretty',
                    marginBottom: 7,
                  }}
                >
                  {s.title}
                </div>
                <Ov>{s.date}</Ov>
              </div>
            ))}
            <div style={{ paddingTop: 20 }}>
              <Link
                href="/walkthrough"
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                  borderBottom: '1px solid var(--border-md)',
                  paddingBottom: 2,
                }}
              >
                All entries →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section style={{ padding: '80px 0' }}>
        <div
          className="section-pad"
          style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 40,
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div>
              <Rule accent style={{ width: 48, marginBottom: 16 }} />
              <Ey style={{ marginBottom: 10 }}>Featured Properties</Ey>
              <h2
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 34,
                  fontWeight: 500,
                  letterSpacing: '-.02em',
                  color: 'var(--ink)',
                }}
              >
                Currently representing.
              </h2>
            </div>
            <Link
              href="/properties"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                borderBottom: '1px solid var(--border-md)',
                paddingBottom: 2,
              }}
            >
              Full catalogue →
            </Link>
          </div>
          <div
            className="grid-collapse-3"
            style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 2 }}
          >
            {featured.map((l, i) => (
              <Link
                key={l.slug}
                href={`/properties/${l.slug}`}
                style={{ background: 'var(--bg-alt)', overflow: 'hidden', display: 'block' }}
              >
                <Photo
                  h={i === 0 ? 300 : 200}
                  ph={l.ph}
                  src={l.image}
                  icon={l.icon}
                  alt={l.addr}
                  label={l.hood}
                >
                  <div style={{ position: 'absolute', top: 14, left: 14 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans), sans-serif',
                        fontSize: 8,
                        fontWeight: 700,
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                        background: 'var(--ink)',
                        color: 'var(--bg)',
                        padding: '4px 9px',
                      }}
                    >
                      {l.status}
                    </span>
                  </div>
                </Photo>
                <div style={{ padding: '22px 22px 26px' }}>
                  <Ey style={{ marginBottom: 8 }}>{l.hood}</Ey>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontSize: 19,
                      fontWeight: 500,
                      color: 'var(--ink)',
                      lineHeight: 1.2,
                      marginBottom: 12,
                    }}
                  >
                    {l.addr}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans), sans-serif',
                      fontSize: 10,
                      color: 'var(--ink-mute)',
                      letterSpacing: '.06em',
                      marginBottom: 16,
                    }}
                  >
                    {l.spec}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontSize: 22,
                        fontWeight: 500,
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
        </div>
      </section>

      {/* CTA Band */}
      <section
        style={{
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          className="grid-collapse section-pad"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'stretch',
            minHeight: 480,
          }}
        >
          <div
            style={{
              padding: '80px 72px 80px 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Rule accent style={{ width: 48, marginBottom: 18 }} />
            <Ey style={{ marginBottom: 18 }}>Work with us</Ey>
            <h2
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 36,
                fontWeight: 500,
                lineHeight: 1.18,
                letterSpacing: '-.02em',
                color: 'var(--ink)',
                textWrap: 'pretty',
                marginBottom: 22,
                maxWidth: 380,
              }}
            >
              Considering a move? Let's have a real conversation first.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 15,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                marginBottom: 36,
                textWrap: 'pretty',
                maxWidth: 340,
              }}
            >
              We keep the client list small on purpose. Fifteen years in, we've learned the only
              answer worth giving is the honest one, and it doesn't change with the price tag. Same
              conversation at $900K as at $12M.
            </p>
            <Link
              href="/contact#contact-form"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                background: 'var(--ink)',
                color: 'var(--bg)',
                padding: '13px 26px',
                display: 'inline-block',
                alignSelf: 'flex-start',
                borderRadius: 1,
              }}
            >
              Schedule a conversation
            </Link>
          </div>
          <div style={{ padding: '40px 0', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Photo
              h={0}
              ph="ph-2"
              src={EDITORIAL_IMAGES.santaMonicaInterior}
              alt="Interior at 2525 Main, Santa Monica"
              label="Interior · 2525 Main · Santa Monica"
              style={{ flex: '1 1 auto', minHeight: 200 }}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, flexShrink: 0 }}>
              <Photo
                h={160}
                ph="ph-1"
                src={EDITORIAL_IMAGES.ridgeline3}
                alt="Lake Arrowhead ridge"
                label="Exterior · Lake Arrowhead"
              />
              <Photo
                h={160}
                ph="ph-3"
                src={EDITORIAL_IMAGES.santaMonicaCorner}
                alt="Art Deco corner detail, Santa Monica"
                label="Detail · Santa Monica"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
        <div
          className="grid-collapse section-pad"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1.8fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <div>
            <Rule accent style={{ width: 48, marginBottom: 16 }} />
            <Ey style={{ marginBottom: 16 }}>Ross + Ryan</Ey>
            <h2
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 36,
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: '-.02em',
                color: 'var(--ink)',
                marginBottom: 26,
                textWrap: 'pretty',
              }}
            >
              Two agents. One shared point of view.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 16,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                marginBottom: 18,
                textWrap: 'pretty',
              }}
            >
              Fifteen years each. A small client list. The same answer whether it's a $900K condo or
              a $12M estate, tell the client exactly what we'd tell a close friend.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 16,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                marginBottom: 36,
                textWrap: 'pretty',
              }}
            >
              Top 5% nationwide. 5.0 across 74 Zillow reviews. Featured on Million Dollar Listing
              LA. We mention it here once and move on.
            </p>
            <Link
              href="/about"
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
              Our story →
            </Link>
          </div>
          <div
            className="grid-collapse"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'end' }}
          >
            <div>
              <Image
                src="/ross-headshot.jpg"
                alt="Ross Groefsema"
                width={600}
                height={800}
                sizes="(max-width: 768px) 50vw, 400px"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                }}
              />
              <div style={{ paddingTop: 16 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 18,
                    fontWeight: 500,
                    color: 'var(--ink)',
                    marginBottom: 5,
                  }}
                >
                  Ross Groefsema
                </div>
                <Ov>Founding Partner</Ov>
              </div>
            </div>
            <div style={{ paddingTop: 40 }}>
              <Image
                src="/ryan-headshot.jpg"
                alt="Ryan Hirsh"
                width={600}
                height={800}
                sizes="(max-width: 768px) 50vw, 400px"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                }}
              />
              <div style={{ paddingTop: 16 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 18,
                    fontWeight: 500,
                    color: 'var(--ink)',
                    marginBottom: 5,
                  }}
                >
                  Ryan Hirsh
                </div>
                <Ov>Founding Partner</Ov>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section style={{ padding: '80px 0' }}>
        <div
          className="section-pad"
          style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 48,
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div>
              <Rule accent style={{ width: 48, marginBottom: 16 }} />
              <Ey style={{ marginBottom: 10 }}>From the Walkthrough</Ey>
              <h2
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 34,
                  fontWeight: 500,
                  letterSpacing: '-.02em',
                  color: 'var(--ink)',
                }}
              >
                Market intelligence, published.
              </h2>
            </div>
            <Link
              href="/walkthrough"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                borderBottom: '1px solid var(--border-md)',
                paddingBottom: 2,
              }}
            >
              All entries →
            </Link>
          </div>

          <div
            className="grid-collapse-3"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr 1fr',
              gap: 2,
              alignItems: 'start',
            }}
          >
            <Link
              href={`/walkthrough/${notes[0].slug}`}
              style={{ background: 'var(--bg-alt)', display: 'block' }}
            >
              <Photo
                h={300}
                ph={notes[0].ph}
                src={notes[0].image}
                alt={notes[0].title}
                label={`${notes[0].cat} · ${notes[0].date}`}
              />
              <div style={{ padding: '26px 26px 32px' }}>
                <Ov style={{ marginBottom: 14 }}>
                  {notes[0].date} · {notes[0].read} read
                </Ov>
                <Rule accent style={{ width: 32, marginBottom: 16 }} />
                <Ey style={{ marginBottom: 12 }}>{notes[0].cat}</Ey>
                <div
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 22,
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: 'var(--ink)',
                    textWrap: 'pretty',
                    marginBottom: 26,
                    maxWidth: 360,
                  }}
                >
                  {notes[0].title}
                </div>
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
            </Link>
            {notes.slice(1).map((n) => (
              <Link
                key={n.slug}
                href={`/walkthrough/${n.slug}`}
                style={{ background: 'var(--bg-alt)', display: 'block' }}
              >
                <Photo
                  h={180}
                  ph={n.ph}
                  src={n.image}
                  alt={n.title}
                  label={`${n.cat} · ${n.date}`}
                />
                <div style={{ padding: '20px 20px 24px' }}>
                  <Ov style={{ marginBottom: 10 }}>
                    {n.date} · {n.read} read
                  </Ov>
                  <Rule accent style={{ width: 24, marginBottom: 12 }} />
                  <Ey style={{ marginBottom: 10 }}>{n.cat}</Ey>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontSize: 17,
                      fontWeight: 500,
                      lineHeight: 1.35,
                      color: 'var(--ink)',
                      textWrap: 'pretty',
                      marginBottom: 20,
                    }}
                  >
                    {n.title}
                  </div>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
