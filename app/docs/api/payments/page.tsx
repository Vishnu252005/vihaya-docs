import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { API_BASE } from "@/lib/api-spec";
import { Code } from "@/components/ApiBits";

export const metadata: Metadata = genMeta({
  title: "Taking payment",
  description: "Take registrations and payments from your own front end. The two-call headless flow, Razorpay handoff, and where the money settles.",
  path: "/docs/api/payments",
  keywords: ["headless ticketing", "razorpay events api", "event payment api", "registration payment flow"],
});

export default function PaymentsPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">API Reference</div>
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Taking payment from your own front end
      </h1>
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        A free event is one call and confirms immediately. A paid event is two, because the payment
        itself has to happen in the buyer&apos;s browser.
      </p>

      <div className="space-y-8 leading-7">
        <div>
          <h2 id="step-1" className="text-2xl font-semibold mb-4">1. Post the attendee — we return an order</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            A pending registration is filed on our side with the attendee&apos;s answers intact, and
            you get back everything Razorpay Checkout needs.
          </p>
          <Code filename="step-1">{`POST ${API_BASE}/api/v1/events/{eventId}/register
{ "name": "Asha Menon", "email": "asha@example.com", "phone": "+919000000000" }

→ 200
{
  "orderId":        "order_TZud2hMOtfhq9f",
  "registrationId": "pNd1m0TRqN8Hx5a1QopI",
  "amount":         25000,            // paise
  "currency":       "INR",
  "key":            "rzp_live_..."    // public key — safe in a browser
}`}</Code>
        </div>

        <div>
          <h2 id="step-2" className="text-2xl font-semibold mb-4">2. Confirm after checkout</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Your front end opens Razorpay Checkout with that key and order id. On success Razorpay
            hands you a payment id — post it back and the ticket is issued.
          </p>
          <Code filename="step-2">{`POST ${API_BASE}/api/v1/events/{eventId}/register
{
  "registrationId": "pNd1m0TRqN8Hx5a1QopI",
  "orderId":        "order_TZud2hMOtfhq9f",
  "paymentId":      "pay_XXXXXXXXXXXX"
}

→ confirmed. Ticket + QR issued.`}</Code>
          <div className="rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-3 text-[13.5px]">
            A <code className="font-mono">paymentId</code> alone is never proof of payment. We verify
            it against Razorpay and bind it to both the order and the registration before anything is
            confirmed — a forged id is refused and the registration stays pending.
          </div>
        </div>

        <div>
          <h2 id="settlement" className="text-2xl font-semibold mb-4">Where the money goes</h2>
          {/* ⚠️ Said plainly and early. A client will ask this at settlement
              rather than at signup if the page does not answer it. */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.07] px-4 py-3 text-[14px] text-amber-900 dark:text-amber-100/85">
            Payments are collected into <strong>Vihaya&apos;s Razorpay account, not yours</strong>.
            The organiser requests a payout from the dashboard and funds land by UPI in about two
            working days. If you need funds settling directly to your own account, talk to us before
            you build — that is a different integration.
          </div>
        </div>

        <div>
          <h2 id="free-events" className="text-2xl font-semibold mb-4">Free events</h2>
          <p className="text-muted-foreground leading-relaxed">
            Omit the payment fields entirely. One call, confirmed immediately, ticket issued. There
            is no second step and no Razorpay involvement.
          </p>
        </div>
      </div>
    </div>
  );
}
