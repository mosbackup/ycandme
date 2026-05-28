import { Network, Target, Handshake, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, title: "Customer overlap", body: "Identify YC companies that already sell to your buyers." },
  { icon: Handshake, title: "Win-win deals", body: "Designed for mutual upside - bundles, integrations." },
  { icon: Network, title: "Warm introductions", body: ".Both startups gain trusted access to each other’s customers through aligned partnerships." },
  { icon: TrendingUp, title: "GTM leverage", body: "Expand offerings and create real distribution flywheels." },
];

export function ValueProps() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              <h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
