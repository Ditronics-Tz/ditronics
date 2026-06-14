import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/animated";
import { CtaBanner } from "@/components/sections/cta-banner";
import { projects, getProject } from "@/content/projects";
import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return buildMetadata({ title: "Project not found" });
  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
  });
}

const blocks = [
  { key: "challenge", title: "The challenge", icon: AlertCircle, tone: "text-destructive" },
  { key: "solution", title: "Our solution", icon: Lightbulb, tone: "text-brand-blue dark:text-brand-sky" },
  { key: "outcome", title: "The outcome", icon: TrendingUp, tone: "text-brand-cyan" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.title, path: `/portfolio/${project.slug}` },
        ])}
      />

      <PageHero
        eyebrow={project.industry}
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: project.client },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{project.category}</Badge>
          <Badge variant="secondary">Client: {project.client}</Badge>
        </div>
      </PageHero>

      {/* Cover + metrics */}
      <section className="container-page py-16 sm:py-24">
        <Reveal
          className={`relative flex aspect-[21/9] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient}`}
        >
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <span className="px-6 text-center text-3xl font-bold text-white drop-shadow font-heading sm:text-4xl">
            {project.client}
          </span>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="text-3xl font-bold text-gradient font-heading">
                {m.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge / Solution / Outcome */}
      <section className="container-page pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl space-y-10">
          {blocks.map((block) => (
            <Reveal key={block.key}>
              <div className="flex items-center gap-3">
                <span className={`${block.tone}`}>
                  <block.icon className="size-6" />
                </span>
                <h2 className="text-2xl font-bold tracking-tight font-heading">
                  {block.title}
                </h2>
              </div>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project[block.key]}
              </p>
            </Reveal>
          ))}

          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight font-heading">
              Technologies used
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Badge key={t} variant="outline" className="text-sm">
                  {t}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Button asChild size="xl" variant="gradient">
              <Link href="/portfolio">
                View more projects
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Want results like these?"
        description="Let's discuss how we can deliver measurable impact for your organisation."
      />
    </>
  );
}
