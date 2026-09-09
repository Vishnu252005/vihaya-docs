import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { loadSpec, flatten, groupByTag, SPEC_URL } from "@/lib/api-spec";
import { EndpointCard, SpecUnavailable } from "@/components/ApiBits";

export const metadata: Metadata = genMeta({
  title: "Endpoints",
  description: "Every Vihaya Events API endpoint — events, tracks, registrations, analytics and broadcast — with exact field names and status codes.",
  path: "/docs/api/endpoints",
  keywords: ["vihaya events endpoints", "event api reference", "registration endpoint", "tracks api"],
});

// The spec is force-static upstream and only moves on a deploy.
export const revalidate = 3600;

export default async function EndpointsPage() {
  const { spec, live } = await loadSpec();
  const groups = groupByTag(flatten(spec));

  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">API Reference</div>
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">Endpoints</h1>
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Generated from the live specification, so this page cannot fall behind the running API.
      </p>

      <div className="space-y-8 leading-7">
        {!live && <SpecUnavailable />}

        {groups.map(g => (
          <div key={g.tag}>
            <h2 id={g.tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="text-2xl font-semibold mb-4">
              {g.tag}
            </h2>
            <div className="space-y-4">
              {g.endpoints.map(ep => <EndpointCard key={ep.method + ep.path} ep={ep} />)}
            </div>
          </div>
        ))}

        <p className="text-[13.5px] text-muted-foreground">
          Machine-readable source:{" "}
          <a href={SPEC_URL} className="text-primary underline underline-offset-2">{SPEC_URL}</a>.
          Import it into Postman, Insomnia or any OpenAPI 3.1 tool.
        </p>
      </div>
    </div>
  );
}
