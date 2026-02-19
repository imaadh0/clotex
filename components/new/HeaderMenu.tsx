"use client";
import { FEATURED_CATEGORIES_QUERYResult } from "@/sanity.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const HeaderMenu = ({ categories }: { categories: FEATURED_CATEGORIES_QUERYResult }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="hidden xl:inline-flex items-center gap-8 text-sm font-bold text-gray-300 tracking-widest uppercase">
      <Link
        href={"/"}
        className={`hover:text-white transition-colors duration-300 ${isActive("/") ? "text-white" : ""
          }`}
      >
        Home
      </Link>

      <div className="relative group">
        <button
          className={`flex items-center gap-1 hover:text-white transition-colors duration-300 ${pathname.startsWith("/shop") || pathname.startsWith("/category")
            ? "text-white"
            : ""
            }`}
        >
          SHOP
          <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
        </button>

        <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
          <div className="bg-clotexGray border border-gray-800 p-4 min-w-[200px] flex flex-col gap-2 shadow-2xl">
            <Link
              href="/shop"
              className="px-4 py-2 hover:bg-white hover:text-black rounded-sm text-gray-300 transition-colors normal-case text-xs font-bold tracking-wider"
            >
              All Products
            </Link>
            {categories?.map((category) => (
              <Link
                key={category?._id}
                href={`/category/${category?.slug?.current}`}
                className="px-4 py-2 hover:bg-white hover:text-black rounded-sm text-gray-300 transition-colors capitalize text-xs font-bold tracking-wider"
              >
                {category?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link
        href={"/about"}
        className={`hover:text-white transition-colors duration-300 ${isActive("/about") ? "text-white" : ""
          }`}
      >
        About
      </Link>

      <Link
        href={"/contact"}
        className={`hover:text-white transition-colors duration-300 ${isActive("/contact") ? "text-white" : ""
          }`}
      >
        Contact
      </Link>
    </div>
  );
};

export default HeaderMenu;
