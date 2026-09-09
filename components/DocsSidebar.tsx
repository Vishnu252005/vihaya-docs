"use client";

/**
 * The documentation nav.
 *
 * ⚠️ IT RENDERS `lib/docs-registry.ts` AND HOLDS NO PAGE LIST OF ITS OWN. The
 * previous version carried a hand-written copy of the tree, which is how a page
 * could exist and never appear in the nav — and how the nav and /llms.txt could
 * disagree about what the site contains. Add a page to the registry, not here.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { ChevronRight, X, Rocket, Calendar, Code2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { DOC_PAGES, GROUP_ORDER, SECTION_ORDER, type DocPage } from "@/lib/docs-registry";

const GROUP_ICON: Record<string, LucideIcon> = {
  "Get Started": Rocket,
  "Event Management": Calendar,
  "API Reference": Code2,
};

function NavLink({ page, active, onNavigate }: { page: DocPage; active: boolean; onNavigate: () => void }) {
  const Icon = page.icon;
  return (
    <Link
      href={page.href}
      prefetch
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative flex items-center gap-2.5 rounded-lg py-1.5 pl-3 pr-2 text-[13.5px] transition-colors",
        active
          ? "bg-primary/[0.09] font-medium text-primary"
          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
      )}
    >
      {/* The active rail sits on the group's left border, not inside the row. */}
      {active && <span aria-hidden className="absolute -left-[13px] top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-primary" />}
      {Icon && <Icon className={cn("h-3.5 w-3.5 shrink-0", active ? "text-primary" : "text-muted-foreground/70")} />}
      <span className="min-w-0 flex-1 truncate">{page.title}</span>
      {page.badge && (
        <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-1.5 py-px text-[9.5px] font-bold uppercase tracking-wide text-primary">
          {page.badge}
        </span>
      )}
    </Link>
  );
}

export default function DocsSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /** Group → (section → pages), built once from the registry. */
  const tree = useMemo(() => {
    return GROUP_ORDER.map(group => {
      const pages = DOC_PAGES.filter(p => p.group === group);
      const order = SECTION_ORDER[group];
      const sections = order
        ? order.map(name => ({ name, pages: pages.filter(p => p.section === name) })).filter(s => s.pages.length)
        : [{ name: null as string | null, pages }];
      return { group, sections };
    });
  }, []);

  /**
   * Which group the reader is in right now. Derived, never stored — storing it
   * meant an effect that pushed the group into state on every navigation, and
   * groups then accumulated open forever because nothing ever removed them.
   */
  const currentGroup = DOC_PAGES.find(p => p.href === pathname)?.group ?? GROUP_ORDER[0];

  /**
   * Only the reader's EXPLICIT choices. A group with no entry here follows the
   * page: open when you are inside it, closed when you are not.
   */
  const [overrides, setOverrides] = useState<Record<string, boolean>>({});
  const isOpen = (g: string) => overrides[g] ?? g === currentGroup;

  useEffect(() => {
    const onToggle = (e: Event) => setIsMobileMenuOpen((e as CustomEvent).detail.isOpen);
    const onClose = () => setIsMobileMenuOpen(false);
    window.addEventListener("toggleMobileMenu", onToggle);
    window.addEventListener("closeMobileMenu", onClose);
    return () => {
      window.removeEventListener("toggleMobileMenu", onToggle);
      window.removeEventListener("closeMobileMenu", onClose);
    };
  }, []);

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent("closeMobileMenu"));
  };

  const toggle = (g: string) => setOverrides(prev => ({ ...prev, [g]: !isOpen(g) }));

  return (
    <>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={closeMobile} />
      )}

      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out sm:w-72 md:w-64 md:translate-x-0 md:shadow-none",
          isMobileMenuOpen ? "translate-x-0 shadow-lg" : "-translate-x-full md:translate-x-0",
        )}
      >
        <ScrollArea className="h-full">
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between border-b pb-3 md:hidden">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Menu</h2>
              <Button variant="ghost" size="icon" onClick={closeMobile} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <nav className="space-y-1 pb-8">
              {tree.map(({ group, sections }) => {
                const Icon = GROUP_ICON[group];
                const expanded = isOpen(group);
                return (
                  <div key={group}>
                    <button
                      onClick={() => toggle(group)}
                      aria-expanded={expanded}
                      className="group mb-0.5 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13.5px] font-semibold text-foreground/90 transition-colors hover:bg-muted/60 hover:text-foreground"
                    >
                      <span className="flex items-center gap-2.5">
                        {Icon && <Icon className="h-4 w-4 text-primary" />}
                        {group}
                      </span>
                      <ChevronRight
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform",
                          expanded && "rotate-90",
                        )}
                      />
                    </button>

                    {expanded && (
                      <div className="mb-2 ml-[18px] space-y-2 border-l pl-3">
                        {sections.map(({ name, pages }) => (
                          <div key={name ?? "_"} className="space-y-0.5">
                            {name && (
                              <p className="px-3 pb-0.5 pt-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                                {name}
                              </p>
                            )}
                            {pages.map(p => (
                              <NavLink key={p.href} page={p} active={pathname === p.href} onNavigate={closeMobile} />
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
}
