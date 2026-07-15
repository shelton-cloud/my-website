"use client";

import React, { useState } from 'react';
import { profile } from '@/data/profile';
import { FadeIn } from './FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import MusicPlayerWrapper from './MusicPlayerWrapper';

type Category = 'all' | 'systems' | 'hardware' | 'web' | 'creative';

export function ProjectsSection() {
    const [activeTab, setActiveTab] = useState<Category>('all');

    const categories: { id: Category; label: string }[] = [
        { id: 'all', label: 'All Systems' },
        { id: 'systems', label: 'Systems & AV' },
        { id: 'hardware', label: 'Hardware & Pi' },
        { id: 'web', label: 'Web Apps' },
        { id: 'creative', label: 'Creative Media' },
    ];

    const vibeProjects = profile.vibeProjects || [];

    // Map projects to categories based on keywords
    const projectsWithCategories = vibeProjects.map((p) => {
        let cats: Category[] = [];
        const titleLower = p.title.toLowerCase();
        
        if (titleLower.includes('pi') || titleLower.includes('disk') || titleLower.includes('tv')) {
            cats.push('hardware');
        }
        if (titleLower.includes('pi') || titleLower.includes('disk') || titleLower.includes('tv') || titleLower.includes('scoreboard')) {
            cats.push('systems');
        }
        if (titleLower.includes('scoreboard') || titleLower.includes('notion') || titleLower.includes('agent')) {
            cats.push('web');
        }
        
        return { ...p, categories: cats };
    });

    const filteredProjects = activeTab === 'all'
        ? projectsWithCategories
        : activeTab === 'creative'
            ? []
            : projectsWithCategories.filter(p => p.categories.includes(activeTab));

    return (
        <section id="projects" className="scroll-mt-24">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-12 border-b border-on-surface/5 pb-6">
                {categories.map((cat) => {
                    const isActive = activeTab === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`
                                relative px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer
                                ${isActive ? 'text-primary' : 'text-outline hover:text-on-surface'}
                            `}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="project-tab-pill"
                                    className="absolute inset-0 bg-primary/10 rounded-full"
                                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                />
                            )}
                            {cat.label}
                        </button>
                    );
                })}
            </div>

            {/* Dashboard Display */}
            <motion.div 
                layout 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.article 
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            key={project.title}
                            className="glass-level-1 p-8 rounded-DEFAULT hardware-hover group relative overflow-hidden transition-all duration-500 hover:border-primary/30 flex flex-col min-h-[220px]"
                        >
                            {/* Technical visual detail */}
                            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary/60 transition-colors"></div>
                            </div>

                            <div className="mb-4">
                                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.25em]">
                                    {project.subtitle}
                                </span>
                            </div>

                            <h3 className="headline-md mb-4 group-hover:text-primary transition-colors font-bold uppercase tracking-tight">
                                {project.title}
                            </h3>
                            
                            <p className="body-md text-on-surface-variant leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[9px] font-mono text-on-surface-variant border border-on-surface/10 px-2 py-0.5 rounded-sm uppercase bg-surface/50">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Featured Music Production Visualizer Section */}
            {(activeTab === 'all' || activeTab === 'creative') && (
                <motion.div 
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-16 scroll-mt-24"
                >
                    <div className="flex items-center gap-6 mb-8">
                        <span className="label-sm text-primary tracking-[0.2em] font-bold">Creative Systems</span>
                        <h2 className="headline-md uppercase tracking-tight">Music Production</h2>
                        <div className="flex-grow h-px bg-on-surface/5"></div>
                    </div>
                    <MusicPlayerWrapper />
                </motion.div>
            )}
        </section>
    );
}
