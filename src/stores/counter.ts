import { defineStore } from "pinia";
import { Names } from "./enums/store-name";

export const useCounterStore = defineStore(Names.COUNT, {
  state: () => ({
    count: 0,
    list: [1, 2, 3],
  }),
  actions: {
    increaseCount(num?: number) {
      console.log(num);
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
    // 这里需要我们自己添加类型（在 JS 中使用 JSDoc）。 我们还可以
    // 使用它来记录 getter
    /**
     * 返回计数器值乘以二加一。
     *
     * @returns {number}
     */
    doubleCountPlusOne(): number {
      // 自动完成 ✨
      return this.doubleCount + 1;
    },
  },
});
