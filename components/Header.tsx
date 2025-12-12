"use client";

import Link from "next/link";
import { Search, Menu, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Logo } from "@/components/Logo";
import { SearchModal } from "@/components/SearchModal";

// Lazy load ThemeToggle to reduce initial bundle size
const ThemeToggle = dynamic(() => import("@/components/theme-toggle").then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => <div className="h-9 w-9" />,
});

export default function Header() {
  const [isMac, setIsMac] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  // Keyboard shortcut for search (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        window.dispatchEvent(new CustomEvent('closeMobileMenu'));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    // Dispatch event for sidebar to listen
    window.dispatchEvent(new CustomEvent('toggleMobileMenu', { detail: { isOpen: newState } }));
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  // Listen for close events from sidebar
  useEffect(() => {
    const handleClose = () => {
      setIsMobileMenuOpen(false);
    };
    window.addEventListener('closeMobileMenu', handleClose);
    return () => window.removeEventListener('closeMobileMenu', handleClose);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-16 items-center w-full">
        {/* Mobile: Hamburger Menu + Logo */}
        <div className="md:hidden flex items-center gap-2 px-3 sm:px-4 flex-shrink-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="h-9 w-9"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          <div className="flex-shrink-0 min-w-0">
            <Logo />
          </div>
        </div>
        
        {/* Desktop: Logo */}
        <div className="w-64 flex-shrink-0 hidden md:flex items-center px-6">
          <Logo />
        </div>
        
        {/* Main header content - Search in center for desktop */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 min-w-0">
          {/* Search - Hidden on mobile, shown on tablet+ */}
          <div className="hidden sm:flex flex-1 justify-center max-w-2xl min-w-0">
            <button
              onClick={openSearchModal}
              className="relative w-full group"
            >
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary pointer-events-none" />
                <div className="pl-10 pr-20 w-full h-9 bg-muted/50 border border-muted-foreground/20 rounded-md flex items-center text-sm text-muted-foreground cursor-text group-hover:bg-background group-hover:border-primary/50 transition-colors">
                  Search...
                </div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground pointer-events-none">
                  <kbd className="px-1.5 py-0.5 bg-background/50 border border-border rounded text-xs font-mono hidden lg:inline">
                    {isMac ? '⌘' : 'Ctrl'} K
                  </kbd>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Right side - Search (mobile), Support, Vihaya button, Theme toggle */}
        <div className="flex items-center gap-2 px-4 sm:px-6 lg:px-8 flex-shrink-0">
          {/* Mobile: Search Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden h-9 w-9"
            onClick={openSearchModal}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex text-sm text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="https://github.com/Vishnu252005/vihaya-docs/issues" target="_blank" rel="noopener noreferrer">
              <HelpCircle className="h-4 w-4 mr-1.5" />
              <span className="hidden lg:inline">Support</span>
            </Link>
          </Button>
          <Button 
            asChild 
            size="sm"
            className="hidden sm:flex bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground hover:from-primary/90 hover:via-primary/80 hover:to-primary/90 shadow-md hover:shadow-lg transition-all duration-200 font-semibold px-3 lg:px-4"
          >
            <Link href="https://vihaya.app/events" target="_blank" rel="noopener noreferrer">
              <span className="hidden lg:inline">Vihaya</span>
              <span className="lg:hidden">V</span>
              <span className="ml-1.5 hidden lg:inline">→</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
    </header>
  );
}
