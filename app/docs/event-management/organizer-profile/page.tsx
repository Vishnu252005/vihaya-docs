import Image from "next/image";

export default function OrganizerProfilePage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Organizer Profile
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Your central hub for managing events, viewing statistics, and accessing all organizer features. The Organizer Profile provides a comprehensive dashboard with real-time insights and quick access to all event management tools.
      </p>

      <div className="space-y-8 leading-7">
        <div id="overview">
          <h2 id="overview" className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The Organizer Profile is your personalized dashboard that gives you complete control over your events. 
            From here, you can view your statistics, manage events, create new events, and customize your profile information.
          </p>
          
          <div className="my-6 flex justify-center">
            <div className="rounded-lg border overflow-hidden shadow-lg max-w-md">
              <Image
                src="/images/events/organizer-profile-view.png"
                alt="Organizer Profile view showing profile picture, event statistics, social media links, and current events tab"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="profile-information">
          <h2 id="profile-information" className="text-2xl font-semibold mb-4">Profile Information</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Your organizer profile displays your personal information and allows you to customize your public profile.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Profile Picture</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Upload:</strong> Tap on the profile picture area to upload a new image from your device gallery</li>
                <li><strong>Change:</strong> Tap on existing profile picture to see options to change or delete it</li>
                <li><strong>Delete:</strong> Remove your profile picture if you no longer want one</li>
                <li>Images are automatically optimized and stored securely in Firebase Storage</li>
                <li>Profile pictures are displayed on your organizer profile and can be seen by event attendees</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Personal Details</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Name:</strong> Your display name (editable)</li>
                <li><strong>Email:</strong> Your registered email address (used for authentication and notifications)</li>
                <li><strong>Username:</strong> Your account username</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Social Media Links</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Add your social media profiles to help attendees connect with you:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Instagram:</strong> Add your Instagram profile URL (e.g., https://instagram.com/username)</li>
                <li><strong>LinkedIn:</strong> Add your LinkedIn profile URL (e.g., https://linkedin.com/in/username)</li>
                <li>Social media links are optional and can be edited or removed at any time</li>
                <li>Links are clickable and open in external browser/app</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Edit Profile</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside ml-4">
                <li>Click the "Edit Profile" button on your organizer profile</li>
                <li>Update your name, Instagram URL, or LinkedIn URL</li>
                <li>Click "Save" to apply changes</li>
                <li>Changes are saved immediately and reflected across your profile</li>
              </ol>
            </div>
          </div>
        </div>

        <div id="dashboard-statistics">
          <h2 id="dashboard-statistics" className="text-2xl font-semibold mb-4">Dashboard Statistics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Real-time statistics calculated from all your events, giving you a quick overview of your event management performance.
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
              <p className="text-sm text-muted-foreground">The total number of events you have created, including draft, published, and archived events.</p>
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
              <p className="text-sm text-muted-foreground">The cumulative number of registrations across all your events, including both paid and free registrations.</p>
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
              <p className="text-sm text-muted-foreground">Events scheduled for future dates, helping you track what's coming next and plan accordingly.</p>
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
              <p className="text-sm text-muted-foreground">The number of events currently published and visible to attendees on the platform.</p>
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
              <p className="text-sm text-muted-foreground">Total revenue generated from all paid event registrations across all your events. Calculated as price × number of registrations.</p>
            </div>
          </div>

          <div className="p-5 rounded-lg border bg-blue-500/10 border-blue-500/20 mt-4">
            <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">💡 Real-Time Updates</h3>
            <p className="text-sm text-muted-foreground">
              All statistics update automatically in real-time as events are created, registrations come in, and events are published. 
              No manual refresh needed - you always see the latest data.
            </p>
          </div>
        </div>

        <div id="event-cards">
          <h2 id="event-cards" className="text-2xl font-semibold mb-4">Event Cards</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Each event you create is displayed as a card in your organizer profile, showing key information and quick actions.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event Card Information</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Each event card displays:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Event Image:</strong> Banner image or default event icon</li>
                <li><strong>Event Title:</strong> The name of your event</li>
                <li><strong>Location:</strong> Event venue or location</li>
                <li><strong>Date Range:</strong> Start and end dates (or single date if one-day event)</li>
                <li><strong>Status Badge:</strong> Draft (orange), Published (green), or Archived (grey)</li>
                <li><strong>Sub-Events Count:</strong> Number of sub-events if it's a parent event</li>
                <li><strong>Registration Count:</strong> Current number of registrations</li>
                <li><strong>Food Coupons Indicator:</strong> Shows if food coupons are enabled</li>
                <li><strong>Registration Countdown:</strong> Displays when registrations will open (if countdown is enabled)</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event Card Actions</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Each event card provides quick access to:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Details:</strong> View comprehensive event details including description, schedule, and all event information</li>
                <li><strong>Edit:</strong> Modify event settings, pricing, features, and all event configurations</li>
                <li><strong>Coupons:</strong> Open food coupon verification screen (only shown if food coupons are enabled)</li>
                <li><strong>Delete:</strong> Permanently remove the event (with confirmation dialog)</li>
              </ul>
            </div>
          </div>

          <div className="my-6 flex justify-center">
            <div className="rounded-lg border overflow-hidden shadow-lg max-w-md">
              <Image
                src="/images/events/organizer-events-cards.png"
                alt="Event cards showing event details, tags, and action buttons"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="my-6 flex justify-center">
            <div className="rounded-lg border overflow-hidden shadow-lg max-w-md">
              <Image
                src="/images/events/event-details.png"
                alt="Event details page showing event information, action buttons, authorized emails, and analytics"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="my-6 flex justify-center">
            <div className="rounded-lg border overflow-hidden shadow-lg max-w-md">
              <Image
                src="/images/events/event-sub-events.png"
                alt="Event page showing sub-events and registered users sections"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="quick-actions">
          <h2 id="quick-actions" className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Quick access buttons for the most common organizer tasks, located prominently on your profile dashboard.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Create Event</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Start creating a new event with a single click. Opens the event creation form where you can:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Set event title, description, and details</li>
                <li>Configure date, time, and location</li>
                <li>Set pricing and payment options</li>
                <li>Enable features like food coupons, accommodation, team events</li>
                <li>Add sub-events if needed</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">View Analytics</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Access comprehensive analytics for all your events. View:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Financial overview and revenue statistics</li>
                <li>Registration trends and patterns</li>
                <li>Event performance metrics</li>
                <li>Organizer-level analytics across all events</li>
                <li>Download reports for analysis</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card md:col-span-2">
              <h3 className="font-semibold mb-2">Manage Events</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Opens the comprehensive Event Management page where you can:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>View all your events in a dedicated management interface</li>
                <li>Access detailed event management for each event</li>
                <li>View and manage registrations</li>
                <li>Use QR scanning for check-in and verification</li>
                <li>Download event reports</li>
                <li>Manage authorized emails (volunteers)</li>
                <li>View real-time analytics for each event</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="event-management-section">
          <h2 id="event-management-section" className="text-2xl font-semibold mb-4">Event Management Section</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            A dedicated section on your profile that provides quick access to comprehensive event management features.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li>One-click access to the full Event Management page</li>
              <li>Filtered view showing only your events (or events you're authorized to manage)</li>
              <li>Real-time updates as events and registrations change</li>
              <li>Access to all in-event features and management tools</li>
            </ul>
          </div>
        </div>

        <div id="authorized-emails">
          <h2 id="authorized-emails" className="text-2xl font-semibold mb-4">Authorized Emails</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Manage which email addresses have access to manage your events. This allows you to delegate event management to team members or volunteers.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">How It Works</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li>Authorized emails can access and manage events you've granted them access to</li>
              <li>They appear in the Event Management page for authorized events</li>
              <li>They have the same management capabilities as you for those events</li>
              <li>You can add or remove authorized emails at any time</li>
              <li>Works at both event level and sub-event level for granular control</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              <strong>Note:</strong> Authorized emails are managed from individual event management pages, not from the organizer profile. 
              See the <a href="/docs/event-management/in-event#authorized-emails" className="text-primary hover:underline">In-Event Features</a> documentation for details.
            </p>
          </div>
          
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/events/authorized-emails-management.png"
                alt="Event management page showing authorized emails section with creator and authorized email addresses"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="accessing-organizer-profile">
          <h2 id="accessing-your-organizer-profile" className="text-2xl font-semibold mb-4">Accessing Your Organizer Profile</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            How to access and navigate to your organizer profile.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside ml-4">
              <li>Open the Vihaya app and sign in with your organizer account</li>
              <li>Navigate to your Profile section from the main navigation</li>
              <li>Select "Organizer Profile" from the profile options</li>
              <li>Your organizer dashboard will load with all your statistics and events</li>
            </ol>
            <div className="mt-4 p-3 rounded bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> You must be registered as an organizer to access this profile. 
                If you're not yet an organizer, you can apply to become one from the Event Management page.
              </p>
            </div>
          </div>
        </div>

        <div id="best-practices">
          <h2 id="best-practices" className="text-2xl font-semibold mb-4">Best Practices</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Tips for effectively using your organizer profile:
          </p>

          <div className="p-6 rounded-lg border bg-primary/5">
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li className="leading-relaxed"><strong>Keep Profile Updated:</strong> Maintain an up-to-date profile picture and social media links to build trust with attendees</li>
              <li className="leading-relaxed"><strong>Monitor Statistics:</strong> Regularly check your dashboard statistics to track your event management performance</li>
              <li className="leading-relaxed"><strong>Use Quick Actions:</strong> Leverage the quick action buttons for faster access to common tasks</li>
              <li className="leading-relaxed"><strong>Review Event Cards:</strong> Regularly review your event cards to ensure all information is accurate and up-to-date</li>
              <li className="leading-relaxed"><strong>Delegate Access:</strong> Use authorized emails to delegate event management to trusted team members</li>
              <li className="leading-relaxed"><strong>Check Analytics:</strong> Use the View Analytics button to gain insights into your event performance</li>
              <li className="leading-relaxed"><strong>Organize Events:</strong> Keep your events organized by using statuses (draft, published, archived) appropriately</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}





