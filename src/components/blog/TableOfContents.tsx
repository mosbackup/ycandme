import type { Heading } from "@/lib/blog";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;
  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-2 border-l border-border">
        {headings.map((h) => (
          <li
            key={h.id}
            className={h.depth === 3 ? "pl-6" : "pl-4"}
          >
            <a
              href={`#${h.id}`}
              className="block border-l-2 border-transparent -ml-px py-0.5 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
