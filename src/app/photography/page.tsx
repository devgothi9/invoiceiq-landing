import type { Metadata } from "next";

import { pageMetadata } from "@/content/seo";
import Image from "next/image";

import boardwalk from "@/assets/photos/boardwalk.webp";
import clockTower from "@/assets/photos/clock-tower.webp";
import hawk from "@/assets/photos/hawk.webp";
import moon from "@/assets/photos/moon.webp";
import reeds from "@/assets/photos/reeds-sunset.webp";
import spray from "@/assets/photos/spray.webp";
import sunset from "@/assets/photos/sunset-water.webp";
import tallShip from "@/assets/photos/tall-ship.webp";
import twinSpires from "@/assets/photos/twin-spires.webp";
import { ButtonLink } from "@/components/button";
import { LightboxGroup, ZoomTrigger, type LightboxItem } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";
import { links } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Photography",
  description:
    "A short, curated selection of Dev Gothi’s photography — landscapes, wildlife, architecture and night — exploring composition and light.",
  path: "/photography",
});

const photos = {
  sunset: { src: sunset, alt: "The sun setting into calm water, two small boats silhouetted on the horizon.", caption: "Landscape — last light over open water" },
  tower: { src: clockTower, alt: "A stone clock tower with a green copper roof against a soft evening sky.", caption: "Architecture — clock tower, evening" },
  hawk: { src: hawk, alt: "Close portrait of a hawk turning its head, against a dark background.", caption: "Wildlife — hawk" },
  spray: { src: spray, alt: "A jet ski carving across a lake, throwing a long arc of white spray.", caption: "Water — motion and spray" },
  reeds: { src: reeds, alt: "Tall reeds silhouetted against a low orange sun.", caption: "Nature — reeds at sunset" },
  boardwalk: { src: boardwalk, alt: "A wooden boardwalk and steps leading into an autumn forest.", caption: "Nature — autumn boardwalk" },
  ship: { src: tallShip, alt: "A three-masted tall ship on the water under a pale sky.", caption: "Water — tall ship" },
  moon: { src: moon, alt: "A warm full moon partly hidden behind dark leaves.", caption: "Night — moon through leaves" },
  spires: { src: twinSpires, alt: "Twin church spires rising above spring trees.", caption: "Architecture — twin spires" },
} satisfies Record<string, LightboxItem>;

const order = ["sunset", "tower", "hawk", "spray", "reeds", "boardwalk", "ship", "moon", "spires"] as const;
const items: LightboxItem[] = order.map((k) => photos[k]);
const idx = (k: (typeof order)[number]) => order.indexOf(k);

function Photo({
  k,
  aspect,
  sizes,
  position = "50% 50%",
  priority,
}: {
  k: (typeof order)[number];
  aspect: string;
  sizes: string;
  position?: string;
  priority?: boolean;
}) {
  const p = photos[k];
  return (
    <figure>
      <ZoomTrigger index={idx(k)} label={p.alt}>
        <span className={`relative block overflow-hidden rounded-[1.25rem] bg-forest-850 ${aspect}`}>
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            style={{ objectPosition: position }}
            className="object-cover transition-transform duration-700 ease-out-expo group-hover/zoom:scale-[1.02]"
          />
        </span>
      </ZoomTrigger>
      <figcaption className="mt-3 text-sm text-white/55">{p.caption}</figcaption>
    </figure>
  );
}

export default function PhotographyPage() {
  return (
    <div className="grain bg-forest-950 text-white">
      <section aria-labelledby="photo-title" className="container-page pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid-page items-end gap-y-10">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-7">
            <p className="text-eyebrow text-green-400">Photography</p>
            <h1 id="photo-title" className="text-display mt-6">
              Moments
              <br />
              beyond
              <br />
              <span className="text-green-400">the screen.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="col-span-4 md:col-span-6 lg:col-span-4 lg:col-start-9">
            <p className="text-lead text-white/70">
              Exploring places, perspectives, light, and stories through photography — a short selection from a
              larger gallery.
            </p>
            <div className="mt-8">
              <ButtonLink href={links.photography}>Visit full gallery</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <LightboxGroup items={items}>
        <section aria-label="Selected photographs" className="container-page space-y-10 pb-24 md:space-y-16 md:pb-32">
          <Reveal>
            <Photo k="sunset" aspect="aspect-[4/3] md:aspect-[21/9]" sizes="(min-width: 1440px) 1312px, 100vw" position="50% 60%" priority />
          </Reveal>

          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
            <Reveal className="md:col-span-5">
              <Photo k="tower" aspect="aspect-[2/3]" sizes="(min-width: 768px) 40vw, 100vw" />
            </Reveal>
            <div className="space-y-10 md:col-span-6 md:col-start-7 md:space-y-16 md:pt-24">
              <Reveal>
                <Photo k="hawk" aspect="aspect-[3/2]" sizes="(min-width: 768px) 48vw, 100vw" position="62% 40%" />
              </Reveal>
              <Reveal>
                <Photo k="spray" aspect="aspect-[3/2]" sizes="(min-width: 768px) 48vw, 100vw" />
              </Reveal>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
            <div className="space-y-10 md:col-span-7 md:space-y-16 md:self-end">
              <Reveal>
                <Photo k="reeds" aspect="aspect-[3/2]" sizes="(min-width: 768px) 56vw, 100vw" />
              </Reveal>
            </div>
            <Reveal className="md:col-span-4 md:col-start-9">
              <Photo k="boardwalk" aspect="aspect-[2/3]" sizes="(min-width: 768px) 32vw, 100vw" />
            </Reveal>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            <Reveal>
              <Photo k="ship" aspect="aspect-[4/5]" sizes="(min-width: 768px) 32vw, 100vw" position="55% 50%" />
            </Reveal>
            <Reveal delay={0.06}>
              <Photo k="moon" aspect="aspect-[4/5]" sizes="(min-width: 768px) 32vw, 100vw" position="35% 50%" />
            </Reveal>
            <Reveal delay={0.12}>
              <Photo k="spires" aspect="aspect-[4/5]" sizes="(min-width: 768px) 32vw, 100vw" position="50% 35%" />
            </Reveal>
          </div>
        </section>
      </LightboxGroup>

      <section aria-labelledby="gallery-cta" className="border-t border-white/10">
        <div className="container-page flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between md:py-24">
          <Reveal>
            <h2 id="gallery-cta" className="text-section">
              There’s more
              <br />
              in the full gallery.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ButtonLink href={links.photography}>Visit full photography site</ButtonLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
