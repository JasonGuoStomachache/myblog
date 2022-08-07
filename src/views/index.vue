<template>
  <div class="index">
    <el-container>
      <logo></logo>
      <director-profile></director-profile>
      <el-main>
        <!-- <side-img></side-img> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import directorprofile from "@/components/directorprofile.vue";

import sideimg from "@/components/sideimg.vue";
import logo from "@/components/logo";

export default {
  name: "index",
  mounted() {},
  components: {
    "director-profile": directorprofile,
    "side-img": sideimg,
    logo: logo,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.index,
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
