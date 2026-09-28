export type ServiceIcon =
  | 'web' | 'ecommerce' | 'wordpress' | 'graphic' | 'uiux' | 'mobile'
  | 'ai' | 'software' | 'cad' | 'marketing' | 'branding' | 'support';

export interface Service {
  slug: string;
  icon: ServiceIcon;
  title: string;
  short: string;
  description: string;
  features: string[];
  technologies: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: 'web-development',
    icon: 'web',
    title: 'Web Development',
    short: 'High-performance websites and web apps built to scale.',
    description:
      'From marketing sites to complex SaaS platforms, we engineer fast, accessible, and SEO-ready web experiences with modern frameworks and rock-solid architecture.',
    features: [
      'Business Websites', 'Portfolio Websites', 'Corporate Websites', 'Landing Pages',
      'Custom Web Applications', 'Progressive Web Apps', 'SaaS Platforms',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    benefits: ['95+ Lighthouse scores', 'Scalable architecture', 'SEO-first builds', 'Pixel-perfect UI'],
  },
  {
    slug: 'e-commerce-development',
    icon: 'ecommerce',
    title: 'E-Commerce Development',
    short: 'Conversion-focused stores that sell around the clock.',
    description:
      'We design and develop powerful online stores with seamless checkout, payment integration, and inventory systems on Shopify, WooCommerce, and Magento.',
    features: [
      'Shopify Store Development', 'Shopify Custom Themes', 'WooCommerce', 'Magento',
      'Payment Integration', 'Inventory Management', 'Multi Vendor Marketplace',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'Next.js Commerce'],
    benefits: ['Higher conversion rates', 'Secure payments', 'Mobile-optimized', 'Automated inventory'],
  },
  {
    slug: 'wordpress-development',
    icon: 'wordpress',
    title: 'WordPress Development',
    short: 'Custom, fast, and secure WordPress solutions.',
    description:
      'Custom themes, Elementor builds, and WooCommerce stores — fully optimized for speed, security, and search rankings.',
    features: ['Custom Themes', 'Elementor', 'WooCommerce', 'Speed Optimization', 'Security', 'SEO'],
    technologies: ['WordPress', 'PHP', 'Elementor', 'WooCommerce', 'MySQL'],
    benefits: ['Easy content management', 'Fast page loads', 'Hardened security', 'SEO-ready'],
  },
  {
    slug: 'graphic-design',
    icon: 'graphic',
    title: 'Graphic Design',
    short: 'Bold visuals that make your brand unforgettable.',
    description:
      'From logos to packaging, our designers craft striking visuals that communicate your brand story with clarity and impact.',
    features: [
      'Logo Design', 'Brand Identity', 'Business Cards', 'Brochures', 'Posters',
      'Social Media Posts', 'Flyers', 'Packaging Design', 'Banner Design', 'Infographics',
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Photoshop', 'InDesign'],
    benefits: ['Consistent branding', 'Print & digital ready', 'Fast turnaround', 'Unlimited revisions'],
  },
  {
    slug: 'ui-ux-design',
    icon: 'uiux',
    title: 'UI/UX Design',
    short: 'Intuitive interfaces backed by real user research.',
    description:
      'We design delightful, research-driven experiences — from wireframes and prototypes to complete design systems.',
    features: [
      'Wireframes', 'Prototypes', 'Mobile App Design', 'Dashboard Design',
      'Website Design', 'Design Systems',
    ],
    technologies: ['Figma', 'Adobe XD', 'Framer', 'Principle'],
    benefits: ['Higher engagement', 'Lower bounce rates', 'Scalable design systems', 'User-tested flows'],
  },
  {
    slug: 'mobile-app-development',
    icon: 'mobile',
    title: 'Mobile App Development',
    short: 'Native and cross-platform apps users love.',
    description:
      'We build performant iOS, Android, and cross-platform apps with smooth UX and reliable offline-first architecture.',
    features: ['Android Apps', 'iOS Apps', 'Flutter Apps', 'React Native Apps'],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    benefits: ['One codebase, two platforms', 'Native performance', 'App Store ready', 'Push notifications'],
  },
  {
    slug: 'ai-solutions',
    icon: 'ai',
    title: 'AI Solutions',
    short: 'Intelligent automation and AI integrations.',
    description:
      'We embed AI into your products — chatbots, automation, computer vision, NLP, and recommendation systems that drive real outcomes.',
    features: [
      'AI Chatbots', 'AI Automation', 'AI Integration', 'Machine Learning',
      'Deep Learning', 'Computer Vision', 'NLP Solutions', 'Recommendation Systems',
    ],
    technologies: ['OpenAI', 'TensorFlow', 'Python', 'LangChain', 'PyTorch'],
    benefits: ['24/7 automation', 'Smarter decisions', 'Reduced costs', 'Scalable intelligence'],
  },
  {
    slug: 'software-development',
    icon: 'software',
    title: 'Software Development',
    short: 'Custom business software, ERP, and CRM systems.',
    description:
      'We build tailored software — ERP, CRM, inventory, and management systems — that streamline operations and scale with you.',
    features: [
      'ERP Systems', 'CRM Systems', 'Inventory Systems', 'Management Systems',
      'Desktop Applications', 'Cloud Applications',
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
    benefits: ['Tailored workflows', 'Cloud-native', 'Secure & compliant', 'Integration-ready'],
  },
  {
    slug: 'cad-engineering',
    icon: 'cad',
    title: 'CAD & Engineering Solutions',
    short: 'CAD automation, plugins, and 3D modeling.',
    description:
      'We automate CAD workflows, build custom plugins, and deliver precise 3D models and engineering software.',
    features: [
      'CAD Automation', 'CAD Plugin Development', '3D Modeling',
      'Engineering Software', 'CAD API Integration',
    ],
    technologies: ['AutoCAD API', 'SolidWorks API', 'Python', 'C++', 'Three.js'],
    benefits: ['Faster design cycles', 'Reduced manual work', 'Precision modeling', 'Custom integrations'],
  },
  {
    slug: 'digital-marketing',
    icon: 'marketing',
    title: 'Digital Marketing',
    short: 'Data-driven campaigns that grow your business.',
    description:
      'We run high-ROI campaigns across SEO, paid ads, social, and email to drive qualified traffic and conversions.',
    features: [
      'SEO', 'Social Media Marketing', 'PPC Campaigns', 'Google Ads',
      'Facebook Ads', 'Email Marketing', 'Content Marketing',
    ],
    technologies: ['Google Ads', 'Meta Ads', 'GA4', 'SEMrush', 'HubSpot'],
    benefits: ['More qualified leads', 'Higher ROI', 'Measurable results', 'Brand growth'],
  },
  {
    slug: 'branding',
    icon: 'branding',
    title: 'Branding',
    short: 'Strategic brand identities that resonate.',
    description:
      'We craft brand strategies, visual identities, and guidelines that make your company instantly recognizable.',
    features: ['Brand Strategy', 'Brand Identity', 'Brand Guidelines', 'Visual Identity'],
    technologies: ['Figma', 'Illustrator', 'After Effects'],
    benefits: ['Memorable identity', 'Consistent voice', 'Market differentiation', 'Premium perception'],
  },
  {
    slug: 'maintenance-support',
    icon: 'support',
    title: 'Maintenance & Support',
    short: 'Keep your digital products secure and fast.',
    description:
      'Ongoing maintenance, monitoring, backups, and technical support so your products stay fast, secure, and online.',
    features: [
      'Website Maintenance', 'Security Monitoring', 'Performance Optimization',
      'Backup Solutions', 'Technical Support',
    ],
    technologies: ['Cloudflare', 'Sentry', 'Datadog', 'GitHub Actions'],
    benefits: ['99.9% uptime', 'Proactive monitoring', 'Fast support', 'Automatic backups'],
  },
];
