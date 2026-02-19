import ProductInfo from "@/components/new/ProductInfo";
import Container from "@/components/Container";
import ImageView from "@/components/new/ImageView";
import PriceView from "@/components/PriceView";
import ProductCharacteristics from "@/components/ProductCharacteristics";
import { getProductBySlug } from "@/sanity/helpers";
import { Heart } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

import { TbTruckDelivery } from "react-icons/tb";
import { PortableText } from "@portabletext/react";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-20 pb-20">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column: Image Gallery */}
          <div className="w-full">
            {product?.images && <ImageView images={product?.images} />}
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col gap-8">

            {/* Header */}
            <div>
              <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">New Arrival</p>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
                {product?.name}
              </h1>
              <PriceView
                price={product?.price}
                discount={product?.discount}
                className="text-2xl font-medium tracking-wide"
              />
            </div>

            {/* Product Info (Size Selection & Actions) */}
            <ProductInfo product={product as any} />


            {/* Description */}
            <div className="border-t border-neutral-800 pt-8 mt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Description</h3>
              {product?.description && (
                <div className="text-neutral-400 leading-relaxed text-sm font-light space-y-4">
                  <PortableText value={product.description} />
                </div>
              )}
            </div>

            {/* Exchange Policy Alert */}
            <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg flex gap-4">
              <div className="bg-neutral-800 rounded-full p-1 h-fit">
                <FaRegQuestionCircle className="text-neutral-400 w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-1">Exchange Policy</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">No refunds. Exchanges allowed within 7 days for size issues. Item must be unworn and in original packaging.</p>
              </div>
            </div>

            {/* Metadata / Icons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-neutral-500">
                <TbTruckDelivery className="text-lg" />
                <span className="text-xs font-bold uppercase tracking-wider">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-500">
                <div className="w-4 h-4 border border-current flex items-center justify-center rounded-full text-[10px] font-serif">100%</div>
                <span className="text-xs font-bold uppercase tracking-wider">100% Cotton</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-500">
                <div className="w-4 h-4 bg-current rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">Secure Payment</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-500">
                <Heart className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Limited Edition</span>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
