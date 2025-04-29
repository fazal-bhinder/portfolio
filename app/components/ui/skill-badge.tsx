"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface SkillBadgeProps {
  name: string;
  colorClass?: string;
  delay?: number;
}

export function SkillBadge({
  name,
  colorClass = "bg-primary/10 text-primary",
  delay = 0,
}: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
      className={cn("px-4 py-2 rounded-full text-sm font-medium", colorClass)}
    >
      {name}
    </motion.div>
  );
}