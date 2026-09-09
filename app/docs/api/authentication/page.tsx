import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { API_BASE } from "@/lib/api-spec";
import { Code } from "@/components/ApiBits";

export const metadata: Metadata = genMeta({
  title: "Authentication",
  description: "How Vihaya Events API keys work — scoping, origin pinning, revocation, and the organiser gate on publishing.",
  path: "/docs/api/authentication",
  keywords: ["vihaya api key", "x-api-key", "api authentication", "event api security"],
});

export default function AuthPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-accent-ink text-sm font-medium mb-4">API Reference</div>
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">Authentication</h1>
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        One header, one account. There is no OAuth and no user-delegated flow.
      </p>

      <div className="space-y-8 leading-7">
        <Code filename="auth.sh">{`curl ${API_BASE}/api/v1/events \\
  -H "x-api-key: $VIHAYA_API_KEY"`}</Code>

        <div>
          <h2 id="how-keys-work" className="text-2xl font-semibold mb-4">How keys work</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li><strong className="text-foreground">Scoped to one account.</strong> A key can only ever see the events its own account owns. No uid or email is read from a request body, so there is nothing to widen.</li>
            <li><strong className="text-foreground">Revocation is immediate.</strong> A revoked key returns 403 on the very next call.</li>
            <li><strong className="text-foreground">Origin pinning is optional.</strong> Restrict a key to your own domains and a browser request from anywhere else is refused. Server-to-server calls send no <code className="font-mono">Origin</code> and are unaffected.</li>
            <li><strong className="text-foreground">Stored hashed.</strong> We cannot show you a key again — rotate it instead.</li>
          </ul>
        </div>

        <div>
          <h2 id="key-types" className="text-2xl font-semibold mb-4">Two kinds of key — pick the smaller one</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            When you create a key you choose what it can do. If you are building a checkout into
            your own product, take the <strong>Checkout only</strong> key.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-primary/25 bg-primary/[0.06] p-4">
              <p className="mb-1 font-semibold text-primary">Checkout only</p>
              <p className="mb-3 text-[13px] text-muted-foreground">For a client integration.</p>
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">Can</p>
              <ul className="mb-3 space-y-1 text-[13px] text-muted-foreground">
                <li>Read an event and its tracks</li>
                <li>Create registrations and take payment</li>
                <li>Read seat counts and capacity</li>
              </ul>
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Cannot</p>
              <ul className="space-y-1 text-[13px] text-muted-foreground">
                <li>Read attendee names, emails or phones</li>
                <li>Create, edit or publish events</li>
                <li>Email attendees</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-4">
              <p className="mb-1 font-semibold">Full access</p>
              <p className="mb-3 text-[13px] text-muted-foreground">For your own dashboards and scripts.</p>
              <p className="text-[13px] text-muted-foreground">
                Everything above, plus attendee lists, event management and broadcasts. Treat it
                like a password — it can read every attendee you have, so it should not live in a
                third party&apos;s codebase.
              </p>
            </div>
          </div>
          {/* ⚠️ Say WHY, not just WHICH. A developer who understands the reason
              picks correctly on the next integration too. */}
          <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/[0.07] px-4 py-3 text-[13.5px] text-amber-900 dark:text-amber-100/85">
            A key you give to someone else ends up in their codebase, their CI and their error
            logs. A checkout key means a leak costs spam registrations rather than your whole
            attendee list. A refused call returns <strong>403</strong> naming the scope.
          </div>
        </div>

        <div>
          <h2 id="publishing" className="text-2xl font-semibold mb-4">Publishing needs organiser access</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Creating, editing and reading all work immediately. <strong>Publishing</strong> requires
            the account to have been granted organiser access. Check{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">canPublish</code> on{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">/api/v1/me</code> first —
            without it a publish returns 403 while everything else keeps working.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Unpublishing is never blocked. Taking a broken event down must never depend on a
            permission check.
          </p>
        </div>
      </div>
    </div>
  );
}
