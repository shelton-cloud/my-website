import React from 'react';
import { profile } from '@/data/profile';
import { FadeIn } from './FadeIn';

export function ExperienceSection() {
    return (
        <section id="experience" className="mb-20 scroll-mt-24">
            <FadeIn>
                <div className="flex items-center gap-6 mb-10">
                    <h2 className="headline-lg uppercase tracking-tighter">Experience</h2>
                    <div className="flex-grow h-px bg-outline/10"></div>
                </div>
            </FadeIn>

            <div className="space-y-6">
                {profile.experience.map((job, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                        <article
                            className="hardware-card hardware-hover group"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                                <div>
                                    <h3 className="headline-md text-on-surface group-hover:text-primary transition-colors duration-300">
                                        {job.role}
                                    </h3>
                                    <p className="body-md text-secondary font-semibold tracking-wide mt-1 uppercase">{job.company}</p>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-2">
                                    <span className="label-sm border border-outline/20 px-3 py-1 bg-surface-container-highest rounded-sm">
                                        {job.period}
                                    </span>
                                    {job.current && (
                                        <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                                            Active Role
                                        </span>
                                    )}
                                </div>
                            </div>
                            
                            <ul className="space-y-5">
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i} className="flex gap-5 items-start">
                                        <div className="w-1 h-4 bg-outline/20 mt-1 flex-shrink-0"></div>
                                        <p className="body-md text-on-surface-variant leading-relaxed">
                                            {resp}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
