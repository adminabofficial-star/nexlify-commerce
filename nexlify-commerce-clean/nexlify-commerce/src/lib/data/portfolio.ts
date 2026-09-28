export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  image: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  liveUrl: string;
  githubUrl: string;
}

export const portfolioCategories = [
  'All', 'Web', 'E-Commerce', 'Mobile', 'AI', 'Branding',
];

export const projects: Project[] = [
  {
    slug: 'finflow-banking',
    title: 'FinFlow Banking Platform',
    category: 'Web',
    client: 'FinFlow',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    summary: 'A modern digital banking platform with real-time analytics.',
    challenge: 'FinFlow needed a secure, lightning-fast banking dashboard to replace a legacy system.',
    solution: 'We built a Next.js platform with real-time data, robust security, and a beautiful UX.',
    result: '140% increase in user engagement and 60% faster load times.',
    liveUrl: '#', githubUrl: '#',
  },
  {
    slug: 'luxe-store',
    title: 'Luxe Fashion Store',
    category: 'E-Commerce',
    client: 'Luxe',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    tags: ['Shopify', 'React', 'Stripe'],
    summary: 'A premium Shopify store with custom checkout and 3D product views.',
    challenge: 'Luxe wanted a high-end shopping experience to match their premium brand.',
    solution: 'A custom Shopify theme with immersive product galleries and one-click checkout.',
    result: '85% increase in conversion rate within 3 months.',
    liveUrl: '#', githubUrl: '#',
  },
  {
    slug: 'pulse-fitness',
    title: 'Pulse Fitness App',
    category: 'Mobile',
    client: 'Pulse',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    tags: ['Flutter', 'Firebase', 'AI'],
    summary: 'A cross-platform fitness app with AI workout recommendations.',
    challenge: 'Deliver personalized workouts on both iOS and Android from one codebase.',
    solution: 'A Flutter app powered by an AI recommendation engine and real-time tracking.',
    result: '250K+ downloads and a 4.8 app store rating.',
    liveUrl: '#', githubUrl: '#',
  },
  {
    slug: 'neura-chatbot',
    title: 'Neura AI Assistant',
    category: 'AI',
    client: 'Neura',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['OpenAI', 'Python', 'Next.js'],
    summary: 'An enterprise AI assistant that automates customer support.',
    challenge: 'Neura needed to scale support without scaling headcount.',
    solution: 'A GPT-powered assistant integrated with their knowledge base and CRM.',
    result: '60% reduction in support tickets and 24/7 coverage.',
    liveUrl: '#', githubUrl: '#',
  },
  {
    slug: 'craftly-brand',
    title: 'Craftly Brand Identity',
    category: 'Branding',
    client: 'Craftly',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    tags: ['Branding', 'Figma', 'Illustrator'],
    summary: 'A complete brand identity and design system for a craft marketplace.',
    challenge: 'Craftly needed a cohesive identity to stand out in a crowded market.',
    solution: 'A full rebrand with logo, guidelines, and a scalable design system.',
    result: 'A distinctive brand that boosted recognition and trust.',
    liveUrl: '#', githubUrl: '#',
  },
  {
    slug: 'orbital-saas',
    title: 'Orbital SaaS Dashboard',
    category: 'Web',
    client: 'Orbital',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    tags: ['React', 'Node.js', 'Docker'],
    summary: 'A data-rich SaaS analytics dashboard with custom visualizations.',
    challenge: 'Orbital needed to surface complex data in an intuitive interface.',
    solution: 'A modular dashboard with real-time charts and role-based access.',
    result: 'Reduced churn by 30% with improved data clarity.',
    liveUrl: '#', githubUrl: '#',
  },
  {
    slug: 'greenmarket',
    title: 'GreenMarket Marketplace',
    category: 'E-Commerce',
    client: 'GreenMarket',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    tags: ['WooCommerce', 'PHP', 'MySQL'],
    summary: 'A multi-vendor marketplace for sustainable products.',
    challenge: 'Enable hundreds of vendors to sell on a single platform.',
    solution: 'A WooCommerce multi-vendor build with automated payouts.',
    result: '500+ active vendors in the first year.',
    liveUrl: '#', githubUrl: '#',
  },
  {
    slug: 'vista-cad',
    title: 'Vista CAD Automation',
    category: 'AI',
    client: 'Vista Engineering',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    tags: ['Python', 'CAD API', 'Automation'],
    summary: 'A CAD plugin that automates repetitive engineering tasks.',
    challenge: 'Engineers spent hours on repetitive drafting work.',
    solution: 'A custom AutoCAD plugin that automated 80% of routine tasks.',
    result: 'Saved 1,200+ engineering hours per year.',
    liveUrl: '#', githubUrl: '#',
  },
];
