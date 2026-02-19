"use client";

import { LEEMART_DATA } from "@/constants/leemart-data";
import Image from "next/image";
import Link from "next/link";
import { Layers, Ruler, ShieldCheck } from "lucide-react";
import Container from "@/components/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
    const { about } = LEEMART_DATA;
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect: Image moves slower than scroll
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

    const iconMap = {
        texture: Layers,
        straighten: Ruler,
        verified: ShieldCheck,
    };

    return (
        <div className="bg-[#121212] text-white font-display overflow-x-hidden min-h-screen">
            {/* Hero Section with Parallax */}
            <div ref={containerRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                    <Image
                        src={about.hero.image}
                        alt="About Lee Mart Hero"
                        fill
                        className="object-cover grayscale opacity-60 scale-105 blur-sm"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-10"></div>
                </motion.div>

                <div className="relative z-20 text-center px-4 max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-6"
                    >
                        {about.hero.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl font-light uppercase tracking-[0.3em] text-white/60 max-w-2xl mx-auto"
                    >
                        {about.hero.subtitle}
                    </motion.p>
                </div>
            </div>

            <Container>
                {/* Our Story Section */}
                <section className="py-24 md:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <span className="text-xs font-bold tracking-[0.5em] text-white/40 uppercase">
                                {about.story.chapter}
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-tight">
                                {about.story.title}
                            </h2>
                            <div className="h-1 w-24 bg-white"></div>
                            {about.story.content.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-lg md:text-xl text-white/60 leading-relaxed font-light"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <div className="aspect-[4/5] bg-neutral-900 overflow-hidden border border-white/10 relative">
                                <Image
                                    src={about.story.image}
                                    alt="Our Story"
                                    fill
                                    className="object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 bg-white text-black p-8 md:p-12 hidden md:block z-10">
                                <p className="text-3xl md:text-4xl font-black italic leading-none">
                                    EST. 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>

            {/* Craftsmanship Section */}
            <section className="py-24 md:py-32 bg-[#0f0f0f]">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold tracking-[0.5em] text-white/40 uppercase">
                                Standard of Excellence
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mt-4">
                                Craftsmanship
                            </h2>
                        </div>
                        <p className="text-white/40 text-right font-light uppercase tracking-widest border-r-2 border-white/10 pr-6 hidden md:block">
                            Premium Materials <br /> Expert Tailoring
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {about.craftsmanship.map((item, index) => {
                            const Icon = iconMap[item.icon as keyof typeof iconMap] || Layers;
                            return (
                                <div
                                    key={index}
                                    className="group border border-white/10 p-8 md:p-10 hover:bg-white/5 transition-all duration-300"
                                >
                                    <Icon className="w-10 h-10 mb-6 text-white/40 group-hover:text-white transition-colors" />
                                    <h3 className="text-xl md:text-2xl font-bold italic mb-4 uppercase">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Mission Section */}
            <section className="py-24 md:py-32 relative">
                <Container className="text-center">
                    <span className="text-xs font-bold tracking-[0.5em] text-white/40 uppercase mb-8 block">
                        Philosophy
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase mb-12 leading-none">
                        {about.mission.title}
                    </h2>
                    <div className="h-[1px] w-32 md:w-1/2 bg-white/20 mx-auto mb-12"></div>
                    <p className="text-xl md:text-3xl font-light text-white leading-tight italic max-w-4xl mx-auto">
                        &ldquo;{about.mission.quote}&rdquo;
                    </p>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 border-t border-white/5 bg-[#0f0f0f]">
                <Container className="flex flex-col items-center">
                    <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-12 text-center">
                        Wear the Identity
                    </h3>
                    <Link
                        href="/shop"
                        className="px-12 py-5 bg-white text-black font-black uppercase italic tracking-widest text-lg hover:bg-neutral-300 transition-all"
                    >
                        Explore Collection
                    </Link>
                </Container>
            </section>
        </div>
    );
};

export default AboutPage;
