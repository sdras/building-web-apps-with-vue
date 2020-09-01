<template>
  <main class="cart container">
    <h2>Your Cart</h2>

    <section>
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
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
