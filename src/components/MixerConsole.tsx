"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MixerConsole() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'indigo' | 'orange' | 'purple'>('indigo');
    const [glow, setGlow] = useState(0.15);
    const [volume, setVolume] = useState(0.5);
    const [crtActive, setCrtActive] = useState(false);

    // Sync variables to CSS :root custom properties
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.style.setProperty('--theme-glow-intensity', String(glow));
    }, [glow]);

    useEffect(() => {
        document.documentElement.style.setProperty('--theme-crt-opacity', crtActive ? '0.35' : '0');
    }, [crtActive]);

    // Bi-directional volume sync with the MusicPlayer component via CustomEvents
    useEffect(() => {
        const handlePlayerVolume = (e: Event) => {
            const customEvent = e as CustomEvent<number>;
            if (customEvent.detail !== volume) {
                setVolume(customEvent.detail);
            }
        };

        window.addEventListener('site-volume-change', handlePlayerVolume);
        return () => window.removeEventListener('site-volume-change', handlePlayerVolume);
    }, [volume]);

    const handleVolumeSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
        const vol = parseFloat(e.target.value);
        setVolume(vol);
        window.dispatchEvent(new CustomEvent('site-volume-change', { detail: vol }));
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 font-mono pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="pointer-events-auto w-80 glass-level-3 rounded-lg border border-outline/30 overflow-hidden shadow-2xl mb-4 flex flex-col"
                    >
                        {/* Header Panel */}
                        <div className="bg-surface-container-highest px-6 py-4 border-b border-outline/25 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                <span className="text-xs font-bold uppercase tracking-widest text-on-surface">SYS-MIXER // BUS 01</span>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-outline hover:text-on-surface text-xs font-bold px-2 py-0.5 border border-outline/20 hover:border-outline/50 rounded-sm uppercase transition-colors"
                            >
                                CLOSE
                            </button>
                        </div>

                        {/* Fader & Control Rack */}
                        <div className="p-6 space-y-6 bg-surface-container/90">
                            
                            {/* Theme Selector (Bus Select) */}
                            <div className="space-y-3">
                                <span className="text-[10px] font-bold text-outline uppercase tracking-wider block">CHANNEL 1: BUS SELECT (THEME)</span>
                                <div className="grid grid-cols-3 gap-2">
                                    {(['indigo', 'orange', 'purple'] as const).map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setTheme(t)}
                                            className={`
                                                px-3 py-2 rounded-sm border text-[10px] font-bold uppercase transition-all duration-300
                                                ${theme === t 
                                                    ? 'bg-primary-container border-primary text-on-primary-container shadow-[0_0_12px_rgba(66,112,216,0.3)]' 
                                                    : 'border-outline/10 text-on-surface-variant hover:border-outline/40 hover:text-on-surface'
                                                }
                                            `}
                                        >
                                            <div className="flex flex-col items-center gap-1.5">
                                                <span className={`w-1.5 h-1.5 rounded-full ${
                                                    t === 'indigo' ? 'bg-primary' : t === 'orange' ? 'bg-secondary' : 'bg-tertiary'
                                                } ${theme === t ? 'animate-pulse' : 'opacity-60'}`} />
                                                {t}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Glow Intensity Slider */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-[10px] font-bold text-outline tracking-wider">
                                    <span>CHANNEL 2: GLOW LVL</span>
                                    <span className="tabular-nums">{Math.round(glow * 100)}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="0.4"
                                    step="0.01"
                                    value={glow}
                                    onChange={(e) => setGlow(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-on-surface/5 rounded-full appearance-none cursor-pointer accent-primary"
                                    aria-label="Glow Level"
                                />
                            </div>

                            {/* Master Volume Slider */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-[10px] font-bold text-outline tracking-wider">
                                    <span>CHANNEL 3: MASTER GAIN</span>
                                    <span className="tabular-nums">{Math.round(volume * 100)}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={volume}
                                    onChange={handleVolumeSlider}
                                    className="w-full h-1 bg-on-surface/5 rounded-full appearance-none cursor-pointer accent-primary"
                                    aria-label="Master Volume"
                                />
                            </div>

                            {/* CRT Filter Toggle */}
                            <div className="flex justify-between items-center border-t border-outline/10 pt-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-outline tracking-wider uppercase">CRT MONITOR OVERLAY</span>
                                    <span className="text-[9px] text-outline-variant font-medium">SCANLINES / NOISE</span>
                                </div>
                                <button
                                    onClick={() => setCrtActive(!crtActive)}
                                    className={`
                                        w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none border border-outline/25
                                        ${crtActive ? 'bg-primary/30 border-primary' : 'bg-surface-container-highest'}
                                    `}
                                    aria-label="Toggle CRT Overlay"
                                >
                                    <motion.div 
                                        layout
                                        className={`w-3.5 h-3.5 rounded-full shadow-md ${crtActive ? 'bg-primary' : 'bg-outline-variant'}`}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        animate={{ x: crtActive ? 22 : 0 }}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Status Diagnostics strip */}
                        <div className="bg-surface-container-lowest/80 px-6 py-3 border-t border-outline/10 flex justify-between text-[9px] text-outline-variant font-medium">
                            <span className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-green-500"></span>
                                CLK: 48.0kHz
                            </span>
                            <span>BUS LAT: 1.2ms</span>
                            <span>STATUS: NOMINAL</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Flipped button to open console */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-full glass-level-3 border border-outline/25 shadow-xl hover:border-primary/50 transition-colors uppercase text-[10px] font-bold tracking-widest text-on-surface focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                A/V Console
            </motion.button>
        </div>
    );
}
