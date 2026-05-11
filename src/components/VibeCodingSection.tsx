"use client";

import React from 'react';
import { profile } from '@/data/profile';
import { FadeIn } from './FadeIn';

export function VibeCodingSection() {
    // We cast to any for now to handle the new property without updating the interface globally
    const vibeProjects = (profile as { vibeProjects?: Array<{ title: string; subtitle: string; description: string; tech: string[] }> }).vibeProjects || [];

    return (
        <section id="vibe-coding" className="scroll-mt-24">
            <FadeIn>
                <div className="flex items-center gap-6 mb-4">
                    <h2 className="headline-lg uppercase tracking-tighter text-secondary">Vibe Coding Lab</h2>
                    <div className="flex-grow h-px bg-secondary/10"></div>
                    <span className="label-sm text-secondary border border-secondary/30 px-3 py-1 rounded-full animate-pulse">
                        Live Learning
                    </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-16">
                    <p className="body-md text-on-surface-variant max-w-2xl leading-relaxed">
                        The last 6 months have been an explosion of productivity. By shifting from &quot;manual boilerplate&quot; to &quot;intent-based building&quot; with AI agents, I&apos;ve moved from architecting systems to shipping complete, functional appliances in record time.
                    </p>
                    <a 
                        href="https://github.com/shelton-cloud" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-3 label-sm text-on-surface hover:text-secondary transition-all group px-6 py-3 border border-on-surface/10 rounded-full glass-level-1"
                    >
                        <span>View Source on GitHub</span>
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:scale-150 transition-transform"></div>
                    </a>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vibeProjects.map((project: { title: string; subtitle: string; description: string; tech: string[] }, index: number) => (
                    <FadeIn key={project.title} delay={index * 0.1}>
                        <article 
                            className="glass-level-1 p-8 rounded-DEFAULT hardware-hover group relative overflow-hidden transition-all duration-500 hover:border-secondary/30"
                        >
                            {/* Accent Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                                <div className="absolute top-4 right-4 w-2 h-2 bg-secondary/20 rounded-full group-hover:bg-secondary/60 transition-colors"></div>
                            </div>

                            <div className="mb-4">
                                <span className="text-[10px] font-mono text-secondary uppercase tracking-[0.3em]">
                                    {project.subtitle}
                                </span>
                            </div>

                            <h3 className="headline-md mb-4 group-hover:text-secondary transition-colors font-bold uppercase tracking-tight">
                                {project.title}
                            </h3>
                            
                            <p className="body-md text-on-surface-variant leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t: string) => (
                                    <span key={t} className="text-[9px] font-mono text-on-surface-variant border border-on-surface/10 px-2 py-0.5 rounded-sm uppercase bg-surface/50">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
