import { create } from "zustand";
import { productsProp } from "../server/interface";

interface storeProp {
  card: productsProp[];
  addToCart: (product: productsProp) => void;
  addToQuantity: (id: number) => void;
  removeToQuantity: (id: number) => void;
}

export const useStore = create<storeProp>((set) => {
  return {
    card: [],
    addToCart: (product) =>
      set((state) => {
        const card = [...state.card, product];
       product.quantity = 1
        return { card };
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

        return { card : IncreateQuantity };
      }),
      removeToQuantity : (id) => set((state) => {
        const removeQuantity = state.card.map(item => {
          if(item.id === id && item.quantity > 1){
            item.quantity -= 1
          }
          return item
        })
        return {card : removeQuantity}
      } )
  };
});
