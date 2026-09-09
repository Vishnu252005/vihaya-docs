/**
 * /llms-full.txt — the whole handoff in one fetch.
 *
 * This is the URL to hand a coding agent. It is built from the live OpenAPI
 * spec at request time (revalidated hourly), so it describes the API that is
 * actually running rather than a copy someone remembered to update.
 */
import { buildAgentContext } from '@/lib/agent-context';

export const revalidate = 3600;

export async function GET() {
    const body = await buildAgentContext();
    return new Response(body, {
        headers: {
            'content-type': 'text/plain; charset=utf-8',
            'cache-control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
