<template>
  <div class="imgcardlist">
    <img-card-left v-for="o in 2" :key="o" :article="article"></img-card-left>
    <img-card-right v-for="p in 2" :key="p" :article="article"></img-card-right>
  </div>
</template>
<script>
import imgcard_left from "@/components/imgcard_left";
import imgcard_right from "@/components/imgcard_right";
export default {
  mounted() {
    [
      this.article.articletime.nowDate,
      this.article.articletime.nowTime,
      this.article.articletime.nowWeek,
    ] = this.$store.getters.setNowTimes;
    console.log(this.requirepath);
  },
  name: "imgcardlist",
  components: {
    "img-card-left": imgcard_left,
    "img-card-right": imgcard_right,
  },
  data() {
    return {
      article: {
        articletitile: "基于 SCSS mixin 的 flex gap polyfill",
        articletime: {
          nowWeek: "",
          nowDate: "",
          nowTime: "",
        },
        articleauthor: "Stomachache",
        articleintroduction:
          "一直以来，习惯在 flex 布局中使用 gap这个属性设置间距，一直以来也都是在最新的 Chrome上调试，所以从来没有想在 flex gap在其他浏览器上存在兼容性问题。最近看了一下文档才反应过来，gap原来只是 grid 布局的属性，虽然近些年来主流浏览器都已经支持了",
        articlecover: "/backgroundimgs/03.png",
      },
    };
  },
  props: {
    requirepath: {
      type: String,
      required: true,
    },
  },
};
</script>
<style socped>
.imgcardlist {
  width: 100%;
}
</style>
