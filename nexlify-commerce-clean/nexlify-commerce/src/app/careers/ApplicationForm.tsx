'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { jobs } from '@/lib/data/content';
import Button from '@/components/ui/Button';

export default function ApplicationForm() {
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Valid email required';
    if (!data.get('position')) next.position = 'Select a position';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: '' }));
        throw new Error(error || 'Failed to submit. Please try again.');
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
      <div className="rounded-3xl glass-strong p-10 text-center">
        <CheckCircle2 size={48} className="mx-auto text-cyan" />
        <h3 className="mt-4 font-display text-2xl font-bold text-white">Application received!</h3>
        <p className="mt-2 text-slate-400">Thanks for applying. Our team will review and get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl glass-strong p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full Name" error={errors.name} />
        <Field name="email" type="email" label="Email" error={errors.email} />
        <Field name="phone" label="Phone" optional />
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Position</label>
          <select name="position" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none">
            <option value="" className="bg-surface">Select a role</option>
            {jobs.map((j) => (
              <option key={j.title} value={j.title} className="bg-surface">{j.title}</option>
            ))}
          </select>
          {errors.position && <p className="mt-1 text-xs text-red-400">{errors.position}</p>}
        </div>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">Portfolio / LinkedIn URL <span className="text-slate-500">(optional)</span></label>
        <input name="portfolio" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none" />
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">Why do you want to join us?</label>
        <textarea name="message" rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none" />
      </div>
      {serverError && <p className="mt-4 text-sm text-red-400">{serverError}</p>}
      <div className="mt-7">
        <Button type="submit" disabled={sending}>
          {sending ? 'Submitting…' : 'Submit Application'}
        </Button>
      </div>
    </form>
  );
}

function Field({ name, label, type = 'text', error, optional }: { name: string; label: string; type?: string; error?: string; optional?: boolean }) {
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
