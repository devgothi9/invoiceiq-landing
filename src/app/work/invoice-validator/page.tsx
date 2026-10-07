import type { Metadata } from "next";

import { pageMetadata } from "@/content/seo";

import app from "@/assets/invoice/app.webp";
import report from "@/assets/invoice/report.webp";
import results from "@/assets/invoice/results.webp";
import { ButtonLink } from "@/components/button";
import { CaseHero, CaseSection, Figure, FlowChips, ProjectNav } from "@/components/case-study";
import { BrowserFrame } from "@/components/device-frame";
import { LightboxGroup, ZoomTrigger, type LightboxItem } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";
import { StatusBadge } from "@/components/tags";
import { neighbours } from "@/content/projects";

export const metadata: Metadata = pageMetadata({
  title: "Invoice Validator",
  description:
    "Project: Invoice Validator, an automated invoice validation and review workflow that flags missing fields, duplicates and price or quantity mismatches against purchase orders and receipts.",
  path: "/work/invoice-validator",
});

const shots: LightboxItem[] = [
  { src: app, alt: "Smart Invoice Validator: upload an invoice (required) plus an optional purchase order and goods-received note, then Process.", caption: "Upload" },
  {
    src: results,
    alt: "Results: decision HOLD, risk level MEDIUM, validation score 0, maximum overpayment risk $150.00, followed by errors and warnings with expected and actual values.",
    caption: "Decision and issues",
  },
  {
    src: report,
    alt: "Invoice Validation Report PDF: decision, missing required fields, invoice-level warnings and a 3-way matching table.",
    caption: "Downloadable report",
  },
];

export default function InvoiceValidatorPage() {
  const { previous, next } = neighbours("invoice-validator");
  return (
    <>
      <CaseHero
        eyebrow="03 / Project"
        title="Invoice Validator"
        subtitle="An automated invoice validation and review workflow for identifying missing information, calculation discrepancies, duplicate records, invalid dates, and other issues."
        status={<StatusBadge status="Working prototype" tone="dark" />}
        meta={["Product UI", "Automation", "Engineering"]}
        actions={
          <ButtonLink href="#demo" icon="down">
            Watch the demo
          </ButtonLink>
        }
        visual={<BrowserFrame src={results} alt={shots[1].alt} sizes="(min-width: 1024px) 50vw, 92vw" priority tone="dark" />}
      />

      <CaseSection
        number="01"
        label="The problem"
        title="Paying an invoice shouldn’t be a leap of faith."
        intro={
          <p>
            Invoices arrive with missing fields, prices that differ from the purchase order, and quantities that
            differ from what was actually received. Checked by hand, those slip through — and even when someone
            catches one, the reason rarely travels with the decision.
          </p>
        }
      >
        <Reveal>
          <FlowChips label="Validation workflow" steps={["Upload", "Parse", "Validate", "Identify issues", "Explain", "Review"]} />
        </Reveal>
      </CaseSection>

      <CaseSection id="demo" number="02" label="The interface" tone="white" title="One decision, every reason attached.">
        <Reveal>
          <Figure caption="The real demo recording: upload, process, review the findings, download the report. No sound.">
            <video
              className="aspect-[1280/663] w-full rounded-[var(--radius-frame)] bg-mist ring-1 ring-border"
              controls
              muted
              playsInline
              preload="none"
              poster="/media/invoice-validator-demo-poster.jpg"
            >
              <source src="/media/invoice-validator-demo.mp4" type="video/mp4" />
              Your browser can’t play this video. The screenshots below show the same flow.
            </video>
          </Figure>
        </Reveal>
        <LightboxGroup items={shots}>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {shots.map((s, i) => (
              <Reveal as="li" key={s.caption} delay={i * 0.06}>
                <ZoomTrigger index={i} label={s.alt}>
                  <span className="block aspect-[4/3] overflow-hidden rounded-[var(--radius-frame)] bg-mist ring-1 ring-border">
                    <BrowserFrame src={s.src} alt={s.alt} sizes="(min-width: 768px) 32vw, 100vw" className="shadow-none!" />
                  </span>
                </ZoomTrigger>
                <p className="mt-3 text-sm">
                  <span className="text-eyebrow mr-2 text-muted">{String(i + 1).padStart(2, "0")}</span>
                  {s.caption}
                </p>
              </Reveal>
            ))}
          </ul>
        </LightboxGroup>
      </CaseSection>

      <CaseSection number="03" label="What I built" title="From PDF to a defensible decision.">
        <div className="grid-page gap-y-10">
          <Reveal className="col-span-4 md:col-span-4 lg:col-span-5 lg:col-start-4">
            <ul className="space-y-0">
              {[
                "Upload an invoice, with an optional purchase order (PO) and goods-received note (GRN)",
                "Extraction of the invoice into structured fields",
                "Checks for required fields and duplicate invoice numbers",
                "3-way matching: invoice unit price against the PO, quantity against the GRN",
                "A single decision — HOLD, REVIEW or PASS — with risk level, score and maximum overpayment risk",
                "A downloadable PDF validation report",
              ].map((t) => (
                <li key={t} className="flex gap-3 border-b border-border py-4 leading-relaxed">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-green-600" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="col-span-4 md:col-span-4 lg:col-span-3 lg:col-start-10">
            <p className="text-eyebrow text-muted">Also in the app</p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Invoice history, an analytics view and an HS code library — the product’s navigation is visible in the
              demo.
            </p>
          </Reveal>
        </div>
      </CaseSection>

      <section aria-labelledby="iv-learned" className="grain section-y bg-forest-900 text-white">
        <div className="container-page grid-page gap-y-6">
          <p className="text-eyebrow col-span-4 text-white/50 md:col-span-8 lg:col-span-3 lg:pt-3">04 / Key learning</p>
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-9">
            <h2 id="iv-learned" className="text-section max-w-4xl">
              A finding is only useful if it explains itself.
            </h2>
            <p className="text-lead mt-6 max-w-[40rem] text-white/70">
              Every issue shows what was expected and what was found. Pairing that with one clear decision and a dollar
              figure for the risk turns a list of errors into something a reviewer can act on — and defend later.
            </p>
          </Reveal>
        </div>
      </section>

      <ProjectNav previous={previous} next={next} />
    </>
  );
}
