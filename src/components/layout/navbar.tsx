"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/shared/logo";
import { Icon } from "@/components/shared/icon";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CommandSearch } from "@/components/layout/command-search";
import { MobileNav } from "@/components/layout/mobile-nav";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

const simpleLinks = [
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[640px] grid-cols-2 gap-1 p-2">
                  <Link
                    href="/services"
                    className="col-span-2 mb-1 flex items-center justify-between rounded-lg bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 px-4 py-3 text-sm font-semibold transition-colors hover:from-brand-blue/15 hover:to-brand-cyan/15"
                  >
                    Explore all services
                    <ArrowRight className="size-4" />
                  </Link>
                  {services.map((s) => (
                    <NavigationMenuLink key={s.slug} asChild>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue dark:text-brand-sky">
                          <Icon name={s.icon} className="size-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-medium leading-tight">
                            {s.short}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground line-clamp-1">
                            {s.tagline}
                          </span>
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[520px] grid-cols-2 gap-1 p-2">
                  {industries.map((i) => (
                    <NavigationMenuLink key={i.slug} asChild>
                      <Link
                        href={`/industries#${i.slug}`}
                        className="flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan">
                          <Icon name={i.icon} className="size-4" />
                        </span>
                        <span className="text-sm font-medium leading-tight">
                          {i.name}
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {simpleLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-muted",
                      pathname === link.href && "text-brand-blue dark:text-brand-sky",
                    )}
                  >
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1.5">
          <div className="hidden sm:block">
            <CommandSearch />
          </div>
          <ThemeToggle />
          <Button asChild variant="gradient" size="sm" className="ml-1 hidden md:inline-flex">
            <Link href="/contact">Get Started</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
