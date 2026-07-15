import React from 'react';
import { profile } from '@/data/profile';
import { FadeIn } from './FadeIn';

export function ExperienceSection() {
    return (
        <section id="experience" className="scroll-mt-24">
            <FadeIn>
                <div className="flex items-center gap-6 mb-10">
                    <h2 className="headline-lg uppercase tracking-tighter">Experience</h2>
                    <div className="flex-grow h-px bg-on-surface/5"></div>
                </div>
            </FadeIn>

            <div className="relative pl-6 md:pl-12 ml-2 md:ml-6">
                {/* Dynamic Glowing Patch Cable */}
                <div className="timeline-wire left-0">
                    <div className="timeline-signal" />
                </div>

                <div className="space-y-10">
                    {profile.experience.map((job, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <article
                                className="relative glass-level-1 p-8 rounded-DEFAULT hardware-hover group hover:border-primary/30 transition-all duration-500"
                            >
                                {/* Timeline Connector Node (looks like a patch jack connection) */}
                                <div className="absolute left-[-24px] md:left-[-48px] top-12 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(66,112,216,0.4)] transition-all duration-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"></div>
                                </div>

                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                                    <div>
                                        <h3 className="headline-md text-on-surface group-hover:text-primary transition-colors duration-300">
                                            {job.role}
                                        </h3>
                                        <p className="body-md text-secondary font-semibold tracking-wide mt-1 uppercase">{job.company}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end gap-2">
                                        <span className="label-sm border border-on-surface/10 px-3 py-1 bg-surface-container-highest/50 rounded-full tabular-nums">
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
                                            <div className="w-1 h-4 bg-primary/20 mt-1 flex-shrink-0 group-hover:bg-primary transition-colors duration-500"></div>
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
            </div>
        </section>
    );
}
