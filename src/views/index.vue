<template>
  <div class="common-layout">
    <el-container>
      <el-header :offset="100">
        <myheader></myheader>
      </el-header>
      <el-main>
        <div class="test" style="height: 2000px">Main</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import myheader from "../components/myheader.vue";
export default {
  name: "index",
  components: {
    myheader,
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
  background-color: FFFFFF;
  height: 80px;
  width: 100%;
  box-shadow: 0px 1px 30px #ababab;
  position: fixed;
  top: 0;
}
.el-main {
  background-color: antiquewhite;
  width: 100%;
  margin: 80px 0 0 0;
}
</style>
