
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CLOTEX_DATA } from "@/constants/clotex-data";
import Container from "../Container";
import Link from "next/link";

const HeroParallax = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect: Image moves slower than scroll
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

    return (
        <div ref={containerRef} className="relative h-[95vh] w-full overflow-hidden bg-clotexDark">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 w-full h-full"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={CLOTEX_DATA.hero.image}
                    alt="Hero Background"
                    className="w-full h-[120%] object-cover object-center"
                />
            </motion.div>

            {/* Content */}
            <Container className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4"
                >
                    {CLOTEX_DATA.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-light tracking-widest uppercase mb-10 text-gray-300"
                >
                    {CLOTEX_DATA.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link
                        href={CLOTEX_DATA.hero.ctaLink}
                        className="bg-white text-black px-10 py-4 font-bold tracking-wider uppercase hover:bg-gray-200 transition-colors"
                    >
                        {CLOTEX_DATA.hero.ctaText}
                    </Link>
                </motion.div>
            </Container>
        </div>
    );
};

export default HeroParallax;
