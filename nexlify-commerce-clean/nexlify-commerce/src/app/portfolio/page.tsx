import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import PortfolioGrid from './PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore our portfolio of web, mobile, e-commerce, AI, and branding projects — complete with case studies and results.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={<>Projects we’re <span className="gradient-text">proud of</span></>}
        subtitle="Real results for real businesses. Filter by category and dive into the case studies."
      />
      <section className="section pt-4">
        <div className="container-px">
          <PortfolioGrid />
        </div>
      </section>
      <CTA />
    </>
  );
}
