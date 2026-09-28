'use client';

export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="mask-fade-x relative overflow-hidden">
      <div className="flex w-max animate-marquee gap-4">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-medium text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-brand-gradient" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
