<template>
  <div class="sideimg">
    <div
      class="leftsideimg"
      @mouseover="leftshow = true"
      @mouseout="leftshow = false"
    >
      <el-image
        style="width: 100%; height: 100%; opacity: 0.2"
        src="/backgroundimgs/keqing_01.png"
        fit="fill"
        v-show="leftshow && ScrollShow"
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
        v-show="rightshow && ScrollShow"
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
      ScrollShow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.sideimgwatchScroll, true);
  },
  methods: {
    sideimgwatchScroll(e) {
      let sideScrollY = e.target.scrollTop;
      //  当滚动超过 60 时，实现吸顶效果
      if (sideScrollY > 800) {
        this.ScrollShow = true;
      } else {
        this.ScrollShow = false;
      }
    },
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
}
.rightsideimg {
  width: 17%;
  height: 65%;
  position: fixed;
  bottom: 0;
  right: 2%;
}
</style>
