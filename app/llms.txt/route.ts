/**
 * /llms.txt — the short index an agent reads first.
 *
 * Convention (llmstxt.org): a map of the site in Markdown, small enough to sit
 * in a prompt, pointing at the big documents rather than inlining them. The
 * full bundle lives at /llms-full.txt; this file exists so a model that only
 * fetched one URL still learns the two facts that matter — where the key goes
 * and where the machine-readable spec is.
 */
import { API_BASE, SPEC_URL } from '@/lib/api-spec';
import { DOCS_URL, KEYS_URL } from '@/lib/agent-context';
import { DOC_PAGES } from '@/lib/docs-registry';

export const revalidate = 3600;

export async function GET() {
    const byGroup = new Map<string, typeof DOC_PAGES>();
    for (const p of DOC_PAGES) {
        if (!byGroup.has(p.group)) byGroup.set(p.group, []);
        byGroup.get(p.group)!.push(p);
    }

    const L: string[] = [];
    L.push('# Vihaya Events');
    L.push('');
    L.push('> Ticketing and registration infrastructure for events. The API is the backend for');
    L.push('> booking, payment, ticketing and check-in — you build the front end and call it.');
    L.push('');
    L.push(`- API base URL: ${API_BASE}`);
    L.push('- Auth: `x-api-key: <your key>` header on every request');
    L.push(`- Get a key: ${KEYS_URL}`);
    L.push('');
    L.push('## Start here');
    L.push('');
    L.push(`- [Full API context for coding agents](${DOCS_URL}/llms-full.txt): every endpoint, field, error code and the traps that are not in the schema. Fetch this one if you are writing code.`);
    L.push(`- [OpenAPI 3.1 specification](${SPEC_URL}): generated from the route definitions, so it cannot fall behind the running API.`);
    L.push(`- [Build with AI](${DOCS_URL}/docs/build-with-ai): a copy-paste brief for handing this API to a coding agent.`);
    L.push('');

    for (const [group, pages] of byGroup) {
        L.push(`## ${group}`);
        L.push('');
        for (const p of pages) {
            L.push(`- [${p.title}](${DOCS_URL}${p.href}): ${p.summary}`);
        }
        L.push('');
    }

    return new Response(L.join('\n'), {
        headers: {
            'content-type': 'text/plain; charset=utf-8',
            'cache-control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
