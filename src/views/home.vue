<template>
  <div class="home">
    <div class="forhomeheader">
      <home-header></home-header>
    </div>
    <div class="mainbody">
      <home-start :columetitle="colume_1"></home-start>
    </div>
  </div>
</template>
<script>
import homeheader from "../components/homeheader.vue";
import homestart from "../components/homestart.vue";
export default {
  name: "home",
  components: {
    "home-header": homeheader,
    "home-start": homestart,
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
  background-color: antiquewhite;
  margin: 0 25% 0 25%;
  height: 2000px;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
