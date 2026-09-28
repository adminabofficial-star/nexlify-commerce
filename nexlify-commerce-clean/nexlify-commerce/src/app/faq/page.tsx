import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import FaqSearch from './FaqSearch';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to the most common questions about working with Nexify.',
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title={<>Frequently asked <span className="gradient-text">questions</span></>}
        subtitle="Everything you need to know. Can’t find an answer? Reach out anytime."
      />
      <section className="section pt-4">
        <div className="container-px">
          <FaqSearch />
        </div>
      </section>
      <CTA />
    </>
  );
}
