<template>
  <div class="home">
    <div class="forhomeheader">
      <home-header></home-header>
    </div>
    <div class="mainbody">
      <colume :columetitle="colume_1"></colume>
    </div>
  </div>
</template>
<script>
import homeheader from "@/components/homeheader.vue";
import colume from "@/components/colume.vue";
export default {
  name: "home",
  components: {
    "home-header": homeheader,
    colume: colume,
  },
  data() {
    return {
      colume_1: "START:DASH!!",
    };
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.forhomeheader {
  width: 100%;
  height: 100%;
}
.mainbody {
  background-color: white;
  margin: 0 25% 0 25%;
  height: 2000px;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
