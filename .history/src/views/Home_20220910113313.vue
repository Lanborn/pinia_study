<template>
  <div class="home">
    <div class="count">0</div>
    <div class="buttons">
      <button>-</button>
      <button>+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  name: "Home",
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
