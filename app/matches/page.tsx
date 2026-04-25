import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import MatchCard from '@/components/MatchCard';
import { matches } from '@/data/matches';

export const metadata: Metadata = {
  title: 'Atlanta World Cup Match Schedule | World Cup ATL Local Guide',
  description: 'Browse Atlanta match dates, venue details, and matchday guide links for World Cup 2026 in Atlanta.',
  keywords: ['Atlanta World Cup match dates', 'Mercedes-Benz Stadium soccer matches']
};

export default function MatchesPage() {
  return (
    <section>
      <SectionHeader title="Atlanta Match Schedule" subtitle="Structured placeholder schedule for rapid updates when match details are finalized." />
      <div className="grid gap-4 sm:grid-cols-2">{matches.map((match) => <MatchCard key={match.id} match={match} />)}</div>
    </section>
  );
}
