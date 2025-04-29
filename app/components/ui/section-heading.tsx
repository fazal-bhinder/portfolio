"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${
        align === "center"
          ? "text-center"
          : align === "right"
          ? "text-right"
          : "text-left"
      }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}