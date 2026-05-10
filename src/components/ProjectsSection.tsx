import React from 'react';
import { profile } from '@/data/profile';
import { FadeIn } from './FadeIn';

export function ProjectsSection() {
    return (
        <section id="projects" className="mb-20 scroll-mt-24">
            <FadeIn>
                <div className="flex items-center gap-6 mb-10">
                    <h2 className="headline-lg uppercase tracking-tighter">Technical Projects</h2>
                    <div className="flex-grow h-px bg-outline/10"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {profile.projects.map((project, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                        <article 
                            className="hardware-card hardware-hover group"
                        >
                            <h3 className="headline-md mb-4 group-hover:text-primary transition-colors">
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
