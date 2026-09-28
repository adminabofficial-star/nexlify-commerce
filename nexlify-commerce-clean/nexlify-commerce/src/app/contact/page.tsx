import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/lib/site';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Nexify. Tell us about your project and we’ll get back to you within one business day.',
};

const info = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone}` },
  { icon: MessageCircle, label: 'WhatsApp', value: site.phone, href: `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}` },
  { icon: MapPin, label: 'Office', value: site.address },
  { icon: Clock, label: 'Hours', value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let’s build something <span className="gradient-text">great together</span></>}
        subtitle="Have a project in mind? We’d love to hear from you. Fill out the form and we’ll be in touch."
      />

      <section className="section pt-4">
        <div className="container-px grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Info */}
          <div className="space-y-4">
            {info.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.06}>
                {item.href ? (
                  <a href={item.href} className="card-glow flex items-start gap-4 p-5" data-cursor-hover>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                      <item.icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                      <p className="mt-1 text-sm text-white">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="card-glow flex items-start gap-4 p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                      <item.icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                      <p className="mt-1 text-sm text-white">{item.value}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <Reveal y={40}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="section pt-0">
        <div className="container-px">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4%2C37.78%2C-122.39%2C37.79&layer=mapnik"
                className="h-[400px] w-full grayscale invert-[0.9]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
