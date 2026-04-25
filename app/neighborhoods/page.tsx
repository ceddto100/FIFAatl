import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import NeighborhoodCard from '@/components/NeighborhoodCard';
import { neighborhoods } from '@/data/neighborhoods';

export const metadata: Metadata = {
  title: 'Atlanta Neighborhood Guides for World Cup Fans | World Cup ATL Local Guide',
  description: 'Explore Atlanta neighborhoods with local tips for dining, transit, nightlife, and family activities.',
  keywords: ['Atlanta neighborhood guide', 'where to stay in Atlanta for soccer']
};

export default function NeighborhoodsPage() {
  return (
    <section>
      <SectionHeader title="Neighborhood Guides" subtitle="Pick the part of Atlanta that matches your vibe, schedule, and transportation plan." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{neighborhoods.map((neighborhood) => <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />)}</div>
    </section>
  );
}
