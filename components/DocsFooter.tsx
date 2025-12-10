"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThumbsUp, ThumbsDown, Pencil, AlertTriangle, ChevronLeft, ChevronRight, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Flatten navigation structure to get all pages
const navigation: Array<{ name: string; href: string }> = [
  { name: "Introduction to Vihaya", href: "/docs" },
  { name: "Installation", href: "/docs/installation" },
  { name: "Quick Start", href: "/docs/quick-start" },
  { name: "Event Overview", href: "/docs/event-overview" },
  { name: "Creating Events", href: "/docs/event-management/creating-events" },
  { name: "Payment & Pricing", href: "/docs/event-management/event-settings" },
  { name: "Registration Management", href: "/docs/event-management/guests-management" },
  { name: "Registration Form Fields", href: "/docs/event-management/form-builder" },
  { name: "QR Scanning and Check-In", href: "/docs/event-management/qr-scanning" },
  { name: "In-Event Features", href: "/docs/event-management/in-event" },
  { name: "Event Analytics", href: "/docs/event-management/event-analytics" },
  { name: "Post Event Management", href: "/docs/event-management/post-event" },
  { name: "Child Events", href: "/docs/event-management/child-events" },
  { name: "Notes Overview", href: "/docs/notes/overview" },
  { name: "Creating Notes", href: "/docs/notes/creating-notes" },
  { name: "Organizing Notes", href: "/docs/notes/organizing" },
  { name: "Markdown Support", href: "/docs/notes/markdown" },
  { name: "Code Blocks", href: "/docs/notes/code-blocks" },
  { name: "Search & Filter", href: "/docs/notes/search" },
  { name: "Sharing Notes", href: "/docs/notes/sharing" },
  { name: "AI Overview", href: "/docs/ai/overview" },
  { name: "Getting Started with AI", href: "/docs/ai/getting-started" },
  { name: "Study Assistance", href: "/docs/ai/study-assistance" },
  { name: "Note Enhancement", href: "/docs/ai/note-enhancement" },
  { name: "Question & Answer", href: "/docs/ai/qa" },
  { name: "AI Commands", href: "/docs/ai/commands" },
  { name: "Best Practices", href: "/docs/ai/best-practices" },
];

export default function DocsFooter() {
  const pathname = usePathname();
  const [helpful, setHelpful] = useState<"yes" | "no" | null>(null);

  // Find current page index
  const currentIndex = navigation.findIndex((item) => item.href === pathname);
  const prevPage = currentIndex > 0 ? navigation[currentIndex - 1] : null;
  const nextPage = currentIndex < navigation.length - 1 ? navigation[currentIndex + 1] : null;

  const handleHelpful = (value: "yes" | "no") => {
    setHelpful(value);
    // You can add analytics tracking here
  };

  return (
    <div className="mt-16 space-y-8">
      {/* Was this page helpful? */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Was this page helpful?</span>
          <div className="flex items-center gap-2">
            <Button
              variant={helpful === "yes" ? "default" : "outline"}
              size="sm"
              onClick={() => handleHelpful("yes")}
              className="h-8"
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              Yes
            </Button>
            <Button
              variant={helpful === "no" ? "default" : "outline"}
              size="sm"
              onClick={() => handleHelpful("no")}
              className="h-8"
            >
              <ThumbsDown className="h-4 w-4 mr-1" />
              No
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="h-8 text-muted-foreground hover:text-foreground"
          >
            <Link href={`https://github.com/Vishnu252005/Vihaya-App/issues/new?title=Documentation%20Edit%20Request&body=Page:%20${pathname}`} target="_blank" rel="noopener noreferrer">
              <Pencil className="h-4 w-4 mr-1.5" />
              Suggest edits
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="h-8 text-muted-foreground hover:text-foreground"
          >
            <Link href={`https://github.com/Vishnu252005/Vihaya-App/issues/new?title=Documentation%20Issue&body=Page:%20${pathname}`} target="_blank" rel="noopener noreferrer">
              <AlertTriangle className="h-4 w-4 mr-1.5" />
              Raise issue
            </Link>
          </Button>
        </div>
      </div>

      {/* Previous/Next Navigation */}
      {(prevPage || nextPage) && (
        <div className="flex items-center justify-between gap-4 pt-8 border-t">
          {prevPage ? (
            <Link
              href={prevPage.href}
              className="flex items-center gap-2 group text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Previous</span>
                <span className="text-sm font-medium group-hover:text-primary">{prevPage.name}</span>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          {nextPage && (
            <Link
              href={nextPage.href}
              className="flex items-center gap-2 group text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
              <div className="flex flex-col items-end">
                <span className="text-xs text-muted-foreground">Next</span>
                <span className="text-sm font-medium group-hover:text-primary">{nextPage.name}</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t pb-8">
        <div className="flex items-center gap-4">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/Vishnu252005/Vihaya-App"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          Powered by <span className="font-semibold text-foreground">Vihaya</span>
        </p>
      </div>
    </div>
  );
}
