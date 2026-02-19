import Container from "@/components/Container";
import CategoryProducts from "@/components/new/CategoryProducts";
import Title from "@/components/Title";
// TEMPORARILY MODIFIED - using dummy data instead of Sanity
import { DUMMY_CATEGORIES } from "@/constants/dummy-data";
import React from "react";

const ShopPage = async () => {
  const categories = DUMMY_CATEGORIES;
  const slug = "all"; // Default to "all" for the main shop page

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Container className="py-10">
        <Title className="text-xl text-white">
          Shop:{" "}
          <span className="font-bold text-white capitalize tracking-wide">
            All Streetwear
          </span>
        </Title>

        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <CategoryProducts categories={categories as any} slug={slug} />
      </Container>
    </div>
  );
};

export default ShopPage;
