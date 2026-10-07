import { ButtonLink } from "@/components/button";

export default function NotFound() {
  return (
    <section className="grain bg-forest-950 text-white">
      <div className="container-page flex min-h-[80svh] flex-col justify-center pt-28 pb-20">
        <p className="text-eyebrow text-green-400">404</p>
        <h1 className="text-section mt-5 max-w-3xl">This page doesn’t exist.</h1>
        <p className="text-lead mt-6 max-w-xl text-white/70">The link may be old, or the page has moved.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/" icon="left">
            Back home
          </ButtonLink>
          <ButtonLink href="/#work" variant="secondary" icon="right">
            Selected work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
