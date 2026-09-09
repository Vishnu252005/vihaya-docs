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
      <div className="text-primary text-sm font-medium mb-4">API Reference</div>
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
