import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#46264f",
    theme_color: "#6c2f93",
    icons: [
      {
        src: "/logo.png",
        sizes: "400x400",
        type: "image/png",
      },
    ],
  };
}
