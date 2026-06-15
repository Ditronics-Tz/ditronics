import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.client} — ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 gradient-mesh opacity-30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="text-lg font-bold leading-tight text-white drop-shadow-md font-heading">
            {project.client}
          </span>
        </div>
        <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <ArrowUpRight className="size-4" />
        </span>
        <Badge className="absolute left-3 top-3 border-white/30 bg-white/20 text-white backdrop-blur-sm">
          {project.category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-brand-blue dark:text-brand-sky">
          {project.industry}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
          {project.metrics.slice(0, 3).map((m) => (
            <div key={m.label} className="text-xs">
              <span className="font-bold text-foreground">{m.value}</span>{" "}
              <span className="text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
