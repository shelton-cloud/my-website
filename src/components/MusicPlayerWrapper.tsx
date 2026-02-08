"use client";

import dynamic from 'next/dynamic';
import React from 'react';

const MusicPlayer = dynamic(() => import('./MusicPlayer'), { ssr: false });

export default function MusicPlayerWrapper() {
    return <MusicPlayer />;
}
