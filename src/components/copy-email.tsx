"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

/** Copies the address and confirms visually and to screen readers. */
export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2200);
    return () => clearTimeout(t);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className={`group relative z-[2] inline-flex h-12 shrink-0 items-center gap-2 rounded-full px-5 text-[0.9375rem] font-medium transition-[background-color,transform] duration-200 active:scale-[0.98] ${
          state === "copied" ? "bg-green-400 text-forest-950" : "bg-green-500 text-forest-950 hover:bg-green-400"
        }`}
      >
        {state === "copied" ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" />}
        {state === "copied" ? "Copied" : "Copy email"}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {state === "copied" ? "Email address copied to clipboard" : state === "failed" ? "Couldn’t copy — the address is shown on screen" : ""}
      </span>
    </>
  );
}
