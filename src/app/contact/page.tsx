import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profile } from '@/data/profile';

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fcfcfc] text-gray-900 font-sans">
            <Header />
            <main className="flex-grow container mx-auto px-4 md:px-8 py-8 flex items-center justify-center">
                <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-4">
                            <span className="text-gray-500 font-medium">Email</span>
                            <a href={`mailto:${profile.contact.email}`} className="text-xl font-bold text-gray-900 hover:text-[var(--color-itav-start)] transition-colors">
                                {profile.contact.email}
                            </a>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-4">
                            <span className="text-gray-500 font-medium">Phone</span>
                            <span className="text-xl font-bold text-gray-900">
                                {profile.contact.phone}
                            </span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-4">
                            <span className="text-gray-500 font-medium">Location</span>
                            <span className="text-xl font-bold text-gray-900">
                                {profile.contact.location}
                            </span>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-gray-500 font-medium mb-4">Social Profiles</h3>
                            <div className="flex space-x-6">
                                {profile.social.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-[var(--color-itav-mid)] transition-colors"
                                    >
                                        <span className="text-lg font-bold">{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
