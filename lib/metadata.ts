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
  const fullTitle = `${title} | Vihaya Documentation`;

  return {
    title: fullTitle,
    description,
    keywords: keywords || [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Vihaya Documentation",
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
      title: fullTitle,
      description,
      images: ["/images/logo_only.png"],
    },
  };
}

