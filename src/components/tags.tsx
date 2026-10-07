import type { ReactNode } from "react";

import type { ProjectStatus } from "@/content/projects";

export function Tag({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <li
      className={`inline-flex h-8 items-center rounded-full border px-3 text-[0.8125rem] ${
        tone === "dark" ? "border-white/15 text-white/80" : "border-ink/12 bg-white/50 text-ink-soft"
      }`}
    >
      {children}
    </li>
  );
}

/** Status is always spelled out in text; the dot is decoration only. */
export function StatusBadge({ status, tone = "light" }: { status: ProjectStatus | string; tone?: "light" | "dark" }) {
  const live = status === "Live product";
  const dot = live ? "bg-green-500" : "bg-amber-500";
  return (
    <span
      className={`inline-flex h-7 items-center gap-2 rounded-full px-3 text-xs font-medium ${
        tone === "dark" ? "bg-white/8 text-white/85" : "bg-ink/[0.05] text-ink-soft"
      }`}
    >
      <span aria-hidden className={`size-1.5 rounded-full ${dot}`} />
      {status}
    </span>
  );
}
