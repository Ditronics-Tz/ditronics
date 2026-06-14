import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/animated";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <Tag className="mt-1 text-balance text-3xl font-bold tracking-tight font-heading sm:text-4xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
