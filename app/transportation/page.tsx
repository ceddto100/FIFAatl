import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Transportation Guide | World Cup ATL Local Guide',
  description: 'MARTA, rideshare, parking, airport arrival, and matchday mobility tips for visitors in Atlanta.',
  keywords: ['MARTA to Mercedes-Benz Stadium', 'Atlanta matchday parking tips']
};

const sections = [
  { title: 'MARTA', text: 'Use MARTA rail as your first option on high-traffic matchdays. Plan around station crowd peaks and preload fare cards.' },
  { title: 'Rideshare', text: 'Expect surge pricing near kickoff and final whistle. Set pickup zones a few blocks away for faster departures.' },
  { title: 'Walking Downtown', text: 'Downtown can be walkable between Fan Fest, attractions, and some hotels. Wear comfortable shoes and hydrate.' },
  { title: 'Parking', text: 'Pre-book parking where possible. Avoid last-minute lot hunting near the stadium core to reduce delays.' },
  { title: 'Airport Arrival Tips', text: 'From ATL Airport, MARTA is often the most predictable route into the city center during large events.' },
  { title: 'Stadium Arrival Tips', text: 'Target arrival 90+ minutes early for security and entry lines, especially for knockout matches.' },
  { title: 'Fan Fest Access', text: 'Centennial Olympic Park area is best accessed by transit + short walk; rideshare drop zones may shift by day.' },
  { title: 'Safety and Planning', text: 'Travel in groups at night, keep phone battery packs handy, and screenshot your route in case mobile service slows.' }
];

export default function TransportationPage() {
  return (
    <section>
      <SectionHeader title="Transportation Guide" subtitle="Practical tips to move through Atlanta efficiently during World Cup 2026 activity windows." />
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-bold text-white">{section.title}</h3>
            <p className="mt-2 text-sm text-white/80">{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
