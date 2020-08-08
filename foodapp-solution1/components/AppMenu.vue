<template>
  <nav>
    <ul>
      <li><nuxt-link exact to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
      <li><nuxt-link to="/cart">Cart</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: 20px 40px;
  background: #082c40;
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  li {
    padding-right: 40px;
  }
}
</style>
