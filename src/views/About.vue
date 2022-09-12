<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <h2>{{ stores.count }}</h2>
      <h2>{{ tripleCounter }}</h2>
    </div>
    <div class="buttons">
      <button @click="stores.decreaseCount()">-</button>
      <button @click="changeBtn">patchBtn</button>
    </div>
    <list-by-store :list="list" @changeList="changeItem"></list-by-store>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
import ListByStore from "@/components/ListByStore.vue";
export default {
  components: { ListByStore },
  setup() {
    const stores = useCounterStore();
    const list = [2, 3, 4];
    const changeBtn = () => {
      stores.$patch({
        count: stores.count + 1,
      });
    };
    const changeItem = (payload) => {
      if (payload[0] < 1) {
        stores.$patch((state) => {
          state.list[0] = 11;
        });
      } else {
        stores.list = payload;
      }
    };
    stores.$onAction((args) => {
      console.log(args);
    }, true);
    return {
      stores,
      list,
      changeBtn,
      changeItem,
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
