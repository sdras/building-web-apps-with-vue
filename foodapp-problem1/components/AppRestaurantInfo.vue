<template>
  <section>
    <div v-for="store in fooddata" :key="store.id">
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
  computed: {
    fooddata() {
      return this.$store.state.fooddata;
    }
  },
  methods: {
    prices(menuitem) {
      if (menuitem.price) return "$" + menuitem.price.toFixed(2);
      let lowcost = Object.values(menuitem.sizeAndCost[0]);
      return "From $" + lowcost.shift().toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 75px 200px;
}

.row {
  margin: 30px 0 60px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  .fooditems {
    height: 250px;
    border-radius: 5px;
    background-size: cover;
    position: relative;
    box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
  }
}

.iteminfo {
  background: white;
  width: 100%;
  padding: 15px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}
</style>
