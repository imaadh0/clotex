"use client";

import React, { useState } from "react";
import { DummyProduct as Product } from "@/constants/dummy-data";
import AddToCartButton from "@/components/AddToCartButton";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface Props {
    product: Product;
}

const ProductInfo = ({ product }: Props) => {
    const [selectedSize, setSelectedSize] = useState("M");
    const sizes = ["S", "M", "L", "XL"];

    return (
        <div className="flex flex-col gap-8">
            {/* Size Selector */}
            <div>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                        Select Size
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="text-xs font-bold uppercase tracking-widest text-neutral-500 underline hover:text-white transition-colors">
                                SIZE GUIDE
                            </button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#0a0a0a] border-neutral-800 text-white max-w-2xl">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-black uppercase tracking-tighter text-white">
                                    Size Guide
                                </DialogTitle>
                            </DialogHeader>
                            <div className="py-6">
                                <p className="text-neutral-400 text-sm mb-6 font-light uppercase tracking-widest leading-relaxed border-b border-neutral-800 pb-4">
                                    Measurements below are in inches. Clotex fits are designed to be slightly oversized.
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead>
                                            <tr className="border-b border-neutral-800">
                                                <th className="py-4 font-bold uppercase tracking-widest text-neutral-500">Size</th>
                                                <th className="py-4 font-bold uppercase tracking-widest text-neutral-500">Chest</th>
                                                <th className="py-4 font-bold uppercase tracking-widest text-neutral-500">Length</th>
                                                <th className="py-4 font-bold uppercase tracking-widest text-neutral-500">Shoulder</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-neutral-300">
                                            <tr className="border-b border-neutral-900">
                                                <td className="py-4 font-bold">Small</td>
                                                <td className="py-4 font-light italic">42"</td>
                                                <td className="py-4 font-light italic">27"</td>
                                                <td className="py-4 font-light italic">19"</td>
                                            </tr>
                                            <tr className="border-b border-neutral-900">
                                                <td className="py-4 font-bold text-white">Medium</td>
                                                <td className="py-4 font-light italic">44"</td>
                                                <td className="py-4 font-light italic">28"</td>
                                                <td className="py-4 font-light italic">20"</td>
                                            </tr>
                                            <tr className="border-b border-neutral-900">
                                                <td className="py-4 font-bold">Large</td>
                                                <td className="py-4 font-light italic">46"</td>
                                                <td className="py-4 font-light italic">29"</td>
                                                <td className="py-4 font-light italic">21"</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 font-bold">X-Large</td>
                                                <td className="py-4 font-light italic">48"</td>
                                                <td className="py-4 font-light italic">30"</td>
                                                <td className="py-4 font-light italic">22"</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-8 p-4 bg-neutral-900/50 border border-neutral-800 rounded text-[10px] text-neutral-500 uppercase tracking-widest leading-relaxed">
                                    Tip: For a more fitted look, consider sizing down. Our heavy-weight fabric maintains its shape wash after wash.
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="grid grid-cols-4 gap-3">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`h-12 border rounded flex items-center justify-center text-sm font-bold transition-all duration-300 ${selectedSize === size
                                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                : "border-neutral-800 text-neutral-400 hover:border-neutral-500 hover:text-white"
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
                <AddToCartButton
                    product={product}
                    selectedSize={selectedSize}
                    className="w-full bg-white text-black h-14 font-black uppercase tracking-widest text-sm hover:bg-neutral-200 transition-all duration-300"
                    showIcon={false}
                />
                <button className="w-full h-14 border border-neutral-800 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    Save to Wishlist
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
