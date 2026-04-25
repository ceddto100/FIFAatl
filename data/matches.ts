import { Match } from '@/types';

export const matches: Match[] = [
  {
    id: 'm1',
    slug: 'atlanta-group-stage-1',
    title: 'Atlanta Matchday Opening Fixture',
    description: 'Placeholder matchup for the opening Atlanta host-city date.',
    venue: 'Mercedes-Benz Stadium',
    date: '2026-06-15',
    time: 'TBD',
    matchType: 'Group Stage',
    teams: 'Team A vs Team B',
    isFeatured: true,
    ctaUrl: '/matches/atlanta-group-stage-1',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'm2',
    slug: 'atlanta-group-stage-2',
    title: 'Atlanta Evening Group Clash',
    description: 'Prime-time group stage atmosphere in Downtown Atlanta.',
    venue: 'Mercedes-Benz Stadium',
    date: '2026-06-21',
    time: 'TBD',
    matchType: 'Group Stage',
    teams: 'Team C vs Team D',
    ctaUrl: '/matches/atlanta-group-stage-2',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'm3',
    slug: 'atlanta-round-of-32',
    title: 'Atlanta Knockout Night',
    description: 'Round of 32 energy with citywide watch parties.',
    venue: 'Mercedes-Benz Stadium',
    date: '2026-07-01',
    time: 'TBD',
    matchType: 'Round of 32',
    teams: 'Winner Group X vs Runner-up Group Y',
    ctaUrl: '/matches/atlanta-round-of-32',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'm4',
    slug: 'atlanta-semifinal',
    title: 'Atlanta Semifinal Showcase',
    description: 'One of the biggest nights of the tournament in Atlanta.',
    venue: 'Mercedes-Benz Stadium',
    date: '2026-07-15',
    time: 'TBD',
    matchType: 'Semifinal',
    teams: 'Winner Quarterfinal 1 vs Winner Quarterfinal 2',
    isFeatured: true,
    ctaUrl: '/matches/atlanta-semifinal',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  }
];
