const bars = [
  { label: "L40S", value: 38, color: "var(--fg-faint)" },
  { label: "A100 80G", value: 61, color: "var(--accent-cyan)" },
  { label: "H100 SXM", value: 100, color: "var(--primary)" },
  { label: "H200 SXM", value: 118, color: "var(--accent-rose)" },
];

export function BenchmarkChart() {
  return (
    <div className="w-full rounded-sm border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <span className="font-mono text-sm text-[var(--fg)]">
          Training throughput — tokens/sec, relative
        </span>
        <span className="pill pill-neutral">Llama-3 70B</span>
      </div>

      <div className="flex flex-col gap-4 px-5 py-6">
        {bars.map((b) => (
          <div key={b.label} className="flex items-center gap-4">
            <span className="w-24 flex-none font-mono text-xs text-[var(--fg-muted)]">
              {b.label}
            </span>
            <div className="h-5 flex-1 rounded-[2px] bg-[var(--surface-tint)]">
              <div
                className="h-full rounded-[2px]"
                style={{
                  width: `${(b.value / 118) * 100}%`,
                  background: b.color,
                }}
              />
            </div>
            <span className="w-10 flex-none text-right font-mono text-xs text-[var(--fg-faint)]">
              {b.value}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--border)] px-5 py-3 font-mono text-[11px] text-[var(--fg-faint)]">
        Normalized to H100 SXM = 100 · single-node, 8x config
      </div>
    </div>
  );
}
