// TEMPORARILY MODIFIED - using DummyProduct instead of Sanity Product
// import { Product } from "@/sanity.types";
import { DummyProduct as Product } from "@/constants/dummy-data";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import PriceView from "./PriceView";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import Title from "./Title";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-lg overflow-hidden group text-sm">
      <div className="overflow-hidden relative bg-neutral-900 border-b border-neutral-800">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt="productImage"
              width={500}
              height={500}
              // loading="lazy"
              priority
              className={`w-full h-72 object-contain overflow-hidden  transition-transform duration-500 ${product?.stock !== 0 && "group-hover:scale-105"}`}
            />
          </Link>
        )}
      </div>
      <div className="py-3 px-2 flex flex-col gap-1.5 bg-neutral-900 border border-neutral-800 border-t-0 rounded-md rounded-tl-none rounded-tr-none">
        <Title className="text-base line-clamp-1 text-white">{product?.name}</Title>
        <p className="text-gray-400">{product?.variantInfo}</p>
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-lg text-white"
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
