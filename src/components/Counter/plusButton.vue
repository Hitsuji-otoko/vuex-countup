<template>
  <button @click="plusCounter">+</button>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const counter = useStore();

    return {
      plusCounter: () => counter.dispatch("plusCounter"),
    };
  },
};
</script>