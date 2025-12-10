export default function PostEventPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Post Event Management
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Complete your event lifecycle with comprehensive post-event management. Generate final reports, archive events, export data, and review analytics to improve future events.
      </p>

      <div className="space-y-8 leading-7">
        <div id="overview">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Post-event management is the final phase of your event lifecycle. After your event concludes, you can generate comprehensive reports, 
            archive the event, export data for external analysis, and review final analytics to learn and improve for future events.
          </p>
          <div className="p-5 rounded-lg border bg-primary/5 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> All event data remains accessible even after archiving. You can always view historical events, 
              download reports, and review analytics for completed events.
            </p>
          </div>
        </div>

        <div id="event-status-management">
          <h2 className="text-2xl font-semibold mb-4">Event Status Management</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            After your event ends, you should update the event status to reflect its completion.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Archiving Events</h3>
              <p className="text-sm text-muted-foreground mb-2">
                When your event is complete, change its status to "Archived":
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Navigate to the event management page</li>
                <li>Select the completed event</li>
                <li>Change status from "Published" to "Archived"</li>
                <li>Archived events are moved out of active event lists</li>
                <li>All data remains accessible for historical reference</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Benefits of Archiving:</strong> Keeps your active event list clean, makes it easier to find current events, 
                and organizes completed events for historical reference.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event Status Options</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Draft:</strong> Events still in planning stage</li>
                <li><strong>Published:</strong> Live events accepting registrations</li>
                <li><strong>Archived:</strong> Completed or cancelled events</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="final-reports">
          <h2 className="text-2xl font-semibold mb-4">Final Event Reports</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Generate comprehensive PDF reports with all event data, analytics, and registration information for record-keeping and analysis.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Generating Reports</h3>
              <p className="text-sm text-muted-foreground mb-2">
                To generate a final event report:
              </p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside ml-4">
                <li>Navigate to the event management detail page</li>
                <li>Click the "Download Report" button</li>
                <li>System generates a comprehensive PDF report</li>
                <li>Report opens in your device's PDF viewer</li>
                <li>You can save, print, or share the report</li>
              </ol>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Report Contents</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The PDF report includes comprehensive information:
              </p>
              <div className="space-y-3 mt-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Executive Summary</h4>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Total Registrations count</li>
                    <li>Total Revenue generated</li>
                    <li>Unique Colleges represented</li>
                    <li>Unique Departments represented</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Event Details</h4>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Event status</li>
                    <li>Event type</li>
                    <li>Date and time</li>
                    <li>Location</li>
                    <li>Base price</li>
                    <li>Points assigned</li>
                    <li>Creator information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Sub-Event Overview (if applicable)</h4>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Sub-event titles</li>
                    <li>Sub-event status</li>
                    <li>Registration count per sub-event</li>
                    <li>Pricing per sub-event</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Complete Registration List</h4>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Attendee name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>College name</li>
                    <li>Department</li>
                    <li>Amount paid</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Report Format</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Reports are generated as professional PDF documents with:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Formatted headers and footers</li>
                <li>Page numbers</li>
                <li>Organized sections with clear headings</li>
                <li>Tables for easy data reading</li>
                <li>Summary tiles for key metrics</li>
                <li>Professional styling suitable for sharing</li>
              </ul>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of generated PDF report here</p>
          </div>
        </div>

        <div id="final-analytics-review">
          <h2 className="text-2xl font-semibold mb-4">Final Analytics Review</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Review final analytics to understand your event's performance and identify areas for improvement.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Key Metrics to Review</h3>
              <div className="grid gap-3 md:grid-cols-2 mt-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Financial Performance</h4>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Total revenue vs target</li>
                    <li>Average ticket price</li>
                    <li>Payment completion rate</li>
                    <li>Revenue from food coupons</li>
                    <li>Revenue from accommodation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Registration Performance</h4>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Total registrations</li>
                    <li>Registration velocity over time</li>
                    <li>Capacity utilization</li>
                    <li>No-show rate (if tracked)</li>
                    <li>Team vs individual registrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Attendee Demographics</h4>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Colleges represented</li>
                    <li>Department distribution</li>
                    <li>Year of study breakdown</li>
                    <li>Geographic distribution</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Sub-Event Performance</h4>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Most popular sub-events</li>
                    <li>Sub-event registration distribution</li>
                    <li>Sub-event revenue breakdown</li>
                    <li>Capacity utilization per sub-event</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Using Analytics for Improvement</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Analyze the data to identify:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>What worked well (high registration, good revenue)</li>
                <li>What needs improvement (low attendance, pricing issues)</li>
                <li>Popular features (food coupons, accommodation, team events)</li>
                <li>Optimal pricing strategies</li>
                <li>Best registration timing</li>
                <li>Effective marketing channels</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="data-export">
          <h2 className="text-2xl font-semibold mb-4">Data Export</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Export event data in various formats for external analysis, accounting, or record-keeping.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Export Formats</h3>
              <div className="grid gap-3 md:grid-cols-2 mt-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">PDF Reports</h4>
                  <p className="text-xs text-muted-foreground">
                    Comprehensive formatted reports suitable for printing, sharing, or archival. Includes all event data, analytics, and registration lists.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Excel/CSV (Future)</h4>
                  <p className="text-xs text-muted-foreground">
                    Raw data export in spreadsheet format for detailed analysis, pivot tables, and custom calculations.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Exportable Data</h3>
              <p className="text-sm text-muted-foreground mb-2">
                All event data can be exported:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Complete registration list with all fields</li>
                <li>Payment information and transaction details</li>
                <li>Verification status (ticket and food coupon)</li>
                <li>Financial summary and revenue breakdown</li>
                <li>Sub-event data and analytics</li>
                <li>Event configuration and settings</li>
                <li>Timestamps and metadata</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="registration-management">
          <h2 className="text-2xl font-semibold mb-4">Post-Event Registration Management</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Even after the event, you can manage registrations for record-keeping and follow-up purposes.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Available Actions</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li><strong>View All Registrations:</strong> Access complete registration list with all details</li>
              <li><strong>Search Registrations:</strong> Find specific attendees by name, email, or phone</li>
              <li><strong>View Registration Details:</strong> See complete information for any registration</li>
              <li><strong>Delete Registrations:</strong> Remove registrations if needed (with confirmation)</li>
              <li><strong>Export Registration Data:</strong> Include registrations in reports</li>
            </ul>
          </div>
        </div>

        <div id="follow-up-activities">
          <h2 className="text-2xl font-semibold mb-4">Follow-Up Activities</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Use exported data and reports for post-event follow-up activities.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Communication</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Send thank you emails to attendees</li>
                <li>Request feedback and testimonials</li>
                <li>Share event photos and highlights</li>
                <li>Announce future events</li>
                <li>Send certificates or completion letters</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Analysis & Reporting</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Share reports with stakeholders</li>
                <li>Analyze data for insights</li>
                <li>Create presentations for sponsors</li>
                <li>Document lessons learned</li>
                <li>Plan improvements for next event</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Financial Reconciliation</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Reconcile payments with reports</li>
                <li>Process refunds if needed</li>
                <li>Generate invoices for accounting</li>
                <li>Track expenses vs revenue</li>
                <li>Calculate net profit/loss</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Record Keeping</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Archive event reports</li>
                <li>Maintain historical records</li>
                <li>Reference for future events</li>
                <li>Compliance and audit purposes</li>
                <li>Build event portfolio</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="event-cloning">
          <h2 className="text-2xl font-semibold mb-4">Event Cloning (Future Feature)</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            A planned feature that will allow you to clone successful events for easy reuse.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Cloning Benefits</h3>
            <p className="text-sm text-muted-foreground mb-2">
              When available, event cloning will allow you to:
              </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li>Copy event structure and settings</li>
              <li>Reuse successful configurations</li>
              <li>Save time when creating similar events</li>
              <li>Maintain consistency across event series</li>
              <li>Start with proven event templates</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              <strong>Note:</strong> Cloning will copy event settings but not registrations or historical data.
            </p>
          </div>
        </div>

        <div id="best-practices">
          <h2 className="text-2xl font-semibold mb-4">Post-Event Best Practices</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Recommended workflow for completing your event lifecycle:
          </p>

          <div className="p-6 rounded-lg border bg-primary/5">
            <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
              <li className="leading-relaxed">
                <strong>Immediately After Event:</strong> Review final check-in statistics and verify all attendees were properly checked in
              </li>
              <li className="leading-relaxed">
                <strong>Within 24 Hours:</strong> Generate and download the final event report for your records
              </li>
              <li className="leading-relaxed">
                <strong>Review Analytics:</strong> Analyze final metrics to understand event performance and identify successes and areas for improvement
              </li>
              <li className="leading-relaxed">
                <strong>Financial Reconciliation:</strong> Compare revenue in the system with actual payments received and resolve any discrepancies
              </li>
              <li className="leading-relaxed">
                <strong>Archive Event:</strong> Change event status to "Archived" to move it out of active event lists
              </li>
              <li className="leading-relaxed">
                <strong>Follow-Up:</strong> Use exported registration data to send thank you emails, request feedback, and share event highlights
              </li>
              <li className="leading-relaxed">
                <strong>Documentation:</strong> Save reports and analytics for future reference and to build your event portfolio
              </li>
              <li className="leading-relaxed">
                <strong>Lessons Learned:</strong> Document what worked well and what didn't to improve future events
              </li>
            </ol>
          </div>
        </div>

        <div id="data-retention">
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            All event data is retained indefinitely, allowing you to access historical information whenever needed.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Accessing Historical Events</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Even after archiving, you can:
              </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li>View archived events in your event list</li>
              <li>Access all registration data</li>
              <li>Review historical analytics</li>
              <li>Generate reports at any time</li>
              <li>Export data whenever needed</li>
              <li>Reference past events for planning</li>
            </ul>
          </div>
        </div>

        <div id="deleting-events">
          <h2 className="text-2xl font-semibold mb-4">Deleting Events</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            If you need to permanently remove an event, deletion is available but should be used with caution.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Deletion Process</h3>
            <p className="text-sm text-muted-foreground mb-2">
              To delete an event:
              </p>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside ml-4">
              <li>Navigate to the event management page</li>
              <li>Select the event you want to delete</li>
              <li>Click the delete button</li>
              <li>Confirm deletion in the dialog</li>
              <li>Event and all associated data are permanently removed</li>
            </ol>
            <div className="p-3 rounded bg-destructive/10 border border-destructive/20 mt-3">
              <p className="text-xs text-destructive font-semibold mb-1">⚠️ Warning</p>
              <p className="text-xs text-muted-foreground">
                Deleting an event permanently removes all data including registrations, payments, and analytics. 
                This action cannot be undone. Consider archiving instead if you may need the data later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
