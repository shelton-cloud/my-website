import React from 'react';
import { Metadata } from 'next';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/ProjectsSection";
import { VibeCodingSection } from "@/components/VibeCodingSection";
import { PersonalSection } from "@/components/PersonalSection";
import MusicPlayerWrapper from '@/components/MusicPlayerWrapper';

export const metadata: Metadata = {
    title: "Projects",
    description: "A showcase of technical projects and creative music production by Bryan Shelton.",
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-surface text-on-surface">
            <Header />
            <main className="flex-grow container-max py-20">
                <div className="max-w-4xl">
                    <div className="mb-4">
                        <span className="label-sm text-secondary tracking-[0.3em] font-bold">Portfolio & Creative</span>
                    </div>
                    <h1 className="headline-xl mb-20 uppercase tracking-tighter">Projects</h1>
                    
                    <div className="space-y-20">
                        <ProjectsSection />

                        <VibeCodingSection />

                        <div className="scroll-mt-24">
                            <div className="flex items-center gap-6 mb-10">
                                <h2 className="headline-lg uppercase tracking-tighter">Music Production</h2>
                                <div className="flex-grow h-px bg-outline/10"></div>
                            </div>
                            <MusicPlayerWrapper />
                        </div>

                        <PersonalSection />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
