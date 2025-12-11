import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "Event Overview",
  description: "A comprehensive guide to the event dashboard, including registration status, recent registrations, and organizer management. Learn how to access and use the Organizer Profile.",
  path: "/docs/event-overview",
  keywords: ["event overview", "organizer dashboard", "event management", "dashboard statistics", "event cards"],
});

export default function EventOverviewPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Event Overview
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        A comprehensive guide to the event dashboard, including registration status, recent registrations, and organizer management.
      </p>

      <div className="space-y-8 leading-7">
        <div id="organizer-dashboard">
          <h2 className="text-2xl font-semibold mb-4">Organizer Dashboard</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The Organizer Dashboard is your central hub for managing all aspects of your events. It provides a comprehensive overview of your event statistics, quick access to event management tools, and profile customization options.
          </p>
          
          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of the Organizer Dashboard here</p>
          </div>
        </div>

        <div id="dashboard-statistics">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Statistics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Your dashboard displays real-time statistics calculated from all your events:
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue/10">
                  <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Total Events</h3>
              </div>
              <p className="text-sm text-muted-foreground">The total number of events you have created, including both published and draft events.</p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-green/10">
                  <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Total Registrations</h3>
              </div>
              <p className="text-sm text-muted-foreground">The cumulative number of registrations across all your events.</p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-orange/10">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Upcoming Events</h3>
              </div>
              <p className="text-sm text-muted-foreground">Events scheduled for future dates, helping you track what's coming next.</p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple/10">
                  <svg className="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="font-semibold">Published Events</h3>
              </div>
              <p className="text-sm text-muted-foreground">The number of events currently published and visible to attendees.</p>
            </div>

            <div className="p-5 rounded-lg border bg-card md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-teal/10">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Total Revenue</h3>
              </div>
              <p className="text-sm text-muted-foreground">Total revenue generated from all paid event registrations across all your events.</p>
            </div>
          </div>
        </div>

        <div id="managing-events">
          <h2 className="text-2xl font-semibold mb-4">Managing Events from Organizer Profile</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The organizer profile provides direct access to manage all your events. From the dashboard, you can quickly access event management features.
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Accessing Event Management</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside ml-4">
                <li>Navigate to your profile and select "Organizer Profile"</li>
                <li>View your event dashboard with all statistics</li>
                <li>Scroll down to see all your events displayed as cards</li>
                <li>Click on any event card to open the event management detail page</li>
              </ol>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event Card Actions</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Each event card in the organizer profile provides quick access to:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>View Event Details:</strong> Click the card to open full event management</li>
                <li><strong>Edit Event:</strong> Modify event settings, pricing, and details</li>
                <li><strong>Delete Event:</strong> Remove the event permanently (with confirmation)</li>
                <li><strong>Quick Stats:</strong> See registration count and revenue at a glance</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event Management Features</h3>
              <p className="text-sm text-muted-foreground mb-2">
                From the event management detail page, you can:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>View real-time registration data and analytics</li>
                <li>Download comprehensive reports (PDF or CSV)</li>
                <li>Scan QR codes for check-in and verification</li>
                <li>Manage registrations (view, search, delete)</li>
                <li>Add/remove authorized emails (volunteers)</li>
                <li>View financial overview and statistics</li>
                <li>Manage sub-events (if applicable)</li>
                <li>Access all in-event features</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Authorized Event Access</h3>
              <p className="text-sm text-muted-foreground mb-2">
                If you're an authorized email (volunteer) for an event:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Events you're authorized for will appear in your event management page</li>
                <li>You have full access to manage the event (same as the creator)</li>
                <li>You can access all event management features</li>
                <li>The event creator can remove your access at any time</li>
              </ul>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of organizer profile with event cards here</p>
          </div>
        </div>

        <div id="event-cards">
          <h2 className="text-2xl font-semibold mb-4">Event Cards</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Each event is displayed as a card showing key information at a glance:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li className="leading-relaxed"><strong>Event Image:</strong> Visual representation of your event</li>
            <li className="leading-relaxed"><strong>Title & Location:</strong> Event name and venue information</li>
            <li className="leading-relaxed"><strong>Date Range:</strong> Start and end dates formatted clearly</li>
            <li className="leading-relaxed"><strong>Status Badge:</strong> Visual indicator (Published, Draft, Archived)</li>
            <li className="leading-relaxed"><strong>Sub-events Count:</strong> Number of child events if applicable</li>
            <li className="leading-relaxed"><strong>Registration Count:</strong> Current number of registered attendees</li>
            <li className="leading-relaxed"><strong>Food Coupons:</strong> Indicator if food coupons are enabled</li>
            <li className="leading-relaxed"><strong>Registration Countdown:</strong> Shows when registrations open if scheduled</li>
          </ul>
          
          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of event cards here</p>
          </div>
        </div>

        <div id="quick-actions">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            From the dashboard, you can quickly access:
          </p>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Event
              </h3>
              <p className="text-sm text-muted-foreground">Start creating a new event with our comprehensive event creation form.</p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                View Analytics
              </h3>
              <p className="text-sm text-muted-foreground">Access detailed analytics and insights for all your events.</p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Manage Events
              </h3>
              <p className="text-sm text-muted-foreground">Access the full event management page to view, edit, and manage all your events.</p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Edit Profile
              </h3>
              <p className="text-sm text-muted-foreground">Update your organizer profile, add social media links, and upload a profile picture.</p>
            </div>
          </div>
        </div>

        <div id="organizer-profile">
          <h2 className="text-2xl font-semibold mb-4">Organizer Profile</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Your organizer profile allows you to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li className="leading-relaxed"><strong>Upload Profile Picture:</strong> Add a professional profile image that appears on your organizer profile</li>
            <li className="leading-relaxed"><strong>Edit Name:</strong> Update your display name</li>
            <li className="leading-relaxed"><strong>Add Social Media:</strong> Link your Instagram and LinkedIn profiles</li>
            <li className="leading-relaxed"><strong>View Statistics:</strong> See real-time stats for all your events</li>
          </ul>
          
          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of organizer profile section here</p>
          </div>
        </div>

        <div id="event-actions">
          <h2 className="text-2xl font-semibold mb-4">Event Actions</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            For each event card, you have access to several actions:
          </p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">View Details</h3>
              <p className="text-sm text-muted-foreground">Open the detailed event view to see all registrations, event information, and manage attendees.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Edit Event</h3>
              <p className="text-sm text-muted-foreground">Modify event details, update settings, or change event information.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Food Coupons (if enabled)</h3>
              <p className="text-sm text-muted-foreground">Access the food coupon verification screen to scan and verify coupons during the event.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Delete Event</h3>
              <p className="text-sm text-muted-foreground">Permanently remove an event. This action cannot be undone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
