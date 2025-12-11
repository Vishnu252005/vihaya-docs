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

    // Use requestAnimationFrame for better performance
    let observer: IntersectionObserver | null = null;
    let rafId: number | null = null;

    const updateHeadings = () => {
      const headingElements = document.querySelectorAll("h2");
      
      if (headingElements.length === 0) {
        // Try again after a short delay if no headings found
        rafId = requestAnimationFrame(() => {
          setTimeout(updateHeadings, 50);
        });
        return;
      }

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
        observer = new IntersectionObserver(
          (entries) => {
            // Use requestAnimationFrame to batch updates
            requestAnimationFrame(() => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setActiveId(entry.target.id);
                }
              });
            });
          },
          {
            rootMargin: "-20% 0% -35% 0%",
            threshold: 0,
          }
        );

        headingElements.forEach((heading) => observer!.observe(heading));
      }
    };

    // Use requestAnimationFrame for better performance than setTimeout
    rafId = requestAnimationFrame(() => {
      updateHeadings();
    });

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <aside className="fixed right-0 top-16 w-64 h-[calc(100vh-4rem)] z-30 hidden xl:block">
      <div className="pt-12 pb-6 pl-12 pr-6 h-full">
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            On this page
          </h3>
        </div>
        <nav className="mt-4">
          {headings.map((heading, index) => (
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
                "block text-sm transition-colors cursor-pointer",
                activeId === heading.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ 
                lineHeight: '1.5',
                paddingTop: index === 0 ? '0' : '0.5rem',
                paddingBottom: '0.5rem'
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
