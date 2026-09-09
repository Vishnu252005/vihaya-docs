import { Metadata } from "next";

export function generateMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://docs.vihaya.app";
  const url = `${baseUrl}${path}`;
  // The root layout template already appends the site name — appending it
  // here too rendered it twice in the browser tab and in every SERP.
  const fullTitle = title;

  return {
    title: fullTitle,
    description,
    keywords: keywords || [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Vihaya Events Docs`,
      description,
      url,
      siteName: "Vihaya Events Documentation",
      images: [
        {
          url: "/images/logo_only.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Vihaya Events Docs`,
      description,
      images: ["/images/logo_only.png"],
    },
  };
}










