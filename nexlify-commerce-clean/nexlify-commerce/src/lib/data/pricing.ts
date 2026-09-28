export interface Plan {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  featured?: boolean;
  features: string[];
  cta: string;
}

export const plans: Plan[] = [
  {
    name: 'Basic',
    tagline: 'For individuals & small ideas',
    monthly: 499, yearly: 4990,
    features: ['5-page website', 'Responsive design', 'Basic SEO setup', 'Contact form', '2 rounds of revisions', '30 days support'],
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    tagline: 'For growing businesses',
    monthly: 1299, yearly: 12990, featured: true,
    features: ['Up to 12 pages', 'Custom design', 'Advanced SEO', 'CMS integration', 'Animations & interactions', 'Analytics setup', '5 rounds of revisions', '90 days support'],
    cta: 'Most Popular',
  },
  {
    name: 'Premium',
    tagline: 'For ambitious brands',
    monthly: 2999, yearly: 29990,
    features: ['Unlimited pages', 'Premium 3D & animations', 'E-commerce / SaaS features', 'API integrations', 'Performance optimization', 'Priority support', 'Unlimited revisions', '6 months support'],
    cta: 'Go Premium',
  },
  {
    name: 'Enterprise',
    tagline: 'For large-scale platforms',
    monthly: 0, yearly: 0,
    features: ['Fully custom solution', 'Dedicated team', 'Custom architecture', 'SLA & uptime guarantees', 'Security & compliance', 'Dedicated account manager', 'White-glove onboarding', '24/7 support'],
    cta: 'Contact Sales',
  },
];

export const comparison = [
  { feature: 'Custom Design', basic: false, standard: true, premium: true, enterprise: true },
  { feature: 'Pages', basic: '5', standard: '12', premium: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'SEO Optimization', basic: 'Basic', standard: 'Advanced', premium: 'Advanced', enterprise: 'Enterprise' },
  { feature: 'CMS Integration', basic: false, standard: true, premium: true, enterprise: true },
  { feature: '3D & Animations', basic: false, standard: true, premium: true, enterprise: true },
  { feature: 'E-Commerce', basic: false, standard: false, premium: true, enterprise: true },
  { feature: 'API Integrations', basic: false, standard: false, premium: true, enterprise: true },
  { feature: 'Dedicated Team', basic: false, standard: false, premium: false, enterprise: true },
  { feature: 'SLA Guarantee', basic: false, standard: false, premium: false, enterprise: true },
  { feature: 'Support Duration', basic: '30 days', standard: '90 days', premium: '6 months', enterprise: '24/7' },
];
