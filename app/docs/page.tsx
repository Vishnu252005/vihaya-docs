import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Code2, Bot, Terminal, KeyRound, Ticket, QrCode, BarChart3 } from "lucide-react";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { API_BASE } from "@/lib/api-spec";
import { DOCS_URL } from "@/lib/agent-context";

export const metadata: Metadata = genMeta({
  title: "Introduction to Vihaya",
  description:
    "Documentation for Vihaya Events — run events end to end, or use the REST API as the ticketing backend for your own site. Includes a copy-paste brief for coding agents.",
  path: "/docs",
  keywords: ["Vihaya Events", "event ticketing api", "headless ticketing", "event management", "API reference", "SDKs"],
});

/** The three ways people arrive. Each one is a different first page. */
const PATHS = [
  {
    href: "/docs/quick-start",
    icon: Calendar,
    eyebrow: "Run an event",
    title: "Use the dashboard",
    body: "Create an event, sell tickets, scan people in at the gate. No code at any point.",
  },
  {
    href: "/docs/api",
    icon: Code2,
    eyebrow: "Build on it",
    title: "Use the REST API",
    body: "Keep your own front end and let Vihaya handle booking, payment, tickets and check-in.",
  },
  {
    href: "/docs/build-with-ai",
    icon: Bot,
    eyebrow: "Hand it to an agent",
    title: "Build with AI",
    body: "A copy-paste brief, a machine-readable context bundle, and a working storefront to clone.",
    featured: true,
  },
];

const HANDLED = [
  { icon: Ticket, label: "Booking & payment", note: "Razorpay, promo codes, tiers, early bird" },
  { icon: QrCode, label: "Tickets & check-in", note: "QR issue, gate desk, food scanning" },
  { icon: BarChart3, label: "Analytics & payouts", note: "Revenue, turnout, organiser settlement" },
];

export default function DocsHome() {
  return (
    <div className="max-w-none">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-accent-ink">
        Get Started
      </div>

      <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        Vihaya Events
      </h1>
      <p className="mb-10 text-lg font-normal leading-relaxed text-muted-foreground">
        Ticketing and registration infrastructure for events. Run everything from our dashboard, or
        treat the API as your backend and build whatever front end you like.
      </p>

      <div className="space-y-12 leading-7">
        {/* -------------------------------------------------------------- */}
        <section>
          <h2 id="start-here" className="mb-5 text-2xl font-semibold">Start here</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PATHS.map(p => (
              <Link
                key={p.href}
                href={p.href}
                className={`group flex flex-col rounded-2xl border p-5 transition-all hover:shadow-md ${
                  p.featured
                    ? "border-primary/35 bg-primary/[0.05] hover:border-primary/60"
                    : "bg-card hover:border-primary/40"
                }`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {p.eyebrow}
                </p>
                <p className="mb-2 flex items-center gap-1.5 font-semibold">
                  {p.title}
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </p>
                <p className="text-[13.5px] leading-relaxed text-muted-foreground">{p.body}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        <section>
          <h2 id="what-you-dont-build" className="mb-3 text-2xl font-semibold">What you don&apos;t have to build</h2>
          <p className="mb-5 leading-relaxed text-muted-foreground">
            This is the part worth knowing before you scope anything. All of it already exists behind
            the API, so an integration is a front end and a few HTTP calls.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {HANDLED.map(h => (
              <div key={h.label} className="rounded-xl border bg-card p-4">
                <h.icon className="mb-2 h-4 w-4 text-primary" />
                <p className="text-[13.5px] font-semibold">{h.label}</p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-muted-foreground">{h.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        <section>
          <h2 id="first-call" className="mb-3 text-2xl font-semibold">Your first call</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Every request carries an <code className="font-mono text-[13px]">x-api-key</code> header.{" "}
            <a href={`${API_BASE}/profile/developer/keys`} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
              Create a key
            </a>
            , then:
          </p>
          <div className="overflow-hidden rounded-xl border bg-[#0b0f14]">
            <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2">
              <Terminal className="h-3.5 w-3.5 text-white/40" />
              <span className="font-mono text-[11px] text-white/60">terminal</span>
            </div>
            <pre className="overflow-x-auto px-4 py-3.5">
              <code className="font-mono text-[12.5px] leading-relaxed text-[#d7dde5]">{`curl ${API_BASE}/api/v1/events \\
  -H "x-api-key: $VIHAYA_API_KEY"`}</code>
            </pre>
          </div>
          <p className="mt-3 text-[13.5px] text-muted-foreground">
            Full reference at <Link href="/docs/api/endpoints" className="text-primary underline underline-offset-2">Endpoints</Link>,
            generated from the live specification so it cannot fall behind the running API.
          </p>
        </section>

        {/* -------------------------------------------------------------- */}
        <section>
          <div className="rounded-2xl border border-primary/30 bg-primary/[0.05] p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-2">
              <Bot className="h-4 w-4 text-primary" />
              <p className="font-semibold text-primary">Using a coding agent?</p>
            </div>
            <p className="mb-4 text-[14px] leading-relaxed text-muted-foreground">
              The whole API — endpoints, fields, error codes and the traps that are not in the schema —
              is served as plain text for models to read. Point your agent at it and it can build
              against this API without guessing.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {[`${DOCS_URL}/llms.txt`, `${DOCS_URL}/llms-full.txt`, `${DOCS_URL}/starter-kit.txt`].map(u => (
                <a
                  key={u}
                  href={u}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border bg-card px-2.5 py-1 font-mono text-[11.5px] text-primary transition-colors hover:border-primary/40"
                >
                  {u.replace(`${DOCS_URL}/`, "/")}
                </a>
              ))}
            </div>
            <Link
              href="/docs/build-with-ai"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-[13px] font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <KeyRound className="h-3.5 w-3.5" />
              Get the brief
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
