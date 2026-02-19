import LeeMartLogo from "@/components/leemart/LeeMartLogo";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-[#0a0a0a] relative min-h-screen text-white">
      <div className="h-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-12">
          <div className="text-center">
            <LeeMartLogo className="text-4xl" />

            <h2 className="mt-12 text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight">
              Lost in space?
            </h2>
            <p className="mt-6 text-sm text-neutral-500 uppercase tracking-widest font-bold">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            <Link
              href="/"
              className="w-full h-14 flex items-center justify-center px-4 py-2 border border-white bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Go to LEE MART home
            </Link>
            <Link
              href="/shop"
              className="w-full h-14 flex items-center justify-center px-4 py-2 border border-neutral-800 text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-900 transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
          <div className="mt-12 text-center">
            <p className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">
              Need assistance? Reach out to our{" "}
              <Link
                href="/contact"
                className="text-white underline underline-offset-4 hover:text-neutral-300"
              >
                support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
