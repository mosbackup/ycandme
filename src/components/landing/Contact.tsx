import { Mail, MapPin } from "lucide-react";

const MAP_QUERY = encodeURIComponent("548 Market St, San Francisco, CA 94104");

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
            Get in touch
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-xl border border-border bg-card p-6 yc-shadow">
              <Mail className="h-5 w-5 text-primary" strokeWidth={1.75} />
              <h3 className="mt-4 text-sm font-semibold text-foreground">Email</h3>
              <a
                href="mailto:info@ycandme.com"
                className="mt-1.5 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                info@ycandme.com
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 yc-shadow">
              <MapPin className="h-5 w-5 text-primary" strokeWidth={1.75} />
              <h3 className="mt-4 text-sm font-semibold text-foreground">Address</h3>
              <address className="mt-1.5 text-sm not-italic leading-relaxed text-muted-foreground">
                YC and Me<br />
                548 Market St PMB 41382<br />
                San Francisco, CA 94104<br />
                USA
              </address>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card yc-shadow">
            <iframe
              title="YC and Me office location"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full min-h-[320px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
