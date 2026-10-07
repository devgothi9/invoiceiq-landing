import type { Metadata } from "next";

import { pageMetadata } from "@/content/seo";
import { Check, CircleDashed, FlaskConical, HelpCircle, PenTool } from "lucide-react";

import dAudits from "@/assets/retail/d-audits.webp";
import dEvidence from "@/assets/retail/d-evidence.webp";
import dManager from "@/assets/retail/d-manager.webp";
import dRecon from "@/assets/retail/d-recon.webp";
import dTx from "@/assets/retail/d-tx.webp";
import mAssoc from "@/assets/retail/m-assoc-home.webp";
import mCart from "@/assets/retail/m-cart.webp";
import mCheckout from "@/assets/retail/m-checkout.webp";
import mPass from "@/assets/retail/m-paynow.webp";
import mScan from "@/assets/retail/m-session-scanned.webp";
import mStart from "@/assets/retail/m-start.webp";
import { ButtonLink } from "@/components/button";
import { CaseHero, CaseSection, Figure, FlowChips, ProjectNav } from "@/components/case-study";
import { BrowserFrame, PhoneFrame } from "@/components/device-frame";
import { IntelligenceDiagram } from "@/components/intelligence-diagram";
import { LightboxGroup, ZoomTrigger, type LightboxItem } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";
import { StatusBadge } from "@/components/tags";
import { neighbours } from "@/content/projects";
import { links } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Retail Vision Intelligence",
  description:
    "Case study: Retail Vision Intelligence, a research prototype exploring how store cameras, computer vision, a mobile Scan & Go app and human review can work together — designed around uncertainty.",
  path: "/work/retail-vision",
});

const shopper: LightboxItem[] = [
  { src: mStart, alt: "Store entry: “Scan QR on cart to connect session.”", caption: "Enter store" },
  { src: mScan, alt: "Scanning: the scanned item and a running total.", caption: "Scan product" },
  { src: mCart, alt: "Cart with quantities, estimated tax and running total.", caption: "Cart" },
  { src: mCheckout, alt: "Checkout with a sandbox test card; Apple Pay and Google Pay marked not connected.", caption: "Checkout" },
  { src: mPass, alt: "Exit pass with a QR code and receipt details.", caption: "Exit pass" },
];

const retailer: LightboxItem[] = [
  { src: dManager, alt: "Store Manager overview: sessions, completed trips, audit flags, camera health and traffic.", caption: "Store overview" },
  { src: dRecon, alt: "Reconciliation queue: an observed removal with no matching scan, marked Needs Review.", caption: "Reconciliation" },
  { src: dTx, alt: "Transactions with a session timeline from start to payment.", caption: "Transactions & timeline" },
];

const evidence: LightboxItem = {
  src: dEvidence,
  alt: "Evidence Review: cart, zone, event time and review state; actions Mark Resolved, Send to Associate Check and Incorrect Detection.",
  caption: "Evidence review",
};

const associate: LightboxItem[] = [
  { src: dAudits, alt: "Audit dashboard: active and completed shopper checks, with a link to the reconciliation queue.", caption: "Shopper checks" },
  { src: mAssoc, alt: "Associate app: “No carts waiting for a check. New checks appear here automatically.”", caption: "Associate tasks" },
];

const ops: LightboxItem[] = [
  { src: dManager, alt: "Store overview dashboard.", caption: "Store overview" },
  { src: dRecon, alt: "Reconciliation queue.", caption: "Reconciliation" },
  { src: dEvidence, alt: "Evidence review.", caption: "Evidence review" },
  { src: dAudits, alt: "Audit dashboard of shopper checks.", caption: "Audits" },
];

const status = [
  {
    icon: PenTool,
    title: "Designed",
    items: [
      "Shopper, associate and retailer flows in Figma",
      "Evidence and review patterns for uncertain events",
      "Store operations dashboard and navigation",
    ],
  },
  {
    icon: Check,
    title: "Prototyped",
    items: [
      "Expo shopper app: cart pairing, scanning, cart, sandbox checkout, exit pass",
      "Manager views: overview, reconciliation, evidence review, transactions, audits",
      "Python service with an append-only event log — dev fixture store, sandbox payments only",
    ],
  },
  {
    icon: FlaskConical,
    title: "Tested / experimented",
    items: [
      "Vision pipeline on public research video: person tracking, shelf interactions, pick vs. put-back",
      "On that overhead camera, 240 of 299 interactions (80%) happened where it can’t see into the shelf — 67% went to human review. The cost of caution, measured.",
      "In a synthetic two-shopper test, 0 of 1,136 events went to the wrong shopper — but only about a quarter were attributed at all.",
    ],
  },
  {
    icon: HelpCircle,
    title: "Open questions",
    items: [
      "Accuracy gates are waiting on human-audited labels",
      "No real store cameras connected; real multi-camera testing pending",
      "Store map, camera health and reports are planned, not built",
      "Cost, scale and privacy in a real store — not yet answered",
    ],
  },
];

export default function RetailVisionPage() {
  const { previous, next } = neighbours("retail-vision");
  return (
    <>
      <CaseHero
        eyebrow="02 / Case study"
        title={
          <>
            Retail Vision
            <br />
            <span className="text-green-400">Intelligence</span>
          </>
        }
        subtitle="Computer-vision retail intelligence combining in-store analytics with a mobile Scan & Go experience."
        status={<StatusBadge status="Research / Prototype · Ongoing" tone="dark" />}
        meta={["Product Design", "Computer Vision", "Mobile UX", "Retail Technology"]}
        actions={
          <>
            <ButtonLink href={links.retailVisionFigma}>View Figma</ButtonLink>
            <ButtonLink href="#opportunity" variant="secondary" icon="down">
              Explore project
            </ButtonLink>
          </>
        }
        visual={
          <div className="relative pb-[10%] sm:pr-[16%]">
            <BrowserFrame src={dRecon} alt="Retail Vision reconciliation queue." sizes="(min-width: 1024px) 50vw, 92vw" priority tone="dark" />
            <PhoneFrame
              src={mScan}
              alt="Retail Vision Scan & Go on mobile."
              sizes="(min-width: 1024px) 14vw, 30vw"
              priority
              className="absolute right-0 bottom-0 w-[30%] sm:w-[24%]"
            />
          </div>
        }
        note="Research and prototype work, not a deployed store system. Screens are the prototype running locally against a simulated development store; camera events in them are labelled as simulated."
      />

      {/* 01 — Opportunity */}
      <CaseSection
        id="opportunity"
        number="01"
        label="The opportunity"
        title="Stores see a lot. Very little of it becomes useful."
        intro={
          <>
            <p>
              Physical stores contain valuable shopper and operational activity, but much of it is difficult to turn
              into meaningful digital insight.
            </p>
            <p>
              Retail Vision explores how existing store cameras, computer vision, a mobile app and human review could
              work together — without pretending the cameras are always right.
            </p>
          </>
        }
      />

      {/* 02 — Three experiences */}
      <CaseSection
        number="02"
        label="One platform, three experiences"
        tone="white"
        title="Shopper. Retailer. Associate."
        intro={<p>Three people, one shared event log underneath — so every screen agrees about what happened.</p>}
      >
        <div className="space-y-20 md:space-y-28">
          {/* Shopper */}
          <div>
            <Reveal className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <p className="text-eyebrow text-green-700">Shopper · Mobile</p>
                <h3 className="text-title mt-3">Scan & Go</h3>
              </div>
              <FlowChips label="Shopper flow" steps={["Enter store", "Scan", "Cart", "Checkout", "Exit pass"]} />
            </Reveal>
            <LightboxGroup items={shopper}>
              <ol className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-10 sm:px-10 md:gap-5 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
                {shopper.map((s, i) => (
                  <Reveal as="li" key={s.caption} delay={i * 0.06} className="w-[52vw] shrink-0 snap-start sm:w-[14rem] lg:w-auto">
                    <ZoomTrigger index={i} label={s.alt}>
                      <PhoneFrame src={s.src} alt={s.alt} sizes="(min-width: 1024px) 18vw, 52vw" />
                    </ZoomTrigger>
                    <p className="mt-4 text-sm">
                      <span className="text-eyebrow mr-2 text-muted">{String(i + 1).padStart(2, "0")}</span>
                      {s.caption}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </LightboxGroup>
          </div>

          {/* Retailer */}
          <div>
            <Reveal className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <p className="text-eyebrow text-green-700">Retailer · Desktop</p>
                <h3 className="text-title mt-3">Store operations</h3>
              </div>
              <FlowChips label="Retailer flow" steps={["Overview", "Store map", "Analytics", "Evidence", "Operations"]} />
            </Reveal>
            <LightboxGroup items={retailer}>
              <div className="mt-10 grid gap-5 md:grid-cols-12">
                <Reveal className="md:col-span-8 md:row-span-2">
                  <Figure caption="Store overview — live operations, with camera health honestly reported as not connected.">
                    <ZoomTrigger index={0} label={retailer[0].alt}>
                      <BrowserFrame src={dManager} alt={retailer[0].alt} sizes="(min-width: 768px) 62vw, 100vw" />
                    </ZoomTrigger>
                  </Figure>
                </Reveal>
                <Reveal delay={0.08} className="md:col-span-4">
                  <Figure caption="Reconciliation queue">
                    <ZoomTrigger index={1} label={retailer[1].alt}>
                      <BrowserFrame src={dRecon} alt={retailer[1].alt} sizes="(min-width: 768px) 30vw, 100vw" />
                    </ZoomTrigger>
                  </Figure>
                </Reveal>
                <Reveal delay={0.14} className="md:col-span-4">
                  <Figure caption="Transactions and session timeline">
                    <ZoomTrigger index={2} label={retailer[2].alt}>
                      <BrowserFrame src={dTx} alt={retailer[2].alt} sizes="(min-width: 768px) 30vw, 100vw" />
                    </ZoomTrigger>
                  </Figure>
                </Reveal>
              </div>
            </LightboxGroup>
          </div>

          {/* Associate */}
          <div>
            <Reveal className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <p className="text-eyebrow text-green-700">Associate · Review</p>
                <h3 className="text-title mt-3">Resolving what the system isn’t sure about</h3>
              </div>
              <FlowChips label="Associate flow" steps={["Assigned task", "Evidence", "Review", "Decision", "Resolution"]} />
            </Reveal>
            <LightboxGroup items={associate}>
              <div className="mt-10 grid grid-cols-12 items-end gap-5">
                <Reveal className="col-span-12 md:col-span-9">
                  <Figure caption="Checks are queued for the store team; the evidence behind each one is shown in section 04.">
                    <ZoomTrigger index={0} label={associate[0].alt}>
                      <BrowserFrame src={dAudits} alt={associate[0].alt} sizes="(min-width: 768px) 70vw, 100vw" />
                    </ZoomTrigger>
                  </Figure>
                </Reveal>
                <Reveal delay={0.1} className="col-span-6 col-start-4 sm:col-span-4 sm:col-start-5 md:col-span-3 md:col-start-auto">
                  <ZoomTrigger index={1} label={associate[1].alt}>
                    <PhoneFrame src={mAssoc} alt={associate[1].alt} sizes="(min-width: 768px) 22vw, 50vw" />
                  </ZoomTrigger>
                </Reveal>
              </div>
            </LightboxGroup>
          </div>
        </div>
      </CaseSection>

      {/* 03 — Intelligence layer */}
      <CaseSection
        number="03"
        label="The intelligence layer"
        tone="dark"
        title="From cameras to a decision — with a fork."
        intro={
          <p>
            Every observation carries a level of certainty. Confident, matching events are reconciled silently.
            Everything else is routed to a person, with the evidence attached.
          </p>
        }
      >
        <IntelligenceDiagram />
      </CaseSection>

      {/* 04 — Uncertainty */}
      <CaseSection
        number="04"
        label="Designing for uncertainty"
        title={
          <>
            AI should know when
            <br />
            it doesn’t know.
          </>
        }
        intro={
          <p>
            Computer vision is probabilistic. A hand in front of a shelf, a recessed lower tier, two shoppers side by
            side — the camera will be unsure, often. So the product was designed around that uncertain path first,
            not the happy one.
          </p>
        }
      >
        <div className="grid-page gap-y-12">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-7">
            <LightboxGroup items={[evidence]}>
              <ZoomTrigger index={0} label={evidence.alt}>
                <BrowserFrame src={dEvidence} alt={evidence.alt} sizes="(min-width: 1024px) 55vw, 100vw" />
              </ZoomTrigger>
            </LightboxGroup>
          </Reveal>
          <ul className="col-span-4 space-y-6 md:col-span-8 lg:col-span-4 lg:col-start-9">
            {[
              ["Cameras never charge", "They only raise questions about scans. The evidence screen says so in plain words."],
              ["Unknown beats wrong", "Ambiguous attribution becomes “unknown”. Unresolved events block checkout instead of silently charging."],
              ["A fallback ladder", "Silent retry → the shopper’s phone → a quick confirmation → an associate."],
              ["Humans decide, visibly", "Mark resolved, send to an associate check, or flag an incorrect detection. Every change lands in the event log."],
              ["Auditable by design", "The basket is rebuilt from an append-only event log, so any correction can be traced."],
            ].map(([h, t], i) => (
              <Reveal as="li" key={h} delay={i * 0.05} className="border-t border-border pt-5">
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{h}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{t}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </CaseSection>

      {/* 05 — Operational experience */}
      <CaseSection number="05" label="Operational experience" tone="mist" title="The store, at a glance.">
        <LightboxGroup items={ops}>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ops.map((o, i) => (
              <Reveal as="li" key={o.caption} delay={i * 0.05}>
                <ZoomTrigger index={i} label={o.alt}>
                  <BrowserFrame src={o.src} alt={o.alt} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw" />
                </ZoomTrigger>
                <p className="mt-3 text-sm font-medium">{o.caption}</p>
              </Reveal>
            ))}
            {["Store map", "Camera health", "System health", "Reports & integrations"].map((name, i) => (
              <Reveal
                as="li"
                key={name}
                delay={0.2 + i * 0.05}
                className="flex min-h-28 flex-col justify-between rounded-[var(--radius-frame)] border border-dashed border-ink/20 p-5"
              >
                <CircleDashed aria-hidden className="size-4 text-muted" />
                <div>
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-muted">Planned · not in the prototype yet</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </LightboxGroup>
      </CaseSection>

      {/* 06 — Status */}
      <CaseSection
        number="06"
        label="Current research status"
        tone="white"
        title="What exists — and what doesn’t, yet."
        intro={
          <p>
            Retail Vision is ongoing research and a working prototype. It is not deployed in a store, has no retail
            partner, and nothing in it is billable.
          </p>
        }
      >
        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-border ring-1 ring-border md:grid-cols-2 xl:grid-cols-4">
          {status.map(({ icon: Icon, title, items }, i) => (
            <Reveal as="li" key={title} delay={i * 0.06} className="bg-white p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <Icon aria-hidden className={`size-5 ${i === 3 ? "text-amber-600" : "text-green-700"}`} strokeWidth={1.75} />
                <h3 className="text-eyebrow text-ink">{title}</h3>
              </div>
              <ul className="mt-6 space-y-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                {items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-ink/40" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
        <Reveal as="p" className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
          Experiments use the public MERL Shopping research dataset (non-commercial research use) and synthetic
          composites; they are research observations, not product performance claims.
        </Reveal>
      </CaseSection>

      {/* 07 — Learned */}
      <CaseSection number="07" label="What I learned" tone="dark" title="Three things I’d carry into any AI product.">
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {[
            [
              "One source of truth",
              "A single event log made the shopper app, the dashboard and the associate view agree — and made every correction traceable.",
            ],
            [
              "The uncertain path is the product",
              "The happy path is easy. The evidence screen, the review queue and the “unknown” state are where trust is won or lost.",
            ],
            [
              "Measure the cost of caution",
              "Being safe has a price — more reviews, fewer automatic matches. Showing that number honestly beats hiding it.",
            ],
          ].map(([h, t], i) => (
            <Reveal as="li" key={h} delay={i * 0.08} className="border-t border-white/15 pt-6">
              <p className="text-eyebrow text-green-400">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em]">{h}</h3>
              <p className="mt-3 leading-relaxed text-white/68">{t}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-14">
          <ButtonLink href={links.retailVisionFigma}>Explore the Figma file</ButtonLink>
        </Reveal>
      </CaseSection>

      <ProjectNav previous={previous} next={next} />
    </>
  );
}
