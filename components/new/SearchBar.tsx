"use client";
import { Loader2, Search, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
// TEMPORARILY COMMENTED OUT - Sanity client
// import { client } from "@/sanity/lib/client";
import { searchDummyProducts, type DummyProduct } from "@/constants/dummy-data";
import { Input } from "../ui/input";
import AddToCartButton from "../AddToCartButton";
import { urlFor } from "@/sanity/lib/image";
// import { Product } from "@/sanity.types";
import PriceView from "../PriceView";
import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<DummyProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Search products using dummy data
  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }

    setLoading(true);
    try {
      // Original Sanity code:
      // const query = `*[_type == "product" && name match $search] | order(name asc)`;
      // const params = { search: `${search}*` };
      // const response = await client.fetch(query, params);
      // setProducts(response);

      // Dummy data search:
      const response = searchDummyProducts(search);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  // Debounce input changes
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [search, fetchProducts]);
  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger
        onClick={() => setShowSearch(!showSearch)}
        className="flex items-center hover:cursor-pointer"
      >
        <Search className="w-5 h-5 hover:text-darkColor hoverEffect" />
      </DialogTrigger>
      <DialogContent className="max-w-5xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden bg-[#0a0a0a] border-neutral-800 text-white">
        <DialogHeader>
          <DialogTitle className="mb-3 text-white">Search Products</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Search for t-shirts, pants, denim..."
              className="flex-1 rounded-md py-5 font-semibold bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <X
                onClick={() => setSearch("")}
                className="w-4 h-4 absolute top-3 right-11 hover:text-red-500 hoverEffect cursor-pointer"
              />
            )}
            <button
              type="submit"
              className="absolute right-0 top-0 bg-neutral-800 w-10 h-full flex items-center justify-center rounded-tr-md hover:bg-white hover:text-black hoverEffect"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </DialogHeader>
        <div className="w-full h-full overflow-y-scroll border border-neutral-800 rounded-md bg-[#0a0a0a]">
          <div className="">
            {loading ? (
              <p className="flex items-center px-6 gap-1 py-10 text-center text-white font-semibold">
                <Loader2 className="w-5 h-5 animate-spin" />
                Searching...
              </p>
            ) : products?.length ? (
              products.map((product) => (
                <div
                  key={product?._id}
                  className="bg-[#0a0a0a] overflow-hidden border-b border-neutral-800"
                >
                  <div className="flex items-center p-1">
                    <Link
                      href={`/product/${product?.slug?.current}`}
                      onClick={() => setShowSearch(false)}
                      className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 border border-neutral-800 rounded-md overflow-hidden group"
                    >
                      {product?.images && (
                        <Image
                          width={200}
                          height={200}
                          src={urlFor(product?.images[0]).url()}
                          alt={"productImage"}
                          className="object-cover w-full h-full group-hover:scale-110 hoverEffect"
                        />
                      )}
                    </Link>
                    <div className="px-4 py-2 flex-grow">
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/product/${product?.slug?.current}`}
                          onClick={() => setShowSearch(false)}
                        >
                          <h3 className="text-sm md:text-lg font-semibold text-white line-clamp-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-neutral-400 line-clamp-1">
                            {product?.variantInfo}
                          </p>
                        </Link>
                        <PriceView
                          price={product?.price}
                          discount={product?.discount}
                          className="md:text-lg"
                        />
                      </div>

                      <div className="w-60 mt-1">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        <AddToCartButton product={product as any} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 font-semibold tracking-wide">
                {search && !products?.length ? (
                  <p className="text-neutral-400">
                    Nothing matches{" "}
                    <span className="underline text-red-500">{search}</span>.
                    Try something else.
                  </p>
                ) : (
                  <p className="text-neutral-500 flex items-center justify-center gap-1">
                    <Search className="w-5 h-5" />
                    Search and explore products from CLOTEX.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
