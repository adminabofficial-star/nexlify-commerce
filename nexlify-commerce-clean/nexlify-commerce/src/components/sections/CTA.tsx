'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="section">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 px-8 py-16 text-center sm:px-16 sm:py-24"
        >
          <div className="absolute inset-0 bg-brand-gradient opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-tight text-white text-balance sm:text-5xl">
              Ready to build something extraordinary?
            </h2>
            <p className="mt-5 text-lg text-white/90">
              Let’s turn your vision into a high-performing digital product. Get a free consultation today.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="secondary" className="!bg-white !text-background hover:!bg-white/90" icon={<ArrowRight size={18} />}>
                Start Your Project
              </Button>
              <Button href="/pricing" variant="ghost" className="text-white hover:bg-white/10">
                View Pricing
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
