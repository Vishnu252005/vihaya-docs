import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = genMeta({
  title: "AI-Powered Event Creation",
  description: "Learn how to create events using natural language with Vihaya's AI Assistant. Auto-fill event details, manage permissions, and create events instantly.",
  path: "/docs/ai/event-creation",
  keywords: ["AI event creation", "natural language events", "event management", "AI assistant", "auto-fill events"],
});

export default function AIEventCreationPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        AI Assistant
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        AI-Powered Event Creation
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Create events naturally using conversational AI. Just describe your event and let AI handle the rest.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 id="overview" className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            Vihaya's AI Assistant can create events for you using natural language. Simply describe your event in plain English, 
            and the AI will extract all necessary details, auto-fill required fields, and create the event instantly.
          </p>
          <p className="mb-4">
            The AI acts as an intelligent agent that understands your intent, not just keywords. It can distinguish between 
            questions about events and actual requests to create events.
          </p>
        </div>

        <div>
          <h2 id="visual-walkthrough" className="text-2xl font-semibold mb-4">Visual Walkthrough</h2>
          <p className="mb-6 text-muted-foreground">
            Follow along with this step-by-step visual guide to see how AI event creation works in action.
          </p>
          
          <div className="space-y-8">
            {/* Steps 1 & 2: Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 1: Request Event Creation */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Request Event Creation</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Start by simply typing your event request in the AI chat. You can be as simple as "Create an event" or as detailed as "Create a Python Workshop with speakers and accommodation".
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-event-creation-1.png" 
                    alt="Step 1: User requesting event creation in AI chat - 'Create a python workshop event'"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Step 2: AI Processing & Creation */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">AI Processing & Event Creation</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  The AI analyzes your request, extracts event details, auto-fills missing information from your profile, and creates the event. You'll see a real-time status update as the AI works.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-event-creation-2.png" 
                    alt="Step 2: AI processing event creation and showing success message with event details"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Steps 3 & 4: Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 3: Event in Events List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">View Event in Events List</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Your newly created event appears in the Events section with all the details. You can see the event card with title, date, location, price, and capacity information.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-event-creation-3.png" 
                    alt="Step 3: Events page showing the created Python Workshop event in the events list"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Step 4: Event Details Page */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold">Event Details & Management</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Click on the event to view full details, edit information, configure settings, and manage registrations. All event information is displayed in an organized, easy-to-read format.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-event-creation-4.png" 
                    alt="Step 4: Event details page showing complete information about the Python Workshop event"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 id="how-it-works" className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
            <li><strong>Ask to create an event:</strong> Simply say "Create an event" or "Create a Flutter Workshop"</li>
            <li><strong>AI extracts details:</strong> The AI analyzes your message and extracts event information</li>
            <li><strong>Auto-fills data:</strong> Missing required fields are auto-filled from your profile and sensible defaults</li>
            <li><strong>Creates event:</strong> The event is created instantly with all details properly formatted</li>
            <li><strong>Success notification:</strong> You receive a confirmation with event details and can open it directly</li>
          </ol>
        </div>

        <div>
          <h2 id="permissions" className="text-2xl font-semibold mb-4">Permissions & Access</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Who Can Create Events?</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Organizers:</strong> Can create events using AI</li>
                <li><strong>Admins:</strong> Can create events using AI</li>
                <li><strong>Super Admins:</strong> Can create events using AI</li>
                <li><strong>Regular Users:</strong> Can view event creation features but cannot create events</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">For Non-Authorized Users</h3>
              <p className="text-sm text-muted-foreground">
                If you don't have permission to create events, the AI will show you all available event creation form features 
                and explain how to become an organizer. You can still learn about event creation capabilities.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="usage-examples" className="text-2xl font-semibold mb-4">Usage Examples</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Simple Event Creation</h3>
              <code className="text-xs bg-muted px-2 py-1 rounded block mb-2">
                "Create an event"
              </code>
              <p className="text-sm text-muted-foreground">
                Creates an event with auto-filled defaults. AI will use your profile information for location, contact details, 
                and set sensible defaults for dates, capacity, and other fields.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event with Name</h3>
              <code className="text-xs bg-muted px-2 py-1 rounded block mb-2">
                "Create a Flutter Workshop"
              </code>
              <p className="text-sm text-muted-foreground">
                Creates a Flutter Workshop event. AI extracts the event type from the name and auto-fills other required fields.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Detailed Event Creation</h3>
              <code className="text-xs bg-muted px-2 py-1 rounded block mb-2">
                "Create an event for Flutter Workshop with 200 rupees and some speakers and need accommodation and coupon feature"
              </code>
              <p className="text-sm text-muted-foreground">
                AI extracts: event type (Workshop), title (Flutter Workshop), price (200 INR), speakers (adds to description), 
                accommodation feature, and coupon feature. All other fields are auto-filled.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Viewing Event Features</h3>
              <code className="text-xs bg-muted px-2 py-1 rounded block mb-2">
                "What are the event creation features?" or "Show me event form features"
              </code>
              <p className="text-sm text-muted-foreground">
                Shows all available event creation form features without creating an event. Useful for learning about capabilities.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="auto-filled-fields" className="text-2xl font-semibold mb-4">Auto-Filled Fields</h2>
          <p className="mb-4">
            When you create an event via AI, the following fields are automatically filled:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">From Your Profile</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Organizer location</li>
                <li>Contact phone number</li>
                <li>Contact email</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Sensible Defaults</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Start date: 7 days from now</li>
                <li>End date: 3 hours after start</li>
                <li>Capacity: 100 seats</li>
                <li>Price: 0 (free event)</li>
                <li>Currency: INR</li>
                <li>Type: Workshop (or extracted from title)</li>
                <li>Status: Draft</li>
                <li>Auto-generated tags based on title</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 id="extracted-fields" className="text-2xl font-semibold mb-4">AI-Extracted Fields</h2>
          <p className="mb-4">
            The AI intelligently extracts the following from your natural language description:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Event Title:</strong> Extracted from your description (e.g., "Flutter Workshop")</li>
            <li><strong>Event Type:</strong> Workshop, Conference, Seminar, Hackathon, etc.</li>
            <li><strong>Price:</strong> Extracted from mentions like "200 rupees", "500 rs", "free"</li>
            <li><strong>Description:</strong> Generated based on event type and title</li>
            <li><strong>Requirements:</strong> Extracted from mentions like "speakers", "accommodation", "coupon"</li>
            <li><strong>Tags:</strong> Auto-generated from title keywords (Flutter, Workshop, etc.)</li>
            <li><strong>Location:</strong> Extracted if mentioned, otherwise uses your profile location</li>
          </ul>
        </div>

        <div>
          <h2 id="best-practices" className="text-2xl font-semibold mb-4">Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Be specific:</strong> Include event name, type, and key details for better results</li>
            <li><strong>Mention price:</strong> Specify price if not free (e.g., "200 rupees", "500 INR")</li>
            <li><strong>Include features:</strong> Mention special features like "accommodation", "speakers", "coupon"</li>
            <li><strong>Review after creation:</strong> Always review the created event and edit if needed</li>
            <li><strong>Use natural language:</strong> Don't worry about format - just describe your event naturally</li>
          </ul>
        </div>

        <div>
          <h2 id="error-handling" className="text-2xl font-semibold mb-4">Error Handling</h2>
          <p className="mb-4">
            If event creation fails, the AI provides helpful error messages:
          </p>
          <div className="space-y-2">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">JSON Parsing Errors</h3>
              <p className="text-sm text-muted-foreground">
                If AI response is malformed, the system automatically falls back to creating a basic event with extracted 
                information (title, type, price) and uses defaults for other fields.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Network Errors</h3>
              <p className="text-sm text-muted-foreground">
                Clear error messages guide you to check your connection or try again.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Permission Errors</h3>
              <p className="text-sm text-muted-foreground">
                If you don't have permission, the AI explains how to become an organizer.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="next-steps" className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="mb-4">
            After creating an event with AI:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
            <li>Review the event details in the success message</li>
            <li>Click "Open Event" to view and edit the event</li>
            <li>Make any necessary adjustments to dates, location, or other details</li>
            <li>Configure additional settings like payment, registration form, etc.</li>
            <li>Publish the event when ready</li>
          </ol>
          <p className="mt-4">
            Learn more about{" "}
            <a href="/docs/event-management/creating-events" className="text-primary hover:underline">
              manual event creation
            </a>{" "}
            and{" "}
            <a href="/docs/event-management/event-settings" className="text-primary hover:underline">
              event settings
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

