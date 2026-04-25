import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Atlanta Fan Fest Guide | World Cup ATL Local Guide',
  description: 'Plan your Fan Fest experience at Centennial Olympic Park with tips on food, music, family fun, and nearby events.',
  keywords: ['Atlanta fan fest', 'Centennial Olympic Park soccer events']
};

export default function FanFestPage() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Atlanta Fan Fest" subtitle="Location: Centennial Olympic Park (placeholder details to update with official host city releases)." />
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/85">
        <p>Atlanta Fan Fest is positioned as a citywide gathering point for visitors, local fans, and families throughout the tournament.</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>• Live match screenings and large viewing zones</li>
          <li>• Food trucks, local vendors, and global cuisine pop-ups</li>
          <li>• Music performances and supporter-led celebrations</li>
          <li>• Interactive games and skill challenges</li>
          <li>• Family-friendly activities and daytime programming</li>
        </ul>
        <p className="mt-4 text-sm text-brandGold">Registration note: official registration/entry details are placeholder content for now.</p>
      </div>
      <Link href="/events" className="inline-block rounded-full bg-brandRed px-5 py-2.5 text-sm font-semibold text-white">Explore Nearby Food and Events</Link>
    </div>
  );
}
