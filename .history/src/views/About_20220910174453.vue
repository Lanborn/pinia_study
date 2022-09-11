<template>
  <div class="about">
    <h1>This is an about page</h1>
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
};
</script>
