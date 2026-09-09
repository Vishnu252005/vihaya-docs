import Link from "next/link";
import { ArrowRight, Calendar, Code2, QrCode, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/Logo";
import ChatBotWrapper from "@/components/ChatBotWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vihaya Events Documentation",
  description: "Documentation for Vihaya Events. Get started with Vihaya today!",
  keywords: ["Vihaya Events", "Event Ticketing", "Event Management", "API Reference", "Registration", "QR Check-in"],
  openGraph: {
    title: "Vihaya Events Documentation",
    description: "Documentation for Vihaya Events.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 w-full overflow-x-hidden">
      {/* Header */}
      <header className="w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="flex items-center gap-6">
            <Link href="/docs" prefetch={true} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="https://github.com/Vishnu252005/vihaya-docs" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Button 
              asChild 
              size="sm"
              className="bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground hover:from-primary/90 hover:via-primary/80 hover:to-primary/90 shadow-md hover:shadow-lg transition-all duration-200 font-semibold px-4"
            >
              <Link href="https://vihaya.app/events" target="_blank" rel="noopener noreferrer">
                Vihaya
              </Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Rocket className="h-4 w-4" />
              <span>Your All-in-One Platform</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Vihaya Events Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Publish events, sell tickets, scan people in at the gate — and build all of it
              into your own product with our REST API and SDKs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-base h-12 px-8 shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/docs" prefetch={true}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base h-12 px-8">
              <Link href="/docs/quick-start" prefetch={true}>
                Quick Start Guide
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/docs/api" prefetch={true}>
                API Reference
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-32 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-xl border bg-card p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Event Management</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Create, manage, and track events seamlessly. Handle registrations, check-ins, and analytics all in one place.
              </p>
              <Button asChild variant="ghost" className="w-full mt-6 group-hover:text-primary">
                <Link href="/docs/event-overview">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="group rounded-xl border bg-card p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform">
                <Code2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">API &amp; SDKs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Take registrations and payments from your own front end. REST API with official SDKs for seven languages.
              </p>
              <Button asChild variant="ghost" className="w-full mt-6 group-hover:text-primary">
                <Link href="/docs/api">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="group rounded-xl border bg-card p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform">
                <QrCode className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Check-in &amp; Analytics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Scan tickets at the gate, run multiple desks at once, and see turnout and revenue live.
              </p>
              <Button asChild variant="ghost" className="w-full mt-6 group-hover:text-primary">
                <Link href="/docs/event-management/qr-scanning">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t mt-32 bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Vihaya. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="https://github.com/Vishnu252005/vihaya-docs" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ChatBotWrapper />
    </div>
  );
}
