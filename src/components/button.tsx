import Link from "next/link";
import { ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet";
type Tone = "dark" | "light";
type Icon = "up-right" | "down-right" | "right" | "left" | "down" | "none";

const icons = {
  "up-right": { Icon: ArrowUpRight, move: "group-hover:translate-x-1 group-hover:-translate-y-1" },
  "down-right": { Icon: ArrowDownRight, move: "group-hover:translate-x-1 group-hover:translate-y-1" },
  right: { Icon: ArrowRight, move: "group-hover:translate-x-1" },
  left: { Icon: ArrowLeft, move: "group-hover:-translate-x-1" },
  down: { Icon: ArrowDown, move: "group-hover:translate-y-1" },
} as const;

export function isExternal(href: string) {
  return /^(https?:|mailto:)/.test(href);
}

export function buttonClasses(variant: Variant = "primary", tone: Tone = "dark", size: "md" | "sm" = "md") {
  const base =
    "group relative z-[2] inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] whitespace-nowrap select-none " +
    "transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-out-expo " +
    "hover:-translate-y-px active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";
  const sizes = size === "md" ? "h-12 px-6 text-[0.9375rem]" : "h-11 px-5 text-sm";
  const variants: Record<Variant, Record<Tone, string>> = {
    primary: {
      dark: "bg-green-500 text-forest-950 hover:bg-green-400 shadow-[0_8px_24px_-12px_rgba(34,197,94,0.6)]",
      light: "bg-forest-900 text-white hover:bg-forest-800",
    },
    secondary: {
      dark: "border border-white/20 text-white hover:border-white/40 hover:bg-white/[0.06]",
      light: "border border-ink/15 bg-white/60 text-ink hover:border-ink/35 hover:bg-white",
    },
    quiet: {
      dark: "px-0! h-auto! text-white/80 hover:text-white",
      light: "px-0! h-auto! text-ink-soft hover:text-ink",
    },
  };
  return `${base} ${sizes} ${variants[variant][tone]}`;
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  icon?: Icon;
  size?: "md" | "sm";
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children">;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  tone = "dark",
  icon = "up-right",
  size = "md",
  className = "",
  ...rest
}: ButtonLinkProps) {
  const external = isExternal(href);
  const opensTab = href.startsWith("http");
  const cls = `${buttonClasses(variant, tone, size)} ${className}`;
  const I = icon === "none" ? null : icons[icon];
  const content = (
    <>
      {icon === "left" && I ? <I.Icon aria-hidden className={`size-4 transition-transform duration-200 ${I.move}`} /> : null}
      <span>{children}</span>
      {icon !== "left" && I ? (
        <I.Icon aria-hidden className={`size-4 transition-transform duration-200 ease-out-expo ${I.move}`} />
      ) : null}
      {opensTab ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  );

  if (external) {
    return (
      <a href={href} className={cls} {...(opensTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}

/** Plain text link with an animated arrow; used for tertiary actions. */
export function TextLink({
  href,
  children,
  tone = "light",
  icon = "up-right",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  icon?: Exclude<Icon, "none">;
  className?: string;
}) {
  const external = isExternal(href);
  const opensTab = href.startsWith("http");
  const I = icons[icon];
  const cls = `group relative z-[2] inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-medium underline-offset-4 transition-colors ${
    tone === "dark" ? "text-white/80 hover:text-white" : "text-ink-soft hover:text-ink"
  } ${className}`;
  const inner = (
    <>
      <span className="hairline bg-[length:0%_1px] transition-[background-size] duration-300 ease-out-expo group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <I.Icon aria-hidden className={`size-4 transition-transform duration-200 ${I.move}`} />
      {opensTab ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  );
  return external ? (
    <a href={href} className={cls} {...(opensTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
