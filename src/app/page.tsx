import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profile } from '@/data/profile';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfc] text-gray-900 font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-4 md:px-8 flex items-center justify-center py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 max-w-6xl w-full">

          {/* Left Column: Circular Photo */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/bryan-photo.jpg"
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col text-center md:text-left max-w-lg">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">Hello</h1>

            <h2 className="text-xl font-bold mb-2">A Bit About Me</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {profile.bio[0]}
            </p>

            {/* Circular Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              <Link href="/resume" className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-[#4270d8] via-[#955ac9] to-[#f48c3b] bg-[length:300%_100%] bg-left hover:scale-105 transition-all duration-300 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg shadow-blue-300/50">
                Resume
              </Link>

              <Link href="/projects" className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-[#4270d8] via-[#955ac9] to-[#f48c3b] bg-[length:300%_100%] bg-center hover:scale-105 transition-all duration-300 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg shadow-purple-300/50">
                Projects
              </Link>

              <Link href="/contact" className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-[#4270d8] via-[#955ac9] to-[#f48c3b] bg-[length:300%_100%] bg-right hover:scale-105 transition-all duration-300 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg shadow-orange-300/50">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
