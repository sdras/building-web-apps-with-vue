<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 81.5 89.3"
    width="40"
    height="40"
    aria-labelledby="logotitle"
    role="presentation"
  >
    <title id="logotitle">Logo of plate with fork and knife</title>
    <g id="utensils">
      <path
        d="M67.5,79.2V73.4h0V32.6a2,2,0,0,0-2.1-2,6.6,6.6,0,0,0-4.9,2.2c-7.1,7.1-6.9,31.5-6.8,34.3v2h9.7v8.7h0v7.4h0v8.1a2,2,0,0,0,2,2,2,2,0,0,0,2.1-2V79.2Z"
        transform="translate(-10.1 -6.1)"
      />
      <path
        d="M44.5,90.2,44,82.7h0V79.6h0l-.2-2.2h0V74.3h0l-.9-15.5a8.9,8.9,0,0,0,6.7-8.7V31.8a1.2,1.2,0,0,0-1.2-1.2A1.2,1.2,0,0,0,47,31.8V50.1H44.4V31.8A1.3,1.3,0,0,0,43,30.5a1.3,1.3,0,0,0-1.3,1.3V50.1H39.1V31.8a1.3,1.3,0,0,0-1.4-1.3,1.3,1.3,0,0,0-1.3,1.3V50.1H33.7V31.8a1.1,1.1,0,0,0-1.1-1.2,1.2,1.2,0,0,0-1.2,1.2V50.1a8.9,8.9,0,0,0,6.7,8.7l-.8,13.3L37,77.4h0v3.2h0l-.3,4.1h0l-.4,8.1c0,1.4,3,2.6,4.2,2.6s4.2-1.2,4.2-2.6"
        transform="translate(-10.1 -6.1)"
      />
    </g>
    <g id="circles">
      <circle class="cls-1" cx="40.8" cy="40.8" r="33.5" />
      <circle class="cls-2" cx="40.8" cy="40.8" r="38.8" />
    </g>
  </svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#utensils {
  fill: white;
}

.cls-1,
.cls-2 {
  fill: none;
  stroke: white;
  stroke-miterlimit: 10;
}

.cls-1 {
  stroke-width: 2px;
}

.cls-2 {
  stroke-width: 4px;
}

@media screen and (max-width: 600px) {
  #circles {
    display: none;
  }
}
</style>
