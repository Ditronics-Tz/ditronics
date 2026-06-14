import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Explore Ditronics' portfolio of software, mobile, IoT, cloud and networking projects delivered for clients across Tanzania.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Projects that deliver results"
        description="A selection of the software, systems and infrastructure we've built for organisations across Tanzania — and the impact they made."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />

      <section className="container-page py-16 sm:py-24">
        <PortfolioGrid />
      </section>

      <CtaBanner
        title="Have a project in mind?"
        description="Let's turn your idea into a solution that delivers measurable results."
        primaryLabel="Start your project"
      />
    </>
  );
}
