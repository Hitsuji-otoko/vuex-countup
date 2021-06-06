<template>
  <button @click="minusCounter">-</button>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const counter = useStore();

    return {
      minusCounter: () => counter.dispatch("minusCounter"),
    };
  },
};
</script>