import type { Metadata } from "next";

import { pageMetadata } from "@/content/seo";
import { ArrowUpRight, Check, FileText, Mail, MapPin } from "lucide-react";

import { ButtonLink } from "@/components/button";
import { CopyEmail } from "@/components/copy-email";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { links, site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Dev Gothi — front-end designer and engineer based in Ottawa, Canada.",
  path: "/contact",
});

const openTo = [
  "Front-end designer / engineer roles",
  "Product-focused development roles",
  "Internship and new-grad opportunities",
  "Relevant freelance or project work",
  "Interesting collaborations",
];

export default function ContactPage() {
  const channels = [
    links.linkedin ? { name: "LinkedIn", detail: "Connect with me", href: links.linkedin, icon: LinkedInIcon } : null,
    { name: "GitHub", detail: "github.com/devgothi9", href: links.github, icon: GitHubIcon },
    links.resume ? { name: "Resume", detail: "View / download", href: links.resume, icon: FileText } : null,
  ].filter((c): c is NonNullable<typeof c> => c !== null);

  return (
    <div className="grain bg-forest-950 text-white">
      <section aria-labelledby="contact-title" className="container-page pt-32 pb-16 md:pt-40 md:pb-24">
        <Reveal>
          <p className="text-eyebrow inline-flex items-center gap-2.5 text-white/60">
            <span aria-hidden className="size-1.5 rounded-full bg-green-400" />
            Let’s connect
          </p>
          <h1 id="contact-title" className="text-display mt-7">
            Have something
            <br />
            interesting
            <br />
            <span className="text-green-400">to build?</span>
          </h1>
          <p className="text-lead mt-8 max-w-[34rem] text-white/72">
            I’m open to opportunities, collaborations, and conversations about products, technology, and design.
          </p>
        </Reveal>

        {/* Primary: email */}
        <Reveal delay={0.1} className="mt-14">
          <div className="flex flex-col gap-6 rounded-[var(--radius-card)] bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4 sm:items-center">
              <span aria-hidden className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                <Mail className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-eyebrow text-white/50">Email</p>
                <a
                  href={links.email}
                  className="mt-2 block text-[clamp(1.25rem,0.9rem+1.6vw,2rem)] font-semibold tracking-[-0.025em] break-all transition-colors hover:text-green-300"
                >
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <CopyEmail email={site.email} />
              <ButtonLink href={links.email} variant="secondary">
                Send an email
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        {/* Other channels */}
        <ul className={`mt-4 grid gap-4 ${channels.length > 1 ? "sm:grid-cols-2" : ""} ${channels.length > 2 ? "lg:grid-cols-3" : ""}`}>
          {channels.map((c, i) => (
            <Reveal as="li" key={c.name} delay={0.14 + i * 0.05}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-24 items-center justify-between gap-4 rounded-[var(--radius-card)] bg-white/[0.03] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.06] hover:ring-white/20"
              >
                <span className="flex items-center gap-4">
                  <c.icon aria-hidden className="size-6 text-white/85" />
                  <span>
                    <span className="block font-semibold">{c.name}</span>
                    <span className="block text-sm text-white/55">{c.detail}</span>
                  </span>
                </span>
                <ArrowUpRight aria-hidden className="size-5 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-labelledby="open-title" className="border-t border-white/10">
        <div className="container-page grid-page gap-y-10 py-16 md:py-24">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-5">
            <h2 id="open-title" className="text-title">
              What I’m open to
            </h2>
            <ul className="mt-8 space-y-4">
              {openTo.map((o) => (
                <li key={o} className="flex items-center gap-3 text-white/85">
                  <span aria-hidden className="inline-flex size-6 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                    <Check className="size-3.5" />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="col-span-4 md:col-span-8 lg:col-span-5 lg:col-start-8">
            <h2 className="text-title">Where I am</h2>
            <p className="mt-8 inline-flex items-center gap-2 text-white/85">
              <MapPin aria-hidden className="size-4 text-green-400" />
              {site.location}
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-white/60">
              Studying at {site.education.school} and open to opportunities in product design, front-end development
              and related roles.
            </p>
            <div className="mt-8">
              <ButtonLink href="/#work" variant="secondary" icon="right">
                See selected work
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
