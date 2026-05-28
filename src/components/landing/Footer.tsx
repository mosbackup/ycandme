import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Logo size={22} />
  
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-4 font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} YC and Me · Distribution infrastructure for YC startups.
        </div>
      </div>
    </footer>
  );
}
