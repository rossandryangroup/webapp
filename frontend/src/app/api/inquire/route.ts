import { type NextRequest, NextResponse } from 'next/server';
import { InquirySchema, sendInquiryToFub } from '../../../lib/fub';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  const system = process.env.FOLLOW_UP_BOSS_SYSTEM ?? 'RossAndRyanGroup-Website';
  const leadSource = process.env.FOLLOW_UP_BOSS_LEAD_SOURCE ?? 'Ross & Ryan Group Website';

  if (!apiKey) {
    return NextResponse.json({ ok: false, error: 'CRM not configured' }, { status: 503 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = InquirySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Invalid input', issues: parsed.error.issues },
      { status: 400 },
    );
  }

  if (parsed.data.hp && parsed.data.hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const result = await sendInquiryToFub(parsed.data, { apiKey, system, leadSource });
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: 'Could not deliver inquiry', status: result.status },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
