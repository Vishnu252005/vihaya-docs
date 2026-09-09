export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://docs.vihaya.app";
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vihaya Documentation",
    "url": baseUrl,
    "description": "Documentation for Vihaya Events — create events, manage registrations and check-in, and build on the REST API.",
    "publisher": {
      "@type": "Organization",
      "name": "Vihaya",
      "url": "https://vihaya.app",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo_only.png`,
      },
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/docs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vihaya",
    "url": "https://vihaya.app",
    "logo": `${baseUrl}/images/logo_only.png`,
    "description": "Vihaya - the event ticketing platform.",
    "sameAs": [
      "https://github.com/Vishnu252005/vihaya-docs",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}










