"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Honour the OS reduced-motion setting everywhere: transforms are skipped, opacity stays. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
