"use client";

import React from 'react';

export function BackgroundEffects() {
    return (
        <>
            {/* Ambient Background Containers */}
            <div 
                className="fixed inset-0 pointer-events-none -z-50 overflow-hidden"
                style={{ 
                    opacity: 'var(--theme-glow-intensity, 0.15)',
                    transition: 'opacity 0.3s ease'
                }}
            >
                {/* Blob 1: Primary Glow (Electric Indigo / Dynamic Theme Color) */}
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-container/20 blur-[130px] animate-float-1 transition-colors duration-500" />
                
                {/* Blob 2: Secondary Glow (Sunset Orange) */}
                <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-secondary-container/10 blur-[110px] animate-float-2" />
                
                {/* Blob 3: Tertiary Glow (Purple) */}
                <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-tertiary-container/10 blur-[120px] animate-float-3" />
            </div>

            {/* Technical Mesh Grid */}
            <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
                <div className="tech-grid" />
            </div>

            {/* CRT Monitor Overlay */}
            <div className="crt-overlay">
                <div className="crt-screen crt-flicker" />
            </div>
        </>
    );
}
