import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { footerLinks, site } from '@/lib/site';
import Newsletter from '@/components/ui/Newsletter';

const socialIcons = [
  { Icon: Twitter, href: site.socials.twitter, label: 'Twitter' },
  { Icon: Linkedin, href: site.socials.linkedin, label: 'LinkedIn' },
  { Icon: Github, href: site.socials.github, label: 'GitHub' },
  { Icon: Instagram, href: site.socials.instagram, label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="container-px relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-display text-lg font-bold text-white">
                N
              </span>
              <span className="font-display text-xl font-bold text-white">{site.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail size={16} className="text-primary" /> {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="flex items-center gap-3 hover:text-white">
                <Phone size={16} className="text-primary" /> {site.phone}
              </a>
              <p className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" /> {site.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold text-white">Stay in the loop</h3>
            <p className="mb-4 text-sm text-slate-400">
              Get product updates, insights, and offers. No spam, ever.
            </p>
            <Newsletter compact />
            <div className="mt-6 flex gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 transition-all hover:scale-110 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
