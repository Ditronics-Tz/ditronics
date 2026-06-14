"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GradientBlobs, GridBackdrop } from "@/components/shared/decor";

const highlights = [
  "Custom software & mobile apps",
  "IoT, cloud & cybersecurity",
  "Trusted across Tanzania",
];

const float: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridBackdrop />
      <GradientBlobs />
      <div className="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:py-32">
        <div>
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
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square w-full">
      {/* Main glass dashboard card */}
      <motion.div
        variants={float}
        animate="animate"
        className="glass absolute inset-x-2 top-6 rounded-2xl p-5 shadow-2xl shadow-brand-blue/10"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-brand-blue" />
            <span className="text-sm font-semibold">Operations Overview</span>
          </div>
          <span className="rounded-full bg-brand-cyan/15 px-2 py-0.5 text-xs font-medium text-brand-cyan">
            Live
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { v: "99.9%", l: "Uptime" },
            { v: "1.2k", l: "Devices" },
            { v: "+27%", l: "Growth" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-foreground/5 p-3">
              <div className="text-lg font-bold text-gradient">{s.v}</div>
              <div className="text-[11px] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-24 items-end gap-1.5">
          {[40, 65, 50, 80, 60, 92, 70, 100, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-brand-blue to-brand-cyan"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating chip: code */}
      <motion.div
        variants={float}
        animate="animate"
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="glass absolute -left-2 bottom-10 rounded-xl p-3 shadow-xl"
      >
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="size-2 rounded-full bg-green-500" />
          <span className="text-muted-foreground">deploy</span>
          <span className="font-semibold text-brand-cyan">success</span>
        </div>
      </motion.div>

      {/* Floating chip: secure */}
      <motion.div
        variants={float}
        animate="animate"
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="glass absolute -right-1 bottom-24 flex items-center gap-2 rounded-xl px-3 py-2 shadow-xl"
      >
        <span className="flex size-7 items-center justify-center rounded-lg bg-brand-indigo/15 text-brand-indigo">
          <CheckCircle2 className="size-4" />
        </span>
        <div className="text-xs">
          <div className="font-semibold">Secured</div>
          <div className="text-muted-foreground">256-bit</div>
        </div>
      </motion.div>
    </div>
  );
}
