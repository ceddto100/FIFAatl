import Link from 'next/link';
import { Event } from '@/types';
import { formatDate } from '@/lib/utils';

export default function EventCard({ event }: { event: Event }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-brandGold">{event.category}</p>
        <span className="rounded-full border border-white/20 px-2 py-1 text-xs text-white/80">{event.price}</span>
      </div>
      <h3 className="mt-2 text-lg font-bold text-white">{event.name}</h3>
      <p className="mt-1 text-sm text-white/70">{formatDate(event.date)} • {event.time}</p>
      <p className="mt-1 text-sm text-white/70">{event.neighborhood} • {event.address}</p>
      <p className="mt-3 text-sm text-white/80">{event.description}</p>
      <Link href={event.ctaUrl} className="mt-4 inline-block rounded-full bg-brandRed px-4 py-2 text-sm font-semibold text-white">
        View Event
      </Link>
    </article>
  );
}
