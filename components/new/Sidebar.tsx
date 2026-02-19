import { X, ChevronRight, ShoppingBag, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import LeeMartLogo from "../leemart/LeeMartLogo";
import Link from "next/link";
import { useOutsideClick } from "@/hooks";
import SocialMedia from "./SocialMedia";
import { FEATURED_CATEGORIES_QUERYResult } from "@/sanity.types";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  categories: FEATURED_CATEGORIES_QUERYResult;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, categories }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) return null;

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "My Orders", href: "/orders" },
    { title: "Contact", href: "/contact" },
  ];

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-md xl:hidden"
            onClick={onClose}
          />

          {/* Main Sidebar Container */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", ease: [0.32, 0.72, 0, 1], duration: 0.5 }}
            ref={sidebarRef}
            className="fixed inset-y-0 left-0 z-50 w-full md:w-[450px] bg-leemart-dark text-white flex flex-col xl:hidden"
          >
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#050505] to-[#050505] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 px-8 py-8 flex items-center justify-between">
              <LeeMartLogo className="scale-110" />
              <button
                onClick={onClose}
                className="group relative p-3 rounded-full overflow-hidden bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                <X className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex-1 flex flex-col px-8 overflow-y-auto hide-scrollbar">
              <nav className="flex flex-col gap-2 mt-8">
                {/* Shop Section - Special Treatment */}
                <div className="mb-6">
                  <button
                    onClick={() => setIsShopOpen(!isShopOpen)}
                    className="group w-full text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-4xl md:text-5xl font-black tracking-tighter uppercase transition-colors duration-300 ${isShopOpen ? "text-white" : "text-neutral-500 group-hover:text-white"}`}>
                        Shop
                      </span>
                      <motion.div
                        animate={{ rotate: isShopOpen ? 90 : 0 }}
                        className="bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                    <div className="h-[1px] w-full bg-neutral-800 group-hover:bg-white/20 transition-colors duration-500" />
                  </button>

                  <AnimatePresence>
                    {isShopOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 py-6 pl-2">
                          <Link
                            href="/shop"
                            onClick={onClose}
                            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group/link"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover/link:bg-white transition-colors" />
                            <span className="text-lg font-medium tracking-wide">All Products</span>
                          </Link>
                          {categories?.map((cat) => (
                            <Link
                              key={cat._id}
                              href={`/category/${cat.slug?.current}`}
                              onClick={onClose}
                              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group/link"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover/link:bg-white transition-colors" />
                              <span className="text-lg font-medium tracking-wide capitalize">{cat.title}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Main Links */}
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group block w-full"
                    >
                      <div className="flex items-center justify-between py-3">
                        <span className={`text-4xl md:text-5xl font-black tracking-tighter uppercase transition-all duration-300 ${pathname === item.href ? "text-white" : "text-neutral-500 hover:text-white"
                          }`}>
                          {item.title}
                        </span>
                        <ArrowRight className="w-6 h-6 -rotate-45 text-neutral-700 group-hover:text-white group-hover:rotate-0 transition-all duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Account / Footer Area */}
              <div className="mt-auto pt-10 pb-8 space-y-8">
                <div className="flex items-center justify-center">
                  <SocialMedia iconClassName="w-10 h-10 border-neutral-800 text-gray-400 hover:text-white hover:bg-neutral-800 transition-all" />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Sidebar;
