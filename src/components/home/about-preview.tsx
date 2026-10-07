import Image from "next/image";

import portrait from "@/assets/portrait/dev-autumn.webp";
import { site } from "@/content/site";
import { ButtonLink } from "../button";
import { Reveal } from "../reveal";

export function AboutPreview() {
  return (
    <section aria-labelledby="about-title" className="on-light section-y bg-paper">
      <div className="container-page grid-page items-center gap-y-12">
        <Reveal className="col-span-4 md:col-span-3 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-mist">
            <Image
              src={portrait}
              alt="Dev Gothi standing in an autumn forest, smiling."
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 38vw, (min-width: 768px) 34vw, 92vw"
              className="object-cover object-[50%_35%]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-7">
          <p className="text-eyebrow text-muted">03 / About</p>
          <h2 id="about-title" className="text-section mt-5">
            Designer mindset.
            <br />
            <span className="text-green-700">Engineer execution.</span>
          </h2>
          <p className="text-lead mt-7 max-w-[34rem] text-ink-soft">
            I’m Dev, a Computer Engineering Technology – Computing Science student in Ottawa working across product
            design, front-end engineering, and product experimentation. I enjoy taking complicated ideas and turning
            them into interfaces people can understand and use.
          </p>
          <dl className="mt-9 grid max-w-[34rem] grid-cols-2 gap-6 border-t border-border pt-7 text-sm">
            <div>
              <dt className="text-eyebrow text-muted">Based in</dt>
              <dd className="mt-2 text-ink">{site.locationShort}</dd>
            </div>
            <div>
              <dt className="text-eyebrow text-muted">Studying</dt>
              <dd className="mt-2 text-ink">
                {site.education.school}, {site.education.graduation}
              </dd>
            </div>
          </dl>
          <div className="mt-9">
            <ButtonLink href="/about" variant="secondary" tone="light" icon="right">
              More about me
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
