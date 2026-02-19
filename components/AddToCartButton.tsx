"use client";
import { Product } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PriceFormatter from "./PriceFormatter";
import { Button } from "./ui/button";
import useCartStore from "@/store";
import QuantityButtons from "./QuantityButtons";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
import { FaOpencart } from "react-icons/fa";

interface Props {
  product: Product;
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
}

const AddToCartButton = ({ product, className, iconClassName, showIcon = true }: Props) => {
  const { addItem, getItemCount } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full h-full">
      {itemCount ? (
        <div className="text-sm w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Quantity</span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t border-neutral-800 pt-2">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter
              amount={product?.price ? product.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={() => {
            addItem(product);
            toast.success(
              `${product?.name?.substring(0, 12)}... added successfully!`
            );
          }}
          disabled={isOutOfStock}
          className={twMerge(
            "bg-[#f7f7f7] text-black w-full py-4 border border-darkColor/30 rounded-md hover:bg-darkColor hover:text-white hoverEffect disabled:bg-darkColor/10 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2",
            className
          )}
        >
          <span>Add to cart</span>
          {showIcon && <FaOpencart className={twMerge("w-5 h-5", iconClassName)} />}
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
