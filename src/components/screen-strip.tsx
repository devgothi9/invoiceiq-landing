"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LightboxGroup, ZoomTrigger, type LightboxItem } from "./lightbox";

/**
 * A horizontally scrolling row of screens (native scroll + snap, no hijacking).
 * Each opens the shared lightbox; arrow buttons are a convenience on pointer devices.
 */
export function ScreenStrip({ items, label }: { items: LightboxItem[]; label: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () =>
      setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: "smooth" });
  const btn =
    "inline-flex size-12 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-colors hover:border-ink/40 disabled:opacity-35 disabled:hover:border-ink/15";

  return (
    <LightboxGroup items={items}>
      <div className="mb-6 hidden justify-end gap-2 md:flex">
        <button type="button" className={btn} onClick={() => scroll(-1)} disabled={edge.start}>
          <ChevronLeft aria-hidden className="size-5" />
          <span className="sr-only">Scroll screens left</span>
        </button>
        <button type="button" className={btn} onClick={() => scroll(1)} disabled={edge.end}>
          <ChevronRight aria-hidden className="size-5" />
          <span className="sr-only">Scroll screens right</span>
        </button>
      </div>
      <ul
        ref={track}
        aria-label={label}
        className="-mx-5 flex items-start snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:thin] sm:-mx-10 sm:scroll-px-10 sm:px-10 md:gap-6 lg:-mx-16 lg:scroll-px-16 lg:px-16"
      >
        {items.map((item, i) => {
          const portrait = item.src.height > item.src.width;
          return (
            <li key={i} className="shrink-0 snap-start">
              <ZoomTrigger index={i} label={item.alt}>
                <span
                  className={`relative block overflow-hidden rounded-[1.25rem] bg-mist ring-1 ring-border ${
                    portrait ? "aspect-[390/844] h-[24rem] sm:h-[28rem]" : "aspect-[16/10] w-[85vw] sm:h-[28rem] sm:w-auto"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={portrait ? "260px" : "(min-width: 640px) 720px, 85vw"}
                    placeholder="blur"
                    className="object-cover object-top"
                  />
                </span>
              </ZoomTrigger>
              {item.caption ? <p className="mt-3 text-sm text-muted">{item.caption}</p> : null}
            </li>
          );
        })}
      </ul>
    </LightboxGroup>
  );
}
