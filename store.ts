// TEMPORARILY MODIFIED - using DummyProduct instead of Sanity Product
// import { Product } from "./sanity.types";
import { DummyProduct as Product } from "./constants/dummy-data";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product, selectedSize?: string) => void;
  removeItem: (productId: string, selectedSize?: string) => void;
  deleteCartProduct: (productId: string, selectedSize?: string) => void;
  resetCart: () => void;
  getTotalPrice: () => number;
  getSubTotalPrice: () => number;
  getItemCount: (productId: string, selectedSize?: string) => number;
  getGroupedItems: () => CartItem[];
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, selectedSize) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product._id === product._id && item.selectedSize === selectedSize
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product._id === product._id && item.selectedSize === selectedSize
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return { items: [...state.items, { product, quantity: 1, selectedSize }] };
          }
        }),
      removeItem: (productId, selectedSize) =>
        set((state) => ({
          items: state.items.reduce((acc, item) => {
            if (item.product._id === productId && item.selectedSize === selectedSize) {
              if (item.quantity > 1) {
                acc.push({ ...item, quantity: item.quantity - 1 });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, [] as CartItem[]),
        })),
      deleteCartProduct: (productId, selectedSize) =>
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.product._id === productId && item.selectedSize === selectedSize)
          ),
        })),
      resetCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + (item.product.price ?? 0) * item.quantity,
          0
        );
      },
      getSubTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.product.price ?? 0;
          const discount = ((item.product.discount ?? 0) * price) / 100;
          const discountedPrice = price + discount;
          return total + discountedPrice * item.quantity;
        }, 0);
      },
      getItemCount: (productId, selectedSize) => {
        const item = get().items.find(
          (item) => item.product._id === productId && item.selectedSize === selectedSize
        );
        return item ? item.quantity : 0;
      },
      getGroupedItems: () => get().items,
    }),
    { name: "cart-store" }
  )
);

export default useCartStore;
