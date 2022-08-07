<template>
  <div class="home">
    <director-header :isalwaystop="alwaystop"></director-header>
    <div class="forhomeheader">
      <home-cover></home-cover>
    </div>
    <div class="mainbody">
      <colume :columetitle="colume_1"
        ><article-list requirepath="nopath"></article-list
      ></colume>
    </div>
  </div>
</template>
<script>
import directorheader from "@/components/directorheader.vue";
import articlelist from "@/components/articlelist.vue";
import homecover from "@/components/forhome/homecover.vue";
import colume from "@/components/colume.vue";
export default {
  name: "home",
  components: {
    "director-header": directorheader,
    "home-cover": homecover,
    colume: colume,
    "article-list": articlelist,
  },
  data() {
    return {
      colume_1: "START:DASH!!",
      alwaystop: false,
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
