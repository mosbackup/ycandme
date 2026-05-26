const FORM_URL = "https://forms.gle/dTAVYgAb3ss9mbtY6";

export function FinalCTA() {
  return (
    <section id="submit" className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
      <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
        Leverage YC distribution —<br className="hidden sm:inline" /> without being in YC.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
        Submit your startup and receive 10 curated YC partnership opportunities with founder
        contacts and an outreach playbook.
      </p>
      <div className="mt-9">
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Submit your startup
        </a>
      </div>
      <p className="mt-6 font-mono text-xs text-muted-foreground">
        Quality over quantity · Manually curated · Reviewed within days
      </p>
    </section>
  );
}
