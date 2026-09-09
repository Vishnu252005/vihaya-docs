/**
 * A working booking storefront, as source.
 *
 * ⚠️ EVERY FIELD NAME AND CALL ORDER IN HERE IS CHECKED AGAINST THE LIVE SPEC.
 * The point of shipping a starter is that an agent copies it verbatim, so a
 * wrong field here becomes a wrong field in someone's production checkout. In
 * particular: the confirm call sends exactly { registrationId, orderId,
 * paymentId } — the register endpoint has no `signature` property, and an
 * earlier draft of this file invented one.
 *
 * ⚠️ THE KEY NEVER REACHES THE BROWSER. Every Vihaya call happens in a route
 * handler; the client components talk only to `/api/*` on the app's own origin.
 * This is the single most important property of the starter and the thing an
 * agent is most likely to "simplify" away — hence the comments in the files
 * themselves, which survive being copied out of this repo.
 */

export type StarterFile = {
    path: string;
    lang: string;
    /** Why this file exists — shown above the code in the UI. */
    note: string;
    code: string;
};

export const STARTER_FILES: StarterFile[] = [
    {
        path: '.env.local',
        lang: 'bash',
        note: 'Server-only. No NEXT_PUBLIC_ prefix, so Next will not inline it into the client bundle.',
        code: `# Create a key at https://events.vihaya.app/profile/developer/keys
# A "Checkout only" key is enough for a storefront.
VIHAYA_API_KEY=vh_live_xxxxxxxxxxxxxxxxxxxx`,
    },
    {
        path: 'lib/vihaya.ts',
        lang: 'ts',
        note: 'The only file that knows the API key. Import it from server code exclusively.',
        code: `import 'server-only';

const BASE = 'https://events.vihaya.app';

function key(): string {
  const k = process.env.VIHAYA_API_KEY;
  // Fail loudly at the first call rather than sending an unauthenticated
  // request and reading a confusing 401 back.
  if (!k) throw new Error('VIHAYA_API_KEY is not set');
  return k;
}

export type VihayaError = { error: string; status: number };

async function call<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(BASE + path, {
    ...init,
    headers: {
      'x-api-key': key(),
      'content-type': 'application/json',
      ...init?.headers,
    },
    // Listings can be cached briefly; anything that books must not be.
    cache: init?.method && init.method !== 'GET' ? 'no-store' : 'no-store',
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err: VihayaError = { error: body?.error ?? res.statusText, status: res.status };
    throw Object.assign(new Error(err.error), err);
  }
  return body as T;
}

export type Track = {
  title: string;
  price?: number;
  capacity?: number;
  registrationCount?: number;
  status?: string;
  date?: string;
};

export type VihayaEvent = {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  imageUrl?: string;
  date?: string;
  endDate?: string;
  venueName?: string;
  city?: string;
  isFree?: boolean;
  price?: number;
  capacity?: number;
  registrationCount?: number;
  status?: 'draft' | 'published' | 'archived';
  subEvents?: Track[];
};

/** Responses are shaped { success, data }. */
export async function listEvents(): Promise<VihayaEvent[]> {
  const r = await call<{ data: VihayaEvent[] }>('/api/v1/events');
  return r.data ?? [];
}

export async function getEvent(id: string): Promise<VihayaEvent> {
  const r = await call<{ data: VihayaEvent }>(\`/api/v1/events/\${id}\`);
  return r.data;
}

export type Attendee = {
  name: string;
  email: string;
  phone?: string;
  customFields?: Record<string, unknown>;
  promoCode?: string;
};

/** Free event → { success, registrationId }. Paid event → an order to pay. */
export type StartResult =
  | { kind: 'confirmed'; registrationId: string }
  | { kind: 'payment'; registrationId: string; orderId: string; amount: number; currency: string; key: string };

export async function startRegistration(eventId: string, attendee: Attendee): Promise<StartResult> {
  const r = await call<Record<string, any>>(\`/api/v1/events/\${eventId}/register\`, {
    method: 'POST',
    body: JSON.stringify(attendee),
  });
  // Branch on the shape that came back rather than on whether YOU think the
  // event is free — an event can change price between page load and checkout.
  if (r.orderId) {
    return {
      kind: 'payment',
      registrationId: r.registrationId,
      orderId: r.orderId,
      amount: r.amount,
      currency: r.currency ?? 'INR',
      key: r.key,
    };
  }
  return { kind: 'confirmed', registrationId: r.registrationId };
}

/**
 * Step 2. Sends exactly the three ids the endpoint accepts.
 * The server verifies paymentId against Razorpay before confirming, so this
 * returning OK is the only thing that means "paid".
 */
export async function confirmRegistration(
  eventId: string,
  ids: { registrationId: string; orderId: string; paymentId: string },
): Promise<{ success: boolean }> {
  return call(\`/api/v1/events/\${eventId}/register\`, {
    method: 'POST',
    body: JSON.stringify(ids),
  });
}`,
    },
    {
        path: 'app/api/checkout/start/route.ts',
        lang: 'ts',
        note: 'Step 1, behind your own origin. The browser posts here; only this handler holds the key.',
        code: `import { NextResponse } from 'next/server';
import { startRegistration } from '@/lib/vihaya';

export async function POST(req: Request) {
  const { eventId, name, email, phone, customFields, promoCode } = await req.json();

  if (!eventId || !name || !email) {
    return NextResponse.json({ error: 'eventId, name and email are required' }, { status: 400 });
  }

  try {
    const result = await startRegistration(eventId, { name, email, phone, customFields, promoCode });
    // Everything here is safe to send to the browser: the Razorpay \`key\` is a
    // publishable key, not your Vihaya key.
    return NextResponse.json(result);
  } catch (e: any) {
    // Pass the upstream status through so the UI can tell "sold out" from "bad request".
    return NextResponse.json({ error: e.error ?? 'Registration failed' }, { status: e.status ?? 502 });
  }
}`,
    },
    {
        path: 'app/api/checkout/confirm/route.ts',
        lang: 'ts',
        note: 'Step 2. Called after Razorpay hands the browser a payment id.',
        code: `import { NextResponse } from 'next/server';
import { confirmRegistration } from '@/lib/vihaya';

export async function POST(req: Request) {
  const { eventId, registrationId, orderId, paymentId } = await req.json();

  if (!eventId || !registrationId || !orderId || !paymentId) {
    return NextResponse.json({ error: 'Missing confirmation ids' }, { status: 400 });
  }

  try {
    const result = await confirmRegistration(eventId, { registrationId, orderId, paymentId });
    return NextResponse.json(result);
  } catch (e: any) {
    // A failure here means the registration stays pending — say so, and do not
    // show the user a ticket.
    return NextResponse.json({ error: e.error ?? 'Confirmation failed' }, { status: e.status ?? 502 });
  }
}`,
    },
    {
        path: 'app/page.tsx',
        lang: 'tsx',
        note: 'The listing. A server component, so the fetch (and the key) stay on the server.',
        code: `import Link from 'next/link';
import { listEvents } from '@/lib/vihaya';

export const revalidate = 60;

export default async function EventsPage() {
  const events = (await listEvents()).filter(e => e.status === 'published');

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-semibold">Upcoming events</h1>

      {events.length === 0 && (
        <p className="text-neutral-500">Nothing on sale right now.</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map(e => {
          const soldOut = !!e.capacity && (e.registrationCount ?? 0) >= e.capacity;
          return (
            <Link
              key={e.id}
              href={\`/events/\${e.id}\`}
              className="group overflow-hidden rounded-xl border transition-shadow hover:shadow-md"
            >
              {e.imageUrl && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={e.imageUrl} alt="" className="h-40 w-full object-cover" />
              )}
              <div className="p-4">
                <h2 className="font-medium group-hover:underline">{e.title}</h2>
                <p className="mt-1 text-sm text-neutral-500">
                  {e.date ? new Date(e.date).toLocaleDateString() : 'Date TBC'}
                  {e.city ? \` · \${e.city}\` : ''}
                </p>
                <p className="mt-2 text-sm font-medium">
                  {soldOut ? 'Sold out' : e.isFree ? 'Free' : \`₹\${e.price}\`}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}`,
    },
    {
        path: 'app/events/[id]/page.tsx',
        lang: 'tsx',
        note: 'One event, with the booking form mounted as a client island.',
        code: `import { getEvent } from '@/lib/vihaya';
import { BookingForm } from './BookingForm';

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = await getEvent(id);

  const seatsLeft = event.capacity
    ? Math.max(0, event.capacity - (event.registrationCount ?? 0))
    : null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      {event.imageUrl && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={event.imageUrl} alt="" className="mb-8 h-64 w-full rounded-xl object-cover" />
      )}

      <h1 className="text-3xl font-semibold">{event.title}</h1>
      <p className="mt-2 text-neutral-500">
        {event.date ? new Date(event.date).toLocaleString() : 'Date TBC'}
        {event.venueName ? \` · \${event.venueName}\` : ''}
      </p>

      {event.description && (
        <p className="mt-6 whitespace-pre-line leading-relaxed">{event.description}</p>
      )}

      {seatsLeft !== null && seatsLeft <= 10 && seatsLeft > 0 && (
        <p className="mt-4 text-sm font-medium text-amber-700">Only {seatsLeft} seats left</p>
      )}

      <div className="mt-10 rounded-xl border p-6">
        {seatsLeft === 0 ? (
          <p className="font-medium">This event is sold out.</p>
        ) : (
          <BookingForm
            eventId={event.id}
            isFree={!!event.isFree}
            price={event.price ?? 0}
            title={event.title}
          />
        )}
      </div>
    </main>
  );
}`,
    },
    {
        path: 'app/events/[id]/BookingForm.tsx',
        lang: 'tsx',
        note: 'The whole checkout, both steps, including the Razorpay handoff in the middle.',
        code: `'use client';

import { useState } from 'react';

declare global { interface Window { Razorpay?: any } }

/** Razorpay's script is loaded on demand so it costs nothing on a free event. */
function loadRazorpay(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) return resolve();
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Could not load Razorpay'));
    document.body.appendChild(s);
  });
}

export function BookingForm({
  eventId, isFree, price, title,
}: { eventId: string; isFree: boolean; price: number; title: string }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [state, setState] = useState<'idle' | 'working' | 'done'>('idle');
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setState('working');

    try {
      // ---- Step 1 -------------------------------------------------------
      const startRes = await fetch('/api/checkout/start', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ eventId, ...form }),
      });
      const start = await startRes.json();
      if (!startRes.ok) throw new Error(start.error);

      // A free event is already confirmed. There is no step 2.
      if (start.kind === 'confirmed') {
        setState('done');
        return;
      }

      // ---- Razorpay ------------------------------------------------------
      await loadRazorpay();
      await new Promise<void>((resolve, reject) => {
        const rz = new window.Razorpay({
          key: start.key,
          order_id: start.orderId,
          amount: start.amount,      // already in paise — do not convert
          currency: start.currency,
          name: title,
          prefill: { name: form.name, email: form.email, contact: form.phone },
          // The user closing the sheet is not an error, but it is not a sale
          // either — the registration simply stays pending.
          modal: { ondismiss: () => reject(new Error('Payment cancelled')) },
          handler: async (r: any) => {
            try {
              // ---- Step 2 -----------------------------------------------
              const confirmRes = await fetch('/api/checkout/confirm', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                  eventId,
                  registrationId: start.registrationId,
                  orderId: start.orderId,
                  paymentId: r.razorpay_payment_id,
                }),
              });
              const confirm = await confirmRes.json();
              if (!confirmRes.ok) throw new Error(confirm.error);
              resolve();
            } catch (err) { reject(err); }
          },
        });
        rz.open();
      });

      setState('done');
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong');
      setState('idle');
    }
  }

  if (state === 'done') {
    return (
      <div>
        <h2 className="text-lg font-medium">You&apos;re in.</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Your ticket and QR code are on their way by email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
        <input id="name" required value={form.name} onChange={set('name')}
               className="w-full rounded-lg border px-3 py-2" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
        <input id="email" type="email" required value={form.email} onChange={set('email')}
               className="w-full rounded-lg border px-3 py-2" />
        <p className="mt-1 text-xs text-neutral-500">Your ticket is sent here.</p>
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone</label>
        <input id="phone" value={form.phone} onChange={set('phone')}
               className="w-full rounded-lg border px-3 py-2" />
      </div>

      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={state === 'working'}
              className="w-full rounded-lg bg-black px-4 py-2.5 font-medium text-white disabled:opacity-60">
        {state === 'working' ? 'Working…' : isFree ? 'Register free' : \`Pay ₹\${price}\`}
      </button>
    </form>
  );
}`,
    },
];

/** The starter as one plain-text bundle an agent can fetch and write out. */
export function starterAsText(): string {
    const L: string[] = [];
    L.push('# Vihaya Events — booking storefront starter (Next.js App Router)');
    L.push('');
    L.push('Write each file below at the given path. Then:');
    L.push('  npm install next react react-dom');
    L.push('  # put your key in .env.local');
    L.push('  npm run dev');
    L.push('');
    L.push('The API key is read only in server code. The browser talks to /api/checkout/*');
    L.push('on your own origin and never sees it.');
    L.push('');
    for (const f of STARTER_FILES) {
        L.push('='.repeat(72));
        L.push(`FILE: ${f.path}`);
        L.push(`WHY:  ${f.note}`);
        L.push('='.repeat(72));
        L.push(f.code);
        L.push('');
    }
    return L.join('\n');
}
