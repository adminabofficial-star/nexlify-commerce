import type { Metadata } from 'next';
import { MapPin, Briefcase, Heart } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { jobs, benefits } from '@/lib/data/content';
import ApplicationForm from './ApplicationForm';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Nexus team. Explore open positions, our culture, and the benefits of working with us.',
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build the future <span className="gradient-text">with us</span></>}
        subtitle="We’re a remote-first team of curious, kind, and talented people. Come do the best work of your life."
      />

      {/* Culture */}
      <section className="section pt-4">
        <div className="container-px">
          <SectionHeading eyebrow="Our Culture" title={<>A place to <span className="gradient-text">grow & thrive</span></>} subtitle="We value autonomy, craftsmanship, and continuous learning. We move fast, support each other, and celebrate wins together." />
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Benefits" title={<>Perks that <span className="gradient-text">matter</span></>} />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={(i % 4) * 0.06}>
                <div className="card-glow flex h-full items-center gap-3 p-5">
                  <Heart size={18} className="shrink-0 text-cyan" />
                  <span className="text-sm text-slate-200">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Open Roles" title={<>Current <span className="gradient-text">openings</span></>} />
          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {jobs.map((job, i) => (
              <Reveal key={job.title} delay={(i % 4) * 0.05}>
                <div className="card-glow flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{job.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{job.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="rounded-full bg-white/5 px-2 py-0.5">{job.type}</span>
                    </div>
                  </div>
                  <a href="#apply" className="shrink-0 rounded-full bg-brand-gradient px-5 py-2.5 text-center text-sm font-semibold text-white transition-transform hover:scale-105">
                    Apply Now
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="section scroll-mt-28">
        <div className="container-px">
          <SectionHeading eyebrow="Apply" title={<>Send us your <span className="gradient-text">application</span></>} />
          <div className="mx-auto mt-14 max-w-2xl">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
