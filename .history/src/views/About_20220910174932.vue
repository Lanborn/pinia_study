<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <h2>{{ stores.count }}</h2>
      <h2>{{ tripleCounter }}</h2>
    </div>
    <div class="buttons">
      <button @click="stores.decreaseCount()">-</button>
      <button @click="stores.increaseCount()">+</button>
      <button @click="stores.$reset()">reset</button>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
export default {
  setup() {
    const stores = useCounterStore();
    return {
      stores,
    };
  },
  computed: {
    tripleCounter() {
      return this.stores.count * 3;
    },
  },
};
</script>

<style lang="less">
.buttons button {
  font-size: 40px;
  margin: 20px;
}
</style>