<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/">Home</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartCount"]),
  },
};
</script>

<style lang="scss" scoped></style>
