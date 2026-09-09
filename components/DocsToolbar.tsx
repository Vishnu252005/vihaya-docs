"use client";

/**
 * The strip above every doc page: where you are, and how to take the page with you.
 *
 * It is deliberately sticky and quiet — the reason it exists is the "Copy for AI"
 * control, which has to be findable from any page without competing with the
 * page's own heading.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { pageByHref } from "@/lib/docs-registry";
import { CopyForAI } from "@/components/CopyForAI";

export default function DocsToolbar({ llmsFullUrl }: { llmsFullUrl: string }) {
  const pathname = usePathname();
  const page = pageByHref(pathname);

  return (
    <div
      className="sticky top-16 z-30 -mx-4 mb-6 flex items-center justify-between gap-3 border-b bg-background/85 px-4 py-2.5 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      data-no-copy
    >
      <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1.5 text-[12.5px] text-muted-foreground">
        <Link href="/docs" className="shrink-0 transition-colors hover:text-foreground">
          Docs
        </Link>
        {page && (
          <>
            <ChevronRight aria-hidden className="h-3 w-3 shrink-0 opacity-50" />
            <span className="hidden shrink-0 sm:inline">{page.group}</span>
            <ChevronRight aria-hidden className="hidden h-3 w-3 shrink-0 opacity-50 sm:inline" />
            <span className="truncate font-medium text-foreground">{page.title}</span>
          </>
        )}
      </nav>

      <CopyForAI llmsFullUrl={llmsFullUrl} />
    </div>
  );
}
