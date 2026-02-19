import Container from "@/components/Container";
import CategoryProducts from "@/components/new/CategoryProducts";
import Title from "@/components/Title";
// TEMPORARILY MODIFIED - using dummy data instead of Sanity
// import { getAllCategories } from "@/sanity/helpers";
import { DUMMY_CATEGORIES } from "@/constants/dummy-data";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  // Original: const categories = await getAllCategories();
  const categories = DUMMY_CATEGORIES;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Container className="py-10">
        <Title className="text-xl text-white">
          Products by Category:{" "}
          <span className="font-bold text-white capitalize tracking-wide">
            {slug && slug}
          </span>
        </Title>

        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <CategoryProducts categories={categories as any} slug={slug} />
      </Container>
    </div>
  );
};

export default CategoryPage;
