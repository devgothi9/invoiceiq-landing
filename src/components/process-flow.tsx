"use client";

import { motion } from "motion/react";

import { easeOutExpo } from "./reveal";

export type Step = { name: string; text: string };

export const processSteps: Step[] = [
  { name: "Understand", text: "Find the real problem and who it’s for." },
  { name: "Design", text: "Shape flows and interfaces in Figma." },
  { name: "Prototype", text: "Make key flows clickable and testable." },
  { name: "Build", text: "Develop it with real data and real states." },
  { name: "Test", text: "Validate, iterate, fix what breaks." },
  { name: "Ship", text: "Deploy it, then keep improving." },
];

/**
 * Horizontal on large screens, vertical on small ones. The connecting line draws once
 * when it enters the viewport; steps follow with a short stagger.
 */
export function ProcessFlow({
  steps = processSteps,
  tone = "dark",
  columns = 6,
}: {
  steps?: Step[];
  tone?: "dark" | "light";
  columns?: 4 | 5 | 6 | 7;
}) {
  const dark = tone === "dark";
  const cols = { 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-6", 7: "lg:grid-cols-7" }[columns];
  return (
    <ol className={`relative grid gap-y-8 lg:gap-x-6 ${cols}`}>
      {/* Connector: vertical (mobile) / horizontal (lg) */}
      <motion.span
        aria-hidden
        className={`absolute top-2 bottom-2 left-[0.6875rem] w-px origin-top lg:hidden ${dark ? "bg-white/15" : "bg-ink/12"}`}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.2, ease: easeOutExpo }}
      />
      <motion.span
        aria-hidden
        className={`absolute top-[0.6875rem] right-0 left-3 hidden h-px origin-left lg:block ${dark ? "bg-white/15" : "bg-ink/12"}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.4, ease: easeOutExpo }}
      />
      {steps.map((step, i) => (
        <motion.li
          key={step.name}
          className="relative grid grid-cols-[1.5rem_1fr] gap-x-5 lg:block"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.15 + i * 0.08 }}
        >
          <span
            aria-hidden
            className={`relative z-[1] mt-0.5 flex size-[1.375rem] items-center justify-center rounded-full ring-1 lg:mt-0 ${
              dark ? "bg-forest-900 ring-green-400/60" : "bg-paper ring-green-700/50"
            }`}
          >
            <span className={`size-1.5 rounded-full ${dark ? "bg-green-400" : "bg-green-700"}`} />
          </span>
          <div className="lg:mt-6">
            <p className={`text-eyebrow ${dark ? "text-white/55" : "text-muted"}`}>{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em]">{step.name}</h3>
            <p className={`mt-1.5 text-[0.9375rem] leading-relaxed ${dark ? "text-white/62" : "text-muted"}`}>{step.text}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
