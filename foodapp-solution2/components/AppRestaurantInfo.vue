<template>
  <section class="restaurantinfo">
    <div v-for="store in datasource" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time {{ store.deliveryTime }}</p>
      <p>Rating {{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>
      <div class="row">
        <div
          v-for="menuitem in store.menu"
          :key="menuitem.id"
          :style="`background: url(/${menuitem.img}) no-repeat center center`"
          class="fooditems"
        >
          <div class="iteminfo">
            <div class="menuiteminfo">
              <h4>{{ menuitem.item }}</h4>
              <p>{{ prices(menuitem) }}</p>
            </div>
            <nuxt-link :to="`item/${menuitem.id}`">
              <button class="ghost">View Item ></button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    datasource: {
      type: [Array, Object],
    },
  },
  methods: {
    prices(menuitem) {
      return "$" + menuitem.price.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
