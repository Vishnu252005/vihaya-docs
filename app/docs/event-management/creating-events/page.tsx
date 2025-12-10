export default function CreatingEventsPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Creating Events
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Step-by-step guide to creating your first event in Vihaya. Learn how to set up single events, parent events with sub-events, and configure all available features.
      </p>

      <div className="space-y-6 leading-7">
        <div id="event-types">
          <h2 className="text-2xl font-semibold mb-4">Event Types</h2>
          <p className="mb-4">
            Vihaya supports two main event structures:
          </p>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Single Events</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Standalone events that operate independently. Perfect for workshops, talks, or single-session events.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>One-time events</li>
                <li>Simple setup</li>
                <li>Direct registration</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Parent Events with Sub-Events</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Multi-day or multi-track events with multiple sessions. Each sub-event can have its own settings, pricing, and schedule.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Multiple sessions</li>
                <li>Independent pricing per session</li>
                <li>Organized under one main event</li>
              </ul>
            </div>
          </div>
          
          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of event type selection screen here</p>
          </div>
        </div>

        <div id="step-1-basic-information">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Basic Information</h2>
          <p className="mb-4">
            Start by providing the essential details about your event:
          </p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Event Name</h3>
              <p className="text-sm text-muted-foreground">Choose a clear, descriptive name for your event (e.g., "Innovex 2025")</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Event Description</h3>
              <p className="text-sm text-muted-foreground">Provide a detailed description of what attendees can expect. This appears on the event page.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Main Location</h3>
              <p className="text-sm text-muted-foreground">Specify the primary venue (e.g., "Main Auditorium, College Campus")</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Event Banner Image</h3>
              <p className="text-sm text-muted-foreground">Upload a high-quality banner image that represents your event. This is the first thing attendees see.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Event Status</h3>
              <p className="text-sm text-muted-foreground">Choose from: <strong>Draft</strong> (not visible to public), <strong>Published</strong> (visible and accepting registrations), or <strong>Archived</strong> (past events)</p>
            </div>
          </div>
          
          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of basic information form section here</p>
          </div>
        </div>

        <div id="step-2-date-time">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Date & Time</h2>
          <p className="mb-4">
            Set the schedule for your event:
          </p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Start Date & Time</h3>
              <p className="text-sm text-muted-foreground">When your event begins. For parent events, this is the overall start date.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">End Date & Time</h3>
              <p className="text-sm text-muted-foreground">When your event concludes. For parent events, this covers all sub-events.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Sub-Event Dates (for Parent Events)</h3>
              <p className="text-sm text-muted-foreground">Each sub-event can have its own date and time range (start time and end time).</p>
            </div>
          </div>
        </div>

        <div id="step-3-sub-events">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Sub-Events Configuration (Parent Events Only)</h2>
          <p className="mb-4">
            If creating a parent event, configure your sub-events:
          </p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Sub-Event Types</h3>
              <p className="text-sm text-muted-foreground mb-2">Choose from predefined types:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Talk Session</li>
                <li>Workshop</li>
                <li>Competition</li>
                <li>Gaming Event</li>
                <li>Hackathon</li>
                <li>Panel Discussion</li>
                <li>Networking Session</li>
                <li>Cultural Event</li>
                <li>Sports Event</li>
                <li>Exhibition</li>
                <li>Other</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Sub-Event Details</h3>
              <p className="text-sm text-muted-foreground">Each sub-event requires: title, description, location, date, start time, end time, and an optional image.</p>
            </div>
          </div>
        </div>

        <div id="step-4-pricing">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Pricing Configuration</h2>
          <p className="mb-4">
            Configure pricing options for your event:
          </p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Free or Paid</h3>
              <p className="text-sm text-muted-foreground">Toggle between free events and paid events. For paid events, set the ticket price.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Special Pricing</h3>
              <p className="text-sm text-muted-foreground">Create different pricing tiers (e.g., "IEEE Member: ₹0", "Non-IEEE Member: ₹299"). Perfect for membership-based pricing.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Points System</h3>
              <p className="text-sm text-muted-foreground">Optionally assign points to your event that attendees can earn upon registration.</p>
            </div>
          </div>
          
          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of pricing configuration section here</p>
          </div>
        </div>

        <div id="step-5-capacity-registration">
          <h2 className="text-2xl font-semibold mb-4">Step 5: Capacity & Registration Settings</h2>
          <p className="mb-4">
            Control how many people can register and when:
          </p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Event Capacity</h3>
              <p className="text-sm text-muted-foreground">Set the maximum number of attendees (default: 50). Registration will close when capacity is reached.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Registration Countdown</h3>
              <p className="text-sm text-muted-foreground">Enable scheduled registration opening. Set a specific date and time when registrations become available. Perfect for creating anticipation!</p>
            </div>
          </div>
        </div>

        <div id="step-6-advanced-features">
          <h2 className="text-2xl font-semibold mb-4">Step 6: Advanced Features</h2>
          <p className="mb-4">
            Enhance your event with additional features:
          </p>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Food Coupons</h3>
              <p className="text-sm text-muted-foreground mb-2">Enable food coupons for your event. Set a price (can be free) and generate QR codes for verification.</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>QR code generation</li>
                <li>Verification screen</li>
                <li>Revenue tracking</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Accommodation</h3>
              <p className="text-sm text-muted-foreground mb-2">Offer accommodation options for out-of-town attendees.</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Set accommodation price</li>
                <li>Add accommodation details</li>
                <li>Track accommodation requests</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Team Events</h3>
              <p className="text-sm text-muted-foreground mb-2">Enable team registration for competitions, hackathons, etc.</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Set minimum team size</li>
                <li>Set maximum team size</li>
                <li>Team-based registration</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Referral System</h3>
              <p className="text-sm text-muted-foreground mb-2">Enable referral IDs so attendees can refer others and track referrals.</p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">WhatsApp Group</h3>
              <p className="text-sm text-muted-foreground mb-2">Add a WhatsApp group link that will be shared with registered attendees for event communication.</p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <p className="text-sm text-muted-foreground mb-2">Add contact details for event inquiries:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Contact phone</li>
                <li>Contact email</li>
                <li>WhatsApp number</li>
              </ul>
            </div>
          </div>
          
          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of advanced features section here</p>
          </div>
        </div>

        <div id="step-7-publish">
          <h2 className="text-2xl font-semibold mb-4">Step 7: Review & Publish</h2>
          <p className="mb-4">
            Before publishing, review all your event details:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4 text-muted-foreground">
            <li className="leading-relaxed">Review all event information in the summary section</li>
            <li className="leading-relaxed">Check that all required fields are filled</li>
            <li className="leading-relaxed">Verify pricing and capacity settings</li>
            <li className="leading-relaxed">Ensure sub-events are properly configured (if applicable)</li>
            <li className="leading-relaxed">Set event status to "Published" to make it visible</li>
            <li className="leading-relaxed">Save your event</li>
          </ol>
          
          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of event summary/review section here</p>
          </div>
        </div>

        <div className="p-6 rounded-lg border bg-primary/5">
          <h3 className="font-semibold mb-2">Pro Tips</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Use high-quality banner images (recommended: 1200x600px) to make your event stand out</li>
            <li>Enable registration countdown for high-demand events to build anticipation</li>
            <li>Set up special pricing early to avoid confusion during registration</li>
            <li>For multi-day events, use parent events with sub-events for better organization</li>
            <li>Test your event registration flow before publishing</li>
            <li>Use food coupons for events with meals to streamline verification</li>
            <li>Enable WhatsApp groups for better attendee communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
