import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { RevealGroup, RevealItem } from "@/components/shared/animated";
import { industries } from "@/content/industries";

export function IndustriesGrid() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Industries we serve"
        title="Deep expertise across sectors"
        description="We understand the challenges of your industry and build solutions that fit how you work."
      />
      <RevealGroup className="container-page mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {industries.map((industry) => (
          <RevealItem key={industry.slug}>
            <Link
              href={`/industries#${industry.slug}`}
              className="card-hover group flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan transition-colors group-hover:bg-brand-cyan group-hover:text-white">
                <Icon name={industry.icon} className="size-5" />
              </span>
              <h3 className="text-sm font-semibold leading-tight">
                {industry.name}
              </h3>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
