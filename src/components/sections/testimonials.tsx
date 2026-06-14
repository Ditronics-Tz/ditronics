import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RevealGroup, RevealItem } from "@/components/shared/animated";
import { testimonials } from "@/content/company";

export function Testimonials() {
  return (
    <section className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="Client stories"
        title="Trusted by organisations across Tanzania"
        description="Don't just take our word for it — here's what our clients say about working with us."
      />
      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((t) => (
          <RevealItem key={t.name} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
              <Quote className="size-8 text-brand-blue/30" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-br from-brand-blue to-brand-cyan text-xs font-semibold text-white">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
