<template>
  <div class="index">
    <el-container>
      <span class="logo">Stomachache</span>
      <director-profile></director-profile>
      <director-header></director-header>
      <el-main>
        <side-img></side-img>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import directorprofile from "@/components/directorprofile.vue";
import directorheader from "@/components/directorheader.vue";
import sideimg from "@/components/sideimg.vue";

export default {
  name: "index",
  mounted() {},
  components: {
    "director-profile": directorprofile,
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
<style scoped src="@/assets/css/font.css"></style>
<style scoped>
.index,
.el-container {
  height: 100%;
  width: 100%;
}
.logo {
  position: fixed;
  top: 2%;
  left: 3%;
  z-index: 901;
}
.el-header {
  width: 100%;
  top: 0;
  padding: 0;
  margin: 0;
}
.el-main {
  background-color: antiquewhite;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
