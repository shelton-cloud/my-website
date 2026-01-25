import React from 'react';
import { profile } from '@/data/profile';

export function ProjectsSection() {
    return (
        <section id="projects" className="bg-white p-8 rounded-lg shadow-lg mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gradient-itav mb-6">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.projects.map((project, index) => (
                    <article key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-700">
                            {project.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
