<template>
  <div class="home">
    <div class="count">{{ count }}</div>
    <div class="buttons">
      <button @click="decreaseCount">-</button>
      <button @click="increaseCount">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  name: "Home",
  setup() {
    const stores = useCounterStore();
    let count = ref(stores.count);
    const increaseCount = () => {
      stores.increaseCount();
    };
    const decreaseCount = () => {
      stores.decreaseCount();
    };
    return {
      count,
      increaseCount,
      decreaseCount,
    };
  },
});
</script>

<style lang="less" scoped>
.home {
  .count {
    font-size: 60px;
    margin: 20px;
  }
  .buttons button {
    font-size: 40px;
    margin: 20px;
  }
}
</style>
