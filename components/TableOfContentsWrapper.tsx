"use client";

import dynamic from "next/dynamic";

// Lazy load TableOfContents for better initial load performance
const TableOfContents = dynamic(() => import("@/components/TableOfContents"), {
  ssr: false,
  loading: () => null,
});

export default function TableOfContentsWrapper() {
  return <TableOfContents />;
}

