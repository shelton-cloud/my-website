import React from 'react';
import { profile } from '@/data/profile';
import { FadeIn } from './FadeIn';

export function SkillsSection() {
    return (
        <section id="skills" className="scroll-mt-24">
            <FadeIn>
                <div className="flex items-center gap-6 mb-10">
                    <h2 className="headline-lg uppercase tracking-tighter">Technical Skills</h2>
                    <div className="flex-grow h-px bg-on-surface/5"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {Object.entries(profile.skills).map(([category, skills], idx) => (
                    <FadeIn key={category} delay={idx * 0.1}>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-3 bg-tertiary"></div>
                                <h3 className="label-sm tracking-widest text-on-surface-variant font-bold uppercase">{category}</h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill: string, index: number) => (
                                    <span 
                                        key={index} 
                                        className="px-4 py-2 border border-on-surface/10 body-md text-on-surface hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 rounded-full bg-surface-container-low/50 backdrop-blur-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
