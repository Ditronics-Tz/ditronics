import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/animated";
import { siteConfig } from "@/content/site";

const items = [
  {
    icon: Phone,
    label: "Call us",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    href: `https://wa.me/${siteConfig.contact.whatsappNumber}`,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: `${siteConfig.contact.address.city}, ${siteConfig.contact.address.country}`,
    href: siteConfig.contact.mapLink,
  },
];

export function ContactPreview() {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow mb-4">Get in touch</span>
          <h2 className="text-balance text-3xl font-bold tracking-tight font-heading sm:text-4xl">
            Let&apos;s build something great together
          </h2>
          <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you have a clear brief or just an idea, we&apos;re here to
            help. Reach out and our team will get back to you within one business
            day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" variant="gradient">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/portfolio">See our work</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="card-hover group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:text-brand-sky">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="mt-0.5 text-sm font-semibold">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
