import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({ title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: Props) {
  return (
    <section className="rounded-3xl border border-brandGold/30 bg-brandGold/10 p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-3 max-w-3xl text-white/80">{description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={primaryHref} className="rounded-full bg-brandGold px-5 py-2.5 text-sm font-bold text-brandNavy">{primaryLabel}</Link>
        {secondaryLabel && secondaryHref ? <Link href={secondaryHref} className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white">{secondaryLabel}</Link> : null}
      </div>
    </section>
  );
}
