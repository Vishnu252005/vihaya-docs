export default function EventSettingsPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Payment Settings & Configuration
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Learn how payment processing works in Vihaya using Razorpay. Configure pricing, understand the payment flow, and manage transactions for your events.
      </p>

      <div className="space-y-8 leading-7">
        <div id="overview">
          <h2 className="text-2xl font-semibold mb-4">Payment Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Vihaya uses <strong>Razorpay</strong> as the payment gateway to process all event registration payments securely. 
            Razorpay is a leading payment gateway in India that supports multiple payment methods including credit/debit cards, 
            UPI, net banking, and digital wallets.
          </p>
          <div className="p-5 rounded-lg border bg-primary/5 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> All payments are processed in Indian Rupees (INR) and are handled securely through Razorpay's 
              encrypted payment infrastructure. Vihaya does not store any payment card information.
            </p>
          </div>
        </div>

        <div id="payment-flow">
          <h2 className="text-2xl font-semibold mb-4">How Payment Works</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Here's the complete payment flow when an attendee registers for a paid event:
          </p>
          
          <div className="space-y-4 mt-6">
            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">User Selects Event & Fills Registration Form</h3>
                  <p className="text-sm text-muted-foreground">
                    The attendee fills out the registration form with their details (name, email, phone, etc.) and selects 
                    any additional options like food coupons or accommodation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Price Calculation</h3>
                  <p className="text-sm text-muted-foreground">
                    The system calculates the total amount based on:
                  </p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Base event price or selected special pricing category</li>
                    <li>Food coupon price (if selected)</li>
                    <li>Accommodation price (if selected)</li>
                    <li>Any applicable discount coupons</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Razorpay Payment Gateway Opens</h3>
                  <p className="text-sm text-muted-foreground">
                    When the user clicks "Pay & Register", the Razorpay payment gateway opens with the calculated amount. 
                    The payment form is pre-filled with the user's contact and email information.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">User Completes Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    The user can choose from multiple payment methods:
                  </p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Credit/Debit Cards (Visa, Mastercard, RuPay)</li>
                    <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
                    <li>Net Banking</li>
                    <li>Digital Wallets</li>
                    <li>EMI options (if available)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Payment Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    Razorpay processes the payment and sends a payment ID back to Vihaya. The system verifies the payment 
                    and creates the registration record with payment status marked as "completed".
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Registration Confirmation</h3>
                  <p className="text-sm text-muted-foreground">
                    Upon successful payment, the user receives a confirmation with their registration details, QR code 
                    (if applicable), and transaction ID. The event organizer can see the registration in their dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of Razorpay payment gateway here</p>
          </div>
        </div>

        <div id="pricing-configuration">
          <h2 className="text-2xl font-semibold mb-4">Pricing Configuration</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Configure how much attendees pay for your event:
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Free Events</h3>
              <p className="text-sm text-muted-foreground mb-2">
                For free events, simply set the price to ₹0. Users can register without any payment processing.
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>No payment gateway involved</li>
                <li>Instant registration confirmation</li>
                <li>Perfect for workshops, talks, or community events</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Fixed Price Events</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Set a single price for all attendees. This is the simplest pricing model.
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>One price for everyone</li>
                <li>Easy to manage</li>
                <li>Best for standard events</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Special Pricing Categories</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Create different pricing tiers for different attendee categories. Perfect for membership-based pricing.
              </p>
              <div className="mt-3 p-4 rounded bg-muted/50">
                <p className="text-sm font-medium mb-2">Example Categories:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>IEEE Member:</strong> ₹0 (Free for members)</li>
                  <li>• <strong>Non-IEEE Member:</strong> ₹299</li>
                  <li>• <strong>Student:</strong> ₹199</li>
                  <li>• <strong>Professional:</strong> ₹499</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Users select their category during registration, and the appropriate price is applied automatically.
              </p>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of pricing configuration in event creation form here</p>
          </div>
        </div>

        <div id="additional-charges">
          <h2 className="text-2xl font-semibold mb-4">Additional Charges</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            You can add optional charges on top of the base event price:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Food Coupons</h3>
              <p className="text-sm text-muted-foreground">
                If your event includes meals, you can enable food coupons with a separate price. This amount is added 
                to the base event price during checkout.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Example:</strong> Event (₹299) + Food Coupon (₹100) = Total (₹399)
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Accommodation</h3>
              <p className="text-sm text-muted-foreground">
                For multi-day events, offer accommodation options with separate pricing. Attendees can opt-in during registration.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Example:</strong> Event (₹499) + Accommodation (₹500) = Total (₹999)
              </p>
            </div>
          </div>
        </div>

        <div id="discount-coupons">
          <h2 className="text-2xl font-semibold mb-4">Discount Coupons</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Attendees can apply discount coupons during registration to get a discount on the event price. The discount 
            amount is automatically deducted from the total before payment processing.
          </p>
          <div className="p-5 rounded-lg border bg-card mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Coupon validation happens before payment. If a coupon is invalid or expired, 
              the user will be notified before proceeding to payment.
            </p>
          </div>
        </div>

        <div id="payment-security">
          <h2 className="text-2xl font-semibold mb-4">Payment Security</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Vihaya ensures secure payment processing through Razorpay:
          </p>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">PCI DSS Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Razorpay is PCI DSS Level 1 certified, ensuring the highest level of security for payment processing.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Encrypted Transactions</h3>
              <p className="text-sm text-muted-foreground">
                All payment data is encrypted using industry-standard SSL/TLS encryption during transmission.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">No Card Storage</h3>
              <p className="text-sm text-muted-foreground">
                Vihaya never stores payment card information. All sensitive data is handled directly by Razorpay.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Payment Verification</h3>
              <p className="text-sm text-muted-foreground">
                Each payment is verified using Razorpay's payment ID and signature to ensure authenticity.
              </p>
            </div>
          </div>
        </div>

        <div id="payment-methods">
          <h2 className="text-2xl font-semibold mb-4">Supported Payment Methods</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Razorpay supports a wide range of payment methods that your attendees can use:
          </p>
          <div className="grid gap-3 md:grid-cols-3 mt-4">
            <div className="p-4 rounded-lg border bg-card text-center">
              <div className="text-2xl mb-2">💳</div>
              <h3 className="font-semibold text-sm">Credit/Debit Cards</h3>
              <p className="text-xs text-muted-foreground mt-1">Visa, Mastercard, RuPay</p>
            </div>
            <div className="p-4 rounded-lg border bg-card text-center">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="font-semibold text-sm">UPI</h3>
              <p className="text-xs text-muted-foreground mt-1">Google Pay, PhonePe, Paytm</p>
            </div>
            <div className="p-4 rounded-lg border bg-card text-center">
              <div className="text-2xl mb-2">🏦</div>
              <h3 className="font-semibold text-sm">Net Banking</h3>
              <p className="text-xs text-muted-foreground mt-1">All major banks</p>
            </div>
            <div className="p-4 rounded-lg border bg-card text-center">
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-semibold text-sm">Digital Wallets</h3>
              <p className="text-xs text-muted-foreground mt-1">Paytm, Freecharge, Mobikwik</p>
            </div>
            <div className="p-4 rounded-lg border bg-card text-center">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-sm">EMI</h3>
              <p className="text-xs text-muted-foreground mt-1">Available for eligible cards</p>
            </div>
            <div className="p-4 rounded-lg border bg-card text-center">
              <div className="text-2xl mb-2">🔐</div>
              <h3 className="font-semibold text-sm">Razorpay Wallet</h3>
              <p className="text-xs text-muted-foreground mt-1">Razorpay's own wallet</p>
            </div>
          </div>
        </div>

        <div id="transaction-details">
          <h2 className="text-2xl font-semibold mb-4">Transaction Details</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            After a successful payment, the following information is stored with each registration:
          </p>
          <div className="p-5 rounded-lg border bg-card mt-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Payment ID:</strong> Unique identifier from Razorpay for the transaction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Payment Status:</strong> "completed" for successful payments, "free" for free events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Amount Paid:</strong> Total amount including base price and any additional charges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Transaction Date:</strong> Date and time of the payment</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Organizers can view all transaction details in the event management dashboard and export this information for accounting purposes.
          </p>
        </div>

        <div id="payment-failures">
          <h2 className="text-2xl font-semibold mb-4">Handling Payment Failures</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            If a payment fails, the user will see an error message and can try again. Common reasons for payment failures include:
          </p>
          <div className="space-y-2 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-sm mb-1">Insufficient Funds</h3>
              <p className="text-xs text-muted-foreground">The user's account doesn't have enough balance</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-sm mb-1">Card Declined</h3>
              <p className="text-xs text-muted-foreground">The bank or card issuer declined the transaction</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-sm mb-1">Network Issues</h3>
              <p className="text-xs text-muted-foreground">Temporary connectivity problems</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-sm mb-1">Invalid Payment Details</h3>
              <p className="text-xs text-muted-foreground">Incorrect card number, CVV, or expiry date</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Users can retry the payment immediately or come back later. No registration is created until payment is successful.
          </p>
        </div>

        <div id="refunds">
          <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Refunds for event registrations are processed through Razorpay. To issue a refund:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4 text-muted-foreground">
            <li className="leading-relaxed">Access the event management dashboard</li>
            <li className="leading-relaxed">Find the registration you want to refund</li>
            <li className="leading-relaxed">Use Razorpay's dashboard or API to process the refund</li>
            <li className="leading-relaxed">Update the registration status in Vihaya</li>
          </ol>
          <div className="p-5 rounded-lg border bg-primary/5 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Refund processing times depend on the payment method used. UPI and wallet refunds 
              are typically instant, while card refunds may take 5-7 business days.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg border bg-primary/5">
          <h3 className="font-semibold mb-2">Best Practices</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Test your payment flow with a small amount before launching large events</li>
            <li>Clearly communicate pricing and any additional charges to attendees</li>
            <li>Set up special pricing categories early to avoid confusion</li>
            <li>Monitor payment failures and provide support to users experiencing issues</li>
            <li>Keep transaction records for accounting and tax purposes</li>
            <li>Consider offering early-bird pricing to incentivize early registrations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
