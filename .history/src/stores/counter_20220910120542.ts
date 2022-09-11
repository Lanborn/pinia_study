import { defineStore } from "pinia";
import { Names } from "./store-name";

export const useCounterStore = defineStore(Names.COUNT, {
  state: () => ({
    count: 0,
  }),
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
  },
  // computed
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return "even";
      return "odd";
    },
    doubleCount: (state) => state.count * 2,
  },
});
