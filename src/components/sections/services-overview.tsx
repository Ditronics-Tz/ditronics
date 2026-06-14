import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { RevealGroup, RevealItem } from "@/components/shared/animated";
import { services } from "@/content/services";

export function ServicesOverview() {
  return (
    <section className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="What we do"
        title="End-to-end technology services"
        description="From idea to implementation and beyond — everything you need from one reliable technology partner."
      />
      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <RevealItem key={service.slug} className="h-full">
            <ServiceCard service={service} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
