<template>
  <main class="container">
    <div class="restaurantheading">
      <h1>Restaurants</h1>

      <app-select
        @change="selectedCuisine = $event"
        :select="restaurantType"
        :selectoptions="restaurantOptions"
      />
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
      import(/* webpackPrefetch: true */ "@/components/AppRestaurantInfo.vue")
  },
  data() {
    return {
      selectedCuisine: "",
      restaurantType: "cuisine",
      restaurantOptions: ["tacos", "pizza", "dim sum"]
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    filteredRestaurants() {
      if (this.selectedCuisine) {
        return this.fooddata.filter(el => {
          let name = el.name.toLowerCase();
          return name.includes(this.selectedCuisine);
        });
      }
      return this.fooddata;
    }
  }
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
