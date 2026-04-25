export interface Match {
  id: string;
  slug: string;
  title: string;
  description: string;
  venue: string;
  date: string;
  time: string;
  matchType: string;
  teams: string;
  imageUrl?: string;
  isFeatured?: boolean;
  tags?: string[];
  ctaUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: 'watch party' | 'food' | 'nightlife' | 'family' | 'culture' | 'music' | 'soccer meetup';
  neighborhood: string;
  address: string;
  date: string;
  time: string;
  imageUrl?: string;
  isFeatured?: boolean;
  tags?: string[];
  price: 'Free' | 'Paid';
  familyFriendly: boolean;
  ctaUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Business {
  id: string;
  slug: string;
  name: string;
  description: string;
  businessType: 'restaurant' | 'bar' | 'lounge' | 'food truck' | 'hotel' | 'airbnb host' | 'shop' | 'experience' | 'service';
  neighborhood: string;
  address?: string;
  specialOffer?: string;
  imageUrl?: string;
  isFeatured?: boolean;
  tags?: string[];
  ctaUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Neighborhood {
  id: string;
  slug: string;
  name: string;
  description: string;
  bestFor: string;
  transitNotes: string;
  imageUrl?: string;
  tags?: string[];
  ctaUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServicePackage {
  id: string;
  slug: string;
  name: string;
  description: string;
  includes: string[];
  price: string;
  isFeatured?: boolean;
  ctaUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface SubmissionFormData {
  name: string;
  email: string;
  phone: string;
  listingName: string;
  submissionType: 'business' | 'event';
  category: string;
  neighborhood: string;
  date: string;
  time: string;
  websiteOrSocial: string;
  description: string;
  specialOffer: string;
  isFamilyFriendly: boolean;
  interestedInFeaturedPlacement: boolean;
  message: string;
}
