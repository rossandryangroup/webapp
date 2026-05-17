/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { InquireForm } from '../../components/InquireForm';
import { Nav } from '../../components/Nav';
import { Ey, Hillside, SectionHead } from '../../components/Primitives';
import { EDITORIAL_IMAGES } from '../../data/mock';

export const metadata: Metadata = {
  title: { absolute: 'Contact Ross & Ryan Group · Beverly Hills Real Estate' },
  description:
    'Considering a move in Beverly Hills or greater LA? Start with a real conversation. Same-day response during business hours. Douglas Elliman partners.',
  alternates: { canonical: 'https://rossandryangroup.com/contact' },
  openGraph: {
    title: 'Contact | Ross & Ryan Group',
    description: 'Considering a move? Start with a conversation. Beverly Hills, California.',
    url: 'https://rossandryangroup.com/contact',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'Ross & Ryan Group · Contact' }],
  },
};

const PARTNERS = [
  {
    name: 'Ross Groefsema',
    img: 'ross',
    phone: '(310) 795-0943',
    email: 'ross@rossandryangroup.com',
    bio: 'Fifteen years in LA residential. Will tell you the house is wrong for you if it is. Surfer, golfer, and someone who still picks up when you call on a Sunday.',
  },
  {
    name: 'Ryan Hirsh',
    img: 'ryan',
    phone: '(512) 810-0171',
    email: 'ryan@rossandryangroup.com',
    bio: 'Fifteen years in the market. Desert person. Has a low tolerance for real estate theater. Will give you the real number before you fall in love with a house.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section
        aria-label="Inquire"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 'clamp(440px, 64vh, 660px)',
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.62) 100%), url(${EDITORIAL_IMAGES.bhNight})`,
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
            Considering a move? Let&apos;s have a real conversation first.
          </h1>
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
              CalDRE #01915056 (Groefsema) · #01947727 (Douglas Elliman)
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
              (310) 595-3888 main
            </div>
            <Hillside size={44} color="var(--ink-mute)" />
          </div>
          <div>
            <SectionHead label="Start a conversation" note="We respond same day" />
            <InquireForm variant="contact" submitLabel="Send message" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
