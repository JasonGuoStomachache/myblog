<template>
  <div>
    <div
      class="leftsideimg"
      @mouseover="leftshow = true"
      @mouseout="leftshow = false"
    >
      <el-image
        style="width: 100%; height: 100%; opacity: 0.2"
        src="/backgroundimgs/keqing_01.png"
        fit="fill"
        v-show="leftshow"
      />
    </div>

    <div
      class="rightsideimg"
      @mouseover="rightshow = !rightshow"
      @mouseout="rightshow = !rightshow"
    >
      <el-image
        style="width: 100%; height: 100%; opacity: 0.2"
        src="/backgroundimgs/keqing_02.png"
        fit="fill"
        v-show="rightshow"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "sideimg",
  data() {
    return {
      leftshow: false,
      rightshow: false,
    };
  },
};
</script>
<style scoped>
.leftsideimg {
  width: 17%;
  height: 65%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
}
.rightsideimg {
  width: 17%;
  height: 65%;
  position: fixed;
  bottom: 0;
  right: 2%;
  z-index: 5;
}
</style>
