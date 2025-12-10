export default function ChildEventsPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Child Events (Sub-Events)
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Create and manage multiple sub-events within a single parent event. Perfect for conferences with multiple sessions, workshops with different tracks, or multi-day events with various activities.
      </p>

      <div className="space-y-8 leading-7">
        <div id="overview">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Child events (also called sub-events) allow you to organize multiple related activities under one parent event. 
            Each sub-event can have its own schedule, pricing, capacity, and settings while being part of a larger event structure.
          </p>
          <div className="p-5 rounded-lg border bg-primary/5 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Example Use Cases:</strong> A tech conference with multiple talk sessions, a workshop series with different topics, 
              a multi-day event with various activities, or a competition with different rounds.
            </p>
          </div>
        </div>

        <div id="parent-vs-child">
          <h2 className="text-2xl font-semibold mb-4">Parent Event vs Child Events</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Understanding the relationship between parent and child events:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Parent Event</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The main event that contains sub-events:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Has overall event information (title, description, location)</li>
                <li>Contains multiple sub-events</li>
                <li>Can have its own banner image</li>
                <li>Has parent-level contact information</li>
                <li>Can have WhatsApp group link</li>
                <li>Has overall date range (start to end)</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Child Events (Sub-Events)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Individual activities within the parent event:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Have their own title, description, and schedule</li>
                <li>Independent pricing and capacity</li>
                <li>Can have different locations</li>
                <li>Individual feature settings</li>
                <li>Separate registration tracking</li>
                <li>Own analytics and statistics</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="creating-child-events">
          <h2 className="text-2xl font-semibold mb-4">Creating Child Events</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            When creating a new event, you can choose to create a parent event with sub-events.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Step 1: Choose Event Type</h3>
              <p className="text-sm text-muted-foreground mb-2">
                During event creation, select "Parent Event with Sub-Events" instead of "Single Event".
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Step 2: Configure Parent Event</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Set up the parent event details:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Parent event title and description</li>
                <li>Main location</li>
                <li>Overall date range</li>
                <li>Parent event banner image</li>
                <li>Contact information</li>
                <li>WhatsApp group link (optional)</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Step 3: Add Sub-Events</h3>
              <p className="text-sm text-muted-foreground mb-2">
                For each sub-event, configure:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Type:</strong> Talk Session, Workshop, Competition, Gaming Event, Hackathon, Panel Discussion, Networking Session, Cultural Event, Sports Event, Exhibition, or Other</li>
                <li><strong>Title & Description:</strong> Specific to this sub-event</li>
                <li><strong>Date & Time:</strong> Individual schedule for the sub-event</li>
                <li><strong>Location:</strong> Can be different from parent event location</li>
                <li><strong>Pricing:</strong> Independent pricing (free or paid)</li>
                <li><strong>Capacity:</strong> Maximum attendees for this sub-event</li>
                <li><strong>Features:</strong> Enable/disable features per sub-event</li>
              </ul>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of sub-event creation interface here</p>
          </div>
        </div>

        <div id="sub-event-features">
          <h2 className="text-2xl font-semibold mb-4">Sub-Event Features</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Each sub-event can have its own independent feature configuration:
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Team Event</h3>
              <p className="text-xs text-muted-foreground">Enable team registrations with min/max team sizes</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Special Pricing</h3>
              <p className="text-xs text-muted-foreground">Define different pricing tiers (e.g., IEEE Member, Student)</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Accommodation</h3>
              <p className="text-xs text-muted-foreground">Offer accommodation with pricing and details</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Food Coupons</h3>
              <p className="text-xs text-muted-foreground">Enable food coupon purchases for this sub-event</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Referral System</h3>
              <p className="text-xs text-muted-foreground">Allow attendees to use referral codes</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Registration Countdown</h3>
              <p className="text-xs text-muted-foreground">Set a countdown timer for when registrations open</p>
            </div>
          </div>
        </div>

        <div id="managing-child-events">
          <h2 className="text-2xl font-semibold mb-4">Managing Child Events</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Each sub-event can be managed independently while maintaining its connection to the parent event.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Sub-Event Dashboard</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Access individual sub-event management by clicking on a sub-event card. Each sub-event has its own dashboard showing:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Sub-event details and information</li>
                <li>Individual registration list</li>
                <li>Sub-event specific analytics</li>
                <li>QR scanning for this sub-event</li>
                <li>Financial overview for the sub-event</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Editing Sub-Events</h3>
              <p className="text-sm text-muted-foreground mb-2">
                You can edit sub-event details:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Update title, description, and schedule</li>
                <li>Modify pricing and capacity</li>
                <li>Change feature settings</li>
                <li>Update location and contact information</li>
                <li>Change sub-event status (Draft, Published, Archived)</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Adding/Removing Sub-Events</h3>
              <p className="text-sm text-muted-foreground">
                You can add new sub-events to an existing parent event or remove sub-events that are no longer needed. 
                Note: Removing a sub-event may affect existing registrations, so use caution.
              </p>
            </div>
          </div>
        </div>

        <div id="registration-for-sub-events">
          <h2 className="text-2xl font-semibold mb-4">Registration for Sub-Events</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Attendees can register for specific sub-events within a parent event.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Sub-Event Selection</h3>
              <p className="text-sm text-muted-foreground mb-2">
                When registering for a parent event with sub-events:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Attendees see all available sub-events</li>
                <li>They can select one or more sub-events to attend</li>
                <li>Each sub-event shows its own pricing and details</li>
                <li>Total cost is calculated based on selected sub-events</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Registration Tracking</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Registrations are tracked per sub-event:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Each registration includes which sub-events were selected</li>
                <li>Sub-event registration counts are tracked separately</li>
                <li>Capacity limits are enforced per sub-event</li>
                <li>Analytics are calculated per sub-event</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="access-control">
          <h2 className="text-2xl font-semibold mb-4">Access Control for Sub-Events</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Granular access control allows you to delegate sub-event management to different team members.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event-Level Access</h3>
              <p className="text-sm text-muted-foreground">
                Users authorized at the parent event level can access and manage all sub-events within that event.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Sub-Event-Level Access</h3>
              <p className="text-sm text-muted-foreground mb-2">
                You can authorize specific emails to manage individual sub-events:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Add authorized emails per sub-event</li>
                <li>Authorized users can only see and manage their assigned sub-events</li>
                <li>Perfect for delegating different sessions to different team members</li>
                <li>Maintains security while enabling distributed management</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Access Hierarchy</h3>
              <p className="text-sm text-muted-foreground">
                The system checks access in this order: Event creator → Event-level authorized emails → Sub-event-level authorized emails. 
                This ensures proper access control while allowing flexibility.
              </p>
            </div>
          </div>
        </div>

        <div id="sub-event-analytics">
          <h2 className="text-2xl font-semibold mb-4">Sub-Event Analytics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Each sub-event has its own analytics and statistics.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Individual Metrics</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Track performance for each sub-event:
              </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li>Registration count for the sub-event</li>
              <li>Revenue generated from sub-event registrations</li>
              <li>Capacity utilization (current registrations vs capacity)</li>
              <li>Payment status breakdown</li>
              <li>Sub-event status (Draft, Published, Archived)</li>
            </ul>
          </div>
        </div>

        <div id="use-cases">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Sub-events are perfect for various event structures:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Tech Conference</h3>
              <p className="text-sm text-muted-foreground">
                Parent event: "Tech Summit 2024"<br/>
                Sub-events: Multiple talk sessions, workshops, panel discussions, networking sessions
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Workshop Series</h3>
              <p className="text-sm text-muted-foreground">
                Parent event: "Web Development Bootcamp"<br/>
                Sub-events: Day 1 - HTML/CSS, Day 2 - JavaScript, Day 3 - React, Day 4 - Backend
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Hackathon</h3>
              <p className="text-sm text-muted-foreground">
                Parent event: "24-Hour Hackathon"<br/>
                Sub-events: Opening ceremony, Coding sessions, Mentoring sessions, Judging, Awards
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Multi-Day Festival</h3>
              <p className="text-sm text-muted-foreground">
                Parent event: "Cultural Festival"<br/>
                Sub-events: Music performances, Dance competitions, Food stalls, Art exhibitions
              </p>
            </div>
          </div>
        </div>

        <div id="best-practices">
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Tips for effectively using child events:
          </p>

          <div className="p-6 rounded-lg border bg-primary/5">
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li className="leading-relaxed"><strong>Clear Naming:</strong> Use descriptive names for sub-events so attendees know what they're registering for</li>
              <li className="leading-relaxed"><strong>Schedule Planning:</strong> Ensure sub-event schedules don't overlap unless intentional (parallel tracks)</li>
              <li className="leading-relaxed"><strong>Capacity Management:</strong> Set appropriate capacity limits for each sub-event based on venue constraints</li>
              <li className="leading-relaxed"><strong>Pricing Strategy:</strong> Consider different pricing for different sub-events based on value and duration</li>
              <li className="leading-relaxed"><strong>Feature Configuration:</strong> Enable only necessary features per sub-event to avoid confusion</li>
              <li className="leading-relaxed"><strong>Access Delegation:</strong> Use sub-event-level authorization to distribute management responsibilities</li>
              <li className="leading-relaxed"><strong>Registration Clarity:</strong> Make it clear which sub-events are included or optional</li>
              <li className="leading-relaxed"><strong>Analytics Review:</strong> Monitor individual sub-event performance to identify popular sessions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
