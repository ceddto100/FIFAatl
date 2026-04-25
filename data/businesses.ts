import { Business } from '@/types';

export const businesses: Business[] = [
  {
    id: 'b1',
    slug: 'peachtree-pub-grill',
    name: 'Peachtree Pub & Grill',
    description: 'Matchday food specials, multilingual staff, and walkable access to Downtown transit.',
    businessType: 'bar',
    neighborhood: 'Downtown',
    specialOffer: '15% off game-day combo with fan jersey.',
    isFeatured: true,
    ctaUrl: '/businesses/peachtree-pub-grill',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'b2',
    slug: 'atlanta-global-eats',
    name: 'Atlanta Global Eats',
    description: 'International comfort food inspired by top football nations.',
    businessType: 'restaurant',
    neighborhood: 'Old Fourth Ward',
    specialOffer: 'Late-night menu available after all stadium matches.',
    ctaUrl: '/businesses/atlanta-global-eats',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'b3',
    slug: 'southside-stay-hosting',
    name: 'Southside Stay Hosting Co.',
    description: 'Airbnb host support services for guest welcome guides and smart check-in.',
    businessType: 'service',
    neighborhood: 'Castleberry Hill',
    specialOffer: 'Free host checklist download for World Cup dates.',
    ctaUrl: '/businesses/southside-stay-hosting',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'b4',
    slug: 'west-midtown-street-bites',
    name: 'West Midtown Street Bites',
    description: 'Food truck collective with pre-match and post-match quick options.',
    businessType: 'food truck',
    neighborhood: 'West Midtown',
    specialOffer: 'Bundle meal + drink specials on Atlanta matchdays.',
    ctaUrl: '/businesses/west-midtown-street-bites',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  }
];
