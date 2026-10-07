import Image, { type StaticImageData } from "next/image";

type FrameProps = {
  src: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  tone?: "light" | "dark";
};

/** A quiet desktop/browser frame. Screenshots keep their native aspect ratio. */
export function BrowserFrame({ src, alt, sizes, priority, className = "", tone = "light" }: FrameProps) {
  return (
    <span
      className={`block overflow-hidden rounded-[var(--radius-frame)] shadow-[0_30px_80px_-30px_rgba(7,19,13,0.45),0_0_0_1px_rgba(7,19,13,0.08)] ${
        tone === "dark" ? "bg-forest-850 ring-1 ring-white/10" : "bg-white"
      } ${className}`}
    >
      <span
        className={`flex h-7 items-center gap-1.5 px-3 sm:h-8 ${tone === "dark" ? "bg-forest-850" : "bg-[#f1f3f1]"}`}
        aria-hidden
      >
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
      </span>
      <Image src={src} alt={alt} sizes={sizes} priority={priority} placeholder="blur" className="block h-auto w-full" />
    </span>
  );
}

/** A minimal phone frame; radii and bezel scale with its width via container units. */
export function PhoneFrame({ src, alt, sizes, priority, className = "" }: FrameProps) {
  return (
    <span className={`block [container-type:inline-size] ${className}`}>
      <span className="block rounded-[14cqw] bg-forest-950 p-[2.2cqw] shadow-[0_30px_60px_-24px_rgba(7,19,13,0.55)] ring-1 ring-white/10">
        <span className="block overflow-hidden rounded-[12cqw] bg-white">
          <Image src={src} alt={alt} sizes={sizes} priority={priority} placeholder="blur" className="block h-auto w-full" />
        </span>
      </span>
    </span>
  );
}
