<template>
  <div class="counter">
    <h2>カウントアップテスト</h2>
    <minusButton />
    {{ count }}
    <plusButton />
    <hr />
    <button @click="startTimer()" v-if="!isTimerOn">▶︎</button> |
    <button @click="stopTimer()" v-if="isTimerOn">■</button>
    <div v-if="error">
      {{ error.message }}
    </div>
    <hr />
  </div>
</template>

<script>
import { computed, ref, onErrorCaptured } from "vue";
import { useStore } from "vuex";
import plusButton from "@/components/Counter/plusButton.vue";
import minusButton from "@/components/Counter/minusButton.vue";

export default {
  name: "Counter",

  components: {
    plusButton,
    minusButton,
  },

  setup() {
    const counter = useStore();
    const count = computed(
      () => counter.state.count.value
      // mapGetters(["getCount"])
    );

    const error = ref(null);

    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });

    let isTimerOn = computed(() => counter.state.count.timerOn);

    const startTimer = () => {
      counter.dispatch("startTimer");
      isTimerOn = counter.state.count.timerOn;
    };

    const stopTimer = () => {
      counter.dispatch("stopTimer");
      isTimerOn = counter.state.count.timerOn;
    };

    return {
      count,
      error,
      isTimerOn,
      startTimer,
      stopTimer,
    };
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
