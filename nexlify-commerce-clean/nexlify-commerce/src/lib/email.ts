import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.EMAIL_FROM || 'onboarding@resend.dev';
const to = process.env.EMAIL_TO || 'hello@nexus-agency.com';

const resend = apiKey ? new Resend(apiKey) : null;

/** True when a real Resend key is configured. When false, the app runs in demo mode. */
export const emailConfigured = Boolean(resend);

interface SendArgs {
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Sends an email via Resend. In demo mode (no API key) it logs and resolves
 * successfully so forms still work without configuration.
 */
export async function sendEmail({ subject, html, replyTo }: SendArgs) {
  if (!resend) {
    console.info('[email] Demo mode — would send:', subject);
    return { demo: true as const };
  }
  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });
  if (error) throw new Error(error.message);
  return { id: data?.id };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Builds a simple HTML table from a record of fields. */
export function fieldsToHtml(title: string, fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#1e293b;vertical-align:top">${escapeHtml(k)}</td><td style="padding:8px 12px;color:#334155">${escapeHtml(v).replace(/\n/g, '<br/>')}</td></tr>`,
    )
    .join('');
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#3b82f6">${escapeHtml(title)}</h2>
      <table style="border-collapse:collapse;width:100%;background:#f8fafc;border-radius:8px">${rows}</table>
    </div>`;
}
