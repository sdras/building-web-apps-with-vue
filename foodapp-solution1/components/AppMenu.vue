<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/restaurants">Restaurants</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import AppLogo from "@/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  },
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>

<style lang="scss" scoped></style>
