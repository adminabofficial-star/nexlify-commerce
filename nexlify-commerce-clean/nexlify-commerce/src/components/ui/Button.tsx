'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  icon?: React.ReactNode;
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-gradient text-white shadow-lg shadow-primary/25 hover:shadow-primary/40',
  secondary:
    'glass-strong text-white hover:bg-white/10',
  ghost:
    'text-slate-200 hover:text-white hover:bg-white/5',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  icon,
  disabled,
}: ButtonProps) {
  const classes = cn(
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 disabled:opacity-50',
    variants[variant],
    className,
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
