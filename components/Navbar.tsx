import Link from 'next/link';

const links = [
  { href: '/matches', label: 'Matches' },
  { href: '/fan-fest', label: 'Fan Fest' },
  { href: '/events', label: 'Events' },
  { href: '/businesses', label: 'Businesses' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/transportation', label: 'Transportation' },
  { href: '/business-services', label: 'Services' },
  { href: '/submit', label: 'Submit' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brandNavy/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white sm:text-base">
          World Cup ATL <span className="text-brandGold">Local Guide</span>
        </Link>
        <div className="hidden items-center gap-4 text-sm lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/80 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/submit" className="rounded-full bg-brandGold px-4 py-2 text-xs font-semibold text-brandNavy sm:text-sm">
          List Your Business
        </Link>
      </nav>
    </header>
  );
}
