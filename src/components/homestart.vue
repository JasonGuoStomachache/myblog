<template>
  <div class="homestart">
    <div class="introduction">
      <el-icon :size="20"><IceTea /></el-icon><span>{{ columetitle }}</span>
    </div>
    <hr style="width: 95%" />
    <base-card v-for="o in 4"></base-card>
  </div>
</template>
<script>
import basecard from "@/components/basecard";
export default {
  name: "homestart",
  components: {
    "base-card": basecard,
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
.homestart {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
