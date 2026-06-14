"use client";

import { motion } from "framer-motion";
import { stats } from "@/content/company";

export function Stats() {
  return (
    <section className="container-page py-8">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card p-6 text-center sm:p-8"
          >
            <div className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl font-heading">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
