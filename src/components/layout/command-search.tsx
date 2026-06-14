"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { mainNav } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { posts } from "@/content/posts";

export function CommandSearch() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-2 text-muted-foreground"
        aria-label="Search the site"
      >
        <Search className="size-4" />
        <span className="hidden lg:inline">Search…</span>
        <kbd className="ml-1 hidden items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] lg:inline-flex">
          ⌘K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages, services, insights…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {mainNav.map((item) => (
              <CommandItem
                key={item.href}
                value={`page ${item.title}`}
                onSelect={() => go(item.href)}
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Services">
            {services.map((s) => (
              <CommandItem
                key={s.slug}
                value={`service ${s.title} ${s.short}`}
                onSelect={() => go(`/services/${s.slug}`)}
              >
                {s.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Industries">
            {industries.map((i) => (
              <CommandItem
                key={i.slug}
                value={`industry ${i.name}`}
                onSelect={() => go(`/industries#${i.slug}`)}
              >
                {i.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Insights">
            {posts.map((p) => (
              <CommandItem
                key={p.slug}
                value={`post ${p.title}`}
                onSelect={() => go(`/blog/${p.slug}`)}
              >
                {p.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
