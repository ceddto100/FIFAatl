import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import MatchCard from '@/components/MatchCard';
import EventCard from '@/components/EventCard';
import BusinessCard from '@/components/BusinessCard';
import NeighborhoodCard from '@/components/NeighborhoodCard';
import CTASection from '@/components/CTASection';
import AIConciergePreview from '@/components/AIConciergePreview';
import { matches } from '@/data/matches';
import { events } from '@/data/events';
import { businesses } from '@/data/businesses';
import { neighborhoods } from '@/data/neighborhoods';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />

      <section>
        <SectionHeader title="Upcoming Atlanta Matches" subtitle="Placeholder structure designed for easy updates as official details are finalized." />
        <div className="grid gap-4 sm:grid-cols-2">{matches.slice(0, 2).map((match) => <MatchCard key={match.id} match={match} />)}</div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <SectionHeader title="Fan Fest at Centennial Olympic Park" subtitle="Live screenings, music, local food, and family programming all tournament long." />
        <a href="/fan-fest" className="inline-block rounded-full bg-brandRed px-4 py-2 text-sm font-semibold text-white">Explore Fan Fest Info</a>
      </section>

      <section>
        <SectionHeader title="Featured Watch Parties" />
        <div className="grid gap-4 sm:grid-cols-2">{events.filter((e) => e.category === 'watch party' || e.category === 'nightlife').slice(0, 2).map((event) => <EventCard key={event.id} event={event} />)}</div>
      </section>

      <section>
        <SectionHeader title="Featured Local Businesses" />
        <div className="grid gap-4 sm:grid-cols-2">{businesses.slice(0, 2).map((business) => <BusinessCard key={business.id} business={business} />)}</div>
      </section>

      <section>
        <SectionHeader title="Neighborhood Guides" subtitle="Plan where to stay, eat, and celebrate based on your matchday style." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{neighborhoods.slice(0, 3).map((item) => <NeighborhoodCard key={item.id} neighborhood={item} />)}</div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <SectionHeader title="Transportation Tips" subtitle="MARTA routes, parking strategy, and airport-to-stadium planning for smoother matchdays." />
        <a href="/transportation" className="inline-block rounded-full bg-brandRed px-4 py-2 text-sm font-semibold text-white">View Transportation Guide</a>
      </section>

      <CTASection
        title="Own a business in Atlanta?"
        description="Get in front of visitors with listing placements, promo pages, and AI-ready lead capture workflows."
        primaryLabel="See Business Services"
        primaryHref="/business-services"
        secondaryLabel="Submit Your Listing"
        secondaryHref="/submit"
      />

      <AIConciergePreview />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <SectionHeader title="Stay in the Loop" subtitle="Get Atlanta matchday updates, local deals, and event highlights." />
        <form className="flex flex-col gap-3 sm:flex-row">
          <input type="email" required placeholder="Email address" className="input" />
          <button className="rounded-full bg-brandGold px-5 py-2.5 text-sm font-bold text-brandNavy">Join Newsletter</button>
        </form>
      </section>
    </div>
  );
}
