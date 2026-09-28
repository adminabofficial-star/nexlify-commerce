import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import BlogList from './BlogList';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tutorials, and stories on web development, design, AI, and growing your business.',
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>The Nexify <span className="gradient-text">Blog</span></>}
        subtitle="Ideas and expertise from our team on design, engineering, AI, and growth."
      />
      <section className="section pt-4">
        <div className="container-px">
          <BlogList />
        </div>
      </section>
      <CTA />
    </>
  );
}
