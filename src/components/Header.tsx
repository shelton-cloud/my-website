"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/data/profile';

export function Header() {
    const pathname = usePathname();

    const navLinks = [
        { href: '/resume', label: 'Resume' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="w-full py-12 border-b border-outline/10">
            <div className="container-max flex flex-col md:flex-row justify-between items-end md:items-center">
                <Link href="/" className="group flex items-center gap-4 mb-8 md:mb-0">
                    <div className="w-1.5 h-6 bg-secondary"></div>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-2xl tracking-tighter text-on-surface group-hover:text-primary transition-colors duration-300">
                            {profile.name.toUpperCase()}
                        </span>
                        <span className="label-sm tracking-[0.2em] group-hover:text-on-surface-variant transition-colors duration-300">
                            Portfolio System v4.0
                        </span>
                    </div>
                </Link>

                <nav className="flex items-center gap-10" aria-label="Main Navigation">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link 
                                key={link.href}
                                href={link.href} 
                                className={`group relative label-sm tracking-[0.15em] transition-all duration-300 py-1 ${
                                    isActive ? 'text-primary' : 'text-outline hover:text-primary'
                                }`}
                            >
                                {link.label}
                                <span className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${
                                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
