import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import ServiceCard from '@/components/ui/ServiceCard';
import ServiceDetail from '@/components/sections/ServiceDetail';
import { services } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our full range of services: web & mobile development, e-commerce, AI solutions, UI/UX design, branding, digital marketing, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Everything you need to <span className="gradient-text">build & grow</span></>}
        subtitle="Twelve core capabilities, one dedicated team. From first concept to ongoing support, we cover the full digital lifecycle."
      />

      <section className="section pt-4">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-4">
        {services.map((service, i) => (
          <ServiceDetail key={service.slug} service={service} reversed={i % 2 === 1} />
        ))}
      </div>

      <CTA />
    </>
  );
}
