"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GradientBlobs, GridBackdrop } from "@/components/shared/decor";
import { ServicesWheel } from "@/components/shared/services-wheel";

const highlights = [
  "Custom software & mobile apps",
  "IoT, cloud & cybersecurity",
  "Trusted across Tanzania",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
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

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="size-4 text-brand-cyan" />
                {h}
              </li>
            ))}
          </motion.ul>
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
