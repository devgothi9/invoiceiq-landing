import type { Metadata } from "next";

const image = { url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Dev Gothi — Front-End Designer & Engineer" };

/** Per-route metadata that keeps the shared social image (child `openGraph` would otherwise replace it). */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const full = `${title} — Dev Gothi`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: "Dev Gothi", locale: "en_CA", title: full, description, url: path, images: [image] },
    twitter: { card: "summary_large_image", title: full, description, images: [image.url] },
  };
}
