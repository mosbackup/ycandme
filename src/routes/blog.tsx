import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { posts } from "@/content/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — YC and Me" },
      {
        name: "description",
        content:
          "Essays on go-to-market, distribution, and partnering with Y Combinator startups.",
      },
      { property: "og:title", content: "Blog — YC and Me" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
          Blog
        </p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Notes on distribution & GTM.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Essays on partnering with YC startups, building win-win deals, and
          unlocking GTM leverage without raising a round.
        </p>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col gap-2 py-6 transition-colors"
              >
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <time>{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
                  <span>·</span>
                  <span>{p.readingTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {p.title}
                </h2>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
