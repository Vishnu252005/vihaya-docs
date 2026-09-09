"use client";

/**
 * End-of-page furniture: feedback, edit links, and prev/next.
 *
 * ⚠️ PREV/NEXT COMES FROM `lib/docs-registry.ts`. This file used to keep its own
 * flattened page list, which had drifted: it was missing four pages entirely and
 * labelled `/event-management/event-settings` as "Payment & Pricing", so the
 * footer walked readers to a page other than the one it named.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThumbsUp, ThumbsDown, Pencil, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { neighbours } from "@/lib/docs-registry";

const REPO_ISSUES = "https://github.com/Vishnu252005/vihaya-docs/issues/new";

export default function DocsFooter() {
  const pathname = usePathname();
  const [helpful, setHelpful] = useState<"yes" | "no" | null>(null);
  const { prev, next } = neighbours(pathname);

  return (
    <div className="mt-16 space-y-8" data-no-copy>
      <div className="flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">
            {helpful === null ? "Was this page helpful?" : helpful === "yes" ? "Thanks — glad it helped." : "Thanks — we'll take a look."}
          </span>
          {helpful === null && (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setHelpful("yes")} className="h-8">
                <ThumbsUp className="mr-1 h-4 w-4" />
                Yes
              </Button>
              <Button variant="outline" size="sm" onClick={() => setHelpful("no")} className="h-8">
                <ThumbsDown className="mr-1 h-4 w-4" />
                No
              </Button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="h-8 text-muted-foreground hover:text-foreground">
            <Link href={`${REPO_ISSUES}?title=Documentation%20Edit%20Request&body=Page:%20${pathname}`} target="_blank" rel="noopener noreferrer">
              <Pencil className="mr-1.5 h-4 w-4" />
              Suggest edits
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild className="h-8 text-muted-foreground hover:text-foreground">
            <Link href={`${REPO_ISSUES}?title=Documentation%20Issue&body=Page:%20${pathname}`} target="_blank" rel="noopener noreferrer">
              <AlertTriangle className="mr-1.5 h-4 w-4" />
              Raise issue
            </Link>
          </Button>
        </div>
      </div>

      {(prev || next) && (
        <div className="grid gap-3 border-t pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              href={prev.href}
              prefetch
              className="group flex flex-col rounded-xl border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
            >
              <span className="mb-1 flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                <ChevronLeft className="h-3 w-3" /> Previous
              </span>
              <span className="text-sm font-semibold group-hover:text-primary">{prev.title}</span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
          {next && (
            <Link
              href={next.href}
              prefetch
              className="group flex flex-col rounded-xl border bg-card p-4 text-right transition-colors hover:border-primary/40 hover:bg-primary/[0.03] sm:col-start-2"
            >
              <span className="mb-1 flex items-center justify-end gap-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Next <ChevronRight className="h-3 w-3" />
              </span>
              <span className="text-sm font-semibold group-hover:text-primary">{next.title}</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
