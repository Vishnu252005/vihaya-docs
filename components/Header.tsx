"use client";

import Link from "next/link";
import { Search, Menu, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Logo } from "@/components/Logo";

// Lazy load ThemeToggle to reduce initial bundle size
const ThemeToggle = dynamic(() => import("@/components/theme-toggle").then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => <div className="h-9 w-9" />,
});

export default function Header() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-16 items-center w-full">
        {/* Logo - Top Left with more spacing */}
        <div className="w-64 flex-shrink-0 hidden md:flex items-center px-6">
          <Logo />
        </div>
        
        {/* Mobile Logo */}
        <div className="md:hidden px-4">
          <Logo />
        </div>
        
        {/* Main header content */}
        <div className="flex-1 flex items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
          {/* Search - Centered like MakeMyPass */}
          <div className="flex-1 flex justify-center max-w-2xl mx-auto">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary pointer-events-none" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-20 w-full h-9 bg-muted/50 border-muted-foreground/20 focus:bg-background focus:border-primary/50 transition-colors"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground pointer-events-none">
                <kbd className="px-1.5 py-0.5 bg-background/50 border border-border rounded text-xs font-mono">
                  {isMac ? '⌘' : 'Ctrl'} K
                </kbd>
              </div>
            </div>
          </div>

          {/* Right side - Support, Vihaya button, Theme toggle and Menu */}
          <div className="flex items-center gap-2 ml-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-sm text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="https://github.com/Vishnu252005/vihaya-docs/issues" target="_blank" rel="noopener noreferrer">
                <HelpCircle className="h-4 w-4 mr-1.5" />
                Support
              </Link>
            </Button>
            <Button 
              asChild 
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground hover:from-primary/90 hover:via-primary/80 hover:to-primary/90 shadow-md hover:shadow-lg transition-all duration-200 font-semibold px-4"
            >
              <Link href="https://vihaya.app/events" target="_blank" rel="noopener noreferrer">
                Vihaya
                <span className="ml-1.5">→</span>
              </Link>
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
