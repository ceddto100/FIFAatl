import Link from 'next/link';
import { Neighborhood } from '@/types';

export default function NeighborhoodCard({ neighborhood }: { neighborhood: Neighborhood }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
      <h3 className="text-lg font-bold text-white">{neighborhood.name}</h3>
      <p className="mt-2 text-sm text-white/80">{neighborhood.description}</p>
      <p className="mt-2 text-sm text-brandGold">Best for: {neighborhood.bestFor}</p>
      <p className="mt-1 text-sm text-white/70">Transit: {neighborhood.transitNotes}</p>
      <Link href={neighborhood.ctaUrl} className="mt-4 inline-block rounded-full bg-brandRed px-4 py-2 text-sm font-semibold text-white">
        Explore Neighborhood
      </Link>
    </article>
  );
}
