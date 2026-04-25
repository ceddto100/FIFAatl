import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'World Cup ATL Local Guide | CodeByCed',
  description: 'Independent local guide for World Cup 2026 in Atlanta: matchdays, events, businesses, transportation, and visitor resources.',
  keywords: ['World Cup 2026 Atlanta', 'Atlanta matchday guide', 'Atlanta watch parties', 'Atlanta local businesses']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
