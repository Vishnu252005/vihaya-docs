"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    // Reset headings when pathname changes
    setHeadings([]);
    setActiveId("");

    // Wait for DOM to be ready
    const updateHeadings = () => {
      const headingElements = document.querySelectorAll("h2");
      const headingList: Heading[] = Array.from(headingElements).map((heading) => {
        const text = heading.textContent || "";
        const id = heading.id || text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || `heading-${Math.random().toString(36).substr(2, 9)}`;
        
        // Set ID if it doesn't exist
        if (!heading.id) {
          heading.id = id;
        }
        
        return {
          id,
          text,
          level: parseInt(heading.tagName.charAt(1)),
        };
      });

      setHeadings(headingList);

      // Set up intersection observer for active section highlighting
      if (headingList.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveId(entry.target.id);
              }
            });
          },
          {
            rootMargin: "-20% 0% -35% 0%",
            threshold: 0,
          }
        );

        headingElements.forEach((heading) => observer.observe(heading));

        return () => {
          headingElements.forEach((heading) => observer.unobserve(heading));
        };
      }
    };

    // Use setTimeout to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateHeadings, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <aside className="fixed right-0 top-16 w-64 h-[calc(100vh-4rem)] border-l bg-background/95 backdrop-blur-sm z-30 hidden xl:block">
      <ScrollArea className="h-full">
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              On this page
            </h3>
          </div>
          <nav className="space-y-1">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                    setActiveId(heading.id);
                  }
                }}
                className={cn(
                  "block text-sm py-1.5 transition-colors rounded-md px-2",
                  activeId === heading.id
                    ? "text-primary font-medium bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  );
}
