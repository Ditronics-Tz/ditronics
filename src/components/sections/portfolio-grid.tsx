"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ProjectCard } from "@/components/shared/project-card";
import { cn } from "@/lib/utils";
import { projects, projectCategories } from "@/content/projects";

export function PortfolioGrid() {
  const [active, setActive] = React.useState<(typeof projectCategories)[number]>(
    "All",
  );

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-transparent bg-brand-blue text-white"
                : "border-border bg-card text-muted-foreground hover:border-brand-blue/40 hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
