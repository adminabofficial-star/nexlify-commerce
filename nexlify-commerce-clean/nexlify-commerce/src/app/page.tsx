import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import CTA from '@/components/sections/CTA';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import Marquee from '@/components/ui/Marquee';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialSlider from '@/components/ui/TestimonialSlider';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import { services } from '@/lib/data/services';
import { stats, trustedBy, process, technologies, faqs } from '@/lib/data/content';
import { projects } from '@/lib/data/portfolio';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trusted By */}
      <section className="py-14">
        <div className="container-px">
          <Reveal className="mb-8 text-center text-sm uppercase tracking-[0.2em] text-slate-500">
            Trusted by forward-thinking teams
          </Reveal>
          <Marquee items={trustedBy} />
        </div>
      </section>

      {/* About Preview */}
      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title={<>A digital partner that <span className="gradient-text">obsesses over quality</span></>}
              subtitle="We’re a multidisciplinary team of engineers, designers, and strategists. For over a decade we’ve helped startups and enterprises ship products that look stunning and perform flawlessly."
            />
            <div className="mt-8 space-y-3">
              {['Senior, dedicated team', 'Transparent process & pricing', 'Design and engineering under one roof', 'Long-term partnership mindset'].map((item) => (
                <Reveal key={item}>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-cyan" />
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-9">
              <Button href="/about" icon={<ArrowRight size={18} />}>Learn More About Us</Button>
            </div>
          </div>
          <Reveal y={40}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-20 blur-2xl" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="Our team collaborating"
                width={900}
                height={700}
                className="relative rounded-3xl border border-white/10 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Services that drive <span className="gradient-text">real growth</span></>}
            subtitle="End-to-end digital solutions, from idea to launch and beyond."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="secondary" icon={<ArrowRight size={18} />}>
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<>Numbers that speak for <span className="gradient-text">themselves</span></>}
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
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
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Work"
            title={<>Recent <span className="gradient-text">projects</span></>}
            subtitle="A glimpse of the products we’ve helped bring to life."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <a href="/portfolio" className="group block overflow-hidden rounded-2xl border border-white/10" data-cursor-hover>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                    <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs text-white">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-white group-hover:gradient-text">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{p.summary}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/portfolio" variant="secondary" icon={<ArrowRight size={18} />}>
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="How We Work"
            title={<>Our proven <span className="gradient-text">process</span></>}
            subtitle="A clear, collaborative workflow that delivers results — every time."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={(i % 4) * 0.06}>
                <div className="card-glow h-full p-6">
                  <span className="font-display text-4xl font-bold text-white/10">{step.step}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Testimonials"
            title={<>Loved by <span className="gradient-text">clients worldwide</span></>}
          />
          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Stack"
            title={<>Technologies we <span className="gradient-text">master</span></>}
            subtitle="We use the best tools for the job, always."
          />
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <Reveal key={tech} delay={(i % 8) * 0.03}>
                <span className="rounded-xl glass px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:scale-105 hover:border-primary/40 hover:text-white">
                  {tech}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Frequently asked <span className="gradient-text">questions</span></>}
          />
          <div className="mt-14">
            <Accordion items={faqs.slice(0, 6)} />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
