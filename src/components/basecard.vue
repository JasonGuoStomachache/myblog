<template>
  <div class="basecard">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "basecard",
};
</script>
<style scoped>
.basecard {
  display: flex;
  align-items: center;
  width: 94%;
  margin: 20px 3%;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}
</style>
