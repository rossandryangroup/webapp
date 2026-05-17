'use client';

import { useState } from 'react';
import Link from 'next/link';

type NavLink = [string, string];

export function NavMobileMenu({ links, current }: { links: NavLink[]; current: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          width: 30,
          height: 30,
          background: 'transparent',
          border: '1px solid var(--border-md)',
          borderRadius: 1,
          padding: 0,
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            display: 'block',
            width: 16,
            height: 0,
            borderTop: '1px solid var(--ink-mute)',
          }}
        />
        <span
          style={{
            display: 'block',
            width: 16,
            height: 0,
            borderTop: '1px solid var(--ink-mute)',
          }}
        />
        <span
          style={{
            display: 'block',
            width: 16,
            height: 0,
            borderTop: '1px solid var(--ink-mute)',
          }}
        />
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 20px 20px',
            gap: 4,
            boxShadow: '0 6px 16px rgba(0,0,0,.08)',
          }}
        >
          {links.map(([l, h]) => (
            <Link
              key={l}
              href={h}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: current === l ? 'var(--ink)' : 'var(--ink-soft)',
                padding: '12px 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {l}
            </Link>
          ))}
          <Link
            href="/contact#contact-form"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              background: 'var(--accent)',
              color: 'var(--bg)',
              padding: '12px 16px',
              borderRadius: 1,
              textAlign: 'center',
              marginTop: 8,
            }}
          >
            Inquire
          </Link>
        </div>
      )}
    </>
  );
}
