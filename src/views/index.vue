<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <myheader></myheader>
      </el-header>
      <el-main>
        <el-image
          style="width: 400px; height: 800px"
          src="/backgroundimgs/keqing_01.png"
          fit="fit"
          class="leftsideimg"
        />
        <div class="mainbody">
          <router-view></router-view>
        </div>
        <el-image
          style="width: 400px; height: 800px"
          src="/backgroundimgs/keqing_02.png"
          :fit="fit"
          class="rightsideimg"
        />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import myheader from "../components/myheader.vue";
export default {
  name: "index",
  mounted() {
    console.log(this.backgroundsrc);
  },
  components: {
    myheader,
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
  background-color: #ffffff;
  height: 80px;
  width: 100%;
  box-shadow: 0px 1px 30px #ababab;
  position: fixed;
  top: 0;
}
.el-main {
  background-color: white;
  width: 100%;
  margin: 80px 0 0 0;
  padding: 0;
}
.leftsideimg {
  position: fixed;
  bottom: 0;
  left: 0;
  opacity: 0.2;
}
.rightsideimg {
  position: fixed;
  bottom: 0;
  right: 20px;
  opacity: 0.2;
}
.mainbody {
  background-color: antiquewhite;
  margin: 0 25% 0 25%;
  height: 2000px;
  width: 50%;
}
</style>
