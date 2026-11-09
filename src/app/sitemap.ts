import type { MetadataRoute } from "next";
import { personalInfo, projects } from "@/data/portfolio";

/** Sitemap: home + every project detail page, on the deployed domain. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = personalInfo.siteUrl;
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
