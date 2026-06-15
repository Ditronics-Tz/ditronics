import type { Metadata } from "next";
import Image from "next/image";
import {
  Camera,
  Users,
  CalendarDays,
  Aperture,
  Video,
  Wand2,
  Check,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/animated";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Photo Studio",
  description:
    "Ditronics Photo Studio — professional product, corporate, event and portrait photography plus video production, with a fully equipped studio in Dar es Salaam.",
  path: "/studio",
});

const studioServices = [
  {
    title: "Product Photography",
    icon: Camera,
    description:
      "Clean, high-resolution product shots for e-commerce, catalogues and marketing — styled, lit and edited to sell.",
  },
  {
    title: "Corporate & Headshots",
    icon: Users,
    description:
      "Consistent professional headshots and team portraits for websites, profiles and company branding.",
  },
  {
    title: "Event Coverage",
    icon: CalendarDays,
    description:
      "Full photo coverage for conferences, launches, graduations and corporate functions, delivered fast.",
  },
  {
    title: "Portraits & Fashion",
    icon: Aperture,
    description:
      "Studio and on-location portrait, lifestyle and fashion shoots with creative direction and lighting.",
  },
  {
    title: "Video Production",
    icon: Video,
    description:
      "Promotional videos, interviews and social content — from concept and filming to editing and delivery.",
  },
  {
    title: "Editing & Retouching",
    icon: Wand2,
    description:
      "Professional retouching, colour grading and post-production to make every frame look its best.",
  },
];

const gallery = [
  "1452587925148-ce544e77e70d",
  "1542038784456-1ea8e935640e",
  "1494790108377-be9c29b29330",
  "1523275335684-37898b6baf30",
  "1492684223066-81342ee5ff30",
  "1495474472287-4d71bcdd2085",
];

const features = [
  "Fully equipped studio with professional lighting",
  "Experienced photographers & videographers",
  "Fast turnaround with online proofing & delivery",
  "On-location shoots across Tanzania",
];

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=60`;

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Ditronics Photo Studio"
        title="Professional photography & video, end to end"
        description="Beyond technology, Ditronics runs a fully equipped photo and video studio — helping brands, businesses and individuals look their best with striking, professional imagery."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Studio" }]}
      />

      {/* Services */}
      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="What we shoot"
          title="Studio services"
          description="From a single product shot to full event coverage, our studio delivers professional results for every brief."
        />
        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioServices.map((service) => (
            <RevealItem key={service.title} className="h-full">
              <div className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                  <service.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Gallery */}
      <section className="border-y border-border/60 bg-muted/30 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our work"
            title="A glimpse of the studio"
            description="A selection of recent shoots. Replace these with your own portfolio to showcase the studio's range."
          />
          <RevealGroup className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((id, i) => (
              <RevealItem key={id}>
                <div
                  className={`relative overflow-hidden rounded-2xl border border-border ${
                    i === 0 || i === 5 ? "aspect-square sm:col-span-1" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img(id)}
                    alt="Ditronics Photo Studio sample shot"
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Why us */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Image
                src={img("1567593810070-7a3d471af022")}
                alt="Inside the Ditronics studio"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow mb-4">Why our studio</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight font-heading sm:text-4xl">
              Imagery that elevates your brand
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Great visuals build trust and win attention. Our team combines
              professional equipment with a sharp creative eye to produce photos
              and video that make your business stand out — online and in print.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Book your studio session"
        description="Tell us what you need — product, portraits, events or video — and we'll arrange a shoot that fits your brand and budget."
        primaryLabel="Book a session"
      />
    </>
  );
}
