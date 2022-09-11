<template>
  <div>
    <ol class="list">
      <li class="item"></li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();
    const changeArray1 = () => {
      counterStore.$patch({
        list: [2, 3, 4],
      });
    };
    return {
      counterStore,
      changeArray1,
    };
  },
});
</script>

<style scoped>
</style>