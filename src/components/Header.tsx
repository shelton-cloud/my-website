import React from 'react';
import Link from 'next/link';
import { profile } from '@/data/profile';

export function Header() {
    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md w-full">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-gradient-itav">
                    {profile.name}
                </h1>
                <div className="space-x-4">
                    <Link href="#about" className="text-gray-600 hover:text-itav-start transition-colors">About</Link>
                    <Link href="#experience" className="text-gray-600 hover:text-itav-start transition-colors">Experience</Link>
                    <Link href="#projects" className="text-gray-600 hover:text-itav-start transition-colors">Projects</Link>
                    <Link href="#contact" className="text-gray-600 hover:text-itav-start transition-colors">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
