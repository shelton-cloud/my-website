import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col selection:bg-primary/30">
      <main className="flex-grow pt-32 pb-24 overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Visual Impact */}
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <div className="relative w-full aspect-square max-w-[440px] mx-auto lg:mx-0">
                  {/* Decorative Glow - Using Level 3 Glassmorphism logic */}
                  <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full"></div>
                  
                  <div className="relative w-full h-full rounded-DEFAULT overflow-hidden border border-on-surface/10 shadow-2xl">
                    <Image
                      src="/bryan-photo.jpg"
                      alt={profile.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 440px"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      priority
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 flex flex-col pt-2">
              <FadeIn direction="left" delay={0.2}>
                <div className="mb-4">
                  <span className="label-sm text-secondary tracking-[0.4em] font-bold">Creative Technologist</span>
                </div>
                
                <h1 className="headline-xl mb-10 text-balance uppercase">
                  Hello.
                </h1>
              </FadeIn>

              <FadeIn direction="left" delay={0.4}>
                <div className="space-y-6 mb-12 max-w-2xl">
                  <p className="body-lg text-on-surface text-xl md:text-2xl leading-tight font-medium">
                    {profile.bio[0]}
                  </p>
                  <p className="body-md text-on-surface-variant text-lg leading-relaxed">
                    {profile.bio[1]}
                  </p>
                </div>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn direction="up" delay={0.6}>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/resume" 
                    className="px-10 py-5 bg-primary-container text-on-primary-container font-display font-bold rounded-DEFAULT hover:bg-primary transition-all duration-300 uppercase tracking-wider text-sm outer-glow-indigo"
                  >
                    View Resume
                  </Link>

                  <Link 
                    href="/projects" 
                    className="px-10 py-5 border border-on-surface/20 text-on-surface font-display font-bold rounded-DEFAULT hover:bg-on-surface/5 hover:border-on-surface/40 transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    Explore Projects
                  </Link>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>

        {/* Technical Detail Strip */}
        <div className="mt-32 border-y border-on-surface/5 bg-surface-container-low/30 py-16 backdrop-blur-sm">
            <div className="container-max">
              <FadeIn direction="up" delay={0.8}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
                    {Object.keys(profile.skills).slice(0, 4).map((category) => (
                        <div key={category} className="flex flex-col gap-3">
                            <span className="label-sm text-outline-variant font-bold tracking-widest">{category}</span>
                            <span className="body-md text-on-surface leading-snug">
                                {profile.skills[category as keyof typeof profile.skills].slice(0, 3).join(' / ')}
                            </span>
                        </div>
                    ))}
                </div>
              </FadeIn>
            </div>
        </div>
      </main>
    </div>
  );
}
