"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "header" | "figure" | "p";
} & Omit<HTMLMotionProps<"div">, "children">;

/** Fades content up once as it enters the viewport. Transforms are dropped under reduced motion. */
export function Reveal({ children, delay = 0, y = 24, className, as = "div", ...rest }: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.65, ease: easeOutExpo, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
