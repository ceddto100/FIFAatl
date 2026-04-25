import Link from 'next/link';
import { Business } from '@/types';

export default function BusinessCard({ business }: { business: Business }) {
  return (
    <article className={`rounded-2xl border p-4 shadow-card ${business.isFeatured ? 'border-brandGold bg-brandGold/10' : 'border-white/10 bg-white/5'}`}>
      {business.isFeatured ? <p className="text-xs font-bold uppercase tracking-wider text-brandGold">Featured Listing</p> : null}
      <h3 className="mt-2 text-lg font-bold text-white">{business.name}</h3>
      <p className="mt-1 text-sm capitalize text-white/70">{business.businessType} • {business.neighborhood}</p>
      <p className="mt-3 text-sm text-white/80">{business.description}</p>
      {business.specialOffer ? <p className="mt-2 text-sm text-brandGold">Offer: {business.specialOffer}</p> : null}
      <Link href={business.ctaUrl} className="mt-4 inline-block rounded-full bg-brandRed px-4 py-2 text-sm font-semibold text-white">
        View Business
      </Link>
    </article>
  );
}
