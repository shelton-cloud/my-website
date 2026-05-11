import React from 'react';
import { Metadata } from 'next';
import { profile } from '@/data/profile';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Bryan Shelton for inquiries regarding IT/AV engineering, creative technology, or collaboration.",
};

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 selection:bg-primary/30">
            <div className="container-max">
                <div className="max-w-4xl">
                    <FadeIn direction="right">
                        <div className="mb-4">
                            <span className="label-sm text-tertiary tracking-[0.4em] font-bold">Get in Touch</span>
                        </div>
                        <h1 className="headline-xl mb-20 uppercase tracking-tighter">Contact</h1>
                    </FadeIn>

                    <div className="space-y-6">
                        {/* Email */}
                        <FadeIn delay={0.2}>
                            <div className="bg-surface-container-low/50 border border-on-surface/5 p-8 rounded-DEFAULT group hover:border-primary/40 transition-all duration-300 glass-level-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <span className="label-sm text-outline-variant block mb-2 tracking-[0.2em]">Electronic Mail</span>
                                        <a 
                                            href={`mailto:${profile.contact.email}`} 
                                            className="headline-md text-on-surface hover:text-primary transition-all duration-300 block break-all font-bold"
                                        >
                                            {profile.contact.email.toUpperCase()}
                                        </a>
                                    </div>
                                    <div className="w-10 h-px bg-on-surface/5 hidden md:block"></div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Phone & Location */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FadeIn delay={0.3}>
                                <div className="h-full bg-surface-container-low/50 border border-on-surface/5 p-8 rounded-DEFAULT group hover:border-secondary/40 transition-all duration-300 glass-level-1">
                                    <span className="label-sm text-outline-variant block mb-2 tracking-[0.2em]">Direct Line</span>
                                    <span className="headline-md text-on-surface block font-bold">
                                        {profile.contact.phone}
                                    </span>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.4}>
                                <div className="h-full bg-surface-container-low/50 border border-on-surface/5 p-8 rounded-DEFAULT group hover:border-tertiary/40 transition-all duration-300 glass-level-1">
                                    <span className="label-sm text-outline-variant block mb-2 tracking-[0.2em]">Base of Operations</span>
                                    <span className="headline-md text-on-surface block font-bold uppercase">
                                        {profile.contact.location}
                                    </span>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Social Links */}
                        <FadeIn delay={0.5}>
                            <div className="bg-surface-container-low/50 border border-on-surface/5 p-8 rounded-DEFAULT glass-level-1">
                                <span className="label-sm text-outline-variant block mb-8 tracking-[0.2em]">System Links</span>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                    {profile.social.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex flex-col gap-2 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-outline-variant group-hover:bg-primary transition-colors"></div>
                                                <span className="label-sm text-on-surface group-hover:text-primary transition-colors font-bold tracking-[0.1em]">
                                                    {link.name.toUpperCase()}
                                                </span>
                                            </div>
                                            <div className="h-px w-0 group-hover:w-full bg-primary/30 transition-all duration-500"></div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
}
