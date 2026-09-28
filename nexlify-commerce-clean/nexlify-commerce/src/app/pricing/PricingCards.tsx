'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import { plans, comparison } from '@/lib/data/pricing';

export default function PricingCards() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <div className="mb-12 flex items-center justify-center gap-4">
        <span className={`text-sm ${!yearly ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
        <button
          onClick={() => setYearly((y) => !y)}
          className="relative h-8 w-16 rounded-full bg-white/10 p-1 transition-colors"
          aria-label="Toggle billing period"
        >
          <motion.span
            animate={{ x: yearly ? 32 : 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="block h-6 w-6 rounded-full bg-brand-gradient"
          />
        </button>
        <span className={`text-sm ${yearly ? 'text-white' : 'text-slate-500'}`}>
          Yearly <span className="ml-1 rounded-full bg-cyan/20 px-2 py-0.5 text-xs text-cyan">Save 17%</span>
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative flex flex-col rounded-3xl border p-7 ${
              plan.featured ? 'border-primary/50 bg-white/[0.05]' : 'border-white/10 bg-white/[0.02]'
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{plan.tagline}</p>
            <div className="mt-5">
              {plan.monthly === 0 ? (
                <span className="font-display text-4xl font-bold text-white">Custom</span>
              ) : (
                <>
                  <span className="font-display text-4xl font-bold gradient-text">
                    ${yearly ? plan.yearly.toLocaleString() : plan.monthly.toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-500">/{yearly ? 'year' : 'project'}</span>
                </>
              )}
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check size={16} className="mt-0.5 shrink-0 text-cyan" /> {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-7 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                plan.featured ? 'bg-brand-gradient text-white' : 'glass text-white'
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="mt-20 overflow-x-auto">
        <h3 className="mb-8 text-center font-display text-2xl font-bold text-white">Compare plans</h3>
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-4 text-left text-sm font-semibold text-slate-400">Feature</th>
              {['Basic', 'Standard', 'Premium', 'Enterprise'].map((p) => (
                <th key={p} className="p-4 text-center text-sm font-semibold text-white">{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.feature} className="border-b border-white/5">
                <td className="p-4 text-sm text-slate-300">{row.feature}</td>
                {([row.basic, row.standard, row.premium, row.enterprise] as (boolean | string)[]).map((val, idx) => (
                  <td key={idx} className="p-4 text-center text-sm">
                    {typeof val === 'boolean' ? (
                      val ? <Check size={18} className="mx-auto text-cyan" /> : <X size={18} className="mx-auto text-slate-600" />
                    ) : (
                      <span className="text-slate-300">{val}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
