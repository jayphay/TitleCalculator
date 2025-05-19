import { create } from 'zustand';

export const useStore = create(set => ({
  total: 0,
  hasAdded: 0,
  addToTotalOnce: (amount) =>
    set(state => {
      if (state.hasAdded < 2) {
        return { total: state.total + amount, hasAdded: state.hasAdded + 1 };
      }
      return state;
    }),
    resetHasAdded: () => set({hasAdded: 0}),
    resetTotal: () => set({total: 0}),
}));