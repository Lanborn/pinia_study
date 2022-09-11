<template>
  <div class="home">
    <div class="count">{{ stores.count }}</div>
    <div class="buttons">
      <button @click="stores.decreaseCount()">-</button>
      <button @click="stores.increaseCount()">+</button>
    </div>

    <hr />
    <div>This counter is : {{ stores.oddOrEven }}</div>
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
    return {
      count,
      stores,
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
