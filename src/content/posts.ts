export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "leveraging-yc-distribution-without-being-in-yc",
    title: "Leveraging YC distribution — without being in YC",
    excerpt:
      "How non-YC startups can plug into the Y Combinator ecosystem through curated, win-win partnerships.",
    date: "2026-05-12",
    readingTime: "4 min read",
    content: `# Leveraging YC distribution — without being in YC

Y Combinator companies share something rare: a dense, high-trust network of founders who actively help each other distribute. If you're outside YC, that flywheel can feel out of reach. It doesn't have to be.

## Why YC distribution matters

YC alumni open doors for one another constantly — bundles, integrations, joint go-to-market motions, warm intros to design partners. Founders trust other YC founders by default. A single well-placed partnership inside the ecosystem can outperform months of cold outbound.

## The shortcut: complementary, not competitive

The opportunity for non-YC startups is **complementarity**. If you sell to the same buyer as a YC company but don't compete with them, you're a natural partner.

A few common patterns:

- **Bundles** — package both products into a single offer.
- **Integrations** — make one product strictly better when used with the other.
- **Revenue share** — referral fees on each closed deal.
- **Co-marketing** — joint webinars, case studies, launch posts.

## How "YC and Me" works

1. You submit your startup in under five minutes.
2. We analyze the YC ecosystem and select 10 high-fit partners.
3. You get direct founder contacts plus a tailored GTM collaboration plan.

No spray-and-pray. Quality over quantity. Manually curated.

> Distribution isn't about cold outreach at scale. It's about being in the right room.

If you want to be in the YC room without the YC batch, [submit your startup](https://forms.gle/dTAVYgAb3ss9mbtY6).
`,
  },
  {
    slug: "how-to-write-a-partnership-pitch-yc-founders-actually-reply-to",
    title: "How to write a partnership pitch YC founders actually reply to",
    excerpt:
      "The anatomy of an outbound message that gets a YC founder to book a call — short, specific, and built around their customer.",
    date: "2026-04-28",
    readingTime: "5 min read",
    content: `# How to write a partnership pitch YC founders actually reply to

YC founders receive dozens of "let's partner" messages a week. Most get archived in seconds. The ones that work share a tight structure.

## Lead with their customer, not your product

Open with proof you understand who they sell to. One sentence. No fluff.

> "You sell to mid-market RevOps teams running HubSpot — same buyer we sell to."

## Name the win-win in one line

Don't pitch a meeting. Pitch the shape of the deal.

- A bundle that lifts both ACVs
- An integration that reduces their churn
- A referral motion with a clean rev-share

## Show you did the homework

Reference their last launch, a recent hire, or a Show HN post. This proves you're not running a blast.

## Keep it under 120 words

A founder should be able to read it on their phone between meetings and reply with "let's talk" in one tap.

## The template

> Hey {first name},
>
> We both sell to {specific buyer}. We're seeing {concrete signal of overlap}.
>
> Quick idea: {one-line partnership shape, with the upside for them first}.
>
> 15 min next week to explore?

That's it. Specific, founder-to-founder, no pitch deck attached.
`,
  },
  {
    slug: "five-partnership-shapes-that-actually-move-revenue",
    title: "Five partnership shapes that actually move revenue",
    excerpt:
      "Bundles, integrations, co-selling, rev-share, and embedded distribution — when each works and how to structure it.",
    date: "2026-04-14",
    readingTime: "6 min read",
    content: `# Five partnership shapes that actually move revenue

"Partnership" is a fuzzy word. Below are the five shapes that consistently produce revenue for early-stage startups — and when to pick each one.

## 1. Bundles

Two products sold as one offer at a single price.

- **Works when:** the buyer needs both to get value.
- **Watch out for:** revenue attribution and renewal mechanics.

## 2. Native integrations

A first-class integration that makes one product strictly better with the other.

- **Works when:** you can quantify the lift (faster onboarding, fewer tickets, higher activation).
- **Bonus:** integrations earn marketplace placement, which compounds.

## 3. Co-selling

Joint account plans where both AEs work the same logos.

- **Works when:** the buyer is enterprise and the sales cycle is long.
- **Watch out for:** clear deal registration to avoid AE friction.

## 4. Revenue share

A clean referral fee on closed deals, tracked in a shared deal log.

- **Works when:** the partner has reach you don't and your ACV supports a healthy %.
- **Standard range:** 10–25% of first-year contract value.

## 5. Embedded distribution

You ship inside the partner's product as a default capability.

- **Works when:** you're infrastructure (auth, payments, search, AI) and the partner doesn't want to build it.
- **Highest leverage, hardest to land.**

## How to choose

Pick the lightest shape that produces revenue, then graduate. Most partnerships die from over-engineering — a clean rev-share with one warm intro beats a 30-page MSA every time.
`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
