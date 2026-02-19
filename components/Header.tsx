import Link from "next/link";
import React from "react";
import Container from "./Container";
// TEMPORARILY COMMENTED OUT - Sanity
// import { getAllCategories } from "@/sanity/helpers";
import { DUMMY_CATEGORIES } from "@/constants/dummy-data";
import HeaderMenu from "./new/HeaderMenu";
import ClotexLogo from "./clotex/ClotexLogo";
import { ListOrdered } from "lucide-react";
import CartIcon from "./new/CartIcon";
import MobileMenu from "./new/MobileMenu";
import SearchBar from "./new/SearchBar";
import UserMenu from "./new/UserMenu";

const Header = async () => {
  // Orders fetching will need to be moved to a client component or handled differently with Firebase
  // For now, we'll pass null and handle it in the client component if possible, 
  // or we can't fetch orders server-side easily without cookies.
  // Let's assume for now we just render the header and orders will be fetched client-side or we'll fix this later.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const orders: any[] = [];
  const categories = DUMMY_CATEGORIES.slice(0, 3);

  return (
    <header className="bg-clotexDark/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 py-4 transition-all duration-300">
      <Container className="flex items-center justify-between gap-4">
        {/* Left: Navigation Menu */}
        <div className="hidden xl:block w-1/3">
          <HeaderMenu categories={categories as any} />
        </div>

        {/* Mobile Menu Trigger (Visible on mobile only) */}
        <div className="xl:hidden w-1/3">
          <MobileMenu categories={categories as any} />
        </div>

        {/* Center: Logo */}
        <div className="w-1/3 flex justify-center">
          <ClotexLogo />
        </div>

        {/* Right: Utility Icons */}
        <div className="w-1/3 flex items-center justify-end gap-6 text-white">
          <SearchBar />

          <CartIcon />

          <Link href={"/orders"} className="hidden md:block group relative hover:text-gray-300 transition-colors">
            <ListOrdered className="w-5 h-5" />
            {orders && orders.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black h-4 w-4 rounded-full text-[10px] font-medium flex items-center justify-center">
                {orders.length}
              </span>
            )}
          </Link>

          <UserMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
