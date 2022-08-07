<template>
  <div class="colume">
    <div class="introduction">
      <el-icon :size="18"><IceTea /></el-icon
      ><span>&nbsp;&nbsp;{{ columetitle }}</span>
    </div>
    <hr style="width: 95%" />
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "homestart",
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
.colume {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
}
.introduction {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  font-size: 18px;
  font-weight: 600;
}
</style>
