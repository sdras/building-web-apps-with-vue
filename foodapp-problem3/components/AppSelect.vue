<template>
  <div>
    <label :for="select">Choose a {{ select }}:</label>

    <select @change="$emit('change', $event.target.value)" :name="select" :id="select">
      <option value>--Please choose--</option>
      <option v-for="option in selectoptions" :key="option" :value="option">
        {{
        option
        }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "restaurant",
    },
    selectoptions: {
      type: Array,
      default: () => ["tacos", "pizza", "dim sum"],
    },
  },
};
</script>

<style lang="scss" scoped></style>
