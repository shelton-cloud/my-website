import React from 'react';
import { profile } from '@/data/profile';
import { FadeIn } from './FadeIn';

export function EducationSection() {
    return (
        <section id="education" className="scroll-mt-24">
            <FadeIn>
                <div className="flex items-center gap-6 mb-10">
                    <h2 className="headline-lg uppercase tracking-tighter">Education & Certs</h2>
                    <div className="flex-grow h-px bg-on-surface/5"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Certifications Column */}
                <FadeIn delay={0.1}>
                    <div className="space-y-6">
                        <h3 className="label-sm text-outline-variant flex items-center gap-3 tracking-widest font-bold">
                            <div className="w-1 h-3 bg-tertiary"></div>
                            Certifications
                        </h3>
                        <ul className="space-y-3">
                            {profile.certifications.map((cert: string, index: number) => (
                                <li 
                                    key={index} 
                                    className="glass-level-1 p-5 rounded-DEFAULT body-md text-on-surface hover:border-primary/40 transition-all duration-300 flex items-center gap-4"
                                >
                                    <div className="w-1 h-1 rounded-full bg-primary/40"></div>
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>

                {/* Education Column */}
                <FadeIn delay={0.2}>
                    <div className="space-y-6">
                        <h3 className="label-sm text-outline-variant flex items-center gap-3 tracking-widest font-bold">
                            <div className="w-1 h-3 bg-secondary"></div>
                            Education
                        </h3>
                        <ul className="space-y-3">
                            {profile.education.map((edu: { school: string; period: string; degree?: string }, index: number) => (
                                <li key={index} className="glass-level-1 p-6 rounded-DEFAULT group hardware-hover transition-all duration-300">
                                    <span className="headline-md block mb-2 group-hover:text-secondary transition-colors duration-300">
                                        {edu.school}
                                    </span>
                                    <div className="flex justify-between items-center">
                                        <span className="label-sm tracking-widest block text-outline-variant">{edu.period}</span>
                                        {edu.degree && (
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20 px-2 py-0.5 rounded-full">
                                                {edu.degree}
                                            </span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
