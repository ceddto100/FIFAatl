# World Cup ATL Local Guide (Phase 1)

A mobile-first, independent local platform for **World Cup 2026 in Atlanta**.
Built to help visitors and fans discover matches, Fan Fest activity, events, businesses, neighborhoods, and transportation guidance — while giving local businesses a way to get discovered and monetize attention.

> Brand safety note: this project is intentionally positioned as an independent local guide and avoids official FIFA branding.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static mock data (easy migration to DB/API)

## Routes Included (Phase 1)

- `/` Home
- `/matches` Match schedule
- `/fan-fest` Fan Fest guide
- `/events` Events directory
- `/businesses` Business directory
- `/neighborhoods` Neighborhood guides
- `/transportation` Transportation tips
- `/submit` Business/event submission form
- `/business-services` Monetization services + pricing placeholders

## Project Structure

- `app/` page routes + metadata
- `components/` reusable UI components
- `data/` mock data source files
- `types/` shared TypeScript interfaces
- `lib/` utility functions

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open:
   ```
   http://localhost:3000
   ```

## How to Update Mock Data

Update these files:
- `data/matches.ts`
- `data/events.ts`
- `data/businesses.ts`
- `data/neighborhoods.ts`
- `data/services.ts`

All key cards and sections pull from these files.

## Deployment (Vercel)

1. Push repo to GitHub.
2. Import repo into Vercel.
3. Build command: `npm run build`
4. Output is managed automatically by Next.js.

## Where to Connect Future Systems

### Database / API
- Replace static data imports in `app/*/page.tsx` with server actions, route handlers, or API calls.
- Recommended integration point for submissions: `components/SubmitForm.tsx` submit handler.

### Make.com Webhook
- Add webhook POST in `components/SubmitForm.tsx` inside `handleSubmit`.
- Optionally create `app/api/submit/route.ts` and send form payload there first.

### Stripe
- Add checkout endpoints in `app/api/stripe/*` and map from `app/business-services/page.tsx` CTAs.

### AI Concierge
- Current UI placeholder component: `components/AIConciergePreview.tsx`.
- Future endpoint suggestion: `app/api/ai-concierge/route.ts` with streaming response support.

## Phase 2 Roadmap Ideas

- Dynamic detail pages (`/events/[slug]`, `/businesses/[slug]`, etc.)
- Auth + admin dashboard
- Business owner dashboard
- Paid featured placements
- Newsletter + CRM integrations
- Multilingual support
- Geo/map experiences
- AI concierge with local knowledge base + retrieval
- Analytics and conversion tracking

## Legal Positioning

This platform is an independent local guide and is not affiliated with FIFA, the FIFA World Cup, or official host organizations.
