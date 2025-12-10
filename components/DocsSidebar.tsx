"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

type NavigationItem = 
  | {
      name: string;
      children: Array<{ name: string; href: string }>;
    }
  | {
      name: string;
      href: string;
    };

const navigation: NavigationItem[] = [
  {
    name: "Get Started",
    children: [
      { name: "Introduction to Vihaya", href: "/docs" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    name: "Event Management",
    children: [
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
    ],
  },
  {
    name: "Engineering Notes",
    children: [
      { name: "Notes Overview", href: "/docs/notes/overview" },
      { name: "Creating Notes", href: "/docs/notes/creating-notes" },
      { name: "Organizing Notes", href: "/docs/notes/organizing" },
      { name: "Markdown Support", href: "/docs/notes/markdown" },
      { name: "Code Blocks", href: "/docs/notes/code-blocks" },
      { name: "Search & Filter", href: "/docs/notes/search" },
      { name: "Sharing Notes", href: "/docs/notes/sharing" },
    ],
  },
  {
    name: "AI Assistant",
    children: [
      { name: "AI Overview", href: "/docs/ai/overview" },
      { name: "Getting Started with AI", href: "/docs/ai/getting-started" },
      { name: "Study Assistance", href: "/docs/ai/study-assistance" },
      { name: "Note Enhancement", href: "/docs/ai/note-enhancement" },
      { name: "Question & Answer", href: "/docs/ai/qa" },
      { name: "AI Commands", href: "/docs/ai/commands" },
      { name: "Best Practices", href: "/docs/ai/best-practices" },
    ],
  },
];

function hasChildren(item: NavigationItem): item is { name: string; children: Array<{ name: string; href: string }> } {
  return 'children' in item;
}

export default function DocsSidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>(() => {
    const sections: string[] = [];
    navigation.forEach((section) => {
      if (hasChildren(section) && section.children.some((child) => child.href === pathname)) {
        sections.push(section.name);
      }
    });
    return sections.length > 0 ? sections : ["Get Started"];
  });

  const toggleSection = (sectionName: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((s) => s !== sectionName)
        : [...prev, sectionName]
    );
  };

  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] border-r bg-background/95 backdrop-blur-sm z-40">
      <ScrollArea className="h-full">
        <div className="p-4">
          {/* Guides Heading */}
          <div className="px-3 py-2 mb-2">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Guides
            </h2>
          </div>
          
          <nav className="space-y-0.5">
            {navigation.map((section) => (
              <div key={section.name}>
                {hasChildren(section) ? (
                  <>
                    <button
                      onClick={() => toggleSection(section.name)}
                      className={cn(
                        "w-full text-left px-3 py-2 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors flex items-center justify-between rounded-md hover:bg-muted/50 group",
                        openSections.includes(section.name) && "text-foreground"
                      )}
                    >
                      <span>{section.name}</span>
                      <ChevronRight
                        className={cn(
                          "h-3.5 w-3.5 transition-transform text-muted-foreground group-hover:text-foreground flex-shrink-0",
                          openSections.includes(section.name) && "rotate-90"
                        )}
                      />
                    </button>
                    {openSections.includes(section.name) && (
                      <div className="ml-1 mt-0.5 space-y-0.5 pl-2 border-l border-border/50">
                        {section.children.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "block px-3 py-1.5 text-sm rounded-md transition-colors relative",
                              pathname === item.href
                                ? "text-primary font-medium bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={section.href}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === section.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground/90 hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {section.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  );
}
