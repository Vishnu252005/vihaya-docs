export interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string[];
}

// Documentation pages index
const docsIndex: SearchResult[] = [
  // Get Started
  {
    title: "Introduction to Vihaya",
    description: "Documentation for Vihaya Events — publish events, manage registrations and check-in, and build on the REST API.",
    href: "/docs",
    category: "Get Started",
    keywords: ["Vihaya Events", "Introduction", "Getting Started", "Event Management", "API Reference", "SDKs"],
  },
  {
    title: "Quick Start",
    description: "Get up and running with Vihaya in just a few minutes. Learn how to create your first event and explore key features.",
    href: "/docs/quick-start",
    category: "Get Started",
    keywords: ["quick start", "first event", "getting started", "tutorial"],
  },
  {
    title: "Installation",
    description: "Installation guide for Vihaya platform.",
    href: "/docs/installation",
    category: "Get Started",
    keywords: ["installation", "setup", "install"],
  },
  
  // Event Management
  {
    title: "Event Overview",
    description: "Overview of event management features in Vihaya.",
    href: "/docs/event-overview",
    category: "Event Management",
    keywords: ["events", "overview", "event management"],
  },
  {
    title: "Creating Events",
    description: "Step-by-step guide to creating your first event in Vihaya. Learn how to set up single events, parent events with sub-events, and configure all available features.",
    href: "/docs/event-management/creating-events",
    category: "Event Management",
    keywords: ["create event", "event creation", "setup event", "event configuration"],
  },
  {
    title: "Child Events",
    description: "Learn how to create and manage child events (sub-events) within parent events.",
    href: "/docs/event-management/child-events",
    category: "Event Management",
    keywords: ["child events", "sub-events", "parent events", "multi-day events"],
  },
  {
    title: "Event Settings",
    description: "Configure event settings including status, visibility, and basic information.",
    href: "/docs/event-management/event-settings",
    category: "Event Management",
    keywords: ["event settings", "configuration", "event status", "visibility"],
  },
  {
    title: "Form Builder",
    description: "Build custom registration forms for your events with various field types.",
    href: "/docs/event-management/form-builder",
    category: "Event Management",
    keywords: ["form builder", "registration form", "custom fields", "form fields"],
  },
  {
    title: "Guests Management",
    description: "Manage your guest list, track registrations, and handle attendee information.",
    href: "/docs/event-management/guests-management",
    category: "Event Management",
    keywords: ["guests", "attendees", "registrations", "guest list", "attendee management"],
  },
  {
    title: "QR Scanning",
    description: "Use QR codes for quick and efficient event check-ins and verification.",
    href: "/docs/event-management/qr-scanning",
    category: "Event Management",
    keywords: ["QR code", "check-in", "scanning", "verification", "QR scanning"],
  },
  {
    title: "In-Event",
    description: "Manage your event during the event day, including check-ins and real-time updates.",
    href: "/docs/event-management/in-event",
    category: "Event Management",
    keywords: ["in-event", "check-in", "event day", "real-time"],
  },
  {
    title: "Post-Event",
    description: "Post-event activities including analytics, feedback, and follow-up actions.",
    href: "/docs/event-management/post-event",
    category: "Event Management",
    keywords: ["post-event", "analytics", "feedback", "follow-up"],
  },
  {
    title: "Event Analytics",
    description: "Track and analyze event performance, attendance, and engagement metrics.",
    href: "/docs/event-management/event-analytics",
    category: "Event Management",
    keywords: ["analytics", "metrics", "statistics", "performance", "tracking"],
  },
  {
    title: "Payment & Pricing",
    description: "Configure payment options, pricing tiers, and payment processing for your events.",
    href: "/docs/event-management/payment-pricing",
    category: "Event Management",
    keywords: ["payment", "pricing", "tickets", "pricing tiers", "payment processing"],
  },
  {
    title: "Organizer Profile",
    description: "Set up and manage your organizer profile and branding.",
    href: "/docs/event-management/organizer-profile",
    category: "Event Management",
    keywords: ["organizer", "profile", "branding", "settings"],
  },
];

/**
 * Search through documentation pages
 * @param query - Search query string
 * @returns Array of matching search results
 */
export function searchDocs(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [
  // API Reference
  {
    title: "API Reference",
    description: "Build on Vihaya Events. REST API for events, registrations and payments from your own front end.",
    href: "/docs/api",
    category: "API Reference",
    keywords: ["api", "rest", "developer", "integration", "headless"],
  },
  {
    title: "Authentication",
    description: "How API keys work — scoping, origin pinning, revocation and the publish gate.",
    href: "/docs/api/authentication",
    category: "API Reference",
    keywords: ["api key", "x-api-key", "authentication", "security"],
  },
  {
    title: "Taking Payment",
    description: "The two-call headless flow, the Razorpay handoff, and where the money settles.",
    href: "/docs/api/payments",
    category: "API Reference",
    keywords: ["payment", "razorpay", "checkout", "headless", "settlement"],
  },
  {
    title: "Endpoints",
    description: "Every endpoint, generated from the live OpenAPI specification.",
    href: "/docs/api/endpoints",
    category: "API Reference",
    keywords: ["endpoints", "openapi", "reference", "routes"],
  },
  {
    title: "SDKs",
    description: "Official libraries for JavaScript, Python, PHP, Ruby, Go, Java and Flutter.",
    href: "/docs/api/sdks",
    category: "API Reference",
    keywords: ["sdk", "npm", "pip", "composer", "gem", "library"],
  },
  {
    title: "Webhooks",
    description: "Signed callbacks when a registration is confirmed, and how to verify them.",
    href: "/docs/api/webhooks",
    category: "API Reference",
    keywords: ["webhook", "hmac", "signature", "callback", "sync"],
  },
];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/).filter(word => word.length > 0);

  // Score each result based on relevance
  const scoredResults = docsIndex.map(result => {
    let score = 0;
    const titleLower = result.title.toLowerCase();
    const descriptionLower = result.description.toLowerCase();
    const categoryLower = result.category.toLowerCase();
    const keywordsLower = (result.keywords || []).join(" ").toLowerCase();
    const searchableText = `${titleLower} ${descriptionLower} ${categoryLower} ${keywordsLower}`;

    // Exact title match gets highest score
    if (titleLower === normalizedQuery) {
      score += 100;
    } else if (titleLower.includes(normalizedQuery)) {
      score += 50;
    }

    // Title word matches
    queryWords.forEach(word => {
      if (titleLower.includes(word)) {
        score += 20;
      }
    });

    // Description matches
    if (descriptionLower.includes(normalizedQuery)) {
      score += 30;
    }
    queryWords.forEach(word => {
      if (descriptionLower.includes(word)) {
        score += 10;
      }
    });

    // Category match
    if (categoryLower.includes(normalizedQuery)) {
      score += 15;
    }

    // Keyword matches
    queryWords.forEach(word => {
      if (keywordsLower.includes(word)) {
        score += 5;
      }
    });

    // General text match
    if (searchableText.includes(normalizedQuery)) {
      score += 5;
    }

    return { result, score };
  });

  // Filter out results with score 0 and sort by score (descending)
  return scoredResults
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ result }) => result);
}

