import Link from 'next/link';
import { LAIcon, type LAIconName } from './LAIcons';
import { Ov, Rule } from './Primitives';

type Stat = { label: string; value: string };

export function ArticleSidebar({
  icon,
  marker,
  pullquote,
  by,
  date,
  stats,
}: {
  icon: LAIconName;
  marker: string;
  pullquote: string;
  by: string;
  date: string;
  stats: Stat[];
}) {
  return (
    <aside
      style={{
        position: 'sticky',
        top: 96,
        alignSelf: 'start',
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
      }}
    >
      <div
        style={{
          background: 'var(--bg-alt)',
          padding: '28px 28px 24px',
          border: '1px solid var(--border-md)',
          color: 'var(--ink)',
        }}
      >
        <div style={{ color: 'var(--ink)', marginBottom: 12 }}>
          <LAIcon name={icon} size={300} color="currentColor" />
        </div>
        <Rule accent style={{ width: 32, marginBottom: 12 }} />
        <Ov>{marker}</Ov>
      </div>

      <div
        style={{
          padding: '24px 24px 22px',
          borderLeft: '3px solid var(--accent)',
          background: 'var(--bg)',
        }}
      >
        <Ov style={{ marginBottom: 12 }}>The takeaway</Ov>
        <div
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 21,
            fontStyle: 'italic',
            lineHeight: 1.4,
            color: 'var(--ink)',
            marginBottom: 14,
            textWrap: 'pretty',
          }}
        >
          &ldquo;{pullquote}&rdquo;
        </div>
        <div
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 13,
            fontStyle: 'italic',
            color: 'var(--ink-mute)',
          }}
        >
          {by} · {date.split(',')[0]}
        </div>
      </div>

      <div
        style={{
          border: '1px solid var(--border-md)',
          padding: '20px 24px 22px',
        }}
      >
        <Ov style={{ marginBottom: 14 }}>By the numbers</Ov>
        <Rule style={{ marginBottom: 12 }} />
        <dl style={{ margin: 0, padding: 0, display: 'grid', gap: 10 }}>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 16,
                borderBottom: '1px dotted var(--border-md)',
                paddingBottom: 8,
              }}
            >
              <dt
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 12,
                  color: 'var(--ink-mute)',
                  letterSpacing: '.02em',
                }}
              >
                {s.label}
              </dt>
              <dd
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 18,
                  fontWeight: 500,
                  color: 'var(--ink)',
                }}
              >
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        style={{
          background: 'var(--ink)',
          color: 'var(--bg)',
          padding: '28px 28px 26px',
        }}
      >
        <Ov style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>Available on request</Ov>
        <div
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 22,
            lineHeight: 1.25,
            marginBottom: 16,
            textWrap: 'pretty',
          }}
        >
          Considering a move? Let&apos;s have a real conversation first.
        </div>
        <Link
          href="/contact#contact-form"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: 'var(--bg)',
            borderBottom: '1px solid var(--bg)',
            paddingBottom: 2,
          }}
        >
          Inquire →
        </Link>
      </div>
    </aside>
  );
}
