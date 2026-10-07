import Image from "next/image";
import Link from "next/link";

import photoSunset from "@/assets/photos/sunset-water.webp";
import photoTower from "@/assets/photos/clock-tower.webp";
import photoHawk from "@/assets/photos/hawk.webp";
import { getProject, type Project } from "@/content/projects";
import { links } from "@/content/site";
import { buttonClasses, TextLink } from "../button";
import { BrowserFrame, PhoneFrame } from "../device-frame";
import { Reveal } from "../reveal";
import { StatusBadge, Tag } from "../tags";
import { ArrowUpRight } from "lucide-react";

export function SelectedWork() {
  const safespace = getProject("safespace");
  const retail = getProject("retail-vision");
  const invoice = getProject("invoice-validator");

  return (
    <section id="work" aria-labelledby="work-title" className="on-light section-y bg-paper">
      <div className="container-page">
        <Reveal className="grid-page items-end gap-y-6">
          <div className="col-span-4 md:col-span-5 lg:col-span-7">
            <p className="text-eyebrow text-muted">01 / Selected work</p>
            <h2 id="work-title" className="text-section mt-5">
              Selected work
            </h2>
          </div>
          <p className="text-lead col-span-4 text-muted md:col-span-3 lg:col-span-4 lg:col-start-9">
            Projects and experiments that move from interface thinking into functional products.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6 md:mt-20 lg:space-y-8">
          <FeatureCard project={safespace} theme="dark" />
          <FeatureCard project={retail} theme="light" reverse />

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <InvoiceCard project={invoice} />
            <PhotographyCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ project, theme, reverse }: { project: Project; theme: "dark" | "light"; reverse?: boolean }) {
  const dark = theme === "dark";
  const { desktop, mobile } = project.cover;
  return (
    <Reveal>
      <article
        className={`group relative isolate grid overflow-hidden rounded-[var(--radius-card)] transition-shadow duration-300 lg:grid-cols-12 ${
          dark
            ? "grain bg-forest-900 text-white"
            : "bg-white text-ink ring-1 ring-border hover:shadow-[0_24px_60px_-30px_rgba(7,19,13,0.25)]"
        }`}
      >
        {/* Copy */}
        <div
          className={`relative z-[2] flex flex-col p-7 sm:p-10 lg:col-span-5 lg:p-14 ${reverse ? "lg:order-2 lg:col-start-8" : ""}`}
        >
          <div className="flex items-center gap-4">
            <span className={`text-eyebrow ${dark ? "text-white/50" : "text-muted"}`}>{project.index}</span>
            <StatusBadge status={project.status} tone={dark ? "dark" : "light"} />
          </div>
          <h3 className="text-project mt-6">{project.title}</h3>
          <p className={`text-lead mt-5 max-w-md ${dark ? "text-white/72" : "text-muted"}`}>{project.summary}</p>
          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Disciplines">
            {project.disciplines.map((d) => (
              <Tag key={d} tone={dark ? "dark" : "light"}>
                {d}
              </Tag>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-10">
            <Link
              href={project.href}
              className={`stretched-link ${buttonClasses("primary", dark ? "dark" : "light")} group-hover:-translate-y-px`}
            >
              View case study
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <span className="sr-only">: {project.title}</span>
            </Link>
            {project.external.map((l) => (
              <TextLink key={l.href} href={l.href} tone={dark ? "dark" : "light"}>
                {l.label}
              </TextLink>
            ))}
          </div>
        </div>

        {/* Visual — small screens get one large phone screen; desktop frame joins from sm */}
        <div
          className={`relative h-[24rem] overflow-hidden xs:h-[28rem] sm:h-auto sm:min-h-[26rem] lg:col-span-7 lg:min-h-[38rem] ${
            reverse ? "lg:order-1" : ""
          } ${dark ? "" : "bg-[#f3f2ee]"}`}
        >
          {desktop ? (
            <div className="absolute top-[12%] left-[8%] hidden w-[118%] transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 sm:block lg:top-[14%] lg:left-[10%]">
              <BrowserFrame src={desktop.src} alt={desktop.alt} sizes="(min-width: 1024px) 62vw, 110vw" />
            </div>
          ) : null}
          {mobile ? (
            <div
              className={`absolute top-[7%] left-1/2 w-[62%] max-w-[17rem] -translate-x-1/2 transition-transform delay-75 duration-500 ease-out-expo group-hover:-translate-y-2 sm:top-auto sm:bottom-[6%] sm:w-[24%] sm:translate-x-0 lg:bottom-[7%] lg:w-[25%] ${
                reverse ? "sm:right-[5%] sm:left-auto lg:right-[4%]" : "sm:left-[5%] lg:left-[4%]"
              }`}
            >
              <PhoneFrame src={mobile.src} alt={mobile.alt} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 24vw, 62vw" />
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

function InvoiceCard({ project }: { project: Project }) {
  const shot = project.cover.desktop!;
  return (
    <Reveal>
      <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-mist ring-1 ring-border transition-shadow duration-300 hover:shadow-[0_24px_60px_-30px_rgba(7,19,13,0.25)]">
        <div className="relative z-[2] p-7 sm:p-10">
          <div className="flex items-center gap-4">
            <span className="text-eyebrow text-muted">{project.index}</span>
            <StatusBadge status={project.status} tone="light" />
          </div>
          <h3 className="text-title mt-5">{project.title}</h3>
          <p className="mt-3 max-w-md text-muted">
            Automated invoice validation and review — missing information, calculation discrepancies, duplicates and
            other issues, explained.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Disciplines">
            {project.disciplines.map((d) => (
              <Tag key={d}>{d}</Tag>
            ))}
          </ul>
          <Link href={project.href} className={`stretched-link mt-7 ${buttonClasses("secondary", "light", "sm")}`}>
            View project
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
            <span className="sr-only">: {project.title}</span>
          </Link>
        </div>
        <div className="relative mt-auto h-56 overflow-hidden sm:h-72">
          <div className="absolute top-0 left-7 w-[150%] transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 sm:left-10 sm:w-[115%]">
            <BrowserFrame src={shot.src} alt={shot.alt} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function PhotographyCard() {
  return (
    <Reveal delay={0.08}>
      <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-border transition-shadow duration-300 hover:shadow-[0_24px_60px_-30px_rgba(7,19,13,0.25)]">
        <div className="relative z-[2] p-7 sm:p-10">
          <span className="text-eyebrow text-muted">04</span>
          <h3 className="text-title mt-5">Photography</h3>
          <p className="mt-3 max-w-md text-muted">
            Exploring composition, light, places, and visual storytelling beyond the interface.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/photography" className={`stretched-link ${buttonClasses("secondary", "light", "sm")}`}>
              Explore photography
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
            <TextLink href={links.photography}>Visit full photography site</TextLink>
          </div>
        </div>
        <div className="mt-auto grid h-56 grid-cols-[1.35fr_1fr] gap-2 px-2 pb-2 sm:h-72">
          <div className="relative overflow-hidden rounded-[1rem]">
            <Image
              src={photoSunset}
              alt="Sun setting into water behind distant boats."
              fill
              sizes="(min-width: 1024px) 28vw, 55vw"
              placeholder="blur"
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.025]"
            />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="relative overflow-hidden rounded-[1rem]">
              <Image
                src={photoTower}
                alt="Clock tower with a green copper roof in evening light."
                fill
                sizes="(min-width: 1024px) 18vw, 40vw"
                placeholder="blur"
                className="object-cover object-[50%_30%] transition-transform duration-700 ease-out-expo group-hover:scale-[1.025]"
              />
            </div>
            <div className="relative overflow-hidden rounded-[1rem]">
              <Image
                src={photoHawk}
                alt="Close portrait of a hawk against a dark background."
                fill
                sizes="(min-width: 1024px) 18vw, 40vw"
                placeholder="blur"
                className="object-cover object-[60%_40%] transition-transform duration-700 ease-out-expo group-hover:scale-[1.025]"
              />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
