import React from 'react';
import { profile } from '@/data/profile';

export function SkillsSection() {
    return (
        <section id="skills" className="bg-white p-8 rounded-lg shadow-lg mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gradient-itav mb-6">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(profile.skills).map(([category, skills]) => (
                    <div key={category} className="space-y-3">
                        <h3 className="text-xl font-semibold border-b-2 border-itav-end pb-2 inline-block">{category}</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {skills.map((skill: string, index: number) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
