/**
 * Every documentation page, once.
 *
 * ⚠️ THIS IS THE SINGLE SOURCE FOR THE SIDEBAR, /llms.txt AND THE SEARCH INDEX.
 * The sidebar used to carry its own hand-written copy of the tree, which is how
 * a page could exist and be unreachable, or be listed twice under two names.
 * Add a page here and it appears in the nav, in the agent index and in search;
 * there is no second list to remember.
 *
 * `summary` is written for a MACHINE as much as a person — it is what an agent
 * reads in /llms.txt to decide whether to fetch the page, so it should say what
 * the page answers, not sell it.
 */
import type { LucideIcon } from 'lucide-react';
import {
    Rocket, BookOpen, Calendar, Users, Settings, Layers, QrCode, BarChart3,
    Archive, Code2, KeyRound, CreditCard, Webhook, Package, Sparkles, Bot,
    FileText, ListChecks, Wallet,
} from 'lucide-react';

export type DocPage = {
    href: string;
    title: string;
    /** One line, factual: what question this page answers. */
    summary: string;
    group: string;
    /** Optional sub-grouping inside a group, for the nav only. */
    section?: string;
    icon?: LucideIcon;
    /** Surfaced with a badge in the nav. */
    badge?: string;
};

export const DOC_PAGES: DocPage[] = [
    // ---- Get Started -------------------------------------------------------
    {
        href: '/docs', title: 'Introduction', group: 'Get Started', icon: BookOpen,
        summary: 'What Vihaya Events is and which part of it you are meant to build on.',
    },
    {
        href: '/docs/installation', title: 'Installation', group: 'Get Started', icon: Package,
        summary: 'Getting an account, an organiser role and an API key.',
    },
    {
        href: '/docs/quick-start', title: 'Quick Start', group: 'Get Started', icon: Rocket,
        summary: 'Create an event and take a first booking, end to end.',
    },
    {
        href: '/docs/build-with-ai', title: 'Build with AI', group: 'Get Started', icon: Bot, badge: 'New',
        summary: 'Hand this API to a coding agent: a copy-paste brief, the machine-readable context bundle, and a working booking-site starter.',
    },

    // ---- Event Management --------------------------------------------------
    {
        href: '/docs/event-overview', title: 'Event Overview', group: 'Event Management', section: 'Basics', icon: Calendar,
        summary: 'What an attendee sees on an event page, including sub-events and sessions.',
    },
    {
        href: '/docs/event-management/organizer-profile', title: 'Organizer Profile', group: 'Event Management', section: 'Basics', icon: Users,
        summary: 'The organiser account, the events list, and who else may manage an event.',
    },
    {
        href: '/docs/event-management/creating-events', title: 'Creating Events', group: 'Event Management', section: 'Basics', icon: FileText,
        summary: 'Every field on the create-event form, section by section.',
    },
    {
        href: '/docs/event-management/event-settings', title: 'Edit Event Settings', group: 'Event Management', section: 'Configuration', icon: Settings,
        summary: 'Changing an event after it is published, and what cannot be changed.',
    },
    {
        href: '/docs/event-management/payment-pricing', title: 'Payment & Pricing', group: 'Event Management', section: 'Configuration', icon: Wallet,
        summary: 'Ticket price, tiers, early bird, promo codes and the platform fee.',
    },
    {
        href: '/docs/event-management/form-builder', title: 'Registration Form Fields', group: 'Event Management', section: 'Configuration', icon: ListChecks,
        summary: 'Custom questions on the registration form and the answers they produce.',
    },
    {
        href: '/docs/event-management/child-events', title: 'Child Events', group: 'Event Management', section: 'Running it', icon: Layers,
        summary: 'Mega events: a parent with separately bookable tracks or sessions.',
    },
    {
        href: '/docs/event-management/guests-management', title: 'Registration Management', group: 'Event Management', section: 'Running it', icon: Users,
        summary: 'The attendee directory, filtering, and exporting registration data.',
    },
    {
        href: '/docs/event-management/qr-scanning', title: 'QR Scanning & Check-In', group: 'Event Management', section: 'Running it', icon: QrCode,
        summary: 'Ticket QR codes, the check-in desk, and scanning for food or sessions.',
    },
    {
        href: '/docs/event-management/in-event', title: 'In-Event Features', group: 'Event Management', section: 'Running it', icon: Sparkles,
        summary: 'Broadcasts, live ticker, reminders and feedback while the event runs.',
    },
    {
        href: '/docs/event-management/event-analytics', title: 'Event Analytics', group: 'Event Management', section: 'After', icon: BarChart3,
        summary: 'Tickets, revenue, turnout, and the per-track and per-college breakdowns.',
    },
    {
        href: '/docs/event-management/post-event', title: 'Post Event Management', group: 'Event Management', section: 'After', icon: Archive,
        summary: 'Certificates, payouts and closing an event out.',
    },
    {
        href: '/docs/event-management/ai-event-creation', title: 'AI Event Creation', group: 'Event Management', section: 'After', icon: Bot,
        summary: 'Describing an event in plain English and having the form filled in for you.',
    },

    // ---- API Reference -----------------------------------------------------
    {
        href: '/docs/api', title: 'Overview', group: 'API Reference', icon: Code2,
        summary: 'What the REST API covers, and the shape of a headless integration.',
    },
    {
        href: '/docs/api/authentication', title: 'Authentication', group: 'API Reference', icon: KeyRound,
        summary: 'API keys: scoping, the two key types, origin pinning and revocation.',
    },
    {
        href: '/docs/api/payments', title: 'Taking Payment', group: 'API Reference', icon: CreditCard,
        summary: 'The two-call registration flow and the Razorpay handoff in the middle of it.',
    },
    {
        href: '/docs/api/endpoints', title: 'Endpoints', group: 'API Reference', icon: ListChecks,
        summary: 'Every endpoint with its exact fields and status codes, generated from the live spec.',
    },
    {
        href: '/docs/api/sdks', title: 'SDKs', group: 'API Reference', icon: Package,
        summary: 'Official clients for seven languages, what they wrap, and what they do not.',
    },
    {
        href: '/docs/api/webhooks', title: 'Webhooks', group: 'API Reference', icon: Webhook,
        summary: 'Signed callbacks when a registration confirms, and verifying the HMAC.',
    },
    {
        href: '/docs/api/tickets', title: 'Tickets & QR', group: 'API Reference', icon: QrCode,
        summary: 'What the QR actually contains, and how to send ticket emails from your own domain.',
    },
];

/** Nav order. A group absent here would not render, so keep it complete. */
export const GROUP_ORDER = ['Get Started', 'Event Management', 'API Reference'] as const;

/** Section order within a group, for groups that use sections. */
export const SECTION_ORDER: Record<string, string[]> = {
    'Event Management': ['Basics', 'Configuration', 'Running it', 'After'],
};

export function pageByHref(href: string): DocPage | undefined {
    return DOC_PAGES.find(p => p.href === href);
}

/** Previous/next across the whole tree, in nav order. */
export function neighbours(href: string): { prev?: DocPage; next?: DocPage } {
    const ordered = GROUP_ORDER.flatMap(g => {
        const inGroup = DOC_PAGES.filter(p => p.group === g);
        const sections = SECTION_ORDER[g];
        if (!sections) return inGroup;
        return sections.flatMap(s => inGroup.filter(p => p.section === s));
    });
    const i = ordered.findIndex(p => p.href === href);
    if (i === -1) return {};
    return { prev: ordered[i - 1], next: ordered[i + 1] };
}
