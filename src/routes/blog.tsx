import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { TagFilter } from "@/components/blog/TagFilter";
import { Pagination } from "@/components/blog/Pagination";
import { getAllPosts, getAllTags } from "@/lib/blog";

const PAGE_SIZE = 9;

const searchSchema = z.object({
  tag: fallback(z.string().optional(), undefined),
  page: fallback(z.number().int().min(1).optional(), undefined),
});

export const Route = createFileRoute("/blog")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Blog — YC and Me" },
      {
        name: "description",
        content:
          "Essays on go-to-market, distribution, and partnering with Y Combinator startups.",
      },
      { property: "og:title", content: "Blog — YC and Me" },
      {
        property: "og:description",
        content:
          "Essays on go-to-market, distribution, and partnering with Y Combinator startups.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { tag, page: pageParam } = Route.useSearch();
  const page = pageParam ?? 1;

  const all = getAllPosts();
  const tags = getAllTags();
  const filtered = tag ? all.filter((p) => p.tags.includes(tag)) : all;
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
            Blog
          </p>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Notes on distribution &amp; GTM.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Essays on partnering with YC startups, building win-win deals, and
            unlocking GTM leverage without raising a round.
          </p>
        </div>

        <div className="mt-10">
          <TagFilter tags={tags} activeTag={tag} />
        </div>

        {visible.length === 0 ? (
          <div className="mt-16 rounded-xl border border-border bg-card p-10 text-center">
            <p className="text-sm text-muted-foreground">
              No posts found{tag ? ` for tag "${tag}"` : ""}.
            </p>
            <Link
              to="/blog"
              search={{ tag: undefined, page: undefined }}
              className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
            >
              Clear filter
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        )}

        <Pagination page={page} totalPages={totalPages} tag={tag} />
      </main>
      <Footer />
    </div>
  );
}
