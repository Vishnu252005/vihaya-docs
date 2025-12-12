"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Trash2, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  links?: Array<{ text: string; href: string }>;
  relatedTopics?: string[];
}

interface KnowledgeItem {
  keywords: string[];
  answer: string;
  links?: Array<{ text: string; href: string }>;
  relatedTopics?: string[];
}

// Comprehensive documentation knowledge base
const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: ["organizer", "profile", "dashboard", "statistics"],
    answer: "The Organizer Profile is your central dashboard showing:\n\n• **Dashboard Statistics**: Total events, registrations, upcoming events, published events, and total revenue\n• **Profile Information**: Name, email, profile picture, Instagram, LinkedIn links\n• **Event Cards**: All your events with quick actions (Details, Edit, Delete, Coupons)\n• **Quick Actions**: Create Event, View Analytics, Manage Events buttons\n• **Event Management**: Direct access to comprehensive event management features\n\nYou can edit your profile, upload/change profile picture, and manage social media links. All statistics update in real-time.",
    links: [
      { text: "Organizer Profile", href: "/docs/event-management/organizer-profile" },
      { text: "Event Overview", href: "/docs/event-overview" },
    ],
    relatedTopics: ["creating events", "event management", "analytics"],
  },
  {
    keywords: ["create", "event", "new event", "how to create"],
    answer: "To create an event:\n\n1. Go to your **Organizer Profile**\n2. Click **'Create Event'** button\n3. Fill in event details:\n   - Title, description, date, time, location\n   - Event type (Single event or Parent event with sub-events)\n   - Pricing (Free or Paid with Razorpay)\n   - Capacity and registration settings\n4. Configure features:\n   - Food coupons, accommodation, team events\n   - Special pricing categories\n   - Referral IDs, WhatsApp groups\n   - Registration countdown\n5. Add event banner image\n6. Publish the event\n\nFor detailed steps, check the Creating Events documentation.",
    links: [
      { text: "Creating Events", href: "/docs/event-management/creating-events" },
      { text: "Organizer Profile", href: "/docs/event-management/organizer-profile" },
    ],
    relatedTopics: ["event settings", "payment", "registration form"],
  },
  {
    keywords: ["payment", "pricing", "razorpay", "pay", "money", "price", "cost"],
    answer: "Payment in Vihaya is handled through **Razorpay** integration:\n\n**Payment Methods**:\n• Credit/Debit Cards\n• UPI (Unified Payments Interface)\n• Netbanking\n• Digital Wallets\n• External Wallets\n\n**Pricing Options**:\n• Free events (no payment required)\n• Single price for all attendees\n• Special pricing categories (e.g., Student, Professional, Early Bird)\n• Discount coupons\n• Referral IDs for special pricing\n\n**Security**:\n• All transactions are encrypted\n• PCI-DSS compliant\n• Secure payment gateway\n• Transaction IDs for tracking\n\n**Payment Flow**:\n1. User fills registration form\n2. Selects pricing category (if applicable)\n3. Applies coupon (if available)\n4. Redirected to Razorpay payment page\n5. Completes payment\n6. Receives confirmation and ticket\n\nCheck the Payment & Pricing documentation for complete details.",
    links: [
      { text: "Payment & Pricing", href: "/docs/event-management/payment-pricing" },
    ],
    relatedTopics: ["registration", "pricing categories", "coupons"],
  },
  {
    keywords: ["registration", "register", "attendee", "participant", "signup"],
    answer: "Registration Management allows you to:\n\n**View Registrations**:\n• See all registered attendees\n• View complete attendee details (name, email, phone, college, department, year)\n• Check payment status (Paid, Free, Pending)\n• View registration timestamps\n\n**Search & Filter**:\n• Search by name, email, phone, registration ID\n• Filter by payment status, date range, department\n• Filter by accommodation, food coupon status\n\n**Manage Registrations**:\n• View detailed registration information\n• Delete registrations if needed\n• Export registration data (CSV/PDF)\n• Track team registrations (for team events)\n\n**Registration Form Fields**:\n• Standard fields: Name, Email, Phone, College, Department, Year\n• Conditional fields based on event features:\n  - Accommodation request\n  - Food coupon selection\n  - Team member details (for team events)\n  - Referral ID\n\nCheck the Registration Management documentation for details.",
    links: [
      { text: "Registration Management", href: "/docs/event-management/guests-management" },
      { text: "Registration Form Fields", href: "/docs/event-management/form-builder" },
    ],
    relatedTopics: ["form fields", "export data", "delete registration"],
  },
  {
    keywords: ["qr", "scan", "check-in", "verify", "ticket", "coupon", "qr code"],
    answer: "QR codes are used for **event check-in** and **food coupon verification**:\n\n**Event Tickets**:\n• Each registration gets a unique QR code\n• QR code contains registration ID\n• Scan QR code at event entrance for check-in\n• System verifies registration and marks as checked-in\n• Prevents duplicate check-ins\n\n**Food Coupons**:\n• Food coupons have separate QR codes (starting with 'FC')\n• Scan food coupon QR codes at food counters\n• System verifies coupon and marks as used\n• Prevents duplicate redemptions\n\n**QR Scanner Features**:\n• Automatic QR code detection\n• Real-time verification\n• Success/error feedback\n• Works on mobile devices\n• Accessible from event management page\n\n**How to Use**:\n1. Go to Event Management Detail Page\n2. Click 'Scan QR Code' button\n3. Point camera at QR code\n4. System automatically verifies\n5. See confirmation message\n\nCheck the QR Scanning and Check-In documentation for complete guide.",
    links: [
      { text: "QR Scanning and Check-In", href: "/docs/event-management/qr-scanning" },
      { text: "In-Event Features", href: "/docs/event-management/in-event" },
    ],
    relatedTopics: ["check-in", "verification", "food coupons"],
  },
  {
    keywords: ["analytics", "report", "statistics", "revenue", "stats", "insights"],
    answer: "Event Analytics provides comprehensive insights:\n\n**Financial Analytics**:\n• Total revenue from all paid registrations\n• Average ticket price\n• Pending payments count\n• Revenue breakdown by event\n\n**Registration Analytics**:\n• Total registrations count\n• Paid vs free registrations\n• Registration trends\n• Department/college breakdown\n\n**Real-Time Updates**:\n• All analytics update automatically\n• No manual refresh needed\n• Live data as registrations come in\n\n**Reports**:\n• Download PDF reports (formatted documents)\n• Download CSV/Excel reports (for data analysis)\n• Comprehensive event reports with all details\n• Financial summaries and statistics\n\n**Organizer-Level Analytics**:\n• View analytics across all your events\n• Compare event performance\n• Track overall organizer statistics\n\nCheck the Event Analytics documentation for detailed information.",
    links: [
      { text: "Event Analytics", href: "/docs/event-management/event-analytics" },
      { text: "In-Event Features", href: "/docs/event-management/in-event" },
    ],
    relatedTopics: ["reports", "download", "statistics"],
  },
  {
    keywords: ["settings", "edit", "configure", "event settings", "banner", "schedule"],
    answer: "Event Settings allow you to configure:\n\n**Basic Settings**:\n• Event banner image\n• Event overview and description\n• Event schedule (date, time, location)\n• Contact information\n\n**Sub-Event Settings**:\n• Configure individual sub-events\n• Set different pricing for sub-events\n• Enable/disable features per sub-event\n\n**Advanced Settings**:\n• Team events (min/max team size)\n• Pricing and capacity\n• Additional features:\n  - Food coupons\n  - Accommodation\n  - Special pricing categories\n  - Referral IDs\n  - WhatsApp groups\n  - Registration countdown\n\n**Editing Limitations**:\n• Some settings can't be changed after event is published\n• Registration-related settings are locked after first registration\n• Check documentation for specific limitations\n\nCheck the Edit Event Settings documentation for complete details.",
    links: [
      { text: "Edit Event Settings", href: "/docs/event-management/event-settings" },
      { text: "Creating Events", href: "/docs/event-management/creating-events" },
    ],
    relatedTopics: ["pricing", "features", "sub-events"],
  },
  {
    keywords: ["form", "fields", "registration form", "form builder", "form fields"],
    answer: "Registration Form Fields can be configured for your events:\n\n**Standard Fields** (always included):\n• Name\n• Email\n• Phone\n• College\n• Department\n• Year of Study\n\n**Conditional Fields** (based on event features):\n• **Accommodation**: Request field (if accommodation enabled)\n• **Food Coupons**: Selection field (if food coupons enabled)\n• **Team Events**: Team name, team size, team members (if team event enabled)\n• **Referral ID**: Input field (if referral IDs enabled)\n• **Special Pricing**: Category selection (if special pricing enabled)\n\n**Form Features**:\n• Required and optional fields\n• Validation for email, phone numbers\n• Dynamic fields based on selections\n• Pre-filled data for returning users\n\n**Templates**:\n• Pre-configured form templates available\n• Customize fields based on event type\n\nCheck the Registration Form Fields documentation for complete details.",
    links: [
      { text: "Registration Form Fields", href: "/docs/event-management/form-builder" },
    ],
    relatedTopics: ["registration", "form builder", "fields"],
  },
  {
    keywords: ["child", "sub-event", "parent", "subevents", "sub events"],
    answer: "Child Events (Sub-Events) allow you to create complex event structures:\n\n**Parent vs Child Events**:\n• **Parent Event**: Main event container\n• **Child Events**: Individual events within the parent\n• Each child event can have its own:\n  - Title, description, date, time\n  - Pricing\n  - Capacity\n  - Features (food coupons, accommodation, etc.)\n  - Registration settings\n\n**Use Cases**:\n• Multi-day events with different sessions\n• Workshops with multiple tracks\n• Competitions with different categories\n• Conferences with parallel sessions\n\n**Management**:\n• Create child events when creating parent event\n• Manage each child event individually\n• View child event analytics separately\n• Authorize emails for specific child events\n\n**Registration**:\n• Users can register for parent event or specific child events\n• Registration counts tracked separately\n• Pricing can vary per child event\n\nCheck the Child Events documentation for complete guide.",
    links: [
      { text: "Child Events", href: "/docs/event-management/child-events" },
      { text: "Creating Events", href: "/docs/event-management/creating-events" },
    ],
    relatedTopics: ["parent event", "sub-events", "event structure"],
  },
  {
    keywords: ["in-event", "during", "real-time", "live", "event day"],
    answer: "In-Event Features help you manage events in real-time:\n\n**Event Dashboard**:\n• Real-time registration count\n• Live analytics updates\n• Quick access to all features\n\n**QR Code Scanning**:\n• Scan tickets for check-in\n• Verify food coupons\n• Real-time verification status\n\n**Registration Management**:\n• View all registrations in real-time\n• Search and filter attendees\n• Delete registrations if needed\n• View detailed attendee information\n\n**Analytics**:\n• Real-time financial overview\n• Live registration statistics\n• Payment tracking\n\n**Reports**:\n• Download PDF reports\n• Export CSV data\n• Generate comprehensive reports\n\n**Authorized Emails**:\n• Add volunteers/team members\n• Grant event management access\n• Remove access when needed\n\nAll data updates automatically without refreshing. Check the In-Event Features documentation for details.",
    links: [
      { text: "In-Event Features", href: "/docs/event-management/in-event" },
    ],
    relatedTopics: ["qr scanning", "analytics", "reports"],
  },
  {
    keywords: ["post", "after", "end", "complete", "finished", "archive"],
    answer: "Post Event Management helps you wrap up after your event:\n\n**Event Status**:\n• Change event status to 'Archived'\n• Mark event as completed\n• Keep event data for reference\n\n**Final Reports**:\n• Download comprehensive PDF reports\n• Export all registration data (CSV)\n• Financial summaries\n• Complete event statistics\n\n**Final Analytics Review**:\n• Review total revenue\n• Check final registration count\n• Analyze event performance\n• Compare with previous events\n\n**Data Export**:\n• Export all registration data\n• Download payment information\n• Save event details\n\n**Registration Management**:\n• Final review of all registrations\n• Export attendee lists\n• Archive registration data\n\n**Best Practices**:\n• Download reports before archiving\n• Review analytics for insights\n• Keep data for future reference\n\nCheck the Post Event Management documentation for complete guide.",
    links: [
      { text: "Post Event Management", href: "/docs/event-management/post-event" },
    ],
    relatedTopics: ["reports", "analytics", "archive"],
  },
  {
    keywords: ["notes", "engineering", "study", "markdown", "code blocks"],
    answer: "Engineering Notes help you organize study materials:\n\n**Creating Notes**:\n• Create notes with markdown support\n• Add code blocks with syntax highlighting\n• Rich text formatting\n• Organize by subject, module, semester\n\n**Features**:\n• Markdown syntax support\n• Code blocks with syntax highlighting\n• Search and filter notes\n• Share notes with others\n• Organize by categories\n\n**Organization**:\n• Organize by subject\n• Group by modules\n• Sort by semester\n• Tag and categorize\n\nCheck the Engineering Notes documentation for complete guide.",
    links: [
      { text: "Notes Overview", href: "/docs/notes/overview" },
      { text: "Creating Notes", href: "/docs/notes/creating-notes" },
      { text: "Markdown Support", href: "/docs/notes/markdown" },
    ],
    relatedTopics: ["markdown", "code blocks", "organizing"],
  },
  {
    keywords: ["ai", "assistant", "chat", "study", "help", "question"],
    answer: "AI Assistant provides intelligent study help:\n\n**Features**:\n• Study assistance and explanations\n• Note enhancement\n• Question & Answer\n• Code help and generation\n• AI commands for specific tasks\n\n**Getting Started**:\n• Access AI Assistant from main navigation\n• Start chatting with AI\n• Use commands for specific tasks\n• Follow best practices for optimal results\n\n**Best Practices**:\n• Ask clear, specific questions\n• Use AI commands effectively\n• Review AI suggestions\n• Enhance notes with AI help\n\nCheck the AI Assistant documentation for complete guide.",
    links: [
      { text: "AI Overview", href: "/docs/ai/overview" },
      { text: "Getting Started with AI", href: "/docs/ai/getting-started" },
      { text: "AI Commands", href: "/docs/ai/commands" },
    ],
    relatedTopics: ["study assistance", "commands", "best practices"],
  },
  {
    keywords: ["install", "setup", "installation", "get started", "begin"],
    answer: "To install and use Vihaya:\n\n**Android App**:\n• Download from Google Play Store or direct download link\n• Requires Android 5.0 or higher\n• Visit the Installation guide for download links\n\n**Web Browser**:\n• Visit vihaya.app in your browser\n• No installation required\n• Works on all modern browsers\n\n**Quick Start**:\n• Follow the Quick Start guide to learn the basics\n• Check installation documentation for detailed steps\n• Start using Vihaya right away!\n\nCheck the Installation and Quick Start documentation for complete setup instructions.",
    links: [
      { text: "Installation", href: "/docs/installation" },
      { text: "Quick Start", href: "/docs/quick-start" },
    ],
    relatedTopics: ["quick start", "setup", "configuration"],
  },
  {
    keywords: ["delete", "remove", "registration", "cancel"],
    answer: "To delete a registration:\n\n1. Go to **Event Management Detail Page**\n2. Find the registration in the registrations list\n3. Click on the registration to view details\n4. Click the **Delete** button (trash icon)\n5. Confirm deletion in the dialog\n\n**What Gets Deleted**:\n• Registration document\n• All associated data (payment info, food coupons, team details)\n• Registration count is updated automatically\n• Financial analytics are recalculated\n\n**Important Notes**:\n• Deletion is permanent and cannot be undone\n• Payment records remain in Razorpay (for accounting)\n• For team events, deleting team leader may affect team members\n• Consider exporting data before deleting\n\nCheck the Registration Management documentation for details.",
    links: [
      { text: "Registration Management", href: "/docs/event-management/guests-management" },
    ],
    relatedTopics: ["registration", "manage", "export"],
  },
  {
    keywords: ["download", "export", "report", "pdf", "csv", "excel"],
    answer: "You can download comprehensive event reports:\n\n**PDF Reports**:\n• Formatted documents suitable for printing\n• Executive summary with key statistics\n• Complete event details\n• Full registration list with all fields\n• Financial summary\n• Sub-event breakdown (if applicable)\n\n**CSV/Excel Reports**:\n• Spreadsheet format for data analysis\n• All registration data in columns\n• Easy to import into Excel/Google Sheets\n• Includes: Name, Email, Phone, College, Department, Year, Registration ID, Payment Amount, Payment Status, Registered At, Team Name, Accommodation, Food Coupon\n\n**How to Download**:\n1. Go to Event Management Detail Page\n2. Click 'Download Report' button\n3. Choose PDF or Excel (CSV) format\n4. Report downloads automatically\n\n**Report Contents**:\n• Event summary and details\n• All registration information\n• Payment details and transaction IDs\n• Verification status\n• Financial statistics\n\nCheck the In-Event Features documentation for details.",
    links: [
      { text: "In-Event Features", href: "/docs/event-management/in-event" },
    ],
    relatedTopics: ["reports", "analytics", "export"],
  },
  {
    keywords: ["volunteer", "authorized", "email", "team", "access", "delegate"],
    answer: "Authorized Emails (Volunteers) allow you to delegate event management:\n\n**How to Add**:\n1. Go to Event Management Detail Page\n2. Scroll to 'Authorized Emails' section\n3. Click '+' button\n4. Enter email address\n5. Click 'Add'\n\n**Permissions**:\n• View all event details\n• Access registration data\n• Use QR scanning\n• Download reports\n• Manage registrations\n• View analytics\n\n**Removing Access**:\n• Click delete icon next to email\n• Confirm removal\n• Access is revoked immediately\n\n**Levels**:\n• Event level: Access to entire event\n• Sub-event level: Access to specific sub-events only\n\n**Best Practices**:\n• Only authorize trusted team members\n• Remove access when no longer needed\n• Use sub-event authorization for granular control\n\nCheck the In-Event Features documentation for details.",
    links: [
      { text: "In-Event Features", href: "/docs/event-management/in-event" },
    ],
    relatedTopics: ["access control", "team management", "delegation"],
  },
];

const quickQuestions = [
  "How do I create an event?",
  "How does payment work?",
  "How to manage registrations?",
  "What are QR codes used for?",
  "How to download reports?",
  "What is an organizer profile?",
  "How to add volunteers?",
  "What are child events?",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm here to help you with Vihaya documentation. Ask me anything about events, registrations, payments, or any other feature!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const findAnswer = (question: string): { answer: string; links?: Array<{ text: string; href: string }>; relatedTopics?: string[] } => {
    const lowerQuestion = question.toLowerCase().trim();
    const words = lowerQuestion.split(/\s+/).filter(w => w.length > 2);
    
    // Score each knowledge item based on keyword matches
    const scoredItems = knowledgeBase.map(item => {
      let score = 0;
      const itemKeywords = item.keywords.join(' ').toLowerCase();
      
      // Exact phrase match (highest score)
      if (itemKeywords.includes(lowerQuestion)) {
        score += 100;
      }
      
      // Word matches
      words.forEach(word => {
        if (itemKeywords.includes(word)) {
          score += 10;
        }
        // Bonus for multiple word matches
        if (itemKeywords.split(' ').filter(k => k.includes(word)).length > 1) {
          score += 5;
        }
      });
      
      // Check if question contains keywords
      item.keywords.forEach(keyword => {
        if (lowerQuestion.includes(keyword.toLowerCase())) {
          score += 15;
        }
      });
      
      return { item, score };
    });
    
    // Sort by score and get best match
    scoredItems.sort((a, b) => b.score - a.score);
    const bestMatch = scoredItems[0];
    
    // If we have a good match (score > 0), return it
    if (bestMatch && bestMatch.score > 0) {
      return {
        answer: bestMatch.item.answer,
        links: bestMatch.item.links,
        relatedTopics: bestMatch.item.relatedTopics,
      };
    }
    
    // Fallback: Check for common question patterns
    if (lowerQuestion.includes("create") && (lowerQuestion.includes("event") || lowerQuestion.includes("new"))) {
      const item = knowledgeBase.find(k => k.keywords.includes("create"));
      return item ? { answer: item.answer, links: item.links, relatedTopics: item.relatedTopics } : {
        answer: "To create an event, go to your Organizer Profile and click 'Create Event'. Fill in all the details including title, description, date, location, pricing, and features. Check the Creating Events documentation for step-by-step instructions.",
        links: [{ text: "Creating Events", href: "/docs/event-management/creating-events" }],
      };
    }
    
    if (lowerQuestion.includes("how") || lowerQuestion.includes("what") || lowerQuestion.includes("where")) {
      return {
        answer: "I can help you with questions about:\n\n**Event Management**:\n• Creating and managing events\n• Registration management\n• Payment and pricing\n• QR scanning and check-in\n• Event analytics\n• Organizer profile\n\n**Other Features**:\n• Engineering notes\n• AI Assistant\n• Installation and setup\n\nTry asking a specific question like:\n• \"How do I create an event?\"\n• \"What is payment pricing?\"\n• \"How to manage registrations?\"\n\nOr use one of the quick questions below!",
        relatedTopics: ["create event", "payment", "registration", "analytics"],
      };
    }
    
    // Generic helpful response
    return {
      answer: "I can help you with questions about Vihaya documentation. Here are some topics I can assist with:\n\n**Event Management**:\n• Creating events and organizer profile\n• Registration management and form fields\n• Payment & pricing (Razorpay)\n• QR scanning and check-in\n• Event analytics and reports\n• Child events and sub-events\n• In-event features\n• Post-event management\n\n**Other Features**:\n• Engineering notes (markdown, code blocks)\n• AI Assistant (study help, commands)\n• Installation and quick start\n\nTry asking about a specific feature, or use one of the quick questions below!",
      relatedTopics: ["create event", "payment", "registration", "qr scanning", "analytics"],
    };
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const question = input.trim();
    setInput("");
    setIsLoading(true);

    // Simulate AI thinking delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const result = findAnswer(question);
    
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: result.answer,
      timestamp: new Date(),
      links: result.links,
      relatedTopics: result.relatedTopics,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: "Hi! I'm here to help you with Vihaya documentation. Ask me anything about events, registrations, payments, or any other feature!",
        timestamp: new Date(),
      },
    ]);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center",
          "hover:scale-110 active:scale-95",
          isOpen && "hidden"
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] bg-background border rounded-lg shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary/5">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="absolute inset-0 h-2 w-2 rounded-full bg-green-500 animate-ping opacity-75"></div>
              </div>
              <div>
                <h3 className="font-semibold">Vihaya Docs Assistant</h3>
                <p className="text-xs text-muted-foreground">AI-powered help</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClearChat}
                  className="h-8 w-8"
                  title="Clear chat"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex flex-col gap-1",
                  message.role === "user" ? "items-end" : "items-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-lg px-4 py-3 text-sm shadow-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground border"
                  )}
                >
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {message.content.split('\n').map((line, idx) => {
                      // Format bold text (**text**)
                      const parts = line.split(/(\*\*.*?\*\*)/g);
                      return (
                        <p key={idx} className={idx > 0 ? "mt-2" : ""}>
                          {parts.map((part, pIdx) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return (
                                <strong key={pIdx} className="font-semibold">
                                  {part.slice(2, -2)}
                                </strong>
                              );
                            }
                            return <span key={pIdx}>{part}</span>;
                          })}
                        </p>
                      );
                    })}
                  </div>
                  
                  {/* Document Links */}
                  {message.links && message.links.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <p className="text-xs font-medium mb-2 opacity-80">📚 Related Documentation:</p>
                      <div className="flex flex-wrap gap-2">
                        {message.links.map((link, idx) => (
                          <Link
                            key={idx}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xs px-2 py-1 bg-background/50 hover:bg-background border rounded-md transition-colors inline-flex items-center gap-1"
                          >
                            {link.text}
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Related Topics */}
                  {message.relatedTopics && message.relatedTopics.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <p className="text-xs font-medium mb-2 opacity-80">💡 Related Topics:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {message.relatedTopics.map((topic, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setInput(topic);
                              setTimeout(() => handleSend(), 100);
                            }}
                            className="text-xs px-2 py-1 bg-background/30 hover:bg-background/50 rounded-full transition-colors"
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <span className="text-xs opacity-60 mt-2 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg px-4 py-3 flex items-center gap-2 border">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-xs text-muted-foreground">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 border-t bg-muted/20">
              <div className="flex items-center gap-2 mb-2 mt-2">
                <Sparkles className="h-3 w-3 text-primary" />
                <p className="text-xs font-medium text-muted-foreground">
                  Quick questions:
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-xs px-3 py-1.5 bg-background hover:bg-muted border rounded-full transition-colors hover:border-primary/50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t bg-background">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Vihaya features..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="h-10 w-10 shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              💡 Try: "How do I create an event?" or "What is payment pricing?"
            </p>
          </div>
        </div>
      )}
    </>
  );
}

