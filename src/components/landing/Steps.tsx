import { ArrowUpRight } from "lucide-react";

const FORM_URL = "https://forms.gle/dTAVYgAb3ss9mbtY6";

const steps = [
  {
    n: "01",
    title: "Tell us what you ship",
    body: "Product, customers, GTM motion. Five minutes.",
    cta: true,
  },
  {
    n: "02",
    title: "We map you against the YC network",
    body: "10 YC companies with the same buyers and complementary products. Not competitors.",
  },
  {
    n: "03",
    title: "Founder intros and a playbook",
    body: "Direct contacts and a partnership plan: bundles, integrations, co-selling, revenue share.",
  },
];

export function Steps() {
  return (
    <section id="how" className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
            How it works
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From submission to founder intro in days.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 yc-shadow transition-all hover:-translate-y-0.5 hover:yc-shadow-hover"
            >
              <span className="font-mono text-xs text-primary">{s.n}</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              {s.cta && (
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Submit your startup
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
