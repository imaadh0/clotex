"use client";

import HeroVideo from "@/components/leemart/HeroVideo";
import NewArrivals from "@/components/leemart/NewArrivals";
import IconsCollection from "@/components/leemart/IconsCollection";

export default function Home() {
  return (
    <main className="min-h-screen bg-leemart-dark overflow-x-hidden">
      <HeroVideo />
      <NewArrivals />
      <IconsCollection />
    </main>
  );
}
