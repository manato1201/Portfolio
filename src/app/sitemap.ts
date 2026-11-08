import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getWorks } from "@/lib/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const fixed = ["", "/works", "/roadmap", "/about"].map((p) => ({
    url: `${base}${p}`,
  }));
  return [
    ...fixed,
    ...getWorks().map((w) => ({ url: `${base}/works/${w.slug}` })),
  ];
}
