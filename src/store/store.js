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
  state: "Georgia",
  titleCharges: null,
  recordingCharges: null,
  sellerCharges: null,

  setName: (type) => set({ name: type }),
  setTransactionType: (type) => set({ transactionType: type }),
  setSaleAmount: (amount) => set({ salesPrice: amount }),
  setLoanAmt: (amount) => set({ loanAmount: amount }),
  setState: (state) => set({ state: state }),
  setTitleCharges: (charges) => set({ titleCharges: charges }),
  setRecordingCharges: (charges) => set({ recordingCharges: charges }),
  setSellerCharges: (charges) => set({ sellerCharges: charges }),
  resetAll: () =>
    set({
      name: "",
      salesPrice: "",
      loanAmount: "",
      transactionType: "Purchase with Financing",
      state: "Georgia",
      titleCharges: null,
      recordingCharges: null,
      sellerCharges: null,
    }),
}));
