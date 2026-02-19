// TEMPORARILY MODIFIED - using dummy data instead of Sanity
// Original Sanity code commented out below

// import { client } from "../lib/client";

export const getMyOrders = async (userId: string) => {
  // Original Sanity code:
  // if (!userId) throw new Error("User ID is required");
  // const MY_ORDERS_QUERY = `*[_type == 'order' && clerkUserId == $userId] | order(orderData desc){...,products[]{...,product->}}`;
  // const orders = await client.fetch(MY_ORDERS_QUERY, { userId });
  // return orders || [];

  // Return empty orders for now (dummy mode)
  return [];
};
