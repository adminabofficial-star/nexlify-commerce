'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/content';

export default function TestimonialSlider() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const t = testimonials[index];

  const paginate = (d: number) =>
    setState([(index + d + testimonials.length) % testimonials.length, d]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
        <Quote className="mb-6 text-primary/60" size={44} />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">“{t.quote}”</p>
            <div className="mt-8 flex items-center gap-4">
              <Image
                src={t.img}
                alt={t.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/40"
              />
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => paginate(-1)}
          className="grid h-11 w-11 place-items-center rounded-full glass text-white transition-transform hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setState([i, i > index ? 1 : -1])}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-brand-gradient' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
        <button
          onClick={() => paginate(1)}
          className="grid h-11 w-11 place-items-center rounded-full glass text-white transition-transform hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
