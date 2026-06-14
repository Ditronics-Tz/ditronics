import type { Metadata } from "next";
import { Check, AlertCircle, Sparkles } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/animated";
import { CtaBanner } from "@/components/sections/cta-banner";
import { industries } from "@/content/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "Ditronics delivers technology solutions for government, education, healthcare, agriculture, logistics, retail, manufacturing and financial services in Tanzania.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Solutions tailored to your sector"
        description="Every industry has its own challenges. We bring sector-specific expertise to build technology that fits the way you work."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <div className="container-page py-16 sm:py-24">
        <div className="space-y-20">
          {industries.map((industry, i) => (
            <section
              key={industry.slug}
              id={industry.slug}
              className="scroll-mt-24"
            >
              <Reveal>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                        <Icon name={industry.icon} className="size-6" />
                      </span>
                      <h2 className="text-2xl font-bold tracking-tight font-heading sm:text-3xl">
                        {industry.name}
                      </h2>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {industry.summary}
                    </p>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold">
                          <AlertCircle className="size-4 text-destructive" />
                          Challenges
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {industry.challenges.map((c) => (
                            <li
                              key={c}
                              className="text-sm leading-relaxed text-muted-foreground"
                            >
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold">
                          <Sparkles className="size-4 text-brand-blue dark:text-brand-sky" />
                          Our solutions
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {industry.solutions.map((s) => (
                            <li
                              key={s}
                              className="text-sm leading-relaxed text-muted-foreground"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-card p-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      The benefits
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {industry.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan">
                            <Check className="size-4" />
                          </span>
                          <span className="text-sm font-medium">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </section>
          ))}
        </div>
      </div>

      <CtaBanner
        title="Don't see your industry?"
        description="We work across many sectors. Tell us about your needs and we'll show you how we can help."
        primaryLabel="Talk to an expert"
      />
    </>
  );
}
