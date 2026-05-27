import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { getPost } from "@/content/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — YC and Me` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/blog/${loaderData.post.slug}` },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: `/blog/${loaderData.post.slug}` }]
      : [],
  }),
  component: PostPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-foreground">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-sm text-primary hover:underline">
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
            onClick={() => { router.invalidate(); reset(); }}
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
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <Link
          to="/blog"
          className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary"
        >
          ← Blog
        </Link>
        <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <article className="prose-yc mt-4">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
}
