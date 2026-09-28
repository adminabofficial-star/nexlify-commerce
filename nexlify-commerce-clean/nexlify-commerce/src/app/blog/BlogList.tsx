'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock } from 'lucide-react';
import { blogCategories, posts } from '@/lib/data/blog';
import Newsletter from '@/components/ui/Newsletter';

export default function BlogList() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const featured = posts.filter((p) => p.featured);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCat = cat === 'All' || p.category === cat;
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [query, cat]);

  return (
    <>
      {/* Featured */}
      {!query && cat === 'All' && (
        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          {featured.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl border border-white/10" data-cursor-hover>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={p.image} alt={p.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">Featured</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary">{p.category}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-white group-hover:gradient-text">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {p.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
        <div>
          <div className="mb-8 flex flex-wrap gap-2">
            {blogCategories.map((c) => (
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
            <p className="py-16 text-center text-slate-500">No articles found. Try a different search.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 4) * 0.06 }}
                ><Link
                  href={`/blog/${p.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10"
                  data-cursor-hover
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary">{p.category}</span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white group-hover:gradient-text">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 line-clamp-2">{p.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Clock size={14} /> {p.readTime}</span>
                      <span>{p.date}</span>
                    </div>
                  </div>
                </Link></motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-2xl glass p-5">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5">
              <Search size={16} className="text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="rounded-2xl glass p-5">
            <h4 className="mb-4 font-semibold text-white">Categories</h4>
            <ul className="space-y-2">
              {blogCategories.filter((c) => c !== 'All').map((c) => (
                <li key={c}>
                  <button onClick={() => setCat(c)} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl glass p-5">
            <h4 className="mb-2 font-semibold text-white">Newsletter</h4>
            <p className="mb-4 text-sm text-slate-400">Get the latest articles in your inbox.</p>
            <Newsletter compact />
          </div>
        </aside>
      </div>
    </>
  );
}
