'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '@/lib/data/services';
import { serviceIcons } from '@/lib/icons';

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = serviceIcons[service.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Link
        href={`/services#${service.slug}`}
        className="card-glow group block h-full p-7"
        data-cursor-hover
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-primary/25">
            <Icon size={26} />
          </div>
          <ArrowUpRight
            size={22}
            className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
          />
        </div>
        <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.short}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.technologies.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
