import { Event } from '@/types';

export const events: Event[] = [
  {
    id: 'e1',
    slug: 'downtown-kickoff-watch-party',
    name: 'Downtown Kickoff Watch Party',
    description: 'Big screens, local DJs, and global food vendors near the stadium corridor.',
    category: 'watch party',
    neighborhood: 'Downtown',
    address: 'Marietta St NW, Atlanta, GA',
    date: '2026-06-15',
    time: '5:00 PM',
    price: 'Free',
    familyFriendly: true,
    isFeatured: true,
    ctaUrl: '/events/downtown-kickoff-watch-party',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'e2',
    slug: 'beltline-fan-food-crawl',
    name: 'BeltLine Fan Food Crawl',
    description: 'Taste international bites from Atlanta pop-ups inspired by qualifying countries.',
    category: 'food',
    neighborhood: 'BeltLine area',
    address: 'Eastside Trail, Atlanta, GA',
    date: '2026-06-20',
    time: '1:00 PM',
    price: 'Paid',
    familyFriendly: true,
    ctaUrl: '/events/beltline-fan-food-crawl',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'e3',
    slug: 'midtown-late-night-supporters-lounge',
    name: 'Midtown Late-Night Supporters Lounge',
    description: 'After-match nightlife with themed sets, mocktails, and supporter club meetups.',
    category: 'nightlife',
    neighborhood: 'Midtown',
    address: 'Peachtree St NE, Atlanta, GA',
    date: '2026-07-01',
    time: '10:00 PM',
    price: 'Paid',
    familyFriendly: false,
    ctaUrl: '/events/midtown-late-night-supporters-lounge',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'e4',
    slug: 'family-fan-day-centennial-park',
    name: 'Family Fan Day at Centennial Park',
    description: 'Interactive skills zones, mini-pitches, and kid-safe programming all afternoon.',
    category: 'family',
    neighborhood: 'Downtown',
    address: 'Centennial Olympic Park, Atlanta, GA',
    date: '2026-06-27',
    time: '11:00 AM',
    price: 'Free',
    familyFriendly: true,
    ctaUrl: '/events/family-fan-day-centennial-park',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  }
];
