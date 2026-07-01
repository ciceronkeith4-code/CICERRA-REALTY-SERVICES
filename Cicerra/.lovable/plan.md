
## Vision

A premium, minimalist real estate experience that feels closer to Sotheby's or The Agency than a typical broker site. Every section earns its place: cinematic hero, story-driven about, refined property cards, elegant micro-interactions. No clutter, no stock-template feel.

## Brand & Design System

- **Palette** (tokens in `src/styles.css` via `@theme inline`):
  - Background `#FFFFFF`, soft `#F8F8F8`, warm beige `#EFE9DD`
  - Foreground charcoal `#222222`, muted gray `#6B6B6B`
  - Accent **luxury gold `#C9A74A`** with a lighter `#E3C77A` for gradients
  - Overlay black for cinematic sections
- **Typography**: Playfair Display (headings, light/regular weights, generous tracking) + Inter (body). Loaded via `<link>` in `__root.tsx` head (per Tailwind v4 rule).
- **Motion**: Framer Motion for reveals, parallax, magnetic buttons, hover lifts. 60fps; reduced-motion respected.
- **Radii / spacing**: rounded-2xl/3xl on cards; generous whitespace; max-w-7xl content rails.

## Routes

Single-page composed homepage at `/` is fine for a brand site of this scope, but per project rules major sections get their own routes for SEO:

- `/` — landing (intro + hero + condensed sections + CTA)
- `/about`
- `/properties`
- `/services`
- `/contact`

Each route has its own `head()` metadata (title, description, og:title, og:description). Shared `Navbar` + `Footer` rendered in `__root.tsx`.

## Page sections (landing `/`)

1. **Loading intro** (every visit, skippable)
   - Black canvas → gold hairline draws horizontally → Cicerra wordmark fades in → tagline cycles: "Finding More Than Homes" → "Creating Better Futures" → morphs into hero (overlay fades, intro element scales into nav logo position). ~4s, "Skip intro" link bottom-right.
2. **Navigation** — transparent over hero, turns frosted white on scroll, animated gold underline on active link, mobile sheet menu.
3. **Hero** — generated cinematic luxury-home image with slow Ken Burns zoom + dark gradient overlay. Centered Playfair headline "Luxury Homes. Smart Investments. Trusted Real Estate Experts." Two buttons (Explore Properties / Book Consultation). Floating stats strip (500+, 150+, 10+) with count-up on view.
4. **About teaser** — split layout, large serif headline "More Than Real Estate. Helping Families Find Home." with staggered paragraph reveal and a gold accent rule. Sourced narrative inspired by the Facebook page (warm, family-focused, local PH expertise). Link to `/about`.
5. **Why Choose Cicerra** — 6 feature cards in an asymmetric bento grid, hover lifts to gold border, icon + short copy.
6. **Featured Properties** — horizontal snap-scroll gallery of 6 placeholder listings. Each card: AI-generated luxury home image, location, price, beds/baths/lot area, "View Details" CTA. Hover reveals overlay.
7. **Services** — 6 icon cards (Residential Sales, Property Investment, Brokerage, Consultation, Documentation, Real Estate Marketing) in a clean 3-col grid with restrained iconography.
8. **Interactive break** — parallax image band with a single editorial pull-quote.
9. **Testimonials** — auto-advancing carousel, single elegant card at a time, client photo (generated), 5-star rule in gold, name + role.
10. **CTA** — full-bleed dark photo, headline "Ready to Find Your Dream Property?", two buttons (Schedule Consultation / Contact Us).
11. **Footer** — company info, FB/email/phone/office, quick links, socials, fine copyright.

Other routes mirror the relevant section with deeper content.

## Imagery

All generated up-front and stored under `src/assets/` (jpg for photos):
- 1 hero (cinematic luxury home exterior, dusk)
- 6 property exteriors/interiors
- 3 testimonial portraits
- 1 CTA band image
- 1 about/editorial image

## Interactions

- Magnetic primary buttons (subtle translate toward cursor)
- Section headlines reveal with mask-up animation
- Stat counters animate on `whileInView`
- Cursor glow on desktop (small radial light following pointer, opacity 0.06)
- Scroll-linked parallax on hero and CTA bands
- Reduced-motion media query disables all of the above

## Mobile

Redesigned, not stacked: bottom floating Contact button, sticky compact nav with hamburger sheet, property gallery becomes swipe carousel, hero text scales down with tighter line-height, intro shortens to ~2.5s.

## Backend

Visual only. Contact / consultation buttons open a styled modal with a non-functional form (clearly inert; submit shows a toast "Thanks — we'll be in touch"). Easy to wire to Lovable Cloud later.

## Technical notes

- Tailwind v4 tokens in `src/styles.css` under `@theme inline`; semantic classes only (`bg-background`, `text-foreground`, `bg-accent` etc.). No hardcoded hex in components.
- Framer Motion added via `bun add framer-motion`.
- Lucide icons for service/feature glyphs.
- Sonner toaster mounted in `__root.tsx` for form feedback.
- Each route file sets its own `head()` meta; root sets defaults only (no og:image on root).
- Intro state held in a tiny client component that mounts above `<Outlet />` on `/`; skippable, plays on each visit per your preference.

## Out of scope (this pass)

- Real CMS for properties (placeholders only)
- Working form submissions / email
- Multilingual or currency switching
- Blog / market reports

Once you approve, I'll build it end-to-end in build mode.
