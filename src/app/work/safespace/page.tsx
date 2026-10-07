import type { Metadata } from "next";

import { pageMetadata } from "@/content/seo";
import { Eye, Lock, MessageCircle, PenLine, Sparkles } from "lucide-react";

import dLanding from "@/assets/safespace/d-landing.webp";
import dLifeMap from "@/assets/safespace/d-lifemap.webp";
import dMyStory from "@/assets/safespace/d-mystory.webp";
import dGuided from "@/assets/safespace/d-guided.webp";
import dOnboarding from "@/assets/safespace/d-onboarding.webp";
import dPrivacy from "@/assets/safespace/d-privacy.webp";
import dToday from "@/assets/safespace/d-today.webp";
import dWrite from "@/assets/safespace/d-write.webp";
import mAffects from "@/assets/safespace/m-affects.webp";
import mGarden from "@/assets/safespace/m-garden.webp";
import mGuided from "@/assets/safespace/m-guided.webp";
import mLanding from "@/assets/safespace/m-landing.webp";
import mLifeMap from "@/assets/safespace/m-lifemap.webp";
import mMyStory from "@/assets/safespace/m-mystory.webp";
import mOnboarding from "@/assets/safespace/m-onboarding.webp";
import mPrivacy from "@/assets/safespace/m-privacy.webp";
import mToday from "@/assets/safespace/m-today.webp";
import mWrite from "@/assets/safespace/m-write.webp";
import mYou from "@/assets/safespace/m-you.webp";
import { ButtonLink, TextLink } from "@/components/button";
import { CaseHero, CaseSection, Figure, FlowChips, ProjectNav } from "@/components/case-study";
import { BrowserFrame, PhoneFrame } from "@/components/device-frame";
import { LightboxGroup, ZoomTrigger, type LightboxItem } from "@/components/lightbox";
import { ProcessFlow } from "@/components/process-flow";
import { Reveal } from "@/components/reveal";
import { ScreenStrip } from "@/components/screen-strip";
import { StatusBadge } from "@/components/tags";
import { neighbours } from "@/content/projects";
import { links } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "SafeSpace",
  description:
    "Case study: SafeSpace, a privacy-first social and self-reflection platform Dev Gothi designed, built and launched — anonymous expression, journaling, conversations and personal insight.",
  path: "/work/safespace",
});

const pillars = [
  { icon: PenLine, name: "Share", text: "Anonymous social expression" },
  { icon: Sparkles, name: "Reflect", text: "Journaling and guided reflection" },
  { icon: Eye, name: "Understand", text: "Patterns and personal insights" },
  { icon: MessageCircle, name: "Connect", text: "Messaging and social interaction" },
  { icon: Lock, name: "Control", text: "Privacy and data controls" },
];

const role = [
  "Product concept",
  "UX flows",
  "Interface design",
  "Responsive behaviour",
  "Front-end implementation",
  "AI features",
  "Real-time interactions",
  "Subscription experience",
  "Deployment",
];

const lifeMapShots: LightboxItem[] = [
  { src: mLifeMap, alt: "Life Map on mobile: “No recent check-in”, with Why? and Ask SafeSpace entry points." },
  {
    src: mAffects,
    alt: "“What affects me?” on mobile, labelled “Correlations, not causes”, with a note that comparisons do not prove one thing caused another.",
  },
  { src: dLifeMap, alt: "Life Map on desktop, showing what SafeSpace is noticing and what it is beginning to understand." },
];

const journalShots: LightboxItem[] = [
  { src: mMyStory, alt: "My Story on mobile: Gratitude Garden, Guided Session, Private Journal and Weekly Report." },
  { src: mGuided, alt: "Guided session on mobile: “What would you like to work on?”, described as guided self-help, not therapy." },
  { src: dGuided, alt: "Guided session setup on desktop." },
];

const socialShots: LightboxItem[] = [
  {
    src: mWrite,
    alt: "Compose screen on mobile: “Share how you’re feeling”, then “What do you need from people?” with Just listen, Advice welcome, Support and Anyone relate?",
  },
  { src: mLanding, alt: "SafeSpace landing on mobile, previewing anonymous posts in Space." },
  { src: dWrite, alt: "Compose screen on desktop with response types, post type and mood tags." },
];

const responsiveShots: LightboxItem[] = [
  { src: dToday, alt: "Today on desktop: persistent sidebar with Create, current state and shortcuts beside “How is today meeting you?”." },
  { src: mToday, alt: "Today on mobile: the same content stacked, with a bottom tab bar and a central Create button." },
];

const additional: LightboxItem[] = [
  { src: mOnboarding, alt: "Onboarding: “A space that gets to know your life.”", caption: "Onboarding" },
  { src: mYou, alt: "You: profile, messages, friends, Ghost Mode, plan and settings.", caption: "You" },
  { src: mPrivacy, alt: "Privacy settings for the Garden.", caption: "Privacy" },
  { src: mGarden, alt: "Gratitude Garden, a private 3D garden that grows from kept moments.", caption: "Gratitude Garden" },
  { src: dLanding, alt: "Landing page on desktop: “Your life makes more sense when you can see it.”", caption: "Landing" },
  { src: dOnboarding, alt: "Onboarding on desktop.", caption: "Onboarding · desktop" },
  { src: dPrivacy, alt: "Privacy settings on desktop.", caption: "Privacy · desktop" },
  { src: dMyStory, alt: "My Story on desktop.", caption: "My Story · desktop" },
];

export default function SafeSpacePage() {
  const { previous, next } = neighbours("safespace");
  return (
    <>
      <CaseHero
        eyebrow="01 / Case study"
        title="SafeSpace"
        subtitle="A privacy-first social and self-reflection platform for anonymous expression, journaling, meaningful conversations, and personal insight."
        status={<StatusBadge status="Live product" tone="dark" />}
        meta={["Independent product", "Product Design", "Front-End", "AI Product"]}
        actions={
          <>
            <ButtonLink href={links.safeSpace}>Visit live product</ButtonLink>
            <ButtonLink href={links.safeSpacePrototype} variant="secondary">
              View Figma prototype
            </ButtonLink>
          </>
        }
        visual={
          <div className="relative pb-[12%] sm:pr-[14%]">
            <BrowserFrame
              src={dMyStory}
              alt="SafeSpace My Story on desktop."
              sizes="(min-width: 1024px) 50vw, 92vw"
              priority
              tone="dark"
            />
            <PhoneFrame
              src={mLifeMap}
              alt="SafeSpace Life Map on mobile."
              sizes="(min-width: 1024px) 14vw, 30vw"
              priority
              className="absolute right-0 bottom-0 w-[30%] sm:w-[24%]"
            />
          </div>
        }
        note="Screens are the production SafeSpace codebase running locally with a fresh, empty account — so some views show their honest empty states."
      />

      {/* 01 — The product */}
      <CaseSection
        number="01"
        label="The product"
        title={
          <>
            A more private way to share, reflect, and understand yourself.
          </>
        }
        intro={
          <>
            <p>
              I built and launched SafeSpace as one place for anonymous expression, private journaling, guided
              reflection and personal insight. Public posts are anonymous and kept separate from the rest of your
              account; everything personal is private by default.
            </p>
            <p className="text-base text-muted">
              It is a reflection tool, not therapy — it makes no clinical claims and points to crisis resources
              instead.
            </p>
          </>
        }
      >
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] bg-border ring-1 ring-border sm:grid-cols-3 lg:grid-cols-5">
          {pillars.map(({ icon: Icon, name, text }, i) => (
            <Reveal as="li" key={name} delay={i * 0.05} className={`bg-white p-6 sm:p-8 ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
              <Icon aria-hidden className="size-5 text-green-700" strokeWidth={1.75} />
              <p className="text-eyebrow mt-8 text-ink">{name}</p>
              <p className="mt-2 text-[0.9375rem] leading-snug text-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12">
          <p className="max-w-3xl text-[clamp(1.375rem,1.1rem+1vw,2rem)] leading-snug tracking-[-0.025em] text-ink">
            “Your life makes more sense when you can see it.”
            <span className="mt-3 block text-sm tracking-normal text-muted">— the product’s own opening line</span>
          </p>
        </Reveal>
      </CaseSection>

      {/* 02 — My role */}
      <CaseSection
        number="02"
        label="My role"
        tone="white"
        title="Designed it. Built it. Shipped it."
        intro={
          <p>
            SafeSpace is an independent product. I owned every layer — from the first concept and flows in Figma to
            the production code, data model and deployment.
          </p>
        }
      >
        <div className="grid-page gap-y-10">
          <Reveal className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-4">
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {role.map((r) => (
                <li key={r} className="flex items-center gap-3 border-b border-border py-4 text-lg tracking-[-0.01em]">
                  <span aria-hidden className="size-1.5 rounded-full bg-green-600" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="col-span-4 md:col-span-3 lg:col-span-2 lg:col-start-11">
            <p className="text-eyebrow text-muted">Built with</p>
            <ul className="mt-4 space-y-2 text-[0.9375rem] text-ink-soft">
              <li>Next.js · React</li>
              <li>Tailwind CSS</li>
              <li>Supabase — Postgres, Auth, Realtime</li>
              <li>Stripe subscriptions</li>
              <li>Web Push · PWA</li>
              <li>LLM-assisted features</li>
            </ul>
          </Reveal>
        </div>
      </CaseSection>

      {/* 03 — Life Map */}
      <CaseSection
        number="03"
        label="Key experience · Life Map"
        tone="mist"
        title="Insight that shows its evidence — or says it doesn’t have enough."
        intro={
          <p>
            Life Map looks for patterns in what someone records. The design problem: insight about your own life must
            never read like a machine’s verdict. So the product earns every statement it makes.
          </p>
        }
      >
        <LightboxGroup items={lifeMapShots}>
          <div className="grid-page gap-y-12">
            <div className="col-span-4 grid grid-cols-2 gap-4 sm:gap-6 md:col-span-8 lg:col-span-6">
              <Reveal>
                <ZoomTrigger index={0} label={lifeMapShots[0].alt}>
                  <PhoneFrame src={mLifeMap} alt={lifeMapShots[0].alt} sizes="(min-width: 1024px) 22vw, 45vw" />
                </ZoomTrigger>
              </Reveal>
              <Reveal delay={0.1} className="mt-[18%]">
                <ZoomTrigger index={1} label={lifeMapShots[1].alt}>
                  <PhoneFrame src={mAffects} alt={lifeMapShots[1].alt} sizes="(min-width: 1024px) 22vw, 45vw" />
                </ZoomTrigger>
              </Reveal>
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-5 lg:col-start-8 lg:self-center">
              <ol className="space-y-8">
                {[
                  [
                    "Thresholds before claims",
                    "A pattern only appears once there are enough observations across enough separate days. Until then, the honest answer is shown: “Not enough data yet.”",
                  ],
                  [
                    "Correlations, not causes",
                    "Comparisons are labelled as what happened together in your own data — and say plainly that they do not prove one thing caused another.",
                  ],
                  [
                    "Guardrails on AI language",
                    "Generated reflections are checked for unsupported “you always…” history claims and causal wording before they reach the person.",
                  ],
                  [
                    "Only direct inputs",
                    "Life Map builds from what someone chose to record. It never keyword-guesses topics from private writing, and never fills gaps with demo data.",
                  ],
                ].map(([h, t], i) => (
                  <Reveal as="li" key={h} delay={i * 0.06} className="grid grid-cols-[2.25rem_1fr]">
                    <span className="text-eyebrow pt-1.5 text-green-700">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.02em]">{h}</h3>
                      <p className="mt-2 leading-relaxed text-ink-soft">{t}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
          <Reveal className="mt-16 hidden md:block">
            <Figure caption="Life Map on desktop — “What SafeSpace is noticing” stays visibly unfinished until the evidence exists.">
              <ZoomTrigger index={2} label={lifeMapShots[2].alt}>
                <BrowserFrame src={dLifeMap} alt={lifeMapShots[2].alt} sizes="(min-width: 1024px) 80vw, 100vw" />
              </ZoomTrigger>
            </Figure>
          </Reveal>
        </LightboxGroup>
      </CaseSection>

      {/* 04 — Journal + AI reflection */}
      <CaseSection
        number="04"
        label="Key experience · Journal & reflection"
        title="Write first. Reflection follows."
        intro={
          <p>
            The private journal is the core loop: write freely, optionally talk it through with an AI journal coach,
            and come back later to see what has changed. Guided sessions add structure for working through something
            over time — framed as guided self-help, not therapy or a diagnosis.
          </p>
        }
      >
        <Reveal>
          <FlowChips label="Journal flow" steps={["Write", "Reflect", "Converse", "Revisit", "Understand"]} />
        </Reveal>
        <LightboxGroup items={journalShots}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <ZoomTrigger index={0} label={journalShots[0].alt}>
                <PhoneFrame src={mMyStory} alt={journalShots[0].alt} sizes="(min-width: 1024px) 22vw, 45vw" />
              </ZoomTrigger>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-3">
              <ZoomTrigger index={1} label={journalShots[1].alt}>
                <PhoneFrame src={mGuided} alt={journalShots[1].alt} sizes="(min-width: 1024px) 22vw, 45vw" />
              </ZoomTrigger>
            </Reveal>
            <Reveal delay={0.16} className="col-span-2 hidden self-center md:block lg:col-span-6">
              <ZoomTrigger index={2} label={journalShots[2].alt}>
                <BrowserFrame src={dGuided} alt={journalShots[2].alt} sizes="(min-width: 1024px) 45vw, 90vw" />
              </ZoomTrigger>
            </Reveal>
          </div>
        </LightboxGroup>
      </CaseSection>

      {/* 05 — Social */}
      <CaseSection
        number="05"
        label="Key experience · Social"
        tone="white"
        title="Anonymous, but not careless."
        intro={
          <p>
            Space is where people share anonymously. Before posting, the author says what kind of response they want
            — just listen, advice welcome, support, or “anyone relate?” — so replies start with the right
            expectations. Posts and comments pass through automated moderation, the feed offers a “Most Supported” view
            alongside Latest and Friends, and direct messages update in real time.
          </p>
        }
      >
        <LightboxGroup items={socialShots}>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <ZoomTrigger index={0} label={socialShots[0].alt}>
                <PhoneFrame src={mWrite} alt={socialShots[0].alt} sizes="(min-width: 1024px) 22vw, 45vw" />
              </ZoomTrigger>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-3">
              <ZoomTrigger index={1} label={socialShots[1].alt}>
                <PhoneFrame src={mLanding} alt={socialShots[1].alt} sizes="(min-width: 1024px) 22vw, 45vw" />
              </ZoomTrigger>
            </Reveal>
            <Reveal delay={0.16} className="col-span-2 hidden self-center md:block lg:col-span-6">
              <ZoomTrigger index={2} label={socialShots[2].alt}>
                <BrowserFrame src={dWrite} alt={socialShots[2].alt} sizes="(min-width: 1024px) 45vw, 90vw" />
              </ZoomTrigger>
            </Reveal>
          </div>
        </LightboxGroup>
      </CaseSection>

      {/* 06 — Responsive */}
      <CaseSection
        number="06"
        label="Responsive experience"
        tone="dark"
        title="Same product, re-arranged for the hand."
        intro={<p>Mobile isn’t the desktop layout shrunk. Two decisions that changed between them:</p>}
      >
        <LightboxGroup items={responsiveShots}>
          <div className="grid-page items-start gap-y-12">
            <Reveal className="col-span-4 md:col-span-8 lg:col-span-8">
              <ZoomTrigger index={0} label={responsiveShots[0].alt}>
                <BrowserFrame src={dToday} alt={responsiveShots[0].alt} sizes="(min-width: 1024px) 60vw, 100vw" tone="dark" />
              </ZoomTrigger>
            </Reveal>
            <Reveal delay={0.1} className="col-span-2 col-start-2 md:col-span-3 md:col-start-auto lg:col-span-3 lg:col-start-10">
              <ZoomTrigger index={1} label={responsiveShots[1].alt}>
                <PhoneFrame src={mToday} alt={responsiveShots[1].alt} sizes="(min-width: 1024px) 20vw, 45vw" />
              </ZoomTrigger>
            </Reveal>
            <div className="col-span-4 space-y-8 md:col-span-5 md:col-start-4 lg:col-span-8 lg:col-start-1 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
              {[
                [
                  "Navigation moves to the thumb",
                  "The desktop sidebar becomes a bottom tab bar on mobile, and Create moves from the top of the sidebar to the centre of that bar.",
                ],
                [
                  "Context steps back",
                  "On desktop the sidebar keeps “Your current state” and shortcuts in view. On mobile they collapse away; the same entries live in My Story and You.",
                ],
              ].map(([h, t], i) => (
                <Reveal key={h} delay={0.1 + i * 0.06}>
                  <p className="text-eyebrow text-green-400">Decision {i + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">{h}</h3>
                  <p className="mt-2 leading-relaxed text-white/68">{t}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </LightboxGroup>
      </CaseSection>

      {/* 07 — Design to product */}
      <CaseSection
        number="07"
        label="From design to product"
        title="Beyond static screens — a working application."
        intro={
          <p>
            The Figma file was the start, not the deliverable. The same flows run in production with real accounts,
            row-level-secured data, real-time messaging, push notifications, Stripe subscriptions (Free, Plus and
            Pro) and crisis-resource routing.
          </p>
        }
      >
        <ProcessFlow
          tone="light"
          columns={7}
          steps={[
            { name: "Concept", text: "Who it’s for and what it must protect." },
            { name: "Figma", text: "Flows, components and states." },
            { name: "Front-end", text: "Next.js and a responsive UI." },
            { name: "Data / Auth", text: "Supabase with row-level security." },
            { name: "AI", text: "Journal coach, reflections, moderation." },
            { name: "Test", text: "Edge cases and empty states." },
            { name: "Deploy", text: "Live, installable as a PWA." },
          ]}
        />
        <Reveal className="mt-12 flex flex-wrap gap-x-8 gap-y-2">
          <TextLink href={links.safeSpaceFigma}>Figma design file</TextLink>
          <TextLink href={links.safeSpacePrototype}>Figma prototype</TextLink>
        </Reveal>
      </CaseSection>

      {/* 08 — Additional screens */}
      <CaseSection number="08" label="Additional screens" tone="white" title="More of the product.">
        <ScreenStrip items={additional} label="Additional SafeSpace screens" />
      </CaseSection>

      {/* Final CTA */}
      <section aria-labelledby="ss-cta" className="grain bg-forest-950 text-white">
        <div className="container-page flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <Reveal>
            <h2 id="ss-cta" className="text-section">
              Ready to explore
              <br />
              <span className="text-green-400">SafeSpace?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-wrap gap-3">
            <ButtonLink href={links.safeSpace}>Visit SafeSpace</ButtonLink>
            <ButtonLink href={links.safeSpacePrototype} variant="secondary">
              Open prototype
            </ButtonLink>
          </Reveal>
        </div>
      </section>
      <ProjectNav previous={previous} next={next} />
    </>
  );
}
