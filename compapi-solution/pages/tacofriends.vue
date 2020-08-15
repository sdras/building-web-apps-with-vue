<template>
  <main>
    <h1>Our Taco Friends:</h1>
    <ul>
      <li @click="alertUnit" v-for="friend in listOfFriends" :key="friend">{{ friend}}</li>
    </ul>
    <p>
      <i>Click on a friend!</i>
    </p>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({
      listOfFriends: [
        "Sarah likes all tacos",
        "Brian Holt likes whiskey more than tacos",
        "Shirley Wu likes tacos as much as Wonder Woman",
      ],
    });

    function alertUnit(e: any) {
      alert(e.target.textContent);
    }

    return {
      ...toRefs(state),
      alertUnit,
    };
  },
});
</script>

<style lang="scss" scoped>
ul {
  width: 400px;
}

li {
  text-align: left;
  transition: 0.4s all ease;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
}

i {
  color: #555;
}
</style>
