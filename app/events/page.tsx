import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import FilterBar from '@/components/FilterBar';
import EventCard from '@/components/EventCard';
import { events } from '@/data/events';

export const metadata: Metadata = {
  title: 'Atlanta World Cup Events Directory | World Cup ATL Local Guide',
  description: 'Find watch parties, family events, nightlife, food pop-ups, and soccer meetups around Atlanta.',
  keywords: ['Atlanta watch parties', 'Atlanta World Cup events', 'family-friendly soccer events']
};

export default function EventsPage() {
  return (
    <section>
      <SectionHeader title="Events Directory" subtitle="Browse World Cup-related events around Atlanta. Filters are structured for future live search integration." />
      <FilterBar />
      <div className="grid gap-4 sm:grid-cols-2">{events.map((event) => <EventCard key={event.id} event={event} />)}</div>
    </section>
  );
}
