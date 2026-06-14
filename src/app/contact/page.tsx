import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/shared/animated";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Ditronics. Contact our team in Dar es Salaam by phone, email or WhatsApp, or send us a message for a free consultation.",
  path: "/contact",
});

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    href: `https://wa.me/${siteConfig.contact.whatsappNumber}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about your project"
        description="Tell us what you need and we'll get back to you within one business day. No obligation, no pressure — just a helpful conversation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <div className="grid gap-3 sm:grid-cols-1">
                {contactCards.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:text-brand-sky">
                      <c.icon className="size-5" />
                    </span>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="mt-0.5 font-semibold">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Office
                    </div>
                    <address className="mt-1 not-italic leading-relaxed">
                      {siteConfig.contact.address.line1}
                      <br />
                      {siteConfig.contact.address.line2}
                      <br />
                      {siteConfig.contact.address.city},{" "}
                      {siteConfig.contact.address.country}
                    </address>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Clock className="size-4 text-brand-blue dark:text-brand-sky" />
                  Business hours
                </div>
                <dl className="mt-4 space-y-2 text-sm">
                  {siteConfig.contact.hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0"
                    >
                      <dt className="text-muted-foreground">{h.days}</dt>
                      <dd className="text-right font-medium">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-page pb-16 sm:pb-24">
        <Reveal className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title={`${siteConfig.name} office location`}
            src={siteConfig.contact.mapEmbedSrc}
            className="h-[360px] w-full sm:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
