"use client";

import React from 'react';
import Link from 'next/link';
import { profile } from '@/data/profile';

export function Footer() {
    return (
        <footer className="w-full py-24 border-t border-on-surface/5 bg-surface-container-lowest/30 backdrop-blur-md">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 flex flex-col items-start w-full">
                        <Link href="/" className="group flex items-center gap-4 mb-10">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="font-display font-bold text-2xl tracking-tight uppercase group-hover:text-primary transition-colors">
                                {profile.name}
                            </span>
                        </Link>
                        <p className="body-lg text-on-surface-variant leading-relaxed mb-10 w-full">
                            {profile.personal.journey}
                        </p>
                        <div className="flex gap-3">
                             {profile.social.filter(s => s.name !== 'Email').map((s) => (
                                 <a 
                                    key={s.name} 
                                    href={s.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-full border border-on-surface/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                                    aria-label={s.name}
                                 >
                                     {s.name === 'LinkedIn' && (
                                         <svg className="w-4 h-4 fill-on-surface/60 group-hover:fill-primary transition-colors" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                     )}
                                     {s.name === 'GitHub' && (
                                         <svg className="w-4 h-4 fill-on-surface/60 group-hover:fill-primary transition-colors" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 3.518 1.305 4.376.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                     )}
                                     {s.name === 'SoundCloud' && (
                                         <svg className="w-4 h-4 fill-on-surface/60 group-hover:fill-primary transition-colors" viewBox="0 0 24 24"><path d="M7 17.167c-.201 0-.395-.018-.585-.049v-7.14c.19-.033.384-.051.585-.051.559 0 1.082.131 1.545.362v6.517c-.463.23-.986.361-1.545.361zm-4-.413c-.157 0-.31-.018-.458-.049v-4.103c.148-.031.301-.051.458-.051.503 0 .973.125 1.387.345v3.513c-.414.22-.884.345-1.387.345zm-1.896-.549c-.068 0-.135-.008-.198-.021-.001-.486-.002-1.523-.002-1.921.063-.014.13-.021.198-.021.321 0 .624.088.896.241v1.481c-.272.154-.575.241-.896.241zm6.896.697c-.311 0-.613-.04-.9-.115v-8.384c.287-.076.589-.116.9-.116 1.002 0 1.933.407 2.624 1.071v6.372c-.691.664-1.622 1.072-2.624 1.072zm11.235-8.402c0-.495-.27-.923-.674-1.155-.067-.038-.138-.07-.212-.095-.236-.073-.489-.113-.749-.113-.199 0-.392.023-.578.067-.091.021-.179.05-.264.086-.07.03-.138.064-.203.104-.083.05-.162.106-.236.168-.073.061-.14.128-.201.2-.016.02-.032.04-.047.061-.415.545-.666 1.218-.666 1.947 0 .195.018.385.053.57.014.076.033.15.056.223.013.04.027.079.043.118.064.16.141.312.229.453.033.053.068.105.105.155.051.068.106.133.165.195.039.041.08.08.121.118.118.113.25.212.392.296.02.012.041.023.062.034.223.117.478.183.749.183.197 0 .388-.035.57-.1.085-.031.167-.071.246-.118.082-.049.159-.105.23-.168.032-.029.062-.059.091-.09.01-.011.02-.021.03-.033.411-.479.664-1.102.664-1.78zm4.765 2.148c-.015-.008-.03-.02-.044-.03-.021-.013-.043-.024-.064-.036-.217-.117-.468-.184-.736-.184-.216 0-.424.043-.616.12-.046.019-.091.04-.135.064-.06.033-.117.07-.172.11-.016.012-.032.023-.048.036-.089.068-.171.144-.245.228-.016.018-.031.037-.046.056-.165.213-.292.455-.373.719-.015.048-.028.097-.039.147-.021.088-.032.179-.032.272 0 .193.048.376.133.535.011.02.022.041.034.06.011.018.022.036.034.053.076.121.166.232.269.328.016.015.032.03.049.045.023.018.046.036.071.053.014.01.027.02.041.03.204.144.452.228.719.228.188 0 .369-.042.53-.118.118-.056.226-.13.32-.218.003-.003.007-.006.01-.01.066-.063.125-.133.176-.209.006-.01.011-.019.016-.03.093-.146.163-.306.205-.478.016-.061.027-.123.033-.186.005-.054.008-.109.008-.165 0-.583-.178-1.124-.482-1.573zm-3.056 6.35c.162-.007.319-.032.472-.072.086-.023.17-.051.251-.085.163-.069.313-.158.449-.263.023-.017.045-.035.066-.053.111-.091.209-.196.294-.311.021-.028.041-.057.059-.086.13-.211.226-.448.283-.703.014-.061.024-.123.031-.186.008-.073.012-.148.012-.224 0-.173-.024-.34-.068-.498-.016-.057-.035-.113-.058-.168-.006-.014-.012-.028-.018-.042-.065-.147-.149-.283-.248-.406-.001-.001-.002-.002-.003-.003-.017-.02-.034-.04-.052-.06-.017-.018-.035-.036-.053-.053-.075-.078-.159-.148-.25-.208-.009-.006-.018-.012-.027-.018-.179-.119-.383-.198-.602-.232-.057-.008-.115-.013-.174-.014h-1.636v3.385h1.603zm6.216-1.547c-.015-.008-.031-.02-.046-.03-.012-.008-.024-.015-.036-.022-.249-.16-.549-.253-.871-.253-.263 0-.509.062-.725.172-.055.028-.108.061-.158.097-.044.032-.086.068-.126.107-.018.017-.035.035-.052.053-.08.084-.151.178-.21.281-.005.008-.009.017-.014.025-.113.2-.188.427-.217.67-.006.052-.01.105-.01.159 0 .151.026.295.073.43.01.028.021.056.034.083.007.014.014.028.022.042.062.115.138.22.225.313.018.019.037.037.056.055.032.029.066.057.101.083.023.017.047.034.072.05.207.135.454.214.719.214.223 0 .433-.056.619-.155.093-.05.179-.112.256-.183.005-.005.01-.01.015-.015.064-.059.12-.125.168-.198.01-.014.02-.029.029-.044.084-.139.146-.293.183-.458.019-.084.029-.17.029-.259 0-.462-.167-.883-.435-1.21zm2.715.127c-.005-.016-.01-.031-.016-.047-.058-.168-.143-.323-.247-.463-.008-.01-.016-.02-.024-.031-.106-.134-.233-.25-.376-.346-.023-.016-.046-.031-.07-.046-.217-.132-.469-.208-.739-.208-.184 0-.358.035-.516.1-.061.025-.12.055-.176.089-.046.028-.09.059-.131.093-.021.017-.042.035-.062.053-.08.072-.153.153-.217.241-.011.015-.022.03-.032.046-.11.163-.193.344-.245.541-.016.059-.028.12-.036.183-.008.067-.012.135-.012.204 0 .151.02.296.058.434.013.047.029.093.048.138.01.023.021.045.032.067.069.141.156.269.261.38.02.021.041.041.063.061.034.03.07.059.108.086.028.02.057.039.087.057.199.119.43.189.679.189.188 0 .367-.039.529-.11.1-.044.192-.102.275-.171.01-.008.019-.017.028-.025.076-.08.143-.169.196-.267.01-.02.02-.041.029-.062.072-.163.121-.341.144-.528.01-.082.015-.166.015-.251 0-.154-.015-.303-.044-.447zM24 13h-2.148c.081-.318.148-.646.148-1 0-.115-.011-.227-.022-.34h2.022v1.34zm-7.615-5c.603 0 1.156.22 1.449.566.053.062.101.129.143.2.144.238.235.534.256.848.004.058.007.116.007.176v.21c-.015.342-.119.661-.291.932-.046.073-.1.142-.16.206-.328.349-.854.552-1.404.552h-2.385v-3.69h2.385z"/></svg>
                                     )}
                                 </a>
                             ))}
                        </div>
                    </div>

                    {/* Navigation Grid */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
                        <div>
                            <h4 className="label-sm text-primary mb-8 tracking-[0.2em] font-bold">Sitemap</h4>
                            <ul className="space-y-4">
                                <li><Link href="/" className="body-md text-on-surface-variant hover:text-primary transition-all">System Home</Link></li>
                                <li><Link href="/resume" className="body-md text-on-surface-variant hover:text-primary transition-all">Resume.md</Link></li>
                                <li><Link href="/projects" className="body-md text-on-surface-variant hover:text-primary transition-all">Projects.log</Link></li>
                                <li><Link href="/contact" className="body-md text-on-surface-variant hover:text-primary transition-all">Contact.sh</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="label-sm text-secondary mb-8 tracking-[0.2em] font-bold">Network</h4>
                            <ul className="space-y-4">
                                {profile.social.map((link) => (
                                    <li key={link.name}>
                                        <a 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="body-md text-on-surface-variant hover:text-secondary transition-all flex items-center gap-2"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-on-surface/20"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="label-sm text-tertiary mb-8 tracking-[0.2em] font-bold">Identity</h4>
                            <div className="space-y-1 mb-6">
                                <p className="body-md text-on-surface font-bold uppercase tracking-tight">{profile.contact.location}</p>
                                <p className="label-sm text-on-surface-variant">UTC-08:00 / LAX</p>
                            </div>
                            <a href={`mailto:${profile.contact.email}`} className="body-md text-primary hover:text-primary-container transition-all block break-all font-mono text-sm">
                                {profile.contact.email}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="label-sm text-outline-variant tracking-widest tabular-nums">
                            © {new Date().getFullYear()} / BRYAN SHELTON
                        </p>
                        <div className="hidden md:block w-px h-4 bg-on-surface/10"></div>
                        <p className="label-sm text-outline-variant tracking-[0.2em]">
                            ALL SYSTEMS NOMINAL
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                             <span className="text-[10px] font-mono text-outline-variant uppercase tracking-tighter">Status: Online</span>
                        </div>
                        <p className="label-sm text-outline-variant flex items-center gap-3">
                            BUILT WITH <span className="text-secondary animate-pulse">●</span> NEXT.JS 16
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
