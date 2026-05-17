'use client';

import { useState } from 'react';

type PropertyPayload = {
  slug: string;
  address: string;
  hood?: string;
  price?: string;
  url?: string;
};

type Props = {
  variant?: 'contact' | 'property';
  submitLabel?: string;
  property?: PropertyPayload;
};

type Status = 'idle' | 'sending' | 'sent' | 'error';

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif), serif',
  fontSize: 13,
  fontStyle: 'italic',
  color: 'var(--ink-mute)',
  marginBottom: 6,
};

export function InquireForm({
  variant = 'contact',
  submitLabel = 'Send message',
  property,
}: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [considering, setConsidering] = useState('');
  const [message, setMessage] = useState('');
  const [hp, setHp] = useState('');

  const showPhone = variant === 'contact';
  const showConsidering = true;
  const showMessage = variant === 'property';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          considering,
          message,
          property: property
            ? {
                ...property,
                url: property.url || (typeof window !== 'undefined' ? window.location.href : ''),
              }
            : undefined,
          hp,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus('error');
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setStatus('sent');
      setName('');
      setEmail('');
      setPhone('');
      setConsidering('');
      setMessage('');
    } catch {
      setStatus('error');
      setError('Network error. Please try again.');
    }
  }

  if (status === 'sent') {
    return (
      <div
        style={{
          padding: '24px 0',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 22,
            fontWeight: 400,
            color: 'var(--ink)',
            marginBottom: 8,
            textWrap: 'pretty',
          }}
        >
          Thanks. We'll be in touch shortly.
        </div>
        <div
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 12,
            color: 'var(--ink-mute)',
            lineHeight: 1.7,
          }}
        >
          Same day response during business hours. If it's urgent, call (310) 000-0000.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <div>
        <div style={labelStyle}>Name</div>
        <input
          type="text"
          required
          minLength={2}
          maxLength={120}
          placeholder="Your full name"
          className="inp"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <div style={labelStyle}>Email</div>
        <input
          type="email"
          required
          maxLength={200}
          placeholder="your@email.com"
          className="inp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {showPhone ? (
        <div>
          <div style={labelStyle}>Phone</div>
          <input
            type="tel"
            maxLength={40}
            placeholder="(310) 000-0000"
            className="inp"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            inputMode="tel"
          />
        </div>
      ) : null}
      {showConsidering ? (
        <div>
          <div style={labelStyle}>What you're considering</div>
          <input
            type="text"
            maxLength={200}
            placeholder={
              variant === 'property'
                ? 'Buyer · Seller · Just looking'
                : 'Buying · Selling · Both · Not sure'
            }
            className="inp"
            value={considering}
            onChange={(e) => setConsidering(e.target.value)}
          />
        </div>
      ) : null}
      {showMessage ? (
        <div>
          <div style={labelStyle}>Anything else</div>
          <textarea
            maxLength={2000}
            placeholder="Optional"
            className="inp"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      ) : null}

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        style={{
          position: 'absolute',
          left: '-9999px',
          width: 1,
          height: 1,
          opacity: 0,
        }}
        aria-hidden="true"
      />

      {status === 'error' ? (
        <div
          role="alert"
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 12,
            color: 'var(--accent)',
            padding: '8px 0',
          }}
        >
          {error}
        </div>
      ) : null}

      <div style={{ paddingTop: 8 }}>
        <button
          type="submit"
          disabled={status === 'sending'}
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            background: variant === 'property' ? 'var(--ink)' : 'var(--ink)',
            color: 'var(--bg)',
            padding: '13px 28px',
            border: 'none',
            borderRadius: 1,
            opacity: status === 'sending' ? 0.6 : 1,
            cursor: status === 'sending' ? 'wait' : 'pointer',
          }}
        >
          {status === 'sending' ? 'Sending...' : submitLabel}
        </button>
      </div>
    </form>
  );
}
