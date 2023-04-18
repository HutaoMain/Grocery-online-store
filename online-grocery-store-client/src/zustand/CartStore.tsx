import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  // add category here
}

interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem, quantity: number) => void;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
}

export const useCartStore = create<CartStore>(
  persist(
    (set) => ({
      items: [],
      total: 0,
      addItem: (item: CartItem, quantity: number = 1) => {
        set((state: any) => {
          const index = state.items.findIndex(
            (i: CartItem) => i.id === item.id
          );
          if (index === -1) {
            // Item not in cart yet, add it as a new item
            return {
              items: [...state.items, { ...item, quantity }],
              total: state.total + item.price * quantity,
            };
          } else {
            // Item already in cart, update its quantity
            const newItems = [...state.items];
            newItems[index].quantity += quantity;
            return {
              items: newItems,
              total: state.total + item.price * quantity,
            };
          }
        });
      },
      // increasing the product
      // increasing the product
      increaseItem: (id: number) => {
        set((state: any) => {
          const item = state.items.find((item: any) => item.id === id)!;
          return {
            items: state.items.map((item: any) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
            total: state.total + item.price,
          };
        });
      },
      decreaseItem: (id: number) => {
        set((state: any) => {
          const item = state.items.find((item: any) => item.id === id)!;
          const newItems =
            item.quantity === 1
              ? state.items.filter((item: any) => item.id !== id)
              : state.items.map((item: any) =>
                  item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                );
          return {
            items: newItems,
            total: state.total - item.price,
          };
        });
      },
      removeItem: (id: number) => {
        set((state: any) => {
          const item = state.items.find((item: any) => item.id === id)!;
          return {
            items: state.items.filter((item: any) => item.id !== id),
            total: state.total - item.price * item.quantity,
          };
        });
      },
    }),
    { name: "cart-storage" }
  ) as any
);
