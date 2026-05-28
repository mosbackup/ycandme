import { Link } from "@tanstack/react-router";

export function Pagination({
  page,
  totalPages,
  tag,
}: {
  page: number;
  totalPages: number;
  tag?: string;
}) {
  if (totalPages <= 1) return null;
  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex items-center justify-between border-t border-border pt-6 font-mono text-xs uppercase tracking-wider"
    >
      {page > 1 ? (
        <Link
          to="/blog"
          search={{ tag, page: page - 1 === 1 ? undefined : page - 1 }}
          className="text-muted-foreground hover:text-foreground"
        >
          ← Newer
        </Link>
      ) : (
        <span className="text-muted-foreground/40">← Newer</span>
      )}
      <span className="text-muted-foreground">
        Page {page} / {totalPages}
      </span>
      {page < totalPages ? (
        <Link
          to="/blog"
          search={{ tag, page: page + 1 }}
          className="text-muted-foreground hover:text-foreground"
        >
          Older →
        </Link>
      ) : (
        <span className="text-muted-foreground/40">Older →</span>
      )}
    </nav>
  );
}
