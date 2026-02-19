import Link from "next/link";
import { Instagram } from "lucide-react";

export default function InstagramFeed() {
    return (
        <section className="py-20 bg-nuziiBeige/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-light text-nuziiText mb-2">
                            Style Inspiration
                        </h2>
                        <p className="text-nuziiTextLight">
                            See how our community styles Nuzii. Soft tones. Simple fits. Effortless looks.
                        </p>
                    </div>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-nuziiRoseGoldDark font-medium hover:text-nuziiText transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>Follow @Nuzii</span>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative group cursor-pointer"
                        >
                            {/* Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 group-hover:bg-gray-200 transition-colors">
                                Insta {i + 1}
                            </div>

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
