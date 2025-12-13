"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronRight, FileText, Rss, BookOpen, Calendar, Settings, Users, QrCode, BarChart3, Archive, Layers, Sparkles, Code2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

type NavigationChild = 
  | { name: string; href: string }
  | { name: string; children: Array<{ name: string; href: string }> };

type NavigationItem = 
  | {
      name: string;
      children: NavigationChild[];
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
      // Getting Started
      { name: "Event Overview", href: "/docs/event-overview" },
      { name: "Organizer Profile", href: "/docs/event-management/organizer-profile" },
      { name: "Creating Events", href: "/docs/event-management/creating-events" },
      
      // Configuration
      {
        name: "Event Configuration",
        children: [
          { name: "Edit Event Settings", href: "/docs/event-management/event-settings" },
          { name: "Payment & Pricing", href: "/docs/event-management/payment-pricing" },
          { name: "Registration Form Fields", href: "/docs/event-management/form-builder" },
        ],
      },
      
      // Advanced Setup
      { name: "Child Events", href: "/docs/event-management/child-events" },
      
      // Management
      { name: "Registration Management", href: "/docs/event-management/guests-management" },
      
      // During Event
      { name: "QR Scanning and Check-In", href: "/docs/event-management/qr-scanning" },
      { name: "In-Event Features", href: "/docs/event-management/in-event" },
      
      // Analytics & Reports
      { name: "Event Analytics", href: "/docs/event-management/event-analytics" },
      
      // After Event
      { name: "Post Event Management", href: "/docs/event-management/post-event" },
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
      { name: "AI Event Creation", href: "/docs/ai/event-creation" },
      { name: "Resume Optimization", href: "/docs/ai/resume-optimization" },
      { name: "Screenshot & Image Analysis", href: "/docs/ai/screenshot-tool" },
      { name: "PDF Document Analysis", href: "/docs/ai/pdf-analysis" },
      { name: "Voice Assistant", href: "/docs/ai/voice-assistant" },
      { name: "AI Commands", href: "/docs/ai/commands" },
    ],
  },
];

function hasChildren(item: NavigationItem): item is { name: string; children: NavigationChild[] } {
  return 'children' in item;
}

function hasNestedChildren(item: NavigationChild): item is { name: string; children: Array<{ name: string; href: string }> } {
  return 'children' in item;
}

export default function DocsSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>(() => {
    const sections: string[] = [];
    navigation.forEach((section) => {
      if (hasChildren(section)) {
        // Check if any child matches or if any nested child matches
        const hasMatch = section.children.some((child) => {
          if (hasNestedChildren(child)) {
            const nestedMatch = child.children.some((nestedChild) => nestedChild.href === pathname);
            if (nestedMatch) {
              sections.push(`${section.name}-${child.name}`);
            }
            return nestedMatch;
          }
          return child.href === pathname;
        });
        if (hasMatch) {
          sections.push(section.name);
        }
      }
    });
    return sections.length > 0 ? sections : ["Get Started"];
  });

  // Listen for menu toggle from Header
  useEffect(() => {
    const handleToggle = (e: CustomEvent) => {
      setIsMobileMenuOpen(e.detail.isOpen);
    };
    
    const handleClose = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('toggleMobileMenu', handleToggle as EventListener);
    window.addEventListener('closeMobileMenu', handleClose);
    return () => {
      window.removeEventListener('toggleMobileMenu', handleToggle as EventListener);
      window.removeEventListener('closeMobileMenu', handleClose);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent('closeMobileMenu'));
  }, [pathname]);

  const toggleSection = (sectionName: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((s) => s !== sectionName)
        : [...prev, sectionName]
    );
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.dispatchEvent(new CustomEvent('closeMobileMenu'));
          }}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-16 w-64 sm:w-72 md:w-64 h-[calc(100vh-4rem)] border-r bg-background/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out shadow-lg md:shadow-none",
        "md:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <ScrollArea className="h-full">
          <div className="p-4 sm:p-5">
            {/* Mobile: Close Button */}
            <div className="md:hidden flex items-center justify-between mb-3 pb-3 border-b">
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Menu
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('closeMobileMenu'));
                }}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {/* Guides Heading with Icons */}
            <div className="px-3 py-2 mb-4 space-y-2">
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Guides
              </h2>
              <div className="space-y-1">
                <Link
                  href="/docs"
                  prefetch={true}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('closeMobileMenu'));
                  }}
                  className={cn(
                    "flex items-center gap-2.5 px-3 py-2 text-sm rounded-md transition-colors",
                    pathname === "/docs"
                      ? "text-primary font-medium bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <FileText className="h-4 w-4" />
                  Documentation
                </Link>
              </div>
            </div>
          
          <nav className="space-y-1">
            {navigation.map((section) => (
              <div key={section.name}>
                {hasChildren(section) ? (
                  <>
                    <button
                      onClick={() => toggleSection(section.name)}
                      className={cn(
                        "w-full text-left px-3 py-2.5 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors flex items-center justify-between rounded-md hover:bg-muted/50 group mb-1",
                        openSections.includes(section.name) && "text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        {section.name === "Get Started" && <Sparkles className="h-4 w-4 text-primary" />}
                        {section.name === "Event Management" && <Calendar className="h-4 w-4 text-primary" />}
                        {section.name === "Engineering Notes" && <BookOpen className="h-4 w-4 text-primary" />}
                        {section.name === "AI Assistant" && <Sparkles className="h-4 w-4 text-primary" />}
                        <span>{section.name}</span>
                      </div>
                      <ChevronRight
                        className={cn(
                          "h-3.5 w-3.5 transition-transform text-muted-foreground group-hover:text-foreground flex-shrink-0",
                          openSections.includes(section.name) && "rotate-90"
                        )}
                      />
                    </button>
                    {openSections.includes(section.name) && (
                      <div className="ml-1 mt-1 mb-2 space-y-1 pl-3 border-l border-border/50">
                        {section.children.map((item) => {
                          // Check if this item has nested children
                          if (hasNestedChildren(item)) {
                            const nestedItem = item;
                            const isNestedOpen = nestedItem.children.some((child) => child.href === pathname);
                            const nestedSectionKey = `${section.name}-${nestedItem.name}`;
                            return (
                              <div key={nestedItem.name}>
                                <button
                                  onClick={() => {
                                    // Toggle nested section
                                    setOpenSections((prev) =>
                                      prev.includes(nestedSectionKey)
                                        ? prev.filter((s) => s !== nestedSectionKey)
                                        : [...prev, nestedSectionKey]
                                    );
                                  }}
                                  className={cn(
                                    "w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-between mb-1",
                                    isNestedOpen
                                      ? "text-primary font-medium bg-primary/10"
                                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                  )}
                                >
                                  <div className="flex items-center gap-2.5">
                                    {nestedItem.name.includes("Configuration") && <Settings className="h-3.5 w-3.5" />}
                                    <span>{nestedItem.name}</span>
                                  </div>
                                  <ChevronRight
                                    className={cn(
                                      "h-3 w-3 transition-transform text-muted-foreground flex-shrink-0",
                                      openSections.includes(nestedSectionKey) && "rotate-90"
                                    )}
                                  />
                                </button>
                                {openSections.includes(nestedSectionKey) && (
                                  <div className="ml-2 mt-1 mb-2 space-y-1 pl-3 border-l border-border/30">
                                    {nestedItem.children.map((nestedChild) => {
                                      const getNestedIcon = (name: string) => {
                                        if (name.includes("Edit") || name.includes("Settings")) return <Settings className="h-3 w-3" />;
                                        if (name.includes("Payment") || name.includes("Pricing")) return <Settings className="h-3 w-3" />;
                                        if (name.includes("Form") || name.includes("Fields")) return <FileText className="h-3 w-3" />;
                                        return null;
                                      };
                                      
                                      return (
                                        <Link
                                          key={nestedChild.href}
                                          href={nestedChild.href}
                                          prefetch={true}
                                          onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            window.dispatchEvent(new CustomEvent('closeMobileMenu'));
                                          }}
                                          className={cn(
                                            "flex items-center gap-2.5 px-3 py-2 text-xs rounded-md transition-colors relative",
                                            pathname === nestedChild.href
                                              ? "text-primary font-medium bg-primary/10"
                                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                          )}
                                        >
                                          {getNestedIcon(nestedChild.name)}
                                          <span>{nestedChild.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          }
                          // Regular child item
                          const getIcon = (name: string) => {
                            if (name.includes("Overview") || name.includes("Introduction")) return <FileText className="h-3.5 w-3.5" />;
                            if (name.includes("Installation") || name.includes("Quick Start")) return <Settings className="h-3.5 w-3.5" />;
                            if (name.includes("Organizer Profile")) return <Users className="h-3.5 w-3.5" />;
                            if (name.includes("Creating Events")) return <Calendar className="h-3.5 w-3.5" />;
                            if (name.includes("Registration")) return <Users className="h-3.5 w-3.5" />;
                            if (name.includes("QR") || name.includes("Scan")) return <QrCode className="h-3.5 w-3.5" />;
                            if (name.includes("Analytics")) return <BarChart3 className="h-3.5 w-3.5" />;
                            if (name.includes("Post Event") || name.includes("Archive")) return <Archive className="h-3.5 w-3.5" />;
                            if (name.includes("Child Events") || name.includes("Sub")) return <Layers className="h-3.5 w-3.5" />;
                            if (name.includes("Payment") || name.includes("Pricing")) return <Settings className="h-3.5 w-3.5" />;
                            if (name.includes("Form") || name.includes("Fields")) return <FileText className="h-3.5 w-3.5" />;
                            if (name.includes("In-Event") || name.includes("During")) return <Calendar className="h-3.5 w-3.5" />;
                            if (name.includes("Notes")) return <BookOpen className="h-3.5 w-3.5" />;
                            if (name.includes("AI")) return <Sparkles className="h-3.5 w-3.5" />;
                            if (name.includes("Code") || name.includes("Markdown")) return <Code2 className="h-3.5 w-3.5" />;
                            return null;
                          };
                          
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              prefetch={true}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                window.dispatchEvent(new CustomEvent('closeMobileMenu'));
                              }}
                              className={cn(
                                "flex items-center gap-2.5 px-3 py-2 text-sm rounded-md transition-colors relative",
                                pathname === item.href
                                  ? "text-primary font-medium bg-primary/10"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                              )}
                            >
                              {getIcon(item.name)}
                              <span>{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={section.href}
                    prefetch={true}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.dispatchEvent(new CustomEvent('closeMobileMenu'));
                    }}
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
    </>
  );
}
