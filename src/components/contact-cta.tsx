import { links } from "@/content/site";
import { ButtonLink } from "./button";
import { Reveal } from "./reveal";

/** Closing call to action; sits directly above the dark footer. */
export function ContactCTA() {
  return (
    <section aria-labelledby="cta-title" className="grain bg-forest-950 text-white">
      <div className="container-page pt-24 pb-20 md:pt-32 md:pb-28">
        <Reveal>
          <p className="text-eyebrow inline-flex items-center gap-2.5 text-white/60">
            <span aria-hidden className="size-1.5 rounded-full bg-green-400" />
            Let’s connect
          </p>
          <h2 id="cta-title" className="text-display mt-7 max-w-4xl">
            Have something
            <br />
            <span className="text-green-400">interesting to build?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="text-lead max-w-md text-white/70">
            I’m open to opportunities, collaborations, and interesting product challenges.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={links.email}>Email me</ButtonLink>
            {links.linkedin ? (
              <ButtonLink href={links.linkedin} variant="secondary">
                LinkedIn
              </ButtonLink>
            ) : null}
            <ButtonLink href={links.github} variant="secondary">
              GitHub
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
