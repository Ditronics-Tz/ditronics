import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/animated";
import { GradientBlobs } from "@/components/shared/decor";
import { siteConfig } from "@/content/site";

export function CtaBanner({
  title = "Ready to Transform Your Business?",
  description = "Let's talk about your goals. Book a free, no-obligation consultation and we'll show you what's possible.",
  primaryLabel = "Schedule a Consultation",
  primaryHref = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="container-page py-16 sm:py-24">
      <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-navy px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <GradientBlobs />
        <div className="absolute inset-0 -z-10 gradient-mesh opacity-60" />
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight font-heading sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-white/80 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="xl" variant="gradient">
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <a href={siteConfig.contact.phoneHref}>
              <Phone className="size-5" />
              {siteConfig.contact.phone}
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
