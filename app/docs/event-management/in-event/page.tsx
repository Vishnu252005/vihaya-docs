export default function InEventPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        In-Event Features
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Comprehensive guide to managing your event in real-time. Access live registration data, verify attendees, monitor analytics, and handle all event operations seamlessly during the event.
      </p>

      <div className="space-y-8 leading-7">
        <div id="overview">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The In-Event Features provide organizers with a comprehensive dashboard to manage events in real-time. 
            All data updates automatically using real-time database streams, ensuring you always have the latest information at your fingertips.
          </p>
          <div className="p-5 rounded-lg border bg-primary/5 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Real-Time Updates:</strong> All registration data, analytics, and statistics update automatically without refreshing the page. 
              This ensures you always see the current state of your event.
            </p>
          </div>
        </div>

        <div id="event-dashboard">
          <h2 className="text-2xl font-semibold mb-4">Event Dashboard</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The event dashboard is your central command center during the event. It provides a comprehensive overview of all event activities.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event Summary Header</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The header displays essential event information at a glance:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Event title and description</li>
                <li>Event status (Draft, Published, Archived)</li>
                <li>Location and date/time</li>
                <li>Creator information</li>
                <li>Total registration count (updates in real-time)</li>
                <li>Creation timestamp</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Quick Actions</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Quick access buttons for common tasks:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Scan QR Code:</strong> Open the QR scanner for ticket and food coupon verification</li>
                <li><strong>Download Report:</strong> Export event data as PDF or Excel for offline use</li>
              </ul>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of event dashboard here</p>
          </div>
        </div>

        <div id="real-time-analytics">
          <h2 className="text-2xl font-semibold mb-4">Real-Time Analytics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Monitor your event's performance with live analytics that update automatically as registrations come in.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Total Revenue</h3>
              <p className="text-xs text-muted-foreground">
                Sum of all successful payments from registrations, food coupons, and accommodation. Updates in real-time.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Total Registrations</h3>
              <p className="text-xs text-muted-foreground">
                Current count of all registered attendees. Includes both paid and free registrations.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Average Ticket Price</h3>
              <p className="text-xs text-muted-foreground">
                Calculated average of all paid registrations. Helps understand pricing effectiveness.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Pending Payments</h3>
              <p className="text-xs text-muted-foreground">
                Number of registrations with incomplete or pending payment status.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Analytics Features</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li>All metrics update automatically without page refresh</li>
              <li>Color-coded status indicators for quick visual assessment</li>
              <li>Responsive layout that adapts to screen size</li>
              <li>Historical data tracking for comparison</li>
            </ul>
          </div>
        </div>

        <div id="qr-code-scanning">
          <h2 className="text-2xl font-semibold mb-4">QR Code Scanning</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Quickly verify event tickets and food coupons using the built-in QR scanner. This is essential for check-in and food redemption during the event.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Accessing the Scanner</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Click the "Scan QR Code" button from the event dashboard to open the mobile scanner interface.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Uses device camera for real-time scanning</li>
                <li>Automatically detects and processes QR codes</li>
                <li>Works for both event tickets and food coupons</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Ticket Verification</h3>
              <p className="text-sm text-muted-foreground mb-2">
                When scanning an event ticket QR code:
              </p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside ml-4">
                <li>System identifies the registration ID from the QR code</li>
                <li>Verifies the registration exists for this event</li>
                <li>Checks if ticket has already been verified (prevents duplicates)</li>
                <li>Marks ticket as verified with timestamp</li>
                <li>Displays attendee name and confirmation message</li>
              </ol>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Food Coupon Verification</h3>
              <p className="text-sm text-muted-foreground mb-2">
                When scanning a food coupon QR code:
              </p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside ml-4">
                <li>System identifies the food coupon ID (starts with "FC")</li>
                <li>Verifies the coupon belongs to this event</li>
                <li>Checks if coupon has already been used</li>
                <li>Marks coupon as verified and used with timestamp</li>
                <li>Displays attendee name and confirmation</li>
              </ol>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Verification Status</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The system provides clear feedback for all scenarios:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Success:</strong> Green confirmation with attendee name</li>
                <li><strong>Already Verified:</strong> Orange warning if ticket/coupon was already scanned</li>
                <li><strong>Not Found:</strong> Error message if QR code doesn't match any registration</li>
                <li><strong>Wrong Event:</strong> Error if QR code is for a different event</li>
              </ul>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of QR scanner interface here</p>
          </div>
        </div>

        <div id="registration-management">
          <h2 className="text-2xl font-semibold mb-4">Registration Management</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            View, search, and manage all event registrations in real-time. The registration list updates automatically as new registrations come in.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Registration List</h3>
              <p className="text-sm text-muted-foreground mb-2">
                View all registered attendees with comprehensive information:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Attendee name, email, and phone number</li>
                <li>Registration date and time</li>
                <li>Payment status (Paid, Free, Pending)</li>
                <li>Ticket verification status</li>
                <li>Food coupon status (if applicable)</li>
                <li>Team information (for team events)</li>
                <li>Registration ID</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Search Functionality</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Quickly find specific registrations using the search bar:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Search by name (full or partial match)</li>
                <li>Search by email address</li>
                <li>Search by phone number</li>
                <li>Search by registration ID</li>
                <li>Real-time filtering as you type</li>
                <li>Clear search button for quick reset</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Registration Details</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Click on any registration to view expanded details:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Complete personal information</li>
                <li>Payment details and transaction ID</li>
                <li>Verification timestamps</li>
                <li>Food coupon information and QR code</li>
                <li>Team member details (for team events)</li>
                <li>Registration metadata</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Registration Count</h3>
              <p className="text-sm text-muted-foreground">
                The header shows the current registration count, which updates in real-time. 
                When searching, it displays "X/Y" format showing filtered count vs total count.
              </p>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of registration management section here</p>
          </div>
        </div>

        <div id="sub-events-management">
          <h2 className="text-2xl font-semibold mb-4">Sub-Events Management</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            For parent events with multiple sub-events, manage each sub-event individually with dedicated analytics and registration tracking.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Sub-Event Cards</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Each sub-event is displayed as a card showing:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Sub-event title and description</li>
                <li>Status (Draft, Published, Archived)</li>
                <li>Date and time range</li>
                <li>Price (or "Free")</li>
                <li>Registration count</li>
                <li>Type (Talk Session, Workshop, Competition, etc.)</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Sub-Event Details</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Click on a sub-event card to view comprehensive details:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Complete sub-event information</li>
                <li>Enabled features (Team Event, Special Pricing, Accommodation, Food Coupons, etc.)</li>
                <li>Registration launch countdown (if enabled)</li>
                <li>Sub-event specific registrations</li>
                <li>Individual analytics for the sub-event</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Access Control</h3>
              <p className="text-sm text-muted-foreground">
                Sub-events support granular access control. Organizers can authorize specific emails to manage individual sub-events, 
                allowing for distributed event management while maintaining security.
              </p>
            </div>
          </div>
        </div>

        <div id="financial-overview">
          <h2 className="text-2xl font-semibold mb-4">Financial Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Track all financial aspects of your event with real-time revenue and payment tracking.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Financial Metrics</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li><strong>Total Revenue:</strong> Sum of all successful payments (event registration + food coupons + accommodation)</li>
              <li><strong>Average Ticket Price:</strong> Calculated average of paid registrations</li>
              <li><strong>Pending Payments:</strong> Count of registrations with incomplete payments</li>
              <li><strong>Free Registrations:</strong> Number of free event registrations</li>
              <li><strong>Paid Registrations:</strong> Number of successful paid registrations</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Payment Tracking</h3>
            <p className="text-sm text-muted-foreground">
              Each registration shows its payment status, allowing you to track which attendees have completed payment and which are pending. 
              This helps with follow-up and reconciliation during and after the event.
            </p>
          </div>
        </div>

        <div id="report-download">
          <h2 className="text-2xl font-semibold mb-4">Report Download</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Export comprehensive event data for offline use, accounting, or analysis. Choose between PDF or Excel (CSV) formats based on your needs.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">How to Download Reports</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside ml-4">
                <li>Navigate to the event management detail page</li>
                <li>Click the "Download Report" button in the quick actions section</li>
                <li>Choose your preferred format:
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li><strong>PDF:</strong> For formatted documents, printing, or sharing</li>
                    <li><strong>Excel (CSV):</strong> For data analysis in spreadsheet applications</li>
                  </ul>
                </li>
                <li>The report will be generated and downloaded automatically</li>
              </ol>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">PDF Report Format</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The PDF report is a professionally formatted document that includes:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Executive Summary:</strong> Total registrations, revenue, unique colleges, and departments</li>
                <li><strong>Event Details:</strong> Complete event information including status, type, date, location, price, and creator</li>
                <li><strong>Sub-Event Overview:</strong> Table showing all sub-events with their status, registrations, and prices</li>
                <li><strong>Registration Details Table:</strong> Comprehensive list of all registrations with:
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Name, Email, Phone, College, Department, Year</li>
                    <li>Registration ID, Payment Amount, Payment Status</li>
                    <li>Registered Date, Team Name (if applicable)</li>
                    <li>Accommodation and Food Coupon status</li>
                  </ul>
                </li>
                <li><strong>Financial Summary:</strong> Total revenue breakdown and payment statistics</li>
                <li><strong>Page Headers/Footers:</strong> Event title and page numbers</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Excel/CSV Report Format</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The CSV (Comma-Separated Values) file is perfect for data analysis and includes:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Header Row:</strong> Column names for easy identification</li>
                <li><strong>Registration Data:</strong> Each row contains one registration with the following columns:
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Name, Email, Phone, College, Department, Year</li>
                    <li>Registration ID, Payment Amount, Payment Status</li>
                    <li>Registered At (formatted date/time), Team Name</li>
                    <li>Accommodation (Yes/No), Food Coupon (Yes/No)</li>
                  </ul>
                </li>
                <li><strong>File Naming:</strong> Automatically named as <code className="text-xs bg-muted px-1 py-0.5 rounded">EventTitle_registrations_YYYYMMDD.csv</code></li>
                <li><strong>Compatibility:</strong> Opens in Excel, Google Sheets, and any spreadsheet application</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Report Contents</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Both formats include comprehensive data:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Event summary and complete details</li>
                <li>All registration information with full attendee details</li>
                <li>Payment information including transaction IDs and payment status</li>
                <li>Verification status for tickets and food coupons</li>
                <li>Financial summary and statistics</li>
                <li>Sub-event breakdown (if applicable)</li>
                <li>Team information for team events</li>
                <li>Accommodation and food coupon details</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-blue-500/10 border-blue-500/20">
              <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">💡 Tips</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Use PDF format for official reports, printing, or sharing with stakeholders</li>
                <li>Use CSV format for data analysis, filtering, sorting, or importing into other systems</li>
                <li>Download reports periodically during the event as backups</li>
                <li>CSV files can be easily imported into accounting software or databases</li>
                <li>PDF reports maintain formatting and are ideal for presentations</li>
              </ul>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of download report dialog and sample reports here</p>
          </div>
        </div>

        <div id="authorized-emails">
          <h2 className="text-2xl font-semibold mb-4">Authorized Emails Management (Volunteers)</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Control who can access and manage your event by authorizing specific email addresses. This feature allows you to delegate event management responsibilities to team members, volunteers, or co-organizers.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">What Are Authorized Emails?</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Authorized emails are email addresses that have full access to manage an event. These users can:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>View all event details and settings</li>
                <li>Access registration data and analytics</li>
                <li>Use QR code scanning for check-in and verification</li>
                <li>Download event reports</li>
                <li>View financial overview and statistics</li>
                <li>Manage registrations (view, search, delete)</li>
                <li>Access sub-event management (if applicable)</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">How to Add Authorized Emails</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside ml-4">
                <li>Navigate to the event management detail page</li>
                <li>Scroll to the "Authorized Emails" section</li>
                <li>Click the "+" (Add) button next to "Authorized Emails" heading</li>
                <li>Enter the email address in the dialog box</li>
                <li>Click "Add" to authorize the email</li>
                <li>The email will be added to the authorized list immediately</li>
              </ol>
              <div className="mt-3 p-3 rounded bg-muted">
                <p className="text-xs text-muted-foreground">
                  <strong>Note:</strong> The email address must be valid and the user must have a Vihaya account with that email to access the event.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">How to Remove Authorized Emails</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside ml-4">
                <li>Navigate to the event management detail page</li>
                <li>Scroll to the "Authorized Emails" section</li>
                <li>Find the email you want to remove from the list</li>
                <li>Click the delete icon (trash) next to the email</li>
                <li>Confirm the removal in the confirmation dialog</li>
                <li>The email will be removed and lose access immediately</li>
              </ol>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event Creator vs Authorized Emails</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Event Creator:</strong> The person who created the event has permanent access and cannot be removed</li>
                <li><strong>Authorized Emails:</strong> Additional emails that can be added or removed by the event creator</li>
                <li>The creator's email is displayed separately and marked as read-only</li>
                <li>You cannot add the creator's email to the authorized list (it's already authorized by default)</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Sub-Event Authorization</h3>
              <p className="text-sm text-muted-foreground mb-2">
                For events with sub-events, you can authorize emails at two levels:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Event Level:</strong> Authorized emails can manage the entire event and all sub-events</li>
                <li><strong>Sub-Event Level:</strong> You can authorize specific emails to manage only individual sub-events</li>
                <li>This allows for granular access control and distributed event management</li>
                <li>Sub-event authorized emails can only access their assigned sub-event, not the parent event</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-blue-500/10 border-blue-500/20">
              <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">💡 Best Practices</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Only authorize emails of trusted team members or volunteers</li>
                <li>Use sub-event authorization for large events with multiple teams</li>
                <li>Remove authorization immediately when someone is no longer part of the team</li>
                <li>Keep the authorized list small to maintain security</li>
                <li>Communicate with authorized users about their access and responsibilities</li>
              </ul>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of authorized emails section and add/remove dialogs here</p>
          </div>
        </div>

        <div id="real-time-updates">
          <h2 className="text-2xl font-semibold mb-4">Real-Time Updates</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            All event data updates automatically using real-time database streams. No manual refresh needed.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Automatic Updates</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The following update in real-time:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Registration count and list</li>
                <li>Analytics and financial metrics</li>
                <li>Verification status changes</li>
                <li>Payment status updates</li>
                <li>Sub-event registration counts</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Benefits</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Always see current data without refreshing</li>
                <li>Immediate visibility of new registrations</li>
                <li>Instant updates when tickets are verified</li>
                <li>Real-time financial tracking</li>
                <li>No data lag or synchronization issues</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="best-practices">
          <h2 className="text-2xl font-semibold mb-4">Best Practices for Event Day</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Tips for effectively using in-event features during your event:
          </p>

          <div className="p-6 rounded-lg border bg-primary/5">
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li className="leading-relaxed"><strong>Prepare Beforehand:</strong> Familiarize yourself with the dashboard and features before the event day</li>
              <li className="leading-relaxed"><strong>Multiple Devices:</strong> Have multiple devices ready for QR scanning at different check-in points</li>
              <li className="leading-relaxed"><strong>Monitor Analytics:</strong> Keep an eye on real-time analytics to track event progress</li>
              <li className="leading-relaxed"><strong>Use Search:</strong> Quickly find attendees using the search function when needed</li>
              <li className="leading-relaxed"><strong>Download Reports:</strong> Periodically download reports as backups during the event</li>
              <li className="leading-relaxed"><strong>Delegate Access:</strong> Authorize team members' emails for distributed management</li>
              <li className="leading-relaxed"><strong>Separate Stations:</strong> Use different devices/stations for ticket verification and food coupon verification</li>
              <li className="leading-relaxed"><strong>Internet Connection:</strong> Ensure stable internet for real-time updates to work properly</li>
            </ul>
          </div>
        </div>

        <div id="mobile-access">
          <h2 className="text-2xl font-semibold mb-4">Mobile Access</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            All in-event features are fully accessible on mobile devices, making it easy to manage events on the go.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Mobile Features</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li>Responsive design that works on all screen sizes</li>
              <li>Mobile-optimized QR scanner using device camera</li>
              <li>Touch-friendly interface for easy navigation</li>
              <li>Offline capability for viewing cached data</li>
              <li>Quick access to all features from mobile dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
