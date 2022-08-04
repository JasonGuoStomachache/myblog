<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <director-header></director-header>
      </el-header>
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
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0;
}
.el-main {
  background-color: white;
  width: 100%;
  margin: 60px 0 0 0;
  padding: 0;
}

.mainbody {
  background-color: antiquewhite;
  margin: 0 25% 0 25%;
  height: 2000px;
  width: 50%;
}
</style>
