import React from 'react';
import { profile } from '@/data/profile';

export function PersonalSection() {
    return (
        <section id="personal" className="bg-white p-8 rounded-lg shadow-lg mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gradient-itav mb-6">Life & Interests</h2>

            <div className="mb-8 text-lg text-gray-700 leading-relaxed italic border-l-4 border-itav-mid pl-4">
                "{profile.personal.journey}"
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Family Card */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">👨‍👩‍👦</span>
                        <h3 className="text-xl font-semibold text-itav-start">Family First</h3>
                    </div>
                    <p className="text-gray-700">{profile.personal.family}</p>
                </div>

                {/* Ripley Card */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🐕</span>
                        <h3 className="text-xl font-semibold text-itav-mid">Ripley</h3>
                    </div>
                    <p className="text-gray-700">{profile.personal.pets}</p>
                </div>

                {/* Music Card */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🎸</span>
                        <h3 className="text-xl font-semibold text-itav-end">Music</h3>
                    </div>
                    <p className="text-gray-700">{profile.personal.music}</p>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Off the Clock</h3>
                <div className="flex flex-wrap gap-2">
                    {profile.personal.hobbies.map((hobby, index) => (
                        <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                            {hobby}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
