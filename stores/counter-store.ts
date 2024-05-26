import { create } from 'zustand';

type State = {
  counter: number;
  incrementCount: () => void;
  decrementCount: () => void;
};

export const counterStore = create<State>((set) => ({
  counter: 0,
  incrementCount: () => set(({ counter }) => ({ counter: counter + 1 })),
  decrementCount: () => set(({ counter }) => ({ counter: counter - 1 })),
}));
