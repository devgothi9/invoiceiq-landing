"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

import portrait from "@/assets/portrait/dev-cutout.webp";
import { site } from "@/content/site";
import { ButtonLink } from "../button";
import { easeOutExpo } from "../reveal";

const lines = [
  <>
    I’m <span className="text-green-400">Dev,</span>
  </>,
  <>Front-End Designer</>,
  <>&amp; Engineer.</>,
];

function fadeUp(delay: number, y = 16) {
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: easeOutExpo, delay },
  };
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="grain relative isolate overflow-hidden bg-forest-950 text-white">
      {/* Soft light behind the portrait — static, no blur animation */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_72%_58%,rgba(34,197,94,0.14),transparent_70%)]"
      />

      <div className="container-page relative flex min-h-[100svh] flex-col pt-24 sm:pt-28 lg:min-h-[max(100svh,44rem)] lg:justify-center lg:pt-24 lg:pb-24">
        {/* Copy */}
        <div className="relative z-20 max-w-[44rem] lg:max-w-[min(50vw,46rem)]">
          <motion.p {...fadeUp(0.14, 10)} className="text-eyebrow inline-flex items-center gap-2.5 text-white/70">
            <span className="size-1.5 rounded-full bg-green-400" aria-hidden />
            Product design + engineering
          </motion.p>

          <h1 id="hero-title" className="text-hero mt-7">
            {lines.map((line, i) => (
              <span key={i} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.22 + i * 0.09 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...fadeUp(0.43)} className="text-lead mt-7 max-w-[30rem] text-white/72">
            I design digital products — and build them. Thoughtful interfaces, turned into functional products, from
            the first idea to the final experience.
          </motion.p>

          <motion.div {...fadeUp(0.65, 12)} className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#work" icon="down-right">
              View my work
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact me
            </ButtonLink>
          </motion.div>

          {/* Compact metadata below the actions until the side column fits (xl) */}
          <motion.dl
            {...fadeUp(0.72, 8)}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/65 sm:mt-10 xl:hidden"
          >
            <div className="flex items-center gap-2">
              <dt className="sr-only">Based in</dt>
              <MapPin aria-hidden className="size-4 text-green-400" />
              <dd>{site.locationShort}</dd>
            </div>
            <div>
              <dt className="sr-only">Education</dt>
              <dd>
                {site.education.school} · {site.education.graduation}
              </dd>
            </div>
          </motion.dl>
        </div>

        {/* Portrait composition: green form → portrait */}
        <div className="pointer-events-none relative z-10 mx-auto mt-10 w-[min(88vw,24rem)] self-center sm:w-[25rem] lg:absolute lg:right-[4rem] lg:bottom-0 lg:mt-0 lg:w-[clamp(20rem,28vw,28rem)] xl:right-[calc(4rem+13rem)] 3xl:right-[calc(5rem+13rem)]">
          <motion.div
            aria-hidden
            className="absolute top-[4%] left-1/2 aspect-square w-[106%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#4ade80,#22c55e_45%,#15803d)]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.55 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.5 }}
            className="relative"
          >
            <Image
              src={portrait}
              alt="Dev Gothi, smiling, wearing glasses and a blue puffer jacket."
              priority
              quality={90}
              sizes="(min-width: 1024px) 28vw, (min-width: 640px) 400px, 88vw"
              className="block h-auto w-full"
            />
          </motion.div>
        </div>

        {/* Side metadata (xl+) */}
        <motion.dl
          {...fadeUp(0.72, 10)}
          className="absolute top-1/2 right-[4rem] z-20 hidden w-44 -translate-y-1/2 space-y-9 text-sm xl:block 3xl:right-[5rem]"
        >
          <div>
            <dt className="text-eyebrow text-white/55">Based in</dt>
            <dd className="mt-3 text-white">{site.locationShort}</dd>
          </div>
          <div>
            <dt className="text-eyebrow text-white/55">Focus</dt>
            <dd className="mt-3">
              <ul className="space-y-1.5 text-white/85">
                <li>Product Design</li>
                <li>Front-End Engineering</li>
                <li>AI Products</li>
              </ul>
            </dd>
          </div>
          <div>
            <dt className="text-eyebrow text-white/55">Education</dt>
            <dd className="mt-3 leading-relaxed text-white/85">
              {site.education.school}
              <br />
              <span className="text-white/60">Computer Engineering Technology · {site.education.graduation}</span>
            </dd>
          </div>
        </motion.dl>

        {/* Scroll cue */}
        <motion.a
          href="#work"
          aria-label="Scroll to selected work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-8 left-[4rem] z-20 hidden items-center gap-3 text-eyebrow text-white/50 transition-colors hover:text-white lg:inline-flex 3xl:left-[5rem] [@media(max-height:760px)]:hidden"
        >
          <span className="relative h-10 w-px overflow-hidden bg-white/15">
            <span className="absolute inset-x-0 top-0 h-4 bg-green-400 motion-safe:animate-[scroll-cue_1.8s_ease-in-out_infinite]" />
          </span>
          Scroll
        </motion.a>
      </div>
    </section>
  );
}
