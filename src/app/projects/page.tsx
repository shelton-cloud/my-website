import React from 'react';
import { Metadata } from 'next';
import { ProjectsSection } from "@/components/ProjectsSection";
import { VibeCodingSection } from "@/components/VibeCodingSection";
import { PersonalSection } from "@/components/PersonalSection";
import MusicPlayerWrapper from '@/components/MusicPlayerWrapper';
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

                        <VibeCodingSection />

                        <div className="scroll-mt-24">
                            <FadeIn>
                                <div className="flex items-center gap-6 mb-10">
                                    <h2 className="headline-lg uppercase tracking-tighter">Music Production</h2>
                                    <div className="flex-grow h-px bg-on-surface/5"></div>
                                </div>
                            </FadeIn>
                            <MusicPlayerWrapper />
                        </div>

                        <PersonalSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
