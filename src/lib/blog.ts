// Filesystem-backed blog loader.
// Markdown files live in /content/blog and are imported as raw strings at build
// time via Vite's import.meta.glob. Adding a new post = drop a new .md file.

export type PostFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  coverImage?: string;
  draft?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string; // markdown body (no frontmatter)
  readingTime: string;
  wordCount: number;
};

// Eagerly import every markdown file as a raw string.
const modules = import.meta.glob("/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, fm, body] = match;
  const data: Record<string, unknown> = {};

  // Minimal YAML: key: value | key: [a, b] | key: "quoted"
  for (const line of fm.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const [, key, rawValue] = m;
    const v = rawValue.trim();
    if (v === "") {
      data[key] = "";
    } else if (v === "true" || v === "false") {
      data[key] = v === "true";
    } else if (v.startsWith("[") && v.endsWith("]")) {
      data[key] = v
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      data[key] = v.replace(/^["']|["']$/g, "");
    }
  }
  return { data, content: body };
}

function computeReadingTime(content: string): { readingTime: string; wordCount: number } {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return { readingTime: `${minutes} min read`, wordCount: words };
}

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

const allPosts: Post[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const rt = computeReadingTime(content);
    return {
      slug: slugFromPath(path),
      title: String(data.title ?? "Untitled"),
      description: String(data.description ?? ""),
      publishedAt: String(data.publishedAt ?? ""),
      updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      coverImage: data.coverImage ? String(data.coverImage) : undefined,
      draft: Boolean(data.draft),
      content,
      readingTime: rt.readingTime,
      wordCount: rt.wordCount,
    };
  })
  .filter((p) => !p.draft)
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of allPosts) for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): { prev?: Post; next?: Post } {
  const idx = allPosts.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    // allPosts is newest first → "next" (newer) is at idx-1, "prev" (older) at idx+1
    next: idx > 0 ? allPosts[idx - 1] : undefined,
    prev: idx < allPosts.length - 1 ? allPosts[idx + 1] : undefined,
  };
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return allPosts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

export type Heading = { depth: number; text: string; id: string };

export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  // Strip fenced code blocks so ``` # not a heading ``` doesn't match.
  const stripped = markdown.replace(/```[\s\S]*?```/g, "");
  for (const line of stripped.split("\n")) {
    const m = line.match(/^(#{2,3})\s+(.+?)\s*$/);
    if (!m) continue;
    const depth = m[1].length;
    const text = m[2].replace(/[*_`]/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    headings.push({ depth, text, id });
  }
  return headings;
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
