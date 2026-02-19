"use client";

import { LEEMART_DATA } from "@/constants/leemart-data";
import Container from "../Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PriceFormatter from "../PriceFormatter";

const NewArrivals = () => {
    return (
        <section className="bg-leemart-dark py-20 border-b border-leemart-gray">
            <Container>
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
                        New Arrivals
                        <span className="block mt-2 h-1 w-12 bg-white" />
                    </h2>
                    <Link
                        href="/shop"
                        className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors group"
                    >
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
                    {LEEMART_DATA.newArrivals.map((product) => (
                        <Link
                            key={product._id}
                            href={`/product/${product.slug}`}
                            className="group relative block"
                        >
                            <div className="aspect-[4/5] bg-leemart-gray overflow-hidden mb-4 relative">
                                {/* Badge */}
                                <div className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
                                    New
                                </div>

                                {/* Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />
                            </div>

                            <div className="">
                                <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-1 group-hover:underline decoration-1 underline-offset-4">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 text-xs font-medium tracking-wider pt-1">
                                    <PriceFormatter amount={product.price} className="text-gray-400 text-xs font-medium" />
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:hidden flex justify-center">
                    <Link
                        href="/shop"
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white border-b border-white pb-1"
                    >
                        View All
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default NewArrivals;
