import React from 'react';
import { profile } from '@/data/profile';

export function Footer() {
    return (
        <>
            <section id="contact" className="text-center scroll-mt-24">
                <h2 className="text-3xl font-bold text-gradient-itav mb-4">Get In Touch</h2>
                <p className="text-lg mb-6">You can find me in the following places:</p>

                <div className="flex justify-center space-x-6">
                    {profile.social.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target={link.url.startsWith('http') ? "_blank" : undefined}
                            className="text-itav-start hover:text-itav-mid text-lg transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </section>

            <footer className="text-center p-8 mt-12 text-gray-500">
                <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            </footer>
        </>
    );
}
