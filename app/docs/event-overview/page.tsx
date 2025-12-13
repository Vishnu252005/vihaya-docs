import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = genMeta({
  title: "Event Overview",
  description: "A comprehensive guide to the event dashboard, including registration status, recent registrations, and organizer management. Learn how to access and use the Organizer Profile.",
  path: "/docs/event-overview",
  keywords: ["event overview", "organizer dashboard", "event management", "dashboard statistics", "event cards"],
});

export default function EventOverviewPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Event Overview
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        View and explore events in Vihaya. See event details, information, and sub-events for parent events.
      </p>

      <div className="space-y-8 leading-7">
        <div>
          <h2 id="event-details-view" className="text-2xl font-semibold mb-4">Event Details View</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            When viewing an event, you'll see comprehensive information including the event poster, title, date and time, location, description, and contact information.
          </p>
          
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/events/event-details-view.png"
                alt="Event details view showing event poster, title, date, location, about section, and contact information"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div>
          <h2 id="sub-events-sessions" className="text-2xl font-semibold mb-4">Sub-Events & Sessions</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            For parent events, you can view all sub-events and sessions. Each sub-event is displayed as a card showing its date, title, pricing, and registration status.
          </p>
          
          <div className="my-6">
            <div className="max-w-md mx-auto rounded-lg shadow-lg border overflow-hidden">
              <Image
                src="/images/events/event-details-with-sub-events.png"
                alt="Event details view showing sub-events section with event cards for Future of Generative AI and AI Ideathon"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
