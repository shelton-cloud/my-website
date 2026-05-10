import React from 'react';
import { profile } from '@/data/profile';

export function SkillsSection() {
    return (
        <section id="skills" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-6 mb-10">
                <h2 className="headline-lg uppercase tracking-tighter">Technical Skills</h2>
                <div className="flex-grow h-px bg-outline/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {Object.entries(profile.skills).map(([category, skills]) => (
                    <div key={category} className="space-y-6">
                        <div className="flex items-center gap-3">
                             <div className="w-1 h-3 bg-tertiary"></div>
                             <h3 className="label-sm tracking-widest text-on-surface-variant font-bold">{category}</h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill: string, index: number) => (
                                <span 
                                    key={index} 
                                    className="px-3 py-1.5 border border-outline/20 body-md text-on-surface hover:border-primary/50 transition-colors duration-300 rounded-sm bg-surface-container-low"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
