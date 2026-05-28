const FORM_URL = "https://forms.gle/dTAVYgAb3ss9mbtY6";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-20 text-center md:pt-24 md:pb-24">

        {/* Headline */}
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
          Partner with{" "}
          <span className="text-primary">
            Y Combinator
          </span>{" "}
          startups
        </h1>

        {/* Supporting copy */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Get introduced to YC startups with same buyers, complementary products - never competitors.
        </p>

        {/* Value proposition */}
        <p className="mt-4 text-lg font-medium text-foreground sm:text-xl">
  Build win-win partnerships.
</p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Submit your startup
          </a>

          <a
            href="#examples"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            See example partnerships
          </a>
        </div>

      </div>
    </section>
  );
}
