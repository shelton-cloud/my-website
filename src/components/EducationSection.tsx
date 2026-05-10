import React from 'react';
import { profile } from '@/data/profile';

export function EducationSection() {
    return (
        <section id="education" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-6 mb-10">
                <h2 className="headline-lg uppercase tracking-tighter">Education & Certs</h2>
                <div className="flex-grow h-px bg-outline/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Certifications Column */}
                <div className="space-y-6">
                    <h3 className="label-sm text-outline-variant flex items-center gap-3 tracking-widest font-bold">
                         <div className="w-1 h-3 bg-tertiary"></div>
                         Certifications
                    </h3>
                    <ul className="space-y-3">
                        {profile.certifications.map((cert: string, index: number) => (
                            <li key={index} className="bg-surface-container-low border border-outline/15 p-4 rounded-sm body-md text-on-surface hover:border-primary/40 transition-colors">
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Education Column */}
                <div className="space-y-6">
                    <h3 className="label-sm text-outline-variant flex items-center gap-3 tracking-widest font-bold">
                         <div className="w-1 h-3 bg-secondary"></div>
                         Education
                    </h3>
                    <ul className="space-y-3">
                        {profile.education.map((edu: { school: string; period: string; degree?: string }, index: number) => (
                            <li key={index} className="bg-surface-container-low border border-outline/15 p-6 rounded-sm group">
                                <span className="headline-md block mb-2 group-hover:text-secondary transition-colors">
                                    {edu.school}
                                </span>
                                <span className="label-sm tracking-widest block">{edu.period}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
