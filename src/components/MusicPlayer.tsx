"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const tracks = [
    {
        title: "Goode Co",
        src: "/goodeco.mp3",
        artist: "Life as Lions",
        description: "Driving guitars and powerful vocals define this high-energy rock track. Recorded in a garage studio in 2012, it captures the raw essence of our early sound.",
        image: "/bryan-photo.jpg"
    },
    {
        title: "Rock Shock and Load",
        src: "/rockshockload.mp3",
        artist: "Thee Armada",
        description: "An experimental fusion of funk rhythms and heavy distortion. This track was born from a late-night jam session that accidentally turned into a 10-minute epic.",
        image: "/bryan-photo.jpg"
    },
    {
        title: "Three Shades of Me",
        src: "/threeshades.mp3",
        artist: "Ignite the Morning",
        description: "Allows listeners to explore different facets of my musical journey. A melodic progression that builds into a complex, layered crescendo.",
        image: "/bryan-photo.jpg"
    }
];

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
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

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play().catch(e => console.error("Play error:", e));
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying, currentTrackIndex]);

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
        <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            {/* Left Side: Image & Info */}
            <div className="md:w-1/2 p-6 md:p-8 bg-gray-50 flex flex-col items-center justify-center text-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 shadow-lg rounded-xl overflow-hidden">
                    <Image
                        src={currentTrack.image}
                        alt={currentTrack.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{currentTrack.title}</h3>
                <p className="text-[var(--color-itav-start)] font-medium text-lg mb-4">{currentTrack.artist}</p>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full">
                    <p className="text-gray-600 text-sm leading-relaxed italic">
                        "{currentTrack.description}"
                    </p>
                </div>
            </div>

            {/* Right Side: Controls */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[var(--color-itav-end)] opacity-5 blur-3xl"></div>

                <audio
                    ref={audioRef}
                    src={currentTrack.src}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleNext}
                />

                {/* Progress Bar */}
                <div className="mb-8 relative z-10">
                    <div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-itav-mid)] hover:accent-[var(--color-itav-start)] transition-colors"
                    />
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center space-x-8 mb-8 relative z-10">
                    <button
                        onClick={handlePrev}
                        className="text-gray-400 hover:text-[var(--color-itav-start)] transition-colors transform hover:scale-110 focus:outline-none"
                        aria-label="Previous Track"
                    >
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                        </svg>
                    </button>

                    <button
                        onClick={handlePlayPause}
                        className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-itav-start)] to-[var(--color-itav-mid)] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none ring-4 ring-white"
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? (
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                        ) : (
                            <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>

                    <button
                        onClick={handleNext}
                        className="text-gray-400 hover:text-[var(--color-itav-start)] transition-colors transform hover:scale-110 focus:outline-none"
                        aria-label="Next Track"
                    >
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                        </svg>
                    </button>
                </div>

                {/* Volume */}
                <div className="flex items-center space-x-4 px-4 py-3 bg-gray-50 rounded-xl relative z-10">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-gray-500"
                    />
                </div>
            </div>
        </div>
    );
}
