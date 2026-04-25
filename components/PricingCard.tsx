import Link from 'next/link';
import { ServicePackage } from '@/types';

export default function PricingCard({ service }: { service: ServicePackage }) {
  return (
    <article className={`rounded-2xl border p-5 shadow-card ${service.isFeatured ? 'border-brandGold bg-brandGold/10' : 'border-white/10 bg-white/5'}`}>
      <h3 className="text-xl font-bold text-white">{service.name}</h3>
      <p className="mt-1 text-2xl font-black text-brandGold">{service.price}</p>
      <p className="mt-3 text-sm text-white/80">{service.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {service.includes.map((item) => <li key={item}>• {item}</li>)}
      </ul>
      <Link href={service.ctaUrl} className="mt-5 inline-block rounded-full bg-brandRed px-4 py-2 text-sm font-semibold text-white">Get Started</Link>
    </article>
  );
}
