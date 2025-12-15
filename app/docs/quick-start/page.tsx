import Link from "next/link";
import { ArrowRight, Calendar, BookOpen, Sparkles, CheckCircle2, Zap, Users, FileText, MessageSquare, Image as ImageIcon, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "Quick Start Guide",
  description: "Get up and running with Vihaya in minutes. Learn how to create events, take notes, and use AI features quickly.",
  path: "/docs/quick-start",
  keywords: ["quick start", "getting started", "tutorial", "guide", "Vihaya"],
});

export default function QuickStartPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Get Started
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Quick Start Guide
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Get up and running with Vihaya in just a few minutes. This guide will help you master the essentials quickly.
      </p>

      <div className="space-y-8 leading-7">
        {/* Quick Overview */}
        <div className="p-6 rounded-xl border bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <h2 className="text-2xl font-semibold mb-4">What is Vihaya?</h2>
          <p className="mb-4 text-muted-foreground">
            Vihaya is your all-in-one platform combining <strong>Event Management</strong>, <strong>Engineering Notes</strong>, and <strong>AI Assistant</strong> in one powerful application.
          </p>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
              <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm">Events</div>
                <div className="text-xs text-muted-foreground">Manage & organize</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
              <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm">Notes</div>
                <div className="text-xs text-muted-foreground">Study & organize</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
              <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm">AI Assistant</div>
                <div className="text-xs text-muted-foreground">Learn & enhance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1: Account Setup */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h2 className="text-2xl font-semibold">Create Your Account</h2>
          </div>
          <div className="ml-13 space-y-3">
            <div className="p-4 rounded-lg border bg-card">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Sign Up</h3>
                  <p className="text-sm text-muted-foreground">
                    Visit <strong>vihaya.app</strong> and create your account using your email address. It's free and takes less than a minute.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Complete Your Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your name, profile picture, and basic information. This helps personalize your experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Explore the Dashboard</h3>
                  <p className="text-sm text-muted-foreground">
                    Familiarize yourself with the main navigation: <strong>Home</strong>, <strong>Tools</strong>, <strong>AI</strong>, <strong>Events</strong>, and <strong>Profile</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Create Your First Event */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h2 className="text-2xl font-semibold">Create Your First Event</h2>
          </div>
          <div className="ml-13 space-y-3">
            <p className="text-muted-foreground mb-4">
              Events are at the heart of Vihaya. Here's how to create one quickly:
          </p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li className="pl-2">
                <strong>Navigate to Events</strong>
              <p className="text-sm text-muted-foreground mt-1">
                  Click on the <strong>Events</strong> tab in the bottom navigation or from the main menu.
              </p>
            </li>
              <li className="pl-2">
                <strong>Click "Create Event"</strong>
              <p className="text-sm text-muted-foreground mt-1">
                  Tap the <strong>+</strong> button or "Create Event" button to start.
              </p>
            </li>
              <li className="pl-2">
                <strong>Fill Basic Information</strong>
              <p className="text-sm text-muted-foreground mt-1">
                  Enter event name, select type (Workshop, Conference, etc.), date, time, and location.
              </p>
            </li>
              <li className="pl-2">
                <strong>Set Pricing & Capacity</strong>
              <p className="text-sm text-muted-foreground mt-1">
                  Choose if it's free or paid, set ticket price, and maximum capacity.
              </p>
            </li>
              <li className="pl-2">
                <strong>Publish Your Event</strong>
              <p className="text-sm text-muted-foreground mt-1">
                  Review all details and click <strong>Publish</strong>. Your event is now live!
                </p>
              </li>
            </ol>
            <div className="mt-4 p-4 rounded-lg border bg-primary/5">
              <p className="text-sm">
                <strong>💡 Pro Tip:</strong> You can also use <Link href="/docs/ai/event-creation" className="text-primary hover:underline">AI to create events</Link> by simply describing your event in natural language!
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Start Taking Notes */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h2 className="text-2xl font-semibold">Start Taking Notes</h2>
          </div>
          <div className="ml-13 space-y-3">
            <p className="text-muted-foreground mb-4">
              Organize your study materials with Vihaya's powerful note-taking features:
            </p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li className="pl-2">
                <strong>Open Notes</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Navigate to <strong>Tools</strong> → <strong>Notes</strong> from the main menu.
                </p>
              </li>
              <li className="pl-2">
                <strong>Create Your First Note</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Click the <strong>+</strong> button to create a new note. Give it a title and start writing.
                </p>
              </li>
              <li className="pl-2">
                <strong>Use Markdown</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Format your notes with markdown: use <code className="text-xs bg-muted px-1 py-0.5 rounded">**bold**</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded"># headings</code>, and code blocks.
                </p>
              </li>
              <li className="pl-2">
                <strong>Organize with Folders</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Create folders to organize notes by subject, semester, or topic for easy access.
                </p>
              </li>
              <li className="pl-2">
                <strong>Search & Filter</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Use the search bar to quickly find notes by title or content.
              </p>
            </li>
          </ol>
          </div>
        </div>

        {/* Step 4: Use AI Assistant */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              4
            </div>
            <h2 className="text-2xl font-semibold">Use AI Assistant</h2>
          </div>
          <div className="ml-13 space-y-3">
            <p className="text-muted-foreground mb-4">
              Vihaya's AI Assistant is your intelligent study companion. Here are quick ways to use it:
            </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-sm">Ask Questions</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Simply type your question in the AI chat. Get instant answers about any topic.
                </p>
                <code className="text-xs bg-muted px-2 py-1 rounded block">
                  "What is quantum physics?"
                </code>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-sm">Analyze PDFs</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Upload PDF documents and get instant summaries and analysis.
                </p>
                <code className="text-xs bg-muted px-2 py-1 rounded block">
                  Attach PDF → "Summarize this"
                </code>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <ImageIcon className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-sm">Analyze Images</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Send images or screenshots to AI for detailed explanations.
                </p>
                <code className="text-xs bg-muted px-2 py-1 rounded block">
                  Attach image → Ask questions
                </code>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <Mic className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-sm">Voice Assistant</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Use voice commands for hands-free learning and multitasking.
                </p>
                <code className="text-xs bg-muted px-2 py-1 rounded block">
                  Open Vihaya Voice → Speak
                </code>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-lg border bg-primary/5">
              <p className="text-sm">
                <strong>💡 Pro Tip:</strong> Check out <Link href="/docs/ai/commands" className="text-primary hover:underline">AI Commands</Link> for a complete list of what you can do with AI!
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Quick Reference */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features Quick Reference</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">QR Code Check-ins</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Generate QR codes for attendees and scan them at events for quick check-ins.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">Real-time Analytics</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Monitor ticket sales, attendance, and engagement metrics in real-time.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">Guest Management</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Manage your guest list, send updates, and track attendance easily.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">Markdown Support</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Format notes with markdown, code blocks, and syntax highlighting.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">Resume Optimization</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Optimize your resume for specific job roles using AI.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">AI Event Creation</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Create events using natural language with AI assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="p-6 rounded-xl border bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <h2 className="text-2xl font-semibold mb-4">What's Next?</h2>
          <p className="mb-6 text-muted-foreground">
            Now that you've got the basics, explore these comprehensive guides:
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Button asChild variant="outline" className="h-auto py-4 flex-col items-start">
              <Link href="/docs/event-overview">
                <Calendar className="h-5 w-5 mb-2 text-primary" />
                <span className="font-semibold">Event Management</span>
                <span className="text-xs text-muted-foreground mt-1">Complete event guide</span>
                <ArrowRight className="h-4 w-4 mt-2 self-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 flex-col items-start">
              <Link href="/docs/notes/overview">
                <BookOpen className="h-5 w-5 mb-2 text-primary" />
                <span className="font-semibold">Engineering Notes</span>
                <span className="text-xs text-muted-foreground mt-1">Note-taking guide</span>
                <ArrowRight className="h-4 w-4 mt-2 self-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 flex-col items-start">
              <Link href="/docs/ai/overview">
                <Sparkles className="h-5 w-5 mb-2 text-primary" />
                <span className="font-semibold">AI Assistant</span>
                <span className="text-xs text-muted-foreground mt-1">AI features guide</span>
                <ArrowRight className="h-4 w-4 mt-2 self-end" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Help Section */}
        <div className="p-6 rounded-lg border bg-card">
          <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            If you run into any issues or have questions, we're here to help:
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/docs">
                Browse Documentation
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/docs/installation">
                Installation Guide
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/docs/ai/getting-started">
                AI Getting Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
