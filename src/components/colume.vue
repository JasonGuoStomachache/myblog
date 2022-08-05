<template>
  <div class="colume">
    <div class="introduction">
      <el-icon :size="20"><IceTea /></el-icon><span>{{ columetitle }}</span>
    </div>
    <hr style="width: 95%" />
    <img-card v-for="o in 4"></img-card>
  </div>
</template>
<script>
import imgcard from "@/components/imgcard";
export default {
  name: "homestart",
  components: {
    "img-card": imgcard,
  },
  props: {
    columetitle: {
      type: String,
      required: true,
      default: "enter name please!",
    },
  },
};
</script>
<style scoped src="@/assets/css/font.css"></style>
<style scoped>
.introduction {
  text-align: left;
  margin: 10px;
  font-size: 18px;
  font-weight: 600;
}
.colume {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
