import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/animated";
import { FAQ } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { services, getService, serviceSlugs } from "@/content/services";
import { buildMetadata, JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return buildMetadata({ title: "Service not found" });
  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.summary,
          path: `/services/${service.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.short, path: `/services/${service.slug}` },
        ])}
      />

      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        description={service.overview}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.short },
        ]}
      >
        <Button asChild size="xl" variant="gradient">
          <Link href="/contact">
            Discuss your project
            <ArrowRight className="size-5" />
          </Link>
        </Button>
      </PageHero>

      {/* Offerings */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-4">What we offer</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight font-heading sm:text-4xl">
              {service.short} done right
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.offerings.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-blue/10 via-brand-indigo/10 to-brand-cyan/10">
              <div className="absolute inset-0 gradient-mesh opacity-50" />
              <div className="flex h-full items-center justify-center">
                <span className="flex size-28 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-2xl shadow-brand-blue/30">
                  <Icon name={service.icon} className="size-14" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/40 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Benefits"
          title="Why it matters for your organisation"
        />
        <RevealGroup className="container-page mt-12 grid gap-5 sm:grid-cols-2">
          {service.benefits.map((b) => (
            <RevealItem key={b.title}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue dark:text-brand-sky">
                  <Check className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Process */}
      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="Our process"
          title="How we deliver"
          description="A clear, proven approach that keeps you informed and in control at every step."
        />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {service.process.map((step, i) => (
            <RevealItem key={step.title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <span className="text-sm font-bold text-gradient">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 font-semibold leading-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <FAQ
        items={service.faqs}
        title={`${service.short} — your questions answered`}
      />

      {/* Related services */}
      <section className="bg-muted/40 py-16 sm:py-24">
        <SectionHeading eyebrow="Explore more" title="Related services" />
        <RevealGroup className="container-page mt-12 grid gap-5 sm:grid-cols-3">
          {related.map((s) => (
            <RevealItem key={s.slug} className="h-full">
              <Link
                href={`/services/${s.slug}`}
                className="card-hover group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:text-brand-sky">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <span className="font-medium">{s.short}</span>
                <ArrowRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CtaBanner
        title={`Ready to get started with ${service.short.toLowerCase()}?`}
        description="Tell us about your goals and we'll recommend the right approach — with a free, no-obligation consultation."
      />
    </>
  );
}
