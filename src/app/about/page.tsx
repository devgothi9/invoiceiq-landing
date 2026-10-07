import type { Metadata } from "next";

import { pageMetadata } from "@/content/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import portrait from "@/assets/portrait/dev-cutout.webp";
import photoBlackbird from "@/assets/photos/blackbird.webp";
import { ButtonLink } from "@/components/button";
import { ContactCTA } from "@/components/contact-cta";
import { ProcessFlow } from "@/components/process-flow";
import { Reveal } from "@/components/reveal";
import { links, site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Dev Gothi — a Computer Engineering Technology – Computing Science student in Ottawa working across product design, front-end engineering and AI product experiments.",
  path: "/about",
});

const experience = [
  {
    kind: "Education",
    title: site.education.program,
    org: site.education.school,
    when: `Expected graduation ${site.education.graduation}`,
    text: null,
  },
  {
    kind: "Experience",
    title: "IT Service Desk Student",
    org: "Muskoka Algonquin Healthcare",
    when: "Jan 2025 – Dec 2025",
    text: "Provided first-line technical support across healthcare environments, helping staff resolve account, application, VPN, printer, access and other IT issues while documenting work through service-management processes.",
  },
  {
    kind: "Experience",
    title: "Peer Tutor — Calculus & DBMS",
    org: "Algonquin College",
    when: "May 2024 – Dec 2024",
    text: "Supported students with calculus, relational databases, SQL, normalization and data-modelling concepts.",
  },
];

const capabilities = [
  {
    name: "Product & Design",
    items: ["Product thinking", "Interface design", "UX flows", "Responsive design", "Design systems", "Prototyping"],
  },
  {
    name: "Front-End",
    items: ["React", "Next.js", "JavaScript / TypeScript", "Tailwind CSS", "Responsive UI", "REST / API integration", "PWA"],
  },
  {
    name: "Systems",
    items: ["Supabase", "PostgreSQL", "Authentication", "Real-time features", "Stripe", "Git", "Deployment"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero (light) */}
      <section aria-labelledby="about-hero" className="on-light relative isolate overflow-hidden bg-paper">
        <div className="container-page grid-page items-end gap-y-6 pt-32 md:pt-40">
          <Reveal className="col-span-4 pb-12 md:col-span-8 lg:col-span-7 lg:pb-28">
            <p className="text-eyebrow text-muted">01 / About me</p>
            <h1 id="about-hero" className="text-hero mt-6">
              Designer mindset.
              <br />
              <span className="text-green-700">Engineer execution.</span>
            </h1>
            <p className="text-lead mt-7 max-w-[36rem] text-ink-soft">
              I’m Dev Gothi, a Computer Engineering Technology – Computing Science student based in Ottawa. I enjoy
              designing thoughtful interfaces, understanding the systems behind them, and turning ideas into functional
              products.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
              <MapPin aria-hidden className="size-4 text-green-700" />
              {site.location}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {links.resume ? (
                <ButtonLink href={links.resume} tone="light">
                  View resume
                </ButtonLink>
              ) : null}
              <ButtonLink href="/contact" tone="light" variant={links.resume ? "secondary" : "primary"}>
                Get in touch
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1} y={20} className="relative col-span-4 mx-auto w-[min(86vw,24rem)] md:col-span-8 lg:col-span-5 lg:w-full lg:max-w-[28rem]">
            <span
              aria-hidden
              className="absolute top-[5%] left-1/2 aspect-square w-[108%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_40%_35%,#dcfce7,#bbf7d0_55%,#86efac)]"
            />
            <Image
              src={portrait}
              alt="Dev Gothi, smiling, wearing glasses and a blue puffer jacket."
              priority
              sizes="(min-width: 1024px) 28rem, 86vw"
              className="relative block h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* Education & experience */}
      <section aria-labelledby="exp-title" className="on-light section-y border-t border-border bg-white">
        <div className="container-page grid-page gap-y-12">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-4">
            <p className="text-eyebrow text-muted">02 / Journey</p>
            <h2 id="exp-title" className="text-section mt-5">
              Education &amp; experience
            </h2>
          </Reveal>
          <ol className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6">
            {experience.map((e, i) => (
              <Reveal as="li" key={e.title} delay={i * 0.06} className="grid gap-2 border-t border-border py-8 md:grid-cols-[11rem_1fr] md:gap-8">
                <div>
                  <p className="text-eyebrow text-green-700">{e.kind}</p>
                  <p className="mt-2 text-sm text-muted">{e.when}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{e.title}</h3>
                  <p className="mt-1 text-ink-soft">{e.org}</p>
                  {e.text ? <p className="mt-3 max-w-[36rem] leading-relaxed text-muted">{e.text}</p> : null}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* How I work */}
      <section aria-labelledby="how-title" className="on-light section-y bg-paper">
        <div className="container-page">
          <Reveal className="grid-page gap-y-6">
            <p className="text-eyebrow col-span-4 text-muted md:col-span-8 lg:col-span-4">03 / How I work</p>
            <h2 id="how-title" className="text-section col-span-4 md:col-span-8 lg:col-span-8">
              From ideas to real products.
            </h2>
          </Reveal>
          <div className="mt-14 md:mt-20">
            <ProcessFlow tone="light" />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="cap-title" className="grain section-y bg-forest-900 text-white">
        <div className="container-page grid-page gap-y-12">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-4">
            <p className="text-eyebrow text-white/50">04 / Capabilities</p>
            <h2 id="cap-title" className="text-section mt-5">
              A balanced toolkit.
            </h2>
            <p className="text-lead mt-6 max-w-sm text-white/65">
              Design, front-end and the systems underneath — enough of each to take a product from sketch to deploy.
            </p>
          </Reveal>
          <div className="col-span-4 grid gap-10 md:col-span-8 md:grid-cols-3 lg:col-span-8 lg:col-start-5">
            {capabilities.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <h3 className="text-eyebrow border-b border-white/15 pb-4 text-green-400">{c.name}</h3>
                <ul className="mt-5 space-y-2.5 text-lg tracking-[-0.01em] text-white/88">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond code */}
      <section aria-labelledby="beyond-title" className="on-light section-y bg-paper">
        <div className="container-page grid-page items-center gap-y-12">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-5">
            <p className="text-eyebrow text-muted">05 / Beyond code</p>
            <h2 id="beyond-title" className="text-section mt-5">
              A few other things.
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              <li className="py-5">
                <p className="text-lg font-semibold tracking-[-0.02em]">Photography</p>
                <p className="mt-1 text-muted">Composition, light and patience — the same eye I bring to interfaces.</p>
              </li>
              <li className="py-5">
                <p className="text-lg font-semibold tracking-[-0.02em]">Visual storytelling</p>
                <p className="mt-1 text-muted">Framing a moment so it says one thing clearly.</p>
              </li>
              <li className="py-5">
                <p className="text-lg font-semibold tracking-[-0.02em]">Technology exploration</p>
                <p className="mt-1 text-muted">Trying new tools and seeing how things actually work.</p>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7">
            <Link href="/photography" className="group relative block overflow-hidden rounded-[var(--radius-card)]">
              <Image
                src={photoBlackbird}
                alt="Red-winged blackbird perched among spring branches."
                placeholder="blur"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="block aspect-[3/2] h-auto w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-forest-950/80 to-transparent p-6 pt-16 text-white">
                <span className="text-lg font-semibold">View photography</span>
                <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
