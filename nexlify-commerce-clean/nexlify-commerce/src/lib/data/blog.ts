export interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
  /** Article body as an array of paragraphs / section headings. */
  body?: { heading?: string; text: string }[];
}

/** Fallback body used for any post that doesn't define its own. */
function defaultBody(title: string): { heading?: string; text: string }[] {
  return [
    { text: `In this article we explore ${title.toLowerCase()} and what it means for teams building modern digital products. Drawing on our experience across hundreds of projects, we break down the practical lessons that actually move the needle.` },
    { heading: 'Why it matters', text: 'Technology moves fast, but the fundamentals of great products — clarity, performance, and user focus — stay constant. Getting these right is the difference between a product people tolerate and one they love.' },
    { heading: 'Our approach', text: 'We start with the user and work backwards. Every decision, from architecture to the smallest micro-interaction, is made in service of a clear outcome. We measure, iterate, and refine until it feels effortless.' },
    { heading: 'Key takeaways', text: 'Invest in the foundations, keep the feedback loop tight, and never stop questioning assumptions. The best work comes from teams that care deeply about the details and ship with intention.' },
    { text: 'Want to put these ideas into practice on your next project? Our team would love to help. Reach out and let’s build something great together.' },
  ];
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostBody(post: Post) {
  return post.body && post.body.length > 0 ? post.body : defaultBody(post.title);
}

export const blogCategories = ['All', 'Development', 'Design', 'AI', 'Business', 'Marketing'];

export const posts: Post[] = [
  {
    slug: 'building-scalable-nextjs-apps',
    title: 'Building Scalable Next.js Apps in 2025',
    category: 'Development',
    excerpt: 'Architecture patterns, caching strategies, and performance tips for building Next.js apps that scale to millions of users.',
    date: 'Jun 12, 2025', readTime: '8 min', author: 'Daniel Okoro',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80', featured: true,
  },
  {
    slug: 'ai-in-product-design',
    title: 'How AI Is Reshaping Product Design',
    category: 'AI',
    excerpt: 'From generative mockups to intelligent personalization, AI is changing how we design digital products.',
    date: 'Jun 5, 2025', readTime: '6 min', author: 'Sofia Marini',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80', featured: true,
  },
  {
    slug: 'design-systems-that-scale',
    title: 'Design Systems That Actually Scale',
    category: 'Design',
    excerpt: 'A practical guide to building, documenting, and maintaining a design system your whole team will love.',
    date: 'May 28, 2025', readTime: '7 min', author: 'Maya Chen',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80',
  },
  {
    slug: 'ecommerce-conversion-tips',
    title: '10 Proven Ways to Boost E-Commerce Conversions',
    category: 'Marketing',
    excerpt: 'Small UX and copy changes that can dramatically improve your online store conversion rate.',
    date: 'May 20, 2025', readTime: '5 min', author: 'Lena Hoffmann',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    slug: 'why-typescript',
    title: 'Why We Use TypeScript on Every Project',
    category: 'Development',
    excerpt: 'Type safety, better tooling, and fewer bugs — here is why TypeScript is our default.',
    date: 'May 14, 2025', readTime: '4 min', author: 'Daniel Okoro',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
  },
  {
    slug: 'startup-mvp-guide',
    title: 'The Founder’s Guide to Shipping an MVP',
    category: 'Business',
    excerpt: 'How to validate your idea and ship a lean, focused MVP without burning your runway.',
    date: 'May 6, 2025', readTime: '9 min', author: 'James Park',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
  },
];
