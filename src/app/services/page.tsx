import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/shared/service-card";
import { RevealGroup, RevealItem } from "@/components/shared/animated";
import { WhyChoose } from "@/components/sections/why-choose";
import { CtaBanner } from "@/components/sections/cta-banner";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Ditronics' technology services: custom software, mobile apps, IoT, cloud, networking, hardware, cybersecurity and IT consultancy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Technology services that move you forward"
        description="A complete range of services to design, build, secure and support the technology your organisation depends on."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="container-page py-16 sm:py-24">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <WhyChoose />
      <CtaBanner />
    </>
  );
}
