import { SectionHeading } from "@/components/shared/section-heading";
import { techStack } from "@/content/company";

export function TechStack() {
  // duplicate the list for a seamless marquee loop
  const row = [...techStack, ...techStack];

  return (
    <section className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Our toolkit"
        title="Built on modern, proven technology"
        description="We choose the right tools for the job from a deep, battle-tested technology stack."
      />
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {row.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
