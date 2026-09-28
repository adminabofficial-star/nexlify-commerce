import { NextResponse } from 'next/server';
import { sendEmail, fieldsToHtml } from '@/lib/email';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, position, portfolio, message } = body ?? {};

    if (!name || !email || !emailRe.test(String(email)) || !position) {
      return NextResponse.json({ error: 'Please provide a name, valid email, and position.' }, { status: 400 });
    }

    await sendEmail({
      subject: `Job application — ${position} — ${name}`,
      replyTo: String(email),
      html: fieldsToHtml('New Job Application', {
        Name: String(name),
        Email: String(email),
        Phone: String(phone ?? ''),
        Position: String(position),
        'Portfolio / LinkedIn': String(portfolio ?? ''),
        Message: String(message ?? ''),
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/careers]', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
