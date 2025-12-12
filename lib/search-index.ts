export interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
}

export const searchIndex: SearchResult[] = [
  // Get Started
  {
    title: "Introduction to Vihaya",
    description: "Your all-in-one platform for event management, engineering notes, and AI-powered study assistance.",
    href: "/docs",
    category: "Get Started",
    keywords: ["introduction", "overview", "getting started", "vihaya", "features", "platform"],
  },
  {
    title: "Installation",
    description: "Get Vihaya on your device and start managing your events, notes, and projects.",
    href: "/docs/installation",
    category: "Get Started",
    keywords: ["install", "download", "setup", "android", "web", "app", "installation"],
  },
  {
    title: "Quick Start",
    description: "Get up and running with Vihaya quickly with this step-by-step guide.",
    href: "/docs/quick-start",
    category: "Get Started",
    keywords: ["quick start", "tutorial", "beginner", "guide", "getting started"],
  },
  
  // Event Management
  {
    title: "Event Overview",
    description: "Learn about Vihaya's comprehensive event management features and capabilities.",
    href: "/docs/event-overview",
    category: "Event Management",
    keywords: ["event", "overview", "management", "features", "events"],
  },
  {
    title: "Organizer Profile",
    description: "Set up and manage your organizer profile to create and manage events.",
    href: "/docs/event-management/organizer-profile",
    category: "Event Management",
    keywords: ["organizer", "profile", "setup", "account", "settings"],
  },
  {
    title: "Creating Events",
    description: "Step-by-step guide to creating and configuring events in Vihaya.",
    href: "/docs/event-management/creating-events",
    category: "Event Management",
    keywords: ["create", "event", "new event", "setup", "configuration"],
  },
  {
    title: "Edit Event Settings",
    description: "Learn how to edit and configure event settings, details, and preferences.",
    href: "/docs/event-management/event-settings",
    category: "Event Management",
    keywords: ["settings", "edit", "configure", "event settings", "preferences"],
  },
  {
    title: "Payment & Pricing",
    description: "Configure payment options, pricing, and Razorpay integration for your events.",
    href: "/docs/event-management/payment-pricing",
    category: "Event Management",
    keywords: ["payment", "pricing", "razorpay", "money", "fee", "cost", "price"],
  },
  {
    title: "Registration Form Fields",
    description: "Customize registration form fields and collect the information you need.",
    href: "/docs/event-management/form-builder",
    category: "Event Management",
    keywords: ["form", "registration", "fields", "customize", "builder", "form builder"],
  },
  {
    title: "Registration Management",
    description: "View, search, filter, and manage all event registrations and attendees.",
    href: "/docs/event-management/guests-management",
    category: "Event Management",
    keywords: ["registration", "guests", "attendees", "manage", "view", "search", "filter"],
  },
  {
    title: "Child Events",
    description: "Create and manage child events, sub-events, and event series.",
    href: "/docs/event-management/child-events",
    category: "Event Management",
    keywords: ["child events", "sub events", "series", "nested", "multiple events"],
  },
  {
    title: "QR Scanning and Check-In",
    description: "Use QR code scanning for quick and efficient event check-ins.",
    href: "/docs/event-management/qr-scanning",
    category: "Event Management",
    keywords: ["qr", "scanning", "check-in", "checkin", "qr code", "ticket"],
  },
  {
    title: "In-Event Features",
    description: "Manage your event in real-time with live features during the event.",
    href: "/docs/event-management/in-event",
    category: "Event Management",
    keywords: ["in-event", "live", "real-time", "during event", "management"],
  },
  {
    title: "Event Analytics",
    description: "Track and analyze event performance, registrations, and financial data.",
    href: "/docs/event-management/event-analytics",
    category: "Event Management",
    keywords: ["analytics", "statistics", "reports", "data", "tracking", "performance"],
  },
  {
    title: "Post Event Management",
    description: "Manage your event after it ends, including reports, data export, and follow-ups.",
    href: "/docs/event-management/post-event",
    category: "Event Management",
    keywords: ["post event", "after event", "reports", "export", "follow-up"],
  },
  
  // Engineering Notes
  {
    title: "Notes Overview",
    description: "Learn about Vihaya's powerful engineering notes features and capabilities.",
    href: "/docs/notes/overview",
    category: "Engineering Notes",
    keywords: ["notes", "overview", "engineering", "note-taking", "features"],
  },
  {
    title: "Creating Notes",
    description: "Create and format your engineering notes with markdown and rich text support.",
    href: "/docs/notes/creating-notes",
    category: "Engineering Notes",
    keywords: ["create", "notes", "new note", "writing", "format"],
  },
  {
    title: "Organizing Notes",
    description: "Organize your notes by subject, module, semester, and categories.",
    href: "/docs/notes/organizing",
    category: "Engineering Notes",
    keywords: ["organize", "organization", "folders", "categories", "structure"],
  },
  {
    title: "Markdown Support",
    description: "Use markdown syntax to format your notes with headers, lists, links, and more.",
    href: "/docs/notes/markdown",
    category: "Engineering Notes",
    keywords: ["markdown", "formatting", "syntax", "text", "format"],
  },
  {
    title: "Code Blocks",
    description: "Add code blocks with syntax highlighting to your engineering notes.",
    href: "/docs/notes/code-blocks",
    category: "Engineering Notes",
    keywords: ["code", "code blocks", "syntax", "highlighting", "programming"],
  },
  {
    title: "Search & Filter",
    description: "Find your notes quickly with powerful search and filter options.",
    href: "/docs/notes/search",
    category: "Engineering Notes",
    keywords: ["search", "filter", "find", "lookup", "query"],
  },
  {
    title: "Sharing Notes",
    description: "Share your notes with others and collaborate on study materials.",
    href: "/docs/notes/sharing",
    category: "Engineering Notes",
    keywords: ["share", "sharing", "collaborate", "export", "send"],
  },
  
  // AI Assistant
  {
    title: "AI Overview",
    description: "Learn about Vihaya's AI-powered study assistant and its capabilities.",
    href: "/docs/ai/overview",
    category: "AI Assistant",
    keywords: ["ai", "overview", "assistant", "artificial intelligence", "features"],
  },
  {
    title: "Getting Started with AI",
    description: "Start using Vihaya's AI assistant to enhance your learning experience.",
    href: "/docs/ai/getting-started",
    category: "AI Assistant",
    keywords: ["ai", "getting started", "tutorial", "beginner", "start"],
  },
  {
    title: "Study Assistance",
    description: "Get AI-powered help with your studies, explanations, and learning.",
    href: "/docs/ai/study-assistance",
    category: "AI Assistant",
    keywords: ["study", "assistance", "help", "learning", "explain"],
  },
  {
    title: "Note Enhancement",
    description: "Enhance your notes with AI suggestions, improvements, and summaries.",
    href: "/docs/ai/note-enhancement",
    category: "AI Assistant",
    keywords: ["enhance", "improve", "notes", "suggestions", "summary"],
  },
  {
    title: "Question & Answer",
    description: "Ask questions and get instant AI-powered answers to help you learn.",
    href: "/docs/ai/qa",
    category: "AI Assistant",
    keywords: ["question", "answer", "qa", "ask", "help", "query"],
  },
  {
    title: "AI Commands",
    description: "Learn about AI commands and how to use them effectively.",
    href: "/docs/ai/commands",
    category: "AI Assistant",
    keywords: ["commands", "ai commands", "shortcuts", "usage"],
  },
  {
    title: "Best Practices",
    description: "Best practices for using Vihaya's AI assistant effectively.",
    href: "/docs/ai/best-practices",
    category: "AI Assistant",
    keywords: ["best practices", "tips", "guide", "effective", "usage"],
  },
];

export function searchDocs(query: string): SearchResult[] {
  if (!query.trim()) {
    return [];
  }

  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/);

  const results = searchIndex
    .map((item) => {
      let score = 0;

      // Exact title match
      if (item.title.toLowerCase() === lowerQuery) {
        score += 100;
      }

      // Title contains query
      if (item.title.toLowerCase().includes(lowerQuery)) {
        score += 50;
      }

      // Title starts with query
      if (item.title.toLowerCase().startsWith(lowerQuery)) {
        score += 30;
      }

      // Description contains query
      if (item.description.toLowerCase().includes(lowerQuery)) {
        score += 20;
      }

      // Category match
      if (item.category.toLowerCase().includes(lowerQuery)) {
        score += 15;
      }

      // Keywords match
      queryWords.forEach((word) => {
        if (item.keywords.some((keyword) => keyword.toLowerCase().includes(word))) {
          score += 10;
        }
        if (item.keywords.some((keyword) => keyword.toLowerCase() === word)) {
          score += 5;
        }
      });

      // Word matches in title
      queryWords.forEach((word) => {
        if (item.title.toLowerCase().includes(word)) {
          score += 5;
        }
      });

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => (b as any).score - (a as any).score)
    .slice(0, 10);

  return results;
}

