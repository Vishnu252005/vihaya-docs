import Image from "next/image";

export default function CreatingEventsPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Creating Events
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Step-by-step guide to creating your first event in Vihaya. Learn how to set up single events, parent events with sub-events, and configure all available features. 
        This comprehensive guide covers everything from basic information to advanced features, helping you create professional events that engage your audience.
      </p>

      <div className="space-y-8 leading-7">
        <div id="event-types">
          <h2 id="event-types" className="text-2xl font-semibold mb-4">Event Types</h2>
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
          
          <div className="my-6 flex justify-center">
            <div className="rounded-lg border overflow-hidden shadow-lg max-w-md">
              <Image
                src="/images/select-event-type.png"
                alt="Select Event Type screen showing Single Event and Mega Event options"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="step-1-basic-information">
          <h2 id="step-1-basic-information" className="text-2xl font-semibold mb-4">Step 1: Basic Information</h2>
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
          
          <div className="my-6 flex justify-center">
            <div className="rounded-lg border overflow-hidden shadow-lg max-w-md">
              <Image
                src="/images/basic-information-form.png"
                alt="Basic information form showing event banner, name, location, description, and status fields"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="step-2-date-time">
          <h2 id="step-2-date-time" className="text-2xl font-semibold mb-4">Step 2: Date & Time</h2>
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
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Registration Countdown</h3>
              <p className="text-sm text-muted-foreground">Enable scheduled registration opening. Set a specific date and time when registrations become available. Perfect for creating anticipation!</p>
            </div>
          </div>

          <div className="my-6 flex justify-center">
            <div className="rounded-lg border overflow-hidden shadow-lg max-w-md">
              <Image
                src="/images/date-time-form.png"
                alt="Date and time form showing start date, end date, and registration launch schedule with countdown"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="step-3-sub-events">
          <h2 id="step-3-sub-events-configuration" className="text-2xl font-semibold mb-4">Step 3: Sub-Events Configuration (Parent Events Only)</h2>
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
          <h2 id="step-4-pricing-configuration" className="text-2xl font-semibold mb-4">Step 4: Pricing Configuration</h2>
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
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Event Capacity</h3>
              <p className="text-sm text-muted-foreground">Set the maximum number of attendees. Registration will close when capacity is reached.</p>
            </div>
          </div>
          
          <div className="my-6 grid gap-6 md:grid-cols-2">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/pricing-capacity-form.png"
                alt="Pricing and capacity form showing free event toggle, price, capacity, and points fields"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/special-pricing-form.png"
                alt="Special pricing form showing capacity, points, and special price groups configuration"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="step-5-teams-collaboration">
          <h2 id="step-5-teams-collaboration" className="text-2xl font-semibold mb-4">Step 5: Teams & Collaboration</h2>
          <p className="mb-4">
            Configure team registration settings for competitions, hackathons, and collaborative events:
          </p>
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/teams-collaboration-form.png"
                alt="Teams & Collaboration form showing team event toggle, minimum and maximum team size configuration"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Team Event</h3>
              <p className="text-sm text-muted-foreground">Enable team registration to allow groups of attendees to register together. Perfect for hackathons, competitions, and team-based activities.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Minimum Team Size</h3>
              <p className="text-sm text-muted-foreground">Set the minimum number of members required for a team (default: 2). Teams cannot register with fewer members than this.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Maximum Team Size</h3>
              <p className="text-sm text-muted-foreground">Set the maximum number of members allowed in a team (default: 4). Teams cannot register with more members than this.</p>
            </div>
          </div>
        </div>

        <div id="step-6-advanced-features">
          <h2 id="step-6-advanced-features" className="text-2xl font-semibold mb-4">Step 6: Advanced Features</h2>
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
          </div>
          <div className="my-6 grid gap-6 md:grid-cols-2">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/addons-form.png"
                alt="Add-ons form showing accommodation and food coupons configuration with toggles and price fields"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/engagement-contacts-form.png"
                alt="Engagement and Session Contacts form showing referral system toggle, WhatsApp group toggle, and contact phone fields"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Referral System</h3>
              <p className="text-sm text-muted-foreground mb-2">Enable referral IDs so attendees can refer others and track referrals.</p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">WhatsApp Group</h3>
              <p className="text-sm text-muted-foreground mb-2">Add a WhatsApp group link that will be shared with registered attendees for event communication.</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
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
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/contact-information-form.png"
                alt="Contact Information form showing session contacts and contact information fields with phone, email, contact person name, and event website"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="step-7-event-details">
          <h2 id="step-7-event-details" className="text-2xl font-semibold mb-4">Step 7: Event Details</h2>
          <p className="mb-4">
            Optionally add detailed information about your event's agenda, speakers, and sponsors:
          </p>
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/event-details-form.png"
                alt="Event Details form showing toggle switch, agenda, speakers, and sponsors fields"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Event Details Toggle</h3>
              <p className="text-sm text-muted-foreground">Enable this option to add agenda, speakers, and sponsors information to your event.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Agenda/Schedule</h3>
              <p className="text-sm text-muted-foreground">Provide a detailed schedule or agenda for your event. This helps attendees understand what to expect.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Speakers Information</h3>
              <p className="text-sm text-muted-foreground">List the speakers, their expertise, and credentials. This adds credibility and attracts attendees.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Sponsors & Partners</h3>
              <p className="text-sm text-muted-foreground">Acknowledge your sponsors and partners. This helps build relationships and shows event support.</p>
            </div>
          </div>
        </div>

        <div id="step-8-submission-options">
          <h2 id="step-8-submission-options" className="text-2xl font-semibold mb-4">Step 8: Submission Options</h2>
          <p className="mb-4">
            Enable submission options for academic or research events:
          </p>
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/submission-options-form.png"
                alt="Submission Options form showing abstract, paper, and poster submission toggles"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Abstract Submission</h3>
              <p className="text-sm text-muted-foreground">Enable abstract submissions for your event. Set a deadline for abstract submissions.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Paper Submission</h3>
              <p className="text-sm text-muted-foreground">Enable paper submissions for research events. Specify the paper submission deadline.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Poster Submission</h3>
              <p className="text-sm text-muted-foreground">Enable poster submissions for conferences and exhibitions. Set the poster submission deadline.</p>
            </div>
          </div>
        </div>

        <div id="step-9-travel-parking">
          <h2 id="step-9-travel-parking" className="text-2xl font-semibold mb-4">Step 9: Travel & Parking</h2>
          <p className="mb-4">
            Provide travel and parking information for in-person and hybrid events:
          </p>
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/travel-parking-form.png"
                alt="Travel & Parking form showing toggle switch, travel information, and parking information fields"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Travel & Parking Toggle</h3>
              <p className="text-sm text-muted-foreground">Enable this option to provide travel directions and parking information for attendees.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Travel Information</h3>
              <p className="text-sm text-muted-foreground">Provide directions, public transport options, nearest metro/bus stations, and other travel details to help attendees reach your venue.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Parking Information</h3>
              <p className="text-sm text-muted-foreground">Share parking availability, capacity, entry points, and any parking fees or restrictions.</p>
            </div>
          </div>
        </div>

        <div id="step-10-additional-registration-fields">
          <h2 id="step-10-additional-registration-fields" className="text-2xl font-semibold mb-4">Step 10: Additional Registration Fields</h2>
          <p className="mb-4">
            Collect additional information from attendees during registration:
          </p>
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/additional-registration-fields-form.png"
                alt="Additional Registration Fields form showing toggles for dietary preferences, accessibility needs, emergency contact, affiliation, research interests, and T-shirt size"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Dietary Preferences</h3>
              <p className="text-sm text-muted-foreground">Collect dietary requirements and restrictions from attendees to plan meals and accommodate special needs.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Accessibility Needs</h3>
              <p className="text-sm text-muted-foreground">Gather information about accessibility requirements to ensure your event is inclusive and accessible to all attendees.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Emergency Contact</h3>
              <p className="text-sm text-muted-foreground">Collect emergency contact information for safety and security purposes during the event.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Affiliation/Organization</h3>
              <p className="text-sm text-muted-foreground">Ask attendees about their organization or affiliation for networking and demographic purposes.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Research Interests</h3>
              <p className="text-sm text-muted-foreground">Collect research interests to help match attendees with relevant sessions and facilitate networking.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">T-Shirt Size</h3>
              <p className="text-sm text-muted-foreground">Gather T-shirt sizes if you're providing event swag or merchandise to attendees.</p>
            </div>
          </div>
        </div>

        <div id="step-11-custom-fields">
          <h2 id="step-11-custom-fields" className="text-2xl font-semibold mb-4">Step 11: Custom Fields</h2>
          <p className="mb-4">
            Add custom fields to collect additional information specific to your event:
          </p>
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/custom-fields-form.png"
                alt="Custom Fields form showing existing custom fields and add custom field button"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Custom Field Types</h3>
              <p className="text-sm text-muted-foreground">Create custom fields with different input types: text, number, email, phone, date, textarea, or dropdown. Mark fields as required or optional.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Field Management</h3>
              <p className="text-sm text-muted-foreground">Add multiple custom fields to gather specific information relevant to your event. You can delete any custom field you've added.</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1">Use Cases</h3>
              <p className="text-sm text-muted-foreground">Perfect for collecting information like previous experience, programming languages, GitHub profiles, company names, or any other event-specific data you need.</p>
            </div>
          </div>
        </div>

        <div id="step-12-publish">
          <h2 id="step-12-review-publish" className="text-2xl font-semibold mb-4">Step 12: Review & Publish</h2>
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
