import Image from "next/image";

export default function InstallationPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-accent-ink text-sm font-medium mb-4">
        Get Started
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Installation
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Run Vihaya Events in a browser, and use the mobile app on event day for gate scanning and check-in.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get the Vihaya Events app</h2>
          <p className="mb-4">
            The mobile app is what you run ON event day — gate scanning, check-in and live counts. It is on both Android and iOS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/logos/vihaya-events-mark-lg.png"
                alt="Vihaya Events"
                width={120}
                height={120}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Mobile app</h3>
                <p className="mb-4 text-muted-foreground">
                  Scan tickets at the gate, check attendees in and watch registrations arrive live.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.vihaya.events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 border border-border bg-background hover:bg-accent hover:text-accent-foreground px-5 py-3 rounded-lg transition-colors font-medium no-underline"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/vihaya-events/id6785098789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 border border-border bg-background hover:bg-accent hover:text-accent-foreground px-5 py-3 rounded-lg transition-colors font-medium no-underline"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    App Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Use Vihaya Events on the web</h2>
          <p className="mb-4">
            Use Vihaya directly in your web browser - no installation required.
          </p>
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Visit events.vihaya.app</h3>
                <p className="text-muted-foreground mb-4">
                  Access all Vihaya features through your web browser.
                </p>
                <a
                  href="https://events.vihaya.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  Open events.vihaya.app
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Mobile app</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Android 5.0 (API level 21) or higher</li>
                <li>iOS 13.0 or later</li>
                <li>Internet connection required</li>
                <li>50 MB free storage space</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Web Browser</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                <li>Internet connection required</li>
                <li>JavaScript enabled</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p>
            Once you've installed Vihaya, check out our{" "}
            <a href="/docs/quick-start" className="text-primary hover:underline">
              Quick Start guide
            </a>{" "}
            to get started with all the features.
          </p>
        </div>
      </div>
    </div>
  );
}
