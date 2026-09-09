/**
 * The Events API description, pulled from the LIVE spec.
 *
 * ⚠️ FETCHED FROM `events.vihaya.app/api/v1/openapi.json`, WHICH IS GENERATED
 * FROM THE ROUTE DEFINITIONS THEMSELVES. That is the whole point: this docs
 * site is a separate repo, and a separate repo is exactly how the previous
 * developer docs came to describe OAuth, a sandbox environment and an
 * `events.create()` SDK method that never existed. Nothing here is retyped, so
 * nothing here can drift — if the API changes, this page changes with it.
 *
 * ⚠️ THE FALLBACK IS DELIBERATELY TINY AND HONEST. If the fetch fails at build
 * time we do NOT want a stale copy of the whole API silently shipping as though
 * it were current; the page renders what it has and says the live spec could
 * not be reached, which is a visible failure rather than a quiet lie.
 */
export const API_BASE = 'https://events.vihaya.app';
export const SPEC_URL = `${API_BASE}/api/v1/openapi.json`;

export type SpecOperation = {
    tags?: string[];
    summary?: string;
    description?: string;
    parameters?: { name: string; in: string; required?: boolean; description?: string }[];
    requestBody?: {
        required?: boolean;
        content?: Record<string, { schema?: { required?: string[]; properties?: Record<string, { type?: string; description?: string; enum?: string[] }> } }>;
    };
    responses?: Record<string, { description?: string }>;
};
export type Spec = {
    info?: { title?: string; version?: string; description?: string };
    tags?: { name: string; description?: string }[];
    paths?: Record<string, Record<string, SpecOperation>>;
};

export type FlatEndpoint = {
    method: string;
    path: string;
    tag: string;
    summary: string;
    description: string;
    body: { name: string; type: string; required: boolean; note: string }[];
    success: { code: string; description: string } | null;
};

/** One hour: the spec is `force-static` upstream and changes with a deploy. */
export async function loadSpec(): Promise<{ spec: Spec | null; live: boolean }> {
    try {
        const r = await fetch(SPEC_URL, { next: { revalidate: 3600 } });
        if (!r.ok) return { spec: null, live: false };
        return { spec: (await r.json()) as Spec, live: true };
    } catch {
        return { spec: null, live: false };
    }
}

/** Flatten paths×methods into something a page can map over. */
export function flatten(spec: Spec | null): FlatEndpoint[] {
    if (!spec?.paths) return [];
    const out: FlatEndpoint[] = [];
    for (const [path, ops] of Object.entries(spec.paths)) {
        for (const [method, op] of Object.entries(ops)) {
            const schema = op.requestBody?.content?.['application/json']?.schema;
            const required = new Set(schema?.required ?? []);
            const success = Object.entries(op.responses ?? {})
                .find(([c]) => c.startsWith('2')) ?? null;
            out.push({
                method: method.toUpperCase(),
                path,
                tag: op.tags?.[0] ?? 'API',
                summary: op.summary ?? '',
                description: op.description ?? '',
                body: Object.entries(schema?.properties ?? {}).map(([name, p]) => ({
                    name,
                    type: p.enum?.length ? p.enum.map(e => `"${e}"`).join(' | ') : (p.type ?? 'string'),
                    required: required.has(name),
                    note: p.description ?? '',
                })),
                success: success ? { code: success[0], description: success[1].description ?? '' } : null,
            });
        }
    }
    return out;
}

export function groupByTag(eps: FlatEndpoint[]) {
    const map = new Map<string, FlatEndpoint[]>();
    for (const e of eps) { if (!map.has(e.tag)) map.set(e.tag, []); map.get(e.tag)!.push(e); }
    return [...map.entries()].map(([tag, endpoints]) => ({ tag, endpoints }));
}

/**
 * The official SDKs. Package names and versions were resolved against the live
 * registries on 2026-09-09 — re-check before editing, because an install line
 * that 404s is the worst thing on a developer page.
 *
 * ⚠️ THEY WRAP FOUR CALLS, NOT THE WHOLE API. There is no `events.create()` in
 * any of them; event management is REST-only. `/features/developer-api` shipped
 * a sample calling exactly that for months.
 */
export const SDKS = [
    { lang: 'JavaScript / TypeScript', pkg: 'vihaya-sdk', install: 'npm install vihaya-sdk', version: '1.5.0',
      registry: 'https://www.npmjs.com/package/vihaya-sdk', repo: 'https://github.com/Vishnu252005/vihaya-sdk',
      snippet: `import { VihayaClient } from 'vihaya-sdk';\n\nconst vihaya = new VihayaClient(process.env.VIHAYA_API_KEY);\n\nconst events = await vihaya.events.list();\nconst result = await vihaya.events.register(eventId, {\n  name: 'Asha Menon',\n  email: 'asha@example.com',\n  phone: '+919000000000',\n});` },
    { lang: 'Python', pkg: 'vihaya-events', install: 'pip install vihaya-events', version: '0.1.1',
      registry: 'https://pypi.org/project/vihaya-events/', repo: 'https://github.com/Vishnu252005/vihaya-sdk-python',
      snippet: `from vihaya import Vihaya, RegisterData\n\nvh = Vihaya(api_key=os.environ["VIHAYA_API_KEY"])\n\nevents = vh.events.list()\nresult = vh.events.register(event_id, RegisterData(\n    name="Asha Menon",\n    email="asha@example.com",\n    phone="+919000000000",\n))` },
    { lang: 'PHP', pkg: 'vihaya/events', install: 'composer require vihaya/events', version: '0.1.1',
      registry: 'https://packagist.org/packages/vihaya/events', repo: 'https://github.com/Vishnu252005/vihaya-sdk-php',
      snippet: `use Vihaya\\Events\\Vihaya;\n\n$vihaya = new Vihaya(getenv('VIHAYA_API_KEY'));\n\n$events = $vihaya->events->list();\n$result = $vihaya->events->register($eventId, [\n    'name'  => 'Asha Menon',\n    'email' => 'asha@example.com',\n]);` },
    { lang: 'Ruby', pkg: 'vihaya-events', install: 'gem install vihaya-events', version: '0.1.1',
      registry: 'https://rubygems.org/gems/vihaya-events', repo: 'https://github.com/Vishnu252005/vihaya-sdk-ruby',
      snippet: `require "vihaya"\n\nvihaya = Vihaya::Client.new(api_key: ENV["VIHAYA_API_KEY"])\n\nevents = vihaya.events.list\nresult = vihaya.events.register(event_id, {\n  name:  "Asha Menon",\n  email: "asha@example.com",\n})` },
    { lang: 'Go', pkg: 'github.com/Vishnu252005/vihaya-sdk-go', install: 'go get github.com/Vishnu252005/vihaya-sdk-go@v0.1.1', version: '0.1.1',
      registry: 'https://pkg.go.dev/github.com/Vishnu252005/vihaya-sdk-go', repo: 'https://github.com/Vishnu252005/vihaya-sdk-go',
      snippet: `import vihaya "github.com/Vishnu252005/vihaya-sdk-go"\n\nclient := vihaya.New(os.Getenv("VIHAYA_API_KEY"))\n\nevents, err := client.Events.List(ctx)\nresult, err := client.Events.Register(ctx, eventID, vihaya.RegisterData{\n    Name:  "Asha Menon",\n    Email: "asha@example.com",\n})` },
    { lang: 'Java / Kotlin', pkg: 'com.github.Vishnu252005:vihaya-sdk-java', install: 'implementation("com.github.Vishnu252005:vihaya-sdk-java:v0.1.1")', version: 'v0.1.1',
      registry: 'https://jitpack.io/#Vishnu252005/vihaya-sdk-java', repo: 'https://github.com/Vishnu252005/vihaya-sdk-java',
      snippet: `// JitPack — add the repo too:\n// maven { url = uri("https://jitpack.io") }\n\nvar vihaya = new Vihaya(System.getenv("VIHAYA_API_KEY"));\n\nvar events = vihaya.events().list();\nvar result = vihaya.events().register(eventId, RegisterData.builder()\n    .name("Asha Menon")\n    .email("asha@example.com")\n    .build());` },
    { lang: 'Flutter / Dart', pkg: 'vihaya_sdk_flutter', install: 'flutter pub add vihaya_sdk_flutter', version: '0.1.1',
      registry: 'https://pub.dev/packages/vihaya_sdk_flutter', repo: 'https://github.com/Vishnu252005/vihaya-sdk-flutter',
      snippet: `import 'package:vihaya_sdk_flutter/vihaya_sdk_flutter.dart';\n\nfinal vihaya = Vihaya(apiKey: const String.fromEnvironment('VIHAYA_API_KEY'));\n\nfinal events = await vihaya.events.list();\nfinal result = await vihaya.events.register(eventId, RegisterData(\n  name: 'Asha Menon',\n  email: 'asha@example.com',\n));` },
];

/**
 * ⚠️ VERIFIED BY INSTALLING EACH PACKAGE FROM ITS REGISTRY AND DRIVING IT
 * AGAINST THE LIVE API on 2026-09-09 — not by reading the READMEs.
 *
 * That run found three of the four testable SDKs could not parse a real event,
 * because GET/PATCH returned Firestore Timestamps where the spec says strings.
 * The API was fixed (see serialize-dates.ts in the events repo) rather than
 * patching six SDKs. All four now list and fetch successfully.
 *
 * PHP, Ruby and Java were not driven end to end — they are published and their
 * models follow the same shape, but do not claim they are verified.
 */
export const SDK_VERIFIED = ['JavaScript / TypeScript', 'Python', 'Go', 'Flutter / Dart'];

export const SDK_COVERAGE = {
    covered: [
        { call: 'events.list()', maps: 'GET /api/v1/events' },
        { call: 'events.get(id)', maps: 'GET /api/v1/events/{id}' },
        { call: 'events.register(id, data)', maps: 'POST /api/v1/events/{id}/register — both phases' },
        { call: 'payments.verify(data)', maps: 'POST /api/v1/payments/verify' },
    ],
    notCovered: [
        'Creating, updating, publishing or deleting an event',
        'Tracks (list / add / update)',
        'Listing registrations, and analytics',
        'Broadcast email',
        'whoami (/api/v1/me)',
    ],
};
