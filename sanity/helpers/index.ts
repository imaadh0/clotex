// TEMPORARILY MODIFIED - using dummy data instead of Sanity
// Original Sanity code commented out below

import {
  DUMMY_PRODUCTS,
  DUMMY_CATEGORIES,
  getDummyProductBySlug,
  getProductsByDummyCategory,
  type DummyProduct,
  type DummyCategory,
} from "@/constants/dummy-data";

// import { defineQuery } from "next-sanity";
// import { sanityFetch } from "../lib/live";

export const getAllProducts = async (): Promise<DummyProduct[]> => {
  // Original Sanity code:
  // const PRODUCTS_QUERY = defineQuery(`*[_type=="product"] | order(name asc)`);
  // const products = await sanityFetch({ query: PRODUCTS_QUERY });
  // return products.data || [];
  return DUMMY_PRODUCTS;
};

export const getAllCategories = async (quantity?: number): Promise<DummyCategory[]> => {
  // Original Sanity code:
  // const CATEGORIES_QUERY = `*[_type=="category"] | order(name asc)${quantity ? `[0...${quantity}]` : ""}`;
  // const categories = await sanityFetch({ query: CATEGORIES_QUERY });
  // return categories?.data || [];
  if (quantity) {
    return DUMMY_CATEGORIES.slice(0, quantity);
  }
  return DUMMY_CATEGORIES;
};

export const searchProductsByName = async (searchParam: string): Promise<DummyProduct[]> => {
  // Original Sanity code:
  // const PRODUCT_SEARCH_QUERY = defineQuery(`*[_type == "product" && name match $searchParam] | order(name asc)`);
  // const products = await sanityFetch({ query: PRODUCT_SEARCH_QUERY, params: { searchParam } });
  // return products?.data || [];
  const lower = searchParam.toLowerCase();
  return DUMMY_PRODUCTS.filter((p) => p.name.toLowerCase().includes(lower));
};

export const getProductBySlug = async (slug: string): Promise<DummyProduct | null> => {
  // Original Sanity code:
  // const PRODUCT_BY_ID_QUERY = defineQuery(`*[_type == "product" && slug.current == $slug] | order(name asc) [0]`);
  // const product = await sanityFetch({ query: PRODUCT_BY_ID_QUERY, params: { slug } });
  // return product?.data || null;
  return getDummyProductBySlug(slug);
};

export const getProductsByCategory = async (categorySlug: string): Promise<DummyProduct[]> => {
  // Original Sanity code:
  // const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`*[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)`);
  // const products = await sanityFetch({ query: PRODUCT_BY_CATEGORY_QUERY, params: { categorySlug } });
  // return products?.data || [];
  return getProductsByDummyCategory(categorySlug);
};

export const getSale = async () => {
  // Original Sanity code:
  // const SALE_QUERY = defineQuery(`*[_type == 'sale'] | order(name asc)`);
  // const products = await sanityFetch({ query: SALE_QUERY });
  // return products?.data || [];
  return [];
};
