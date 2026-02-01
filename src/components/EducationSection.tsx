import React from 'react';
import { profile } from '@/data/profile';

export function EducationSection() {
    return (
        <section id="education" className="bg-white p-8 rounded-lg shadow-lg mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gradient-itav mb-6">Education & Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Certifications Column */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-itav-start">Certifications</h3>
                    <ul className="space-y-4">
                        {profile.certifications.map((cert: string, index: number) => (
                            <li key={index} className="bg-gray-50 p-3 rounded-md border-l-4 border-itav-start shadow-sm">
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Education Column */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-itav-end">Education</h3>
                    <ul className="space-y-4">
                        {profile.education.map((edu: any, index: number) => (
                            <li key={index} className="flex flex-col">
                                <span className="font-bold text-lg">{edu.school}</span>
                                <span className="text-gray-600 italic">{edu.period}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
