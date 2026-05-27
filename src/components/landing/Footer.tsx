import { Logo } from "./Logo";

const FORM_URL = "https://forms.gle/dTAVYgAb3ss9mbtY6";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Logo size={22} />
          <span className="text-xs text-muted-foreground">
            Distribution infrastructure for startups
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a href="/#how" className="hover:text-foreground">How it works</a>
          <a href="/#examples" className="hover:text-foreground">Examples</a>
          <a href="/blog" className="hover:text-foreground">Blog</a>
          <a href="/#contact" className="hover:text-foreground">Contact</a>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Submit
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-4 font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} YC and Me · Not affiliated with Y Combinator.
        </div>
      </div>
    </footer>
  );
}
