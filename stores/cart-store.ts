import { create } from "zustand";
import { persist } from "zustand/middleware";

interface store {
  items: any[];
}

interface actions {
  addItem: (item: any) => void;
  removeItem: (id: number) => void;
}

const useCartStore = create(
  persist<store & actions>(
    (set) => ({
      items: [],
      addItem: (newItem) =>
        set((state) => ({ ...state, items: [...state.items, newItem] })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
    }),
    { name: "cart-store" },
  ),
);

export default useCartStore;
