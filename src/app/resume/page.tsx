import React from 'react';
import { Metadata } from 'next';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";

export const metadata: Metadata = {
    title: "Resume",
    description: "Professional experience, skills, and education of Bryan Shelton, Lead IT/AV Professional at Riot Games.",
};

export default function ResumePage() {
    return (
        <div className="min-h-screen flex flex-col bg-surface text-on-surface">
            <Header />
            <main className="flex-grow container-max py-20">
                <div className="max-w-4xl">
                    <div className="mb-4">
                        <span className="label-sm text-primary tracking-[0.3em] font-bold">Curriculum Vitae</span>
                    </div>
                    <h1 className="headline-xl mb-20 uppercase tracking-tighter">Resume</h1>
                    
                    <div className="space-y-20">
                        <ExperienceSection />
                        <SkillsSection />
                        <EducationSection />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
