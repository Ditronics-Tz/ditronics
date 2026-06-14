import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GradientBlobs, GridBackdrop } from "@/components/shared/decor";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <GridBackdrop />
      <GradientBlobs />
      <div className="container-page text-center">
        <p className="text-8xl font-bold tracking-tight text-gradient font-heading sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="xl" variant="gradient">
            <Link href="/">
              <Home className="size-5" />
              Back to home
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href="/services">
              <ArrowLeft className="size-5" />
              Explore services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
