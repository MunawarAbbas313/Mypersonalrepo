import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { HotDealsSection } from "@/components/site/HotDealsSection";
import { TopDestinationsSection } from "@/components/site/TopDestinationsSection";
import { WhyTravelWithUsSection } from "@/components/site/WhyTravelWithUsSection";
import { NewsletterSection } from "@/components/site/NewsletterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AL ARBAB TRAVEL AND TOURS — Explore Beautiful World With Us | Pakistan's No.1 Travel Agency" },
      {
        name: "description",
        content:
          "AL ARBAB TRAVEL AND TOURS: Pakistan's #1 Travel Agency & Visa Consultant. Explore breathtaking places with our exclusive travel packages, hot deals, and world-class customer service.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section with 3 arched cards & floating search bar */}
      <Hero />

      {/* 2. Hot Deals Section with discount cards */}
      <HotDealsSection />

      {/* 3. Top Destination Section with bento mosaic layout */}
      <TopDestinationsSection />

      {/* 4. Why Travel With Us? Section with glassmorphic cards */}
      <WhyTravelWithUsSection />

      {/* 5. Newsletter Subscription Bar */}
      <NewsletterSection />
    </div>
  );
}
