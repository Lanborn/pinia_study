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
  props: ["list"],
  setup(props, { emit }) {
    const counterStore = useCounterStore();
    const changeArray1 = () => {
      counterStore.$patch({
        list: props.list,
      });
    };
    const handleChange = () => {
      emit("changeList");
    };
    return {
      counterStore,
      changeArray1,
      handleChange,
    };
  },
});
</script>

<style scoped>
</style>