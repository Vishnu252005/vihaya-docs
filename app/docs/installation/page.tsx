export default function InstallationPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Get Started
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Installation
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Get Vihaya up and running in minutes with our simple installation guide.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <p className="mb-4">
            Before installing Vihaya, make sure you have the following:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Node.js 18.0 or higher</li>
            <li>npm or yarn package manager</li>
            <li>A modern web browser</li>
            <li>An active internet connection</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Installation Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Clone the Repository</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>git clone https://github.com/Vishnu252005/Vihaya-App.git</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">2. Install Dependencies</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>npm install</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">3. Configure Environment Variables</h3>
              <p className="mb-2">Create a <code className="bg-muted px-1 py-0.5 rounded">.env</code> file in the root directory:</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">4. Run the Development Server</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>npm run dev</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p>
            Once installation is complete, check out our{" "}
            <a href="/docs/quick-start" className="text-primary hover:underline">
              Quick Start guide
            </a>{" "}
            to get started with Vihaya.
          </p>
        </div>
      </div>
    </div>
  );
}
