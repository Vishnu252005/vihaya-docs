import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { SDKS, SDK_COVERAGE, SDK_VERIFIED } from "@/lib/api-spec";
import { Code } from "@/components/ApiBits";

export const metadata: Metadata = genMeta({
  title: "SDKs",
  description: "Official Vihaya Events SDKs for JavaScript, Python, PHP, Ruby, Go, Java and Flutter — install lines, usage and exactly what they wrap.",
  path: "/docs/api/sdks",
  keywords: ["vihaya sdk", "vihaya-sdk npm", "vihaya events python", "event ticketing sdk"],
});

export default function SdksPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-accent-ink text-sm font-medium mb-4">API Reference</div>
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Official SDKs — {SDKS.length} languages
      </h1>
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        All seven wrap the same calls against the same base URL, so the shape is identical whichever
        you pick.
      </p>

      <div className="space-y-8 leading-7">
        {/* ⚠️ Stated up front, not buried: a client reaching for a method that
            does not exist is the exact failure this section prevents. */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-primary/25 bg-primary/[0.06] p-4">
            <p className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-accent-ink">Wrapped by the SDKs</p>
            <ul className="space-y-1.5">
              {SDK_COVERAGE.covered.map(c => (
                <li key={c.call} className="text-[13px]">
                  <code className="font-mono text-primary">{c.call}</code>
                  <span className="text-muted-foreground"> → {c.maps}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <p className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Use REST directly for</p>
            <ul className="space-y-1.5">
              {SDK_COVERAGE.notCovered.map(c => <li key={c} className="text-[13px] text-muted-foreground">{c}</li>)}
            </ul>
          </div>
        </div>

        {SDKS.map(sdk => (
          <div key={sdk.lang}>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <h2 id={sdk.lang.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="text-2xl font-semibold">
                {sdk.lang}
              </h2>
              {/* ⚠️ Only the four that were installed from their registry and
                  driven against production carry this. Badging the other three
                  would be the unverified assertion this rewrite exists to
                  remove — they are published and follow the same shape, but
                  three of the four tested were broken, so "same shape" is not
                  evidence. */}
              {SDK_VERIFIED.includes(sdk.lang) ? (
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-ink">
                  Verified against the live API
                </span>
              ) : (
                <span className="rounded-full border bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  Published, not yet driven end to end
                </span>
              )}
            </div>
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border bg-card px-4 py-3">
              <code className="font-mono text-[13px] text-accent-ink">{sdk.install}</code>
              <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                v{sdk.version.replace(/^v/, "")}
              </span>
              <span className="ml-auto flex items-center gap-3">
                <a href={sdk.registry} target="_blank" rel="noopener noreferrer" className="text-[12.5px] font-medium text-primary underline-offset-2 hover:underline">Registry</a>
                <a href={sdk.repo} target="_blank" rel="noopener noreferrer" className="text-[12.5px] font-medium text-primary underline-offset-2 hover:underline">Source</a>
              </span>
            </div>
            <Code filename={sdk.pkg}>{sdk.snippet}</Code>
          </div>
        ))}
      </div>
    </div>
  );
}
