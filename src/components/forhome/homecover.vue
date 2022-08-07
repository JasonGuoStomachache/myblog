<template>
  <div
    class="homeheader"
    :style="{
      backgroundImage:
        'linear-gradient(to top, rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.1)),url(' +
        imgsrc +
        ')',
    }"
  >
    <div id="logo">Stomachache</div>
  </div>
</template>
<script>
export default {
  name: "homeheader",
  data() {
    return {
      imgsrc: "/backgroundimgs/01.png",
    };
  },
};
</script>
<style scoped>
.homeheader {
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
