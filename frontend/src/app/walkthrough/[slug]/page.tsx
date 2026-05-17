import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleBody } from '../../../components/ArticleBody';
import { ArticleSidebar } from '../../../components/ArticleSidebar';
import { InquireBand } from '../../../components/Bands';
import { Footer } from '../../../components/Footer';
import { Nav } from '../../../components/Nav';
import { Ey, Hillside, Ov, Photo, Rule, SectionHead } from '../../../components/Primitives';
import { getWalkthrough, WALKTHROUGH } from '../../../data/mock';
import { SIDEBAR } from '../../../data/walkthrough-sidebar';
import { getArticle } from '../../../lib/articles';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return WALKTHROUGH.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const w = getWalkthrough(slug);
  if (!w) return { title: 'The Walkthrough | Ross & Ryan Group' };
  return {
    title: `${w.title} | The Walkthrough`,
    description: `${w.cat}. ${w.read} read. By ${w.by}.`,
  };
}

const PROSE = 680;

export default async function WalkthroughEntryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const w = getWalkthrough(slug);
  if (!w) notFound();

  const article = getArticle(slug);
  const sidebar = SIDEBAR[slug] ?? { icon: 'palms' as const, marker: 'LOS ANGELES', stats: [] };
  const related = WALKTHROUGH.filter((x) => x.slug !== w.slug).slice(0, 3);

  return (
    <>
      <Nav current="The Walkthrough" />

      <section
        className="section-pad grid-collapse"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '48px 40px 64px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 56,
          alignItems: 'start',
        }}
      >
        <div>
          <SectionHead label={w.cat} />
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
              maxWidth: 600,
            }}
          >
            {w.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 14,
                fontStyle: 'italic',
                color: 'var(--ink-mute)',
              }}
            >
              By {w.by}
            </div>
            <div style={{ width: 1, height: 10, background: 'var(--border-md)' }} />
            <Ov>{w.date}</Ov>
            <div style={{ width: 1, height: 10, background: 'var(--border-md)' }} />
            <Ov>{w.read} read</Ov>
          </div>
        </div>
        <div>
          <Photo
            h={420}
            ph={w.ph}
            src={article?.frontmatter.hero ?? w.image}
            alt={article?.frontmatter.heroAlt ?? w.title}
          />
        </div>
      </section>

      <article style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px 80px' }}>
        <div
          className="article-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 360px',
            gap: 72,
            alignItems: 'start',
          }}
        >
          <div style={{ minWidth: 0 }}>
            {article ? (
              <ArticleBody markdown={article.content} />
            ) : (
              <div style={{ maxWidth: PROSE }}>
                <p
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 16,
                    lineHeight: 1.85,
                    color: 'var(--ink-soft)',
                    marginBottom: 22,
                    textWrap: 'pretty',
                  }}
                >
                  This piece is being written. In the meantime, here is what the author had to say
                  about it.
                </p>
                <div
                  style={{
                    margin: '36px 0',
                    paddingLeft: 24,
                    borderLeft: '2px solid var(--accent)',
                  }}
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
                    &ldquo;{w.pullquote}&rdquo;
                  </div>
                  <Ov style={{ marginTop: 10 }}>
                    {w.by} · {w.date.split(',')[0]}
                  </Ov>
                </div>
              </div>
            )}

            <Rule style={{ marginBottom: 18, marginTop: 48 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Hillside size={36} color="var(--ink-mute)" />
              <Ov>Published {w.date} · Beverly Hills</Ov>
              <div style={{ flex: 1 }} />
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
                  paddingBottom: 1,
                }}
              >
                ← The Walkthrough
              </Link>
            </div>
          </div>

          <ArticleSidebar
            icon={sidebar.icon}
            marker={sidebar.marker}
            pullquote={w.pullquote}
            by={w.by}
            date={w.date}
            stats={sidebar.stats}
          />
        </div>
      </article>

      <section
        style={{
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
          padding: '64px 0',
        }}
      >
        <div
          className="section-pad"
          style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}
        >
          <SectionHead label="More from the Walkthrough" />
          <div
            className="grid-collapse-3"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}
          >
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/walkthrough/${r.slug}`}
                style={{ display: 'block', background: 'var(--bg)' }}
              >
                <Photo
                  h={150}
                  ph={r.ph}
                  src={r.image}
                  alt={r.title}
                  label={`${r.cat} · ${r.date}`}
                />
                <div style={{ padding: '18px 18px 22px' }}>
                  <Ov style={{ marginBottom: 10 }}>{r.date}</Ov>
                  <Rule accent style={{ width: 24, marginBottom: 12 }} />
                  <Ey style={{ marginBottom: 8 }}>{r.cat}</Ey>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontSize: 16,
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: 'var(--ink)',
                      textWrap: 'pretty',
                    }}
                  >
                    {r.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
