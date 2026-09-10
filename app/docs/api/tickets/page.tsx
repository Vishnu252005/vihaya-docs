import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { Code } from "@/components/ApiBits";

export const metadata: Metadata = genMeta({
  title: "Tickets & QR codes",
  description:
    "What the Vihaya Events QR code contains, how to render your own, and how to send ticket emails from your own domain with your own template.",
  path: "/docs/api/tickets",
  keywords: [
    "vihaya qr code",
    "custom ticket email",
    "own email template",
    "registration id",
    "render qr code",
  ],
});

export default function TicketsPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-accent-ink text-sm font-medium mb-4">API Reference</div>
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">Tickets &amp; QR codes</h1>
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        What is inside the QR, and how to issue tickets that look like yours rather than ours.
      </p>

      <div className="space-y-8 leading-7">
        {/* ── QR payload ───────────────────────────────────────── */}
        <div>
          <h2 id="qr-payload" className="text-2xl font-semibold mb-4">What is in the QR code</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The bare registration id, as a plain string — for example{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">pNd1m0TRqN8Hx5a1QopI</code>.
            No URL, no JSON, no signature. Just the id.
          </p>
          <div className="rounded-lg border border-accent-ink/25 bg-accent-ink/[0.06] px-4 py-3">
            <p className="text-sm leading-relaxed">
              <strong>So you never need an endpoint from us to draw a ticket.</strong> The moment you
              have the registration id you have the entire payload, and you can render the QR
              yourself at any size, in any format, inside your own ticket design. There is no
              endpoint that returns a QR image, and there does not need to be.
            </p>
          </div>
        </div>

        {/* ── where to get it ──────────────────────────────────── */}
        <div>
          <h2 id="getting-the-id" className="text-2xl font-semibold mb-4">Where to get the id</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">registrationId</code>{" "}
              from <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">POST /events/{"{id}"}/register</code>
            </li>
            <li>
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">registrationId</code>{" "}
              from the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">registration.confirmed</code> webhook
            </li>
            <li>
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">id</code> on each row of{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">GET /events/{"{id}"}/registrations</code>
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/[0.07] px-4 py-3">
            <p className="text-sm leading-relaxed">
              <strong>Team bookings issue one ticket per member, each with its own id.</strong> The
              webhook carries the primary registration id — pull the roster to get each member&rsquo;s.
            </p>
          </div>
        </div>

        {/* ── rendering ────────────────────────────────────────── */}
        <div>
          <h2 id="rendering" className="text-2xl font-semibold mb-4">Rendering it</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Any QR library will do. This is exactly what our own mailer runs, so a code you draw
            this way scans in the Vihaya check-in app identically to one we sent.
          </p>
          <Code filename="render-qr.js">{`import QRCode from 'qrcode';

const png = await QRCode.toBuffer(registrationId, {
  type: 'png', width: 480, margin: 1, errorCorrectionLevel: 'M',
});`}</Code>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The scanner additionally parses{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">{`{"eventId":"…","registrationId":"…"}`}</code>{" "}
            if you would rather encode JSON. A bare id is what Vihaya itself emits.
          </p>
        </div>

        {/* ── bring your own email ─────────────────────────────── */}
        <div>
          <h2 id="own-email" className="text-2xl font-semibold mb-4">Sending your own ticket email</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Vihaya&rsquo;s ticket email is not customisable — there is no template uploader and no
            per-organiser branding. You do not have to use it. Everything needed to send your own
            already crosses the wire, so it becomes your template, your domain and your sender
            reputation.
          </p>
          <ol className="space-y-4 text-muted-foreground list-decimal pl-5 marker:font-semibold marker:text-foreground">
            <li>
              <strong className="text-foreground">Point a webhook at your server.</strong> Set the
              URL and secret in the dashboard, then verify the signature on every delivery — see{" "}
              <a href="/docs/api/webhooks" className="text-accent-ink underline underline-offset-4">Webhooks</a>.
            </li>
            <li>
              <strong className="text-foreground">Read the attendee off the payload.</strong>{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">name</code>,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">email</code>,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">eventTitle</code>,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">ticketType</code> and{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">quantity</code>{" "}
              are all in <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">data</code>.
              A standard ticket needs no follow-up call.
            </li>
            <li>
              <strong className="text-foreground">Render the QR yourself</strong> from{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">data.registrationId</code>, as above.
            </li>
            <li>
              <strong className="text-foreground">Send from your own domain.</strong> Your ESP, your
              template, your branding. Nothing in this step touches Vihaya.
            </li>
            <li>
              <strong className="text-foreground">Ask support to switch ours off.</strong> This is
              the one step you cannot self-serve:{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">sendTicketEmails</code>{" "}
              is fixed in Firestore rules so an organiser cannot silence their own attendees&rsquo;
              tickets by accident. Until support flips it, the attendee receives both emails.
            </li>
          </ol>
          <div className="mt-5 rounded-lg border border-amber-500/30 bg-amber-500/[0.07] px-4 py-3">
            <p className="text-sm leading-relaxed">
              <strong>Switching our delivery off does not reduce your platform fee.</strong> The
              delivery slice of the rate is currently 0% — the published rate and the platform&rsquo;s
              own rate are the same number — so there is nothing to give back. Do not plan around a
              discount.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
