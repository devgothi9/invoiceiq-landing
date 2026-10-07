"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

export type LightboxItem = { src: StaticImageData; alt: string; caption?: string };

type Ctx = { open: (index: number, trigger: HTMLElement | null) => void };
const LightboxContext = createContext<Ctx | null>(null);

/** Groups images so they open in one lightbox with previous / next. */
export function LightboxGroup({ items, children }: { items: LightboxItem[]; children: ReactNode }) {
  const [index, setIndex] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);

  const open = useCallback((i: number, el: HTMLElement | null) => {
    trigger.current = el;
    setIndex(i);
  }, []);
  const close = useCallback(() => {
    setIndex(null);
    requestAnimationFrame(() => trigger.current?.focus());
  }, []);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <Lightbox items={items} index={index} onIndex={setIndex} onClose={close} />
    </LightboxContext.Provider>
  );
}

/** Makes its child open the surrounding LightboxGroup at `index`. */
export function ZoomTrigger({
  index,
  label,
  children,
  className = "",
}: {
  index: number;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("ZoomTrigger must be inside LightboxGroup");
  return (
    <button
      type="button"
      onClick={(e) => ctx.open(index, e.currentTarget)}
      className={`group/zoom relative block w-full cursor-zoom-in text-left ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute right-3 bottom-3 inline-flex size-9 items-center justify-center rounded-full bg-forest-950/75 text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-200 group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100"
      >
        <Maximize2 className="size-4" />
      </span>
      <span className="sr-only">View larger: {label}</span>
    </button>
  );
}

function Lightbox({
  items,
  index,
  onIndex,
  onClose,
}: {
  items: LightboxItem[];
  index: number | null;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const pointerStart = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const isOpen = index !== null;
  const many = items.length > 1;

  useEffect(() => setMounted(true), []);

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      const next = index + delta;
      if (next >= 0 && next < items.length) onIndex(next);
    },
    [index, items.length, onIndex],
  );

  useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab" && dialog.current) {
        const f = dialog.current.querySelectorAll<HTMLElement>("button:not([disabled])");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, go]);

  if (!mounted) return null;
  const item = index !== null ? items[index] : null;

  const ctrl =
    "inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10";

  return createPortal(
    <AnimatePresence>
      {item ? (
        <motion.div
          ref={dialog}
          role="dialog"
          aria-modal="true"
          aria-label={many ? `Image ${index! + 1} of ${items.length}` : "Image viewer"}
          className="fixed inset-0 z-[70] flex flex-col bg-forest-950/95 text-white backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onPointerDown={(e) => (pointerStart.current = e.clientX)}
          onPointerUp={(e) => {
            if (pointerStart.current === null) return;
            const dx = e.clientX - pointerStart.current;
            pointerStart.current = null;
            if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
          }}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <p className="text-eyebrow text-white/60" aria-live="polite">
              {many ? `${String(index! + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}` : ""}
            </p>
            <button ref={closeBtn} type="button" onClick={onClose} className={ctrl}>
              <X aria-hidden className="size-5" />
              <span className="sr-only">Close image viewer</span>
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20" onClick={onClose}>
            <motion.div
              key={index}
              className="relative h-full w-full"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="100vw"
                quality={90}
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
            {many ? (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  disabled={index === 0}
                  className={`${ctrl} absolute left-4 hidden sm:inline-flex`}
                >
                  <ChevronLeft aria-hidden className="size-5" />
                  <span className="sr-only">Previous image</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  disabled={index === items.length - 1}
                  className={`${ctrl} absolute right-4 hidden sm:inline-flex`}
                >
                  <ChevronRight aria-hidden className="size-5" />
                  <span className="sr-only">Next image</span>
                </button>
              </>
            ) : null}
          </div>

          <div className="flex min-h-20 items-center justify-center gap-4 px-6 py-4 text-center">
            {many ? (
              <button type="button" onClick={() => go(-1)} disabled={index === 0} className={`${ctrl} sm:hidden`}>
                <ChevronLeft aria-hidden className="size-5" />
                <span className="sr-only">Previous image</span>
              </button>
            ) : null}
            <p className="max-w-2xl text-sm text-white/75">{item.caption ?? item.alt}</p>
            {many ? (
              <button
                type="button"
                onClick={() => go(1)}
                disabled={index === items.length - 1}
                className={`${ctrl} sm:hidden`}
              >
                <ChevronRight aria-hidden className="size-5" />
                <span className="sr-only">Next image</span>
              </button>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
