import {
  Code2, ShoppingCart, Globe, Palette, PenTool, Smartphone,
  BrainCircuit, Boxes, Ruler, Megaphone, Sparkles, ShieldCheck, LucideIcon,
} from 'lucide-react';
import type { ServiceIcon } from '@/lib/data/services';

export const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  web: Code2,
  ecommerce: ShoppingCart,
  wordpress: Globe,
  graphic: Palette,
  uiux: PenTool,
  mobile: Smartphone,
  ai: BrainCircuit,
  software: Boxes,
  cad: Ruler,
  marketing: Megaphone,
  branding: Sparkles,
  support: ShieldCheck,
};
