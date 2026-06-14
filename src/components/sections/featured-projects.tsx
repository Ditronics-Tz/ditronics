import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { RevealGroup, RevealItem } from "@/components/shared/animated";
import { featuredProjects } from "@/content/projects";

export function FeaturedProjects() {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Featured work"
          title="Real solutions, real results"
          description="A selection of projects where technology made a measurable difference for our clients."
          className="max-w-xl"
        />
        <Button asChild variant="outline" className="shrink-0">
          <Link href="/portfolio">
            View all projects
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <RevealItem key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
