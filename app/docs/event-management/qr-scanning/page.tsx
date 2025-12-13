import Image from "next/image";

export default function QRScanningPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        QR Scanning and Check-In
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Learn how to use QR codes for event check-in and food coupon verification. Understand the ticketing system, how QR codes are generated, and how to scan them efficiently during your event.
      </p>

      <div className="space-y-8 leading-7">
        <div id="overview">
          <h2 id="overview" className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Vihaya uses QR codes for two main purposes: <strong>event ticket verification (check-in)</strong> and <strong>food coupon verification</strong>. 
            Each registered attendee receives unique QR codes that can be scanned at the event venue for instant verification.
          </p>
          <div className="p-5 rounded-lg border bg-primary/5 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> QR codes are automatically generated upon successful registration and are accessible immediately after payment (for paid events) or registration (for free events).
            </p>
          </div>
        </div>

        <div id="ticket-system">
          <h2 id="ticketing-system" className="text-2xl font-semibold mb-4">Ticketing System</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Vihaya automatically generates digital tickets for all event registrations. Each ticket includes a unique QR code that serves as proof of registration.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event Registration Ticket</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Every registered attendee receives an event ticket with:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Unique Registration ID:</strong> A unique identifier for the registration</li>
                <li><strong>QR Code:</strong> Contains the registration ID for quick scanning</li>
                <li><strong>Event Information:</strong> Event title, date, and location</li>
                <li><strong>Attendee Details:</strong> Name, email, phone, and other registration information</li>
                <li><strong>Payment Status:</strong> Shows if payment is completed (for paid events)</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                This ticket is used for event entry verification (check-in).
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Food Coupon Ticket</h3>
              <p className="text-sm text-muted-foreground mb-3">
                If food coupons are enabled for the event, attendees who purchase food coupons receive a separate ticket:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Unique Food Coupon ID:</strong> Starts with "FC" followed by a unique identifier</li>
                <li><strong>QR Code:</strong> Contains the food coupon ID for verification</li>
                <li><strong>Event Information:</strong> Event title and details</li>
                <li><strong>Coupon Price:</strong> Amount paid for the food coupon (can be free)</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                This ticket is used for food coupon redemption at the event.
              </p>
            </div>
          </div>

          <div className="my-6 grid gap-6 md:grid-cols-2">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/events/event-ticket-qr.png"
                alt="Event ticket showing QR code, registration ID, event details, and attendee information"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/events/food-coupon-qr.png"
                alt="Food coupon ticket showing QR code, coupon ID, event details, and redemption instructions"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="accessing-tickets">
          <h2 id="accessing-your-tickets" className="text-2xl font-semibold mb-4">Accessing Your Tickets</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Attendees can access their tickets in several ways:
          </p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">From Event Details Page</h3>
              <p className="text-sm text-muted-foreground">
                After registering, click "View Tickets" on the event details page to see all your tickets (event ticket and food coupon ticket if applicable).
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">From Profile</h3>
              <p className="text-sm text-muted-foreground">
                Navigate to your profile and view registered events. Click on any event to access your tickets.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Share Tickets</h3>
              <p className="text-sm text-muted-foreground">
                Tickets can be shared via the share button. QR codes can be saved as images and shared through any messaging app or email.
              </p>
            </div>
          </div>
        </div>

        <div id="event-check-in">
          <h2 id="event-check-in-ticket-verification" className="text-2xl font-semibold mb-4">Event Check-In (Ticket Verification)</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Event check-in is the process of verifying that an attendee has registered for the event. This is done by scanning the event registration ticket QR code.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">How Check-In Works</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside ml-4">
                <li className="leading-relaxed">Organizer opens the event management page and navigates to the check-in/verification section</li>
                <li className="leading-relaxed">Attendee presents their event ticket QR code (on phone or printed)</li>
                <li className="leading-relaxed">Organizer scans the QR code using the mobile app or web interface</li>
                <li className="leading-relaxed">System verifies the registration ID against the event's registration database</li>
                <li className="leading-relaxed">If valid and not already checked in, the ticket is marked as verified</li>
                <li className="leading-relaxed">Attendee receives confirmation and can enter the event</li>
              </ol>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Check-In Features</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Duplicate Prevention:</strong> System prevents checking in the same ticket twice</li>
                <li><strong>Real-time Verification:</strong> Instant verification against the registration database</li>
                <li><strong>Attendee Information:</strong> Shows attendee name and details upon successful scan</li>
                <li><strong>Verification Timestamp:</strong> Records when the ticket was verified</li>
                <li><strong>Status Updates:</strong> Check-in status updates immediately across all devices</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Manual Check-In</h3>
              <p className="text-sm text-muted-foreground">
                If QR scanning is not possible, organizers can manually search for attendees by name, email, or registration ID and mark them as checked in.
              </p>
            </div>
          </div>

          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/events/event-check-in-scanning.png"
                alt="Event check-in QR code scanning interface showing scan QR code prompt"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="food-coupon-verification">
          <h2 id="food-coupon-verification" className="text-2xl font-semibold mb-4">Food Coupon Verification</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Food coupon verification is a separate process from event check-in. It's used to verify that an attendee has purchased a food coupon and can redeem it at the food counter.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">How Food Coupon Verification Works</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside ml-4">
                <li className="leading-relaxed">Organizer opens the Food Coupon Verification screen from the event management page</li>
                <li className="leading-relaxed">Attendee presents their food coupon QR code at the food counter</li>
                <li className="leading-relaxed">Organizer scans the QR code using the mobile scanner</li>
                <li className="leading-relaxed">System verifies the food coupon ID against the event's registrations</li>
                <li className="leading-relaxed">Checks if the coupon has already been used</li>
                <li className="leading-relaxed">If valid and unused, marks the coupon as verified and used</li>
                <li className="leading-relaxed">Attendee can redeem their food</li>
              </ol>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Food Coupon Features</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>One-Time Use:</strong> Each food coupon can only be verified once</li>
                <li><strong>Usage Tracking:</strong> System tracks when and where the coupon was used</li>
                <li><strong>Attendee Information:</strong> Shows attendee name and details upon verification</li>
                <li><strong>Already Used Detection:</strong> Prevents duplicate redemptions</li>
                <li><strong>Manual Entry:</strong> Can manually enter coupon ID if QR scanning fails</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Food Coupon Statistics</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The verification screen shows real-time statistics:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Total food coupons purchased</li>
                <li>Number of coupons verified/used</li>
                <li>Number of coupons remaining</li>
                <li>Total revenue from food coupons</li>
              </ul>
            </div>
          </div>

          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/events/food-coupon-verification-scanning.png"
                alt="Food coupon verification showing registered user with verified status and food coupon verified status"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="p-4 rounded-lg border bg-green-500/10 border-green-500/20 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-green-700 dark:text-green-400">✓ Verification Status:</strong> After successful verification, the registration shows a "VERIFIED" status badge and the food coupon status displays as "Verified" with a green checkmark. This confirms that both the event ticket and food coupon have been successfully scanned and verified.
            </p>
          </div>
        </div>

        <div id="qr-scanning-methods">
          <h2 id="qr-scanning-methods" className="text-2xl font-semibold mb-4">QR Scanning Methods</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Vihaya supports multiple methods for scanning QR codes:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Mobile App Scanner</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Use the built-in QR scanner in the Vihaya mobile app. This is the fastest and most convenient method.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Real-time camera scanning</li>
                <li>Automatic detection</li>
                <li>Works offline (verification happens when connected)</li>
                <li>Best for on-site verification</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Web Interface Scanner</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Use the web interface with a device camera for scanning. Perfect for desktop or laptop setups.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Browser-based camera access</li>
                <li>Works on any device with a camera</li>
                <li>Good for registration desks</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Manual Entry</h3>
              <p className="text-sm text-muted-foreground mb-2">
                If QR scanning is not possible, you can manually enter the ticket ID or coupon ID.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Type in the registration ID or coupon ID</li>
                <li>Same verification process</li>
                <li>Useful when camera is unavailable</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Dedicated Scanning Devices</h3>
              <p className="text-sm text-muted-foreground mb-2">
                You can use dedicated QR scanning hardware devices that output the scanned code, which can then be entered manually.
              </p>
            </div>
          </div>
        </div>

        <div id="qr-code-format">
          <h2 id="qr-code-format-structure" className="text-2xl font-semibold mb-4">QR Code Format & Structure</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Understanding the QR code structure helps with troubleshooting:
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event Registration Ticket QR Code</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Contains the registration document ID from Firestore. This is a unique identifier that links directly to the registration record.
              </p>
              <div className="p-3 rounded bg-muted/50 text-xs text-muted-foreground mt-2">
                <strong>Format:</strong> Registration Document ID (e.g., "abc123xyz456")
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Food Coupon QR Code</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Contains structured data including the food coupon ID, event ID, event title, and user ID. The coupon ID starts with "FC" followed by a unique identifier.
              </p>
              <div className="p-3 rounded bg-muted/50 text-xs text-muted-foreground mt-2">
                <strong>Format:</strong> Food Coupon ID (e.g., "FC12345678") or structured JSON data
              </div>
            </div>
          </div>
        </div>

        <div id="verification-process">
          <h2 id="verification-process-details" className="text-2xl font-semibold mb-4">Verification Process Details</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Here's what happens behind the scenes when you scan a QR code:
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Step 1: QR Code Detection</h3>
              <p className="text-sm text-muted-foreground">
                The scanner detects the QR code and extracts the data. The system automatically determines if it's an event ticket or food coupon based on the format.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Step 2: Database Lookup</h3>
              <p className="text-sm text-muted-foreground">
                The system searches the event's registration database for a matching registration ID or food coupon ID.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Step 3: Validation Checks</h3>
              <p className="text-sm text-muted-foreground mb-2">The system performs several validation checks:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Verifies the registration/coupon exists for this event</li>
                <li>Checks if it has already been verified (prevents duplicates)</li>
                <li>Validates the registration is for the correct event</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Step 4: Verification & Update</h3>
              <p className="text-sm text-muted-foreground">
                If all checks pass, the system marks the ticket/coupon as verified, records a timestamp, and displays confirmation with attendee information.
              </p>
            </div>
          </div>
        </div>

        <div id="verification-status">
          <h2 id="verification-status" className="text-2xl font-semibold mb-4">Verification Status</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Each ticket and coupon has a verification status that can be tracked:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Event Ticket Status</h3>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside mt-2">
                <li><strong>Not Verified:</strong> Ticket has not been scanned yet</li>
                <li><strong>Verified:</strong> Ticket has been successfully checked in</li>
                <li><strong>Verification Timestamp:</strong> Records when check-in occurred</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Food Coupon Status</h3>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside mt-2">
                <li><strong>Not Used:</strong> Coupon has not been verified/redeemed</li>
                <li><strong>Used:</strong> Coupon has been verified and redeemed</li>
                <li><strong>Used Timestamp:</strong> Records when coupon was redeemed</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="error-handling">
          <h2 id="error-handling" className="text-2xl font-semibold mb-4">Error Handling</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Common issues and how the system handles them:
          </p>

          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-sm mb-1">Invalid QR Code</h3>
              <p className="text-xs text-muted-foreground">
                If the QR code doesn't match the expected format, the system shows an error message: "Invalid QR code format. Please scan a valid ticket or food coupon."
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-sm mb-1">Ticket Not Found</h3>
              <p className="text-xs text-muted-foreground">
                If the registration ID or coupon ID doesn't exist in the database, the system shows: "QR code not recognized. Please scan a valid ticket or food coupon."
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-sm mb-1">Already Verified</h3>
              <p className="text-xs text-muted-foreground">
                If a ticket or coupon has already been verified, the system shows: "Ticket already verified" or "Food coupon already used" to prevent duplicate verification.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-sm mb-1">Network Issues</h3>
              <p className="text-xs text-muted-foreground">
                If there's a network error during verification, the system displays an error message and allows retry.
              </p>
            </div>
          </div>
        </div>

        <div id="best-practices">
          <h2 id="best-practices-for-event-day" className="text-2xl font-semibold mb-4">Best Practices for Event Day</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Tips for smooth check-in and food coupon verification:
          </p>

          <div className="p-6 rounded-lg border bg-primary/5">
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li className="leading-relaxed"><strong>Test Before Event:</strong> Test the QR scanning functionality before the event day to ensure everything works</li>
              <li className="leading-relaxed"><strong>Multiple Devices:</strong> Have multiple devices ready for scanning to handle high traffic</li>
              <li className="leading-relaxed"><strong>Good Lighting:</strong> Ensure good lighting for QR code scanning, especially for printed tickets</li>
              <li className="leading-relaxed"><strong>Backup Method:</strong> Always have manual entry as a backup if scanning fails</li>
              <li className="leading-relaxed"><strong>Separate Stations:</strong> Consider separate check-in and food coupon verification stations for better flow</li>
              <li className="leading-relaxed"><strong>Staff Training:</strong> Train staff on how to use the scanning interface and handle common issues</li>
              <li className="leading-relaxed"><strong>Internet Connection:</strong> Ensure stable internet connection for real-time verification</li>
              <li className="leading-relaxed"><strong>Clear Instructions:</strong> Provide clear instructions to attendees about where to show their tickets</li>
            </ul>
          </div>
        </div>

        <div id="ticket-sharing">
          <h2 id="sharing-tickets" className="text-2xl font-semibold mb-4">Sharing Tickets</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Attendees can share their tickets in multiple ways:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Share QR Code Image</h3>
              <p className="text-xs text-muted-foreground">
                QR codes can be saved as images and shared via messaging apps, email, or social media. The recipient can use the image for scanning.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Share Ticket Details</h3>
              <p className="text-xs text-muted-foreground">
                The share button allows sharing ticket information including the registration ID, which can be manually entered if needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
