'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { services } from '@/lib/data/services';

const budgets = ['< $5k', '$5k – $15k', '$15k – $50k', '$50k+'];

export default function ContactForm() {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState('');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    if (!data.get('name')) next.name = 'Name is required';
    const email = String(data.get('email') || '');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email';
    if (!data.get('message')) next.message = 'Please tell us about your project';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: '' }));
        throw new Error(error || 'Failed to send. Please try again.');
      }
      setDone(true);
      form.reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="grid place-items-center rounded-3xl glass-strong p-12 text-center">
        <CheckCircle2 size={56} className="text-cyan" />
        <h3 className="mt-5 font-display text-2xl font-bold text-white">Message sent!</h3>
        <p className="mt-2 max-w-sm text-slate-400">
          Thanks for reaching out. We’ll get back to you within one business day.
        </p>
        <button onClick={() => setDone(false)} className="mt-6 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl glass-strong p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input name="name" label="Name" error={errors.name} />
        <Input name="email" type="email" label="Email" error={errors.email} />
        <Input name="phone" label="Phone" optional />
        <Input name="company" label="Company" optional />
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Service</label>
          <select name="service" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none">
            <option value="" className="bg-surface">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title} className="bg-surface">{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Budget</label>
          <select name="budget" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none">
            <option value="" className="bg-surface">Select a budget</option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-surface">{b}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none"
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>
      {serverError && <p className="mt-4 text-sm text-red-400">{serverError}</p>}
      <button
        type="submit"
        disabled={sending}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {sending ? 'Sending…' : 'Send Message'} <Send size={16} />
      </button>
    </form>
  );
}

function Input({ name, label, type = 'text', error, optional }: { name: string; label: string; type?: string; error?: string; optional?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label} {optional && <span className="text-slate-500">(optional)</span>}
      </label>
      <input
        name={name}
        type={type}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
