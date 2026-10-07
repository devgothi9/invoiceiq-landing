"use client";

import { motion } from "motion/react";
import { useState } from "react";

let hydrated = false;

/**
 * A short, non-blocking route transition. The first server-rendered page is shown
 * as-is (no fade) so it paints immediately; later client navigations fade in.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const [initial] = useState(() => {
    if (typeof window === "undefined" || !hydrated) {
      if (typeof window !== "undefined") hydrated = true;
      return false as const;
    }
    return { opacity: 0, y: 8 };
  });
  return (
    <motion.div initial={initial} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
