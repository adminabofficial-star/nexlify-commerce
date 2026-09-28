'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { portfolioCategories, projects, type Project } from '@/lib/data/portfolio';

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState<Project | null>(null);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            data-cursor-hover
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              filter === cat ? 'bg-brand-gradient text-white' : 'glass text-slate-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            >
              <button
                onClick={() => setActive(p)}
                data-cursor-hover
                className="group block w-full overflow-hidden rounded-2xl border border-white/10 text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                  <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs text-white">{p.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-white group-hover:gradient-text">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl glass-strong"
            >
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white" aria-label="Close">
                <X size={20} />
              </button>
              <div className="relative aspect-video">
                <Image src={active.image} alt={active.title} fill className="object-cover" />
              </div>
              <div className="p-7 sm:p-9">
                <span className="eyebrow">{active.category} · {active.client}</span>
                <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">{active.title}</h2>
                <div className="mt-6 space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold text-primary">The Challenge</h4>
                    <p className="mt-1 text-sm text-slate-300">{active.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary">Our Solution</h4>
                    <p className="mt-1 text-sm text-slate-300">{active.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary">The Result</h4>
                    <p className="mt-1 text-sm text-slate-300">{active.result}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={active.liveUrl} className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={active.githubUrl} className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white">
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
