import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto p-4 md:p-8 pt-6">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}
