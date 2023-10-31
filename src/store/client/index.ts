import { create } from "zustand";
import { productsProp } from "../server/interface";

interface storeProp {
  card: productsProp[];
  addToCart: (product: productsProp) => void;
}

export const useStore = create<storeProp>((set) => {
  return {
    card: [],
    addToCart: (product) =>
      set((state) => {
        const card = [...state.card, product];
        console.log({ card });

        product.quantity = 1;
        return { card };
      }),
  };
});
