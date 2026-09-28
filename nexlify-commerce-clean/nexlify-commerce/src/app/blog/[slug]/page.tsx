import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import CTA from '@/components/sections/CTA';
import Reveal from '@/components/ui/Reveal';
import Newsletter from '@/components/ui/Newsletter';
import { posts, getPost, getPostBody } from '@/lib/data/blog';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: 'Article Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const body = getPostBody(post);
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      <article className="relative overflow-hidden pt-40">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="container-px relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <span className="eyebrow mb-5">{post.category}</span>
            <h1 className="font-display text-3xl font-bold leading-tight text-white text-balance sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
              <span className="flex items-center gap-1.5"><User size={15} /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={15} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={15} /> {post.readTime}</span>
            </div>
          </div>

          <Reveal y={40}>
            <div className="relative mx-auto mt-12 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl border border-white/10">
              <Image src={post.image} alt={post.title} fill priority sizes="(max-width:1024px) 100vw, 1024px" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </article>

      <section className="section pt-14">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            {body.map((block, i) => (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
                {block.heading && (
                  <h2 className="mt-10 font-display text-2xl font-bold text-white">{block.heading}</h2>
                )}
                <p className="mt-4 text-base leading-relaxed text-slate-300">{block.text}</p>
              </Reveal>
            ))}

            <div className="mt-14 rounded-2xl glass p-6">
              <h3 className="mb-2 font-semibold text-white">Enjoyed this article?</h3>
              <p className="mb-4 text-sm text-slate-400">Subscribe for more insights on design, engineering, and growth.</p>
              <Newsletter compact />
            </div>
          </div>

          {related.length > 0 && (
            <div className="mx-auto mt-16 max-w-4xl">
              <h3 className="mb-6 font-display text-xl font-bold text-white">Related articles</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl border border-white/10">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium text-primary">{p.category}</span>
                      <h4 className="mt-2 font-display text-lg font-semibold text-white group-hover:gradient-text">{p.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
