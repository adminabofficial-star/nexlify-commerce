'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '@/lib/site';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute inset-0 -m-8 animate-spin-slow rounded-full border-t border-primary/60" />
            <div className="absolute inset-0 -m-12 animate-spin-slow rounded-full border-b border-accent/40 [animation-direction:reverse]" />
            <span className="font-display text-4xl font-bold gradient-text">{site.name}</span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="mt-10 h-0.5 overflow-hidden rounded-full bg-brand-gradient"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
