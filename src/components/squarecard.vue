<template>
  <div
    class="squarecard"
    :style="{
      backgroundImage: 'url(' + info.imgsrc + ')',
    }"
  ></div>
</template>
<script>
export default {
  name: "squarecard",
  props: {
    info: {
      type: Object,
      required: true,
    },
    divheight: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.squarecard {
  width: v-bind(divheight);
  height: v-bind(divheight);
  margin: 20px 2%;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
