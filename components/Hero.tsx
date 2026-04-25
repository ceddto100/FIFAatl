import Link from 'next/link';

export default function Hero() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-brandSlate via-brandNavy to-black p-6 shadow-card sm:p-10">
      <p className="mb-3 inline-block rounded-full border border-brandGold/40 bg-brandGold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brandGold">
        Atlanta Soccer Event Guide
      </p>
      <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl">Atlanta’s Local Guide for World Cup 2026</h1>
      <p className="mt-4 max-w-3xl text-sm text-white/80 sm:text-lg">
        Find matchday events, watch parties, food spots, nightlife, transportation tips, and local businesses during the biggest soccer event Atlanta has ever hosted.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/events" className="rounded-full bg-brandGold px-6 py-3 text-sm font-bold text-brandNavy">
          Explore the Guide
        </Link>
        <Link href="/submit" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white">
          Submit Your Business or Event
        </Link>
      </div>
    </section>
  );
}
