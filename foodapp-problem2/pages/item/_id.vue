<template>
  <main class="container"></main>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    currentItem() {
      // more efficient than forEach because we can break
      let result;

      for (let i = 0; i < this.fooddata.length; i++) {
        for (let j = 0; j < this.fooddata[i].menu.length; j++) {
          if (this.fooddata[i].menu[j].id === this.id) {
            result = this.fooddata[i].menu[j];
            break;
          }
        }
      }

      return result;
    }
  },
  methods: {
    addToCart() {}
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
}

.image {
  grid-area: 1 / 1 / 2 / 2;
  background-size: cover;
}
.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}
.options {
  grid-area: 2 / 1 / 3 / 2;
}
</style>
