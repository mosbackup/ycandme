import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type Post } from "@/lib/blog";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 yc-shadow transition-all hover:-translate-y-0.5 hover:yc-shadow-hover"
    >
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.description}
      </p>
      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      )}
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Read post
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
