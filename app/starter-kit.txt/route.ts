/**
 * /starter-kit.txt — the booking storefront as one fetchable document.
 *
 * An agent that can fetch a URL should be pointed here rather than asked to
 * copy seven files out of a web page by hand.
 */
import { starterAsText } from '@/lib/starter-kit';

export const dynamic = 'force-static';

export function GET() {
    return new Response(starterAsText(), {
        headers: {
            'content-type': 'text/plain; charset=utf-8',
            'cache-control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
