"use client";
// TEMPORARILY MODIFIED - using dummy data instead of Sanity

// Original Sanity imports:
// import {
//   internalGroqTypeReferenceTo,
//   SanityImageCrop,
//   SanityImageHotspot,
// } from "@/sanity.types";
// import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface DummyImage {
  _key: string;
  _type: "image";
  url: string;
}

interface Props {
  images?: DummyImage[];
}

const ImageView = ({ images = [] }: Props) => {
  const [active, setActive] = useState(images[0]);
  return (
    <div className="w-full space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={active?._key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-h-[550px] min-h-[450px] bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden group relative"
        >
          <Image
            src={active?.url || "/images/placeholder.png"}
            alt="productImage"
            width={700}
            height={700}
            priority
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image) => (
          <button
            key={image._key}
            onClick={() => setActive(image)}
            className={`relative w-20 h-24 flex-shrink-0 border-2 rounded-lg overflow-hidden transition-all ${active?._key === image._key
              ? "border-white ring-2 ring-white/20"
              : "border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-600"
              }`}
          >
            <Image
              src={image.url}
              alt={`Thumbnail ${image._key}`}
              fill
              sizes="80px"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageView;
