import Image from "next/image";

export default function EventAnalyticsPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Event Analytics
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Comprehensive analytics and insights for your events. Track registrations, revenue, performance metrics, and gain valuable insights to improve your future events.
      </p>

      <div className="space-y-8 leading-7">
        <div id="overview">
          <h2 id="overview" className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Event Analytics provides real-time insights into your event's performance. All metrics update automatically as registrations come in, 
            giving you instant visibility into registration trends, revenue, and attendee engagement.
          </p>
          <div className="p-5 rounded-lg border bg-primary/5 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Real-Time Updates:</strong> All analytics are calculated in real-time from live registration data. 
              No manual refresh needed - metrics update automatically as your event progresses.
            </p>
          </div>
          
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/events/event-analytics-dashboard.png"
                alt="Event analytics dashboard showing summary cards for Total Events, Registrations, Revenue, and registration trends graph with peak registration hours"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="financial-analytics">
          <h2 id="financial-analytics" className="text-2xl font-semibold mb-4">Financial Analytics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Track all financial aspects of your event with comprehensive revenue metrics.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Total Revenue</h3>
              <p className="text-xs text-muted-foreground mb-2">
                Sum of all successful payments from:
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside ml-2">
                <li>Event registration fees</li>
                <li>Food coupon purchases</li>
                <li>Accommodation charges</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-2">
                Calculated from <code className="bg-muted px-1 rounded">finalPrice</code> or <code className="bg-muted px-1 rounded">basePrice</code> of each registration.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Average Ticket Price</h3>
              <p className="text-xs text-muted-foreground">
                Calculated by dividing total revenue by the number of paid registrations. 
                This metric helps you understand the average amount each attendee paid.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Pending Payments</h3>
              <p className="text-xs text-muted-foreground">
                Count of registrations with payment status that is not "completed" or "free". 
                Helps you track which registrations still need payment processing.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Payment Status Breakdown</h3>
              <p className="text-xs text-muted-foreground">
                Track registrations by payment status:
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside ml-2 mt-1">
                <li>Completed payments</li>
                <li>Free registrations</li>
                <li>Pending payments</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="registration-analytics">
          <h2 id="registration-analytics" className="text-2xl font-semibold mb-4">Registration Analytics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Monitor registration trends and patterns to understand attendee behavior.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Total Registrations</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Real-time count of all registered attendees, including:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Paid registrations</li>
                <li>Free registrations</li>
                <li>Team registrations (counted as one registration per team)</li>
                <li>Individual registrations</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Registration Trends</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Track registration patterns over time:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Registration timestamps for each attendee</li>
                <li>Peak registration periods</li>
                <li>Registration velocity (registrations per hour/day)</li>
                <li>Early bird vs last-minute registrations</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Registration Sources</h3>
              <p className="text-sm text-muted-foreground">
                Track where registrations come from, including referral IDs if the referral system is enabled. 
                This helps you understand which marketing channels are most effective.
              </p>
            </div>
          </div>
          
          <div className="my-6 grid gap-6 md:grid-cols-2">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/events/analytics-by-college-year.png"
                alt="Analytics charts showing registrations by college (bar chart) and registrations by year (donut chart)"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/events/analytics-by-year-department.png"
                alt="Analytics charts showing registrations by year (donut chart) and registrations by department (bar chart)"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="organizer-analytics">
          <h2 id="organizer-level-analytics" className="text-2xl font-semibold mb-4">Organizer-Level Analytics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            View aggregated analytics across all your events to understand your overall performance as an organizer.
          </p>

          <div className="grid gap-4 md:grid-cols-3 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Total Events</h3>
              <p className="text-xs text-muted-foreground">
                Count of all events you have created, regardless of status (Draft, Published, Archived).
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Total Registrations</h3>
              <p className="text-xs text-muted-foreground">
                Sum of all registrations across all your events. Gives you a bird's-eye view of your total reach.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Total Revenue</h3>
              <p className="text-xs text-muted-foreground">
                Cumulative revenue from all your events. Helps track your overall financial performance.
              </p>
            </div>
          </div>
        </div>

        <div id="event-status-analytics">
          <h2 id="event-status-analytics" className="text-2xl font-semibold mb-4">Event Status Analytics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Track events by their status to understand your event pipeline.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Status Categories</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li><strong>Draft:</strong> Events in planning stage, not yet published</li>
                <li><strong>Published:</strong> Live events accepting registrations</li>
                <li><strong>Archived:</strong> Completed or cancelled events</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Status-Based Filtering</h3>
              <p className="text-sm text-muted-foreground">
                Filter and view analytics for events by status. This helps you:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4 mt-2">
                <li>Focus on active events</li>
                <li>Review completed event performance</li>
                <li>Plan future events based on past data</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="sub-event-analytics">
          <h2 id="sub-event-analytics" className="text-2xl font-semibold mb-4">Sub-Event Analytics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            For parent events with sub-events, track analytics for each sub-event individually.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Per Sub-Event Metrics</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Each sub-event has its own analytics:
              </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li>Registration count for that specific sub-event</li>
              <li>Revenue generated from sub-event registrations</li>
              <li>Capacity utilization (registrations vs capacity)</li>
              <li>Sub-event status and performance</li>
            </ul>
          </div>
        </div>

        <div id="analytics-display">
          <h2 id="analytics-display" className="text-2xl font-semibold mb-4">Analytics Display</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Analytics are presented in an easy-to-understand visual format.
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Metric Cards</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Each metric is displayed in a card with:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Icon representing the metric type</li>
                <li>Large, bold value for easy reading</li>
                <li>Descriptive title</li>
                <li>Color-coded for quick visual assessment</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Responsive Layout</h3>
              <p className="text-sm text-muted-foreground">
                Analytics cards adapt to screen size:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4 mt-2">
                <li>Desktop: 4 cards per row</li>
                <li>Tablet: 2 cards per row</li>
                <li>Mobile: 1 card per row (stacked)</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Color Coding</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Metrics use color coding for quick identification:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Green: Revenue and positive metrics</li>
                <li>Blue: Registration counts</li>
                <li>Orange: Pending items or warnings</li>
                <li>Purple: Average calculations</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="real-time-updates">
          <h2 id="real-time-updates" className="text-2xl font-semibold mb-4">Real-Time Updates</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            All analytics update automatically using real-time database streams.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Automatic Refresh</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Analytics are recalculated automatically when:
              </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li>New registrations are added</li>
              <li>Payment status changes</li>
              <li>Event data is updated</li>
              <li>Sub-events are modified</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              No manual refresh needed - you always see the latest data.
            </p>
          </div>
        </div>

        <div id="exporting-analytics">
          <h2 id="exporting-analytics" className="text-2xl font-semibold mb-4">Exporting Analytics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Export analytics data for external analysis, reporting, or record-keeping.
          </p>

          <div className="p-5 rounded-lg border bg-card mt-4">
            <h3 className="font-semibold mb-2">Export Options</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Analytics data can be included in event reports:
              </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
              <li>PDF reports with formatted analytics</li>
              <li>Excel/CSV exports with raw data</li>
              <li>Summary statistics in reports</li>
              <li>Historical data for trend analysis</li>
            </ul>
          </div>
        </div>

        <div id="using-analytics">
          <h2 id="using-analytics-effectively" className="text-2xl font-semibold mb-4">Using Analytics Effectively</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Tips for leveraging analytics to improve your events:
          </p>

          <div className="p-6 rounded-lg border bg-primary/5">
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li className="leading-relaxed"><strong>Monitor Trends:</strong> Track registration velocity to understand when most people register</li>
              <li className="leading-relaxed"><strong>Pricing Optimization:</strong> Use average ticket price to evaluate if your pricing is effective</li>
              <li className="leading-relaxed"><strong>Payment Follow-up:</strong> Monitor pending payments and follow up with attendees</li>
              <li className="leading-relaxed"><strong>Capacity Planning:</strong> Use registration counts to plan for venue capacity and resources</li>
              <li className="leading-relaxed"><strong>Revenue Forecasting:</strong> Track revenue trends to predict final event revenue</li>
              <li className="leading-relaxed"><strong>Compare Events:</strong> Use organizer-level analytics to compare performance across events</li>
              <li className="leading-relaxed"><strong>Sub-Event Performance:</strong> Identify which sub-events are most popular and adjust accordingly</li>
              <li className="leading-relaxed"><strong>Post-Event Analysis:</strong> Review analytics after events to learn and improve for future events</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
