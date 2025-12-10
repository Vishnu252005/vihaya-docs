"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/Logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center w-full">
        {/* Logo - Top Left with more spacing */}
        <div className="w-64 flex-shrink-0 hidden md:flex items-center px-8">
          <Logo />
        </div>
        
        {/* Mobile Logo */}
        <div className="md:hidden px-4">
          <Logo />
        </div>
        
        {/* Main header content */}
        <div className="flex-1 flex items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
          {/* Search */}
          <div className="flex-1 flex justify-center max-w-xl mx-4 sm:mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary pointer-events-none" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="pl-10 pr-4 w-full h-9 bg-muted/50 border-muted-foreground/20 focus:bg-background focus:border-primary/50 transition-colors"
              />
            </div>
          </div>

          {/* Right side - Vihaya button, Theme toggle and Menu */}
          <div className="flex items-center gap-3">
            <Button 
              asChild 
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground hover:from-primary/90 hover:via-primary/80 hover:to-primary/90 shadow-md hover:shadow-lg transition-all duration-200 font-semibold px-4"
            >
              <Link href="https://vihaya.app/events" target="_blank" rel="noopener noreferrer">
                Vihaya
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
