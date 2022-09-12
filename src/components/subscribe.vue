<template>
  <div>{{ counterStore.count }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();

    return {
      counterStore,
    };
  },
});
</script>

<style scoped>
</style>