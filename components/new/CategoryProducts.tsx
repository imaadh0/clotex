"use client";

import { getProductsByDummyCategory, type DummyProduct, type DummyCategory } from "@/constants/dummy-data";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import PriceView from "../PriceView";

interface Props {
  categories: DummyCategory[];
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState<DummyProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const fetchProducts = async (categorySlug: string) => {
    try {
      setLoading(true);
      // Simulate network delay for effect
      await new Promise(resolve => setTimeout(resolve, 300));
      const data = getProductsByDummyCategory(categorySlug);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]);

  const filteredProducts = products.filter(
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-8 pb-20 gap-12">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white border-b border-neutral-800 pb-2">
            Categories
          </h3>
          <ul className="space-y-4">
            <li key="all">
              <button
                onClick={() => setCurrentSlug('all')}
                className={`text-sm tracking-wide transition-colors duration-200 text-left w-full hover:text-white ${'all' === currentSlug ? "text-white font-semibold" : "text-neutral-500"
                  }`}
              >
                All Products
              </button>
            </li>
            {categories?.map((item) => (
              <li key={item?._id}>
                <button
                  onClick={() => setCurrentSlug(item?.slug?.current as string)}
                  className={`text-sm tracking-wide transition-colors duration-200 text-left w-full hover:text-white ${item?.slug?.current === currentSlug ? "text-white font-semibold" : "text-neutral-500"
                    }`}
                >
                  {item?.title}
                  {/* Mock counts just for visual matching if needed, or omit */}
                  {/* <span className="text-neutral-600 ml-2 text-xs">24</span> */}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Functional Slider */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-neutral-800 pb-2">
            Price Range
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-medium text-neutral-400">
              <span>LKR {priceRange[0].toLocaleString()}</span>
              <span>LKR {priceRange[1] >= 10000 ? "10,000+" : priceRange[1].toLocaleString()}</span>
            </div>

            <div className="relative h-6 flex items-center group">
              {/* Slider Track */}
              <div className="absolute w-full h-1 bg-neutral-800 rounded-full"></div>

              {/* Active Track Highlight */}
              <div
                className="absolute h-1 bg-white rounded-full"
                style={{
                  left: `${(priceRange[0] / 10000) * 100}%`,
                  right: `${100 - (priceRange[1] / 10000) * 100}%`
                }}
              ></div>

              {/* Range Inputs */}
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={priceRange[0]}
                onChange={(e) => {
                  const val = Math.min(Number(e.target.value), priceRange[1] - 500);
                  setPriceRange([val, priceRange[1]]);
                }}
                className="absolute w-full h-full appearance-none bg-transparent pointer-events-none z-20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto"
              />
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => {
                  const val = Math.max(Number(e.target.value), priceRange[0] + 500);
                  setPriceRange([priceRange[0], val]);
                }}
                className="absolute w-full h-full appearance-none bg-transparent pointer-events-none z-20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2">
              {currentSlug === 'all' ? 'Essentials' : currentSlug.replace('-', ' ')}
            </h1>
            <p className="text-neutral-500 text-sm tracking-widest uppercase">
              {loading ? "..." : `${filteredProducts.length} Products`}
            </p>
          </div>
          {/* Sorting or Filter trigger could go here */}
        </header>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="bg-neutral-900 aspect-[3/4] w-full"></div>
                <div className="h-4 bg-neutral-900 w-2/3"></div>
                <div className="h-4 bg-neutral-900 w-1/3"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {filteredProducts?.map((product) => (
              <div key={product?._id} className="group cursor-pointer">
                <Link href={`/product/${product?.slug?.current}`}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
                    {product?.images?.[0] && (
                      <Image
                        src={urlFor(product.images[0]).url()}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    {product?.status && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                          {product.status}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-white font-medium text-lg leading-tight group-hover:underline decoration-1 underline-offset-4">
                      {product.name}
                    </h3>
                    <p className="text-neutral-500 text-sm">
                      {product.variantInfo}
                    </p>
                    <div className="pt-2">
                      <PriceView
                        price={product?.price}
                        discount={product?.discount}
                        className="text-white font-medium"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-neutral-800 rounded-xl">
            <p className="text-neutral-500 mb-4">No products found in this category.</p>
            <button
              onClick={() => setCurrentSlug('all')}
              className="text-white underline underline-offset-4 hover:text-neutral-300"
            >
              View all products
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryProducts;
