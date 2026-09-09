import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { API_BASE, API_ROOT_NOTE, SDKS } from "@/lib/api-spec-const";
import { Code } from "@/components/ApiBits";

export const metadata: Metadata = genMeta({
  title: "API Reference",
  description:
    "Build on Vihaya Events. A REST API for creating events, taking registrations and collecting payments from your own front end, with official SDKs for seven languages.",
  path: "/docs/api",
  keywords: ["vihaya events api", "event ticketing api", "headless ticketing", "registration api", "razorpay events api"],
});

export default function ApiIndexPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-accent-ink text-sm font-medium mb-4">API Reference</div>

      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Run ticketing from your own product
      </h1>

      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Keep your own front end, your own branding and your own checkout. Vihaya handles the
        tickets, QR codes, gate scanning and payouts behind it.
      </p>

      <div className="space-y-8 leading-7">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Base URL", `${API_BASE}/api/v1`],
            ["Auth", "x-api-key header"],
            ["Format", "JSON in, JSON out"],
            ["SDKs", `${SDKS.length} languages`],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border bg-card px-4 py-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent-ink">{k}</div>
              <div className="mt-1.5 truncate font-mono text-[12.5px]">{v}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 id="your-first-call" className="text-2xl font-semibold mb-4">Your first call</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Create a key at <strong>Developer → API keys</strong> in your Vihaya dashboard. It is
            shown once and stored hashed. Send it as <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">x-api-key</code> on
            every request, then call <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">/me</code> to
            confirm which account it belongs to.
          </p>
          <Code filename="first-call.sh">{`curl ${API_BASE}/api/v1/me \\
  -H "x-api-key: $VIHAYA_API_KEY"`}</Code>
        </div>

        <div>
          <h2 id="creating-an-event" className="text-2xl font-semibold mb-4">Creating an event</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            An event is <strong>always created as a draft</strong>. It has no public page and cannot
            sell until you publish it, so there is no way to accidentally put a half-filled page in
            front of ticket buyers.
          </p>
          <Code filename="create-event.sh">{`curl -X POST ${API_BASE}/api/v1/events \\
  -H "x-api-key: $VIHAYA_API_KEY" \\
  -H "content-type: application/json" \\
  -d '{
    "title": "TechFest 2027",
    "description": "Two days of workshops and talks.",
    "startDate": "2027-03-01",
    "location": "Kollam",
    "capacity": 300,
    "price": 250
  }'`}</Code>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.07] px-4 py-3 text-[13.5px] text-amber-900 dark:text-amber-100/85">
            The date field is <code className="font-mono">startDate</code>, not{" "}
            <code className="font-mono">date</code>. The response echoes both, which misleads on a
            second read.
          </div>
        </div>

        <div>
          <h2 id="where-to-next" className="text-2xl font-semibold mb-4">Where to next</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Authentication", "How keys work, origin pinning, revocation and the publish gate.", "/docs/api/authentication"],
              ["Taking payment", "The two-call headless flow, and where the money actually settles.", "/docs/api/payments"],
              ["Endpoints", "Every endpoint, generated from the live specification.", "/docs/api/endpoints"],
              ["SDKs", "Seven official libraries, and what they do and do not wrap.", "/docs/api/sdks"],
              ["Webhooks", "Keep your own system in sync, with signature verification.", "/docs/api/webhooks"],
            ].map(([t, d, href]) => (
              <Link key={href} href={href} className="rounded-xl border bg-card p-4 transition-colors hover:border-primary/40">
                <div className="font-semibold">{t}</div>
                <div className="mt-1 text-[13.5px] text-muted-foreground">{d}</div>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-[13.5px] text-muted-foreground">{API_ROOT_NOTE}</p>
      </div>
    </div>
  );
}
