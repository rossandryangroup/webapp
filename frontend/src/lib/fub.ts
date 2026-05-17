import { z } from 'zod';

export const InquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(200),
  phone: z.string().trim().max(40).optional().default(''),
  message: z.string().trim().max(2000).optional().default(''),
  considering: z.string().trim().max(200).optional().default(''),
  property: z
    .object({
      slug: z.string().trim().max(200),
      address: z.string().trim().max(200),
      hood: z.string().trim().max(120).optional().default(''),
      price: z.string().trim().max(40).optional().default(''),
      url: z.string().trim().max(500).optional().default(''),
    })
    .optional(),
  hp: z.string().max(0).optional(),
});

export type Inquiry = z.infer<typeof InquirySchema>;

const FUB_BASE = 'https://api.followupboss.com/v1';

function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

function priceToNumber(raw: string): number | undefined {
  const digits = raw.replace(/[^0-9.]/g, '');
  if (!digits) return undefined;
  const n = Number(digits);
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

export async function sendInquiryToFub(
  inq: Inquiry,
  env: { apiKey: string; system: string; leadSource: string },
): Promise<{ ok: true } | { ok: false; status: number; body: string }> {
  const { firstName, lastName } = splitName(inq.name);
  const messageLines: string[] = [];
  if (inq.considering) messageLines.push(`Considering: ${inq.considering}`);
  if (inq.message) messageLines.push(inq.message);
  if (inq.property) {
    const tail = [inq.property.hood && `(${inq.property.hood})`, inq.property.price]
      .filter(Boolean)
      .join(' ');
    messageLines.push(`Property: ${inq.property.address}${tail ? ', ' + tail : ''}`);
  }

  const person: Record<string, unknown> = {
    firstName,
    lastName,
    emails: [{ value: inq.email }],
    source: env.leadSource,
  };
  if (inq.phone) person.phones = [{ value: inq.phone }];

  const event: Record<string, unknown> = {
    source: env.leadSource,
    type: inq.property ? 'Property Inquiry' : 'General Inquiry',
    message: messageLines.join('\n\n') || 'Website inquiry',
    person,
  };

  if (inq.property) {
    const priceNum = priceToNumber(inq.property.price);
    const property: Record<string, unknown> = {
      street: inq.property.address,
      city: inq.property.hood || 'Beverly Hills',
      state: 'CA',
    };
    if (priceNum) property.price = priceNum;
    if (inq.property.url) property.url = inq.property.url;
    event.property = property;
  }

  const res = await fetch(`${FUB_BASE}/events`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${env.apiKey}:`).toString('base64')}`,
      'Content-Type': 'application/json',
      'X-System': env.system,
      'X-System-Key': env.apiKey,
    },
    body: JSON.stringify(event),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    return { ok: false, status: res.status, body: body.slice(0, 400) };
  }
  return { ok: true };
}
