<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.toast {
  background: #a8060e;
  color: white;
  border-radius: 3px;
  padding: 12px 24px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
