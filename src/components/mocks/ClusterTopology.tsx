const nodes = Array.from({ length: 32 }, (_, i) => {
  if (i === 7 || i === 19) return "warn" as const;
  if (i === 24) return "down" as const;
  return "up" as const;
});

const statusColor = {
  up: "bg-[var(--success)]",
  warn: "bg-[var(--warning)]",
  down: "bg-[var(--danger)]",
};

export function ClusterTopology() {
  return (
    <div className="w-full rounded-sm border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <span className="font-mono text-sm text-[var(--fg)]">
          Cluster — training-east-03
        </span>
        <span className="pill pill-success">29/32 healthy</span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-8 gap-2">
          {nodes.map((s, i) => (
            <div
              key={i}
              className={`aspect-square rounded-[2px] ${statusColor[s]}`}
              title={`node-${i.toString().padStart(2, "0")}: ${s}`}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-[var(--fg-muted)]">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-[2px] bg-[var(--success)]" />
            Healthy
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-[2px] bg-[var(--warning)]" />
            Degraded
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-[2px] bg-[var(--danger)]" />
            Offline
          </span>
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-5 py-3 font-mono text-[11px] text-[var(--fg-faint)]">
        InfiniBand NDR · 3.2 Tbps fabric · auto-drain on failure
      </div>
    </div>
  );
}
