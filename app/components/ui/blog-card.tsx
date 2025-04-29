"use client";

import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: Date;
  readTime: string;
  views?: number;
  link: string;
  delay?: number;
}

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  views,
  link,
  delay = 0,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <Link href={link}>
        <div className="space-y-3 rounded-lg border p-5 transition-all hover:bg-muted/50">
          <div className="space-y-1">
            <h3 className="font-semibold group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>{formatDistanceToNow(date, { addSuffix: true })}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
            {views !== undefined && <span>{views.toLocaleString()} views</span>}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}