<template>
  <div class="catalog">
    <director-header :isalwaystop="alwaystop"></director-header>
    <page-cover></page-cover>
    <div class="mainbody"></div>
  </div>
</template>
<script>
import directorheader from "@/components/directorheader.vue";
import pagecover from "@/components/pagecover.vue";
export default {
  name: "catalog",
  data() {
    return {
      alwaystop: true,
    };
  },
  components: {
    "page-cover": pagecover,
    "director-header": directorheader,
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
  background-color: antiquewhite;
  margin: 0 25% 0 25%;
  height: 2000px;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
