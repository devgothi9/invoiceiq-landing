/**
 * Personal details and every external destination used on the site.
 *
 * A value of `null` means Dev has not supplied it yet. Components must hide the
 * matching action instead of rendering a dead link — never ship href="#".
 */
export const site = {
  name: "Dev Gothi",
  role: "Front-End Designer / Engineer",
  location: "Ottawa, Ontario, Canada",
  locationShort: "Ottawa, Canada",
  email: "devgothi9@gmail.com",
  education: {
    program: "Computer Engineering Technology – Computing Science",
    school: "Algonquin College",
    graduation: "2027",
  },
  description:
    "Product design and front-end engineering portfolio of Dev Gothi, based in Ottawa, Canada.",
} as const;

export const links = {
  email: `mailto:${site.email}`,
  github: "https://github.com/devgothi9",
  /** Not supplied yet — hidden everywhere until set. */
  linkedin: null as string | null,
  /** Not supplied yet — drop the PDF in /public and set e.g. "/dev-gothi-resume.pdf". */
  resume: null as string | null,
  photography: "https://devphotography.vercel.app/",
  safeSpace: "https://www.thesafespace.dev/",
  safeSpaceFigma:
    "https://www.figma.com/design/JIlLHQcRGeuOdf2i7AAPPB/SafeSpace-%E2%80%94-Product-Design?node-id=2-93",
  safeSpacePrototype:
    "https://www.figma.com/proto/JIlLHQcRGeuOdf2i7AAPPB/SafeSpace-%E2%80%94-Product-Design?node-id=2-93",
  retailVisionFigma: "https://www.figma.com/design/eJhV8ln7K7fIuAo1E1W9zR/Untitled?node-id=0-1",
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Photography", href: "/photography" },
  { label: "Contact", href: "/contact" },
] as const;

export function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
