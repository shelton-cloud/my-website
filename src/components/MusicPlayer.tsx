"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const tracks = [
    {
        title: "Goode Co",
        src: "/goodeco.mp3",
        artist: "Life as Lions",
        description: "Driving guitars and powerful vocals define this high-energy rock track. Recorded in a garage studio in 2012, it captures the raw essence of our early sound.",
        image: "/album-goodeco.png"
    },
    {
        title: "Rock Shock and Load",
        src: "/rockshockload.mp3",
        artist: "Thee Armada",
        description: "An experimental fusion of funk rhythms and heavy distortion. This track was born from a late-night jam session that accidentally turned into a 10-minute epic.",
        image: "/album-rockshock.png"
    },
    {
        title: "Three Shades of Me",
        src: "/threeshades.mp3",
        artist: "Ignite the Morning",
        description: "Allows listeners to explore different facets of my musical journey. A melodic progression that builds into a complex, layered crescendo.",
        image: "/album-threeshades.png"
    }
];

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const startVisualizer = () => {
        if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
        }
        
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const analyser = analyserRef.current;
        if (!analyser) return;
        
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        const render = () => {
            if (!canvasRef.current || !analyserRef.current) return;
            
            const currentCanvas = canvasRef.current;
            const currentCtx = currentCanvas.getContext('2d');
            if (!currentCtx) return;

            const rect = currentCanvas.getBoundingClientRect();
            if (currentCanvas.width !== rect.width || currentCanvas.height !== rect.height) {
                currentCanvas.width = rect.width;
                currentCanvas.height = rect.height;
            }
            
            const width = currentCanvas.width;
            const height = currentCanvas.height;
            
            analyserRef.current.getByteTimeDomainData(dataArray);
            
            // Clear canvas with trail
            currentCtx.fillStyle = 'rgba(12, 19, 34, 0.18)'; 
            currentCtx.fillRect(0, 0, width, height);
            
            // Draw grid lines
            currentCtx.strokeStyle = 'rgba(220, 226, 247, 0.05)';
            currentCtx.lineWidth = 1;
            
            currentCtx.beginPath();
            currentCtx.moveTo(0, height / 2);
            currentCtx.lineTo(width, height / 2);
            currentCtx.stroke();
            
            const divisions = 4;
            for (let i = 1; i < divisions; i++) {
                currentCtx.beginPath();
                currentCtx.moveTo((width / divisions) * i, 0);
                currentCtx.lineTo((width / divisions) * i, height);
                currentCtx.stroke();
            }
            
            // Draw oscilloscope wave
            currentCtx.lineWidth = 2;
            
            const gradient = currentCtx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, '#4270d8'); 
            gradient.addColorStop(0.5, '#dfb7ff'); 
            gradient.addColorStop(1, '#ffb786'); 
            
            currentCtx.strokeStyle = gradient;
            currentCtx.shadowBlur = 6;
            currentCtx.shadowColor = '#4270d8';
            
            currentCtx.beginPath();
            const sliceWidth = width / bufferLength;
            let x = 0;
            
            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = (v * height) / 2;
                
                if (i === 0) {
                    currentCtx.moveTo(x, y);
                } else {
                    currentCtx.lineTo(x, y);
                }
                
                x += sliceWidth;
            }
            
            currentCtx.lineTo(width, height / 2);
            currentCtx.stroke();
            currentCtx.shadowBlur = 0; 
            
            // Technical metadata readout
            currentCtx.fillStyle = 'rgba(160, 166, 188, 0.35)';
            currentCtx.font = '9px monospace';
            currentCtx.fillText('OSCILLOSCOPE FEED', 12, 22);
            
            let sum = 0;
            for (let i = 0; i < bufferLength; i++) {
                const val = (dataArray[i] - 128) / 128;
                sum += val * val;
            }
            const rms = Math.sqrt(sum / bufferLength);
            const db = 20 * Math.log10(rms + 0.0001);
            const vuPercentage = Math.max(0, Math.min(100, ((db + 40) / 40) * 100));
            currentCtx.fillText(`RMS: ${db.toFixed(1)} dB`, 12, height - 14);
            
            currentCtx.fillStyle = 'rgba(160, 166, 188, 0.08)';
            currentCtx.fillRect(width - 64, 14, 50, 5);
            currentCtx.fillStyle = vuPercentage > 82 ? '#ffb4ab' : '#b2c5ff';
            currentCtx.fillRect(width - 64, 14, (vuPercentage / 100) * 50, 5);
            
            animationFrameIdRef.current = requestAnimationFrame(render);
        };
        
        render();
    };

    const stopVisualizer = () => {
        if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
            animationFrameIdRef.current = null;
        }
    };

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            if (!audioContextRef.current) {
                try {
                    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
                    const ctx = new AudioContextClass();
                    const analyser = ctx.createAnalyser();
                    analyser.fftSize = 256;
                    
                    const source = ctx.createMediaElementSource(audioRef.current);
                    source.connect(analyser);
                    analyser.connect(ctx.destination);
                    
                    audioContextRef.current = ctx;
                    analyserRef.current = analyser;
                    sourceRef.current = source;
                } catch (err) {
                    console.error("Failed to init Web Audio API:", err);
                }
            }
            
            if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume();
            }
            
            audioRef.current.play()
                .then(() => {
                    startVisualizer();
                })
                .catch(e => {
                    console.error("Play error:", e);
                    setIsPlaying(false);
                });
        } else {
            audioRef.current?.pause();
            stopVisualizer();
        }
        
        return () => {
            stopVisualizer();
        };
    }, [isPlaying, currentTrackIndex]);

    useEffect(() => {
        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, []);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handlePrev = () => {
        setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
        setIsPlaying(true);
    };

    const handleNext = () => {
        setCurrentTrackIndex((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
        setIsPlaying(true);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseFloat(e.target.value));
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const currentTrack = tracks[currentTrackIndex];

    return (
        <div className="w-full glass-level-2 rounded-DEFAULT overflow-hidden border border-on-surface/5 flex flex-col font-sans">
            {/* Top Bar - Track Info & Minimal Art */}
            <div className="flex flex-col md:flex-row items-stretch border-b border-on-surface/5">
                {/* Art */}
                <div className="w-full md:w-64 h-64 md:h-auto border-b md:border-b-0 md:border-r border-on-surface/5 relative flex-shrink-0 bg-surface-container-highest/20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTrackIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.7 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={currentTrack.image}
                                alt={currentTrack.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 256px"
                                className="object-cover grayscale opacity-40 mix-blend-luminosity hover:opacity-100 transition-opacity duration-1000"
                            />
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
                    <canvas 
                        ref={canvasRef} 
                        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen z-10"
                    />
                </div>
                
                {/* Info */}
                <div className="flex-grow p-10 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-6">
                                <h3 className="headline-lg text-on-surface uppercase tracking-tight">{currentTrack.title}</h3>
                                {isPlaying && (
                                    <div className="flex items-end gap-1 h-8 pb-1">
                                        <motion.div animate={{ height: [4, 24, 8, 20, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 bg-primary/60 rounded-full" />
                                        <motion.div animate={{ height: [8, 12, 24, 4, 8] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1.5 bg-secondary/60 rounded-full" />
                                        <motion.div animate={{ height: [4, 20, 12, 24, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 bg-primary/60 rounded-full" />
                                        <motion.div animate={{ height: [12, 4, 20, 8, 12] }} transition={{ repeat: Infinity, duration: 1.1 }} className="w-1.5 bg-secondary/60 rounded-full" />
                                    </div>
                                )}
                            </div>
                            <span className="label-sm border border-secondary/30 text-secondary px-3 py-1 rounded-full bg-secondary/5 tabular-nums">
                                TRK {String(currentTrackIndex + 1).padStart(2, '0')}
                            </span>
                        </div>
                        <p className="body-md text-primary font-bold tracking-[0.2em] mb-10 uppercase">{currentTrack.artist}</p>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute -left-6 top-0 bottom-0 w-px bg-primary/30"></div>
                        <p className="body-lg text-on-surface-variant leading-relaxed max-w-2xl italic">
                            &quot;{currentTrack.description}&quot;
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Controls & Scrubber */}
            <div className="flex flex-col md:flex-row items-center bg-surface-container-low/50 px-10 py-8 md:py-0 md:h-28 gap-10">
                
                {/* Playback Controls */}
                <div className="flex items-center gap-6 flex-shrink-0">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-on-surface/10 text-on-surface hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all focus:outline-none"
                        aria-label="Previous"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                    </button>

                    <button
                        onClick={handlePlayPause}
                        className={`w-16 h-16 flex items-center justify-center rounded-full transition-all focus:outline-none shadow-2xl ${
                            isPlaying ? 'bg-primary text-on-primary outer-glow-indigo' : 'bg-secondary text-on-secondary outer-glow-orange'
                        }`}
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                        ) : (
                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        )}
                    </button>

                    <button
                        onClick={handleNext}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-on-surface/10 text-on-surface hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all focus:outline-none"
                        aria-label="Next"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                    </button>
                </div>

                <audio
                    ref={audioRef}
                    src={currentTrack.src}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleNext}
                />

                {/* Scrubber */}
                <div className="flex-grow w-full flex items-center gap-6">
                    <span className="text-[10px] font-mono tabular-nums text-outline tracking-widest">{formatTime(currentTime)}</span>
                    
                    <div className="relative h-1 flex-grow group">
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            aria-label="Seek track"
                        />
                        <div className="absolute inset-y-0 left-0 right-0 bg-on-surface/5 rounded-full overflow-hidden">
                            <motion.div 
                                className={`h-full transition-colors duration-500 ${isPlaying ? 'bg-primary' : 'bg-secondary'}`}
                                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                            />
                        </div>
                    </div>
                    
                    <span className="text-[10px] font-mono tabular-nums text-outline tracking-widest">{formatTime(duration)}</span>
                </div>

                {/* Volume */}
                <div className="flex items-center gap-6 flex-shrink-0 w-48 hidden lg:flex">
                    <svg className="w-4 h-4 text-outline" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                    <div className="relative h-1 flex-grow group">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            aria-label="Volume"
                        />
                        <div className="absolute inset-y-0 left-0 right-0 bg-on-surface/5 rounded-full overflow-hidden">
                             <div className="h-full bg-outline-variant group-hover:bg-primary transition-colors" style={{ width: `${volume * 100}%` }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
