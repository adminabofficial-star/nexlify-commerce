interface Section { heading: string; body: string[] }

export default function LegalContent({ updated, sections }: { updated: string; sections: Section[] }) {
  return (
    <div className="container-px">
      <div className="mx-auto max-w-3xl">
        <p className="mb-10 text-sm text-slate-500">Last updated: {updated}</p>
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-xl font-bold text-white">{s.heading}</h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-400">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
