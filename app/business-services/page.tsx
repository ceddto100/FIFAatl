import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import PricingCard from '@/components/PricingCard';
import { servicePackages } from '@/data/services';

export const metadata: Metadata = {
  title: 'Business Services | World Cup ATL Local Guide',
  description: 'Service packages to help Atlanta businesses capture World Cup traffic with listings, QR pages, and automation.',
  keywords: ['Atlanta business marketing services', 'World Cup business packages']
};

const capabilities = [
  'World Cup landing page',
  'QR code menu or offer page',
  'Featured listing on the guide',
  'Event promo page',
  'AI FAQ chatbot',
  'Google Business Profile optimization',
  'Social media content package',
  'Email/SMS capture setup',
  'Reservation or booking form',
  'Automated lead capture workflow',
  'Make.com automation setup',
  'Basic website updates'
];

export default function BusinessServicesPage() {
  return (
    <div className="space-y-8">
      <SectionHeader title="Business Services for World Cup 2026" subtitle="Help your business convert tournament traffic into repeat customers and measurable leads." />
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold text-white">Service Options</h3>
        <div className="mt-3 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
          {capabilities.map((item) => <p key={item}>• {item}</p>)}
        </div>
      </div>
      <p className="text-sm text-brandGold">Pricing below is placeholder pricing and easy to update in data/services.ts.</p>
      <div className="grid gap-4 sm:grid-cols-2">{servicePackages.map((service) => <PricingCard key={service.id} service={service} />)}</div>
    </div>
  );
}
