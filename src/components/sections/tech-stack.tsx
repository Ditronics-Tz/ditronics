import type { CSSProperties } from "react";

import { SectionHeading } from "@/components/shared/section-heading";
import { toolkit } from "@/content/toolkit";

export function TechStack() {
  // duplicate the list for a seamless marquee loop
  const row = [...toolkit, ...toolkit];

  return (
    <section className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Our toolkit"
        title="Built on modern, proven technology"
        description="We choose the right tools for the job from a deep, battle-tested technology stack."
      />
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {row.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              style={
                tool.color
                  ? ({ "--bc": tool.color } as CSSProperties)
                  : undefined
              }
              className="group flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground/80"
            >
              <span
                className={`shrink-0 text-foreground/55 transition-colors duration-300 ${
                  tool.color
                    ? "group-hover:text-[var(--bc)]"
                    : "group-hover:text-foreground"
                }`}
              >
                {tool.path ? (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="size-[1.05rem] fill-current"
                  >
                    <path d={tool.path} />
                  </svg>
                ) : tool.Icon ? (
                  <tool.Icon className="size-[1.05rem]" aria-hidden />
                ) : null}
              </span>
              <span className="transition-colors duration-300 group-hover:text-foreground">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
