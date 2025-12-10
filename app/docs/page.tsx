import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DocsHome() {
  return (
    <div className="max-w-none space-y-10">
      {/* Section Heading */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
        <span>Get Started</span>
      </div>
      
      {/* Page Title */}
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Introduction to Vihaya
        </h1>
        <p className="text-xl text-muted-foreground font-normal leading-relaxed">
          Your all-in-one platform for event management, engineering notes, and AI-powered study assistance.
        </p>
      </div>

      {/* Body Content */}
      <div className="space-y-8 leading-7 text-base">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Vihaya simplifies your academic and professional life with three powerful features: 
          seamless event management, comprehensive engineering notes, and intelligent AI assistance.
        </p>

        <div className="my-12" id="why-choose-vihaya">
          <h2 className="text-3xl font-bold mb-6">Why Choose Vihaya?</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Vihaya brings together everything you need in one platform:
          </p>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group flex items-start gap-4 p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform flex-shrink-0">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Event Management</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Create and manage events with ease. Handle registrations, check-ins, and analytics seamlessly.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform flex-shrink-0">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Engineering Notes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Organize your notes with markdown, code blocks, and powerful search. Never lose important information.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform flex-shrink-0">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">AI Assistant</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get instant help with your studies. Ask questions, enhance notes, and learn faster with AI.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12" id="getting-started">
          <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Launching with Vihaya is quick and hassle-free:
          </p>
          
          <ol className="space-y-6 list-decimal list-inside">
            <li className="pl-2">
              <strong className="text-foreground">Create Your Account</strong>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Head over to vihaya.com and sign up using your email.
              </p>
            </li>
            <li className="pl-2">
              <strong className="text-foreground">Set Up Your Profile</strong>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Complete your profile and customize your preferences.
              </p>
            </li>
            <li className="pl-2">
              <strong className="text-foreground">Start Creating</strong>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Create your first event, start taking notes, or ask the AI assistant a question.
              </p>
            </li>
            <li className="pl-2">
              <strong className="text-foreground">Explore Features</strong>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Dive into our comprehensive guides for events, notes, and AI features.
              </p>
            </li>
          </ol>
        </div>

        <div className="my-12" id="core-features">
          <h2 className="text-3xl font-bold mb-6">Core Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <h3 className="font-semibold mb-3 text-lg">Event Management</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Complete event lifecycle management from creation to post-event analytics.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/event-overview">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <h3 className="font-semibold mb-3 text-lg">Engineering Notes</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Powerful note-taking with markdown, code syntax highlighting, and organization tools.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/notes/overview">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <h3 className="font-semibold mb-3 text-lg">AI Assistant</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Intelligent study companion that helps you learn, understand, and excel.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/ai/overview">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl border bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <p className="text-center mb-6 text-lg font-medium">
            Start using Vihaya today and transform the way you manage events, take notes, and study!
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/docs/installation">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/docs/quick-start">
                Quick Start Guide
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
