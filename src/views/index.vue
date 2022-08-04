<template>
  <div class="common-layout">
    <el-container>
      <director-header></director-header>
      <el-main>
        <side-img></side-img>
        <div class="forhomeheader">
          <home-header></home-header>
        </div>
        <div class="mainbody">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import directorheader from "../components/directorheader.vue";
import sideimg from "../components/sideimg.vue";
import homeheader from "../components/homeheader.vue";

export default {
  name: "index",
  mounted() {},
  components: {
    "director-header": directorheader,
    "side-img": sideimg,
    "home-header": homeheader,
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
.el-container,
.forsideimg,
.forhomeheader {
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

.mainbody {
  background-color: antiquewhite;
  margin: 0 25% 0 25%;
  height: 2000px;
  width: 50%;
}
</style>
