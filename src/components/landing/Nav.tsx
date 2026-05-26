import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const FORM_URL = "https://forms.gle/dTAVYgAb3ss9mbtY6";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary font-mono text-sm font-bold text-primary-foreground">
            Y
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            YC <span className="text-muted-foreground font-normal">and</span> Me
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#how" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How it Works
          </a>
          <a href="#examples" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Example Matches
          </a>
          <a href="#submit" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Submit
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Submit Startup
          </a>
        </div>
      </div>
    </header>
  );
}
