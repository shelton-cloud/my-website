import React from 'react';
import { profile } from '@/data/profile';
import { FadeIn } from './FadeIn';

export function ProjectsSection() {
    return (
        <section id="projects" className="scroll-mt-24">
            <FadeIn>
                <div className="flex items-center gap-6 mb-10">
                    <h2 className="headline-lg uppercase tracking-tighter">Technical Projects</h2>
                    <div className="flex-grow h-px bg-on-surface/5"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {profile.projects.map((project, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                        <article 
                            className="glass-level-1 p-8 rounded-DEFAULT hardware-hover group hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-8 h-px bg-secondary/50 group-hover:w-12 transition-all duration-500"></div>
                                <span className="label-sm text-outline-variant tabular-nums">0{index + 1}</span>
                            </div>
                            <h3 className="headline-md mb-4 group-hover:text-primary transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="body-md text-on-surface-variant leading-relaxed">
                                {project.description}
                            </p>
                        </article>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
