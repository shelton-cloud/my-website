"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/data/profile';
import { motion } from 'framer-motion';

export function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/resume', label: 'Resume' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
            <motion.nav 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`
                    pointer-events-auto flex items-center gap-2 p-1.5 rounded-full
                    transition-all duration-500 ease-in-out
                    ${scrolled ? 'glass-level-3 px-6' : 'glass-level-2 px-8'}
                `}
                aria-label="Main Navigation"
            >
                {/* Logo / Home link */}
                <Link href="/" className="mr-4 group flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="font-display font-bold text-sm tracking-widest text-on-surface group-hover:text-primary transition-colors">
                        {profile.name.split(' ')[0].toUpperCase()}
                    </span>
                </Link>

                <div className="h-4 w-px bg-on-surface/10 mx-2 hidden md:block"></div>

                <ul className="flex items-center">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className={`
                                        relative px-4 py-2 rounded-full text-[11px] font-display font-bold tracking-[0.15em] uppercase
                                        transition-all duration-300 group
                                        ${isActive ? 'text-primary' : 'text-outline hover:text-on-surface'}
                                    `}
                                >
                                    {isActive && (
                                        <motion.span 
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </motion.nav>
        </header>
    );
}
