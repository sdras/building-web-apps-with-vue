<template>
  <div class="app">
    <app-menu></app-menu>
    <Nuxt />
  </div>
</template>

<script>
import AppMenu from "@/components/AppMenu.vue";

export default {
  components: {
    AppMenu,
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

button {
  display: inline-block;
  border-radius: 1000px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  background: white;
  margin-top: 10px;
}

button:hover {
  color: #fff;
  background-color: #3b8070;
}

main {
  text-align: center;
  line-height: 2;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
