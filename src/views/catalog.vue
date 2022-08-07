<template>
  <div class="catalog">
    <director-header :isalwaystop="alwaystop"></director-header>
    <page-cover></page-cover>
    <div class="mainbody">
      <colume :columetitle="colume_01"
        ><base-card-list requirepath="nopath"></base-card-list
      ></colume>
    </div>
  </div>
</template>
<script>
import directorheader from "@/components/directorheader.vue";
import pagecover from "@/components/pagecover.vue";
import colume from "@/components/colume.vue";
import basecardlist from "@/components/basecardlist.vue";
export default {
  name: "catalog",
  data() {
    return {
      alwaystop: true,
      colume_01: "文章归档",
    };
  },
  components: {
    "page-cover": pagecover,
    "director-header": directorheader,
    colume,
    "base-card-list": basecardlist,
  },
};
</script>
<style scoped>
.catalog {
  width: 100%;
  height: 100%;
  margin-top: 60px;
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
