import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { MarkdownContent } from "@/components/blog/MarkdownContent";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { PostCard } from "@/components/blog/PostCard";
import {
  extractHeadings,
  formatDate,
  getAdjacentPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    const headings = extractHeadings(post.content);
    const { prev, next } = getAdjacentPosts(post.slug);
    const related = getRelatedPosts(post.slug, 3);
    return { post, headings, prev, next, related };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const url = `/blog/${params.slug}`;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      mainEntityOfPage: url,
      keywords: post.tags.join(", "),
      author: { "@type": "Organization", name: "YC and Me" },
      publisher: { "@type": "Organization", name: "YC and Me" },
      ...(post.coverImage ? { image: post.coverImage } : {}),
    };
    const meta = [
      { title: `${post.title} — YC and Me` },
      { name: "description", content: post.description },
      { name: "keywords", content: post.tags.join(", ") },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "article:published_time", content: post.publishedAt },
      ...(post.updatedAt
        ? [{ property: "article:modified_time", content: post.updatedAt }]
        : []),
      ...post.tags.map((t) => ({ property: "article:tag", content: t })),
      { name: "twitter:card", content: post.coverImage ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: post.title },
      { name: "twitter:description", content: post.description },
      ...(post.coverImage
        ? [
            { property: "og:image", content: post.coverImage },
            { name: "twitter:image", content: post.coverImage },
          ]
        : []),
    ];
    return {
      meta,
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(jsonLd) },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-foreground">Post not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We couldn't find that article.
        </p>
        <Link to="/blog" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
          ← Back to blog
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-foreground">Failed to load post</h1>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
        </div>
      </div>
    );
  },
});

function PostPage() {
  const { post, headings, prev, next, related } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Link
          to="/blog"
          className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary"
        >
          ← Blog
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_220px]">
          <div className="min-w-0">
            <header className="border-b border-border pb-8">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
                {post.tags.map((t) => (
                  <Link
                    key={t}
                    to="/blog"
                    search={{ tag: t, page: undefined }}
                    className="rounded-full border border-border bg-card px-2 py-0.5 hover:text-foreground"
                  >
                    {t}
                  </Link>
                ))}
              </div>
              <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
            </header>

            <div className="mt-8">
              <MarkdownContent content={post.content} />
            </div>

            {/* Prev / Next */}
            {(prev || next) && (
              <nav
                aria-label="Article navigation"
                className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2"
              >
                {prev ? (
                  <Link
                    to="/blog/$slug"
                    params={{ slug: prev.slug }}
                    className="group rounded-xl border border-border bg-card p-5 yc-shadow transition-all hover:-translate-y-0.5 hover:yc-shadow-hover"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      ← Older
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground group-hover:text-primary">
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link
                    to="/blog/$slug"
                    params={{ slug: next.slug }}
                    className="group rounded-xl border border-border bg-card p-5 text-right yc-shadow transition-all hover:-translate-y-0.5 hover:yc-shadow-hover"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      Newer →
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground group-hover:text-primary">
                      {next.title}
                    </p>
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            )}

            {/* Related */}
            {related.length > 0 && (
              <section className="mt-16 border-t border-border pt-10">
                <p className="mb-6 font-mono text-xs uppercase tracking-wider text-primary">
                  Related posts
                </p>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {related.map((p) => (
                    <PostCard key={p.slug} post={p} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
