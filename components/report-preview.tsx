export function ReportPreview() {
  const rows = [
    { label: "Exterior / paint", note: "Structured condition notes", status: "Included" },
    { label: "Interior / equipment", note: "Wear and option check", status: "Included" },
    { label: "Mechanical findings", note: "Diagnostic evaluator review", status: "Included" },
    { label: "History where available", note: "Observed vs. unverified", status: "Included" },
    { label: "Photo set", note: "Standard evaluation materials", status: "Included" },
    { label: "Video materials", note: "Paid add-on, on request", status: "Add-on" },
  ];

  return (
    <aside
      aria-label="Example evaluation report frame"
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-deep/70 shadow-2xl shadow-black/30"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-teal" />
            <span className="text-xs tracking-wide text-paper/70">
              MCI evaluation package
            </span>
          </div>
          <span className="rounded-full bg-teal/15 px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-teal uppercase">
            Buyer-ready
          </span>
        </div>
        <div className="px-5 py-5">
          <p className="text-[0.7rem] tracking-[0.16em] text-teal uppercase">
            Korea-registered used vehicle
          </p>
          <p className="mt-2 font-heading text-2xl text-paper">
            Objective condition report
          </p>
          <p className="mt-2 text-sm text-paper/65">
            Produced in Korea, or imported into Korea and driven there.
            Written for an overseas importer, not a local listing.
          </p>
          <ul className="mt-6 divide-y divide-white/10">
            {rows.map((row) => (
              <li
                key={row.label}
                className="flex items-start justify-between gap-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-paper">{row.label}</p>
                  <p className="text-xs text-paper/55">{row.note}</p>
                </div>
                <span className="mt-0.5 shrink-0 text-[0.68rem] tracking-wide text-teal uppercase">
                  {row.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-[0.7rem] text-paper/50">
          <span>Real-time delivery to the requesting buyer</span>
          <span>Not a public lot feed</span>
        </div>
      </div>
    </aside>
  );
}
