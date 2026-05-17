/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Nav';
import { Ey, Hillside, Photo, SectionHead } from '../../components/Primitives';
import { EDITORIAL_IMAGES } from '../../data/mock';

export const metadata: Metadata = {
  title: 'Contact | Ross & Ryan Group',
  description:
    "Considering a move? Let's have a real conversation first. Beverly Hills, California.",
};

const PARTNERS = [
  {
    name: 'Ross Groefsema',
    img: 'ross',
    phone: '(310) 000-0001',
    email: 'ross@rossandryangroup.com',
    bio: 'Fifteen years in LA residential. Will tell you the house is wrong for you if it is. Surfer, golfer, and someone who still picks up when you call on a Sunday.',
  },
  {
    name: 'Ryan Hirsh',
    img: 'ryan',
    phone: '(310) 000-0002',
    email: 'ryan@rossandryangroup.com',
    bio: 'Fifteen years in the market. Desert person. Has a low tolerance for real estate theater. Will give you the real number before you fall in love with a house.',
  },
];

const FIELDS = [
  { l: 'Name', p: 'Your full name', t: 'text' },
  { l: 'Email', p: 'your@email.com', t: 'email' },
  { l: 'Phone', p: '(310) 000-0000', t: 'tel' },
  { l: "What you're considering", p: 'Buying · Selling · Both · Not sure', t: 'text' },
];

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section
        className="section-pad grid-collapse"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '64px 40px 72px',
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: 56,
          alignItems: 'end',
        }}
      >
        <div>
          <SectionHead label="Get in touch" note="Beverly Hills" />
          <h1
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(2.5rem,6vw,5rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-.025em',
              color: 'var(--ink)',
              textWrap: 'pretty',
              maxWidth: 640,
            }}
          >
            Considering a move? Let&apos;s have a real conversation first.
          </h1>
        </div>
        <div>
          <Photo h={380} ph="ph-1" src={EDITORIAL_IMAGES.bhNight} alt="Beverly Hills at night" />
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border)', padding: '72px 0' }}>
        <div
          className="section-pad"
          style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}
        >
          <SectionHead label="Ross + Ryan" note="Founding Partners" />
          <div
            className="grid-collapse"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}
          >
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="grid-collapse"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr',
                  background: 'var(--bg-alt)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={`/${p.img}-headshot.jpg`}
                  alt={p.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: 220,
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                  }}
                />
                <div style={{ padding: 32 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontSize: 22,
                      fontWeight: 500,
                      color: 'var(--ink)',
                      marginBottom: 4,
                    }}
                  >
                    {p.name}
                  </div>
                  <Ey style={{ marginBottom: 20 }}>Founding Partner</Ey>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans), sans-serif',
                      fontSize: 13,
                      lineHeight: 1.78,
                      color: 'var(--ink-soft)',
                      marginBottom: 22,
                      textWrap: 'pretty',
                    }}
                  >
                    {p.bio}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <a
                      href={`tel:${p.phone}`}
                      style={{
                        fontFamily: 'var(--font-sans), sans-serif',
                        fontSize: 12,
                        fontWeight: 500,
                        color: 'var(--ink-soft)',
                      }}
                    >
                      {p.phone}
                    </a>
                    <a
                      href={`mailto:${p.email}`}
                      style={{
                        fontFamily: 'var(--font-sans), sans-serif',
                        fontSize: 12,
                        fontWeight: 500,
                        color: 'var(--accent)',
                        borderBottom: '1px solid var(--accent)',
                        paddingBottom: 1,
                        display: 'inline-block',
                        alignSelf: 'flex-start',
                      }}
                    >
                      {p.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        style={{
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
          padding: '72px 0',
          scrollMarginTop: 80,
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
            gap: 80,
            alignItems: 'start',
          }}
        >
          <div>
            <SectionHead label="Office" note="Douglas Elliman · Beverly Hills" />
            <div
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'var(--ink)',
                marginBottom: 18,
              }}
            >
              150 El Camino Drive
              <br />
              Beverly Hills, CA 90212
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 11,
                fontWeight: 500,
                color: 'var(--ink-mute)',
                marginBottom: 5,
              }}
            >
              DRE #01234567
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 11,
                fontWeight: 500,
                color: 'var(--ink-mute)',
                marginBottom: 28,
              }}
            >
              (310) 000-0000 main
            </div>
            <Hillside size={44} color="var(--ink-mute)" />
          </div>
          <div>
            <SectionHead label="Start a conversation" note="We respond same day" />
            <form style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
              {FIELDS.map((f) => (
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
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
