"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { profile } from '@/data/profile';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md w-full">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-gradient-itav">
                    {profile.name}
                </h1>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4">
                    <Link href="#about" className="text-gray-600 hover:text-itav-start transition-colors">About</Link>
                    <Link href="#skills" className="text-gray-600 hover:text-itav-start transition-colors">Skills</Link>
                    <Link href="#experience" className="text-gray-600 hover:text-itav-start transition-colors">Experience</Link>
                    <Link href="#education" className="text-gray-600 hover:text-itav-start transition-colors">Education</Link>
                    <Link href="#projects" className="text-gray-600 hover:text-itav-start transition-colors">Projects</Link>
                    <Link href="#contact" className="text-gray-600 hover:text-itav-start transition-colors">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md">
                    <div className="flex flex-col space-y-4 p-4">
                        <Link href="#about" className="text-gray-600 hover:text-itav-start transition-colors" onClick={toggleMenu}>About</Link>
                        <Link href="#skills" className="text-gray-600 hover:text-itav-start transition-colors" onClick={toggleMenu}>Skills</Link>
                        <Link href="#experience" className="text-gray-600 hover:text-itav-start transition-colors" onClick={toggleMenu}>Experience</Link>
                        <Link href="#education" className="text-gray-600 hover:text-itav-start transition-colors" onClick={toggleMenu}>Education</Link>
                        <Link href="#projects" className="text-gray-600 hover:text-itav-start transition-colors" onClick={toggleMenu}>Projects</Link>
                        <Link href="#contact" className="text-gray-600 hover:text-itav-start transition-colors" onClick={toggleMenu}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
