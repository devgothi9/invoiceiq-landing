import type { StaticImageData } from "next/image";

import ssDesktopStory from "@/assets/safespace/d-mystory.webp";
import ssMobileLifeMap from "@/assets/safespace/m-lifemap.webp";
import rvDesktopEvidence from "@/assets/retail/d-evidence.webp";
import rvMobileScan from "@/assets/retail/m-session-scanned.webp";
import invoiceResults from "@/assets/invoice/results.webp";
import { links } from "./site";

export type ProjectStatus = "Live product" | "Research / Prototype" | "Working prototype";

export type ExternalLink = { label: string; href: string };

export type Shot = { src: StaticImageData; alt: string };

export type Project = {
  slug: "safespace" | "retail-vision" | "invoice-validator";
  index: string;
  title: string;
  href: string;
  summary: string;
  status: ProjectStatus;
  disciplines: string[];
  external: ExternalLink[];
  cover: { desktop?: Shot; mobile?: Shot };
};

export const projects: Project[] = [
  {
    slug: "safespace",
    index: "01",
    title: "SafeSpace",
    href: "/work/safespace",
    summary:
      "A privacy-first social and self-reflection platform for anonymous expression, journaling, meaningful conversations, and personal insight.",
    status: "Live product",
    disciplines: ["Product Design", "UI/UX", "Front-End", "AI Product"],
    external: [{ label: "Visit SafeSpace", href: links.safeSpace }],
    cover: {
      desktop: {
        src: ssDesktopStory,
        alt: "SafeSpace My Story screen on desktop: Gratitude Garden and Guided Session cards beside the app sidebar.",
      },
      mobile: {
        src: ssMobileLifeMap,
        alt: "SafeSpace Life Map on mobile, with Why? and Ask SafeSpace entry points.",
      },
    },
  },
  {
    slug: "retail-vision",
    index: "02",
    title: "Retail Vision Intelligence",
    href: "/work/retail-vision",
    summary:
      "Computer-vision retail intelligence combining in-store analytics with a mobile Scan & Go experience.",
    status: "Research / Prototype",
    disciplines: ["Product Design", "Computer Vision", "Mobile UX", "Retail Technology"],
    external: [{ label: "Explore Figma", href: links.retailVisionFigma }],
    cover: {
      desktop: {
        src: rvDesktopEvidence,
        alt: "Retail Vision Evidence Review screen: an unmatched shelf removal marked Needs Review, with Mark Resolved, Send to Associate Check and Incorrect Detection actions.",
      },
      mobile: {
        src: rvMobileScan,
        alt: "Retail Vision Scan & Go screen on mobile showing a scanned item and a running total.",
      },
    },
  },
  {
    slug: "invoice-validator",
    index: "03",
    title: "Invoice Validator",
    href: "/work/invoice-validator",
    summary:
      "An automated invoice validation and review workflow for identifying missing information, calculation discrepancies, duplicate records, invalid dates, and other issues.",
    status: "Working prototype",
    disciplines: ["Product UI", "Automation", "Engineering"],
    external: [],
    cover: {
      desktop: {
        src: invoiceResults,
        alt: "Invoice Validator results: decision HOLD, risk level MEDIUM, and a list of errors with expected and actual values.",
      },
    },
  },
];

export function getProject(slug: Project["slug"]) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}

/** Case-study order for Previous / Next navigation. */
export function neighbours(slug: Project["slug"]) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    previous: i > 0 ? projects[i - 1] : null,
    next: i < projects.length - 1 ? projects[i + 1] : null,
  };
}
