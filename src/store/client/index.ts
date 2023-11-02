import { create } from "zustand";
import { productsProp } from "../server/interface";
import { createJSONStorage, persist } from "zustand/middleware";

interface storeProp {
  card: productsProp[];
  addToCart: (product: productsProp) => void;
  addToQuantity: (id: number) => void;
  removeToQuantity: (id: number) => void;
  removeToCart: (product: productsProp) => void;
}

export const useStore = create(
  persist<storeProp>(
    (set) => {
      return {
        card: [],
        addToCart: (product) =>
          set((state) => {
            const card = [...state.card, product];
            product.quantity = 1;
            return { card };
          }),
        removeToCart: (product) =>
          set((state) => {
            const removeCart = state.card.filter((item) =>
              item.id !== product.id ? { ...item } : null
            );

            return { card: removeCart };
          }),
        addToQuantity: (id) =>
          set((state) => {
            const IncreateQuantity = state.card.map((item) => {
              if (item.id === id) {
                // Increment the quantity of the specific product
                item.quantity += 1;
              }
              return item;
            });

            return { card: IncreateQuantity };
          }),
        removeToQuantity: (id) =>
          set((state) => {
            const removeQuantity = state.card.map((item) => {
              if (item.id === id && item.quantity > 1) {
                item.quantity -= 1;
              }
              return item;
            });
            return { card: removeQuantity };
          }),
      };
    },
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
