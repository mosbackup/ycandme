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
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
