"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import emptyCart from "@/images/emptyCart.png";

export default function EmptyCart() {
  return (
    <div className="py-10 md:py-20 bg-[#0a0a0a] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 p-8 max-w-md w-full space-y-8"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="relative w-48 h-48 mx-auto"
        >
          <Image
            src={emptyCart}
            alt="Empty shopping cart"
            layout="fill"
            objectFit="contain"
            className="drop-shadow-lg opacity-80"
          />
          <motion.div
            animate={{
              x: [0, -10, 10, 0],
              y: [0, -5, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="absolute -top-4 -right-4 bg-white rounded-full p-2"
          >
            <ShoppingCart size={24} className="text-black" />
          </motion.div>
        </motion.div>

        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">
            Your cart is feeling lonely
          </h2>
          <p className="text-gray-400">
            It looks like you haven&apos;t added anything to your cart yet.
            Let&apos;s change that and find some amazing products for you!
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="block bg-white text-black border border-white text-center py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-gray-200 transition-colors"
          >
            Discover Products
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
