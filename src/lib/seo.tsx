import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    // absolute bypasses the root layout title template so we don't double the brand
    title: { absolute: fullTitle },
    description: desc,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: desc,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.line1,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: "TZ",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${siteConfig.url}${path}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: { "@type": "Country", name: "Tanzania" },
  };
}

export function articleSchema({
  title,
  description,
  path,
  date,
  author,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}${path}`,
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Render a JSON-LD <script> tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
