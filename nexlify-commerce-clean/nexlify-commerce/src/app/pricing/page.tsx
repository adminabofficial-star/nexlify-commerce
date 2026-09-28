import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import Accordion from '@/components/ui/Accordion';
import SectionHeading from '@/components/ui/SectionHeading';
import PricingCards from './PricingCards';
import { faqs } from '@/lib/data/content';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent, flexible pricing plans for projects of every size — from startups to enterprise.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Simple, transparent <span className="gradient-text">pricing</span></>}
        subtitle="Choose a plan that fits your goals. No hidden fees, ever."
      />
      <section className="section pt-4">
        <div className="container-px">
          <PricingCards />
        </div>
      </section>
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="FAQ" title={<>Pricing <span className="gradient-text">questions</span></>} />
          <div className="mt-14">
            <Accordion items={faqs.filter((f) => f.category === 'Pricing' || f.category === 'General')} />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
