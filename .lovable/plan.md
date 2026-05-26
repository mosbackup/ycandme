# YC and Me — Landing Page Plan

A single-page premium landing site styled exactly like YC Bench (clean editorial light mode, calm dark mode, #FF6600 accent), positioning YC and Me as distribution infrastructure for startups.

## Design system

Replace `src/styles.css` with the exact token set provided:
- Light: `#f5f5ed` background, white cards, soft borders, understated shadows
- Dark: near-black background, zinc-900 cards, restrained contrast
- Primary: YC Orange `hsl(24 100% 50%)` / `#FF6600`
- Fonts: Inter (sans), JetBrains Mono (mono) via Google Fonts in `__root.tsx`
- Custom utilities: `.yc-shadow`, `.yc-shadow-hover`
- Radius: 0.5rem

Theme toggle: simple class-based dark mode on `<html>`, persisted to localStorage, default = system.

## Page structure (single route: `src/routes/index.tsx`)

Sections rendered as small components under `src/components/landing/`:

1. **Nav** (sticky, blur on scroll)
   - Left: orange square mark with "Y" + wordmark "YC and Me"
   - Right links: How it Works · Example Matches · Submit
   - Theme toggle (sun/moon)
   - Primary CTA button "Submit Startup" → forms link

2. **Hero**
   - Headline: "Partner with Y Combinator startups."
   - Sub + supporting line as specified
   - Primary CTA "Submit your startup" (links to Google Form)
   - Secondary CTA "See example partnerships" (#examples anchor)
   - Trust note: "AI-assisted. Manually curated. Quality over quantity."
   - Generous whitespace, mono eyebrow label

3. **3-Step Process** (`#how`)
   - 3 cards horizontal (stack on mobile): Submit → Analyze → Connect
   - Card styling: `bg-card border border-border rounded-xl yc-shadow hover:yc-shadow-hover`
   - Step number in orange mono, title, description matching the brief's Step 1/2/3 copy
   - Step 1 card includes the form button

4. **Example Match** (`#examples`)
   - Zibra Labs × PiT-Inference case study
   - Two-column card layout with "×" divider in orange
   - Each side: company name, YC badge (P26 for Zibra), role description
   - Below: "Same market" + "Complementary products" + "Collaboration" rows in subtle bordered panel

5. **Value props strip** (4 bullets from "YC and Me helps startups...")
   - Minimal icon + label grid, muted background `bg-secondary/30`

6. **Final CTA section**
   - Big headline "Leverage YC distribution — without being in YC."
   - Submit button
   - Small print

7. **Footer**
   - Wordmark, tagline, copyright, form link

## Routing & metadata

- Update `src/routes/index.tsx` to render the landing (remove placeholder)
- Update `__root.tsx` `head()` with proper title ("YC and Me — Partner with Y Combinator startups"), meta description, OG tags, Inter + JetBrains Mono Google Fonts `<link>`s
- Set `<html lang="en">` and dark class wiring

## Technical notes

- All copy + form URL (`https://forms.gle/dTAVYgAb3ss9mbtY6`) hardcoded — no backend
- Pure frontend; no Lovable Cloud needed
- Use shadcn `Button` with default variants (primary = orange via tokens)
- Lucide icons for nav toggle and step indicators
- Mobile-first responsive: stacks at <768px (current viewport 390px)
- No animations beyond subtle hover elevation and nav scroll blur

## Files to create/modify

- `src/styles.css` — replace tokens
- `src/routes/__root.tsx` — fonts, meta
- `src/routes/index.tsx` — compose sections
- `src/components/landing/Nav.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/Steps.tsx`
- `src/components/landing/ExampleMatch.tsx`
- `src/components/landing/ValueProps.tsx`
- `src/components/landing/FinalCTA.tsx`
- `src/components/landing/Footer.tsx`
- `src/components/landing/ThemeToggle.tsx`
