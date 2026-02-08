import React from 'react';
import { profile } from '@/data/profile';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-gray-200 mt-20 py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Phone */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600">{profile.contact.phone}</p>
                    </div>

                    {/* Column 2: Email */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                        <a href={`mailto:${profile.contact.email}`} className="text-gray-600 hover:text-black transition-colors">
                            {profile.contact.email}
                        </a>
                    </div>

                    {/* Column 3: Follow Me & Copyright */}
                    <div className="flex flex-col md:items-end">
                        <h3 className="font-bold text-gray-900 mb-2">Follow Me</h3>
                        <div className="flex space-x-4 mb-4">
                            {profile.social.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black transition-colors"
                                    aria-label={link.name}
                                >
                                    {link.name === 'LinkedIn' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.271V1.729C24 .774 23.2 0 22.225 0z" />
                                        </svg>
                                    )}
                                    {link.name === 'SoundCloud' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M11.566 12.693l-.005.176c-.007 1.884-.015 3.768-.021 5.653 0 .504.1.61.64.61 1.76-.002 3.52-.004 5.28-.002.54 0 .644-.11.643-.653-.002-.82.003-1.641-.002-2.46-.01-.98.243-1.226 1.258-1.246 1.125-.022 1.892-.68 1.942-1.636.054-1.026-.64-1.829-1.576-1.928-.597-.063-1.2.043-1.802.043-.195 0-.253-.045-.25-.246.012-.897-.06-1.78.36-2.618.527-1.05 1.39-1.69 2.535-1.84.42-.055.845-.098 1.267-.156.12-.016.295-.08.356-.164.71-1.036.71-1.036 1.95.105.15.138.31.29.387.48.517 1.282.26 2.458-.696 3.424-.593.6-1.32.996-2.14 1.25-.13.04-.158.093-.157.21.002.83.003 1.66-.002 2.49-.003.524-.127.636-.632.637-1.76.002-3.52.004-5.28.002-.516 0-.616-.118-.615-.626.004-1.885.003-3.77.003-5.654 0-.173-.004-.347-.01-.518-.046-1.16-.275-2.29-.865-3.32C13.253 3.63 12.015 3 10.66 3c-1.354 0-2.584.61-3.414 1.64-.176.22-.32.466-.453.716-.62 1.173-.762 2.45-.48 3.754.043.193.008.26-.145.362-.68.45-1.055 1.117-1.206 1.912-.023.123-.082.235-.133.35-.38 1.29.13 2.443 1.206 3.16.14.094.183.16.146.333-.23.96-.455 1.925-.694 2.885-.055.22.043.32.223.32 2.112-.002 4.225-.004 6.337-.002.505 0 .61-.1.61-.606.006-1.67.013-3.342.02-5.013 0-.036 0-.072-.004-.108zM9.366 22H0V11h9.366v11z" />
                                        </svg>
                                    )}
                                    {link.name === 'Email' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    )}
                                    {/* Fallback for other links */}
                                    {link.name !== 'LinkedIn' && link.name !== 'SoundCloud' && link.name !== 'Email' && (
                                        <span className="text-sm font-medium">{link.name}</span>
                                    )}
                                </a>
                            ))}
                        </div>
                        <div className="text-xs text-gray-500 mt-auto">
                            <p>© 2035 By {profile.name}.</p>
                            <p>Powered and secured by Vercel</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
