import { Link } from "@tanstack/react-router";

export function TagFilter({
  tags,
  activeTag,
}: {
  tags: { tag: string; count: number }[];
  activeTag?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        to="/blog"
        search={{ tag: undefined, page: undefined }}
        className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
          !activeTag
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-card text-muted-foreground hover:text-foreground"
        }`}
      >
        All
      </Link>
      {tags.map((t) => {
        const isActive = activeTag === t.tag;
        return (
          <Link
            key={t.tag}
            to="/blog"
            search={{ tag: t.tag, page: undefined }}
            className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.tag} <span className="opacity-60">({t.count})</span>
          </Link>
        );
      })}
    </div>
  );
}
