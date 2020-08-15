<template>
  <div class="container">
    <AppHeader />
    <AppRestaurantInfo />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";

export default {
  setup() {
    console.log("Foobar");
  },
  components: {
    AppHeader,
    AppRestaurantInfo: () =>
      import(/* webpackPrefetch: true */ "@/components/AppRestaurantInfo.vue")
  },
  computed: {
    fooddata() {
      return this.$store.state.fooddata;
    }
  }
};
</script>

<style></style>
