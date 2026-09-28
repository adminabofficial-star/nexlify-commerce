import type { Metadata } from 'next';
import Image from 'next/image';
import { Quote, Play, Star } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/lib/data/content';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'See what our clients say about working with Nexus — real reviews from real partners.',
};

const extended = [...testimonials, ...testimonials.map((t) => ({ ...t, name: t.name + ' ' }))];

const videos = [
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80',
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={<>What our clients <span className="gradient-text">say</span></>}
        subtitle="We measure our success by the success of our partners. Here’s their feedback."
      />

      <section className="section pt-4">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {extended.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="card-glow flex h-full flex-col p-6">
                  <Quote size={28} className="text-primary/60" />
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} className="fill-cyan text-cyan" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">“{t.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <Image src={t.img} alt={t.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30" />
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Video Stories" title={<>Hear it <span className="gradient-text">in their words</span></>} />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {videos.map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <button className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10" data-cursor-hover>
                  <Image src={src} alt="Video testimonial" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 grid place-items-center bg-black/30">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient text-white transition-transform group-hover:scale-110">
                      <Play size={24} className="ml-1" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
