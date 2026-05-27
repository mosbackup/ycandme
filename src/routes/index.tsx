import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Steps } from "@/components/landing/Steps";
import { ExampleMatch } from "@/components/landing/ExampleMatch";
import { ValueProps } from "@/components/landing/ValueProps";
import { FeaturedPosts } from "@/components/landing/FeaturedPosts";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YC and Me — Partner with Y Combinator startups" },
      {
        name: "description",
        content:
          "Leverage YC distribution networks without being in YC. We identify 10 high-potential Y Combinator partners with complementary products and design win-win GTM partnerships.",
      },
      { property: "og:title", content: "YC and Me — Partner with Y Combinator startups" },
      {
        property: "og:description",
        content:
          "Distribution infrastructure for startups. Get 10 curated YC partnership opportunities with founder contacts.",
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
        <FeaturedPosts />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
