import Link from "next/link";

export default function EventSettingsPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Event Settings
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Configure and customize your event settings. Edit event details, manage appearance, set schedules, and control registration behavior.
      </p>

      <div className="space-y-8 leading-7">
        <div id="overview">
          <h2 id="overview" className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Event Settings allow you to modify your event after creation. You can update event information, change the banner, 
            adjust dates, modify contact details, and configure various event features. All changes are saved immediately and reflected in real-time.
          </p>
          <div className="p-5 rounded-lg border bg-primary/5 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Accessing Event Settings:</strong> Navigate to your event from the event management page and click "Edit" to open the event settings form.
            </p>
          </div>
        </div>

        <div id="edit-event-settings">
          <h2 id="edit-event-settings" className="text-2xl font-semibold mb-4">Edit Event Settings</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The Edit Event Settings form allows you to modify all aspects of your event configuration. 
            The form is organized into logical sections for easy navigation.
          </p>

          <div className="space-y-6 mt-4">
            <div id="event-banner">
              <h3 className="text-xl font-semibold mb-3">Event Banner</h3>
              <p className="mb-3 text-muted-foreground leading-relaxed">
                The event banner is the main visual representation of your event. It appears on the event details page and helps attract attendees.
              </p>
              <div className="p-5 rounded-lg border bg-card">
                <h4 className="font-semibold mb-2">Uploading/Updating Banner</h4>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside ml-4">
                  <li>Click on the banner card or upload area</li>
                  <li>Select an image from your device gallery</li>
                  <li>Image is uploaded to Firebase Storage</li>
                  <li>Banner updates immediately after upload</li>
                </ol>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Note:</strong> You can clear the banner by clicking the clear button, which removes the current banner image.
                </p>
              </div>
              <div className="my-4 p-6 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
                <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
                <p className="text-xs text-muted-foreground">Add screenshot of event banner upload section here</p>
              </div>
            </div>

            <div id="event-overview">
              <h3 className="text-xl font-semibold mb-3">Event Overview</h3>
              <p className="mb-3 text-muted-foreground leading-relaxed">
                Basic event information that identifies and describes your event.
              </p>
              <div className="space-y-4">
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-semibold mb-2">Event Name</h4>
                  <p className="text-sm text-muted-foreground">
                    The title of your event. This is displayed prominently on the event page and in event listings. 
                    Required field - cannot be empty.
                  </p>
                </div>
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-semibold mb-2">Event Description</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    A detailed description of your event. This helps attendees understand what the event is about, what they'll learn, and what to expect.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Supports multi-line text (4 lines by default)</li>
                    <li>Required field - cannot be empty</li>
                    <li>Displayed on the public event registration page</li>
                    <li>Can be updated at any time</li>
                  </ul>
                </div>
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-semibold mb-2">Main Location</h4>
                  <p className="text-sm text-muted-foreground">
                    The primary venue or location for your event. This is displayed on the event page and helps attendees find the venue. 
                    Required field - cannot be empty.
                  </p>
                </div>
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-semibold mb-2">Event Status</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Control the visibility and state of your event:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li><strong>Draft:</strong> Event is not visible to the public. Use this for events still in planning.</li>
                    <li><strong>Published:</strong> Event is live and visible. Registration form is active and accepting registrations.</li>
                    <li><strong>Archived:</strong> Event is completed. Moved out of active event lists but data remains accessible.</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Note:</strong> Changing status to "Published" makes the event registration form publicly accessible.
                  </p>
                </div>
              </div>
            </div>

            <div id="event-schedule">
              <h3 className="text-xl font-semibold mb-3">Event Schedule</h3>
              <p className="mb-3 text-muted-foreground leading-relaxed">
                Define when your event occurs and when registrations are available.
              </p>
              <div className="space-y-4">
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-semibold mb-2">Start Date & End Date</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Set the actual event dates:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li><strong>Start Date:</strong> When your event begins</li>
                    <li><strong>End Date:</strong> When your event concludes</li>
                    <li>Both dates are required</li>
                    <li>End date should be after start date</li>
                  </ul>
                </div>
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-semibold mb-2">Registration Countdown</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Enable a countdown timer that shows when registrations will open:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Toggle to enable/disable the countdown feature</li>
                    <li>When enabled, set the date and time when registrations unlock</li>
                    <li>Attendees see a live countdown until the specified time</li>
                    <li>After the countdown ends, registrations become active</li>
                    <li>Useful for creating anticipation and managing registration flow</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Example:</strong> Set registration to open 7 days before the event starts, creating an "early bird" registration period.
                  </p>
                </div>
              </div>
            </div>

            <div id="contact-support">
              <h3 className="text-xl font-semibold mb-3">Contact & Support</h3>
              <p className="mb-3 text-muted-foreground leading-relaxed">
                Provide contact information so attendees can reach the organizing team with questions or concerns.
              </p>
              <div className="space-y-4">
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-semibold mb-2">Contact Phone</h4>
                  <p className="text-sm text-muted-foreground">
                    Phone number for event inquiries. Displayed on the event page for attendees to contact organizers.
                  </p>
                </div>
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-semibold mb-2">Contact Email</h4>
                  <p className="text-sm text-muted-foreground">
                    Email address for event inquiries. Used for official communication and displayed on the event page.
                  </p>
                </div>
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-semibold mb-2">WhatsApp Group Link</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Optional WhatsApp group link for event communication:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Create a WhatsApp group for your event</li>
                    <li>Copy the group invite link</li>
                    <li>Paste the link in this field</li>
                    <li>Link is displayed on the registration page</li>
                    <li>Attendees can join the group for updates and discussions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="sub-event-settings">
              <h3 className="text-xl font-semibold mb-3">Sub-Event Settings</h3>
              <p className="mb-3 text-muted-foreground leading-relaxed">
                For parent events, you can add, edit, and manage sub-events. Each sub-event has its own settings that can be configured independently.
              </p>
              <div className="p-5 rounded-lg border bg-card">
                <h4 className="font-semibold mb-2">Managing Sub-Events</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  From the event settings form:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                  <li>Add new sub-events using the "Add Sub-Event" button</li>
                  <li>Switch between sub-events using tabs</li>
                  <li>Edit individual sub-event details</li>
                  <li>Remove sub-events if no longer needed</li>
                  <li>Each sub-event can have its own title, description, schedule, pricing, and features</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Learn more about sub-events in the <Link href="/docs/event-management/child-events" className="text-primary hover:underline">Child Events</Link> documentation.
                </p>
              </div>
            </div>

            <div id="saving-changes">
              <h3 className="text-xl font-semibold mb-3">Saving Changes</h3>
              <p className="mb-3 text-muted-foreground leading-relaxed">
                All changes are saved when you submit the form. The system validates all required fields before saving.
              </p>
              <div className="p-5 rounded-lg border bg-card">
                <h4 className="font-semibold mb-2">Save Process</h4>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside ml-4">
                  <li>Fill in or modify event settings</li>
                  <li>Click "Save" or "Update Event" button</li>
                  <li>System validates all required fields</li>
                  <li>Changes are saved to the database</li>
                  <li>Success message confirms the update</li>
                  <li>Changes are immediately reflected in the event</li>
                </ol>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Validation:</strong> Required fields (Event Name, Description, Location) must be filled before saving. 
                  Date validations ensure logical date ranges.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="advanced-settings">
          <h2 id="advanced-event-settings" className="text-2xl font-semibold mb-4">Advanced Event Settings</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Additional settings available when creating or editing sub-events (or single events). These settings control event behavior and features.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Team Event Settings</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Enable team registrations for events like hackathons or competitions:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Enable Team Event:</strong> Toggle to allow team registrations</li>
                <li><strong>Min. Team Size:</strong> Minimum number of members required per team (default: 2)</li>
                <li><strong>Max. Team Size:</strong> Maximum number of members allowed per team (default: 4)</li>
                <li>When enabled, registration form shows team name and member fields</li>
                <li>Each team member must provide their details</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Pricing & Capacity</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Configure event pricing and attendance limits:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Free Event:</strong> Toggle to make the event free (no payment required)</li>
                <li><strong>Price:</strong> Set fixed price for paid events</li>
                <li><strong>Special Pricing:</strong> Enable multiple pricing tiers (e.g., IEEE Member, Student, Professional)</li>
                <li><strong>Capacity:</strong> Maximum number of attendees (default: 50)</li>
                <li><strong>Points:</strong> Points awarded for event participation</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Additional Features</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Optional features that can be enabled per event:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Accommodation:</strong> Offer accommodation with pricing and details</li>
                <li><strong>Food Coupons:</strong> Enable food coupon purchases with pricing</li>
                <li><strong>Referral System:</strong> Allow attendees to use referral codes</li>
                <li><strong>WhatsApp Group:</strong> Display WhatsApp group link on registration page</li>
                <li><strong>Registration Countdown:</strong> Show countdown timer for registration launch</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="editing-limitations">
          <h2 id="editing-limitations--considerations" className="text-2xl font-semibold mb-4">Editing Limitations & Considerations</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Important considerations when editing events:
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Published Events</h3>
              <p className="text-sm text-muted-foreground mb-2">
                When editing published events:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Changes are immediately visible to attendees</li>
                <li>Updating dates may affect existing registrations</li>
                <li>Changing pricing doesn't affect already registered attendees</li>
                <li>Modifying capacity may impact registration availability</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event ID</h3>
              <p className="text-sm text-muted-foreground">
                The event ID is generated from the event name and cannot be changed after creation. 
                This ensures stable URLs and prevents broken links. If you need a different ID, create a new event.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Existing Registrations</h3>
              <p className="text-sm text-muted-foreground">
                Be cautious when modifying settings that affect existing registrations. 
                For example, changing team size limits won't affect already registered teams, but may prevent new team registrations.
              </p>
            </div>
          </div>
        </div>

        <div id="best-practices">
          <h2 id="best-practices" className="text-2xl font-semibold mb-4">Best Practices</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Tips for effectively managing event settings:
          </p>

          <div className="p-6 rounded-lg border bg-primary/5">
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li className="leading-relaxed"><strong>Review Before Publishing:</strong> Double-check all settings before changing status to "Published"</li>
              <li className="leading-relaxed"><strong>Test Registration:</strong> After making changes, test the registration process to ensure everything works</li>
              <li className="leading-relaxed"><strong>Update Banner:</strong> Use high-quality, relevant images for your event banner</li>
              <li className="leading-relaxed"><strong>Clear Descriptions:</strong> Write clear, detailed descriptions to help attendees understand your event</li>
              <li className="leading-relaxed"><strong>Contact Information:</strong> Keep contact details up-to-date for attendee inquiries</li>
              <li className="leading-relaxed"><strong>Schedule Carefully:</strong> Ensure event dates and registration countdown dates are logical</li>
              <li className="leading-relaxed"><strong>Capacity Planning:</strong> Set appropriate capacity limits based on venue constraints</li>
              <li className="leading-relaxed"><strong>Feature Selection:</strong> Enable only features you actually need to avoid confusion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
