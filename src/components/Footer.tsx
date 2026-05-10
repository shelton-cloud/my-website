"use client";

import React from 'react';
import Link from 'next/link';
import { profile } from '@/data/profile';

export function Footer() {
    return (
        <footer className="w-full py-20 border-t border-outline/10 bg-surface-container-lowest">
            <div className="container-max">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    {/* Brand Section */}
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-3 mb-8">
                            <div className="w-1 h-4 bg-primary"></div>
                            <span className="font-display font-bold text-xl tracking-tighter uppercase">
                                {profile.name}
                            </span>
                        </Link>
                        <p className="body-md text-on-surface-variant max-w-sm leading-relaxed">
                            {profile.personal.journey}
                        </p>
                    </div>

                    {/* Navigation Grid */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="label-sm text-outline-variant mb-6 tracking-[0.2em]">Sitemap</h4>
                            <ul className="space-y-4">
                                <li><Link href="/resume" className="body-md text-on-surface hover:text-primary transition-colors">Resume</Link></li>
                                <li><Link href="/projects" className="body-md text-on-surface hover:text-primary transition-colors">Projects</Link></li>
                                <li><Link href="/contact" className="body-md text-on-surface hover:text-primary transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="label-sm text-outline-variant mb-6 tracking-[0.2em]">Network</h4>
                            <ul className="space-y-4">
                                {profile.social.map((link) => (
                                    <li key={link.name}>
                                        <a 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="body-md text-on-surface hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h4 className="label-sm text-outline-variant mb-6 tracking-[0.2em]">Identity</h4>
                            <p className="body-md text-on-surface mb-1">{profile.contact.location}</p>
                            <a href={`mailto:${profile.contact.email}`} className="body-md text-primary hover:underline block break-all">
                                {profile.contact.email}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-outline/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="label-sm text-outline-variant tracking-widest">
                        © {new Date().getFullYear()} / BRYAN SHELTON / ALL SYSTEMS NOMINAL
                    </p>
                    <p className="label-sm text-outline-variant flex items-center gap-3">
                        BUILT WITH <span className="text-secondary">●</span> NEXT.JS + TAILWIND v4
                    </p>
                </div>
            </div>
        </footer>
    );
}
