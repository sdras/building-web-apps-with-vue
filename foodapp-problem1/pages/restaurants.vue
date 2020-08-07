<template>
  <div>
    <h1>Restaurants</h1>
    <AppRestaurantInfo />
  </div>
</template>

<script>
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";

export default {
  components: {
    AppRestaurantInfo
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 100px 0 0 100px;
}
</style>
