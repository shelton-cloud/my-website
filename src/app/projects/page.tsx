import React from 'react';
import { Metadata } from 'next';
import { ProjectsSection } from "@/components/ProjectsSection";
import { PersonalSection } from "@/components/PersonalSection";
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
    title: "Projects",
    description: "A showcase of technical projects and creative music production by Bryan Shelton.",
};

export default function ProjectsPage() {
    return (
        <div className="pt-32 pb-24 selection:bg-primary/30">
            <div className="container-max">
                <div className="max-w-4xl">
                    <FadeIn direction="right">
                        <div className="mb-4">
                            <span className="label-sm text-secondary tracking-[0.3em] font-bold">Portfolio & Creative</span>
                        </div>
                        <h1 className="headline-xl mb-20 uppercase tracking-tighter">Projects</h1>
                    </FadeIn>
                    
                    <div className="space-y-32">
                        <ProjectsSection />
                        <PersonalSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
