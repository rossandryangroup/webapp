'use client';

import type { CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const paragraph: CSSProperties = {
  fontFamily: 'var(--font-sans), sans-serif',
  fontSize: 16,
  lineHeight: 1.85,
  color: 'var(--ink-soft)',
  marginBottom: 22,
  textWrap: 'pretty',
  maxWidth: 680,
};

const h2: CSSProperties = {
  fontFamily: 'var(--font-serif), serif',
  fontSize: 28,
  fontWeight: 500,
  lineHeight: 1.2,
  color: 'var(--ink)',
  marginTop: 44,
  marginBottom: 16,
  textWrap: 'pretty',
  maxWidth: 680,
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
  maxWidth: 680,
};

const blockquote: CSSProperties = {
  margin: '36px 0',
  paddingLeft: 24,
  borderLeft: '2px solid var(--accent)',
  fontFamily: 'var(--font-serif), serif',
  fontSize: 22,
  fontStyle: 'italic',
  fontWeight: 400,
  lineHeight: 1.4,
  color: 'var(--ink)',
  textWrap: 'pretty',
  maxWidth: 680,
};

const ul: CSSProperties = {
  margin: '0 0 22px 20px',
  padding: 0,
  fontFamily: 'var(--font-sans), sans-serif',
  fontSize: 16,
  lineHeight: 1.85,
  color: 'var(--ink-soft)',
  maxWidth: 680,
};

const li: CSSProperties = { marginBottom: 8 };

const hr: CSSProperties = {
  border: 'none',
  borderTop: '1px solid var(--border-md)',
  margin: '36px 0',
};

const a: CSSProperties = { color: 'var(--accent)', textDecoration: 'underline' };

const strong: CSSProperties = { color: 'var(--ink)', fontWeight: 600 };

export function ArticleBody({ markdown }: { markdown: string }) {
  return (
    <div style={{ display: 'flow-root' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: (props) => <p style={paragraph}>{props.children}</p>,
          h2: (props) => <h2 style={h2}>{props.children}</h2>,
          h3: (props) => <h3 style={h3}>{props.children}</h3>,
          blockquote: (props) => <blockquote style={blockquote}>{props.children}</blockquote>,
          ul: (props) => <ul style={ul}>{props.children}</ul>,
          ol: (props) => <ol style={{ ...ul, listStyle: 'decimal' }}>{props.children}</ol>,
          li: (props) => <li style={li}>{props.children}</li>,
          hr: () => <hr style={hr} />,
          a: ({ href, children }) => (
            <a href={href} style={a}>
              {children}
            </a>
          ),
          strong: (props) => <strong style={strong}>{props.children}</strong>,
          em: (props) => <em style={{ fontStyle: 'italic' }}>{props.children}</em>,
          img: ({ src, alt }) => (
            <span
              style={{
                float: 'right',
                clear: 'right',
                width: 'clamp(300px, 38%, 460px)',
                marginLeft: 28,
                marginRight: 0,
                marginTop: 8,
                marginBottom: 16,
                background: 'var(--bg-alt)',
                shapeOutside: 'margin-box',
              }}
              className="article-inline-image"
            >
              {/* biome-ignore lint/performance/noImgElement: editorial inline images, sized by parent */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={typeof src === 'string' ? src : ''}
                alt={alt ?? ''}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
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
