"use client";

import React from 'react';
import Link from 'next/link';
import { profile } from '@/data/profile';

export function Header() {
    return (
        <nav className="w-full py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
                <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0 hover:opacity-80 transition-opacity">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg leading-none">{profile.name}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">{profile.title.split(' - ')[0]}</span>
                    </div>
                </Link>

                <div className="flex space-x-6 text-sm font-medium text-gray-600">
                    <Link href="/resume" className="hover:text-black transition-colors">Resume</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/projects" className="hover:text-black transition-colors">Projects</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
