export default function RegistrationManagementPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Registration Management
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Manage all event registrations, view attendee details, track payments, and handle check-ins efficiently with Vihaya's comprehensive registration management system.
      </p>

      <div className="space-y-6 leading-7">
        <div id="overview">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The Registration Management system provides a centralized dashboard to view, manage, and track all event registrations. 
            From viewing registration details to processing check-ins, everything you need is in one place.
          </p>
          
          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of registration management dashboard here</p>
          </div>
        </div>

        <div id="viewing-registrations">
          <h2 className="text-2xl font-semibold mb-4">Viewing Registrations</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Access all registrations from the event details page. Each registration shows comprehensive information:
          </p>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Personal Information</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>College Name</li>
                <li>Department</li>
                <li>Year of Study</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Registration Details</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Registration Date & Time</li>
                <li>Transaction ID</li>
                <li>Payment Status</li>
                <li>Payment ID (if paid)</li>
                <li>Referral ID (if provided)</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Additional Options</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Accommodation Status</li>
                <li>Food Coupon Status</li>
                <li>Food Coupon ID & QR Code</li>
                <li>WhatsApp Group Join Status</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Team Information</h3>
              <p className="text-sm text-muted-foreground">For team events, view all team members with their details, team name, and team size.</p>
            </div>
          </div>
        </div>

        <div id="registration-details">
          <h2 className="text-2xl font-semibold mb-4">Registration Details View</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Click on any registration to view expanded details. The details view shows:
          </p>
          <div className="p-5 rounded-lg border bg-card mt-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Complete Profile:</strong> All personal and contact information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Payment Information:</strong> Transaction ID, payment ID, amount paid, payment method</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Registration Metadata:</strong> Registration timestamp, referral source, special pricing category used</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Food Coupon Details:</strong> Coupon ID, QR code (if applicable), price paid</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Team Members:</strong> Complete list of all team members with their details (for team events)</span>
              </li>
            </ul>
          </div>
          
          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of registration details view here</p>
          </div>
        </div>

        <div id="search-and-filter">
          <h2 className="text-2xl font-semibold mb-4">Search & Filter Registrations</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Quickly find specific registrations using powerful search and filter options:
          </p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Search By</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Name (full or partial match)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Transaction ID</li>
                <li>Referral ID</li>
                <li>Food Coupon ID</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Filter By</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Payment Status (Paid, Free, Pending)</li>
                <li>Registration Date Range</li>
                <li>Department</li>
                <li>Year of Study</li>
                <li>Accommodation Status</li>
                <li>Food Coupon Status</li>
                <li>Special Pricing Category</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="export-data">
          <h2 className="text-2xl font-semibold mb-4">Export Registration Data</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Export registration data for external use, accounting, or analysis:
          </p>
          <div className="p-5 rounded-lg border bg-card mt-4">
            <p className="text-sm text-muted-foreground mb-3">
              You can export registration data in various formats:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>CSV Format:</strong> For spreadsheet applications like Excel or Google Sheets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Excel Format:</strong> Direct Excel file with formatted columns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>PDF Reports:</strong> Formatted reports for printing or sharing</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              Exported data includes all registration fields, payment information, and timestamps.
            </p>
          </div>
        </div>

        <div id="food-coupon-management">
          <h2 className="text-2xl font-semibold mb-4">Food Coupon Management</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            For events with food coupons enabled, manage coupon information:
          </p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">View Food Coupon Statistics</h3>
              <p className="text-sm text-muted-foreground">
                See how many attendees opted for food coupons, total revenue from food coupons, and coupon distribution.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Access QR Codes</h3>
              <p className="text-sm text-muted-foreground">
                View and verify food coupon QR codes directly from the registration details. Each coupon has a unique ID and QR code.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Coupon Verification</h3>
              <p className="text-sm text-muted-foreground">
                Use the food coupon verification screen to scan and verify coupons during the event. Learn more about{" "}
                <a href="/docs/event-management/qr-scanning" className="text-primary hover:underline">
                  QR Scanning and Check-In
                </a>.
              </p>
            </div>
          </div>
        </div>

        <div id="team-registrations">
          <h2 className="text-2xl font-semibold mb-4">Team Registrations</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            For team events, view complete team information:
          </p>
          <div className="p-5 rounded-lg border bg-card mt-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Team Name:</strong> The name chosen by the team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Team Size:</strong> Number of members (within min/max limits)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Team Members:</strong> Complete list with name, email, phone, college, department, and year for each member</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Team Leader:</strong> The person who registered the team</span>
              </li>
            </ul>
          </div>
        </div>

        <div id="registration-statistics">
          <h2 className="text-2xl font-semibold mb-4">Registration Statistics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            View real-time statistics about your event registrations:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Total Registrations</h3>
              <p className="text-xs text-muted-foreground">Current count of all registrations</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Paid Registrations</h3>
              <p className="text-xs text-muted-foreground">Number of paid registrations</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Free Registrations</h3>
              <p className="text-xs text-muted-foreground">Number of free registrations</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Food Coupons</h3>
              <p className="text-xs text-muted-foreground">Count of food coupons purchased</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Accommodation Requests</h3>
              <p className="text-xs text-muted-foreground">Number of accommodation requests</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Department Breakdown</h3>
              <p className="text-xs text-muted-foreground">Registrations by department</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
