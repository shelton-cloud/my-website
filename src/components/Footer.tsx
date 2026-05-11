"use client";

import React from 'react';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <footer className="w-full py-24 border-t border-on-surface/5 bg-surface-container-lowest/30 backdrop-blur-md">
            <div className="container-max">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
                    {/* Brand Section */}
                    <div className="md:col-span-5 min-w-0">
                        <Link href="/" className="group flex items-center gap-4 mb-10">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="font-display font-bold text-2xl tracking-tight uppercase group-hover:text-primary transition-colors">
                                {profile.name}
                            </span>
                        </Link>
                        <p className="body-lg text-on-surface-variant max-w-md leading-relaxed mb-8">
                            {profile.personal.journey}
                        </p>
                        <div className="flex gap-4">
                             {profile.social.slice(0, 3).map((s) => (
                                 <a 
                                    key={s.name} 
                                    href={s.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full border border-on-surface/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                                    aria-label={s.name}
                                 >
                                     <div className="w-4 h-4 bg-on-surface/40 group-hover:bg-primary"></div>
                                 </a>
                             ))}
                        </div>
                    </div>

                    {/* Navigation Grid */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="label-sm text-primary mb-8 tracking-[0.2em] font-bold">Sitemap</h4>
                            <ul className="space-y-4">
                                <li><Link href="/" className="body-md text-on-surface-variant hover:text-primary transition-all">System Home</Link></li>
                                <li><Link href="/resume" className="body-md text-on-surface-variant hover:text-primary transition-all">Resume.md</Link></li>
                                <li><Link href="/projects" className="body-md text-on-surface-variant hover:text-primary transition-all">Projects.log</Link></li>
                                <li><Link href="/contact" className="body-md text-on-surface-variant hover:text-primary transition-all">Contact.sh</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="label-sm text-secondary mb-8 tracking-[0.2em] font-bold">Network</h4>
                            <ul className="space-y-4">
                                {profile.social.map((link) => (
                                    <li key={link.name}>
                                        <a 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="body-md text-on-surface-variant hover:text-secondary transition-all flex items-center gap-2"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-on-surface/20"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h4 className="label-sm text-tertiary mb-8 tracking-[0.2em] font-bold">Identity</h4>
                            <div className="space-y-1 mb-6">
                                <p className="body-md text-on-surface font-bold uppercase tracking-tight">{profile.contact.location}</p>
                                <p className="label-sm text-on-surface-variant">UTC-08:00 / LAX</p>
                            </div>
                            <a href={`mailto:${profile.contact.email}`} className="body-md text-primary hover:text-primary-container transition-all block break-all font-mono text-sm">
                                {profile.contact.email}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="label-sm text-outline-variant tracking-widest tabular-nums">
                            © {new Date().getFullYear()} / BRYAN SHELTON
                        </p>
                        <div className="hidden md:block w-px h-4 bg-on-surface/10"></div>
                        <p className="label-sm text-outline-variant tracking-[0.2em]">
                            ALL SYSTEMS NOMINAL
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                             <span className="text-[10px] font-mono text-outline-variant uppercase tracking-tighter">Status: Production</span>
                        </div>
                        <p className="label-sm text-outline-variant flex items-center gap-3">
                            BUILT WITH <span className="text-secondary animate-pulse">●</span> NEXT.JS 16
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
