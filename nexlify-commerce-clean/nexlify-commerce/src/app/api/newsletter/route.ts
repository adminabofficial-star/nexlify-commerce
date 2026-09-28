import { NextResponse } from 'next/server';
import { sendEmail, fieldsToHtml } from '@/lib/email';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) ?? {};

    if (!email || !emailRe.test(String(email))) {
      return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 });
    }

    await sendEmail({
      subject: `New newsletter subscriber`,
      replyTo: String(email),
      html: fieldsToHtml('New Newsletter Subscriber', { Email: String(email) }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/newsletter]', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
