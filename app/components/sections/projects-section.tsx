"use client";

import { SectionHeading } from "@/app/components/ui/section-heading";
import { ProjectCard } from "@/app/components/ui/project-card";
import { projects } from "@/app/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Some of my recent projects"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              technologies={project.technologies}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}