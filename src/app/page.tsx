import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PersonalSection } from "@/components/PersonalSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto p-4 md:p-8 pt-6">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <PersonalSection />
        <Footer />
      </main>
    </div>
  );
}
