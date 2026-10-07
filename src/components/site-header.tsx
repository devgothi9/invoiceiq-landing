"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { links, nav } from "@/content/site";
import { MobileNav } from "./mobile-nav";
import { ArrowUpRight } from "lucide-react";

/** Routes whose hero is light; the transparent header uses dark text there. */
const LIGHT_HERO = new Set(["/about"]);

function isActive(pathname: string, href: string) {
  if (href === "/#work") return pathname.startsWith("/work");
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const light = LIGHT_HERO.has(pathname) && !scrolled;
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButton.current?.focus();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,height] duration-300 ease-out-expo ${
          scrolled
            ? "bg-forest-950/85 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div
          className={`container-page flex items-center justify-between transition-[height] duration-300 ease-out-expo ${
            scrolled ? "h-16" : "h-[4.5rem] md:h-20"
          }`}
        >
          <Link
            href="/"
            aria-label="Dev Gothi — home"
            className={`-mx-2 inline-flex min-h-11 items-center px-2 text-[0.9375rem] font-semibold tracking-[0.14em] transition-colors ${
              light ? "text-ink" : "text-white"
            }`}
          >
            DEV GOTHI
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-flex min-h-11 items-center px-4 text-sm font-medium transition-colors ${
                        light
                          ? active
                            ? "text-ink"
                            : "text-ink/60 hover:text-ink"
                          : active
                            ? "text-white"
                            : "text-white/65 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {active ? (
                        <motion.span
                          layoutId="nav-indicator"
                          className={`absolute inset-x-4 bottom-1.5 h-px ${light ? "bg-green-700" : "bg-green-400"}`}
                          transition={{ type: "spring", stiffness: 380, damping: 34 }}
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
              {links.resume ? (
                <li className="ml-3">
                  <a
                    href={links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex h-10 items-center gap-1.5 rounded-full border px-4 text-sm font-medium transition-colors ${
                      light
                        ? "border-ink/15 text-ink hover:border-ink/40"
                        : "border-white/20 text-white hover:border-white/45 hover:bg-white/5"
                    }`}
                  >
                    Resume
                    <ArrowUpRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>

          <button
            ref={menuButton}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className={`-mr-3 inline-flex h-12 min-w-12 items-center justify-center px-3 text-eyebrow md:hidden ${
              light ? "text-ink" : "text-white"
            }`}
          >
            Menu
          </button>
        </div>
      </header>

      <MobileNav
        open={menuOpen}
        onClose={closeMenu}
        pathname={pathname}
      />
    </>
  );
}
