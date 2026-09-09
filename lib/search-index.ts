/**
 * Search over the documentation.
 *
 * ⚠️ THE PAGE LIST IS DERIVED FROM `lib/docs-registry.ts`. It used to be a third
 * hand-written copy of the tree (after the sidebar's and the footer's), and it
 * had already drifted: /docs/build-with-ai was unsearchable, and the
 * empty-query branch returned a SECOND inline copy of just the six API pages —
 * so opening search and typing nothing suggested only the API section and hid
 * every guide.
 *
 * Only `keywords` is maintained here, because it is search tuning (synonyms and
 * things people type that do not appear on the page) rather than page metadata.
 */
import { DOC_PAGES } from '@/lib/docs-registry';

export interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string[];
}

/** Synonyms and search terms that are not in the page's own title or summary. */
const KEYWORDS: Record<string, string[]> = {
  '/docs': ['vihaya events', 'introduction', 'getting started', 'overview'],
  '/docs/installation': ['installation', 'setup', 'account', 'organiser access'],
  '/docs/quick-start': ['quick start', 'first event', 'tutorial', 'getting started'],
  '/docs/build-with-ai': [
    'ai', 'llm', 'llms.txt', 'claude', 'cursor', 'copilot', 'agent', 'prompt',
    'starter', 'boilerplate', 'booking site', 'storefront', 'scaffold',
  ],
  '/docs/event-overview': ['event page', 'attendee view', 'sub events', 'sessions'],
  '/docs/event-management/organizer-profile': ['organiser', 'organizer', 'profile', 'team access'],
  '/docs/event-management/creating-events': ['create event', 'new event', 'form', 'publish'],
  '/docs/event-management/event-settings': ['edit event', 'settings', 'update'],
  '/docs/event-management/payment-pricing': ['pricing', 'price', 'tiers', 'early bird', 'promo code', 'platform fee'],
  '/docs/event-management/form-builder': ['custom fields', 'registration form', 'questions'],
  '/docs/event-management/child-events': ['mega event', 'tracks', 'sub events', 'sessions'],
  '/docs/event-management/guests-management': ['attendees', 'registrations', 'export', 'csv', 'guest list'],
  '/docs/event-management/qr-scanning': ['qr', 'check in', 'scanner', 'gate', 'food coupon'],
  '/docs/event-management/in-event': ['broadcast', 'reminders', 'live ticker', 'feedback'],
  '/docs/event-management/event-analytics': ['analytics', 'revenue', 'turnout', 'reports', 'stats'],
  '/docs/event-management/post-event': ['certificates', 'payout', 'settlement', 'after event'],
  '/docs/event-management/ai-event-creation': ['ai', 'natural language', 'auto fill', 'assistant'],
  '/docs/api': ['api', 'rest', 'developer', 'integration', 'headless'],
  '/docs/api/authentication': ['api key', 'x-api-key', 'authentication', 'security', 'origin pinning'],
  '/docs/api/payments': ['payment', 'razorpay', 'checkout', 'headless', 'settlement', 'order'],
  '/docs/api/endpoints': ['endpoints', 'openapi', 'reference', 'routes', 'spec'],
  '/docs/api/sdks': ['sdk', 'npm', 'pip', 'composer', 'gem', 'library', 'client'],
  '/docs/api/webhooks': ['webhook', 'hmac', 'signature', 'callback', 'sync'],
};

const docsIndex: SearchResult[] = DOC_PAGES.map(p => ({
  title: p.title,
  description: p.summary,
  href: p.href,
  category: p.group,
  keywords: KEYWORDS[p.href],
}));

/** What an empty search box offers: the places most people actually want. */
const SUGGESTED_HREFS = [
  '/docs/quick-start',
  '/docs/build-with-ai',
  '/docs/api',
  '/docs/api/authentication',
  '/docs/api/endpoints',
  '/docs/event-management/creating-events',
];

const suggested: SearchResult[] = SUGGESTED_HREFS
  .map(h => docsIndex.find(d => d.href === h))
  .filter((d): d is SearchResult => Boolean(d));

/**
 * Search through documentation pages.
 * @param query - Search query string
 * @returns Array of matching search results, best first
 */
export function searchDocs(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) return suggested;

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/).filter(word => word.length > 0);

  const scoredResults = docsIndex.map(result => {
    let score = 0;
    const titleLower = result.title.toLowerCase();
    const descriptionLower = result.description.toLowerCase();
    const categoryLower = result.category.toLowerCase();
    const keywordsLower = (result.keywords || []).join(" ").toLowerCase();
    const searchableText = `${titleLower} ${descriptionLower} ${categoryLower} ${keywordsLower}`;

    if (titleLower === normalizedQuery) {
      score += 100;
    } else if (titleLower.includes(normalizedQuery)) {
      score += 50;
    }

    queryWords.forEach(word => {
      if (titleLower.includes(word)) score += 20;
    });

    if (descriptionLower.includes(normalizedQuery)) score += 30;
    queryWords.forEach(word => {
      if (descriptionLower.includes(word)) score += 10;
    });

    if (categoryLower.includes(normalizedQuery)) score += 15;

    queryWords.forEach(word => {
      if (keywordsLower.includes(word)) score += 5;
    });

    if (searchableText.includes(normalizedQuery)) score += 5;

    return { result, score };
  });

  return scoredResults
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ result }) => result);
}
