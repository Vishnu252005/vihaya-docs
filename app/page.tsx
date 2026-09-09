import Link from "next/link";
import { ArrowRight, Calendar, Code2, QrCode } from "lucide-react";
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
              className="bg-gradient-to-br from-[#0f766e] to-[#115e59] text-white hover:from-[#115e59] hover:to-[#134e4a] shadow-md hover:shadow-lg transition-all duration-200 font-semibold px-4"
            >
              <Link href="https://events.vihaya.app" target="_blank" rel="noopener noreferrer">
                Vihaya
              </Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero — the events site's shape: eyebrow pill, left-aligned display
          headline with a gradient on ONE phrase, 17-20px lead, two CTAs.
          ⚠️ No framer-motion and nothing starts at opacity:0 via JS: React
          server-renders that as a literal style="opacity:0", which is what took
          the main site's mobile LCP to 9.9s. */}
      <main className="relative w-full">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise opacity-[0.025]" />
        <div aria-hidden className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[700px] rounded-full bg-primary/[0.14] blur-[180px]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] py-1 pl-2 pr-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-accent-ink">
                Documentation
              </span>
            </div>

            <h1 className="font-display text-[2.25rem] font-bold leading-[1.05] tracking-[-0.04em] md:text-[2.75rem] lg:text-[3.25rem]">
              Everything you need to run{' '}
              <span className="bg-gradient-to-br from-[#14b8a6] to-[#0d9488] bg-clip-text text-transparent">
                events on Vihaya
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground sm:text-xl">
              Publish events, sell tickets and scan people in at the gate — and build all of it
              into your own product with our REST API and SDKs for seven languages.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 bg-gradient-to-br from-[#0f766e] to-[#115e59] px-6 text-base text-white shadow-lg shadow-primary/25 transition-shadow hover:from-[#115e59] hover:to-[#134e4a] hover:shadow-xl hover:shadow-primary/30">
                <Link href="/docs" prefetch={true}>
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
                <Link href="/docs/api" prefetch={true}>API reference</Link>
              </Button>
            </div>

            {/* At-a-glance, in the events site's stat-tile language. */}
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Guides", "16 pages"],
                ["API", "13 endpoints"],
                ["SDKs", "7 languages"],
                ["Auth", "x-api-key"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border bg-card/70 px-4 py-3 backdrop-blur-sm">
                  <dt className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-accent-ink">{k}</dt>
                  <dd className="mt-1.5 truncate font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

        {/* Features Grid */}
        <div className="mx-auto mt-20 max-w-6xl md:mt-24">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-xl border bg-card p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#14b8a6] to-[#0d9488] shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <Calendar className="h-7 w-7 text-white" />
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#14b8a6] to-[#0d9488] shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <Code2 className="h-7 w-7 text-white" />
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#14b8a6] to-[#0d9488] shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <QrCode className="h-7 w-7 text-white" />
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
