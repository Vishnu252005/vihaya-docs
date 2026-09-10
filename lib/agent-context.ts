/**
 * The machine-readable handoff: everything a coding agent needs to build a
 * booking front end against this API, in one text blob.
 *
 * ⚠️ EVERY ENDPOINT, FIELD NAME AND STATUS CODE HERE IS DERIVED FROM THE LIVE
 * SPEC, NEVER RETYPED. This is the same rule `lib/api-spec.ts` documents, and
 * it matters more here, not less: a human reading a stale doc notices the API
 * disagreeing with them, whereas an agent handed a stale context will confidently
 * generate code against endpoints that do not exist and call it done. The only
 * prose kept in this file is the part the spec cannot express — the ORDER of
 * calls, and the traps that produce working-looking but wrong integrations.
 *
 * ⚠️ THE HAND-WRITTEN RULES BELOW ARE LOAD-BEARING, NOT DECORATION. Each one
 * exists because it is the failure an agent hits when it only reads the schema:
 * two-step payment looks like one step, `published` looks like a create-time
 * field, and a checkout key looks like it can read the attendee list back.
 */
import { loadSpec, flatten, groupByTag, API_BASE, SPEC_URL, type FlatEndpoint } from './api-spec';

export const DOCS_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.vihaya.app';

/** Where a key comes from. Referenced by both the context bundle and the UI. */
export const KEYS_URL = `${API_BASE}/profile/developer/keys`;

/**
 * The things that are true about this API but are NOT visible in the schema.
 *
 * Keep this list short and keep every entry a *correction* — something an agent
 * would otherwise get wrong. General API advice ("handle errors") dilutes the
 * signal and costs context budget in the consuming model.
 */
export const AGENT_RULES: { title: string; body: string }[] = [
    {
        title: 'Never put the API key in the browser',
        body:
            'The key is a bearer credential scoped to a whole account. Call the Vihaya API from your own server ' +
            '(a route handler, a server action, an edge function) and let the browser talk only to your server. ' +
            'A key pasted into client-side code is readable by every visitor. If you must call from a browser, ' +
            'use a Checkout-only key AND pin it to your origin.',
    },
    {
        title: 'Paying is two calls to the same endpoint, not one',
        body:
            'POST /api/v1/events/{id}/register with the attendee details returns { orderId, registrationId, amount, currency, key } — ' +
            'it does NOT confirm anything yet. Open Razorpay checkout with that orderId, then call the SAME endpoint a ' +
            'second time with exactly { registrationId, orderId, paymentId }. Only the second call confirms. ' +
            'There is no `signature` field on this endpoint — do not send one. ' +
            'A free event confirms on the first call and returns { success, registrationId } instead, so branch on ' +
            'which shape came back rather than assuming.',
    },
    {
        title: 'A paymentId is not proof of payment',
        body:
            'Do not mark anything paid in your own database because you saw a paymentId. The server verifies it against ' +
            'Razorpay and binds it to both the order and the registration before confirming. Treat the second call\'s ' +
            'response as the only source of truth.',
    },
    {
        title: 'A new event is a draft until you publish it',
        body:
            'POST /api/v1/events creates a draft. It is not visible to anyone and cannot take bookings. Publish with ' +
            'PATCH /api/v1/events/{id} sending { status: "published" }. Publishing requires organiser access on the ' +
            'account, so a key that can create may still be refused at publish time with 403.',
    },
    {
        title: 'Tracks are addressed by index, and the index is positional',
        body:
            'A track is edited with PATCH /api/v1/events/{id}/tracks/{index} where index is its position in the array, ' +
            'zero-based. It is not a stable id. Re-read the tracks before patching if anything may have been added or ' +
            'reordered in between.',
    },
    {
        title: 'Pick the smaller key',
        body:
            'A Checkout-only key can read an event, its tracks and seat counts, and can create registrations and take ' +
            'payment. It deliberately CANNOT read attendee names, emails or phones, create or publish events, or email ' +
            'anyone. If you are building a storefront, that is the key you want, and GET /registrations will 403 — ' +
            'which is correct, not a bug to work around.',
    },
    {
        title: 'Money is in the minor unit',
        body:
            'Amounts returned for checkout are in paise for INR. 49900 is ₹499.00. Hand that number to Razorpay unchanged ' +
            'and divide only when displaying.',
    },
    {
        title: 'Check capacity before you show a seat as bookable',
        body:
            'GET /api/v1/events/{id} carries capacity and current counts. Registration can still lose a race and come back ' +
            '4xx if the last seat went while the user was typing, so surface that error rather than assuming success.',
    },
    {
        title: 'The QR code contains the bare registration id — nothing else',
        body:
            'No URL, no JSON, no signature. The ticket QR encodes the registration id as a plain string, e.g. ' +
            '"pNd1m0TRqN8Hx5a1QopI". You therefore do NOT need anything from Vihaya to draw a ticket: encode ' +
            'registrationId with any QR library and it scans in the Vihaya check-in app identically to one we sent. ' +
            'There is NO endpoint that returns a QR image — do not go looking for one, and do not tell a user to wait ' +
            'for one. Get the id from `registrationId` on the register call or the registration.confirmed webhook, or ' +
            '`id` on each row of GET /events/{id}/registrations. Team bookings issue one ticket per member, each with ' +
            'its own id; the webhook carries only the primary.',
    },
    {
        title: 'Webhooks: one event type, configured in the dashboard, never retried',
        body:
            'There is NO /v1/webhooks route — the URL and signing secret are set at /profile/integrations, per organiser ' +
            'account. Exactly ONE event type exists: registration.confirmed. Names like event.created, ' +
            'payment.succeeded, registration.checked_in or booking.confirmed appear in older documentation and DO NOT ' +
            'FIRE. Payloads are signed HMAC-SHA256 (not SHA512) over `${timestamp}.${rawBody}`, with the signature in ' +
            'X-Vihaya-Signature prefixed "sha256=" — strip the prefix before a timing-safe compare, or the buffers are ' +
            'different lengths and it throws. Delivery is best-effort: 5s timeout, no retries, response body never read. ' +
            'A dropped delivery is gone, so reconcile against GET /events/{id}/registrations rather than treating it ' +
            'as a queue.',
    },
    {
        title: 'Ticket emails cannot be templated, but the organiser can send their own',
        body:
            'Vihaya\'s ticket email has fixed branding — there is no template uploader, no per-organiser logo or colour, ' +
            'and the sender is always no-reply@events.vihaya.app. Do not promise anyone a custom template. What they ' +
            'CAN do is send their own: the registration.confirmed webhook carries the attendee and the registrationId, ' +
            'and that id is the QR payload, so the whole ticket can be issued from their own system on their own ' +
            'domain. The one step they cannot self-serve is switching OUR email off — sendTicketEmails is fixed in ' +
            'Firestore rules so an organiser cannot silence their own attendees\' tickets, and support has to flip it. ' +
            'The API accepts sendTicketEmails on event creation but does not write it. Until support acts, the attendee ' +
            'receives BOTH emails. Switching it off does not reduce the platform fee — the delivery slice of the rate ' +
            'is currently 0%.',
    },
];

/** The call order for the things people actually build. */
export const AGENT_RECIPES: { title: string; steps: string[] }[] = [
    {
        title: 'Sell tickets from your own site (headless storefront)',
        steps: [
            'GET /api/v1/events — list what is on sale. Render your own cards.',
            'GET /api/v1/events/{id} — one event: description, capacity, price, and its tracks.',
            'POST /api/v1/events/{id}/register with { name, email, phone, customFields } — free events are done here.',
            'Paid only: open Razorpay with the returned { orderId, amount, currency, key }.',
            'Paid only: POST the same endpoint again with { registrationId, orderId, paymentId } to confirm.',
            'Show your own confirmation. Vihaya emails the ticket and QR itself.',
        ],
    },
    {
        title: 'Run an event you created programmatically',
        steps: [
            'POST /api/v1/events — creates a DRAFT. Keep the returned id.',
            'POST /api/v1/events/{id}/tracks — add each bookable session with its own date, price and capacity.',
            'PATCH /api/v1/events/{id} with { status: "published" } — now it is live and bookable.',
            'GET /api/v1/events/{id}/registrations — who has booked (needs a full-access key).',
            'GET /api/v1/events/{id}/analytics — totals, revenue and turnout.',
            'POST /api/v1/events/{id}/broadcast — email the attendees. You cannot name recipients; you narrow by track or audience.',
        ],
    },
    {
        title: 'Send your own ticket email, with your own template and branding',
        steps: [
            'Set a webhook URL + signing secret at /profile/integrations (dashboard only — there is no /v1/webhooks route).',
            'Verify every delivery: HMAC-SHA256 over `${timestamp}.${rawBody}`, strip the "sha256=" prefix, timing-safe compare, reject a timestamp older than ~5 minutes.',
            'On registration.confirmed, read data.name, data.email, data.eventTitle, data.ticketType and data.quantity — a standard ticket needs no follow-up call.',
            'Render the QR yourself from data.registrationId with any QR library. Same payload as ours, so it scans at the gate.',
            'Send from your own ESP, with your own template and branding. This step does not touch Vihaya.',
            'Ask Vihaya support to set sendTicketEmails=false on the event. You cannot do this yourself, and until it is done the attendee gets two emails.',
            'Backfill anything you missed with GET /api/v1/events/{id}/registrations — webhooks are never retried.',
        ],
    },
];

/** One endpoint as a compact line an LLM can parse without the full schema. */
function endpointLine(ep: FlatEndpoint): string {
    const required = ep.body.filter(b => b.required).map(b => b.name);
    const optional = ep.body.filter(b => !b.required).map(b => b.name);
    const parts = [`${ep.method} ${ep.path}`];
    if (ep.summary) parts.push(`  ${ep.summary}`);
    if (required.length) parts.push(`  required: ${required.join(', ')}`);
    if (optional.length) parts.push(`  optional: ${optional.join(', ')}`);
    if (ep.success) {
        // Some spec descriptions already begin with the status code ("201 { … }"),
        // which would otherwise render as "201: 201 { … }".
        const desc = ep.success.description.replace(new RegExp(`^${ep.success.code}\\s+`), '');
        parts.push(`  ${ep.success.code}: ${desc}`);
    }
    return parts.join('\n');
}

/**
 * The whole handoff as plain text.
 *
 * `compact` drops the per-field detail and keeps the call list — for pasting
 * into a chat window where context is scarce. The full form is what
 * /llms-full.txt serves.
 */
export async function buildAgentContext({ compact = false }: { compact?: boolean } = {}): Promise<string> {
    const { spec, live } = await loadSpec();
    const groups = groupByTag(flatten(spec));

    const L: string[] = [];

    L.push('# Vihaya Events API — context for a coding agent');
    L.push('');
    L.push(`Base URL: ${API_BASE}`);
    L.push(`Auth: send the header  x-api-key: <your key>`);
    L.push(`Get a key: ${KEYS_URL}  (shown once, stored hashed)`);
    L.push(`OpenAPI 3.1: ${SPEC_URL}`);
    L.push(`Human docs: ${DOCS_URL}/docs`);
    if (!live) {
        L.push('');
        L.push('WARNING: the live specification could not be reached while this page was built, so the');
        L.push(`endpoint list below may be incomplete. Fetch ${SPEC_URL} directly before relying on it.`);
    }
    L.push('');
    L.push('This API is the BACKEND for ticketing and registration. You do not build the booking,');
    L.push('payment, ticketing or check-in logic — it already exists. You build the front end and');
    L.push('call these endpoints.');
    L.push('');

    L.push('## Rules that are not in the schema');
    L.push('');
    for (const r of AGENT_RULES) {
        L.push(`### ${r.title}`);
        L.push(r.body);
        L.push('');
    }

    L.push('## Recipes');
    L.push('');
    for (const r of AGENT_RECIPES) {
        L.push(`### ${r.title}`);
        r.steps.forEach((s, i) => L.push(`${i + 1}. ${s}`));
        L.push('');
    }

    L.push('## Endpoints');
    L.push('');
    for (const g of groups) {
        L.push(`### ${g.tag}`);
        for (const ep of g.endpoints) {
            L.push(compact ? `${ep.method} ${ep.path} — ${ep.summary}` : endpointLine(ep));
            L.push('');
        }
    }

    L.push('## Errors');
    L.push('');
    L.push('Every failure returns { error: string } with one of these codes:');
    L.push('400 malformed request — a missing field or a bad date.');
    L.push('401 no x-api-key header, or the key is not recognised.');
    L.push('403 the key is valid but not allowed here — revoked, wrong Origin, not your event,');
    L.push('    or a checkout-only key reaching for attendee data.');
    L.push('404 no such event, or a track index that does not exist.');
    L.push('409 the world changed under you (currently only a broadcast whose audience moved).');
    L.push('413 too many recipients for one broadcast.');
    L.push('429 rate limited — back off and retry.');
    L.push('');

    return L.join('\n');
}
