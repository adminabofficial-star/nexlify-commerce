import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import Marquee from '@/components/ui/Marquee';
import { values, timeline, awards, team, stats, technologies } from '@/lib/data/content';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Nexus — our story, mission, values, team, and the milestones that shaped our award-winning digital agency.',
};

const gallery = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nexus"
        title={<>Crafting digital excellence since <span className="gradient-text">2013</span></>}
        subtitle="We’re a global team of makers united by a love for beautiful, high-performing products."
      />

      {/* Story */}
      <section className="section pt-4">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal y={40}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-20 blur-2xl" />
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80"
                alt="Our story"
                width={900}
                height={700}
                className="relative rounded-3xl border border-white/10 object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={<>From a two-person studio to a <span className="gradient-text">global agency</span></>}
              subtitle="What began as two friends building websites in a tiny office has grown into a multidisciplinary agency serving clients in 28 countries. Our obsession with craft and outcomes has never changed."
            />
            <p className="mt-5 text-slate-400">
              We believe great software is a blend of art and engineering. Every project we take on is an
              opportunity to push boundaries, learn, and deliver work we’re genuinely proud of.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          {[
            { icon: Target, title: 'Our Mission', text: 'To empower ambitious companies with technology and design that creates measurable, lasting impact.' },
            { icon: Eye, title: 'Our Vision', text: 'To be the most trusted digital partner for brands that refuse to settle for ordinary.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="card-glow h-full p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white">
                  <item.icon size={26} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Core Values" title={<>What we <span className="gradient-text">stand for</span></>} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card-glow h-full p-6">
                  <span className="font-display text-3xl font-bold gradient-text">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container-px grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div className="card-glow p-6 text-center">
                <div className="font-display text-4xl font-bold gradient-text">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Our Team" title={<>The people behind the <span className="gradient-text">magic</span></>} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={member.img} alt={member.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Our Journey" title={<>Milestones that <span className="gradient-text">shaped us</span></>} />
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-cyan sm:left-1/2" />
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <div className={`relative mb-10 flex items-start gap-6 sm:w-1/2 ${i % 2 === 0 ? 'sm:ml-0 sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'}`}>
                  <span className={`absolute top-1 h-3 w-3 rounded-full bg-brand-gradient ring-4 ring-background ${i % 2 === 0 ? 'left-2.5 sm:left-auto sm:-right-1.5' : 'left-2.5 sm:-left-1.5'}`} />
                  <div className="ml-10 sm:ml-0">
                    <span className="font-display text-xl font-bold gradient-text">{item.year}</span>
                    <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Recognition" title={<>Awards & <span className="gradient-text">achievements</span></>} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="card-glow h-full p-6 text-center">
                  <Award size={32} className="mx-auto text-cyan" />
                  <h3 className="mt-4 font-semibold text-white">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{a.org}</p>
                  <p className="mt-1 text-xs text-primary">{a.year}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Tools & Tech" title={<>Technologies we <span className="gradient-text">use</span></>} />
          <div className="mt-12">
            <Marquee items={technologies} />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Office Life" title={<>Inside <span className="gradient-text">Nexus</span></>} />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 0.06}>
                <div className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10">
                  <Image src={src} alt="Office life" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Why Choose Us" title={<>Reasons clients <span className="gradient-text">stay with us</span></>} />
          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {['Senior-only team', 'Transparent pricing', 'On-time delivery', 'Design + engineering in-house', 'Proven track record', 'Long-term partnership'].map((item) => (
              <Reveal key={item}>
                <div className="flex items-center gap-3 rounded-xl glass px-4 py-3 text-slate-200">
                  <CheckCircle2 size={20} className="text-cyan" /> {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
