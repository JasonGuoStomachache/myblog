<template>
  <div class="directorheader">
    <div class="nav" :class="isshow == true ? 'navBarShowed' : 'navBarHidden'">
      <director-colume></director-colume>
    </div>
  </div>
</template>
<script>
import directorcolume from "@/components/directorcolume.vue";
export default {
  name: "directorheader",
  components: {
    "director-colume": directorcolume,
  },
  data() {
    return {
      isshow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.watchScroll, true);
  },
  methods: {
    watchScroll(e) {
      let scrollY = e.target.scrollTop;
      //  当滚动超过 60 时，实现吸顶效果
      if (scrollY > 60) {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    },
  },
};
</script>
<style scoped>
.nav {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0px 1px 30px #ababab;
  background-color: #ffffff;
}
.directorheader {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
}
.navBarShowed {
  display: block;
  top: 0;
  z-index: 900;
}
.navBarHidden {
  display: none;
  top: 0;
}
</style>
