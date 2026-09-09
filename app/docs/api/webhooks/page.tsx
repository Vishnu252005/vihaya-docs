import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { Code } from "@/components/ApiBits";

export const metadata: Metadata = genMeta({
  title: "Webhooks",
  description: "Receive signed callbacks when a Vihaya Events registration is confirmed, and verify the HMAC signature.",
  path: "/docs/api/webhooks",
  keywords: ["vihaya webhooks", "registration.confirmed", "hmac signature", "event webhook"],
});

export default function WebhooksPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-accent-ink text-sm font-medium mb-4">API Reference</div>
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">Webhooks</h1>
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Set a webhook URL in your dashboard and we POST to it when something happens, so your own
        system stays in sync without polling.
      </p>

      <div className="space-y-8 leading-7">
        <div>
          <h2 id="events" className="text-2xl font-semibold mb-4">Events</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Today there is one: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">registration.confirmed</code>,
            fired the moment a booking is confirmed and its ticket issued.
          </p>
          <Code filename="registration.confirmed">{`{
  "type":      "registration.confirmed",
  "createdAt": "2027-09-01T10:04:11.760Z",
  "data": {
    "registrationId": "…",  "eventId":    "…",   "eventTitle": "…",
    "name":           "…",  "email":      "…",   "phone":      "…",
    "ticketType":     "…",  "subEventId": "…",   "quantity":   1,
    "amountPaid":     0,    "currency":   "INR", "paymentStatus": "…"
  }
}`}</Code>
        </div>

        <div>
          <h2 id="verifying" className="text-2xl font-semibold mb-4">Verifying the signature</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            We sign the exact bytes we send. Recompute the HMAC over the raw body and compare in
            constant time.
          </p>
          <Code filename="verify-webhook.js">{`// Headers we send:
//   X-Vihaya-Signature: sha256=<hex>     <-- note the prefix
//   X-Vihaya-Timestamp: <unix milliseconds>

const timestamp = req.headers['x-vihaya-timestamp'];
const header    = req.headers['x-vihaya-signature'];

// The signature is prefixed. Strip it before comparing, or the two buffers
// are different lengths and timingSafeEqual throws.
const signature = String(header).replace(/^sha256=/, '');

const expected = crypto
  .createHmac('sha256', WEBHOOK_SECRET)
  .update(\`\${timestamp}.\${rawBody}\`)   // raw body, before JSON.parse
  .digest('hex');

if (signature.length !== expected.length ||
    !crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) {
  return res.status(401).end();
}

// Reject an old timestamp too — that is what makes a captured
// delivery non-replayable.
if (Date.now() - Number(timestamp) > 5 * 60 * 1000) return res.status(401).end();`}</Code>
        </div>

        <div>
          <h2 id="delivery" className="text-2xl font-semibold mb-4">Delivery behaviour</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>The timestamp is inside the signed payload, so a captured delivery cannot be replayed.</li>
            <li>We wait at most 5 seconds for your endpoint and never retry into a hanging server.</li>
            <li><strong className="text-foreground">A failing webhook never blocks a registration.</strong> The attendee still gets their ticket.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
