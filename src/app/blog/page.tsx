import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { BlogList } from "@/components/sections/blog-list";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { Reveal } from "@/components/shared/animated";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Insights",
  description:
    "Technology insights, industry trends and company news from Ditronics — covering software, IoT, cybersecurity, cloud and digital transformation.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Technology insights & trends"
        description="Practical perspectives on software, IoT, cloud, cybersecurity and digital transformation — written for leaders building in Tanzania."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="container-page py-16 sm:py-24">
        <BlogList />
      </section>

      <section className="container-page pb-16 sm:pb-24">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-muted/50 p-8 text-center sm:p-12">
          <h2 className="text-balance text-2xl font-bold tracking-tight font-heading sm:text-3xl">
            Never miss an insight
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Subscribe to get our latest articles and technology updates straight
            to your inbox.
          </p>
          <NewsletterForm className="mx-auto mt-6 max-w-md" />
        </Reveal>
      </section>
    </>
  );
}
