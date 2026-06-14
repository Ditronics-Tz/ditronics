import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChoose } from "@/components/sections/why-choose";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { TechStack } from "@/components/sections/tech-stack";
import { FAQ } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ContactPreview } from "@/components/sections/contact-preview";
import { faqs } from "@/content/company";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyChoose />
      <FeaturedProjects />
      <IndustriesGrid />
      <Testimonials />
      <TechStack />
      <ContactPreview />
      <FAQ
        items={faqs}
        description="Everything you need to know about working with Ditronics."
      />
      <CtaBanner />
    </>
  );
}
