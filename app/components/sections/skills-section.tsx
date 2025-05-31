"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { SkillBadge } from "@/app/components/ui/skill-badge";
import { Progress } from "@/app/components/ui/progress";

const frontendSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
];

const backendSkills = [
  { name: "Node.js", level: 85 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 80 },
  { name: "GraphQL", level: 70 },
  { name: "REST APIs", level: 90 },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "Node.js",
  "Express",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "CI/CD",
  "Git",
  "REST APIs",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black  text-foreground">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                  >
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillBadge
                key={skill}
                name={skill}
                delay={index * 0.05}
                colorClass={
                  index % 4 === 0
                    ? "bg-primary/10 text-primary"
                    : index % 4 === 1
                    ? "bg-secondary/80 text-secondary-foreground"
                    : index % 4 === 2
                    ? "bg-muted text-muted-foreground"
                    : "bg-accent text-accent-foreground"
                }
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
