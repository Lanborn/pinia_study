<template>
  <div>
    <ol class="list">
      <li v-for="(item, index) in counterStore.list" :key="index" class="item">
        {{ item }}
      </li>
    </ol>
    <button @click="handleChange">changeList</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  emits: ["changeList"],
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