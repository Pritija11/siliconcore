"use client";

import { useState } from "react";

const sizes = ["8X", "4X", "2X", "1X"] as const;
type Size = (typeof sizes)[number];

const divisor: Record<Size, number> = { "8X": 1, "4X": 2, "2X": 4, "1X": 8 };

const gpus = [
  { name: "H200 SXM", vram: "141 GB", vcpus: 208, ram: "2990 GiB", price: 4.49 },
  { name: "H100 SXM", vram: "80 GB", vcpus: 208, ram: "1800 GiB", price: 3.29 },
  { name: "A100 SXM", vram: "80 GB", vcpus: 240, ram: "1800 GiB", price: 2.19 },
  { name: "A100 SXM", vram: "40 GB", vcpus: 124, ram: "1800 GiB", price: 1.59 },
  { name: "L40S PCIe", vram: "48 GB", vcpus: 64, ram: "480 GiB", price: 0.89 },
];

export function GPUSpecTable() {
  const [size, setSize] = useState<Size>("8X");

  return (
    <div className="w-full rounded-sm border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <span className="font-mono text-sm text-[var(--fg)]">
          Instance pricing
        </span>
        <div className="flex rounded-sm border border-[var(--border-strong)]">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-3 py-1.5 font-mono text-[11px] transition-colors ${
                s === size
                  ? "bg-[var(--primary)] text-[var(--on-primary)]"
                  : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] text-left">
              <th className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                GPU
              </th>
              <th className="px-3 py-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                VRAM
              </th>
              <th className="px-3 py-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                vCPUs
              </th>
              <th className="px-3 py-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                RAM
              </th>
              <th className="px-5 py-3 text-right font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                $/GPU/HR
              </th>
            </tr>
          </thead>
          <tbody>
            {gpus.map((g) => (
              <tr key={g.name + g.vram} className="border-b border-[var(--border)] last:border-b-0">
                <td className="px-5 py-3 text-[var(--fg)]">{g.name}</td>
                <td className="px-3 py-3 font-mono text-xs text-[var(--fg-muted)]">
                  {g.vram}
                </td>
                <td className="px-3 py-3 font-mono text-xs text-[var(--fg-muted)]">
                  {Math.round(g.vcpus / divisor[size])}
                </td>
                <td className="px-3 py-3 font-mono text-xs text-[var(--fg-muted)]">
                  {g.ram}
                </td>
                <td className="px-5 py-3 text-right font-mono text-xs text-[var(--primary)]">
                  ${g.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-[var(--border)] px-5 py-3 font-mono text-[11px] text-[var(--fg-faint)]">
        Transparent pricing, no egress fees — billed by the minute.
      </div>
    </div>
  );
}
