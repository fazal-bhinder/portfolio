"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SkillBadge } from "@/app/components/ui/skill-badge";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  liveUrl,
  githubUrl,
  technologies,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md hover:shadow-gray-800"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 "
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <SkillBadge 
              key={tech} 
              name={tech} 
              colorClass="bg-secondary text-secondary-foreground" 
              delay={delay + index * 0.05}
            />
          ))}
        </div>
        
        <div className="mt-6 flex gap-4">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <Github className="h-4 w-4" />
              Source Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
