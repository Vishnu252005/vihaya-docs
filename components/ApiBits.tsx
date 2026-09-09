/**
 * Presentational pieces for the API Reference section.
 *
 * ⚠️ SERVER COMPONENTS. Every endpoint, field name and status code must be in
 * the SSR HTML — this section exists to be read by people with no account and
 * by crawlers, and the whole reason the old developer docs were useless is that
 * they were client-rendered behind a login.
 */
import type { FlatEndpoint } from '@/lib/api-spec';

const METHOD_TONE: Record<string, string> = {
    GET: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/25',
    POST: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25',
    PATCH: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25',
    DELETE: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/25',
};

export function MethodChip({ method }: { method: string }) {
    return (
        <span className={`shrink-0 rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold ${METHOD_TONE[method] ?? METHOD_TONE.GET}`}>
            {method}
        </span>
    );
}

export function Code({ children, filename }: { children: string; filename?: string }) {
    return (
        <div className="not-prose my-4 overflow-hidden rounded-xl border bg-[#0b0f14]">
            {filename && (
                <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
                    <span className="font-mono text-[11px] text-white/60">{filename}</span>
                </div>
            )}
            {/* Wide code scrolls inside its own box — the page must never scroll sideways. */}
            <pre className="overflow-x-auto px-4 py-3.5">
                <code className="font-mono text-[12.5px] leading-relaxed text-[#d7dde5]">{children}</code>
            </pre>
        </div>
    );
}

export function EndpointCard({ ep }: { ep: FlatEndpoint }) {
    return (
        <article className="overflow-hidden rounded-xl border bg-card">
            <div className="flex flex-wrap items-center gap-2.5 border-b bg-muted/40 px-4 py-3">
                <MethodChip method={ep.method} />
                <code className="font-mono text-[13.5px]">{ep.path}</code>
                <span className="ml-auto text-[13px] text-muted-foreground">{ep.summary}</span>
            </div>
            <div className="space-y-4 px-4 py-4">
                {ep.description.split('\n\n').map((para, i) => (
                    <p key={i} className={`text-[14.5px] leading-relaxed ${para.startsWith('**Note:**') ? 'rounded-lg border border-amber-500/25 bg-amber-500/[0.07] px-3 py-2 text-amber-900 dark:text-amber-100/85' : 'text-muted-foreground'}`}>
                        {para.replace('**Note:** ', '')}
                    </p>
                ))}
                {ep.body.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[520px] border-collapse text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="pb-2 pr-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Field</th>
                                    <th className="pb-2 pr-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Type</th>
                                    <th className="pb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ep.body.map(f => (
                                    <tr key={f.name} className="border-b last:border-0">
                                        <td className="py-2 pr-4 align-top">
                                            <code className="font-mono text-[12.5px] text-primary">{f.name}</code>
                                            {f.required && <span className="ml-1.5 text-[10px] font-bold uppercase text-amber-700 dark:text-amber-400">req</span>}
                                        </td>
                                        <td className="py-2 pr-4 align-top font-mono text-[12px] text-muted-foreground">{f.type}</td>
                                        <td className="py-2 align-top text-[13px] text-muted-foreground">{f.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {ep.success && (
                    <div>
                        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Returns · {ep.success.code}</p>
                        <code className="block overflow-x-auto rounded-lg border bg-[#0b0f14] px-3 py-2 font-mono text-[12.5px] text-[#d7dde5]">
                            {ep.success.description}
                        </code>
                    </div>
                )}
            </div>
        </article>
    );
}

/** Shown only when the live spec could not be reached — a visible failure
 *  rather than a stale copy silently shipping as though it were current. */
export function SpecUnavailable() {
    return (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.07] px-4 py-3 text-[14px] text-amber-900 dark:text-amber-100/85">
            The live API specification could not be reached when this page was built, so the endpoint
            list below may be incomplete. The authoritative source is{' '}
            <a href="https://events.vihaya.app/api/v1/openapi.json" className="underline underline-offset-2">
                events.vihaya.app/api/v1/openapi.json
            </a>.
        </div>
    );
}
