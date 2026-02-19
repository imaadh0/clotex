"use client";

import HeroVideo from "@/components/clotex/HeroVideo";
import NewArrivals from "@/components/clotex/NewArrivals";
import IconsCollection from "@/components/clotex/IconsCollection";

export default function Home() {
  return (
    <main className="min-h-screen bg-clotexDark overflow-x-hidden">
      <HeroVideo />
      <NewArrivals />
      <IconsCollection />
    </main>
  );
}
