import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { GradientBlobs, GridBackdrop } from "@/components/shared/decor";
import { Reveal } from "@/components/shared/animated";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <GridBackdrop />
      <GradientBlobs className="opacity-70" />
      <div className="container-page py-16 sm:py-20 lg:py-24">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <Reveal className="max-w-3xl">
          {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
          <h1 className="mt-1 text-balance text-4xl font-bold tracking-tight font-heading sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
