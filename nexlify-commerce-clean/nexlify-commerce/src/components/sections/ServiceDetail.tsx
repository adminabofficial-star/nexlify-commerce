'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Service } from '@/lib/data/services';
import { serviceIcons } from '@/lib/icons';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function ServiceDetail({ service, reversed }: { service: Service; reversed?: boolean }) {
  const Icon = serviceIcons[service.icon];
  return (
    <section id={service.slug} className="scroll-mt-28 py-12">
      <div className="container-px">
        <div className={cn('grid items-center gap-10 lg:grid-cols-2', reversed && 'lg:[direction:rtl]')}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:[direction:ltr]"
          >
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white">
                <Icon size={24} />
              </span>
              <span className="eyebrow">Service</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{service.title}</h2>
            <p className="mt-4 text-slate-400">{service.description}</p>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-white">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-white">Key Benefits</p>
              <div className="grid grid-cols-2 gap-2">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check size={16} className="text-cyan" /> {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/pricing">View Pricing</Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:[direction:ltr]"
          >
            <div className="card-glow p-7">
              <p className="mb-5 text-sm font-semibold text-white">What’s included</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3 py-2.5 text-sm text-slate-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                    {f}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
