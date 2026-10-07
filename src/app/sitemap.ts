import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site";

const routes = ["", "/work/safespace", "/work/retail-vision", "/work/invoice-validator", "/about", "/photography", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/work") ? 0.8 : 0.6,
  }));
}
