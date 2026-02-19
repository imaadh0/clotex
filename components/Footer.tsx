import Link from "next/link";
import ClotexLogo from "./clotex/ClotexLogo";
import SocialMedia from "./new/SocialMedia";
import { customerCareLinks } from "@/constants";
// TEMPORARILY COMMENTED OUT - Sanity
// import { getAllCategories } from "@/sanity/helpers";
import { DUMMY_CATEGORIES } from "@/constants/dummy-data";
import { ArrowRight } from "lucide-react";
// import type { Category } from "@/sanity.types";

const Footer = async () => {
  // TEMPORARILY using dummy data instead of Sanity
  const categories = DUMMY_CATEGORIES;

  return (
    <footer className="bg-clotexDark border-t border-gray-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About Clotex */}
          <div className="space-y-6">
            <ClotexLogo className="mb-4 block" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium men's streetwear redefining urban fashion through minimalist aesthetics and superior quality.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 group"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Collections</h3>
            <ul className="space-y-3">
              {categories && categories.length > 0 ? (
                categories.map((category: any) => (
                  <li key={category.slug?.current || category._id}>
                    <Link
                      href={`/category/${category.slug?.current}`}
                      className="text-gray-400 hover:text-white text-sm font-medium transition-colors inline-block"
                    >
                      {category.title}
                    </Link>
                  </li>
                ))
              ) : (
                <>
                  <li><Link href="/category/new-arrivals" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">New Arrivals</Link></li>
                  <li><Link href="/category/best-sellers" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Best Sellers</Link></li>
                  <li><Link href="/category/accessories" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Accessories</Link></li>
                </>
              )}
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Support</h3>
            <ul className="space-y-3">
              {customerCareLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm font-medium transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Subscribe for exclusive drops and early access.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  required
                  className="w-full px-4 py-3 border border-gray-800 bg-black/50 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-all text-xs tracking-wide"
                />
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-200 text-black px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 uppercase tracking-wide">
          <p>© {new Date().getFullYear()} Clotex. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
