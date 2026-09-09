import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { API_BASE, SPEC_URL } from "@/lib/api-spec";
import { DOCS_URL, KEYS_URL, AGENT_RULES, AGENT_RECIPES } from "@/lib/agent-context";
import { STARTER_FILES } from "@/lib/starter-kit";
import { PromptCard, CopyBlock, StarterBrowser } from "@/components/BuildWithAI";
import { Bot, FileText, Package, ShieldAlert, ArrowRight, Terminal } from "lucide-react";

export const metadata: Metadata = genMeta({
  title: "Build with AI",
  description:
    "Hand the Vihaya Events API to a coding agent. A copy-paste brief, a machine-readable context bundle at /llms-full.txt, and a working Next.js booking storefront you can clone.",
  path: "/docs/build-with-ai",
  keywords: [
    "vihaya events ai", "build booking site with ai", "llms.txt", "claude code ticketing",
    "event booking api starter", "headless ticketing nextjs",
  ],
});

/**
 * The brief.
 *
 * ⚠️ IT POINTS AT URLS RATHER THAN INLINING THE API. A pasted brief is a
 * snapshot; a fetched one is current. Telling the agent to read /llms-full.txt
 * first is what stops it generating code against endpoints it half-remembers
 * from training data — which for a ticketing API means a plausible-looking
 * checkout that silently never confirms.
 */
const BRIEF = `Build a ticket-booking website using the Vihaya Events API as the backend.

Before writing any code, fetch and read these:
  ${DOCS_URL}/llms-full.txt   — every endpoint, field, error code, and the traps that are not in the schema
  ${DOCS_URL}/starter-kit.txt — a working Next.js storefront you may copy from

Non-negotiables:
1. The Vihaya API key is server-side only. It goes in .env.local as VIHAYA_API_KEY with no
   NEXT_PUBLIC_ prefix, and is read only inside route handlers or server components. The browser
   must never see it. If you are about to put it in a client component, stop.
2. Paid registration is TWO calls to POST /api/v1/events/{id}/register. The first returns
   { orderId, registrationId, amount, currency, key }; you then open Razorpay with those; then you
   call the SAME endpoint again with exactly { registrationId, orderId, paymentId }. Do not send a
   signature field — the endpoint has none. Only the second call confirms.
3. A free event confirms on the FIRST call and returns { success, registrationId } instead. Branch
   on which shape came back, not on what you think the price is.
4. amount is already in the minor unit (paise for INR). Pass it to Razorpay unchanged.
5. Do not build ticketing, QR codes, check-in or emails. Vihaya already does all of that and emails
   the ticket itself. Build the storefront and call the API.

What I want:
- A listing page of published events.
- An event detail page with description, date, venue and remaining capacity.
- A booking form that handles both the free and the paid path, and shows real errors
  (sold out, validation, payment cancelled) rather than a generic failure.
- A confirmation state that tells the user their ticket has been emailed.

Stack: Next.js App Router + TypeScript. Ask me before adding any other dependency.`;

const AGENT_URLS = [
  { url: `${DOCS_URL}/llms.txt`, label: "Site index", note: "The short map. What exists and where." },
  { url: `${DOCS_URL}/llms-full.txt`, label: "Full API context", note: "Endpoints, fields, errors, gotchas. Built from the live spec." },
  { url: `${DOCS_URL}/starter-kit.txt`, label: "Starter source", note: "The whole booking storefront as one file." },
  { url: SPEC_URL, label: "OpenAPI 3.1", note: "Generated from the routes themselves." },
];

export default function BuildWithAIPage() {
  return (
    <div className="max-w-none">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/[0.07] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
          <Bot className="h-3 w-3" /> For coding agents
        </span>
      </div>

      <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight">Build with AI</h1>
      <p className="mb-8 text-lg font-normal leading-relaxed text-muted-foreground">
        Give your team&apos;s coding agent this page and it can build a working booking site on the
        Vihaya API. Ticketing, payment, QR codes and check-in already exist — the agent only has to
        build your front end and call us.
      </p>

      <div className="space-y-10 leading-7">
        {/* ---------------------------------------------------------------- */}
        <section>
          <h2 id="the-brief" className="mb-4 text-2xl font-semibold">1. Copy the brief</h2>
          <p className="mb-1 leading-relaxed text-muted-foreground">
            This is written to be pasted whole. It points the agent at the machine-readable context
            rather than inlining it, so the agent reads the API as it is today instead of trusting
            what it remembers.
          </p>
          <PromptCard prompt={BRIEF} />
          <p className="text-[13.5px] text-muted-foreground">
            You will need a key first —{" "}
            <a href={KEYS_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
              create one in the developer portal
            </a>
            . A <strong className="text-foreground">Checkout only</strong> key is enough for a
            storefront and cannot read your attendee list. See{" "}
            <Link href="/docs/api/authentication" className="text-primary underline underline-offset-2">Authentication</Link>.
          </p>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section>
          <h2 id="agent-urls" className="mb-4 text-2xl font-semibold">2. URLs an agent can fetch</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            All four are plain text, generated at build time from the running API. Nothing here is
            retyped by hand, so nothing here can quietly fall behind the service.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {AGENT_URLS.map(u => (
              <a
                key={u.url}
                href={u.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-primary" />
                  <span className="text-[13px] font-semibold">{u.label}</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="mb-2 text-[12.5px] leading-snug text-muted-foreground">{u.note}</p>
                <code className="block truncate font-mono text-[11px] text-primary">{u.url}</code>
              </a>
            ))}
          </div>
          <p className="mt-4 text-[13.5px] text-muted-foreground">
            Working in a terminal? Pipe the context straight in:
          </p>
          <CopyBlock filename="terminal">{`curl -s ${DOCS_URL}/llms-full.txt`}</CopyBlock>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section>
          <h2 id="rules" className="mb-4 text-2xl font-semibold">3. What agents get wrong</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            These are in the context bundle too, so you do not have to relay them — but they are the
            things worth reviewing in whatever your agent produces.
          </p>
          <div className="space-y-3">
            {AGENT_RULES.map(r => (
              <div key={r.title} className="rounded-xl border bg-card p-4">
                <p className="mb-1.5 flex items-start gap-2 text-[14px] font-semibold">
                  <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {r.title}
                </p>
                <p className="pl-6 text-[13.5px] leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section>
          <h2 id="starter" className="mb-4 text-2xl font-semibold">4. The starter</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            A complete Next.js booking storefront: listing, event page, and a checkout that handles
            the free path and the paid two-step path. Seven files. The key stays on the server in all
            of them.
          </p>
          <StarterBrowser files={STARTER_FILES} />
          <div className="rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-3 text-[13.5px]">
            <p className="mb-1 font-semibold text-primary">Hand it over in one line</p>
            <p className="text-muted-foreground">
              Rather than copying each file, point the agent at{" "}
              <code className="font-mono text-[12.5px]">{DOCS_URL}/starter-kit.txt</code> — the same
              seven files as a single document, each with its path.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section>
          <h2 id="flows" className="mb-4 text-2xl font-semibold">5. The two call orders</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Almost everything people build is one of these. The endpoint list is at{" "}
            <Link href="/docs/api/endpoints" className="text-primary underline underline-offset-2">Endpoints</Link>.
          </p>
          <div className="grid gap-4 lg:grid-cols-2">
            {AGENT_RECIPES.map(r => (
              <div key={r.title} className="rounded-xl border bg-card p-5">
                <p className="mb-3 flex items-center gap-2 text-[14px] font-semibold">
                  <Terminal className="h-4 w-4 text-primary" />
                  {r.title}
                </p>
                <ol className="space-y-2">
                  {r.steps.map((s, i) => (
                    <li key={s} className="flex gap-2.5 text-[13px] leading-relaxed text-muted-foreground">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/12 font-mono text-[10px] font-bold text-primary">
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section>
          <h2 id="sdks" className="mb-4 text-2xl font-semibold">6. Prefer an SDK?</h2>
          <p className="leading-relaxed text-muted-foreground">
            Official clients exist for seven languages and wrap the read and register calls. They do
            not cover event management — that is REST only. See{" "}
            <Link href="/docs/api/sdks" className="text-primary underline underline-offset-2">SDKs</Link>{" "}
            for what each one actually implements before you tell an agent to use one.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["JavaScript", "Python", "PHP", "Ruby", "Go", "Java", "Flutter"].map(l => (
              <span key={l} className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-2.5 py-1 text-[12.5px] text-muted-foreground">
                <Package className="h-3 w-3" /> {l}
              </span>
            ))}
          </div>
        </section>

        <p className="border-t pt-6 text-[13.5px] text-muted-foreground">
          Base URL <code className="font-mono text-[12.5px] text-foreground">{API_BASE}</code>. Every
          request carries{" "}
          <code className="font-mono text-[12.5px] text-foreground">x-api-key</code>. If something on
          this page disagrees with{" "}
          <a href={SPEC_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">the spec</a>,
          the spec is right — tell us and we will fix the page.
        </p>
      </div>
    </div>
  );
}
