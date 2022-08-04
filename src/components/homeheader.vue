<template>
  <div class="homeheader">
    <div id="logo">Stomachache</div>
  </div>
</template>
<script>
export default {
  name: "homeheader",
};
</script>
<style scoped>
.homeheader {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    ),
    url(../../public/backgroundimgs/01.png);
  z-index: 10;
}
</style>
