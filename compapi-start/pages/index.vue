<template>
  <main>
    <h1>Count:</h1>
    <h3>{{ count }}</h3>
    <button @click="addToCount">Increase Count</button>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const count = ref(0);

    function addToCount() {
      count.value++;
    }

    watchEffect(() => {
      console.log(count.value);
    });

    return {
      count,
      addToCount,
    };
  },
});
</script>
