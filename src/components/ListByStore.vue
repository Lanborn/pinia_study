<template>
  <div>
    <ol class="list">
      <li v-for="(item, index) in counterStore.list" :key="index" class="item">
        {{ item }}
      </li>
    </ol>
    <div class="double">
      {{ counterStore.doubleCountPlusOne }}
    </div>
    <button @click="handleChange">changeList</button>
    <button @click="changeArray1">changeArray1</button>
    <hr />
    <subscribe></subscribe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/counter";
import Subscribe from "./subscribe.vue";

export default defineComponent({
  // emits: ["changeList"],
  components: {
    Subscribe,
  },
  emits: {
    changeList: (payload: Array<number>) => {
      if (payload.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  props: ["list"],
  setup(props, { emit }) {
    const counterStore = useCounterStore();
    const changeArray1 = () => {
      counterStore.$patch({
        list: props.list,
      });
    };
    const arr = [2, 2, 3];
    const handleChange = () => {
      emit("changeList", arr);
    };
    counterStore.$subscribe(
      (args, state) => {
        console.log("args ===> ", args);
        console.log("state ====>", state);
      },
      {
        detached: true,
      }
    );
    return {
      counterStore,
      changeArray1,
      handleChange,
    };
  },
});
</script>

<style scoped></style>