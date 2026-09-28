'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { faqs } from '@/lib/data/content';
import Accordion from '@/components/ui/Accordion';

const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FaqSearch() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(
    () =>
      faqs.filter((f) => {
        const matchesCat = cat === 'All' || f.category === cat;
        const matchesQuery =
          f.q.toLowerCase().includes(query.toLowerCase()) ||
          f.a.toLowerCase().includes(query.toLowerCase());
        return matchesCat && matchesQuery;
      }),
    [query, cat],
  );

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center gap-2 rounded-full glass px-5 py-3">
        <Search size={18} className="text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions..."
          className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
        />
      </div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${cat === c ? 'bg-brand-gradient text-white' : 'glass text-slate-300 hover:text-white'}`}
          >
            {c}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="py-12 text-center text-slate-500">No results found.</p>
      ) : (
        <Accordion items={filtered} />
      )}
    </div>
  );
}
