import Link from 'next/link';
import { Match } from '@/types';
import { formatDate } from '@/lib/utils';

export default function MatchCard({ match }: { match: Match }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-wider text-brandGold">{match.matchType}</p>
      <h3 className="mt-2 text-lg font-bold text-white">{match.teams}</h3>
      <p className="mt-1 text-sm text-white/70">{formatDate(match.date)} • {match.time}</p>
      <p className="mt-1 text-sm text-white/70">{match.venue}</p>
      <Link href={match.ctaUrl} className="mt-4 inline-block rounded-full bg-brandRed px-4 py-2 text-sm font-semibold text-white">
        View Matchday Guide
      </Link>
    </article>
  );
}
