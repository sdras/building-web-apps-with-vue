<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/">Home</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: 20px 60px;
  background: #082c40;
  color: white;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    li {
      padding-right: 40px;
    }
  }
}
</style>
