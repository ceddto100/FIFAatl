import { ServicePackage } from '@/types';

export const servicePackages: ServicePackage[] = [
  {
    id: 's1',
    slug: 'basic-listing',
    name: 'Basic Listing',
    description: 'Get discovered by visitors searching where to eat, stay, or celebrate.',
    includes: ['Directory listing', 'One category tag', 'Contact link'],
    price: '$49',
    ctaUrl: '/submit',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 's2',
    slug: 'featured-listing',
    name: 'Featured Listing',
    description: 'Priority placement on home and category pages during match windows.',
    includes: ['Featured badge', 'Premium placement', 'Offer highlight'],
    price: '$149',
    isFeatured: true,
    ctaUrl: '/submit',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 's3',
    slug: 'qr-landing-package',
    name: 'QR Landing Page Package',
    description: 'Custom mobile page for menus, offers, and matchday updates.',
    includes: ['Branded landing page', 'QR code setup', 'Basic analytics'],
    price: '$399',
    ctaUrl: '/submit',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 's4',
    slug: 'ai-concierge-automation',
    name: 'AI Concierge / Automation Setup',
    description: 'Smart FAQ and lead routing workflows for high visitor demand.',
    includes: ['FAQ assistant setup', 'Lead intake automation', 'Make.com scenario draft'],
    price: '$799+',
    ctaUrl: '/submit',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  }
];
