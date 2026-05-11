import React from 'react';
import { profile } from '@/data/profile';
import { FadeIn } from './FadeIn';

export function PersonalSection() {
    const instruments = [
        { type: "Stringed", name: "Guitar", detail: "Primary instrument, songwriter tool." },
        { type: "Low-End", name: "Bass", detail: "The rhythmic foundation." },
        { type: "Percussive", name: "Drums", detail: "Timing and energy." }
    ];

    return (
        <section id="personal" className="scroll-mt-24">
            <FadeIn>
                <div className="flex items-center gap-6 mb-10">
                    <h2 className="headline-lg uppercase tracking-tighter">Life & Interests</h2>
                    <div className="flex-grow h-px bg-on-surface/5"></div>
                </div>
            </FadeIn>

            <FadeIn delay={0.1}>
                <div className="mb-16">
                    <blockquote className="headline-md text-on-surface leading-tight border-l-2 border-secondary pl-8 py-2 italic max-w-3xl">
                        &quot;{profile.personal.journey}&quot;
                    </blockquote>
                </div>
            </FadeIn>

            {/* Instrument Rack */}
            <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-on-surface/5 border border-on-surface/5 rounded-DEFAULT overflow-hidden">
                {instruments.map((inst, i) => (
                    <FadeIn key={inst.name} delay={0.2 + (i * 0.1)}>
                        <div className="bg-surface p-8 hardware-hover group h-full">
                            <span className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.2em] mb-4 block">{inst.type}</span>
                            <h4 className="headline-md mb-2 group-hover:text-primary transition-colors duration-300">{inst.name.toUpperCase()}</h4>
                            <p className="text-xs text-on-surface-variant tracking-wider uppercase font-medium leading-relaxed">{inst.detail}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {/* Family Card */}
                <FadeIn delay={0.3}>
                    <div className="glass-level-1 p-8 rounded-DEFAULT h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <h3 className="label-sm tracking-widest font-bold">Family</h3>
                        </div>
                        <p className="body-md text-on-surface-variant leading-relaxed">
                            {profile.personal.family}
                        </p>
                    </div>
                </FadeIn>

                {/* Ripley Card */}
                <FadeIn delay={0.4}>
                    <div className="glass-level-1 p-8 rounded-DEFAULT h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            <h3 className="label-sm tracking-widest font-bold">Ripley</h3>
                        </div>
                        <p className="body-md text-on-surface-variant leading-relaxed">
                            {profile.personal.pets}
                        </p>
                    </div>
                </FadeIn>

                {/* Music Card */}
                <FadeIn delay={0.5}>
                    <div className="glass-level-1 p-8 rounded-DEFAULT h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                            <h3 className="label-sm tracking-widest font-bold">Music</h3>
                        </div>
                        <p className="body-md text-on-surface-variant leading-relaxed">
                            {profile.personal.music}
                        </p>
                    </div>
                </FadeIn>
            </div>

            <FadeIn delay={0.6}>
                <div className="space-y-6">
                    <h3 className="label-sm text-outline-variant uppercase tracking-[0.2em] font-bold">Extracurricular Systems</h3>
                    <div className="flex flex-wrap gap-2">
                        {profile.personal.hobbies.map((hobby, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-2 border border-on-surface/10 text-on-surface rounded-full label-sm bg-surface-container-low/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
                            >
                                {hobby}
                            </span>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
