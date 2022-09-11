<template>
  <div class="home">
    <div class="count">{{ stores.count }}</div>
    <div class="count">{{ count }}</div>
    <div class="count">{{ doubleCount }}</div>

    <div class="buttons">
      <button @click="stores.decreaseCount()">-</button>
      <button @click="stores.increaseCount()">+</button>
      <button @click="stores.$reset()">reset</button>
    </div>

    <hr />
    <div>This counter is : {{ stores.oddOrEven }}</div>
    <hr />
    <div>
      <h3>Edit counter:</h3>
      <input v-model="stores.count" type="number" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "Home",
  setup() {
    const stores = useCounterStore();
    const { count, doubleCount } = storeToRefs(stores);
    return {
      count,
      doubleCount,
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
