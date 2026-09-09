"use client";

import Link from "next/link";
import { Search, Menu, X, HelpCircle, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Logo } from "@/components/Logo";
import { SearchModal } from "@/components/SearchModal";

const ThemeToggle = dynamic(() => import("@/components/theme-toggle").then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => <div className="h-9 w-9" />,
});

export default function Header() {
  const [isMac, setIsMac] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        window.dispatchEvent(new CustomEvent("closeMobileMenu"));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClose = () => setIsMobileMenuOpen(false);
    window.addEventListener("closeMobileMenu", handleClose);
    return () => window.removeEventListener("closeMobileMenu", handleClose);
  }, []);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    window.dispatchEvent(new CustomEvent("toggleMobileMenu", { detail: { isOpen: newState } }));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-16 w-full items-center">
        {/* Mobile: menu + logo */}
        <div className="flex flex-shrink-0 items-center gap-2 px-3 sm:px-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="h-9 w-9"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="min-w-0 flex-shrink-0">
            <Logo />
          </div>
        </div>

        {/* Desktop: logo occupies the sidebar column so the two line up */}
        <div className="hidden w-64 flex-shrink-0 items-center px-6 md:flex">
          <Logo />
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="hidden min-w-0 max-w-2xl flex-1 justify-center sm:flex">
            <button onClick={() => setIsSearchModalOpen(true)} className="group relative w-full" aria-label="Search documentation">
              <div className="relative w-full">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-hover:text-primary" />
                <div className="flex h-9 w-full cursor-text items-center rounded-lg border border-input bg-muted/40 pl-10 pr-20 text-sm text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:bg-background">
                  Search documentation…
                </div>
                <div className="pointer-events-none absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 text-xs text-muted-foreground">
                  <kbd className="hidden rounded border bg-background/50 px-1.5 py-0.5 font-mono text-xs lg:inline">
                    {isMac ? "⌘" : "Ctrl"} K
                  </kbd>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-shrink-0 items-center gap-1.5 px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="h-9 w-9 sm:hidden" onClick={() => setIsSearchModalOpen(true)} aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>

          {/* The agent entry point is reachable from every page, not just the nav. */}
          <Button variant="ghost" size="sm" className="hidden text-sm text-muted-foreground hover:text-foreground md:flex" asChild>
            <Link href="/docs/build-with-ai">
              <Bot className="mr-1.5 h-4 w-4" />
              <span className="hidden lg:inline">Build with AI</span>
            </Link>
          </Button>

          <Button variant="ghost" size="sm" className="hidden text-sm text-muted-foreground hover:text-foreground sm:flex" asChild>
            <Link href="https://github.com/Vishnu252005/vihaya-docs/issues" target="_blank" rel="noopener noreferrer">
              <HelpCircle className="h-4 w-4 lg:mr-1.5" />
              <span className="hidden lg:inline">Support</span>
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            className="hidden bg-gradient-to-br from-[#0f766e] to-[#115e59] font-semibold text-white shadow-md transition-all duration-200 hover:from-[#115e59] hover:to-[#134e4a] hover:shadow-lg sm:flex"
          >
            <Link href="https://events.vihaya.app" target="_blank" rel="noopener noreferrer">
              <span className="hidden lg:inline">Vihaya Events</span>
              <span className="lg:hidden">V</span>
              <span className="ml-1.5 hidden lg:inline">→</span>
            </Link>
          </Button>

          <ThemeToggle />
        </div>
      </div>

      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
    </header>
  );
}
