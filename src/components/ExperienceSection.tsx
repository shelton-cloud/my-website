import React from 'react';
import { profile } from '@/data/profile';

export function ExperienceSection() {
    return (
        <section id="experience" className="bg-white p-8 rounded-lg shadow-lg mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gradient-itav mb-6">Experience</h2>

            <div className="space-y-6">
                {profile.experience.map((job, index) => (
                    <article
                        key={index}
                        className={`border-l-4 pl-4 py-2 ${job.current ? 'border-itav-start' : 'border-gray-300'}`}
                    >
                        <h3 className="text-2xl font-semibold">{job.role} - {job.company}</h3>
                        <p className="text-md text-gray-500 mb-2"><em>{job.period}</em></p>
                        <ul className="list-disc list-inside space-y-1">
                            {job.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
