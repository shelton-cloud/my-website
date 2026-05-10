import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center">
          <div className="mb-8 relative inline-block">
            <h1 className="text-[120px] md:text-[200px] font-display font-bold leading-none tracking-tighter opacity-10">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="label-sm text-secondary tracking-[0.5em] font-bold">Signal Lost</span>
            </div>
          </div>
          
          <h2 className="headline-lg mb-6 uppercase tracking-tight">System Error: Path Not Found</h2>
          <p className="body-md text-outline max-w-md mx-auto mb-12 leading-relaxed">
            The resource you are looking for has been moved, deleted, or never existed in this sector.
          </p>
          
          <Link 
            href="/" 
            className="px-10 py-5 bg-on-surface text-surface font-display font-bold rounded-sm hover:bg-primary hover:text-on-primary transition-all duration-300 uppercase tracking-wider text-sm inline-block"
          >
            Re-route to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
