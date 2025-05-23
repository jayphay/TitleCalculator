import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create((set) => ({
  total: 0,
  hasAdded: 0,
  addToTotalOnce: (amount) =>
    set((state) => {
      if (state.hasAdded < 2) {
        return { total: state.total + amount, hasAdded: state.hasAdded + 1 };
      }
      return state;
    }),

  resetHasAdded: () => set({ hasAdded: 0 }),
  resetTotal: () => set({ total: 0 }),
  transactionType: "Purchase with Financing",
  salesPrice: "",
  loanAmount: "",
  name: "",

  setName: (type) => set({ name: type }),
  setTransactionType: (type) => set({ transactionType: type }),
  setSaleAmount: (amount) => set({ salesPrice: amount }),
  setLoanAmt: (amount) => set({ loanAmount: amount }),
  resetAll: () =>
    set({
      name: "",
      salesPrice: "",
      loanAmount: "",
      transactionType: "Purchase with Financing",
    }),
}));
