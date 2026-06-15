"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/shared/logo";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

// Shown after the Services / Industries sections, ordered by importance.
const moreLinks = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const linkClass =
  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0">
        <SheetHeader className="border-b p-5">
          <SheetTitle asChild>
            <div>
              <Logo />
            </div>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col p-3">
          <Link href="/" onClick={close} className={linkClass}>
            Home
          </Link>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services" className="border-0">
              <AccordionTrigger className="px-3 py-2.5 text-sm font-medium hover:no-underline">
                Services
              </AccordionTrigger>
              <AccordionContent className="pb-1">
                <Link
                  href="/services"
                  onClick={close}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-blue dark:text-brand-sky"
                >
                  All services →
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={close}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {s.short}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link href="/studio" onClick={close} className={linkClass}>
            Studio
          </Link>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="industries" className="border-0">
              <AccordionTrigger className="px-3 py-2.5 text-sm font-medium hover:no-underline">
                Industries
              </AccordionTrigger>
              <AccordionContent className="pb-1">
                {industries.map((i) => (
                  <Link
                    key={i.slug}
                    href={`/industries#${i.slug}`}
                    onClick={close}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {i.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {moreLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={linkClass}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="p-5">
          <Button asChild variant="gradient" className="w-full" size="lg">
            <Link href="/contact" onClick={close}>
              Get Started
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
