"use client";

import { LEEMART_DATA } from "@/constants/leemart-data";
import Container from "../Container";
import Link from "next/link";

const IconsCollection = () => {
    return (
        <section className="bg-leemart-dark py-20">
            <Container>
                <div className="flex justify-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight text-center">
                        The Icons
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {LEEMART_DATA.collections.map((collection, index) => (
                        <Link
                            key={index}
                            href={collection.link}
                            className="relative aspect-video group overflow-hidden bg-leemart-gray block"
                        >
                            <img
                                src={collection.image}
                                alt={collection.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                                <p className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase mb-2">
                                    {collection.subtitle}
                                </p>
                                <h3 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mb-6">
                                    {collection.title}
                                </h3>
                                <div>
                                    <div className="inline-block bg-white text-black px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors">
                                        {collection.buttonText}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default IconsCollection;
