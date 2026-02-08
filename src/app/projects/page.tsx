import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PersonalSection } from "@/components/PersonalSection";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fcfcfc] text-gray-900 font-sans">
            <Header />
            <main className="flex-grow container mx-auto px-4 md:px-8 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center md:text-left">Projects & Personal</h1>
                <ProjectsSection />
                <PersonalSection />
            </main>
            <Footer />
        </div>
    );
}
