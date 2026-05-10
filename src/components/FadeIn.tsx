"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    fullWidth?: boolean;
}

export function FadeIn({ children, delay = 0, direction = 'up', fullWidth = false }: FadeInProps) {
    const directions = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 },
    };

    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                ...directions[direction] 
            }}
            whileInView={{ 
                opacity: 1, 
                x: 0, 
                y: 0 
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={fullWidth ? "w-full" : ""}
        >
            {children}
        </motion.div>
    );
}
