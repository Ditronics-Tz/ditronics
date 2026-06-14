import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { RevealGroup, RevealItem } from "@/components/shared/animated";
import { whyChoose } from "@/content/company";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Why Ditronics"
        title="A technology partner you can rely on"
        description="We combine technical excellence with local insight and a genuine commitment to your success."
      />
      <RevealGroup className="container-page mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyChoose.map((item) => (
          <RevealItem key={item.title}>
            <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:text-brand-sky">
                <Icon name={item.icon} className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
