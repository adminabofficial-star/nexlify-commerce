import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import LegalContent from '@/components/sections/LegalContent';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms and conditions governing the use of Nexify services and website.',
};

const sections = [
  { heading: '1. Acceptance of Terms', body: [`By accessing or using the ${site.fullName} website and services, you agree to be bound by these Terms & Conditions.`] },
  { heading: '2. Services', body: ['We provide digital services including web and mobile development, design, AI solutions, and marketing. Specific deliverables are defined in individual project agreements.'] },
  { heading: '3. Payments', body: ['Payment terms are outlined in project proposals. Invoices are due according to agreed milestones. Late payments may incur fees.'] },
  { heading: '4. Intellectual Property', body: ['Upon full payment, ownership of final deliverables transfers to the client unless otherwise agreed. We retain the right to showcase work in our portfolio.'] },
  { heading: '5. Client Responsibilities', body: ['Clients agree to provide timely feedback, content, and approvals necessary for project completion.'] },
  { heading: '6. Limitation of Liability', body: ['We are not liable for indirect, incidental, or consequential damages arising from the use of our services, to the maximum extent permitted by law.'] },
  { heading: '7. Termination', body: ['Either party may terminate a project agreement with written notice. Fees for completed work remain payable.'] },
  { heading: '8. Governing Law', body: ['These terms are governed by the laws of the State of California, USA.'] },
  { heading: '9. Contact', body: [`For questions regarding these terms, contact us at ${site.email}.`] },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Please read these terms carefully before using our services." />
      <section className="section pt-4">
        <LegalContent updated="June 1, 2025" sections={sections} />
      </section>
    </>
  );
}
