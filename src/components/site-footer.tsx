import { ArrowUp } from "lucide-react";

import { links, site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const link = "inline-flex min-h-11 items-center gap-2 text-white/65 transition-colors hover:text-white";
  return (
    <footer className="bg-forest-950 text-white">
      <div className="container-page">
        <div className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-12">
          <div>
            <p className="font-semibold tracking-[0.14em]">DEV GOTHI</p>
            <p className="mt-1 text-sm text-white/55">{site.locationShort}</p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
            <li>
              <a href={links.email} className={link}>
                {site.email}
              </a>
            </li>
            {links.linkedin ? (
              <li>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
                  <LinkedInIcon className="size-4" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ) : null}
            <li>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className={link}>
                <GitHubIcon className="size-4" /> GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
          <a href="#top" className={`${link} group text-sm`}>
            Back to top
            <ArrowUp aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
        <p className="pb-10 text-xs text-white/55">
          © {year} Dev Gothi. Designed &amp; built by Dev Gothi.
        </p>
      </div>
    </footer>
  );
}
