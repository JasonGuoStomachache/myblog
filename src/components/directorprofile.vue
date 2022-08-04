<template>
  <div class="profile">
    <div class="left">
      <el-input
        v-model="input"
        v-show="showsearch"
        placeholder="要查点什么吗？"
        class="search"
        size="small"
        clearable
      />
    </div>
    <div class="right">
      <el-icon
        :size="30"
        @click="showsearch = !showsearch"
        :class="{
          isactive: 100 === currentIndex,
          notactive: 100 !== currentIndex,
        }"
        @mouseover="currentIndex = 100"
        @mouseout="currentIndex = 999"
        ><Search
      /></el-icon>

      <el-dropdown
        ><el-icon
          :size="30"
          :class="{
            isactive: 101 === currentIndex,
            notactive: 101 !== currentIndex,
          }"
          @mouseover="currentIndex = 101"
          @mouseout="currentIndex = 999"
          class="el-dropdown-link"
          ><Avatar
        /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "directorprofile",
  data() {
    return {
      currentIndex: 999,
      input: "",
      showsearch: false,
    };
  },
};
</script>
<style scoped>
.isactive {
  color: #f9957e;
}
.notactive {
  color: #7b7b7b;
}
.profile {
  display: flex;
  width: 20%;
  justify-content: space-between;
}
.profile .left {
  display: flex;
  width: 70%;
}
.profile .right {
  display: flex;
  margin-right: 20px;
  width: 25%;
  justify-content: space-between;
}
</style>
