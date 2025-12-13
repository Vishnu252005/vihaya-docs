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
    description: "Your all-in-one platform for event management, engineering notes, and AI-powered study assistance. Learn about Vihaya's core features and get started today.",
    href: "/docs",
    category: "Get Started",
    keywords: ["Vihaya", "Introduction", "Getting Started", "Event Management", "Engineering Notes", "AI Assistant"],
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
  
  // Engineering Notes
  {
    title: "Notes Overview",
    description: "Overview of engineering notes features including markdown support, code blocks, and organization tools.",
    href: "/docs/notes/overview",
    category: "Engineering Notes",
    keywords: ["notes", "overview", "note-taking", "engineering notes"],
  },
  {
    title: "Creating Notes",
    description: "Learn how to create and format notes with markdown, headings, and rich text.",
    href: "/docs/notes/creating-notes",
    category: "Engineering Notes",
    keywords: ["create notes", "note creation", "writing notes", "formatting"],
  },
  {
    title: "Markdown",
    description: "Use markdown syntax to format your notes with headings, lists, links, and more.",
    href: "/docs/notes/markdown",
    category: "Engineering Notes",
    keywords: ["markdown", "formatting", "syntax", "text formatting"],
  },
  {
    title: "Code Blocks",
    description: "Add code blocks with syntax highlighting to your notes for programming examples.",
    href: "/docs/notes/code-blocks",
    category: "Engineering Notes",
    keywords: ["code blocks", "syntax highlighting", "programming", "code"],
  },
  {
    title: "Organizing Notes",
    description: "Organize your notes with folders, tags, and categories for easy navigation.",
    href: "/docs/notes/organizing",
    category: "Engineering Notes",
    keywords: ["organize", "folders", "tags", "categories", "organization"],
  },
  {
    title: "Search",
    description: "Search through your notes quickly and efficiently to find what you need.",
    href: "/docs/notes/search",
    category: "Engineering Notes",
    keywords: ["search", "find", "search notes", "note search"],
  },
  {
    title: "Sharing Notes",
    description: "Share your notes with others through links, permissions, and collaboration features.",
    href: "/docs/notes/sharing",
    category: "Engineering Notes",
    keywords: ["sharing", "share notes", "collaboration", "permissions"],
  },
  
  // AI Assistant
  {
    title: "AI Assistant Overview",
    description: "Overview of Vihaya's AI Assistant features for study assistance and note enhancement.",
    href: "/docs/ai/overview",
    category: "AI Assistant",
    keywords: ["AI", "assistant", "overview", "artificial intelligence"],
  },
  {
    title: "Getting Started with AI",
    description: "Start using Vihaya's AI Assistant to enhance your learning experience. Learn how to access and interact with the AI.",
    href: "/docs/ai/getting-started",
    category: "AI Assistant",
    keywords: ["AI getting started", "AI tutorial", "AI assistant", "learn AI"],
  },
  {
    title: "AI Commands",
    description: "Learn about available AI commands and how to use them effectively.",
    href: "/docs/ai/commands",
    category: "AI Assistant",
    keywords: ["AI commands", "commands", "AI usage", "AI features"],
  },
  {
    title: "Note Enhancement",
    description: "Use AI to enhance, improve, and expand your notes with additional information and insights.",
    href: "/docs/ai/note-enhancement",
    category: "AI Assistant",
    keywords: ["note enhancement", "enhance notes", "AI notes", "improve notes"],
  },
  {
    title: "Study Assistance",
    description: "Get AI-powered study assistance including explanations, summaries, and learning support.",
    href: "/docs/ai/study-assistance",
    category: "AI Assistant",
    keywords: ["study assistance", "learning", "study help", "AI study"],
  },
  {
    title: "Q&A",
    description: "Frequently asked questions about the AI Assistant and common use cases.",
    href: "/docs/ai/qa",
    category: "AI Assistant",
    keywords: ["FAQ", "questions", "answers", "AI Q&A", "help"],
  },
];

/**
 * Search through documentation pages
 * @param query - Search query string
 * @returns Array of matching search results
 */
export function searchDocs(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
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

