<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <button @click="tripleCounter">*3</button>
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
