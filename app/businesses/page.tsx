import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import BusinessCard from '@/components/BusinessCard';
import { businesses } from '@/data/businesses';

export const metadata: Metadata = {
  title: 'Atlanta Business Directory for World Cup Visitors | World Cup ATL Local Guide',
  description: 'Discover restaurants, bars, lounges, food trucks, services, and hosts supporting fans in Atlanta.',
  keywords: ['Atlanta businesses World Cup', 'Atlanta restaurants near stadium']
};

export default function BusinessesPage() {
  return (
    <section>
      <SectionHeader title="Business Directory" subtitle="Local businesses supporting fans, visitors, and matchday experiences across Atlanta." />
      <div className="grid gap-4 sm:grid-cols-2">{businesses.map((business) => <BusinessCard key={business.id} business={business} />)}</div>
    </section>
  );
}
