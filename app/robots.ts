import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://egor27riabokon-cmd.github.io/form-studio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
