import Link from "next/link";
import { CreditCard, ShieldCheck, DollarSign, Percent, RefreshCcw, Info, Zap } from "lucide-react";

export default function PaymentPricingPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">Event Management</div>
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Payment & Pricing
      </h1>
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Understand how payments are processed in Vihaya, configure pricing, and manage transactions with Razorpay.
      </p>

      <div className="space-y-8 leading-7">
        <div id="payment-overview">
          <h2 className="text-2xl font-semibold mb-4">Payment Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Vihaya integrates seamlessly with <strong>Razorpay</strong>, a leading payment gateway, to provide a secure and efficient payment experience for your event registrations. This section guides you through setting up and managing all payment-related aspects of your events.
          </p>
          <div className="p-4 rounded-lg border bg-blue-100/20 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 flex items-start gap-3">
            <Info className="h-5 w-5 flex-shrink-0 mt-1" />
            <p className="text-sm">
              All payment processing is handled by Razorpay, ensuring industry-standard security and compliance. Vihaya does not store sensitive payment information.
            </p>
          </div>
          <div className="relative h-64 w-full rounded-lg border bg-muted/20 flex items-center justify-center text-muted-foreground mt-6">
            📸 Screenshot Placeholder: Payment Overview in Dashboard
          </div>
        </div>

        <div id="how-payment-works">
          <h2 className="text-2xl font-semibold mb-4">How Payment Works: Step-by-Step Flow</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            When an attendee registers for a paid event, the following process occurs:
          </p>
          <ol className="list-decimal list-inside space-y-4 ml-4 text-muted-foreground">
            <li>
              <strong>Registration Form Submission:</strong> The user fills out the event registration form.
            </li>
            <li>
              <strong>Price Calculation:</strong> The system calculates the total amount based on event price, special pricing, food coupons, and accommodation.
            </li>
            <li>
              <strong>Coupon Application:</strong> If a valid discount coupon is applied, the discount is deducted from the total.
            </li>
            <li>
              <strong>Initiate Razorpay:</strong> The user is redirected to the secure Razorpay payment gateway.
            </li>
            <li>
              <strong>Payment Processing:</strong> The user completes the payment using their preferred method (cards, UPI, net banking, etc.).
            </li>
            <li>
              <strong>Confirmation & Registration:</strong> Upon successful payment, Razorpay notifies Vihaya, and the user's registration is confirmed and recorded.
            </li>
          </ol>
          <div className="relative h-64 w-full rounded-lg border bg-muted/20 flex items-center justify-center text-muted-foreground mt-6">
            📸 Screenshot Placeholder: Razorpay Payment Gateway Interface
          </div>
        </div>

        <div id="pricing-configuration">
          <h2 className="text-2xl font-semibold mb-4">Pricing Configuration</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Vihaya offers flexible pricing options for your events:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>
              <strong>Free Events:</strong> Simply mark your event as "Free" during creation. No payment gateway interaction is required.
            </li>
            <li>
              <strong>Fixed Price Events:</strong> Set a single price for all attendees.
            </li>
            <li>
              <strong>Special Pricing Categories:</strong> Define multiple pricing tiers based on attendee types (e.g., "IEEE Member: ₹299", "Non-IEEE Member: ₹499"). Attendees select their applicable category during registration.
            </li>
          </ul>
          <div className="relative h-48 w-full rounded-lg border bg-muted/20 flex items-center justify-center text-muted-foreground mt-6">
            📸 Screenshot Placeholder: Pricing Configuration in Event Creation Form
          </div>
        </div>

        <div id="additional-charges">
          <h2 className="text-2xl font-semibold mb-4">Additional Charges</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            You can add optional charges to your event registration:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>
              <strong>Food Coupons:</strong> If enabled, attendees can opt to purchase food coupons. You set the price per coupon.
            </li>
            <li>
              <strong>Accommodation:</strong> If accommodation is offered, you can specify its price, which will be added to the total registration cost.
            </li>
          </ul>
          <div className="relative h-48 w-full rounded-lg border bg-muted/20 flex items-center justify-center text-muted-foreground mt-6">
            📸 Screenshot Placeholder: Food Coupon and Accommodation Pricing
          </div>
        </div>

        <div id="discount-coupons">
          <h2 className="text-2xl font-semibold mb-4">Discount Coupons</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Offer discounts to your attendees using coupon codes.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>
              <strong>Creation:</strong> Coupons are created and managed separately (e.g., in a dedicated "Coupons Management" section, if available).
            </li>
            <li>
              <strong>Application:</strong> Attendees enter the coupon code on the registration form, and the discount is applied instantly if valid.
            </li>
            <li>
              <strong>Validation:</strong> Coupons can be configured for single-use, multi-use, percentage-based, or fixed amount discounts.
            </li>
          </ul>
          <div className="relative h-48 w-full rounded-lg border bg-muted/20 flex items-center justify-center text-muted-foreground mt-6">
            📸 Screenshot Placeholder: Coupon Application Field on Registration Form
          </div>
        </div>

        <div id="payment-security">
          <h2 className="text-2xl font-semibold mb-4">Payment Security</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Security is paramount for online payments. Vihaya leverages Razorpay's robust security features:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>
              <strong>PCI DSS Compliance:</strong> Razorpay is PCI DSS Level 1 compliant, ensuring the highest standards for card data security.
            </li>
            <li>
              <strong>Encryption:</strong> All transactions are encrypted using strong cryptographic protocols.
            </li>
            <li>
              <strong>No Card Storage:</strong> Vihaya does not store any credit card or sensitive payment information on its servers.
            </li>
            <li>
              <strong>Fraud Detection:</strong> Razorpay employs advanced fraud detection mechanisms to protect against malicious activities.
            </li>
          </ul>
        </div>

        <div id="supported-payment-methods">
          <h2 className="text-2xl font-semibold mb-4">Supported Payment Methods</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Attendees can pay using a wide range of methods supported by Razorpay:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>Credit & Debit Cards (Visa, Mastercard, RuPay, Amex, Diners)</li>
            <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
            <li>Net Banking (all major Indian banks)</li>
            <li>Digital Wallets (Paytm, Mobikwik, Freecharge, OlaMoney, JioMoney, Airtel Money)</li>
            <li>EMI options</li>
            <li>Razorpay Wallet</li>
          </ul>
        </div>

        <div id="transaction-details">
          <h2 className="text-2xl font-semibold mb-4">Transaction Details</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            For each successful payment, Vihaya records key transaction details:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li><strong>Payment ID:</strong> Unique identifier from Razorpay.</li>
            <li><strong>Payment Status:</strong> (e.g., "completed", "pending", "failed").</li>
            <li><strong>Amount:</strong> The final amount paid.</li>
            <li><strong>Transaction Date:</strong> When the payment was made.</li>
          </ul>
          <div className="relative h-48 w-full rounded-lg border bg-muted/20 flex items-center justify-center text-muted-foreground mt-6">
            📸 Screenshot Placeholder: Transaction Details in Admin Panel
          </div>
        </div>

        <div id="handling-payment-failures">
          <h2 className="text-2xl font-semibold mb-4">Handling Payment Failures</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            In case of a payment failure, users are typically informed by Razorpay. Common reasons include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>Incorrect payment details (card number, expiry, CVV)</li>
            <li>Bank server issues</li>
            <li>Insufficient funds</li>
            <li>Network connectivity problems</li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Users can usually retry the payment or choose an alternative method.
          </p>
        </div>

        <div id="refunds">
          <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            If an event is cancelled or a refund is necessary, you can initiate it through the Vihaya admin panel (or directly via Razorpay dashboard).
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li><strong>Initiation:</strong> Refunds can be processed for individual registrations.</li>
            <li><strong>Processing Time:</strong> Refunds typically take 5-7 business days to reflect in the attendee's account, depending on their bank.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

