import { HeroSection } from "@/app/components/sections/hero-section";
import { ProjectsSection } from "@/app/components/sections/projects-section";
import { SkillsSection } from "@/app/components/sections/skills-section";
import { ContactSection } from "@/app/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-grey-900 via-grey-800 to-zinc-900 ">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}