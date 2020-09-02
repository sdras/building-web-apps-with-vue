<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>

      <app-select @change="selectedRestaurant = $event" :selectoptions="restaurantOptions" />
    </div>

    <AppRestaurantInfo :datasource="filteredRestaurants" />
  </main>
</template>

<script>
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";
import AppSelect from "@/components/AppSelect.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppSelect,
    AppRestaurantInfo: () =>
      import(/* webpackPrefetch: true */ "@/components/AppRestaurantInfo.vue"),
  },
  data() {
    return {
      selectedRestaurant: "",
      restaurantOptions: ["tacos", "pizza", "dim sum"],
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    filteredRestaurants() {
      if (this.selectedRestaurant) {
        return this.fooddata.filter((el) => {
          let name = el.name.toLowerCase();
          return name.includes(this.selectedRestaurant);
        });
      }
      return this.fooddata;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
