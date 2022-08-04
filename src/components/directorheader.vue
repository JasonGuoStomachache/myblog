<template>
  <div class="meet">
    <span class="logo">Stomachache</span>
    <director-colume></director-colume>
    <director-profile></director-profile>
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
    return {};
  },
};
</script>
<style scoped>
.meet {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 30px #ababab;
  background-color: #ffffff;
}
.logo {
  font-size: 20px;
  width: 20%;
}
</style>
