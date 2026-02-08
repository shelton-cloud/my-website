import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function ResumePage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fcfcfc] text-gray-900 font-sans">
            <Header />
            <main className="flex-grow container mx-auto px-4 md:px-8 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center md:text-left">Resume</h1>
                <ExperienceSection />
                <EducationSection />
                <SkillsSection />
            </main>
            <Footer />
        </div>
    );
}
