"use client";

import { AlignLeft } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { FEATURED_CATEGORIES_QUERYResult } from "@/sanity.types";

const MobileMenu = ({ categories }: { categories: FEATURED_CATEGORIES_QUERYResult }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <button onClick={toggleSidebar} className="xl:hidden text-white hover:text-gray-300 transition-colors">
        <AlignLeft className="w-6 h-6" />
      </button>
      <div className="xl:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          categories={categories}
        />
      </div>
    </>
  );
};

export default MobileMenu;
