import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import type { Project } from "@/content/projects";
import { Reveal } from "./reveal";

/* -------------------------------------------------------------------------- */

export function CaseHero({
  eyebrow,
  title,
  subtitle,
  meta,
  status,
  actions,
  visual,
  note,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  meta: string[];
  status: ReactNode;
  actions: ReactNode;
  visual: ReactNode;
  note?: string;
}) {
  return (
    <section aria-labelledby="case-title" className="grain relative isolate overflow-hidden bg-forest-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_75%_60%,rgba(34,197,94,0.13),transparent_70%)]"
      />
      <div className="container-page grid-page gap-y-14 pt-28 pb-16 md:pt-36 lg:pb-24">
        <div className="col-span-4 md:col-span-8 lg:col-span-5 lg:self-center">
          <Reveal>
            <Link
              href="/#work"
              className="group -ml-1 inline-flex min-h-11 items-center gap-2 px-1 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to work
            </Link>
            <p className="text-eyebrow mt-8 text-green-400">{eyebrow}</p>
            <h1 id="case-title" className="text-display mt-5">
              {title}
            </h1>
            <p className="text-lead mt-6 max-w-[34rem] text-white/72">{subtitle}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              {status}
              <ul className="contents" aria-label="Disciplines">
                {meta.map((m) => (
                  <li
                    key={m}
                    className="inline-flex h-7 items-center rounded-full border border-white/15 px-3 text-xs text-white/75"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-3">{actions}</div>
          </Reveal>
        </div>
        <Reveal delay={0.15} y={32} className="col-span-4 md:col-span-8 lg:col-span-7">
          {visual}
        </Reveal>
      </div>
      {note ? (
        <p className="container-page pb-8 text-xs leading-relaxed text-white/55 md:pb-10">{note}</p>
      ) : null}
    </section>
  );
}

/* -------------------------------------------------------------------------- */

export function CaseSection({
  number,
  label,
  title,
  intro,
  children,
  tone = "light",
  id,
  className = "",
}: {
  number: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  tone?: "light" | "white" | "mist" | "dark";
  id?: string;
  className?: string;
}) {
  const bg = {
    light: "bg-paper text-ink on-light",
    white: "bg-white text-ink on-light",
    mist: "bg-mist text-ink on-light",
    dark: "grain bg-forest-900 text-white",
  }[tone];
  const dark = tone === "dark";
  const headingId = `${id ?? `section-${number}`}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`section-y ${bg} ${className}`}>
      <div className="container-page">
        <Reveal className="grid-page gap-y-6">
          <p className={`text-eyebrow col-span-4 md:col-span-8 lg:col-span-3 lg:pt-3 ${dark ? "text-white/50" : "text-muted"}`}>
            {number} / {label}
          </p>
          <div className="col-span-4 md:col-span-8 lg:col-span-9">
            <h2 id={headingId} className="text-section max-w-4xl">
              {title}
            </h2>
            {intro ? (
              <div className={`text-lead mt-6 max-w-[40rem] space-y-4 ${dark ? "text-white/70" : "text-ink-soft"}`}>{intro}</div>
            ) : null}
          </div>
        </Reveal>
        {children ? <div className="mt-14 md:mt-20">{children}</div> : null}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

/** A compact step sequence such as WRITE → REFLECT → … */
export function FlowChips({ steps, tone = "light", label }: { steps: string[]; tone?: "light" | "dark"; label: string }) {
  const dark = tone === "dark";
  return (
    <ol aria-label={label} className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span
            className={`text-eyebrow inline-flex h-9 items-center rounded-full px-3.5 ${
              dark ? "bg-white/8 text-white/90" : "bg-white text-ink ring-1 ring-border"
            }`}
          >
            {s}
          </span>
          {i < steps.length - 1 ? (
            <ArrowRight aria-hidden className={`size-3.5 ${dark ? "text-green-400" : "text-green-700"}`} />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/* -------------------------------------------------------------------------- */

export function Figure({ children, caption, className = "" }: { children: ReactNode; caption?: ReactNode; className?: string }) {
  return (
    <figure className={className}>
      {children}
      {caption ? <figcaption className="mt-4 text-sm leading-relaxed text-muted">{caption}</figcaption> : null}
    </figure>
  );
}

/* -------------------------------------------------------------------------- */

export function ProjectNav({ previous, next }: { previous: Project | null; next: Project | null }) {
  const prev = previous ?? { href: "/", title: "Home" };
  return (
    <nav aria-label="Project navigation" className="bg-forest-950 text-white">
      <div className="container-page grid grid-cols-2 border-t border-white/10">
        <Link href={prev.href} className="group flex min-h-32 flex-col justify-center gap-2 py-8 pr-4">
          <span className="text-eyebrow inline-flex items-center gap-2 text-white/50">
            <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
            Previous
          </span>
          <span className="text-lg font-semibold tracking-[-0.02em] text-white/85 transition-colors group-hover:text-white sm:text-2xl">
            {prev.title}
          </span>
        </Link>
        {next ? (
          <Link
            href={next.href}
            className="group flex min-h-32 flex-col items-end justify-center gap-2 border-l border-white/10 py-8 pl-4 text-right"
          >
            <span className="text-eyebrow inline-flex items-center gap-2 text-white/50">
              Next project
              <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="text-lg font-semibold tracking-[-0.02em] text-white/85 transition-colors group-hover:text-white sm:text-2xl">
              {next.title}
            </span>
          </Link>
        ) : (
          <Link
            href="/contact"
            className="group flex min-h-32 flex-col items-end justify-center gap-2 border-l border-white/10 py-8 pl-4 text-right"
          >
            <span className="text-eyebrow inline-flex items-center gap-2 text-white/50">
              Next
              <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="text-lg font-semibold tracking-[-0.02em] text-white/85 transition-colors group-hover:text-white sm:text-2xl">
              Get in touch
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
