import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { posts, getPost, type PostBlock } from "@/content/posts";
import {
  buildMetadata,
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return buildMetadata({ title: "Article not found" });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Block({ block }: { block: PostBlock }) {
  if (block.type === "h2") {
    return (
      <h2 className="mt-10 text-2xl font-bold tracking-tight font-heading">
        {block.text}
      </h2>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 space-y-2">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-muted-foreground">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-blue" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 leading-relaxed text-muted-foreground">{block.text}</p>;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          date: post.date,
          author: post.author,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.category },
            ]}
          />

          <Badge className="mt-6" variant="secondary">
            {post.category}
          </Badge>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight font-heading sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-border py-4">
            <div className="flex items-center gap-2.5">
              <Avatar className="size-9">
                <AvatarFallback className="bg-gradient-to-br from-brand-blue to-brand-cyan text-xs font-semibold text-white">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{post.author}</span>
            </div>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <CalendarDays className="size-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="size-4" />
              {post.readingTime}
            </span>
          </div>

          <div
            className={`mt-8 aspect-[21/9] rounded-2xl bg-gradient-to-br ${post.gradient}`}
          />

          <div className="mt-8 text-base">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 text-center sm:p-8">
            <h2 className="text-xl font-bold font-heading">
              Enjoyed this article?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
              Subscribe for more technology insights, or get in touch to discuss
              your project.
            </p>
            <NewsletterForm className="mx-auto mt-5 max-w-sm" />
          </div>

          <div className="mt-10">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="size-4" />
                Back to all articles
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-border/60 bg-muted/30 py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold tracking-tight font-heading">
            More insights
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div
                  className={`aspect-[16/9] bg-gradient-to-br ${p.gradient}`}
                />
                <div className="flex flex-1 flex-col p-5">
                  <Badge variant="secondary" className="w-fit text-xs">
                    {p.category}
                  </Badge>
                  <h3 className="mt-3 font-semibold leading-tight">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
