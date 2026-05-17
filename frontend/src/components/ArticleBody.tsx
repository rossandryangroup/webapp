'use client';

import type { CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const paragraph: CSSProperties = {
  fontFamily: 'var(--font-sans), sans-serif',
  fontSize: 17,
  lineHeight: 1.85,
  color: 'var(--ink-soft)',
  marginBottom: 24,
  textWrap: 'pretty',
};

const lead: CSSProperties = {
  ...paragraph,
  fontFamily: 'var(--font-serif), serif',
  fontSize: 22,
  lineHeight: 1.5,
  color: 'var(--ink)',
  marginBottom: 32,
};

const h2: CSSProperties = {
  fontFamily: 'var(--font-serif), serif',
  fontSize: 30,
  fontWeight: 500,
  lineHeight: 1.2,
  color: 'var(--ink)',
  marginTop: 48,
  marginBottom: 18,
  textWrap: 'pretty',
};

const h3: CSSProperties = {
  fontFamily: 'var(--font-serif), serif',
  fontSize: 20,
  fontStyle: 'italic',
  fontWeight: 500,
  lineHeight: 1.3,
  color: 'var(--ink)',
  marginTop: 32,
  marginBottom: 12,
  textWrap: 'pretty',
};

const blockquote: CSSProperties = {
  margin: '40px 0',
  padding: '24px 28px',
  background: 'var(--bg-alt)',
  borderLeft: '3px solid var(--accent)',
  fontFamily: 'var(--font-serif), serif',
  fontSize: 24,
  fontStyle: 'italic',
  fontWeight: 400,
  lineHeight: 1.4,
  color: 'var(--ink)',
  textWrap: 'pretty',
};

const ul: CSSProperties = {
  margin: '0 0 24px 0',
  padding: 0,
  listStyle: 'none',
  fontFamily: 'var(--font-sans), sans-serif',
  fontSize: 17,
  lineHeight: 1.85,
  color: 'var(--ink-soft)',
};

const ol: CSSProperties = {
  ...ul,
  listStyle: 'decimal',
  paddingLeft: 22,
};

const li: CSSProperties = {
  marginBottom: 10,
  position: 'relative',
  paddingLeft: 22,
};

const hr: CSSProperties = {
  border: 'none',
  borderTop: '1px solid var(--border-md)',
  margin: '40px 0',
};

const a: CSSProperties = {
  color: 'var(--accent)',
  textDecoration: 'underline',
  textUnderlineOffset: 3,
};

const strong: CSSProperties = { color: 'var(--ink)', fontWeight: 600 };

const tableWrap: CSSProperties = {
  margin: '32px 0',
  overflowX: 'auto',
  border: '1px solid var(--border-md)',
};

const table: CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontFamily: 'var(--font-sans), sans-serif',
  fontSize: 14,
};

const th: CSSProperties = {
  textAlign: 'left',
  padding: '14px 16px',
  fontWeight: 600,
  fontSize: 10,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: 'var(--ink-mute)',
  borderBottom: '1px solid var(--border-md)',
  background: 'var(--bg-alt)',
};

const td: CSSProperties = {
  padding: '14px 16px',
  color: 'var(--ink-soft)',
  borderBottom: '1px solid var(--border)',
};

export function ArticleBody({ markdown }: { markdown: string }) {
  let leadHandled = false;
  return (
    <div style={{ display: 'flow-root' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: (props) => {
            if (!leadHandled) {
              leadHandled = true;
              return <p style={lead}>{props.children}</p>;
            }
            return <p style={paragraph}>{props.children}</p>;
          },
          h2: (props) => <h2 style={h2}>{props.children}</h2>,
          h3: (props) => <h3 style={h3}>{props.children}</h3>,
          blockquote: (props) => <blockquote style={blockquote}>{props.children}</blockquote>,
          ul: (props) => <ul style={ul}>{props.children}</ul>,
          ol: (props) => <ol style={ol}>{props.children}</ol>,
          li: (props) => (
            <li style={li}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 12,
                  width: 10,
                  height: 1,
                  background: 'var(--accent)',
                }}
              />
              {props.children}
            </li>
          ),
          hr: () => <hr style={hr} />,
          a: ({ href, children }) => (
            <a href={href} style={a}>
              {children}
            </a>
          ),
          strong: (props) => <strong style={strong}>{props.children}</strong>,
          em: (props) => <em style={{ fontStyle: 'italic' }}>{props.children}</em>,
          table: (props) => (
            <div style={tableWrap}>
              <table style={table}>{props.children}</table>
            </div>
          ),
          thead: (props) => <thead>{props.children}</thead>,
          tbody: (props) => <tbody>{props.children}</tbody>,
          tr: (props) => <tr>{props.children}</tr>,
          th: (props) => <th style={th}>{props.children}</th>,
          td: (props) => <td style={td}>{props.children}</td>,
          img: ({ src, alt }) => (
            <span
              style={{
                display: 'block',
                margin: '32px 0',
                background: 'var(--bg-alt)',
              }}
            >
              {/* biome-ignore lint/performance/noImgElement: editorial markdown image with unknown dimensions */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={typeof src === 'string' ? src : ''}
                alt={alt ?? ''}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              {alt && (
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 10,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-mute)',
                    padding: '10px 14px 12px',
                    lineHeight: 1.4,
                  }}
                >
                  {alt}
                </span>
              )}
            </span>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
