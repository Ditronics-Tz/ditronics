"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { services } from "@/content/services";
import { Icon } from "@/components/shared/icon";

// Per-service presentation (colour + compact label for the wheel), keyed by
// slug so the wheel always mirrors the services defined in content/services.ts.
const meta: Record<string, { color: string; label: string }> = {
  "software-development": { color: "#2f80c4", label: "Software" },
  "mobile-development": { color: "#17a394", label: "Mobile" },
  "iot-solutions": { color: "#5bb85b", label: "IoT" },
  "cloud-solutions": { color: "#f2a93b", label: "Cloud" },
  networking: { color: "#ef7d2e", label: "Networking" },
  "hardware-solutions": { color: "#e0524d", label: "Hardware" },
  cybersecurity: { color: "#9b59b6", label: "Security" },
  "it-consultancy": { color: "#3f9bd4", label: "Consultancy" },
};

const nodes = services.map((s, i) => ({
  n: String(i + 1).padStart(2, "0"),
  slug: s.slug,
  title: s.title,
  icon: s.icon,
  color: meta[s.slug]?.color ?? "#6c2f93",
  label: meta[s.slug]?.label ?? s.short,
}));

const COUNT = nodes.length;
const NODE_RADIUS = 39; // % of the box, where the icon nodes sit
const ARC_RADIUS = 39; // SVG ring radius (viewBox 0..100)
const STEP = 360 / COUNT;
const GAP_DEG = 5; // gap between coloured arcs

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function ServicesWheel() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      {/* slowly rotating dashed halo */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
        className="absolute inset-[3%] rounded-full border border-dashed border-foreground/10"
      />

      {/* coloured gradient ring */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full"
        aria-hidden
      >
        <defs>
          <filter id="wheelGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
        </defs>
        {/* faint base track */}
        <circle
          cx="50"
          cy="50"
          r={ARC_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          className="text-foreground/10"
        />
        {nodes.map((s, i) => {
          const center = -90 + i * STEP;
          const start = center - STEP / 2 + GAP_DEG / 2;
          const end = center + STEP / 2 - GAP_DEG / 2;
          const a = polar(50, 50, ARC_RADIUS, start);
          const b = polar(50, 50, ARC_RADIUS, end);
          const d = `M ${a.x} ${a.y} A ${ARC_RADIUS} ${ARC_RADIUS} 0 0 1 ${b.x} ${b.y}`;
          return (
            <g key={s.slug}>
              <path
                d={d}
                fill="none"
                stroke={s.color}
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
                filter="url(#wheelGlow)"
              />
              <path
                d={d}
                fill="none"
                stroke={s.color}
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </svg>

      {/* centre hub */}
      <div className="absolute left-1/2 top-1/2 grid aspect-square w-[46%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-foreground/[0.04] p-4 text-center backdrop-blur-md">
        <div>
          <p className="font-heading text-xl font-bold leading-none tracking-tight text-foreground sm:text-2xl">
            OUR
          </p>
          <p className="text-gradient font-heading text-xl font-bold leading-none tracking-tight sm:text-2xl">
            SERVICES
          </p>
          <div className="mx-auto mt-2 h-px w-12 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-indigo" />
          <p className="mt-2 hidden text-[10px] leading-snug text-muted-foreground sm:block">
            End-to-End IoT, Networking,
            <br />
            Hardware &amp; Software
          </p>
        </div>
      </div>

      {/* icon nodes */}
      {nodes.map((s, i) => {
        const angle = -90 + i * STEP;
        const { x, y } = polar(50, 50, NODE_RADIUS, angle);
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <Link
              href={`/services/${s.slug}`}
              title={s.title}
              className="group flex flex-col items-center gap-1.5 outline-none"
            >
              <span className="relative grid size-12 place-items-center rounded-full bg-white shadow-lg shadow-black/30 ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110 sm:size-14">
                <span style={{ color: s.color }}>
                  <Icon name={s.icon} className="size-5 sm:size-6" />
                </span>
                <span
                  className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full text-[9px] font-bold text-white ring-2 ring-background"
                  style={{ backgroundColor: s.color }}
                >
                  {s.n}
                </span>
              </span>
              <span className="text-[10px] font-semibold tracking-wide text-muted-foreground transition-colors group-hover:text-foreground sm:text-xs">
                {s.label}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
