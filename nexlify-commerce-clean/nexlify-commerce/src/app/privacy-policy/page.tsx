import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import LegalContent from '@/components/sections/LegalContent';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Nexus collects, uses, and protects your personal information.',
};

const sections = [
  { heading: '1. Introduction', body: [`This Privacy Policy explains how ${site.fullName} ("we", "us") collects, uses, and safeguards your information when you visit our website or use our services.`] },
  { heading: '2. Information We Collect', body: ['We collect information you provide directly, such as your name, email, phone number, and project details when you contact us or subscribe to our newsletter.', 'We also automatically collect certain data such as IP address, browser type, and usage statistics through cookies and analytics tools.'] },
  { heading: '3. How We Use Your Information', body: ['We use your information to respond to inquiries, deliver and improve our services, send updates you have opted into, and comply with legal obligations.'] },
  { heading: '4. Sharing of Information', body: ['We do not sell your personal information. We may share data with trusted service providers who help us operate our business, under strict confidentiality agreements.'] },
  { heading: '5. Data Security', body: ['We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.'] },
  { heading: '6. Your Rights', body: ['You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at ' + site.email + '.'] },
  { heading: '7. Cookies', body: ['We use cookies to enhance your experience. You can control cookies through your browser settings.'] },
  { heading: '8. Changes to This Policy', body: ['We may update this policy from time to time. Changes will be posted on this page with an updated revision date.'] },
  { heading: '9. Contact Us', body: [`If you have questions about this policy, reach out to us at ${site.email}.`] },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Your privacy matters to us. Here’s how we handle your data." />
      <section className="section pt-4">
        <LegalContent updated="June 1, 2025" sections={sections} />
      </section>
    </>
  );
}
