"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, CalendarDays, Clock } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { posts, postCategories } from "@/content/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogList() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] =
    React.useState<(typeof postCategories)[number]>("All");

  const filtered = posts.filter((p) => {
    const matchesCat = category === "All" || p.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="relative mx-auto w-full max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="h-11 pl-10"
            aria-label="Search articles"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {postCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                category === cat
                  ? "border-transparent bg-brand-blue text-white"
                  : "border-border bg-card text-muted-foreground hover:border-brand-blue/40 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          No articles match your search.
        </p>
      ) : (
        <motion.div
          layout
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((post) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div
                    className={`relative aspect-[16/9] bg-gradient-to-br ${post.gradient}`}
                  >
                    <div className="absolute inset-0 gradient-mesh opacity-30" />
                    <Badge className="absolute left-3 top-3 border-white/30 bg-white/20 text-white backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="size-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-tight">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue dark:text-brand-sky">
                      Read article
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
