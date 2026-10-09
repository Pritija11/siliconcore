const nodes = [
  { id: "gpu-node-014", type: "8x H100 SXM", util: "94%", status: "pass" as const },
  { id: "gpu-node-027", type: "8x H100 SXM", util: "88%", status: "pass" as const },
  { id: "gpu-node-031", type: "4x A100 SXM", util: "41%", status: "warn" as const },
  { id: "gpu-node-009", type: "8x H200 SXM", util: "—", status: "fail" as const },
];

const statusMap = {
  pass: { pill: "pill-success", label: "Running" },
  warn: { pill: "pill-warning", label: "Throttled" },
  fail: { pill: "pill-danger", label: "Rebooting" },
};

export function NodeList() {
  return (
    <div className="w-full max-w-md rounded-sm border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <span className="font-mono text-sm text-[var(--fg)]">
          Bare-metal nodes
        </span>
        <span className="pill pill-neutral">4 of 212</span>
      </div>
      <div className="flex flex-col">
        {nodes.map((n) => (
          <div
            key={n.id}
            className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3 last:border-b-0"
          >
            <div>
              <p className="font-mono text-xs text-[var(--fg)]">{n.id}</p>
              <p className="mt-0.5 text-xs text-[var(--fg-muted)]">
                {n.type}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[var(--fg-faint)]">
                {n.util}
              </span>
              <span className={`pill ${statusMap[n.status].pill}`}>
                {statusMap[n.status].label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 font-mono text-[11px] text-[var(--fg-faint)]">
        Provisioned in us-east, eu-central, ap-south
      </div>
    </div>
  );
}
