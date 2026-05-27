import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/content/posts";

export function FeaturedPosts() {
  const featured = posts.slice(0, 3);
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
            From the blog
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Notes on distribution & GTM.
          </h2>
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          All posts
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 yc-shadow transition-all hover:-translate-y-0.5 hover:yc-shadow-hover"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <time>
                {new Date(p.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{p.readingTime}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Read post
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
