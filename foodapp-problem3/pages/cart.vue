<template>
  <main class="container">
    <h2>Your Cart</h2>
    <AppEmptyCart />

    <section v-if="cart.length">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Add Ons</th>
            <th>Amount</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>
              {{ item.item }}
              <span v-if="item.options">- {{ item.options }}</span>
            </td>
            <td>
              <span v-if="item.addOns && item.addOns.length">
                <span v-for="addon in item.addOns" :key="addon" class="comma">{{ addon }}</span>
              </span>
              <span v-else>&mdash;</span>
            </td>
            <td>{{ item.count }}</td>
            <td>{{ item.combinedPrice }}</td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td class="total">Total: ${{ totalPrice.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import AppEmptyCart from "@/components/AppEmptyCart.vue";

export default {
  components: {
    AppEmptyCart,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 100px;
  max-width: 1000px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}

.total {
  font-weight: bold;
}

.emptycart {
  text-align: center;
  line-height: 2;
}
</style>
