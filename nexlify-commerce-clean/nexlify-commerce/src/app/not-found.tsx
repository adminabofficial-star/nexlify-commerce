'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden px-5 pt-20">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-[8rem] font-bold leading-none gradient-text sm:text-[12rem]"
        >
          404
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Lost in space</h2>
          <p className="mx-auto mt-3 max-w-md text-slate-400">
            The page you’re looking for has drifted off into the void. Let’s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/" icon={<Home size={18} />}>Back to Home</Button>
            <Button href="/contact" variant="secondary" icon={<ArrowLeft size={16} />}>Contact Support</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
