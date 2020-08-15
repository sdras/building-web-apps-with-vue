<template>
  <main class="container">
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
    AppRestaurantInfo: () =>
      import(/* webpackPrefetch: true */ "@/components/AppRestaurantInfo.vue"),
  },
};
</script>

<style lang="scss" scoped>
.restaurantheading {
  margin: 100px 0 20px 200px;
  display: flex;
  align-items: center;
}

h1 {
  margin-right: 40px;
}

.filter {
  padding-right: 200px;
}
</style>
