import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Icon } from "@/components/shared/icon";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6"
    >
      <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-brand-blue to-brand-cyan transition-transform duration-300 group-hover:scale-x-100" />
      <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue dark:text-brand-sky">
        <Icon name={service.icon} className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">
        {service.short}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue dark:text-brand-sky">
        Learn more
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
