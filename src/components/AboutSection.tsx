import React from 'react';
import Image from 'next/image';
import { profile } from '@/data/profile';

export function AboutSection() {
    return (
        <section id="about" className="bg-white p-8 rounded-lg shadow-lg mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gradient-itav mb-4">About Me</h2>

            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/3 relative aspect-[3/4] md:aspect-auto">
                    {/* Using unoptimized for local image simplicity during migration, can optimize later */}
                    <Image
                        src="/bryan-photo.jpg"
                        unoptimized
                        alt={`Photo of ${profile.name}`}
                        width={400}
                        height={500}
                        className="rounded-lg shadow-md object-cover w-full h-auto"
                    />
                </div>

                <div className="md:w-2/3 space-y-4">
                    {profile.bio.map((paragraph, index) => (
                        <p key={index} className="text-lg">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
