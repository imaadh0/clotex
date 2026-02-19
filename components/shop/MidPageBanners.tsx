import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { MID_PAGE_BANNERS_QUERYResult } from "@/sanity.types";

interface MidPageBannersProps {
    banners: MID_PAGE_BANNERS_QUERYResult;
}

export default function MidPageBanners({ banners }: MidPageBannersProps) {
    if (!banners || banners.length === 0) return null;

    const leftBanner = banners.find((b) => b.placement === "mid-left");
    const rightBanner = banners.find((b) => b.placement === "mid-right");

    return (
        <section className="py-12 px-6 md:px-12">
            <div className="container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Banner */}
                    {leftBanner && leftBanner.ctaLink && leftBanner.image && (
                        <Link
                            href={leftBanner.ctaLink}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[400px]"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={urlFor(leftBanner.image).url()}
                                    alt={leftBanner.title || "Banner"}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-3xl md:text-4xl font-light mb-3">
                                        {leftBanner.title}
                                    </h3>
                                    {leftBanner.description && (
                                        <p className="text-lg font-light mb-4 opacity-90 line-clamp-2">
                                            {leftBanner.description}
                                        </p>
                                    )}
                                    {leftBanner.ctaText && (
                                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-neutral-200 rounded-full transition-colors font-bold uppercase tracking-wider text-sm">
                                            {leftBanner.ctaText}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Right Banner */}
                    {rightBanner && rightBanner.ctaLink && rightBanner.image && (
                        <Link
                            href={rightBanner.ctaLink}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[400px]"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={urlFor(rightBanner.image).url()}
                                    alt={rightBanner.title || "Banner"}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-3xl md:text-4xl font-light mb-3">
                                        {rightBanner.title}
                                    </h3>
                                    {rightBanner.description && (
                                        <p className="text-lg font-light mb-4 opacity-90 line-clamp-2">
                                            {rightBanner.description}
                                        </p>
                                    )}
                                    {rightBanner.ctaText && (
                                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-neutral-200 rounded-full transition-colors font-bold uppercase tracking-wider text-sm">
                                            {rightBanner.ctaText}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
