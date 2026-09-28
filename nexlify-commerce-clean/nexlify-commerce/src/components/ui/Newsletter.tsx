'use client';

import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSending(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const { error: msg } = await res.json().catch(() => ({ error: '' }));
        throw new Error(msg || 'Subscription failed. Please try again.');
      }
      setDone(true);
      setEmail('');
      setTimeout(() => setDone(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className="w-full">
      <div className={`flex items-center gap-2 rounded-full glass p-1.5 ${compact ? '' : 'sm:p-2'}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={sending}
          className="flex shrink-0 items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 disabled:opacity-60"
        >
          {done ? <Check size={16} /> : <Send size={16} />}
          <span className="hidden sm:inline">{sending ? '…' : done ? 'Subscribed' : 'Subscribe'}</span>
        </button>
      </div>
      {error && <p className="mt-2 px-4 text-xs text-red-400">{error}</p>}
      {done && <p className="mt-2 px-4 text-xs text-cyan">Thanks for subscribing! 🎉</p>}
    </form>
  );
}
