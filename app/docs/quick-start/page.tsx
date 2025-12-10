export default function QuickStartPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Get Started
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Quick Start
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Get up and running with Vihaya in just a few minutes.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your First Event</h2>
          <p className="mb-4">
            Creating your first event with Vihaya is simple. Follow these steps:
          </p>
          
          <ol className="list-decimal list-inside space-y-4 ml-4">
            <li>
              <strong>Sign Up or Log In</strong>
              <p className="text-sm text-muted-foreground mt-1">
                Create your account or log in to your existing Vihaya account.
              </p>
            </li>
            <li>
              <strong>Create a New Event</strong>
              <p className="text-sm text-muted-foreground mt-1">
                Click on "Create Event" and fill in the basic details like event name, date, and location.
              </p>
            </li>
            <li>
              <strong>Configure Event Settings</strong>
              <p className="text-sm text-muted-foreground mt-1">
                Set up ticket types, pricing, and registration form fields.
              </p>
            </li>
            <li>
              <strong>Customize Your Event Page</strong>
              <p className="text-sm text-muted-foreground mt-1">
                Add your branding, description, and images to make your event page stand out.
              </p>
            </li>
            <li>
              <strong>Publish and Share</strong>
              <p className="text-sm text-muted-foreground mt-1">
                Once everything looks good, publish your event and share the link with your audience.
              </p>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features to Explore</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">QR Code Check-ins</h3>
              <p className="text-sm text-muted-foreground">
                Generate QR codes for each attendee and scan them at the event for quick check-ins.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Monitor ticket sales, attendance, and engagement metrics in real-time.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Guest Management</h3>
              <p className="text-sm text-muted-foreground">
                Manage your guest list, send updates, and track attendance easily.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Payment Processing</h3>
              <p className="text-sm text-muted-foreground">
                Accept secure payments through integrated payment gateways.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border bg-primary/5">
          <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            If you run into any issues or have questions, check out our{" "}
            <a href="/docs/guides" className="text-primary hover:underline">
              comprehensive guides
            </a>{" "}
            or reach out to our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
