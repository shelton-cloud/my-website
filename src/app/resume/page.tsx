import React from 'react';
import { Metadata } from 'next';
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
    title: "Resume",
    description: "Professional experience, skills, and education of Bryan Shelton, Lead IT/AV Professional at Riot Games.",
};

export default function ResumePage() {
    return (
        <div className="pt-32 pb-24 selection:bg-primary/30">
            <div className="container-max">
                <div className="max-w-4xl">
                    <FadeIn direction="right">
                        <div className="mb-4">
                            <span className="label-sm text-primary tracking-[0.3em] font-bold">Curriculum Vitae</span>
                        </div>
                        <h1 className="headline-xl mb-20 uppercase tracking-tighter">Resume</h1>
                    </FadeIn>
                    
                    <div className="space-y-32">
                        <ExperienceSection />
                        <SkillsSection />
                        <EducationSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
