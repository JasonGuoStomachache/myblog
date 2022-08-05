<template>
  <div class="common-layout">
    <el-container>
      <director-header></director-header>
      <el-main>
        <side-img></side-img>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import directorheader from "../components/directorheader.vue";
import sideimg from "../components/sideimg.vue";

export default {
  name: "index",
  mounted() {},
  components: {
    "director-header": directorheader,
    "side-img": sideimg,
  },
  data() {
    return {
      // backgroundsrc: "/public/backgroundimgs/03.png",
    };
  },
};
</script>
<style scoped>
.common-layout,
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  width: 100%;
  top: 0;
  padding: 0;
  margin: 0;
}
.el-main {
  background-color: white;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
