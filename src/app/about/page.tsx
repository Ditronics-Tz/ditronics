import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/animated";
import { Stats } from "@/components/sections/stats";
import { CtaBanner } from "@/components/sections/cta-banner";
import { coreValues, milestones, team } from "@/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Ditronics — our story, mission, vision, values and the team building Tanzania's most trusted technology partner.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ditronics"
        title="Building Tanzania's technology future"
        description="We're a team of engineers, designers and consultants on a mission to make world-class technology accessible to organisations across Tanzania."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-4">Our story</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight font-heading sm:text-4xl">
              From a small team to a trusted partner
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Ditronics was founded in Dar es Salaam with a simple belief: that
                Tanzanian businesses and institutions deserve technology as good
                as anything built anywhere in the world — designed and supported
                by people who understand the local context.
              </p>
              <p>
                What began as a small team taking on software and networking
                projects has grown into a full-service technology partner,
                delivering software, mobile apps, IoT, cloud, infrastructure and
                cybersecurity to clients across the country and the region.
              </p>
              <p>
                Through every stage of that growth, our commitment has stayed the
                same: do excellent work, act with integrity, and measure our
                success by the success of our clients.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-blue via-brand-indigo to-brand-cyan p-1">
              <div className="flex h-full flex-col items-center justify-center gap-6 rounded-[1.4rem] bg-brand-navy/95 p-8 text-center text-white">
                <p className="text-5xl font-bold font-heading sm:text-6xl">
                  Since 2015
                </p>
                <p className="max-w-xs text-white/80">
                  Delivering reliable, innovative technology solutions across
                  Tanzania.
                </p>
                <div className="grid w-full grid-cols-2 gap-4 pt-4">
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-2xl font-bold">120+</div>
                    <div className="text-xs text-white/70">Projects</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-2xl font-bold">80+</div>
                    <div className="text-xs text-white/70">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />

      {/* Mission & Vision */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:text-brand-sky">
                <Target className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold font-heading">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To deliver innovative technology solutions that empower
                organisations to achieve their goals — combining technical
                excellence with a deep understanding of the local market.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                <Eye className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold font-heading">Our Vision</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To become Tanzania&apos;s most trusted technology partner — the
                first name organisations think of when they want to innovate,
                grow and transform with technology.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/40 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Our values"
          title="The principles that guide us"
          description="These values shape how we work, how we treat our clients, and the decisions we make every day."
        />
        <RevealGroup className="container-page mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <RevealItem key={value.title}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue dark:text-brand-sky">
                  <Icon name={value.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Timeline */}
      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="Our journey"
          title="Milestones along the way"
          description="A decade of growth, learning and delivering for our clients."
        />
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05}>
                <div
                  className={`relative flex flex-col gap-2 pl-12 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0
                      ? "sm:pr-10 sm:text-right"
                      : "sm:ml-auto sm:pl-10"
                  }`}
                >
                  <span
                    className={`absolute left-[9px] top-1.5 size-3.5 rounded-full border-2 border-background bg-brand-blue sm:left-auto ${
                      i % 2 === 0 ? "sm:-right-[7px]" : "sm:-left-[7px]"
                    }`}
                  />
                  <span className="text-sm font-bold text-brand-blue dark:text-brand-sky">
                    {m.year}
                  </span>
                  <h3 className="font-semibold">{m.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/40 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Our team"
          title="The people behind Ditronics"
          description="Experienced leaders and specialists dedicated to delivering for our clients."
        />
        <RevealGroup className="container-page mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <RevealItem key={member.name}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
                <Avatar className="size-20">
                  <AvatarFallback className="bg-gradient-to-br from-brand-blue to-brand-cyan text-xl font-semibold text-white">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm font-medium text-brand-blue dark:text-brand-sky">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CtaBanner
        title="Want to work with us?"
        description="We're always looking to partner with ambitious organisations. Let's start a conversation."
        primaryLabel="Get in touch"
      />
    </>
  );
}
