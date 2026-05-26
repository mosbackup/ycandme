export function ExampleMatch() {
  return (
    <section id="examples" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
          Example match
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What a match looks like.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Same customers. Different products. One warm intro away from a deal.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card yc-shadow">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
          <div className="p-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-sm bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-primary">
                YC S26
              </span>
            </div>
            <a
              href="https://zibralabs.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-foreground hover:text-primary"
            >
              Zibra Labs
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              HPC clusters for running millions of backtests.
            </p>
          </div>

          <div className="flex items-center justify-center border-y border-border bg-secondary/30 px-6 py-4 md:border-x md:border-y-0">
            <span className="font-mono text-lg text-primary">×</span>
          </div>

          <div className="p-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                Non-YC
              </span>
            </div>
            <a
              href="https://www.pitinference.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-foreground hover:text-primary"
            >
              PiT-Inference
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Custom LLMs for backtesting.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-border border-t border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Shared buyer
            </p>
            <p className="mt-2 text-sm text-foreground">
              Quant funds and trading firms.
            </p>
          </div>
          <div className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Fit
            </p>
            <p className="mt-2 text-sm text-foreground">
              Inference workloads run on HPC. The stack composes.
            </p>
          </div>
          <div className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
              Motion
            </p>
            <p className="mt-2 text-sm text-foreground">
              Joint offering: PiT models deployed on Zibra clusters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
