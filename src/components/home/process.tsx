import { ProcessFlow } from "../process-flow";
import { Reveal } from "../reveal";

export function Process() {
  return (
    <section aria-labelledby="process-title" className="grain section-y bg-forest-900 text-white">
      <div className="container-page">
        <Reveal className="grid-page items-end gap-y-6">
          <div className="col-span-4 md:col-span-5 lg:col-span-7">
            <p className="text-eyebrow text-white/55">02 / Process</p>
            <h2 id="process-title" className="text-section mt-5">
              From idea
              <br />
              to experience.
            </h2>
          </div>
          <p className="text-lead col-span-4 text-white/65 md:col-span-3 lg:col-span-4 lg:col-start-9">
            One person across the whole loop — so decisions made in design survive contact with code.
          </p>
        </Reveal>
        <div className="mt-14 md:mt-20">
          <ProcessFlow />
        </div>
      </div>
    </section>
  );
}
