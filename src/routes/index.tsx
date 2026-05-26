import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Steps } from "@/components/landing/Steps";
import { ExampleMatch } from "@/components/landing/ExampleMatch";
import { ValueProps } from "@/components/landing/ValueProps";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YC and Me — Distribution infrastructure for startups" },
      {
        name: "description",
        content:
          "We find YC companies that already sell to your customers, and introduce you to the founders.",
      },
      { property: "og:title", content: "YC and Me — Distribution infrastructure for startups" },
      {
        property: "og:description",
        content:
          "Your next distribution channel is probably in YC. 10 matches, founder contacts, and an outreach plan.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Steps />
        <ExampleMatch />
        <ValueProps />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
