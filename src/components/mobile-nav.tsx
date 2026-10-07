"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";

import { links, nav, site } from "@/content/site";
import { GitHubIcon } from "./icons";
import { easeOutExpo } from "./reveal";

type Item = { label: string; href: string; external?: boolean };

export function MobileNav({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const panel = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const items: Item[] = [
    ...nav.map((n) => ({ label: n.label, href: n.href })),
    ...(links.resume ? [{ label: "Resume", href: links.resume, external: true }] : []),
  ];

  // Scroll lock, initial focus, Escape and a focus trap while open.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const focusable = panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panel}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="grain fixed inset-0 z-50 flex flex-col bg-forest-950 text-white md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.25 }}
        >
          <div className="container-page flex h-[4.5rem] items-center justify-between">
            <Link href="/" onClick={onClose} className="-mx-2 inline-flex min-h-11 items-center px-2 text-[0.9375rem] font-semibold tracking-[0.14em]">
              DEV GOTHI
            </Link>
            <button
              ref={closeButton}
              type="button"
              onClick={onClose}
              className="-mr-3 inline-flex size-12 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10"
            >
              <X aria-hidden className="size-6" strokeWidth={1.5} />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="container-page flex flex-1 flex-col justify-center pb-10">
            <ul className="flex flex-col">
              {items.map((item, i) => {
                const active = item.href === "/#work" ? pathname.startsWith("/work") : pathname === item.href;
                const inner = (
                  <>
                    <span className="text-eyebrow w-8 text-white/55">{String(i + 1).padStart(2, "0")}</span>
                    <span className={active ? "text-green-400" : ""}>{item.label}</span>
                    {item.external ? <ArrowUpRight aria-hidden className="ml-1 size-6 text-white/50" /> : null}
                  </>
                );
                const cls =
                  "flex min-h-16 items-baseline gap-4 border-b border-white/10 py-3 text-[clamp(2rem,9vw,2.75rem)] font-semibold tracking-[-0.035em] transition-colors hover:text-green-300";
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.06 + i * 0.05 }}
                  >
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClose}>
                        {inner}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <Link href={item.href} className={cls} onClick={onClose} aria-current={active ? "page" : undefined}>
                        {inner}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/65"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <a href={links.email} className="inline-flex min-h-11 items-center hover:text-white">
                {site.email}
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 hover:text-white"
              >
                <GitHubIcon className="size-4" /> GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </motion.div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
