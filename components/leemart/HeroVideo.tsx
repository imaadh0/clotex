"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LEEMART_DATA } from "@/constants/leemart-data";
import Container from "../Container";
import Link from "next/link";

const HeroVideo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect: Video moves slower than scroll
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

    return (
        <div ref={containerRef} className="relative h-[95vh] w-full overflow-hidden bg-leemart-dark">
            {/* Video Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 w-full h-full"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[120%] object-cover"
                >
                    <source src="/hero-video/Whisk_kjmmbjn5ydoiljnj1iy0ymytcjy3qtlmjtyl1im.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            {/* Content */}
            <Container className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4"
                >
                    {LEEMART_DATA.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-light tracking-widest uppercase mb-10 text-gray-300"
                >
                    {LEEMART_DATA.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link
                        href={LEEMART_DATA.hero.ctaLink}
                        className="bg-white text-black px-10 py-4 font-bold tracking-wider uppercase hover:bg-gray-200 transition-colors"
                    >
                        {LEEMART_DATA.hero.ctaText}
                    </Link>
                </motion.div>
            </Container>
        </div>
    );
};

export default HeroVideo;
