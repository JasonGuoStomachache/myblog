<template>
  <div class="rowcardlist">
    <square-card
      v-for="(o, index) in info"
      :key="index"
      :divheight="divheight"
      :info="o"
    ></square-card>
  </div>
</template>
<script>
import squarecard from "@/components/squarecard.vue";
export default {
  name: "rowcardlist",
  components: {
    "square-card": squarecard,
  },
  data() {
    return {
      info: [
        {
          name: "极客",
          linkto: "/geek",
          imgsrc: "/backgroundimgs/geek.png",
          id: 0,
        },
        {
          name: "文摘",
          linkto: "/bookreview",
          imgsrc: "/backgroundimgs/geek.png",
          id: 1,
        },
        {
          name: "影评",
          linkto: "/filmreview",
          imgsrc: "/backgroundimgs/geek.png",
          id: 2,
        },
        {
          name: "随想",
          linkto: "/comprehension",
          imgsrc: "/backgroundimgs/geek.png",
          id: 3,
        },
        {
          name: "笔记",
          linkto: "/notes",
          imgsrc: "/backgroundimgs/geek.png",
          id: 4,
        },
      ],
    };
  },
  props: {
    requirepath: {
      type: String,
      required: true,
    },
    divheight: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lscoped>
.rowcardlist {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
