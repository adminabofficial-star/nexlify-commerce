import { NextResponse } from 'next/server';
import { sendEmail, fieldsToHtml } from '@/lib/email';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body ?? {};

    if (!name || !email || !emailRe.test(String(email)) || !message) {
      return NextResponse.json({ error: 'Please provide a name, valid email, and message.' }, { status: 400 });
    }

    await sendEmail({
      subject: `New project inquiry from ${name}`,
      replyTo: String(email),
      html: fieldsToHtml('New Project Inquiry', {
        Name: String(name),
        Email: String(email),
        Phone: String(phone ?? ''),
        Company: String(company ?? ''),
        Service: String(service ?? ''),
        Budget: String(budget ?? ''),
        Message: String(message),
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/contact]', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
