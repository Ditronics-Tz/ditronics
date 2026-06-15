"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GradientBlobs, GridBackdrop } from "@/components/shared/decor";
import { ServicesWheel } from "@/components/shared/services-wheel";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* tech video backdrop — dark mode only, with poster fallback */}
      {reduce ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/hero-tech-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 hidden size-full object-cover dark:block"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-tech-poster.jpg"
          aria-hidden="true"
          className="absolute inset-0 -z-20 hidden size-full object-cover dark:block"
        >
          <source src="/hero-tech.mp4" type="video/mp4" />
        </video>
      )}
      {/* legibility + blend overlay (dark mode only) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-background via-background/85 to-background/55 dark:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-gradient-to-b from-background/70 via-transparent to-background dark:block"
      />

      <GridBackdrop />
      <GradientBlobs />
      <div className="container-page py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Sparkles className="size-3.5" />
            Tanzania&apos;s technology partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-balance text-4xl font-bold tracking-tight font-heading sm:text-5xl lg:text-6xl"
          >
            Transforming Ideas into{" "}
            <span className="text-gradient">Technology Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            We build software, IoT systems, cloud solutions and technology
            infrastructure that help businesses and institutions across Tanzania
            grow and innovate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="xl" variant="gradient">
              <Link href="/contact">
                Get Started
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/services">View Our Services</Link>
            </Button>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <ServicesWheel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
