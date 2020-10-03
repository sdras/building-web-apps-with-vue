<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
    </div>

    <AppRestaurantInfo />
  </main>
</template>

<script>
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";

export default {
  components: {
    AppRestaurantInfo
  }
};
</script>

<style lang="scss" scoped></style>
