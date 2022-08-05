<template>
  <div class="nav" :class="isshow == true ? 'navBarShowed' : 'navBarHidden'">
    <div class="meet">
      <span class="logo">Stomachache</span>
      <director-colume></director-colume>
      <director-profile></director-profile>
    </div>
  </div>
</template>
<script>
import directorcolume from "../components/directorcolume.vue";
import directorprofile from "../components/directorprofile.vue";
export default {
  name: "directorheader",
  components: {
    "director-colume": directorcolume,
    "director-profile": directorprofile,
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
  height: 60px;
  box-sizing: border-box;
  position: fixed;
}
.meet {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 30px #ababab;
  background-color: #ffffff;
}

.navBarShowed {
  display: block;
  top: 0;
  z-index: 999;
}
.navBarHidden {
  display: none;
  top: 0;
}
.logo {
  font-size: 20px;
  width: 20%;
}
</style>
