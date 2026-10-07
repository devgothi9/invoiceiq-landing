"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

import { easeOutExpo } from "./reveal";

const chain = [
  { name: "Store cameras", text: "Existing overhead video" },
  { name: "Computer vision", text: "People, shelf zones, interactions" },
  { name: "Observed event", text: "e.g. a removal at a shelf" },
  { name: "Confidence", text: "How sure is the system?" },
];

/** Cameras → vision → event → confidence, then the branch into analytics or human review. */
export function IntelligenceDiagram() {
  const step = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -15% 0px" },
    transition: { duration: 0.5, ease: easeOutExpo, delay: 0.1 + i * 0.12 },
  });
  return (
    <figure aria-label="How an observed event is routed" className="text-white">
      <ol className="grid gap-3 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:items-stretch lg:gap-0">
        {chain.map((c, i) => (
          <motion.li key={c.name} {...step(i)} className="flex flex-col items-center gap-3 lg:flex-row lg:gap-0">
            <div className="w-full rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 lg:h-full">
              <p className="text-eyebrow text-white/55">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-lg font-semibold tracking-[-0.02em]">{c.name}</p>
              <p className="mt-1 text-sm text-white/60">{c.text}</p>
            </div>
            <ArrowDown aria-hidden className="size-4 text-green-400 lg:hidden" />
            <ArrowRight aria-hidden className="mx-2 hidden size-4 shrink-0 text-green-400 lg:block" />
          </motion.li>
        ))}
        <motion.li {...step(4)} className="grid gap-3 lg:w-[19rem]">
          <div className="rounded-2xl bg-green-500/12 p-5 ring-1 ring-green-400/40">
            <p className="text-eyebrow text-green-300">High confidence</p>
            <p className="mt-3 text-lg font-semibold tracking-[-0.02em]">Matched automatically</p>
            <p className="mt-1 text-sm text-white/65">Reconciled with the shopper’s scans; feeds analytics.</p>
          </div>
          <div className="rounded-2xl bg-amber-400/10 p-5 ring-1 ring-amber-300/40">
            <p className="text-eyebrow text-amber-200">Low confidence or no match</p>
            <p className="mt-3 text-lg font-semibold tracking-[-0.02em]">Human review</p>
            <p className="mt-1 text-sm text-white/65">Evidence goes to an associate. Nobody is charged on a guess.</p>
          </div>
        </motion.li>
      </ol>
    </figure>
  );
}
